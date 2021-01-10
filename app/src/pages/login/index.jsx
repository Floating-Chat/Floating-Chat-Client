import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Context } from '../../App';
import { Container, LoginButton,
    LoginFrame, LoginInput,
    LoginLogo, LoginTitle,
    InputContainer, ColorIndicator } from './styles';
import Logo from '../../assets/logo.svg';

import { IMaskMixin } from 'react-imask';
import { useHistory } from 'react-router-dom';
import ws from '../../utils/websockets';


const MaskedLoginInput = IMaskMixin(({ inputRef, ...props }) => (
    <LoginInput ref={inputRef} {...props}/>
));

const ColorInput = (props) => {
    const [inputColor, setInputColor] = useState(props.defaultColor);

    function handleColorChange(value) {
        setInputColor(value);
    }

    const colorIndicator = useMemo(() => (
        <ColorIndicator icolor={inputColor}/>
    ), [inputColor]);

    return (
        <InputContainer>
            <MaskedLoginInput
                mask={/^#[0-9a-fA-F]{0,8}$/}
                prepare={(str, masked) => {
                    const new_value = str.toUpperCase();
                    if(!/^#/.test(masked._value)){
                        return "#" + new_value;
                    }
                    return new_value;
                }}
                name="user_color" 
                placeholder="#00000000"
                onAccept={handleColorChange}
                value={inputColor}
                />
            {colorIndicator}
        </InputContainer>
    );
}

const Login = () => {
    const { name, color } = useContext(Context);    
    const [, setUserName] = name;
    const [userColor, setUserColor] = color;
    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            switch(key) {
                case 'user_name':
                    setUserName(value);
                    break;
                case 'user_color':
                    setUserColor(value);
                    break;
                default:
                    console.log(`${key} is not a valid field`);
            }
            data[key] = value;
        })
        ws.client.send(JSON.stringify({
            type: "send_info",
            ...data,
        }));

        if(data['user_name']){
            history.push('/chat');
        }
    }

    return <Container>
        <LoginFrame onSubmit={handleSubmit}>
            <LoginLogo src={Logo} alt="Logo"/>
            <LoginTitle>Login</LoginTitle>
            <LoginInput 
                name="user_name" placeholder="Ex: Nyan Cat"
                maxLength={25} spellCheck={false}
            />
            <ColorInput defaultColor={userColor}/>
            <LoginButton>Login</LoginButton>
        </LoginFrame>
    </Container>
};

export default Login;
