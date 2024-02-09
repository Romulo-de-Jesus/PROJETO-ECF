matricula = document.getElementById("div_matricula")
agendamento = document.getElementById("div_agendamento")
matricula.style.display = "none"
agendamento.style.display = "none"


function entrar_ma(){
if (agendamento.style.display == "none"){  //Checar se o agendamento está escondido 
    if (matricula.style.display == "none"){ 
    matricula.style.display = "block"
    } else{
    matricula.style.display = "none"
    }
}
}
function sair_ma(){
matricula.style.display = "none"
}


function entrar_age(){
if (matricula.style.display == "none"){  //Checar se a matrícula está escondida
    if (agendamento.style.display == "none"){ 
        agendamento.style.display = "block"
        } else{
        agendamento.style.display = "none"
        }
}
}
    
function sair_age(){
agendamento.style.display = "none"
}