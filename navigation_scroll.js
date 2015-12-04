window.onload = function () {

    function getScrollTop() {
        if (typeof window.pageYOffset !== 'undefined') {
            // Most browsers
            return window.pageYOffset;
        }

        var d = document.documentElement;
        if (d.clientHeight) {
            // IE in standards mode
            return d.scrollTop;
        }

        // IE in quirks mode
        return document.body.scrollTop;
    }
    
    var m = document.getElementById('menu');
    m.style.top = "25px";
    
    window.onscroll = function () {
        var box = document.getElementById('menu'), scroll = getScrollTop();

        if (scroll <= 25) {
            box.style.top = "25px";
        } else {
            box.style.top = (scroll) + "px";
        }
    };
    
    var acctBox = document.getElementById('account');
    acctBox.addEventListener('click' , function (alert){
        prompt("User Name:" , "username");
        if(acctPrompt != null) {
            acctBox.innerHTML = acctPrompt;
        }
    });
};

$("#account").click(function(){
    var acctBox = document.getElementById('account');
    var acctPrompt = prompt("User Name:" , "username");
    if(acctPrompt != null) {
        acctBox.innerHTML = acctPrompt;
    }
});

var acctBox = document.getElementById('account');


function changeAcct() {
    var acctBox = document.getElementById('account');
    var acctPrompt = prompt("User Name:" , "username");
    if(acctPrompt != null) {
        acctBox.innerHTML = acctPrompt;
    }
}