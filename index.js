const { app, BrowserWindow} = require('electron');

app.commandLine.appendSwitch('enable-transparent-visuals');
app.commandLine.appendSwitch('disable-gpu'); 

app.on('ready', () => {
    const win = new BrowserWindow({
        width: 450, height: 350,
        resizable: false, autoHideMenuBar: true,
        transparent: true, frame: false,
    })
    win.loadURL('http://localhost:3000/');
    win.on('ready-to-show', () => {
        win.show();
    });
    win.openDevTools();
})

app.on('window-all-closed', () => {
    app.quit();
})