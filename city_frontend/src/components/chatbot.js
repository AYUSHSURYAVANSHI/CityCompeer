import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Modal from 'react-modal'; // Import react-modal

// Modal.setAppElement('#root'); // Set the root element for accessibility

export const domain = 'http://127.0.0.1:8000';

export const api = axios.create({
    baseURL: domain,
    withCredentials: true,
});

const ChatbotBox = () => {

    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    //     // Load previous chats from local storage
    // useEffect(() => {
    //     const savedChats = localStorage.getItem('chatHistory');
    //     if (savedChats) {
    //         setChatHistory(JSON.parse(savedChats), { "past": true, message: "Previous" });
    //     }
    // }, []);

    const sendMessage = async () => {
        if (!message.trim()) return; // Don't send empty messages
        try {
            const response = await api.post('/chatbot/', { message });
            const botResponse = response.data.response;
            const updatedHistory = [...chatHistory, { sender: 'user', message }, { sender: 'bot', message: botResponse }];
            setChatHistory(updatedHistory);
            // Save updated chat history to local storage
            // localStorage.setItem('chatHistory', JSON.stringify(updatedHistory));
            setMessage('');
        } catch (error) {
            const botResponse = error.message;
            const updatedHistory = [...chatHistory, { sender: 'user', message }, { sender: 'bot', message: botResponse }];
            setChatHistory(updatedHistory);
            console.error('Error:', error);
            // will use toastnoti later
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className=" mx-auto mt-10 ">
            {/* <ChatbotBox /> */}
            <div className="bg-blue-200 rounded-lg overflow-hidden shadow-lg p-4 m-2">
                <h1 className="text-xl font-semibold mb-2 flex justify-center items-center">Ask your Query!</h1>
                <div className="chat-history bg-white h-80 overflow-y-auto mb-4 p-2 rounded-lg shadow-lg  ">
                    {chatHistory.map((item, index) => (
                        <div key={index} className={`message ${item.sender === 'user' ? 'text-right bg-green-100 pr-4' : 'text-left bg-green-200 pl-4'} p-1 m-1 rounded-lg`}>
                            {item.message}
                        </div>
                    ))}
                </div>
                <div className="chat-input flex items-center">
                    <input
                        type="text"
                        className="flex-grow border rounded-md px-2 py-1 mr-2 focus:outline-none"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md focus:outline-none"
                        onClick={sendMessage}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatbotBox;
