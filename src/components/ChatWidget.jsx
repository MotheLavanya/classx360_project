import React, { useState, useEffect, useRef } from 'react';
import {
    FaUserShield, FaPaperPlane, FaTimes, FaQuestionCircle, FaArrowLeft,
    FaClock
} from 'react-icons/fa';
import './ChatWidget.css';

const ChatWidget = ({ isOpen, onClose, userName }) => {
    const [step, setStep] = useState('welcome'); // welcome, form, chat
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [preChatData, setPreChatData] = useState({
        name: userName || '',
        email: '',
        category: ''
    });
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    if (!isOpen) return null;

    const quickOptions = [
        "📘 How to get started",
        "🧑‍🏫 Help with courses",
        "🔐 Login or account issues",
        "📊 Track progress",
        "📄 Other questions"
    ];

    const autoSuggestions = [
        "How do I reset my password?",
        "Where can I view my course progress?",
        "Need a quick video tutorial?"
    ];

    const startChat = (category) => {
        setPreChatData({ ...preChatData, category });
        setStep('form');
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setStep('chat');
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages([
                { sender: 'bot', text: `Thanks ${preChatData.name} !A support agent will be with you shortly regarding your issue with "${preChatData.category}".` },
                { sender: 'bot', text: "In the meantime, feel free to check these suggestions below or type your message." }
            ]);
        }, 1500);
    };

    const handleSendMessage = (e) => {
        if (e.key === 'Enter' && e.target.value.trim()) {
            const userMsg = e.target.value;
            setMessages([...messages, { sender: 'user', text: userMsg }]);
            e.target.value = '';

            setIsTyping(true);
            setTimeout(() => {
                setIsTyping(false);
                setMessages(prev => [...prev, { sender: 'bot', text: "Thank you for the message. We are analyzing your request. Our team usually replies in less than 5 minutes!" }]);
            }, 2000);
        }
    };

    return (
        <div className="chat-widget-overlay" onClick={onClose}>
            <div className="chat-window card-glass" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="chat-header">
                    <div className="agent-info">
                        <div className="avatar-wrapper">
                            <FaUserShield className="agent-avatar" />
                            <span className="online-indicator"></span>
                        </div>
                        <div>
                            <h4>ClassX 360 Support</h4>
                            <p>Online | Typical response: 5 mins</p>
                        </div>
                    </div>
                    <button className="close-chat" onClick={onClose}><FaTimes /></button>
                </div>

                {/* Body */}
                <div className="chat-body">
                    {step === 'welcome' && (
                        <div className="welcome-step animate-fade-in">
                            <div className="bot-msg-bubble">
                                👋 Hi! {userName ? `Welcome back, ${userName} !` : 'Welcome to ClassX 360 Support.'}
                                <br />How can I assist you today?
                                <p className="help-text-small">You can ask about features, login issues, or anything else!</p>
                            </div>
                            <div className="quick-options">
                                <p className="options-label">Select a category to start:</p>
                                {quickOptions.map((opt, i) => (
                                    <button key={i} className="btn-quick-opt" onClick={() => startChat(opt)}>
                                        {opt}
                                    </button>
                                ))}
                            </div>
                            <div className="availability-notice">
                                <FaClock />
                                <span>Mon–Fri, 9 AM–6 PM IST. We reply 24/7 for urgent issues!</span>
                            </div>
                        </div>
                    )}

                    {step === 'form' && (
                        <div className="form-step animate-fade-in">
                            <button className="btn-back" onClick={() => setStep('welcome')}><FaArrowLeft /> Back</button>
                            <h3>Just a few details...</h3>
                            <p>This helps us get you to the right expert faster!</p>
                            <form onSubmit={handleFormSubmit} className="pre-chat-form">
                                <div className="chat-form-group">
                                    <label>Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={preChatData.name}
                                        onChange={(e) => setPreChatData({ ...preChatData, name: e.target.value })}
                                        placeholder="Type your name"
                                    />
                                </div>
                                <div className="chat-form-group">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={preChatData.email}
                                        onChange={(e) => setPreChatData({ ...preChatData, email: e.target.value })}
                                        placeholder="name@example.com"
                                    />
                                </div>
                                <button type="submit" className="btn-chat-submit">Start Conversation</button>
                            </form>
                        </div>
                    )}

                    {step === 'chat' && (
                        <div className="active-chat animate-fade-in">
                            <div className="messages-list">
                                {messages.map((msg, i) => (
                                    <div key={i} className={`msg - wrapper ${msg.sender} `}>
                                        <div className="msg-bubble">{msg.text}</div>
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="msg-wrapper bot">
                                        <div className="msg-bubble typing">
                                            <span>.</span><span>.</span><span>.</span>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            <div className="suggestions-bar">
                                {autoSuggestions.map((sug, i) => (
                                    <button key={i} className="suggestion-chip">
                                        <FaQuestionCircle /> {sug}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Input */}
                {step === 'chat' && (
                    <div className="chat-footer">
                        <input
                            type="text"
                            placeholder="Type your message here..."
                            onKeyDown={handleSendMessage}
                            autoFocus
                        />
                        <button className="send-icon"><FaPaperPlane /></button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatWidget;
