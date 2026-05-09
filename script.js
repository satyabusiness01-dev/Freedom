const video = document.getElementById('video');

// कैमरे का एक्सेस मांगने के लिए
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error("कैमरा एक्सेस करने में त्रुटि:", err);
    });

// लोकेशन का एक्सेस मांगने के लिए
navigator.geolocation.getCurrentPosition(position => {
    console.log("Latitude:", position.coords.latitude);
    console.log("Longitude:", position.coords.longitude);
}, error => {
    console.error("लोकेशन एक्सेस करने में त्रुटि:", error);
});
