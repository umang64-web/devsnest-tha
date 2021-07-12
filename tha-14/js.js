const button = document.getElementById('btn');
const box = document.querySelector('.box');
const hover = document.getElementById('hover');
const body  = document.querySelector('body');
const text = document.getElementById('a');

hover.addEventListener("mouseover", function(){
    body.style.backgroundColor = "red"
});

text.addEventListener("select", function(){
    alert('text selected');
});


function clicking(){
    const Name = document.getElementById('name').value;
    var para = document.createElement('p');
    para.id = "p1";
    para.innerHTML = `Hello ${Name} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit deleniti placeat fuga id distinctio doloremque facilis magnam eveniet! Non consectetur ut sequi temporibus est nam dolor. Pariatur quisquam consectetur vel.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit deleniti placeat fuga id distinctio doloremque facilis magnam eveniet! Non consectetur ut sequi temporibus est nam dolor. Pariatur quisquam consectetur vel.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit deleniti placeat fuga id distinctio doloremque facilis magnam eveniet! Non consectetur ut sequi temporibus est nam dolor. Pariatur quisquam consectetur vel.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit deleniti placeat fuga id distinctio doloremque facilis magnam eveniet! Non consectetur ut sequi temporibus est nam dolor. Pariatur quisquam consectetur vel.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit deleniti placeat fuga id distinctio doloremque facilis magnam eveniet! Non consectetur ut sequi temporibus est nam dolor. Pariatur quisquam consectetur vel.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit deleniti placeat fuga id distinctio doloremque facilis magnam eveniet! Non consectetur ut sequi temporibus est nam dolor. Pariatur quisquam consectetur vel.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit deleniti placeat fuga id distinctio doloremque facilis magnam eveniet! Non consectetur ut sequi temporibus est nam dolor. Pariatur quisquam consectetur vel.`
    box.appendChild(para);
    para.addEventListener('scroll',scrolling);

}
var NumberOfScrolls = 0;
const scrolls = document.createElement('span');
scrolls.id = "scrolls"


function scrolling(){
    NumberOfScrolls++;
    scrolls.innerHTML = `NUMBEROFSCROLLS:- ${NumberOfScrolls}`
    box.appendChild(scrolls) 
}
const resize  = document.getElementById('resize')
function chotaBada(){
    var w = window.outerWidth;
  var h = window.outerHeight;
  var txt = "Window size: width=" + w + ", height=" + h;
  resize.innerHTML = txt;

}