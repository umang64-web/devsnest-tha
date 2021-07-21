const memeBtn = document.getElementById('memeBtn');

const bg = ["#ff3381","green","blue","yellow"];

function colorChange(){
    memeBtn.style.background = bg[Math.floor(Math.random()*bg.length)];
}



var after = '';
function fetchMemes(){
    // colorChange();
    if(document.getElementById('memes')){
        document.getElementById('memes').remove()
    }

    let parentDiv = document.createElement('div')
    parentDiv.id = 'memes'
    fetch(`https://www.reddit.com/r/memes.json?after=${after}`)
    .then(response => response.json())
    // console.log(response);
    .then(body => {
        after = body.data.after;
        console.log(after);
        for(let index = 0; index<body.data.children.length; index++){
            if(body.data.children[index].data.post_hint === 'image'){
                let div = document.createElement('div');
                let h4 = document.createElement('h4');
                let image = document.createElement('img');
                image.src = body.data.children[index].data.url_overridden_by_dest;
                h4.textContent = body.data.children[index].data.title;
                div.appendChild(h4);
                div.appendChild(image);
                parentDiv.appendChild(div)
            }
        }
        document.body.appendChild(parentDiv);
    }
);

}





