function fact(x){
    if (x==0){
        return 1;
    }
    else{
        let y = x;
        for (i=1;i<x;i++){
        y=y*(x-i);}
    return y;
    }
    
}
console.log(fact(3));
