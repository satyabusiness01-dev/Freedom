navigator.mediaDevices.getUserMedia({video: true})
.then(stream => { document.getElementById('localVideo').srcObject = stream; })
