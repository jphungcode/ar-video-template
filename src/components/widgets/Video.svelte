<script>

export let position = "";
export let rotation = "0 0 0";
export let videoId = "";
export let clickAttribute = ""
export let height = "1.5"
export let width = "2"
export let imageId = ""

let volumeToggle = false
let volumeValue = 50;
let isPlaying = false;

AFRAME.registerComponent('video-controls',{
    init:function(){
        const video = this.el
        const videoHTML = document.getElementById('video_1')  
        this.isPlaying = isPlaying;
        video.setAttribute(clickAttribute)

        //video.addEventListener('click', this.handleClick)
        videoHTML.addEventListener('ended', function(){
            videoHTML.currentTime = 0;

        })

        const play = document.getElementById('play-btn')
        const aImage = document.querySelector('a-image')

        play.addEventListener('click', function(){
            
            if(video.getAttribute('src') !== `#${videoId}`){
                video.setAttribute('src', `#${videoId}`)
            }
             if(isPlaying === false) {
                isPlaying = true;
                videoHTML.play()
            } else {
                if(isPlaying === true){
                    isPlaying = false;
                    videoHTML.pause()
                }
            }
        })

        const reset = document.getElementById('reset-btn')
        reset.addEventListener('click', function(){
            video.setAttribute('src', `#${imageId}`)
            videoHTML.pause()
            videoHTML.currentTime = 0;
            isPlaying = false
        })

    },
    handleClick: function(ev) {
        ev.stopPropagation();
        ev.preventDefault();

        const el = ev.detail.intersection && ev.detail.intersection.object.el;

        if (el && el === ev.target) {
            // play video
            if(this.isPlaying === false) {
                this.isPlaying = true;
                document.getElementById('video_1').play()
            } else {
                if(this.isPlaying === true){
                    this.isPlaying = false;
                     document.getElementById('video_1').pause()
                }
            }
        }

    }
})

function changeVolume(){
    const video = document.querySelector('#video_1');
    video.volume = volumeValue/100;
}

</script>


<a-video height={height} rotation={`${rotation.x} ${rotation.y} ${rotation.z}`} width={width} video-controls  position={`${position.x} ${position.y} ${position.z}`} src={`#${imageId}`}></a-video>

<div id="video-controls">
<button id="volume-btn" on:click={()=>volumeToggle = !volumeToggle}>
<svg fill="none" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><circle cx="25" cy="25" r="24.5" stroke="#fff"/><path d="M16.4919 20.6124H13v7.7752h3.4919l6.5979 4.8933s1.2101 1.0148 1.2101-.0329V15.5999c0-.8227-1.0644-.0192-1.0644-.0192l-6.7436 5.0317zM28.0591 19.095c-.349-.3474-.91-.3474-1.255 0-.3489.3473-.3489.9107 0 1.2549 1.1413 1.1452 1.7071 2.6299 1.7087 4.1273-.0016 1.5006-.5674 2.9948-1.7087 4.1345-.3489.3474-.3489.9092 0 1.2589.1721.1745.3986.2593.6283.2593.2249 0 .453-.0848.6267-.2593 1.4846-1.4878 2.2305-3.4462 2.2289-5.3934.0024-1.9488-.7435-3.8968-2.2289-5.3822z" fill="#E9E9E9"/><path d="M30.4665 16.2978c-.3506-.349-.9116-.349-1.2581 0-.3442.3481-.3442.91 0 1.2581 1.9192 1.9176 2.8747 4.4178 2.878 6.9285-.0033 2.5242-.9548 5.0357-2.878 6.9645-.3458.3473-.3442.9068 0 1.2565.1752.1697.4017.2577.6298.2577.2265 0 .4546-.088.6283-.2577 2.2665-2.2729 3.395-5.2518 3.395-8.221 0-2.9596-1.1373-5.9265-3.395-8.1866z" fill="#E9E9E9"/><path d="M33.4149 13.4326c-.3458-.349-.9084-.349-1.2565 0-.3442.3473-.3442.9108 0 1.2549 2.7107 2.7107 4.064 6.2498 4.064 9.8001 0 3.5607-1.3493 7.1102-4.064 9.8265-.3474.3465-.3442.9116 0 1.2565.1752.1721.4033.2577.6314.2577.2249 0 .4514-.0856.6251-.2577 3.0589-3.0613 4.5859-7.0789 4.5851-11.0838.0008-3.9977-1.5343-8.0033-4.5851-11.0542z" fill="#E9E9E9"/></svg>
{#if volumeToggle}
<input type='range' id="volume-range" class="range vertical-heighest-first round" bind:value={volumeValue} on:change={changeVolume} on:blur={()=>volumeToggle = false} />
{/if}

</button>
<button id="play-btn">
    {#if !isPlaying}
        <svg fill="none" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><circle cx="30" cy="30" r="29.5" fill="#C4C4C4" stroke="#fff"/><path d="M45 30L22.5 42.9904V17.0096L45 30z" fill="#161616"/></svg>
        {:else}
        <svg class="icon" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="29.5" fill="#C4C4C4" stroke="white"/>
        <rect x="21" y="16" width="5" height="26" fill="#161616"/>
        <rect x="34" y="16" width="5" height="26" fill="#161616"/>
        </svg>
    {/if}
</button>
<button id="reset-btn">
<svg fill="none" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M28.81 12.6944l1.0168-.6159c.3457-.2092.5522-.5849.5417-.9856-.0105-.4007-.2363-.7654-.5923-.9568-.356-.19132-.7884-.18027-1.1342.029l-3.7182 2.251c-.0232.0141-.0354.0391-.0573.0547-.0903.0633-.1705.1397-.2378.2267-.0913.1635-.1697.3336-.2346.5089-.0037.0246.0072.048.005.0726-.0024.0302-.0178.0562-.0178.0873.0069.0605.0192.1203.0366.1787.0557.2011.1394.3935.2483.5721l3.0067 3.3601c.4165.4601 1.1307.5011 1.5984.0917.4676-.4093.5131-1.1153.1016-1.5799l-.9692-1.0827c4.644 1.3603 7.6809 5.7614 7.2683 10.5334-.4125 4.772-4.1607 8.5997-8.9708 9.1609-4.8099.5611-9.3562-2.2987-10.8805-6.8448-1.5244-4.546.3932-9.5252 4.5896-11.9169.5423-.3105.7273-.9969.4133-1.5332-.314-.5363-1.0082-.7193-1.5506-.4088-5.166 2.9355-7.5183 9.0686-5.6204 14.6534 1.898 5.5848 7.5184 9.0685 13.4287 8.3234 5.9104-.7451 10.4671-5.5118 10.8873-11.3889.4202-5.8773-3.413-11.2306-9.1586-12.7904z" fill="#E9E9E9"/><circle cx="25" cy="25" r="24.5" stroke="#fff"/></svg>

</button>

</div>

<style>
    #video-controls {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #202020;
        z-index:3;
        height: 15%;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        align-items: center;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        grid-gap: 0.5rem;
    }
    #volume-btn, #reset-btn {
        margin: 1rem;
        border: none;
        background-color: transparent;
        width: 40%;
        margin: 0 auto;
    }

    #play-btn {
         margin: 1rem;
        border: none;
        background-color: transparent;
        width: 50%;
        margin: 0 auto;
    }

     input[type="range"].range
    {
        cursor: pointer;
        position: absolute;
        left:0;
        top:-50%;
        width: 30% !important;
        -webkit-appearance: none;
        z-index: 200;
        width:75px;
        border: 1px solid #e6e6e6;
        background-color: #e6e6e6;
        background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#e6e6e6), to(#d2d2d2));
        background-image: -webkit-linear-gradient(right, #e6e6e6, #d2d2d2);
        background-image: -moz-linear-gradient(right, #e6e6e6, #d2d2d2);
        background-image: -ms-linear-gradient(right, #e6e6e6, #d2d2d2);
        background-image: -o-linear-gradient(right, #e6e6e6, #d2d2d2);
    }

    input[type="range"].range:focus
    {
        border: 0 !important;
        outline: none !important;
    }

    input[type="range"].range::-webkit-slider-thumb
    {
        -webkit-appearance: none;
        width: 10px;
        height: 10px;
    background-color: #555;
        background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#4DDBFF), to(#00CCFF));
        background-image: -webkit-linear-gradient(right, #4DDBFF, #00CCFF);
        background-image: -moz-linear-gradient(right, #4DDBFF, #00CCFF);
        background-image: -ms-linear-gradient(right, #4DDBFF, #00CCFF);
        background-image: -o-linear-gradient(right, #4DDBFF, #00CCFF);
    }

    input[type="range"].round {
     -webkit-border-radius: 999px;
     -moz-border-radius: 999px;
     border-radius: 999px;
    }

    input[type="range"].round::-webkit-slider-thumb {
        -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -o-border-radius: 5px;
    }

    .vertical-heighest-first
    {
        -webkit-transform:rotate(270deg);
        -moz-transform:rotate(270deg);
        -o-transform:rotate(270deg);
        -ms-transform:rotate(270deg);
        transform:rotate(270deg);
    }

    .icon {
        width: 100%;
    }

    #volume-icon {
        fill: #FFF;
    }

</style>