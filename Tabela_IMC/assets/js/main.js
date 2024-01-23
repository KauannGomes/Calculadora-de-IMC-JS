function meuEscopo(){
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    
    form.addEventListener('submit',   function eventoForm(e){e.preventDefault();
        validacao();});
    function validacao(){
        //calculo
        const peso = form.querySelector('.peso').value;
        const altura = parseFloat(form.querySelector('.altura').value);
        const calculo = peso / (altura * altura);
        const resultadoFinal = calculo
    

        //validação
        if (resultadoFinal >= 0 && resultadoFinal <= 18.5){
            resultado.innerHTML =(`Seu IMC é de ${calculo.toFixed(2)}, você esta Abaixo do peso.`)
        }else if(resultadoFinal >= 18.5 && resultadoFinal <= 24.9){
            resultado.innerHTML =(`Seu IMC é de ${calculo.toFixed(2)}, você esta com o Peso Normal.`)
        }else if(resultadoFinal >= 25 && resultadoFinal <= 29.9){
            resultado.innerHTML =(`Seu IMC é de ${calculo.toFixed(2)}, você esta com Sobrepeso.`)
        }else if(resultadoFinal >= 30 && resultadoFinal <= 34.9){
            resultado.innerHTML =(`Seu IMC é de ${calculo.toFixed(2)}, você esta com Obesidade grau 1.`)
        }else if(resultadoFinal >= 35 && resultadoFinal <= 39.9){
            resultado.innerHTML =(`Seu IMC é de ${calculo.toFixed(2)}, você esta com Obesidade grau 2.`)
        }else if(resultadoFinal >= 40 ){
            resultado.innerHTML =(`Seu IMC é de ${calculo.toFixed(2)}, você esta com Obesidade grau 3.`)
        }else{
            resultado.innerHTML =(`Altura ou Peso inválido.`)
        } 
    }
    
}
meuEscopo();
