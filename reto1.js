let L = Number(prompt("Registre la cantida de litros almacenados"));
let G = 3.785; /* 1 G = 3.785 litros */
let PL = 3; /* el precio de 1 l son 3 soles */
let PG = (G * PL); /* el precio de galo en soles */
let TG = (L / G ); /* conversión de litros a galones */
let GA = (TG * PG);
console.log(`Cantida de litros producidos ${L}`);
console.log(`Cantidad de litros a galones producidos ${TG}`);
console.log(`Ganancia por la entrega de leche en galones son ${GA} `)
