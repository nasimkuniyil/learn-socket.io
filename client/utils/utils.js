export const sendMessage = (e, socket) => {
    e.preventDefault();
    const chatInput = document.querySelector('#chat-input')
    const text = chatInput.value.trim();
    const username = localStorage.getItem('username');
    if (!text) return;
    const li = document.createElement('li');
    li.innerText = text;
    li.classList.add('send-message', 'message');
    document.querySelector('#messages').appendChild(li);

    socket.emit('message', {username, text});

    chatInput.value = "";
    document.querySelector('.chat-send-btn')?.setAttribute('disabled', true)
}

export const recieveMessage = (data, socket) => {
    console.log('hey : ', data);
    console.log('user id : ', socket.id);
    const li = document.createElement('li');
    li.innerText = data.text;
    li.classList.add('recieved-message', 'message');
    li.setAttribute("title", data.username)
    document.querySelector('#messages').appendChild(li);
}

export const welcomeMessage = (text, socket) => {
    console.log('hey : ', text);
    console.log('user id : ', socket.id)
    const li = document.createElement('p');
    li.innerText = "welcome "+text;
    li.classList.add('welcome-message');
    document.querySelector('#messages').appendChild(li)
    socket.emit('welcome', {username:localStorage.getItem('username')})
}

export const disableBtn = (e) => {
    if (e.target.value.trim()) document.querySelector('#chat-send-btn').removeAttribute('disabled')
    else document.querySelector('#chat-send-btn').setAttribute('disabled', true);
}