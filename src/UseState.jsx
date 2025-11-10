
import React , {useState} from "react";

function Component () {
    const [name, setName] = useState("Guest");
    const [item , setItem] = useState();
    const [comment, setComment] = useState("")

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleItemChange(event) {
        setItem(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={item} onChange={handleItemChange} type="number"></input>
            <p>item : {item}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery text"></textarea>
            <p>Comment : {comment}</p>
        </div>
    )
}

export default Component