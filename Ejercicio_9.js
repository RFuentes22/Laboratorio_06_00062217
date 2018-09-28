
function adivina () {
    var num=prompt('introduzca numero');
    var array=[];
    for (let i=0;i<=20;i++){
        array[i]=Math.floor(Math.random() * 9); 
        
    }
    console.log(array);
    flag=true;
    while(flag){
    for (let i=0;i=20;i++){
        
        if (array.includes(num)){
            
             alert('Has ganado');
             break;
        }
        else {
            alert('perdiste');
            num=prompt('introduzca numero');
        }
    }
}


}
