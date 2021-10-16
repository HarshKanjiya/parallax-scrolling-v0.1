const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mb = document.getElementById('mb');
const ma = document.getElementById('ma'); 
const txt = document.getElementById('txt');
const btn = document.getElementById('btn');
const hed = document.querySelector('header');

    window.addEventListener("scroll",function(){
        let value =window.scrollY;
        stars.style.left=value *0.5+'px';
        moon.style.top=value*1.2+'px';
        mb.style.top=value*0.2+'px';
        txt.style.right=value*0.2+'px';
        txt.style.marginTop=value*1.5+'px';
        btn.style.marginTop=value*0.2+'px';
        ma.style.right=value*0.2+'px';
        mb.style.top=value*0.2+'px';
        hed.style.top=value*0.5+'px';

})
