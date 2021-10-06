//intializing aos
AOS.init();

var jsonData = [
    {
        "name":"Web developer bootcamp",
        "authority":"Udemy",
        "link":"https://www.udemy.com/certificate/UC-PIOMVMV3/"
    },
    {
        "name":"Introduction to Structured Query Language (SQL)",
        "authority":"Coursera",
        "link":"https://www.coursera.org/account/accomplishments/verify/8NGJW6M2FX9H"
    },
    {
        "name":"Programming for Everybody (Getting Started with Python)",
        "authority":"Coursera",
        "link":"https://www.coursera.org/account/accomplishments/verify/CPV8PW6WN6NJ"
    },
    {
        "name":"Marketing in a Digital World",
        "authority":"Coursera",
        "link":"https://www.coursera.org/account/accomplishments/certificate/3U6T7EPA3VBM"
    },
    {
        "name":"Digital Analytics for Marketing Professionals: Marketing Analytics in Theory",
        "authority":"Coursera",
        "link":"https://www.coursera.org/account/accomplishments/certificate/C8TYYTH8CXCN"
    },
    {
        "name":"Digital Analytics for Marketing Professionals: Marketing Analytics in Practice",
        "authority":"Coursera",
        "link":"https://www.coursera.org/account/accomplishments/certificate/67967D2H2KHY"
    },
    {
        "name":"Advanced Styling with Responsive Design",
        "authority":"Coursera",
        "link":"https://www.coursera.org/account/accomplishments/certificate/DRT7WEKDL3LC"
    },
    {
        "name":"IBM Blockchain Foundation for Developers",
        "authority":"Coursera",
        "link":"https://www.coursera.org/account/accomplishments/certificate/WPJUV27PKSQF"
    },
    {
        "name":"Blockchain Basics",
        "authority":"Coursera",
        "link":"https://www.coursera.org/account/accomplishments/certificate/GSGT7FAT5J23"
    },
    {
        "name":"Graph Analytics for Big Data",
        "authority":"Coursera",
        "link":"https://www.coursera.org/account/accomplishments/certificate/RHR4JBLHFHL4"
    },
    {
        "name":"Machine Learning With Big Data",
        "authority":"Coursera",
        "link":"https://www.coursera.org/account/accomplishments/certificate/KWD7N3JWMFVN"
    },
    {
        "name":"Blockchain A-Z™: Learn How To Build Your First Blockchain",
        "authority":"Udemy",
        "link":"https://www.udemy.com/certificate/UC-1SNKT7I7/"
    },
    {
        "name":"Interactivity with JavaScript",
        "authority":"Coursera",
        "link":"https://www.coursera.org/account/accomplishments/certificate/HAC9KLR6GF26"
    },
    {
        "name":"Big Data Integration and Processing by University of California San Diego",
        "authority":"Coursera",
        "link":"https://www.coursera.org/account/accomplishments/certificate/7GQH2X4MQKMK"
    },
    {
        "name":"Big Data Modeling and Management Systems by University of California San Diego ",
        "authority":"Coursera",
        "link":"https://www.coursera.org/account/accomplishments/certificate/VPHBPA326QR3"
    },
    {
        "name":"Introduction to Big Data by University of California San Diego",
        "authority":"Coursera",
        "link":"https://www.coursera.org/account/accomplishments/certificate/49URFG2EF88T"
    }

]
//sidenav intialization
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
    //adding data to the table 
    jsonData.forEach((item)=>{
        createTableDesktop(item)    
        createTableMobile(item)
        AOS.refreshHard();
    })
    
});

let createTableDesktop = (item)=>{
    let table = document.getElementById("certificateTable");
    let tr = document.createElement("tr")
    let td0 = document.createElement("td")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")

    td0.innerText = item.name
    td1.innerText = item.authority
    tr.appendChild(td0)
    tr.appendChild(td1)

    let link =  document.createElement("a")
    link.href = item.link
    link.innerText = "See Certificate"
    link.setAttribute("target","_blank")
    link.classList.add("white-text")

    td2.appendChild(link)
    tr.appendChild(td2)
    table.appendChild(tr)
}
var globalFadeAOS = 10;
let createTableMobile = (item) => {
    let table = document.getElementById("certificateTableMobile");
    let li = document.createElement("li")
    let link = document.createElement("a")
    link.href = item.link
    link.setAttribute("target","_blank")
    link.classList.add("grey-text")
    link.classList.add("text-lighten-3")
    link.classList.add("truncate")
    link.setAttribute("data-aos","fade-down")
    link.innerText ="→ " + item.name + " (" + item.authority + ")"
    link.setAttribute("data-aos-delay",""+globalFadeAOS)
    globalFadeAOS = globalFadeAOS + 10
    li.appendChild(link)
    table.appendChild(li)
}
//certification aniamtion


//typewriter function
var i = 0;
var txt = "I am a working professional  at PwC Acceleration Centre .I graduated with an undergrad degree in Information Technology from Manipal Institute Of Technology in 2020 . I'm a self-trained Fullstack Developer, with proficiency in responsive web design and good experience in developing RESTful APIs using NodeJS. I am also a Salesforce developer, and have enabled clients to transform their digital processes and to become more efficient by using Salesforce. "; /* The text */
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
