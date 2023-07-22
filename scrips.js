
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDzOuSdqlUVqKU2yCmFlEjF-Hb4S38TRMo",
  authDomain: "esp32-9f1cf.firebaseapp.com",
  databaseURL: "https://esp32-9f1cf-default-rtdb.firebaseio.com",
  projectId: "esp32-9f1cf",
  storageBucket: "esp32-9f1cf.appspot.com",
  messagingSenderId: "776106732120",
  appId: "1:776106732120:web:bca4e005f1fe38bfeb782d",
  measurementId: "G-Q06JCJ7665"
};
 
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var btnOn = document.getElementById("btON");
var btnOff = document.getElementById("btOFF");

btnOn.onclick = function() {
  database.ref("LED").update({
    "LED1":1
  })
}

btnOff.onclick = function() {
  database.ref("LED").update({
    "LED1":0 
  })
}

database.ref("/sensor/temperature").on("value", function(snapshot){
  var temp = snapshot.val();
  document.getElementById("Nhietdo").innerHTML = temp;
}) 