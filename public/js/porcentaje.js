var saldo= 10;// variable saldo deposito DB
let ganancias = 0; // variable saldo ganancias DB
function calcularPorcentaje(){
    if(saldo<=0){
        console.log('saldo insuficiente')
    } else {

        let ejecutar = setInterval(imprimir, 3000)

        function porcentaje(numero){
            return numero / 100 * 3;
            
        }
        let total = porcentaje(saldo)
        console.log(total)
        function imprimir(){
            let gananciaTotal = ganancias += total
            console.log(gananciaTotal)
        }  
    }
}


export default calcularPorcentaje;


