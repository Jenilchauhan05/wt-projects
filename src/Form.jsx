import { use, useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        name: "",
        username: "",
    });
    
    let handleinputChange = (e) => {
        let fieldName = e.target.value;
    };
    
    return (
        <form action="">
            <label htmlFor="name">Full Name :</label>
            <input type="text" placeholder="Enter your name" value={formData.name} onChange={handleNameChange} id="name"/>
            <button type="submit">Submit</button>
            <br />
            <label htmlFor="username">UserName :</label>
            <input type="text" placeholder="Enter your username" value={formData.username} onChange={handleNameChange} id="username" />
            <button type="submit">Submit</button>
        </form>
    )
}