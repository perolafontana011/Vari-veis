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
console.log(carros());
console.log(triangulo());
console.log(frutas());

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



function carros(){
    carro1 = "Fusca";
    km = 100;
    p = 12,70;
    carro2 = "Celta"
    km2 = 360;
    p2 = 45,90;
    console.log("O total do Fusca é:", km * p);
    console.log("O total do Celta é:", km2 * p2);
}


function triangulo(){
    b = 5;
    a = 12;
    t = b*a/2;
    console.log("O valor da área é:", t);
}


function frutas(){
    let frutas = [ "Maça", "Banana", "Laranja"];
    console.log(frutas.length);
    console.log(frutas);
    frutas.push("Manga");
    console.log(frutas);
    console.log(frutas.length);
    frutas.pop();
    frutas.pop();
    console.log(frutas);
    frutas.pop();
    frutas.pop();
    console.log(frutas);
    frutas.push("Uva");
    frutas.push("Amora");
    frutas.push("Mexerica", "Abacate","Abacaxi");
    console.log(frutas);
    console.log("A fruta na posição 1 é: ", frutas[1]);
    console.log(frutas.length);
    console.log("O total de registros ", frutas.length + 1, "frutas.");
    frutas.unshift("Cereja");
    console.log(frutas);
}
