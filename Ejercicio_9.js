
function adivina () {
    var num=prompt('introduzca numero');
    var array=[];
    for (let i=0;i<=20;i++){
        array[i]=Math.floor(Math.random() * 9); 
        
    }
    
    flag=true;
    while(flag){
    for (let i=0;i=20;i++){
        
        if (num==array[i]){
            
             alert('Has ganado');
             flag=false;
        }
        else {
            alert('perdiste');
            num=prompt('introduzca numero');
        }
    }
}


}
