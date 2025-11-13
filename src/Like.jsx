import { useState } from "react";

export default function Like() {
    let [like, setlike] = useState(false);
    let [click, setclick] = useState(0);
    
    let likeStyle = {color : 'red'};
    
    let toggleLike = () => {
        setlike(!like);
        setclick(click + 1);
    }
    
    return (
        <div>
            <p onClick={toggleLike}>
                <p>like = {click}</p>
                { like ? 
                <i className="fa-solid fa-heart" style = {likeStyle}></i>  : 
                <i className="fa-regular fa-heart"></i> }
            </p>
        </div>
    )
}