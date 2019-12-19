
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function svg_element(name) {
        return document.createElementNS('http://www.w3.org/2000/svg', name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function set_custom_element_data(node, prop, value) {
        if (prop in node) {
            node[prop] = value;
        }
        else {
            attr(node, prop, value);
        }
    }
    function to_number(value) {
        return value === '' ? undefined : +value;
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_input_value(input, value) {
        if (value != null || input.value) {
            input.value = value;
        }
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error(`Function called outside component initialization`);
        return current_component;
    }
    function beforeUpdate(fn) {
        get_current_component().$$.before_update.push(fn);
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    function flush() {
        const seen_callbacks = new Set();
        do {
            // first, call beforeUpdate functions
            // and update components
            while (dirty_components.length) {
                const component = dirty_components.shift();
                set_current_component(component);
                update(component.$$);
            }
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    callback();
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            $$.fragment && $$.fragment.p($$.ctx, $$.dirty);
            $$.dirty = [-1];
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const prop_values = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, prop_values, (i, ret, value = ret) => {
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if ($$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(children(options.target));
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set() {
            // overridden by instance, if it has props
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, detail));
    }
    function append_dev(target, node) {
        dispatch_dev("SvelteDOMInsert", { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev("SvelteDOMInsert", { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev("SvelteDOMRemove", { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
        else
            dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
    }
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error(`'target' is a required option`);
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn(`Component was already destroyed`); // eslint-disable-line no-console
            };
        }
    }

    function CheckCompatibility(){
        if(navigator.mediaDevices == undefined || navigator.mediaDevices.enumerateDevices == undefined || navigator.mediaDevices.getUserMedia == undefined){
            return false;
        }

        return true
    }

    function ReloadVideo(){
        const constraints = {
            audio: true,
            video: {facingMode: {exact: "environment"}}
        };

        navigator.mediaDevices.getUserMedia(constraints).then(function(stream){
            const videoEl = document.getElementsByTagName('video');
            videoEl.srcObject = stream;
        }).catch(function(error){
            console.log(error);
        });
    }

    /* src\components\widgets\Video.svelte generated by Svelte v3.16.4 */

    const file = "src\\components\\widgets\\Video.svelte";

    // (90:0) {#if volumeToggle}
    function create_if_block_1(ctx) {
    	let input;
    	let dispose;

    	const block = {
    		c: function create() {
    			input = element("input");
    			attr_dev(input, "type", "range");
    			attr_dev(input, "id", "volume-range");
    			attr_dev(input, "class", "range vertical-heighest-first round svelte-uryj0d");
    			add_location(input, file, 90, 0, 3940);

    			dispose = [
    				listen_dev(input, "change", /*input_change_input_handler*/ ctx[10]),
    				listen_dev(input, "input", /*input_change_input_handler*/ ctx[10]),
    				listen_dev(input, "change", /*changeVolume*/ ctx[7], false, false, false),
    				listen_dev(input, "blur", /*blur_handler*/ ctx[11], false, false, false)
    			];
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, input, anchor);
    			set_input_value(input, /*volumeValue*/ ctx[5]);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*volumeValue*/ 32) {
    				set_input_value(input, /*volumeValue*/ ctx[5]);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(input);
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(90:0) {#if volumeToggle}",
    		ctx
    	});

    	return block;
    }

    // (98:8) {:else}
    function create_else_block(ctx) {
    	let svg;
    	let circle;
    	let rect0;
    	let rect1;

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			circle = svg_element("circle");
    			rect0 = svg_element("rect");
    			rect1 = svg_element("rect");
    			attr_dev(circle, "cx", "30");
    			attr_dev(circle, "cy", "30");
    			attr_dev(circle, "r", "29.5");
    			attr_dev(circle, "fill", "#C4C4C4");
    			attr_dev(circle, "stroke", "white");
    			add_location(circle, file, 99, 8, 4522);
    			attr_dev(rect0, "x", "21");
    			attr_dev(rect0, "y", "16");
    			attr_dev(rect0, "width", "5");
    			attr_dev(rect0, "height", "26");
    			attr_dev(rect0, "fill", "#161616");
    			add_location(rect0, file, 100, 8, 4596);
    			attr_dev(rect1, "x", "34");
    			attr_dev(rect1, "y", "16");
    			attr_dev(rect1, "width", "5");
    			attr_dev(rect1, "height", "26");
    			attr_dev(rect1, "fill", "#161616");
    			add_location(rect1, file, 101, 8, 4664);
    			attr_dev(svg, "class", "icon svelte-uryj0d");
    			attr_dev(svg, "viewBox", "0 0 60 60");
    			attr_dev(svg, "fill", "none");
    			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
    			add_location(svg, file, 98, 8, 4427);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, circle);
    			append_dev(svg, rect0);
    			append_dev(svg, rect1);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block.name,
    		type: "else",
    		source: "(98:8) {:else}",
    		ctx
    	});

    	return block;
    }

    // (96:4) {#if !isPlaying}
    function create_if_block(ctx) {
    	let svg;
    	let circle;
    	let path;

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			circle = svg_element("circle");
    			path = svg_element("path");
    			attr_dev(circle, "cx", "30");
    			attr_dev(circle, "cy", "30");
    			attr_dev(circle, "r", "29.5");
    			attr_dev(circle, "fill", "#C4C4C4");
    			attr_dev(circle, "stroke", "#fff");
    			add_location(circle, file, 96, 93, 4270);
    			attr_dev(path, "d", "M45 30L22.5 42.9904V17.0096L45 30z");
    			attr_dev(path, "fill", "#161616");
    			add_location(path, file, 96, 156, 4333);
    			attr_dev(svg, "fill", "none");
    			attr_dev(svg, "class", "icon svelte-uryj0d");
    			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg, "viewBox", "0 0 60 60");
    			add_location(svg, file, 96, 8, 4185);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, circle);
    			append_dev(svg, path);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(96:4) {#if !isPlaying}",
    		ctx
    	});

    	return block;
    }

    function create_fragment(ctx) {
    	let a_video;
    	let a_video_position_value;
    	let a_video_src_value;
    	let t0;
    	let div;
    	let button0;
    	let svg0;
    	let circle0;
    	let path0;
    	let path1;
    	let path2;
    	let t1;
    	let t2;
    	let button1;
    	let t3;
    	let button2;
    	let svg1;
    	let path3;
    	let circle1;
    	let dispose;
    	let if_block0 = /*volumeToggle*/ ctx[4] && create_if_block_1(ctx);

    	function select_block_type(ctx, dirty) {
    		if (!/*isPlaying*/ ctx[6]) return create_if_block;
    		return create_else_block;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block1 = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			a_video = element("a-video");
    			t0 = space();
    			div = element("div");
    			button0 = element("button");
    			svg0 = svg_element("svg");
    			circle0 = svg_element("circle");
    			path0 = svg_element("path");
    			path1 = svg_element("path");
    			path2 = svg_element("path");
    			t1 = space();
    			if (if_block0) if_block0.c();
    			t2 = space();
    			button1 = element("button");
    			if_block1.c();
    			t3 = space();
    			button2 = element("button");
    			svg1 = svg_element("svg");
    			path3 = svg_element("path");
    			circle1 = svg_element("circle");
    			set_custom_element_data(a_video, "height", /*height*/ ctx[1]);
    			set_custom_element_data(a_video, "width", /*width*/ ctx[2]);
    			set_custom_element_data(a_video, "video-controls", "");
    			set_custom_element_data(a_video, "position", a_video_position_value = `${/*position*/ ctx[0].x} ${/*position*/ ctx[0].y} ${/*position*/ ctx[0].z}`);
    			if (a_video.src !== (a_video_src_value = `#${/*imageId*/ ctx[3]}`)) set_custom_element_data(a_video, "src", a_video_src_value);
    			add_location(a_video, file, 84, 0, 2341);
    			attr_dev(circle0, "cx", "25");
    			attr_dev(circle0, "cy", "25");
    			attr_dev(circle0, "r", "24.5");
    			attr_dev(circle0, "stroke", "#fff");
    			add_location(circle0, file, 88, 85, 2667);
    			attr_dev(path0, "d", "M16.4919 20.6124H13v7.7752h3.4919l6.5979 4.8933s1.2101 1.0148 1.2101-.0329V15.5999c0-.8227-1.0644-.0192-1.0644-.0192l-6.7436 5.0317zM28.0591 19.095c-.349-.3474-.91-.3474-1.255 0-.3489.3473-.3489.9107 0 1.2549 1.1413 1.1452 1.7071 2.6299 1.7087 4.1273-.0016 1.5006-.5674 2.9948-1.7087 4.1345-.3489.3474-.3489.9092 0 1.2589.1721.1745.3986.2593.6283.2593.2249 0 .453-.0848.6267-.2593 1.4846-1.4878 2.2305-3.4462 2.2289-5.3934.0024-1.9488-.7435-3.8968-2.2289-5.3822z");
    			attr_dev(path0, "fill", "#E9E9E9");
    			add_location(path0, file, 88, 133, 2715);
    			attr_dev(path1, "d", "M30.4665 16.2978c-.3506-.349-.9116-.349-1.2581 0-.3442.3481-.3442.91 0 1.2581 1.9192 1.9176 2.8747 4.4178 2.878 6.9285-.0033 2.5242-.9548 5.0357-2.878 6.9645-.3458.3473-.3442.9068 0 1.2565.1752.1697.4017.2577.6298.2577.2265 0 .4546-.088.6283-.2577 2.2665-2.2729 3.395-5.2518 3.395-8.221 0-2.9596-1.1373-5.9265-3.395-8.1866z");
    			attr_dev(path1, "fill", "#E9E9E9");
    			add_location(path1, file, 88, 622, 3204);
    			attr_dev(path2, "d", "M33.4149 13.4326c-.3458-.349-.9084-.349-1.2565 0-.3442.3473-.3442.9108 0 1.2549 2.7107 2.7107 4.064 6.2498 4.064 9.8001 0 3.5607-1.3493 7.1102-4.064 9.8265-.3474.3465-.3442.9116 0 1.2565.1752.1721.4033.2577.6314.2577.2249 0 .4514-.0856.6251-.2577 3.0589-3.0613 4.5859-7.0789 4.5851-11.0838.0008-3.9977-1.5343-8.0033-4.5851-11.0542z");
    			attr_dev(path2, "fill", "#E9E9E9");
    			add_location(path2, file, 88, 972, 3554);
    			attr_dev(svg0, "fill", "none");
    			attr_dev(svg0, "class", "icon svelte-uryj0d");
    			attr_dev(svg0, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg0, "viewBox", "0 0 50 50");
    			add_location(svg0, file, 88, 0, 2582);
    			attr_dev(button0, "id", "volume-btn");
    			attr_dev(button0, "class", "svelte-uryj0d");
    			add_location(button0, file, 87, 0, 2512);
    			attr_dev(button1, "id", "play-btn");
    			attr_dev(button1, "class", "svelte-uryj0d");
    			add_location(button1, file, 94, 0, 4131);
    			attr_dev(path3, "d", "M28.81 12.6944l1.0168-.6159c.3457-.2092.5522-.5849.5417-.9856-.0105-.4007-.2363-.7654-.5923-.9568-.356-.19132-.7884-.18027-1.1342.029l-3.7182 2.251c-.0232.0141-.0354.0391-.0573.0547-.0903.0633-.1705.1397-.2378.2267-.0913.1635-.1697.3336-.2346.5089-.0037.0246.0072.048.005.0726-.0024.0302-.0178.0562-.0178.0873.0069.0605.0192.1203.0366.1787.0557.2011.1394.3935.2483.5721l3.0067 3.3601c.4165.4601 1.1307.5011 1.5984.0917.4676-.4093.5131-1.1153.1016-1.5799l-.9692-1.0827c4.644 1.3603 7.6809 5.7614 7.2683 10.5334-.4125 4.772-4.1607 8.5997-8.9708 9.1609-4.8099.5611-9.3562-2.2987-10.8805-6.8448-1.5244-4.546.3932-9.5252 4.5896-11.9169.5423-.3105.7273-.9969.4133-1.5332-.314-.5363-1.0082-.7193-1.5506-.4088-5.166 2.9355-7.5183 9.0686-5.6204 14.6534 1.898 5.5848 7.5184 9.0685 13.4287 8.3234 5.9104-.7451 10.4671-5.5118 10.8873-11.3889.4202-5.8773-3.413-11.2306-9.1586-12.7904z");
    			attr_dev(path3, "fill", "#E9E9E9");
    			add_location(path3, file, 106, 85, 4872);
    			attr_dev(circle1, "cx", "25");
    			attr_dev(circle1, "cy", "25");
    			attr_dev(circle1, "r", "24.5");
    			attr_dev(circle1, "stroke", "#fff");
    			add_location(circle1, file, 106, 983, 5770);
    			attr_dev(svg1, "fill", "none");
    			attr_dev(svg1, "class", "icon svelte-uryj0d");
    			attr_dev(svg1, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg1, "viewBox", "0 0 50 50");
    			add_location(svg1, file, 106, 0, 4787);
    			attr_dev(button2, "id", "reset-btn");
    			attr_dev(button2, "class", "svelte-uryj0d");
    			add_location(button2, file, 105, 0, 4762);
    			attr_dev(div, "id", "video-controls");
    			attr_dev(div, "class", "svelte-uryj0d");
    			add_location(div, file, 86, 0, 2485);
    			dispose = listen_dev(button0, "click", /*click_handler*/ ctx[12], false, false, false);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a_video, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, div, anchor);
    			append_dev(div, button0);
    			append_dev(button0, svg0);
    			append_dev(svg0, circle0);
    			append_dev(svg0, path0);
    			append_dev(svg0, path1);
    			append_dev(svg0, path2);
    			append_dev(button0, t1);
    			if (if_block0) if_block0.m(button0, null);
    			append_dev(div, t2);
    			append_dev(div, button1);
    			if_block1.m(button1, null);
    			append_dev(div, t3);
    			append_dev(div, button2);
    			append_dev(button2, svg1);
    			append_dev(svg1, path3);
    			append_dev(svg1, circle1);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*height*/ 2) {
    				set_custom_element_data(a_video, "height", /*height*/ ctx[1]);
    			}

    			if (dirty[0] & /*width*/ 4) {
    				set_custom_element_data(a_video, "width", /*width*/ ctx[2]);
    			}

    			if (dirty[0] & /*position*/ 1 && a_video_position_value !== (a_video_position_value = `${/*position*/ ctx[0].x} ${/*position*/ ctx[0].y} ${/*position*/ ctx[0].z}`)) {
    				set_custom_element_data(a_video, "position", a_video_position_value);
    			}

    			if (dirty[0] & /*imageId*/ 8 && a_video.src !== (a_video_src_value = `#${/*imageId*/ ctx[3]}`)) {
    				set_custom_element_data(a_video, "src", a_video_src_value);
    			}

    			if (/*volumeToggle*/ ctx[4]) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);
    				} else {
    					if_block0 = create_if_block_1(ctx);
    					if_block0.c();
    					if_block0.m(button0, null);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (current_block_type !== (current_block_type = select_block_type(ctx))) {
    				if_block1.d(1);
    				if_block1 = current_block_type(ctx);

    				if (if_block1) {
    					if_block1.c();
    					if_block1.m(button1, null);
    				}
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a_video);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(div);
    			if (if_block0) if_block0.d();
    			if_block1.d();
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { position = "" } = $$props;
    	let { videoId = "" } = $$props;
    	let { clickAttribute = "" } = $$props;
    	let { height = "1.5" } = $$props;
    	let { width = "2" } = $$props;
    	let { imageId = "" } = $$props;
    	let volumeToggle = false;
    	let volumeValue = 50;
    	let isPlaying = false;

    	AFRAME.registerComponent("video-controls", {
    		init() {
    			const video = this.el;
    			const videoHTML = document.getElementById("video_1");
    			this.isPlaying = isPlaying;
    			video.setAttribute(clickAttribute);

    			videoHTML.addEventListener("ended", function () {
    				videoHTML.currentTime = 0;
    			});

    			const play = document.getElementById("play-btn");
    			const aImage = document.querySelector("a-image");

    			play.addEventListener("click", function () {
    				if (video.getAttribute("src") !== `#${videoId}`) {
    					video.setAttribute("src", `#${videoId}`);
    				}

    				if (isPlaying === false) {
    					$$invalidate(6, isPlaying = true);
    					videoHTML.play();
    				} else {
    					if (isPlaying === true) {
    						$$invalidate(6, isPlaying = false);
    						videoHTML.pause();
    					}
    				}
    			});

    			const reset = document.getElementById("reset-btn");

    			reset.addEventListener("click", function () {
    				video.setAttribute("src", `#${imageId}`);
    				videoHTML.pause();
    				videoHTML.currentTime = 0;
    				$$invalidate(6, isPlaying = false);
    			});
    		},
    		handleClick(ev) {
    			ev.stopPropagation();
    			ev.preventDefault();
    			const el = ev.detail.intersection && ev.detail.intersection.object.el;

    			if (el && el === ev.target) {
    				if (this.isPlaying === false) {
    					this.isPlaying = true;
    					document.getElementById("video_1").play();
    				} else {
    					if (this.isPlaying === true) {
    						this.isPlaying = false;
    						document.getElementById("video_1").pause();
    					}
    				}
    			}
    		}
    	});

    	function changeVolume() {
    		const video = document.querySelector("#video_1");
    		video.volume = volumeValue / 100;
    	}

    	const writable_props = ["position", "videoId", "clickAttribute", "height", "width", "imageId"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Video> was created with unknown prop '${key}'`);
    	});

    	function input_change_input_handler() {
    		volumeValue = to_number(this.value);
    		$$invalidate(5, volumeValue);
    	}

    	const blur_handler = () => $$invalidate(4, volumeToggle = false);
    	const click_handler = () => $$invalidate(4, volumeToggle = !volumeToggle);

    	$$self.$set = $$props => {
    		if ("position" in $$props) $$invalidate(0, position = $$props.position);
    		if ("videoId" in $$props) $$invalidate(8, videoId = $$props.videoId);
    		if ("clickAttribute" in $$props) $$invalidate(9, clickAttribute = $$props.clickAttribute);
    		if ("height" in $$props) $$invalidate(1, height = $$props.height);
    		if ("width" in $$props) $$invalidate(2, width = $$props.width);
    		if ("imageId" in $$props) $$invalidate(3, imageId = $$props.imageId);
    	};

    	$$self.$capture_state = () => {
    		return {
    			position,
    			videoId,
    			clickAttribute,
    			height,
    			width,
    			imageId,
    			volumeToggle,
    			volumeValue,
    			isPlaying
    		};
    	};

    	$$self.$inject_state = $$props => {
    		if ("position" in $$props) $$invalidate(0, position = $$props.position);
    		if ("videoId" in $$props) $$invalidate(8, videoId = $$props.videoId);
    		if ("clickAttribute" in $$props) $$invalidate(9, clickAttribute = $$props.clickAttribute);
    		if ("height" in $$props) $$invalidate(1, height = $$props.height);
    		if ("width" in $$props) $$invalidate(2, width = $$props.width);
    		if ("imageId" in $$props) $$invalidate(3, imageId = $$props.imageId);
    		if ("volumeToggle" in $$props) $$invalidate(4, volumeToggle = $$props.volumeToggle);
    		if ("volumeValue" in $$props) $$invalidate(5, volumeValue = $$props.volumeValue);
    		if ("isPlaying" in $$props) $$invalidate(6, isPlaying = $$props.isPlaying);
    	};

    	return [
    		position,
    		height,
    		width,
    		imageId,
    		volumeToggle,
    		volumeValue,
    		isPlaying,
    		changeVolume,
    		videoId,
    		clickAttribute,
    		input_change_input_handler,
    		blur_handler,
    		click_handler
    	];
    }

    class Video extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance, create_fragment, safe_not_equal, {
    			position: 0,
    			videoId: 8,
    			clickAttribute: 9,
    			height: 1,
    			width: 2,
    			imageId: 3
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Video",
    			options,
    			id: create_fragment.name
    		});
    	}

    	get position() {
    		throw new Error("<Video>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set position(value) {
    		throw new Error("<Video>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get videoId() {
    		throw new Error("<Video>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set videoId(value) {
    		throw new Error("<Video>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get clickAttribute() {
    		throw new Error("<Video>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set clickAttribute(value) {
    		throw new Error("<Video>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get height() {
    		throw new Error("<Video>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set height(value) {
    		throw new Error("<Video>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get width() {
    		throw new Error("<Video>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set width(value) {
    		throw new Error("<Video>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get imageId() {
    		throw new Error("<Video>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set imageId(value) {
    		throw new Error("<Video>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    AFRAME.registerComponent('rounded', {
    	schema: {
    		enabled: { default: true },
    		width: { type: 'number', default: 1 },
    		height: { type: 'number', default: 1 },
    		radius: { type: 'number', default: 0.3 },
    		topLeftRadius: { type: 'number', default: -1 },
    		topRightRadius: { type: 'number', default: -1 },
    		bottomLeftRadius: { type: 'number', default: -1 },
    		bottomRightRadius: { type: 'number', default: -1 },
    		color: { type: 'color', default: '#F0F0F0' },
    		opacity: { type: 'number', default: 1 }
    	},
    	init: function() {
    		this.rounded = new THREE.Mesh(
    			this.draw(),
    			new THREE.MeshPhongMaterial({ color: new THREE.Color(this.data.color), side: THREE.DoubleSide })
    		);
    		this.updateOpacity();
    		this.el.setObject3D('mesh', this.rounded);
    	},
    	update: function() {
    		if (this.data.enabled) {
    			if (this.rounded) {
    				this.rounded.visible = true;
    				this.rounded.geometry = this.draw();
    				this.rounded.material.color = new THREE.Color(this.data.color);
    				this.updateOpacity();
    			}
    		} else {
    			this.rounded.visible = false;
    		}
    	},
    	updateOpacity: function() {
    		if (this.data.opacity < 0) {
    			this.data.opacity = 0;
    		}
    		if (this.data.opacity > 1) {
    			this.data.opacity = 1;
    		}
    		if (this.data.opacity < 1) {
    			this.rounded.material.transparent = true;
    		} else {
    			this.rounded.material.transparent = false;
    		}
    		this.rounded.material.opacity = this.data.opacity;
    	},
    	tick: function() {},
    	remove: function() {
    		if (!this.rounded) {
    			return;
    		}
    		this.el.object3D.remove(this.rounded);
    		this.rounded = null;
    	},
    	draw: function() {
    		var roundedRectShape = new THREE.Shape();
    		function roundedRect(
    			ctx,
    			x,
    			y,
    			width,
    			height,
    			topLeftRadius,
    			topRightRadius,
    			bottomLeftRadius,
    			bottomRightRadius
    		) {
    			if (!topLeftRadius) {
    				topLeftRadius = 0.00001;
    			}
    			if (!topRightRadius) {
    				topRightRadius = 0.00001;
    			}
    			if (!bottomLeftRadius) {
    				bottomLeftRadius = 0.00001;
    			}
    			if (!bottomRightRadius) {
    				bottomRightRadius = 0.00001;
    			}
    			ctx.moveTo(x, y + topLeftRadius);
    			ctx.lineTo(x, y + height - topLeftRadius);
    			ctx.quadraticCurveTo(x, y + height, x + topLeftRadius, y + height);
    			ctx.lineTo(x + width - topRightRadius, y + height);
    			ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - topRightRadius);
    			ctx.lineTo(x + width, y + bottomRightRadius);
    			ctx.quadraticCurveTo(x + width, y, x + width - bottomRightRadius, y);
    			ctx.lineTo(x + bottomLeftRadius, y);
    			ctx.quadraticCurveTo(x, y, x, y + bottomLeftRadius);
    		}

    		var corners = [ this.data.radius, this.data.radius, this.data.radius, this.data.radius ];
    		if (this.data.topLeftRadius != -1) {
    			corners[0] = this.data.topLeftRadius;
    		}
    		if (this.data.topRightRadius != -1) {
    			corners[1] = this.data.topRightRadius;
    		}
    		if (this.data.bottomLeftRadius != -1) {
    			corners[2] = this.data.bottomLeftRadius;
    		}
    		if (this.data.bottomRightRadius != -1) {
    			corners[3] = this.data.bottomRightRadius;
    		}

    		roundedRect(
    			roundedRectShape,
    			0,
    			0,
    			this.data.width,
    			this.data.height,
    			corners[0],
    			corners[1],
    			corners[2],
    			corners[3]
    		);
    		return new THREE.ShapeBufferGeometry(roundedRectShape);
    	},
    	pause: function() {},
    	play: function() {}
    });

    AFRAME.registerPrimitive('a-rounded', {
    	defaultComponents: {
    		rounded: {}
    	},
    	mappings: {
    		enabled: 'rounded.enabled',
    		width: 'rounded.width',
    		height: 'rounded.height',
    		radius: 'rounded.radius',
    		'top-left-radius': 'rounded.topLeftRadius',
    		'top-right-radius': 'rounded.topRightRadius',
    		'bottom-left-radius': 'rounded.bottomLeftRadius',
    		'bottom-right-radius': 'rounded.bottomRightRadius',
    		color: 'rounded.color',
    		opacity: 'rounded.opacity'
    	}
    });

    /* src\components\primitives\RoundedRect.svelte generated by Svelte v3.16.4 */
    const file$1 = "src\\components\\primitives\\RoundedRect.svelte";

    function create_fragment$1(ctx) {
    	let a_rounded;
    	let a_rounded_position_value;
    	let a_rounded_width_value;
    	let a_rounded_height_value;
    	let a_rounded_color_value;
    	let a_rounded_top_left_radius_value;
    	let a_rounded_top_right_radius_value;
    	let a_rounded_bottom_left_radius_value;
    	let a_rounded_bottom_right_radius_value;

    	const block = {
    		c: function create() {
    			a_rounded = element("a-rounded");
    			set_custom_element_data(a_rounded, "position", a_rounded_position_value = `${/*x*/ ctx[1]} ${/*y*/ ctx[2]} ${/*z*/ ctx[3]}`);
    			set_custom_element_data(a_rounded, "width", a_rounded_width_value = /*params*/ ctx[0].size.width);
    			set_custom_element_data(a_rounded, "height", a_rounded_height_value = /*params*/ ctx[0].size.height);
    			set_custom_element_data(a_rounded, "color", a_rounded_color_value = /*params*/ ctx[0].color);
    			set_custom_element_data(a_rounded, "top-left-radius", a_rounded_top_left_radius_value = /*params*/ ctx[0].borderRadius.topLeft);
    			set_custom_element_data(a_rounded, "top-right-radius", a_rounded_top_right_radius_value = /*params*/ ctx[0].borderRadius.topRight);
    			set_custom_element_data(a_rounded, "bottom-left-radius", a_rounded_bottom_left_radius_value = /*params*/ ctx[0].borderRadius.bottomLeft);
    			set_custom_element_data(a_rounded, "bottom-right-radius", a_rounded_bottom_right_radius_value = /*params*/ ctx[0].borderRadius.bottomRight);
    			add_location(a_rounded, file$1, 12, 0, 158);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a_rounded, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*params*/ 1 && a_rounded_width_value !== (a_rounded_width_value = /*params*/ ctx[0].size.width)) {
    				set_custom_element_data(a_rounded, "width", a_rounded_width_value);
    			}

    			if (dirty[0] & /*params*/ 1 && a_rounded_height_value !== (a_rounded_height_value = /*params*/ ctx[0].size.height)) {
    				set_custom_element_data(a_rounded, "height", a_rounded_height_value);
    			}

    			if (dirty[0] & /*params*/ 1 && a_rounded_color_value !== (a_rounded_color_value = /*params*/ ctx[0].color)) {
    				set_custom_element_data(a_rounded, "color", a_rounded_color_value);
    			}

    			if (dirty[0] & /*params*/ 1 && a_rounded_top_left_radius_value !== (a_rounded_top_left_radius_value = /*params*/ ctx[0].borderRadius.topLeft)) {
    				set_custom_element_data(a_rounded, "top-left-radius", a_rounded_top_left_radius_value);
    			}

    			if (dirty[0] & /*params*/ 1 && a_rounded_top_right_radius_value !== (a_rounded_top_right_radius_value = /*params*/ ctx[0].borderRadius.topRight)) {
    				set_custom_element_data(a_rounded, "top-right-radius", a_rounded_top_right_radius_value);
    			}

    			if (dirty[0] & /*params*/ 1 && a_rounded_bottom_left_radius_value !== (a_rounded_bottom_left_radius_value = /*params*/ ctx[0].borderRadius.bottomLeft)) {
    				set_custom_element_data(a_rounded, "bottom-left-radius", a_rounded_bottom_left_radius_value);
    			}

    			if (dirty[0] & /*params*/ 1 && a_rounded_bottom_right_radius_value !== (a_rounded_bottom_right_radius_value = /*params*/ ctx[0].borderRadius.bottomRight)) {
    				set_custom_element_data(a_rounded, "bottom-right-radius", a_rounded_bottom_right_radius_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a_rounded);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { params } = $$props;
    	let x = params.position.x;
    	let y = params.position.y;
    	let z = params.position.z;
    	const writable_props = ["params"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<RoundedRect> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("params" in $$props) $$invalidate(0, params = $$props.params);
    	};

    	$$self.$capture_state = () => {
    		return { params, x, y, z };
    	};

    	$$self.$inject_state = $$props => {
    		if ("params" in $$props) $$invalidate(0, params = $$props.params);
    		if ("x" in $$props) $$invalidate(1, x = $$props.x);
    		if ("y" in $$props) $$invalidate(2, y = $$props.y);
    		if ("z" in $$props) $$invalidate(3, z = $$props.z);
    	};

    	return [params, x, y, z];
    }

    class RoundedRect extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, { params: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "RoundedRect",
    			options,
    			id: create_fragment$1.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*params*/ ctx[0] === undefined && !("params" in props)) {
    			console.warn("<RoundedRect> was created without expected prop 'params'");
    		}
    	}

    	get params() {
    		throw new Error("<RoundedRect>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set params(value) {
    		throw new Error("<RoundedRect>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\components\templates\VideoTemplate.svelte generated by Svelte v3.16.4 */
    const file$2 = "src\\components\\templates\\VideoTemplate.svelte";

    function create_fragment$2(ctx) {
    	let t0;
    	let a_text0;
    	let a_text0_z_offset_value;
    	let a_text0_value_value;
    	let a_text0_width_value;
    	let a_text0_height_value;
    	let a_text0_color_value;
    	let a_text0_wrap_count_value;
    	let a_text0_position_value;
    	let a_text0_x_offset_value;
    	let a_text0_letter_spacing_value;
    	let a_text0_font_value;
    	let a_text0_align_value;
    	let t1;
    	let t2;
    	let t3;
    	let a_text1;
    	let a_text1_wrap_count_value;
    	let a_text1_value_value;
    	let a_text1_width_value;
    	let a_text1_height_value;
    	let a_text1_color_value;
    	let a_text1_position_value;
    	let a_text1_z_offset_value;
    	let a_text1_x_offset_value;
    	let a_text1_letter_spacing_value;
    	let a_text1_font_value;
    	let current;

    	const roundedrect0 = new RoundedRect({
    			props: { params: /*titleBlock*/ ctx[1] },
    			$$inline: true
    		});

    	const video = new Video({
    			props: {
    				position: /*videoParams*/ ctx[0].position,
    				clickAttribute: "clickable",
    				videoId: /*videoParams*/ ctx[0].videoId,
    				imageId: /*videoParams*/ ctx[0].imageId,
    				height: /*videoParams*/ ctx[0].size.height,
    				width: /*videoParams*/ ctx[0].size.width
    			},
    			$$inline: true
    		});

    	const roundedrect1 = new RoundedRect({
    			props: { params: /*descriptionBlock*/ ctx[2] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(roundedrect0.$$.fragment);
    			t0 = space();
    			a_text0 = element("a-text");
    			t1 = space();
    			create_component(video.$$.fragment);
    			t2 = space();
    			create_component(roundedrect1.$$.fragment);
    			t3 = space();
    			a_text1 = element("a-text");
    			set_custom_element_data(a_text0, "z-offset", a_text0_z_offset_value = /*titleText*/ ctx[3].zOffset);
    			set_custom_element_data(a_text0, "value", a_text0_value_value = /*titleText*/ ctx[3].text);
    			set_custom_element_data(a_text0, "width", a_text0_width_value = /*titleText*/ ctx[3].size.width);
    			set_custom_element_data(a_text0, "height", a_text0_height_value = /*titleText*/ ctx[3].size.height);
    			set_custom_element_data(a_text0, "color", a_text0_color_value = /*titleText*/ ctx[3].color);
    			set_custom_element_data(a_text0, "wrap-count", a_text0_wrap_count_value = /*titleText*/ ctx[3].wrapCount);
    			set_custom_element_data(a_text0, "position", a_text0_position_value = `${/*titleText*/ ctx[3].position.x} ${/*titleText*/ ctx[3].position.y} ${/*titleText*/ ctx[3].position.z}`);
    			set_custom_element_data(a_text0, "x-offset", a_text0_x_offset_value = /*titleText*/ ctx[3].xOffset);
    			set_custom_element_data(a_text0, "letter-spacing", a_text0_letter_spacing_value = /*titleText*/ ctx[3].letterSpacing);
    			set_custom_element_data(a_text0, "font", a_text0_font_value = /*titleText*/ ctx[3].font);
    			set_custom_element_data(a_text0, "align", a_text0_align_value = /*titleText*/ ctx[3].align);
    			set_custom_element_data(a_text0, "anchor", "left");
    			add_location(a_text0, file$2, 49, 0, 965);
    			set_custom_element_data(a_text1, "wrap-count", a_text1_wrap_count_value = /*descriptionText*/ ctx[4].wrapCount);
    			set_custom_element_data(a_text1, "value", a_text1_value_value = /*descriptionText*/ ctx[4].text);
    			set_custom_element_data(a_text1, "width", a_text1_width_value = /*descriptionText*/ ctx[4].size.width);
    			set_custom_element_data(a_text1, "height", a_text1_height_value = /*descriptionText*/ ctx[4].size.height);
    			set_custom_element_data(a_text1, "color", a_text1_color_value = /*descriptionText*/ ctx[4].color);
    			set_custom_element_data(a_text1, "position", a_text1_position_value = `${/*descriptionText*/ ctx[4].position.x} ${/*descriptionText*/ ctx[4].position.y} ${/*descriptionText*/ ctx[4].position.z}`);
    			set_custom_element_data(a_text1, "z-offset", a_text1_z_offset_value = /*descriptionText*/ ctx[4].zOffset);
    			set_custom_element_data(a_text1, "x-offset", a_text1_x_offset_value = /*descriptionText*/ ctx[4].xOffset);
    			set_custom_element_data(a_text1, "letter-spacing", a_text1_letter_spacing_value = /*descriptionText*/ ctx[4].letterSpacing);
    			set_custom_element_data(a_text1, "font", a_text1_font_value = /*descriptionText*/ ctx[4].font);
    			set_custom_element_data(a_text1, "anchor", "left");
    			add_location(a_text1, file$2, 52, 0, 1606);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(roundedrect0, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, a_text0, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(video, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(roundedrect1, target, anchor);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, a_text1, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const roundedrect0_changes = {};
    			if (dirty[0] & /*titleBlock*/ 2) roundedrect0_changes.params = /*titleBlock*/ ctx[1];
    			roundedrect0.$set(roundedrect0_changes);

    			if (!current || dirty[0] & /*titleText*/ 8 && a_text0_z_offset_value !== (a_text0_z_offset_value = /*titleText*/ ctx[3].zOffset)) {
    				set_custom_element_data(a_text0, "z-offset", a_text0_z_offset_value);
    			}

    			if (!current || dirty[0] & /*titleText*/ 8 && a_text0_value_value !== (a_text0_value_value = /*titleText*/ ctx[3].text)) {
    				set_custom_element_data(a_text0, "value", a_text0_value_value);
    			}

    			if (!current || dirty[0] & /*titleText*/ 8 && a_text0_width_value !== (a_text0_width_value = /*titleText*/ ctx[3].size.width)) {
    				set_custom_element_data(a_text0, "width", a_text0_width_value);
    			}

    			if (!current || dirty[0] & /*titleText*/ 8 && a_text0_height_value !== (a_text0_height_value = /*titleText*/ ctx[3].size.height)) {
    				set_custom_element_data(a_text0, "height", a_text0_height_value);
    			}

    			if (!current || dirty[0] & /*titleText*/ 8 && a_text0_color_value !== (a_text0_color_value = /*titleText*/ ctx[3].color)) {
    				set_custom_element_data(a_text0, "color", a_text0_color_value);
    			}

    			if (!current || dirty[0] & /*titleText*/ 8 && a_text0_wrap_count_value !== (a_text0_wrap_count_value = /*titleText*/ ctx[3].wrapCount)) {
    				set_custom_element_data(a_text0, "wrap-count", a_text0_wrap_count_value);
    			}

    			if (!current || dirty[0] & /*titleText*/ 8 && a_text0_position_value !== (a_text0_position_value = `${/*titleText*/ ctx[3].position.x} ${/*titleText*/ ctx[3].position.y} ${/*titleText*/ ctx[3].position.z}`)) {
    				set_custom_element_data(a_text0, "position", a_text0_position_value);
    			}

    			if (!current || dirty[0] & /*titleText*/ 8 && a_text0_x_offset_value !== (a_text0_x_offset_value = /*titleText*/ ctx[3].xOffset)) {
    				set_custom_element_data(a_text0, "x-offset", a_text0_x_offset_value);
    			}

    			if (!current || dirty[0] & /*titleText*/ 8 && a_text0_letter_spacing_value !== (a_text0_letter_spacing_value = /*titleText*/ ctx[3].letterSpacing)) {
    				set_custom_element_data(a_text0, "letter-spacing", a_text0_letter_spacing_value);
    			}

    			if (!current || dirty[0] & /*titleText*/ 8 && a_text0_font_value !== (a_text0_font_value = /*titleText*/ ctx[3].font)) {
    				set_custom_element_data(a_text0, "font", a_text0_font_value);
    			}

    			if (!current || dirty[0] & /*titleText*/ 8 && a_text0_align_value !== (a_text0_align_value = /*titleText*/ ctx[3].align)) {
    				set_custom_element_data(a_text0, "align", a_text0_align_value);
    			}

    			const video_changes = {};
    			if (dirty[0] & /*videoParams*/ 1) video_changes.position = /*videoParams*/ ctx[0].position;
    			if (dirty[0] & /*videoParams*/ 1) video_changes.videoId = /*videoParams*/ ctx[0].videoId;
    			if (dirty[0] & /*videoParams*/ 1) video_changes.imageId = /*videoParams*/ ctx[0].imageId;
    			if (dirty[0] & /*videoParams*/ 1) video_changes.height = /*videoParams*/ ctx[0].size.height;
    			if (dirty[0] & /*videoParams*/ 1) video_changes.width = /*videoParams*/ ctx[0].size.width;
    			video.$set(video_changes);
    			const roundedrect1_changes = {};
    			if (dirty[0] & /*descriptionBlock*/ 4) roundedrect1_changes.params = /*descriptionBlock*/ ctx[2];
    			roundedrect1.$set(roundedrect1_changes);

    			if (!current || dirty[0] & /*descriptionText*/ 16 && a_text1_wrap_count_value !== (a_text1_wrap_count_value = /*descriptionText*/ ctx[4].wrapCount)) {
    				set_custom_element_data(a_text1, "wrap-count", a_text1_wrap_count_value);
    			}

    			if (!current || dirty[0] & /*descriptionText*/ 16 && a_text1_value_value !== (a_text1_value_value = /*descriptionText*/ ctx[4].text)) {
    				set_custom_element_data(a_text1, "value", a_text1_value_value);
    			}

    			if (!current || dirty[0] & /*descriptionText*/ 16 && a_text1_width_value !== (a_text1_width_value = /*descriptionText*/ ctx[4].size.width)) {
    				set_custom_element_data(a_text1, "width", a_text1_width_value);
    			}

    			if (!current || dirty[0] & /*descriptionText*/ 16 && a_text1_height_value !== (a_text1_height_value = /*descriptionText*/ ctx[4].size.height)) {
    				set_custom_element_data(a_text1, "height", a_text1_height_value);
    			}

    			if (!current || dirty[0] & /*descriptionText*/ 16 && a_text1_color_value !== (a_text1_color_value = /*descriptionText*/ ctx[4].color)) {
    				set_custom_element_data(a_text1, "color", a_text1_color_value);
    			}

    			if (!current || dirty[0] & /*descriptionText*/ 16 && a_text1_position_value !== (a_text1_position_value = `${/*descriptionText*/ ctx[4].position.x} ${/*descriptionText*/ ctx[4].position.y} ${/*descriptionText*/ ctx[4].position.z}`)) {
    				set_custom_element_data(a_text1, "position", a_text1_position_value);
    			}

    			if (!current || dirty[0] & /*descriptionText*/ 16 && a_text1_z_offset_value !== (a_text1_z_offset_value = /*descriptionText*/ ctx[4].zOffset)) {
    				set_custom_element_data(a_text1, "z-offset", a_text1_z_offset_value);
    			}

    			if (!current || dirty[0] & /*descriptionText*/ 16 && a_text1_x_offset_value !== (a_text1_x_offset_value = /*descriptionText*/ ctx[4].xOffset)) {
    				set_custom_element_data(a_text1, "x-offset", a_text1_x_offset_value);
    			}

    			if (!current || dirty[0] & /*descriptionText*/ 16 && a_text1_letter_spacing_value !== (a_text1_letter_spacing_value = /*descriptionText*/ ctx[4].letterSpacing)) {
    				set_custom_element_data(a_text1, "letter-spacing", a_text1_letter_spacing_value);
    			}

    			if (!current || dirty[0] & /*descriptionText*/ 16 && a_text1_font_value !== (a_text1_font_value = /*descriptionText*/ ctx[4].font)) {
    				set_custom_element_data(a_text1, "font", a_text1_font_value);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(roundedrect0.$$.fragment, local);
    			transition_in(video.$$.fragment, local);
    			transition_in(roundedrect1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(roundedrect0.$$.fragment, local);
    			transition_out(video.$$.fragment, local);
    			transition_out(roundedrect1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(roundedrect0, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(a_text0);
    			if (detaching) detach_dev(t1);
    			destroy_component(video, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(roundedrect1, detaching);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(a_text1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { videoParams = {
    		position: { x: 0, y: 0, z: 0 },
    		size: { height: 1, width: 1 },
    		videoId: "video_1",
    		videoSrc: "./static/videos/coffee_video.mp4",
    		imageId: "image_1",
    		imageSrc: "./static/images/coffee_cover.png",
    		videoOpts: { loop: "true" }
    	} } = $$props;

    	let { titleBlock = {
    		padding: 0.1,
    		position: {
    			x: videoParams.position.x - videoParams.size.width / 2,
    			y: videoParams.position.y + videoParams.size.height / 2,
    			z: videoParams.position.z
    		},
    		size: {
    			height: videoParams.size.height / 2,
    			width: videoParams.size.width
    		},
    		borderRadius: {
    			topLeft: 0.05,
    			topRight: 0.05,
    			bottomLeft: 0,
    			bottomRight: 0
    		},
    		color: "#333"
    	} } = $$props;

    	let { descriptionBlock = {} } = $$props;
    	let { titleText = {} } = $$props;
    	let { descriptionText = {} } = $$props;

    	const writable_props = [
    		"videoParams",
    		"titleBlock",
    		"descriptionBlock",
    		"titleText",
    		"descriptionText"
    	];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<VideoTemplate> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("videoParams" in $$props) $$invalidate(0, videoParams = $$props.videoParams);
    		if ("titleBlock" in $$props) $$invalidate(1, titleBlock = $$props.titleBlock);
    		if ("descriptionBlock" in $$props) $$invalidate(2, descriptionBlock = $$props.descriptionBlock);
    		if ("titleText" in $$props) $$invalidate(3, titleText = $$props.titleText);
    		if ("descriptionText" in $$props) $$invalidate(4, descriptionText = $$props.descriptionText);
    	};

    	$$self.$capture_state = () => {
    		return {
    			videoParams,
    			titleBlock,
    			descriptionBlock,
    			titleText,
    			descriptionText
    		};
    	};

    	$$self.$inject_state = $$props => {
    		if ("videoParams" in $$props) $$invalidate(0, videoParams = $$props.videoParams);
    		if ("titleBlock" in $$props) $$invalidate(1, titleBlock = $$props.titleBlock);
    		if ("descriptionBlock" in $$props) $$invalidate(2, descriptionBlock = $$props.descriptionBlock);
    		if ("titleText" in $$props) $$invalidate(3, titleText = $$props.titleText);
    		if ("descriptionText" in $$props) $$invalidate(4, descriptionText = $$props.descriptionText);
    	};

    	return [videoParams, titleBlock, descriptionBlock, titleText, descriptionText];
    }

    class VideoTemplate extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$2, create_fragment$2, safe_not_equal, {
    			videoParams: 0,
    			titleBlock: 1,
    			descriptionBlock: 2,
    			titleText: 3,
    			descriptionText: 4
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "VideoTemplate",
    			options,
    			id: create_fragment$2.name
    		});
    	}

    	get videoParams() {
    		throw new Error("<VideoTemplate>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set videoParams(value) {
    		throw new Error("<VideoTemplate>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get titleBlock() {
    		throw new Error("<VideoTemplate>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set titleBlock(value) {
    		throw new Error("<VideoTemplate>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get descriptionBlock() {
    		throw new Error("<VideoTemplate>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set descriptionBlock(value) {
    		throw new Error("<VideoTemplate>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get titleText() {
    		throw new Error("<VideoTemplate>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set titleText(value) {
    		throw new Error("<VideoTemplate>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get descriptionText() {
    		throw new Error("<VideoTemplate>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set descriptionText(value) {
    		throw new Error("<VideoTemplate>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\App.svelte generated by Svelte v3.16.4 */
    const file$3 = "src\\App.svelte";

    // (160:1) {:else}
    function create_else_block$1(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "Your Browser is not supported";
    			add_location(p, file$3, 160, 2, 3831);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$1.name,
    		type: "else",
    		source: "(160:1) {:else}",
    		ctx
    	});

    	return block;
    }

    // (145:1) {#if isBrowserValid}
    function create_if_block$1(ctx) {
    	let a_scene;
    	let a_assets;
    	let video;
    	let video_id_value;
    	let video_loop_value;
    	let video_src_value;
    	let t0;
    	let image;
    	let image_id_value;
    	let image_src_value;
    	let t1;
    	let a_marker;
    	let t2;
    	let a_entity;
    	let current;

    	const videotemplate = new VideoTemplate({
    			props: {
    				titleBlock: /*titleBlock*/ ctx[2],
    				videoParams: /*videoParams*/ ctx[1],
    				descriptionBlock: /*descriptionBlock*/ ctx[3],
    				titleText: /*titleText*/ ctx[4],
    				descriptionText: /*descriptionText*/ ctx[5]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			a_scene = element("a-scene");
    			a_assets = element("a-assets");
    			video = element("video");
    			t0 = space();
    			image = svg_element("image");
    			t1 = space();
    			a_marker = element("a-marker");
    			create_component(videotemplate.$$.fragment);
    			t2 = space();
    			a_entity = element("a-entity");
    			attr_dev(video, "id", video_id_value = /*videoParams*/ ctx[1].videoId);
    			attr_dev(video, "crossorigin", "anonymous");
    			video.loop = video_loop_value = /*videoParams*/ ctx[1].loop;
    			attr_dev(video, "webkit-playsinline", "");
    			video.playsInline = true;
    			if (video.src !== (video_src_value = /*videoParams*/ ctx[1].videoSrc)) attr_dev(video, "src", video_src_value);
    			add_location(video, file$3, 150, 3, 3376);
    			attr_dev(image, "id", image_id_value = /*videoParams*/ ctx[1].imageId);
    			if (image.src !== (image_src_value = /*videoParams*/ ctx[1].imageSrc)) attr_dev(image, "src", image_src_value);
    			add_location(image, file$3, 151, 3, 3526);
    			add_location(a_assets, file$3, 149, 2, 3362);
    			set_custom_element_data(a_marker, "preset", "custom");
    			set_custom_element_data(a_marker, "type", "pattern");
    			set_custom_element_data(a_marker, "url", patternURL);
    			add_location(a_marker, file$3, 154, 2, 3605);
    			set_custom_element_data(a_entity, "camera", "");
    			add_location(a_entity, file$3, 157, 2, 3778);
    			set_custom_element_data(a_scene, "embedded", "");
    			set_custom_element_data(a_scene, "vr-mode-ui", "enabled: false");
    			set_custom_element_data(a_scene, "arjs", "sourceType:webcam;debugUIEnabled: false; patternRatio:0.8");
    			set_custom_element_data(a_scene, "cursor", "rayOrigin: mouse; fuse: true; fuseTimeout: 0;");
    			set_custom_element_data(a_scene, "raycaster", "objects: [clickable];");
    			add_location(a_scene, file$3, 145, 1, 3148);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a_scene, anchor);
    			append_dev(a_scene, a_assets);
    			append_dev(a_assets, video);
    			append_dev(a_assets, t0);
    			append_dev(a_assets, image);
    			append_dev(a_scene, t1);
    			append_dev(a_scene, a_marker);
    			mount_component(videotemplate, a_marker, null);
    			append_dev(a_scene, t2);
    			append_dev(a_scene, a_entity);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(videotemplate.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(videotemplate.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a_scene);
    			destroy_component(videotemplate);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$1.name,
    		type: "if",
    		source: "(145:1) {#if isBrowserValid}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$3(ctx) {
    	let t;
    	let main;
    	let current_block_type_index;
    	let if_block;
    	let current;
    	const if_block_creators = [create_if_block$1, create_else_block$1];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*isBrowserValid*/ ctx[0]) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			t = space();
    			main = element("main");
    			if_block.c();
    			attr_dev(main, "class", "svelte-1tky8bj");
    			add_location(main, file$3, 143, 0, 3118);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    			insert_dev(target, main, anchor);
    			if_blocks[current_block_type_index].m(main, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}

    				transition_in(if_block, 1);
    				if_block.m(main, null);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    			if (detaching) detach_dev(main);
    			if_blocks[current_block_type_index].d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const patternURL = "./pattern-video-qr-code.patt";

    function instance$3($$self, $$props, $$invalidate) {
    	let isBrowserValid = null;
    	let visibility = null;

    	beforeUpdate(() => {
    		$$invalidate(0, isBrowserValid = CheckCompatibility());
    		let visibilityChange = "visibilitychange";

    		if (typeof document.hidden !== undefined) ; else if (typeof document.msHidden !== undefined) {
    			visibilityChange = "msvisibilitychange";
    		} else if (typeof document.webkitvisibilitychange !== undefined) {
    			visibilityChange = "webkitvisibilitychange";
    		}

    		document.addEventListener(visibilityChange, ReloadVideo, false);
    	});

    	const videoParams = {
    		position: { x: 0, y: 2, z: -5 },
    		size: { height: 1, width: 1 },
    		videoId: "video_1",
    		videoSrc: "./static/videos/coffee_video.mp4",
    		imageId: "image_1",
    		imageSrc: "./static/images/coffee_cover.png",
    		videoOpts: { loop: "true" }
    	};

    	const titleBlock = {
    		position: {
    			x: videoParams.position.x - videoParams.size.width / 2,
    			y: videoParams.position.y + videoParams.size.height / 2,
    			z: videoParams.position.z
    		},
    		size: {
    			height: videoParams.size.height / 3,
    			width: videoParams.size.width
    		},
    		borderRadius: {
    			topLeft: 0.05,
    			topRight: 0.05,
    			bottomLeft: 0,
    			bottomRight: 0
    		},
    		color: "#333"
    	};

    	const descriptionBlock = {
    		position: {
    			x: videoParams.position.x - videoParams.size.width / 2,
    			y: videoParams.position.y - videoParams.size.height,
    			z: videoParams.position.z
    		},
    		size: {
    			height: videoParams.size.height / 2,
    			width: videoParams.size.width
    		},
    		borderRadius: {
    			topLeft: 0,
    			topRight: 0,
    			bottomLeft: 0.05,
    			bottomRight: 0.05
    		},
    		color: "#26869F"
    	};

    	const titleText = {
    		text: "Learn how to create a special coffee brew",
    		padding: 0.1,
    		position: {
    			x: videoParams.position.x - videoParams.size.width / 2,
    			y: videoParams.position.y + videoParams.size.height / 2 + titleBlock.size.height / 2,
    			z: videoParams.position.z
    		},
    		size: {
    			height: titleBlock.size.height,
    			width: titleBlock.size.width - 0.2
    		},
    		font: "https://cdn.aframe.io/fonts/Roboto-msdf.json",
    		color: "white",
    		wrapCount: "20",
    		xOffset: 0.1,
    		zOffset: 0.001,
    		height: 1,
    		align: "center",
    		baseline: "center",
    		letterSpacing: 2
    	};

    	const descriptionText = {
    		text: "Find out the secret sauce to creating awesome tasting coffee in a simple 3 step process.",
    		padding: 0.1,
    		position: {
    			x: videoParams.position.x - videoParams.size.width / 2,
    			y: videoParams.position.y - videoParams.size.height / 2 - titleBlock.size.height / 2,
    			z: videoParams.position.z
    		},
    		size: {
    			height: descriptionBlock.size.height,
    			width: descriptionBlock.size.width - 0.2
    		},
    		font: "https://cdn.aframe.io/fonts/Roboto-msdf.json",
    		color: "white",
    		wrapCount: "25",
    		xOffset: 0.1,
    		zOffset: 0.001,
    		height: 1,
    		align: "left",
    		baseline: "center",
    		letterSpacing: 2
    	};

    	$$self.$capture_state = () => {
    		return {};
    	};

    	$$self.$inject_state = $$props => {
    		if ("isBrowserValid" in $$props) $$invalidate(0, isBrowserValid = $$props.isBrowserValid);
    		if ("visibility" in $$props) visibility = $$props.visibility;
    	};

    	return [
    		isBrowserValid,
    		videoParams,
    		titleBlock,
    		descriptionBlock,
    		titleText,
    		descriptionText
    	];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment$3.name
    		});
    	}
    }

    const app = new App({
    	target: document.body,
    	props: {
    		name: 'world'
    	}
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map
