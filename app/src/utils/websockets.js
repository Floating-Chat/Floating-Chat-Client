const nameserver = 'localhost';
const port = 8765;
// const nameserver = 'floating-chat-test.herokuapp.com';
// const port = 80;

const wsClient = new WebSocket(`ws://${nameserver}:${port}`);

const observers = {
    'open': [],
    'message': [],
    'error': [],
};

wsClient.onopen = () => {
    observers.open.forEach(async (func) => func());
};

wsClient.onmessage = (data) => {
    const newData = JSON.parse(data.data);
    observers.message.forEach(async (func) => func(newData));
};

wsClient.onerror = (data) => {
    observers.error.forEach(async (func) => func(data));
}

const ws = {
    on: (event, func, qtd=0) => {
        let functionToRegister;
        if(qtd > 0){
            let count = 0;
            const wrapper = async (props) => {
                if(++count >= qtd){
                    const index = observers[event]?.indexOf(this);
                    observers[event]?.splice(index, 1);
                }
                func(props);
            }
            functionToRegister = wrapper;
        }
        else{
            functionToRegister = func;
        }
        
        observers[event]?.push(functionToRegister);
        return {
            unregister: () => {
                const index = observers[event]?.indexOf(functionToRegister);
                observers[event]?.splice(index, 1);
            }
        }
    },
    client: wsClient
}

export default ws;
