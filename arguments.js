// function sum(){
//     let total = 0;
//     let args = Array.from(arguments);
//     args.forEach( element => {
//         total += element;
//     })
//     return total;
// }

function sum(...args){
    let total = 0;
    args.forEach( element => {
        total += element;
    })
    return total;
}



console.log(sum(1, 2, 3, 4, 5));