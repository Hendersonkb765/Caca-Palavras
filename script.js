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
    let ag = document.querySelector(".l4").innerHTML
    let ao = document.querySelector(".l9").innerHTML
    let ak = document.querySelector(".l14").innerHTML
    let au = document.querySelector(".l19").innerHTML

    
    //AMOR
    let ba = document.querySelector(".l7").innerHTML
    let bm = document.querySelector(".l8").innerHTML
    let bo = document.querySelector(".l9").innerHTML
    let br = document.querySelector(".l10").innerHTML

    //KALA
    let ck = document.querySelector(".l2").innerHTML
    let ca = document.querySelector(".l7").innerHTML
    let cl = document.querySelector(".l12").innerHTML
    let ca1 = document.querySelector(".l17").innerHTML

    
    if(ag.classList[0] == "certo"&& ao.classList[0] == "certo" && ak.classList[0] == "certo" 
    && au.classList[0] == "certo"){
        alert("Goku")
    }
    else if(ba == "a" && bm =="m" && bo == "o" && br == "r"){
        alert("Amor")
    }
    else if(ck == "k" && ca == "a" && cl == "l" && ca1 == "a"){
        alert("Kala")
    }

}