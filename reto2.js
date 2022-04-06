let TI = prompt("Elige el tipo de hamburguesa entre: SENCILLA o DOBLE o TRIPLE");
let N, TP, PAS, PAD, PAT, TO, TOT;
PAS = 20;
PAD = 25;
PAT = 28;
CA = 0.05;
switch(TI){
    case "SENCILLA":
        N = Number(prompt(`Indique la cantidad de hamburguesas del tipo ${TI.toUpperCase()}`));
        TP = prompt("Elige el tipo de pago: efectivo o tarjeta");
        if (TP === "efectivo"){
            TOT = (N * PAS*(1.05));
            alert(`El total a pagar incluida la comisión por pago de tarjeta son ${TOT}`)
        }else{
            TO = (N * PAS);
            alert(`El total a pagar son ${TO}`)
        }
        break;
    case "DOBLE":
        N = Number(prompt(`Indique la cantidad de hamburguesas del tipo ${TI.toUpperCase()}`));
        TP = prompt("Elige el tipo de pago: efectivo o tarjeta");
        if (TP === "efectivo"){
            TOT = (N * PAD*(1.05));
            alert(`El total a pagar incluida la comisión por pago de tarjeta son ${TOT}`)
        }else{
            TO = (N * PAD);
            alert(`El total a pagar son ${TO}`)
        }
        break;
    case "TRIPLE":
        N = Number(prompt(`Indique la cantidad de hamburguesas del tipo ${TI.toUpperCase()}`));
        TP = prompt("Elige el tipo de pago: efectivo o tarjeta");
        if (TP === "efectivo"){
            TOT = (N * PAT*(1.05));
            alert(`El total a pagar incluida la comisión por pago de tarjeta son ${TOT}`)
        }else{
            TO = (N * PAT);
            alert(`El total a pagar son ${TO}`)
        }
        break;
    default:
        alert("El tipo de hamburguesa ingresada no existe en nuestra base de datos")
}