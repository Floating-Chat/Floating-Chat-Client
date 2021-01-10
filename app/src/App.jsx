import React, { useEffect, useState } from 'react';
import Router from './routes';
import GlobalStyle from './utils/globalStyle';

import ws from './utils/websockets';

export const Context = React.createContext({ name: [null, null], color: [null, null] });

function App() {
    const [userName, setUserName] = useState(null);
    const [userColor, setUserColor] = useState("#ffffff");
    const [connected, setConnected] = useState(false);

    const contextObject = {
        name: [userName, setUserName],
        color: [userColor, setUserColor]
    }

    useEffect(() => {
        ws.on('open', () => {
            console.log('CONNECTED!!!')
            setConnected(true);
        }, 1);
    }, []);

    return (
        <Context.Provider value={contextObject}>
            <GlobalStyle/>
            {connected && <Router/>}
        </Context.Provider>
    );
}

export default App;
