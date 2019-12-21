export default function() {
	const constraints = {
		audio: true,
		video: { facingMode: { exact: 'environment' } }
	};

	navigator.mediaDevices
		.getUserMedia(constraints)
		.then(function(stream) {
			const videoEl = document.getElementsByTagName('video')[0];
			videoEl.srcObject = stream;
		})
		.catch(function(error) {
			console.log(error);
		});
}
