import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import Message from "./Message";

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const { data } = useContext(ChatContext);

    useEffect(() => {
        // 
        setMessages(["hihi"]);
    }, [data.chatId]);

    console.log(messages)

    return (
        <div className="messages">
        {messages.map((m) => (
            <Message message={m} key={m.id} />
        ))}
        </div>
    );
};

export default Messages;
