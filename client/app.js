import { addUser, loadUser } from "./utils/user.js";
import { disableBtn, recieveMessage, sendMessage, welcomeMessage } from "./utils/utils.js";

function connectLive() {
    const socket = io('ws://localhost:3000', { query: { username: localStorage.getItem('username') } });

    document.querySelector('#chat-input-form').addEventListener('submit', (e) => sendMessage(e, socket))
    socket.on('message', (data) => recieveMessage(data, socket))
    socket.on('welcome', (data) => welcomeMessage(data, socket))
}

loadUser() && connectLive();

document.querySelector('#add-user-btn').addEventListener('click', addUser)

document.querySelector('#chat-input').addEventListener('input', disableBtn)
