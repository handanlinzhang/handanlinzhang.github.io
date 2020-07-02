
let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
    setUserName();
}