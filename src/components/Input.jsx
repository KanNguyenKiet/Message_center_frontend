import React, { useContext, useState } from "react";
import Img from "../img/img.png";
import Attach from "../img/attach.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { v4 as uuid } from "uuid";

const Input = () => {
    const [text, setText] = useState("");
    const [img, setImg] = useState(null);

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const handleSend = async () => {
        // handle send message

        setText("");
        setImg(null);
    };
    return (
        <div className="input">
        <input
            type="text"
            placeholder="Type something..."
            onChange={(e) => setText(e.target.value)}
            value={text}
        />
        <div className="send">
            <img src={Attach} alt="" />
            <input
                type="file"
                style={{ display: "none" }}
                id="file"
                onChange={(e) => setImg(e.target.files[0])}
            />
            <label htmlFor="file">
                <img src={Img} alt="" />
            </label>
            <button onClick={handleSend}>Send</button>
        </div>
        </div>
    );
};

export default Input;
