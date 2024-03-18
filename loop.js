let names =['Dan', 'Emma', 'Vic', 'Dami'];
names.slice(1,3);
console.log(names.slice(1,3));


console.log(['Apple', 'Mango', ...names]);


//FOR LOOP//
// for(let i = 0; i < 4; i++){
//    let el = names[i];
//    console.log(el);
// }


// for(let i = 0; i < names.length; i++){
//     let el = names[i];
//     console.log(el);
//  }


// for(let index = 0; index < 3; index++){
//     console.log("Hello World");
//     console.log(index);
// }
let outss = document.getElementById('lold')
// for(let k = 1; k < 21; k++){
//     console.log(k);
//     let named = k ;
//     outss.innerHTML += `<h1> ${k} * ${k} = ${k * k}`;
// }
function Multiply(){
    console.log(document.getElementById('input').value);
    for(let k = 1; k <= 20; k++){
        let named = (k) ;
        console.log(k);
        outss.innerHTML += `<h1> ${input.value} * ${k} = ${input.value * k}`;
    }
}
// function Multiply(){
    // for(let k = 1; k < 21; k++){
    //     console.log(k);
    //     let named = k ;
    //    Number (document.getElementById('input').innerHTML) * Number(document.getElementById.innerHTML('lold'))
    // } 
    // Number (document.getElementById('input').innerHTML) * Number(document.getElementById.innerHTML('lold'));
// }
