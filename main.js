const { app, BrowserWindow } = require('electron');

let win;

const createWindow = () => {
	win = new BrowserWindow({
		width: 814,
		height: 657,
		webPreferences: {
			nodeIntegration: true,
		},
	});

	win.loadFile('index.html');

	//win.webContents.openDevTools();

	win.on('closed', () => {
		win = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});
