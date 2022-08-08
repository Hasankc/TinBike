import MathcesDisplay from "../components/MathcesDisplay"
import ChatHeader from "../components/ChatHeader"
import ChatDisply from "./ChatInput"


const ChatContainer = () => {
    return (
        <div className="chat-container">
            <ChatHeader />

            <div>
                <button className="option">Matches</button>
                <button className="option">Chat</button>
            </div>
            <MathcesDisplay />

            <ChatDisply />
        </div>
    )
}
export default ChatContainer