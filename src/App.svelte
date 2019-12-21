<script>

import {beforeUpdate, onMount} from 'svelte'
import CheckCompatibility from './utils/compatibility'
import ReloadVideo from "./utils/reloadVideo"
import VideoTemplate from "./components/templates/VideoTemplate.svelte"

let isBrowserValid = true;
let visibilityChange = null;
let hidden = 'hidden';

onMount(() => {
	

    if (typeof document.hidden !== 'undefined') {
      // Opera 12.10 and Firefox 18 and later support
      visibilityChange = 'visibilitychange'
    } else if (typeof document.msHidden !== 'undefined') {
      hidden = 'msHidden'
      visibilityChange = 'msvisibilitychange'
    } else if (typeof document.webkitHidden !== 'undefined') {
      hidden = 'webkitHidden'
      visibilityChange = 'webkitvisibilitychange'
	}
	
    document.addEventListener(visibilityChange, handleVisibilityChange, false)

    function handleVisibilityChange() {
      ReloadVideo()
    }

})

const patternURL = 'pattern-video-qr-code.patt'

const videoParams = {
	position: {
		x: 0,
		y: 0,
		z: 0
	},
	rotation: {
		x: -90,
		y: 0,
		z: 0,
	},
	size:{
		height: 1.5,
		width: 2
	},
	videoId: "video_1",
	videoSrc: "./static/videos/coffee_video.mp4",
	imageId: "image_1",
	imageSrc: "./static/images/coffee_cover.png",
	videoOpts: {
		loop: 'true'
	}
}

const titleBlock = {
	position:{
		x: videoParams.position.x - videoParams.size.width/2,
		y: videoParams.position.y + videoParams.size.height/2,
		z: videoParams.position.z,
	},
	rotation: {
		x: -90,
		y: 0,
		z: 0,
	},
	size:{
		height:videoParams.size.height/3,
		width: videoParams.size.width	
	},
	borderRadius: {
		topLeft: 0.05,
		topRight:0.05,
		bottomLeft:0,
		bottomRight:0
	},
	color: "#333"
}

const descriptionBlock = {
	position:{
		x: videoParams.position.x - videoParams.size.width/2,
		y: videoParams.position.y - videoParams.size.height,
		z: videoParams.position.z,
	},
	rotation: {
		x: -90,
		y: 0,
		z: 0,
	},
	size:{
		height:videoParams.size.height/2,
		width: videoParams.size.width	
	},
	borderRadius: {
		topLeft: 0,
		topRight:0,
		bottomLeft:0.05,
		bottomRight:0.05
	},
	color: "#26869F"
}

const titleText = {
	text: "Learn how to create a special coffee brew",
	padding: 0.1,
	position:{
		x: videoParams.position.x - videoParams.size.width/2,
		y: videoParams.position.y + videoParams.size.height/2 + titleBlock.size.height/2,
		z: videoParams.position.z,
	},
	rotation: {
		x: -90,
		y: 0,
		z: 0,
	},
	size:{
		height: titleBlock.size.height ,
		width: titleBlock.size.width - 0.2
	},
	font: "https://cdn.aframe.io/fonts/Roboto-msdf.json",
	color: "white",
	wrapCount: "20", //controls how big the text is
	xOffset: 0.1,
	zOffset: 0.001,
	height: 1,
	align: 'center',
	baseline: 'center',
	letterSpacing: 2,

}

const descriptionText = {
	text: "Find out the secret sauce to creating awesome tasting coffee in a simple 3 step process.",
	padding: 0.1,
	position:{
		x: videoParams.position.x - videoParams.size.width/2,
		y: videoParams.position.y - videoParams.size.height/2 - titleBlock.size.height/2,
		z: videoParams.position.z,
	},
	rotation: {
		x: -90,
		y: 0,
		z: 0,
	},
	size:{
		height: descriptionBlock.size.height ,
		width: descriptionBlock.size.width - 0.2 
	},
	font: "https://cdn.aframe.io/fonts/Roboto-msdf.json",
	color: "white",
	wrapCount: "25", //controls how big the text is
	xOffset: 0.1,
	zOffset: 0.001,
	height: 1,
	align: 'left',
	baseline: 'center',
	letterSpacing: 2,

}

</script>


	{#if isBrowserValid}
	<a-scene embedded vr-mode-ui="enabled: false" arjs="debugUIEnabled: false; patternRatio:0.8">

		<a-assets>
			<video id={videoParams.videoId} crossorigin="anonymous" loop={videoParams.loop} webkit-playsinline playsinline src={videoParams.videoSrc}></video>
			<image id={videoParams.imageId} src={videoParams.imageSrc} />
			<!-- <a-mixin id="text"
				text="align: center; width: 6;
					value: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam"
				></a-mixin> -->
		</a-assets>

		<a-marker preset="custom" type='pattern' url="pattern-video-qr-code.patt">
			<!-- <a-box height="2" width="2" rotation="-90 0 0"></a-box> -->
			<VideoTemplate {titleBlock} {videoParams} {descriptionBlock} {titleText} {descriptionText} />
		</a-marker>
		<a-entity camera></a-entity>
	</a-scene>
	{:else}
		<p>Your Browser is not supported</p>
	{/if}


<style>

</style>