//intializing aos
AOS.init();

//sidenav intialization
document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.sidenav');
var instances = M.Sidenav.init(elems, {});
});


//certification aniamtion


//typewriter function
var i = 0;
var txt = "Hey there! I am a third year IT undergrad at Manipal Institute of Technology. I'm a self-trained Stack Developer, with proficiency in responsive web design and good experience in developing RESTful APIs using NodeJS."; /* The text */
var speed =30 ; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
if (i < txt.length) {
    document.getElementById("daddy").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}
}
document.getElementById("daddy").onload=typeWriter();

//footer color
var fb=document.getElementById('fb');

fb.addEventListener('mouseover',function(){
    fb.classList.add('fb-color');
    fb.classList.remove('fb-color-out')
});

fb.addEventListener('mouseout',function(){
    fb.classList.remove('fb-color');
    fb.classList.add('fb-color-out');
})
//gh
var gh=document.getElementById('gh');

gh.addEventListener('mouseover',function(){
    gh.classList.add('gh-color');
    gh.classList.remove('gh-color-out')
});

gh.addEventListener('mouseout',function(){
    gh.classList.remove('gh-color');
    gh.classList.add('gh-color-out');
})

//li
var li=document.getElementById('li');

li.addEventListener('mouseover',function(){
    li.classList.add('li-color');
    li.classList.remove('li-color-out')
});

li.addEventListener('mouseout',function(){
    li.classList.remove('li-color');
    li.classList.add('li-color-out');
})

//ig
var ig=document.getElementById('ig');

ig.addEventListener('mouseover',function(){
    ig.classList.add('ig-color');
    ig.classList.remove('ig-color-out')
});

ig.addEventListener('mouseout',function(){
    ig.classList.remove('ig-color');
    ig.classList.add('ig-color-out');
})