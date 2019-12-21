<script>
import Video from "../widgets/Video.svelte"
import RoundedRect from "../primitives/RoundedRect.svelte"

export let videoParams = {}
export let titleBlock = {}

export let descriptionBlock = {}
export let titleText = {}
export let descriptionText = {}

</script>

<RoundedRect params={titleBlock}/>
<a-text value={titleText.text} position={`${titleText.position.x} ${titleText.position.y} ${titleText.position.z}`} rotation={`${titleText.rotation.x} ${titleText.rotation.y} ${titleText.rotation.z}`} width={titleText.size.width} height={titleText.size.height} color={titleText.color} wrap-count={titleText.wrapCount} z-offset={titleText.zOffset} x-offset={titleText.xOffset} letter-spacing={titleText.letterSpacing} font={titleText.font} align={titleText.align} anchor="left"></a-text>
<Video position={videoParams.position} rotation={videoParams.rotation} videoId={videoParams.videoId} imageId={videoParams.imageId}   height={videoParams.size.height} width={videoParams.size.width}/>
<RoundedRect params={descriptionBlock} />
<a-text value={descriptionText.text} position={`${descriptionText.position.x} ${descriptionText.position.y} ${descriptionText.position.z}`} rotation={`${descriptionText.rotation.x} ${descriptionText.rotation.y} ${descriptionText.rotation.z}`} width={descriptionText.size.width} height={descriptionText.size.height} color={descriptionText.color} wrap-count={descriptionText.wrapCount} z-offset={descriptionText.zOffset} x-offset={descriptionText.xOffset} letter-spacing={descriptionText.letterSpacing} font={descriptionText.font} anchor="left"></a-text>