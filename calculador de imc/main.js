function calculate(){
    var height=document.getElementById("height").value
    var weight=document.getElementById("weight").value
    var imc=weight/height**2
    var total=imc.toFixed(2)
    
    
    

    if(imc<18.5){
        document.getElementById('sua-classificao').innerText='Sua classificação: magreza'
            
        
    }else if(imc<24.9){
        document.getElementById('sua-classificao').innerText='Sua classificação: Normal'
        
        
            
        
    }else if(imc<29.9){
        document.getElementById('sua-classificao').innerText='Sua classificação: Sobrepeso'
        

    }else if(imc<39.0){
        document.getElementById('sua-classificao').innerText='Sua classificação: Obesidade'
        

    }else if(imc>40.0){
        document.getElementById('sua-classificao').innerText='Sua classificação: Obedidade-grave'

    }
    document.getElementById('imc').innerText='Seu IMC:'+total
    
} 

function validDigits(text){
    return text.replace(/[^0-9,]/g, '');

}
[heightInput, weightInput].forEach((el) => {
    el.addEventListener('input', (e) => {
        const updatedValue = validDigits(e.target.value);

        e.target.value = updatedValue;
    })
})


    


    
