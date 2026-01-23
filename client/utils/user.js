export function loadUser(){
    console.log('hello user')
    const user = localStorage.getItem('username');
    if(user){
        document.querySelector('#chat-input-form').style.visibility = 'visible';
        document.querySelector('#user-name-input').value = user;
        document.querySelector('.text-input-disabled')?.remove();
        return true;
    }else{
        document.querySelector('#chat-input-form').style.visibility = 'hidden';
        const p = document.createElement('p');
        p.innerText = 'Please enter username.';
        p.classList.add('text-input-disabled')
        document.querySelector('.chat-input-container').appendChild(p)
        return false;
    }
}

export function addUser(){
    const input = document.querySelector('#user-name-input');
    if(!input.value.trim()) return;
    localStorage.setItem('username', input.value);
    loadUser();
}