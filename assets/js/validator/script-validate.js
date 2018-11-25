
let invalid = document.querySelector('.error');

 var contact = () => {
   
    let name = document.querySelector('#name').value;
    let telefone = document.querySelector('#telefone').value;
    let email = document.querySelector('#email').value;
    let mensagem = document.querySelector('#mensagem').value;

    if(name == ''){
        alert('Preencha o campo nome')
        return false
    }
 
    if(telefone == ''){
        alert('Preencha o campo telefone')
        return false
    }

    if(email == ''){
        alert('Preencha o campo email')
        return false
    }
    
}
