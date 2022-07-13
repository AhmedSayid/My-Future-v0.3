import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup,GithubAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";
import { getDatabase, ref, set, get, onChildAdded, update } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDITMWpktkrC8VDqvi8yP47F5309LycSQg",
  authDomain: "monospace-a3435.firebaseapp.com",
  projectId: "monospace-a3435",
  storageBucket: "monospace-a3435.appspot.com",
  messagingSenderId: "539486483268",
  appId: "1:539486483268:web:0bb803cd88fff46212dd11",
  measurementId: "G-83PF65M3WV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
const db = getDatabase(app)
///
const provider_google = new GoogleAuthProvider(app);
const provider_github = new GithubAuthProvider(app);


// provider
provider_github.setCustomParameters({
    'allow_signup': 'true'
});
function Provider_Router(){
    onAuthStateChanged(auth,function(e){
        update(ref(db,e.uid),{
            "Name":e.displayName,
            "Type":"provider"
        }).then(()=>{
            location.href="./posts"
        }).catch(()=>{
            signOut(auth)
        })
    })
}
function Buyer_Router(){
    onAuthStateChanged(auth,function(e){
        update(ref(db,e.uid),{
            "Name":e.displayName,
            "Type":"buyer"
        }).then(()=>{
            location.href="./buy"
        }).catch(()=>{
            signOut(auth)
        })
    })
}
//////////provider
export function signin_with_github_provider(){
    document.getElementById('signin_with_github_provider').onclick = function(){
        signInWithPopup(auth,provider_github).then((e)=>{
            Provider_Router()
        })
    }
}
export function signin_with_google_provider(){
    document.getElementById('signin_with_google_provider').onclick = function(){
        signInWithPopup(auth,provider_google).then((e)=>{
            Provider_Router()
        })
    }
}
//////////buyer
export function signin_with_github_buyer(){
    document.getElementById('signin_with_github_buyer').onclick = function(){
        signInWithPopup(auth,provider_github).then((e)=>{
            Buyer_Router()
        })
    }
}
export function signin_with_google_buyer(){
    document.getElementById('signin_with_google_buyer').onclick = function(){
        signInWithPopup(auth,provider_google).then((e)=>{
            Buyer_Router()
        })
    }
}

export function logOut(){
    document.getElementById('logout').onclick = function(){
        signOut(auth).then(()=>{location.href='/'})
    }
}
export function profile(){
    document.getElementById('profile').onclick = function(){location.href='/profile'}
}


onAuthStateChanged(auth,function(e){
    if(e){
        document.getElementById('container_blogs').style.display='none'
        ///
        document.getElementById('Counted_Auth').style.display='block'
        document.getElementById('dropdownMenuButton2').src = e.photoURL;
        document.getElementById('id_name').innerHTML = e.displayName;
    }
})
