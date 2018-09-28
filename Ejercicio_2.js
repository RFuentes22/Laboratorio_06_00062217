function sumaArray (array) {
    var sum = 0;

    for (let i=0;i<=array.length-1;i++){
        
            sum=sum + array[i];
        
    }
    console.log('La suma es: ', sum , 'El promedio es: ', sum/array.length );
 
}

