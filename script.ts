function cadastro(){
    let namec: HTMLInputElement | null
    = document.querySelector('#namec');

    let emailc: HTMLInputElement | null 
    = document.querySelector('#emailc');

    let passc: HTMLInputElement | null
    = document.querySelector('#passc');

    let confirmpassc: HTMLInputElement | null
    = document.querySelector('#confirmpassc');

    if(namec && emailc && passc && confirmpassc){
        if(namec.value != '' && emailc.value != '' && passc.value != '' && confirmpassc.value != ''){
            if(passc.value == confirmpassc.value){
            alert('Conta cadastrada com sucesso!');
            window.localStorage.setItem('nome', namec.value);
            window.localStorage.setItem('email', emailc.value);
            window.localStorage.setItem('senha', passc.value);
            }
            else{
                alert('As senhas nao combinam!');
            }
        }
        else{
            alert('Preencha todos os campos!');
            }
    }
}

function login(){
    let email: HTMLInputElement | null
    = document.querySelector('#email');

    let pass: HTMLInputElement | null
    = document.querySelector('#pass');

    if(email && pass){
        if(email.value == window.localStorage.getItem('email') && pass.value == window.localStorage.getItem('senha')){
            alert('Bem vindo(a) ' + window.localStorage.getItem('nome') + '!');
        }
        else{
            alert('Email e/ou senha incorretos!');
        }
    }
}