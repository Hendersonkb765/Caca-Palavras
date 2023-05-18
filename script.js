function clicado(){ 
    
    let btncontexto = event.target
    if(btncontexto.classList[0] == "l4" || btncontexto.classList[0] =="l9"||
        btncontexto.classList[0] =="l14"|| btncontexto.classList[0]=="l19" 
       ){
            btncontexto.classList.add("certo")
    }
    else if(btncontexto.classList[0] == "l7" || btncontexto.classList[0] == "l8"
        || btncontexto.classList[0]== "l9" || btncontexto.classList[0]=="l10"){
            btncontexto.classList.add("certo")
    }
    else if(btncontexto.classList[0] == "l2" || btncontexto.classList[0] == "l7"
            || btncontexto.classList[0] == "l12" || btncontexto.classList[0] == "l17"){
                btncontexto.classList.add("certo")
    }
    else{
        btncontexto.classList.add("errado")
    }
    verificarAcertos()
}

function verificarAcertos(){
    //GOKU
    let ag = document.querySelector(".l4")
    let ao = document.querySelector(".l9")
    let ak = document.querySelector(".l14")
    let au = document.querySelector(".l19")

    
    //AMOR
    let ba = document.querySelector(".l7")
    let bm = document.querySelector(".l8")
    let bo = document.querySelector(".l9")
    let br = document.querySelector(".l10")

    //KALA
    let ck = document.querySelector(".l2")
    let ca = document.querySelector(".l7")
    let cl = document.querySelector(".l12")
    let ca1 = document.querySelector(".l17")

    
    if(ag.classList[1] == "certo"&& ao.classList[1] == "certo" && ak.classList[1] == "certo" 
    && au.classList[1] == "certo"){
        alert("Goku")
    }
    else if(ba == "a" && bm =="m" && bo == "o" && br == "r"){
        alert("Amor")
    }
    else if(ck == "k" && ca == "a" && cl == "l" && ca1 == "a"){
        alert("Kala")
    }

}