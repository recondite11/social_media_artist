// NAVIGATION BAR TOGGLER LOGIC
let mobilemenu= document.getElementById('mobile-menu')
mobilemenu.addEventListener('click', function () {
    let nav= document.getElementById('nav');
    let menu= document.getElementById("menu");
    let rightnav= document.getElementById('right')
    nav.classList.toggle('resp-nav')
    menu.classList.toggle('resp-menu')
    rightnav.classList.toggle('resp-right-nav')
});

// NAVIGATION BAR TAB SWITCH LOGIC 
let currentLocation= window.location.href;
let tabs= document.querySelectorAll('#menu a');
for(i=0; i<tabs.length; i++){
    let tab= tabs[i];
    tab.classList.remove('active')
    if(currentLocation.includes(tab.getAttribute('href'))){
        tab.classList.add('active')
    }
}
console.log(currentLocation)
// HOVER EFFECT ON POSTS 
let postimgs= document.getElementsByClassName('post-img');
let posthovers= document.getElementsByClassName('post-hover');
for(i=0; i<postimgs.length; i++){
    let postimg= postimgs[i];
    let posthover= posthovers[i];
    postimg.addEventListener('mouseover', function(){
        posthover.style.visibility= 'visible'
    })
    postimg.addEventListener('mouseout', function(){
        posthover.style.visibility= 'hidden'
    })
}
// LIKE BUTTON
let likebtns= document.getElementsByClassName('like-btn');
let likecounts= document.getElementsByClassName('like-count');
for(i=0; i<likebtns.length; i++){
    let likebtn= likebtns[i];
    let likecount= likecounts[i];
    let like= false
    likebtn.addEventListener('click', function(){
        likebtn.classList.toggle('like-toggle')
        likecount.classList.toggle('like-toggle')
        let num= parseInt(likecount.innerHTML)
        if(!like){
            likecount.innerHTML= num + 1;
            like= true
        }
        else{
            likecount.innerHTML= num - 1;
            like= false
        }
    })
}

// HOVER ON PROFILE NAME
let profilecards= document.getElementsByClassName('profile-overview');
let profilecontent= document.getElementsByClassName('profile-content');
for(i=0; i<profilecards.length; i++){
    let profilename= profilecontent[i].querySelector('a');
    let profilecard= profilecards[i]
    profilename.addEventListener('mouseover', function(){
        profilecard.classList.add('profile-toggle')
    })
    profilename.addEventListener('mouseout', function(){
        profilecard.classList.remove('profile-toggle')
    })
}

// LOGIN FORM 
function login() {
    var loginUserID = document.getElementById('loginUserID').value;
    var loginPassword = document.getElementById('loginPassword').value;
    var login = document.getElementById('login')
    console.log(login)
    var signup= document.getElementById('signup')
    var post= document.getElementById('post')
    // Check if loginUserID and loginPassword match a predefined value (for simplicity)
    if (loginUserID === 'user123' && loginPassword === 'pass123') {
        alert('Login successful!');
        // console.log(login)
        window.location.href = 'index.html';
    } else {
        alert('Login failed. Please check your credentials.');
    }
}

// SIGN UP FORM
function signup() {
    var signupFirstName = document.getElementById('signupFirstName').value;
    var signupLastName = document.getElementById('signupLastName').value;
    var signupDOB = document.getElementById('signupDOB').value;
    var signupUserID = document.getElementById('signupUserID').value;
    var signupPassword = document.getElementById('signupPassword').value;

    // Perform signup logic (for simplicity, just an alert in this example)
    alert('User signed up!\n\n' +
          'Name: ' + signupFirstName + ' ' + signupLastName + '\n' +
          'Date of Birth: ' + signupDOB + '\n' +
          'User ID: ' + signupUserID);
}