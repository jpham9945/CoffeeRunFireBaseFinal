
(function (window) {
    'use strict';
    var App = window.App || {};
     
      var FirebaseConfig = {
        apiKey: "AIzaSyDQgrxq1-kU_La3jE65RpMthw9O_z1BjM8",
        authDomain: "coffeerun-e90db.firebaseapp.com",
        projectId: "coffeerun-e90db",
        storageBucket: "coffeerun-e90db.appspot.com",
        messagingSenderId: "1067664399292",
        appId: "1:1067664399292:web:79ead3d86458e3067d29b9",
        measurementId: "G-2EFF3K7RXE"
      };
      
App.FirebaseConfig = FirebaseConfig;
firebase.initializeApp(App.FirebaseConfig);
window.App = App;
})(window);