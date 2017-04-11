let loggedIn = document.getElementById('loggedIn');
loggedIn.style.visibility= 'hidden';
let span;

let config = {
    apiKey: "AIzaSyD8xzaxvu3ZfoZHkziiWO4GUecvb20t3oU",
    authDomain: "first-firebase-8a0b7.firebaseapp.com",
    databaseURL: "https://first-firebase-8a0b7.firebaseio.com",
    storageBucket: "first-firebase-8a0b7.appspot.com",
    messagingSenderId: "711306822483"
};
firebase.initializeApp(config);

let provider = new firebase.auth.GithubAuthProvider();
var providerFb = new firebase.auth.FacebookAuthProvider();

let githubLogIn = () => {
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        showLogOut();
        // ...

    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used
        var credential = error.credential;
        // ...
    });
};

let authLogOut = () => {
    firebase.auth().signOut().then(function () {
        console.log('utloggad');
        loggedIn.style.visibility= 'hidden';
        span.innerHTML = '';
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });
}
let showLogOut = () => {
    loggedIn.style.visibility = 'visible';
    let showThings = document.getElementById('show-things');
    span = document.createElement('span');
    span.innerHTML = 'log out';
    showThings.appendChild(span);

    span.addEventListener('click', authLogOut);

}





let faceBLogin = () => {
    firebase.auth().signInWithPopup(providerFb).then(function(result) {
        if (result.credential) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // ...
        }
        // The signed-in user info.
        let user = result.user;
        console.log(result);
        showLogOut();
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}

let ghButton = document.getElementById('login-gh');
ghButton.addEventListener('click', githubLogIn);

let fbButton = document.getElementById('login-fb');
fbButton.addEventListener('click', faceBLogin);

