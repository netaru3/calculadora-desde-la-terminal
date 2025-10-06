import readline from 'readline'
import * as math from 'mathjs';

const rl = readline.createInterface({
  input: process.stdin,  
  output: process.stdout  
});

function sumar(){rl.question(`bienvenido a la calculadora de terminal,
    ingrese una operación o escriba 'salir'`, function cal(operacion){
        try { if(operacion==="salir"){rl.close(); return}
          let respuesta= math.evaluate(operacion.replace(/x|÷|,|'/g, function(simbolo){
            if(simbolo==="x"){return "*"};
            if(simbolo==="÷"){return "/"};
            if(simbolo===","){return "."};
            if(simbolo==="'"){return "^"}; return simbolo
          })); 
       console.log("el resultado es",respuesta)
        ;sumar(); return respuesta}catch(error){
       console.log("hubo un error"); sumar(); return
        }
    })
  }

sumar()