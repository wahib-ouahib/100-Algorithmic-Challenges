function fact(x){
    if (x=0){
        return 1;
    }
    else{
        let y = x;
        for (var i=1;i<x;i++){
        y=y*(x-i+1);}
    return y;
    }
    
}
console.log(fact(0));
