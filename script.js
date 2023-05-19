let goku = false;
let kala = false;
let namor = false;
function clicado(){ 
    
    let btncontexto = event.target
    if(btncontexto.classList[0] == "l4" || btncontexto.classList[0] =="l9"||
        btncontexto.classList[0] =="l14"|| btncontexto.classList[0]=="l19" 
       ){
            btncontexto.classList.add("certo")
    }
    else if(btncontexto.classList[0] =="l6" || btncontexto.classList[0] == "l7" || btncontexto.classList[0] == "l8"
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
    var acertos = document.querySelector(".container")
 
    //GOKU
    let ag = document.querySelector(".l4")
    let ao = document.querySelector(".l9")
    let ak = document.querySelector(".l14")
    let au = document.querySelector(".l19")

    
    //AMOR
    let bn = document.querySelector(".l6")
    let ba = document.querySelector(".l7")
    let bm = document.querySelector(".l8")
    let bo = document.querySelector(".l9")
    let br = document.querySelector(".l10")

    //KALA
    let ck = document.querySelector(".l2")
    let ca = document.querySelector(".l7")
    let cl = document.querySelector(".l12")
    let ca1 = document.querySelector(".l17")

    
    if(ag.classList[1] == "certo"
    && ao.classList[1] == "certo" 
    && ak.classList[1] == "certo" 
    && au.classList[1] == "certo"
    && goku == false){
        goku = true
        acertos.innerHTML += '<div class="acerto">'+
        '<img src="resources/image/goku.png" alt="">'+
        '<h1>GOKU</h1>'+
        '</div>'
    }
    else if(bn.classList[1] == "certo"
    &&ba.classList[1] == "certo" 
    && bm.classList[1] =="certo"
     && bo.classList[1] == "certo" 
     && br.classList[1] == "certo"
     && namor == false){
        namor = true
        acertos.innerHTML += '<div class="acerto">'+
        '<img src="resources/image/namor.jpg" alt="">'+
        '<h1>NAMOR</h1>'+
        '</div>'
    }
    else if(ck.classList[1] == "certo" 
    && ca.classList[1] == "certo"
     && cl.classList[1] == "certo" 
     && ca1.classList[1] == "certo"
     && kala == false){
        kala = true
        acertos.innerHTML += '<div class="acerto">'+
        '<img src="resources/image/kala.webp" alt="">'+
        '<h1>KALA</h1>'+
        '</div>'
    }

}