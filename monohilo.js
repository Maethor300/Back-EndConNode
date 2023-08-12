let conteo = 0;
let bucleInterval = setInterval(function(){
      console.log(conteo);
      if(conteo === 5){
           clearInterval(bucleInterval);
      }
      conteo++;
},1000);
console.log("Estoy despues del bucle");