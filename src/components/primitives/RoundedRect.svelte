<script>
import "./roundedrect.js"

export let params

let x = params.position.x
let y = params.position.y
let z = params.position.z

let rotation = `${params.rotation.x} ${params.rotation.y} ${params.rotation.z}`


</script>

<a-rounded  position={`${x} ${y} ${z}`} rotation={rotation} width={params.size.width} height={params.size.height} color={params.color} top-left-radius={params.borderRadius.topLeft} top-right-radius={params.borderRadius.topRight} bottom-left-radius={params.borderRadius.bottomLeft}  bottom-right-radius={params.borderRadius.bottomRight}></a-rounded>