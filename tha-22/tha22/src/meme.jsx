
import { useState } from "react";
const Meme = ({ meme ,setmeme}) => {
    console.log(meme);
    const [form,setform]= useState({
        template_id:meme.id,
        username:"helloworld64",
        password:"umang12345",
        boxes: [],
    });
    const generateMeme = () =>{
        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
        form.boxes.map((box,index)=>{
            url += `&boxes[${index}][text]=${box.text}`;
        })
        fetch(url).then(res=>res.json())
        .then(data =>{
            setmeme({...meme,url:data.data.url})
        })
        
    }
    return (
        <div className="meme">
            <img src={meme.url} alt="Check your connection!" />
            <div>
                {[...Array(meme.box_count)].map((_, index) => (
                    <input 
                    key ={index}
                    type="text" 
                    placeholder={`Meme Caption ${index+1}`} onChange={(e)=>{
                        const newBoxes = form.boxes;
                        newBoxes[index] = {text: e.target.value};
                        setform({...form,boxes:newBoxes})
                    }} />
                ))}
            </div>
            <div>
                <button onClick ={generateMeme}>Generate Meme</button>
                <button onClick={()=>
                setmeme(null)
                }>Choose Tempelate</button>
            </div>

        </div>
    );

};
export default Meme;