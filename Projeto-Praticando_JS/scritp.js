function contar(){
    var num = document.querySelector("#inicio")
    var numero = Number(num.value)

    var pasz = document.querySelector("#pass")
    var passo = Number(pasz.value)

    var finall = document.querySelector("#final")
    var c = Number(finall.value)

    var res = document.querySelector("#numeros")

    if(numero == ""||c == ""){
         alert("Preencha todos os campos corretamente")
    
    }else if(numero <= c && passo == 0){
        for(var y = numero ; y <= c ; y++){
        res.innerText += `${y} \u{1F449}` 
    }
    }else if (numero >= c && passo == 0){
        for(var y = numero ; y >= c ; y--){
        res.innerHTML += `${y} \u{1F449}`
    }
    }else if(numero <= c){
        for(var y = numero ; y <= c ; y+=passo){
        res.innerText += `${y} \u{1F449}` 
    }
    }else if (numero >= c){
        for(var y = numero ; y >= c ; y-=passo){
          res.innerHTML += `${y} \u{1F449}`
    }
    }
    
} 