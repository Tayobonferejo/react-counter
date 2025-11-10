
import React , {useState} from "react";

function Component () {
    const [name, setName] = useState("Guest");
    const [item , setItem] = useState();
    const [comment, setComment] = useState("");
    const [payment, setType] = useState("")

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleItemChange(event) {
        setItem(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentType(event) {
        setType(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={item} onChange={handleItemChange} type="number"></input>
            <p>item : {item}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery text"></textarea>
            <p>Comment : {comment}</p>

            <select value={payment} onChange={handlePaymentType}>
                <option value="">select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">GiftCard</option>
            </select>
            <p>Payment: {payment}</p>
        </div>
    )
}

export default Component