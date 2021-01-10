import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Container, MessageInputContainer, FlexDiv,
    MessageContainer, MessageBody, MessageContent,
    MessageInput, SubmitButton, SubmitIcon } from './styles';
import PointerIcon from '../../assets/pointer.svg';
import { Context } from '../../App';
import { useHistory } from 'react-router-dom';
import ws from '../../utils/websockets';

const Message = (props) => {
    const {userName, userColor, content, time} = props;
    return <MessageBody>
        <FlexDiv>
            <MessageContent border messageColor={userColor}>{userName}</MessageContent>:
            &nbsp;&nbsp;
            <MessageContent width="600px">{content}</MessageContent>
        </FlexDiv>
        <MessageContent>{time}</MessageContent>
    </MessageBody>

}

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const { name } = useContext(Context);
    const [userName] = name;

    const history = useHistory();

    useEffect(() => {
        if(!userName){
            history.push('/');
        }
        const registered = ws.on('message', (data) => {
            console.log(data);
            switch(data.type){
                case "receive_message":
                    addMessage(data.message);
                    break;
                case "user_connected":
                    const name = data.info.name;
                    const ucMessage = {
                        id: new Date().getMilliseconds(),
                        user: {
                            name: "Server",
                            color: "#bb99ff",
                        },
                        content: `User ${name} joined the chat.`,
                        time: parseInt(Date.now()),
                    }
                    addMessage(ucMessage);
                    break;
                default:
            }
        })
        return () => {
            registered.unregister();
        }
    }, []);

    function addMessage(messageObject) {
        messages.push(messageObject);
        const newMessages = [...messages.slice(-200)];
        setMessages(newMessages);
    }
    
    function changeHandler(event) {
        setInputValue(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const message = formData.get('message');
        if(message === "") return;
        ws.client.send(JSON.stringify({
            type: "send_message",
            message,
        }));
        setInputValue("");
        // console.log(messages)
        // console.log(message);
    }

    const messageComponents = useMemo(() => {
        return messages.map((msg) => {
            const {content, user, id, time} = msg;
            const {name, color} = user;
            const timeObject = new Date(time);
            const formattedTime = `${timeObject.getHours()}:${timeObject.getMinutes()}`
            return <Message key={id} userName={name} userColor={color} content={content} time={formattedTime}/>
        })
    }, [messages]);

    return (<Container onSubmit={submitHandler}>
        <MessageContainer>
            {messageComponents}
        </MessageContainer>
        <MessageInputContainer>
            <MessageInput
                name="message"
                placeholder="Type anything..."
                spellCheck
                onChange={changeHandler}
                value={inputValue}/>
            <SubmitButton active={inputValue !== ""}>
                <SubmitIcon src={PointerIcon} alt="Submit"/>
            </SubmitButton>
        </MessageInputContainer>
            
    </Container>)
}

export default Chat;
