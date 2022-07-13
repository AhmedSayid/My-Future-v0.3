import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDITMWpktkrC8VDqvi8yP47F5309LycSQg",
    authDomain: "monospace-a3435.firebaseapp.com",
    projectId: "monospace-a3435",
    storageBucket: "monospace-a3435.appspot.com",
    messagingSenderId: "539486483268",
    appId: "1:539486483268:web:0bb803cd88fff46212dd11",
    measurementId: "G-83PF65M3WV"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export var Auth_onAuthStateChanged = onAuthStateChanged
export var auth_Confirm = auth

onAuthStateChanged(auth, function (e) {
    if (!e) {location.href = '/'}
})

export function readFile(input) {
    let file = input.files[0];
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function () {
        document.getElementById('img').src = fileReader.result
    };
}

onAuthStateChanged(auth,function(e){
    if(e){
        document.getElementById('id_name').innerHTML = e.displayName;
        document.getElementById('dropdownMenuButton2').src = e.photoURL;
        document.getElementById('Counted_Auth').style.display='block';
        document.getElementById('name_post').innerHTML = e.displayName
        document.getElementById('img_post').src = e.photoURL
    }
})
