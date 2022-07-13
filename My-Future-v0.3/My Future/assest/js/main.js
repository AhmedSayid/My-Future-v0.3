/*
======================================================
==          d r o p down  m e n u icon              ==
======================================================
*/
let dropMenu = document.getElementById('dropMenu'),
ul = document.getElementById('dpm');
dropMenu.addEventListener('click', () => {
    dropMenu.classList.toggle('open')
    if (dropMenu.classList.contains('open')) {
        ul_2.style.display = 'none';
        ul.style.display = 'block';
    } else {
        ul.style.display = 'none';
    }
})


let dpm_prof = document.getElementById('dropMenu_2'),
ul_2 = document.getElementById('dpm_prof');
dpm_prof.addEventListener('click', () => {
    dpm_prof.classList.toggle('open')
    if (dpm_prof.classList.contains('open')) {
        ul.style.display = 'none';
        ul_2.style.display = 'block';
    } else {
        ul_2.style.display = 'none';
    }
})

function ss() {
    dd.style.display = "none";
}
/*
======================================================
==                 login display form               ==
======================================================
*/
document.getElementById('no').onclick = () => {
    var
        nonaty = document.getElementById("all").style.display = "none";
}
//##////##////##////##////##////##////##////##////##//
document.getElementById('willHiden').onclick = () => {
    var
        nory = document.getElementById("all").style.display = "block";
}
//##////##////##////##////##////##////##////##////##//
document.getElementById('yeeh').onclick = () => {
    var
        alby = document.getElementById("done").style.display = "none";
}
//##////##////##////##////##////##////##////##////##//
document.getElementById('ye').onclick = () => {
    var
        alby = document.getElementById("do").style.display = "none";
}
//##////##////##////##////##////##////##////##////##//
document.getElementById('new').onclick = () => {
    var
        wifty = document.getElementById("done").style.display = "block";
}

document.getElementById('new').onclick = () => {
    var
        wifty = document.getElementById("done").style.display = "block";
}
//##////##////##////##////##////##////##////##////##//
document.getElementById('new').onclick = () => {
    var
        wifty = document.getElementById("done").style.display = "block";
    document.getElementById("all").style.display = "none";
    //##////##////##////##////##////##////##////##////##//
}
//##////##////##////##////##////##////##////##////##//
document.getElementById('nw').onclick = () => {
    var
        wifty = document.getElementById("do").style.display = "block";
}

document.getElementById('nw').onclick = () => {
    var
        wifty = document.getElementById("do").style.display = "block";
}
//##////##////##////##////##////##////##////##////##//
document.getElementById('nw').onclick = () => {
    var
        wifty = document.getElementById("do").style.display = "block";
    document.getElementById("all").style.display = "none";
}


function go() {
    location.href = "buy/buyr.html";
}
function ss() {
    location.href = "provider/provider.html";
}
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
///////////////////////////////////////////////////////////////////////////////////

function getstart() {
    location.href = "./signup.html"
};
/*
======================================================
==              cooki and scroll top btn            ==
======================================================
*/
document.addEventListener("DOMContentLoaded", function () {
    var scrollTopBtn = document.querySelector('.scrollTop-btn');
    var offsetPosition = window.innerWidth < 992 ? '-50' : window.innerWidth < 1150 ? '30' : '100';
    var bottomPosition = 23;
    var stopPosition = offsetPosition - bottomPosition;

    var handleButtonVisibility = function () {
        window.scrollY > 200 ? scrollTopBtn.classList.add('show') : scrollTopBtn.classList.remove('show');

        var dynamicPosition = offsetPosition - (document.body.clientHeight - window.scrollY - window.innerHeight);
        if (window.scrollY && window.scrollY + window.innerHeight + stopPosition >= document.body.clientHeight) {
            scrollTopBtn.style.bottom = `${dynamicPosition}px`;
        } else {
            scrollTopBtn.style.bottom = `${bottomPosition}px`;
        }
    }

    handleButtonVisibility()

    window.addEventListener("scroll", function () {
        handleButtonVisibility()
    })

    var smoothScrollToTop = function (duration) {
        var headerElHeight = document.getElementById('mainHeader')
        var target = document.querySelectorAll('html')[0]
        var targetPosition = target.getBoundingClientRect().top - headerElHeight
        var startPosition = window.pageYOffset
        var startTime = null

        var ease = function (t, b, c, d) {
            t /= d / 2
            if (t < 1) return c / 2 * t * t + b
            t--
            return -c / 2 * (t * (t - 2) - 1) + b
        }

        var animation = function (currentTime) {
            if (startTime === null) startTime = currentTime
            var timeElapsed = currentTime - startTime
            var run = ease(timeElapsed, startPosition, targetPosition, duration)
            window.scrollTo(0, run)
            if (timeElapsed < duration) requestAnimationFrame(animation)
        }
        requestAnimationFrame(animation)
    }

    scrollTopBtn.addEventListener("click", function () {
        smoothScrollToTop(100)
    })
})
///////////////////////////////////////////////////////////////////////////////////
function updateCookieMessage(display) {
    var _display = display || 'flex'
    var cookieMessage = document.getElementById('cookie_message')
    if (cookieMessage) {
        cookieMessage.style.display = _display
    }
}


function rfUpdateCookie() {
    var date = new Date()
    date.setDate(date.getDate() + 100)
    document.cookie = rfApproveCookieKey + '; path=/; expires=' + date.toUTCString()
}

function hideMsg() {
    updateCookieMessage('none')
    rfUpdateCookie()
}
function like(){
    document.getElementById("likee").style.color="#0d6efd";
}
function love(){
    document.getElementById("love").style.color="#dc3545";
}
// var cookie = document.cookie

// setTimeout(function () {
//     var showRfApproveCookie = !__isRfApp;
//     if (cookie && cookie.indexOf(rfApproveCookieKey) === -1 && showRfApproveCookie) {
//         updateCookieMessage('flex')
//     } else {
//         rfUpdateCookie()
//         updateCookieMessage('none')
//     }
// }, 3000)
