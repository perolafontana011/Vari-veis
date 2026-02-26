let a = 40;
let b = 10;
let c = 20;
let total = 0;
let totald = 0;
let x = 5;
total = ( a + b + c);
totald = ( a + b + c) / x;
console.log("O total da soma é:", total);
console.log("O outro total é:", totald);
console.log(outraconta());
console.log(media());

// início da function
function outraconta() {
    var d = 10;
    var e = 20;
    var f = 30;
    var tot = 0;
    var tot2 = 0;
    var xx = 100;
    tot = ( d + e + f);
    tot2 = ( d + e + f) / xx;
    //console.log("O valor de tot na function é:", tot);
    //console.log("O valor do tot2 na function é:", tot2);
    return tot;
    return tot2;
}




function media(){
    let nfinal = 0;
    n1 = 30;
    n2 = 90;
    n3 = 100;
    nfinal = ( n1 + n2 + n3);
    nfinal = ( n1 + n2 + n3) / 3;
    //console.log("A média final do aluno é:", nfinal.toFixed(1));
    return nfinal.toFixed(1);
}