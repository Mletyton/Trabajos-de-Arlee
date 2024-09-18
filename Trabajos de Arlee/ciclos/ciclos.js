// 1 ejemplo
for (let i = 0; i <= 3 ; i++) {
    console.log(i);
}

//1
for (let i = 1; i <= 4 ; i++){
    console.log(i)
}

//2
for (let i = 2; i < 6 ; i+=2){
    console.log(i)
}

//3
let i = 0;
do{
    console.log(i**2)
    i++;
}while(i<=5);

//4
let j = 8;
let x = (j ** 2)/2;
do{
    console.log(x)
    j--;
    let x = (j ** 2)/2;
}while(j>=2);

//5
for(let g = 1, f = 12; g <= f ; g*=2){
    console.log(g)
}

//6
let valor = true;
do{
    console.log(`menu: 1. consultar  2. actualizar 3. salir`);
    let opcion = Number(prompt(`ingrese opcion? `));
    if (opcion === 3){
        valor = false; // salir del ciclo di la opcion es 3
    }
}while(valor)

//7
let check = false;
let saldoCuenta = 30000;
do{
    console.log(`bienvenido, seleccione \n 1. consultar saldo \n 2. retirar \n 3. salir`);
    let opcion = Number(prompt(`ingrese la opcion`))
switch (opcion){
    case 1: console.log(`su saldo es ${saldoCuenta}`); break;
    case 2:{
        let retiro = Number(prompt(`ingrese el valor a retirar`));
        saldoCuenta-= retiro;
        console.log(`su saldo es ${saldoCuenta}`); break;
    }
    case 3: check = true;
        console.log(`saliendo..`); break;
        default:
            console.log(`opcion invalida, intentar denuevo`)
}
}while(check != true)

//8
let opcion = "";
do{
    let opcion= prompt(`ingrese una opcion \n notas  -  \n salir`);
    if(opcion == "notas"){
    let nota = Number(prompt(`ingrese la nota de la asignatura`));
    nota > 3? alert(`su nota de ${nota}, es aprobado`):alert(`su nota de ${nota}, no es aprobado`);
}else if(opcion == "salir"){
    break;
}else{
    opcion = "salir";
    alert(`opcion invalida..`);
}
}while(opcion != "salir")

// 2 ejemplo
let t = 1;
while(i <= 3){
    console.log(i);
    t++
}

// 3 ejemplo
let s = 0;
while(s <= 3){
    console.log(s)
    s++
}

// ultimo ejemplo
let e = 0;
while(e <= 4){
    console.log(e)
    e++
}