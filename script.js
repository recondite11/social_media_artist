// NAVIGATION BAR TOGGLER LOGIC
function navBarToggler(){
let mobileMenu= document.getElementById('mobile-menu')
mobileMenu.addEventListener('click', function () {
    let nav= document.getElementById('nav');
    let menu= document.getElementById("menu");
    let rightNav= document.getElementById('right')
    nav.classList.toggle('resp-nav')
    menu.classList.toggle('resp-menu')
    rightNav.classList.toggle('resp-right-nav')
});
}
navBarToggler()

// LOGIN FORM
function login() {
    var loginUserID = document.getElementById('loginUserID').value;
    var loginPassword = document.getElementById('loginPassword').value;
    if (loginUserID == 'user123' && loginPassword == 'pass123') {
        // Set a flag in localStorage to indicate successful login
        localStorage.setItem('isLoggedIn', 'true');
        // Redirect to the main page
        window.location.href = 'index.html';
    } else {
        // Handle unsuccessful login
        alert('Login failed. Please check your credentials.');
    }
}

function logout() {
    // Clear the login status from localStorage
    localStorage.removeItem('isLoggedIn');
    // Redirect to the main page
    window.location.href = 'index.html';
}

// Check login status on page load
document.addEventListener('DOMContentLoaded', function () {
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        // Hide the login and signup buttons
        var loginButton = document.getElementById('login');
        var signupButton = document.getElementById('signup');
        document.getElementById('post').style.display = 'flex';
        document.getElementById('logout').style.display = 'flex';
        if (loginButton) {
            loginButton.style.display = 'none';
        }
        if (signupButton) {
            signupButton.style.display = 'none';
        }
    }
});



// SIGN UP FORM 
function signup() {
    var successfulSignup = true;
    if (successfulSignup) {
        // Set a flag in localStorage to indicate successful signup
        localStorage.setItem('isLoggedIn', 'true');
        // Redirect to the main page
        window.location.href = 'index.html';
    } else {
        // Handle unsuccessful signup
        alert('Signup failed. Please try again.');
    }
}

function logout() {
    // Clear the login and signup status from localStorage
    localStorage.removeItem('isLoggedIn');
    // Redirect to the main page
    window.location.href = 'index.html';
}

// Check login and signup status on page load
document.addEventListener('DOMContentLoaded', function () {
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        // Hide the login and signup buttons
        var loginButton = document.getElementById('login');
        var signupButton = document.getElementById('signup');
        document.getElementById('post').style.display = 'flex';
        document.getElementById('logout').style.display = 'flex';
        if (loginButton) {
            loginButton.style.display = 'none';
        }
        if (signupButton) {
            signupButton.style.display = 'none';
        }
    }
});


// NAVIGATION BAR TAB SWITCH LOGIC 
function navTabSwitch(){
let currentLocation= window.location.href;
let tabs= document.querySelectorAll('#menu a');
for(i=0; i<tabs.length; i++){
    let tab= tabs[i];
    tab.classList.remove('active')
    if(currentLocation.includes(tab.getAttribute('href'))){
        tab.classList.add('active')
    }
}
}
navTabSwitch()

// HOVER EFFECT ON POSTS
function postHover(){
let postImgs= document.getElementsByClassName('post-img');
let postHovers= document.getElementsByClassName('post-hover');
for(i=0; i<postImgs.length; i++){
    let postImg= postImgs[i];
    let postHover= postHovers[i];
    postImg.addEventListener('mouseover', function(){
        postHover.style.visibility= 'visible'
    })
    postImg.addEventListener('mouseout', function(){
        postHover.style.visibility= 'hidden'
    })
}
}
postHover()

// LIKE BUTTON
function likeButton(){
let likeBtns= document.getElementsByClassName('like-btn');
let likeCounts= document.getElementsByClassName('like-count');
for(i=0; i<likeBtns.length; i++){
    let likeBtn= likeBtns[i];
    let likeCount= likeCounts[i];
    let like= false
    likeBtn.addEventListener('click', function(){
        likeBtn.classList.toggle('like-toggle')
        likeCount.classList.toggle('like-toggle')
        let num= parseInt(likeCount.innerHTML)
        if(!like){
            likeCount.innerHTML= num + 1;
            like= true
        }
        else{
            likeCount.innerHTML= num - 1;
            like= false
        }
    })
}
}
likeButton()

// HOVER ON PROFILE NAME
function profileHover(){
let profileCards= document.getElementsByClassName('profile-overview');
let profileContent= document.getElementsByClassName('profile-content');
for(i=0; i<profileCards.length; i++){
    let profileName= profileContent[i].querySelector('a');
    let profileCard= profileCards[i]
    profileName.addEventListener('mouseover', function(){
        profileCard.classList.add('profile-toggle')
    })
    profileName.addEventListener('mouseout', function(){
        profileCard.classList.remove('profile-toggle')
    })
}
}
profileHover()

// CATEGORY CHANGE ON EXPLORE
function categoryChange(){
let categoryTabs = document.getElementsByClassName('category-tab');
let categoryCards= document.getElementsByClassName('category-card');
for (let i = 0; i < categoryTabs.length; i++) {
    let categoryTab = categoryTabs[i];
    let categoryCard = categoryCards[i];
    categoryTab.addEventListener('click', function () {
        for (let j = 0; j < categoryTabs.length; j++) {
            categoryTabs[j].classList.remove('active-tab');
            categoryCards[j].classList.remove('active-card');
        }
        categoryTab.classList.add('active-tab');
        categoryCard.classList.add('active-card');
    });
}
}
categoryChange()

// PROFILE CHANGE ON HIRE 
function profileChange(){
    let profileTogglers= document.getElementsByClassName('category-switch');
    let profiles= document.getElementsByClassName('hire-profiles');
    for (let i = 0; i < profileTogglers.length; i++) {
        let profileToggler = profileTogglers[i];
        let profile = profiles[i];
        profileToggler.addEventListener('click', function () {
            for (let j = 0; j < profileTogglers.length; j++) {
                profileTogglers[j].classList.remove('active-btn');
                profiles[j].classList.remove('active-profile');
            }
            profileToggler.classList.add('active-btn');
            profile.classList.add('active-profile');
        });
    }
    }
    profileChange()

// JOB PROFILE CHANGE ON HIRE 
function jobProfileChange(){
    let jobProfileTogglers= document.querySelectorAll('.job-tab');
    let jobProfiles= document.getElementsByClassName('job-cards');
    for (let i = 0; i < jobProfileTogglers.length; i++) {
        let jobProfileToggler = jobProfileTogglers[i];
        let jobProfile = jobProfiles[i];
        jobProfileToggler.addEventListener('click', function () {
            for (let j = 0; j < jobProfileTogglers.length; j++) {
                jobProfileTogglers[j].classList.remove('active-job-tab');
                jobProfiles[j].classList.remove('active-job');
            }
            jobProfileToggler.classList.add('active-job-tab');
            jobProfile.classList.add('active-job');
        });
    }
    }
    jobProfileChange()