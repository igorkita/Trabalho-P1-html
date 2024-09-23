function entrar_contato(){
    console.log("Vrau")

    var nome     = document.getElementById("txtNome").value;

    var email    = document.getElementById("txtEmail").value;

    var whastaap = document.getElementById("txtWhatsApp").value;

    if (nome.length == 0) {
        document.getElementById("error_nome").style.display = "block";
   
    } else {
        document.getElementById("error_nome").style.display = "none";
    }
    

    if (email.length == 0) {
        document.getElementById("error_email").style.display = "block";
    
    } else {
        document.getElementById("error_email").style.display = "none";
    }

    if (whastaap.length == 0) {
        document.getElementById("error_whatsaap").style.display = "block";
    
    } else {
        document.getElementById("error_whatsaap").style.display = "none";
    }
    if (nome.length != 0 && email.length != 0 && whastaap.length != 0) {
        document.getElementById("modal").style.display = "block";
    }
}

function close_modal(){
    document.getElementById("modal").style.display = "none";
}

function entrar_conta(){

    var email  = document.getElementById("txtEmail").value;

    var senha = document.getElementById("txtSenha").value;

    if (email.length == 0) {
        document.getElementById("error_email").style.display = "block";

    } else {
        document.getElementById("error_email").style.display = "none";

    } 

    if (senha.length == 0 ) {
        document.getElementById("error_password").style.display = "block";

    } else {
        document.getElementById("error_password").style.display = "none";
    }

    if (email.length != 0 && senha.length != 0) {
        document.getElementById("titulo_conta").innerHTML = `Você entrou como ${email}`;
        document.getElementById("entrar_conta").style.display = "none";
    }
}
