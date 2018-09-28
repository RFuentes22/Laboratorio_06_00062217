function tipos (array) {
    
    var contEnte=0,contCadena=0,contFunction=0,contBoolean=0,contUndefined=0;
    for (let i=0;i<=array.length-1;i++){
        if (typeof(array[i])=='number'){
            contEnte=contEnte+1;
        }
        else if (typeof(array[i])=='string'){
            contCadena=contCadena+1;
        }
       else if (typeof(array[i])=='boolean'){
            contBoolean=contBoolean+1;
       }
       else if (typeof(array[i])=='function'){
            contFunction=contFunction+1;
       }
       else if (typeof(array[i])=='undefined'){
            contUndefined=contUndefined+1;
    }       
        
         
           
        
    }
    console.log('Hay ', contEnte ,' numeros','Hay ', contCadena ,' strings','Hay ', contBoolean ,' boleanos','Hay ', contFunction ,' funciones','Hay ', contUndefined ,' indefinidos', );
 
}
