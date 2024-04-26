
let firstForm = document.getElementById('firstname');
let displayFirstname = document.getElementById('display-firstname');

let firstname = [];
firstForm.addEventListener('keyup', (e) => {
    console.log(e);
    if (e.key.length < 2) {
        firstname.push(e.key);
    }
    
    displayFirstname.innerText = firstname.join('');
})


let age = document.getElementById('age');
let aHardTruth = document.getElementById('a-hard-truth');

age.addEventListener('keyup', () => {
    console.log(age.value);
    if (parseInt(age.value) >= 18) {
        aHardTruth.style.visibility = 'visible';
        age.setCustomValidity('');
    }else {
        aHardTruth.style.visibility = 'hidden';
        age.setCustomValidity(`revient dans ${18 - parseInt(age.value)} ans frero`);
        if (age.value === '') {
            age.setCustomValidity(`rentre ton age frero`);
        }
    }
    age.reportValidity();
})


let pwd = document.getElementById('pwd');
let pwdConfirm = document.getElementById('pwd-confirm');

pwd.addEventListener('keyup', () => {
    pwd.style.outline = 'none';
    if (pwd.value.length < 6) {
        console.log('here');
        pwd.style.border = '3px tomato solid';
        pwd.setCustomValidity('Le mot de passe doit faire plus de 6 caractères frero !');
    }else {
        pwd.style.border = '3px #70e000 solid';
        pwd.setCustomValidity('');
    }
    pwd.reportValidity();
})

pwdConfirm.addEventListener('keyup', () => {
    pwdConfirm.style.outline = 'none';
    if (pwd.value !== pwdConfirm.value) {
        pwd.style.border = '3px tomato solid';
        pwdConfirm.style.border = '3px tomato solid';
        pwdConfirm.setCustomValidity('Le mot de passe ne correspond pas frero !');
    }else {
        pwd.style.border = '3px #70e000 solid';
        pwdConfirm.style.border = '3px #70e000 solid';
        pwdConfirm.setCustomValidity('');
    }
    pwdConfirm.reportValidity();
})

let toggleDarkmode = document.getElementById('toggle-darkmode');
let body = document.querySelector('body');

toggleDarkmode.addEventListener('change', () => {
    if (toggleDarkmode.value ==='dark') {
        body.style.backgroundColor = 'tomato';
        body.style.color = 'white';
    }
    if(toggleDarkmode.value === 'light') {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
    
})
