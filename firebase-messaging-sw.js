importScripts('https://www.gstatic.com/firebasejs/5.8.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.8.5/firebase-messaging.js');
var config = {
    apiKey: "AIzaSyBD9VhHWmH5QiCJmx7Z36zeYvTadY4nrc8",
    authDomain: "knaimero-pwa.firebaseapp.com",
    databaseURL: "https://knaimero-pwa.firebaseio.com",
    projectId: "knaimero-pwa",
    storageBucket: "knaimero-pwa.appspot.com",
    messagingSenderId: "260761984788"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    const title = 'Hola Brujaa - PWA';
    const options = {
        body: payload.data.body
    };
    return self.registration.showNotification(title, options);
});