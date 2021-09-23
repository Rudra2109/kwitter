var firebaseConfig = {
    apiKey: "AIzaSyDFRtCL2lruKQGcwxSMBm_kh0_WwbC8JyQ",
    authDomain: "kwitter-7876e.firebaseapp.com",
    projectId: "kwitter-7876e",
    storageBucket: "kwitter-7876e.appspot.com",
    messagingSenderId: "144049235046",
    appId: "1:144049235046:web:bfce2d29f0a443b461f9a7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name"); 
  room_name = localStorage.getItem("room_name");
  function send() { msg = document.getElementById("msg").value; 
  firebase.database().ref(room_name).push({ name: user_name, message: msg, like: 0 });
  document.getElementById("msg").value = ""; }

  