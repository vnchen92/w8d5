// // function sum(){
// //     let total = 0;
// //     let args = Array.from(arguments);
// //     args.forEach( element => {
// //         total += element;
// //     })
// //     return total;
// // }

// // function sum(...args){
// //     let total = 0;
// //     args.forEach( element => {
// //         total += element;
// //     })
// //     return total;
// // }



// console.log(sum(1, 2, 3, 4, 5));

// // markov.says.myBind(pavlov, "meow", "Kush")();

// // markov.says.myBind(pavlov)("meow", "a tree");

// // markov.says.myBind(pavlov, "meow")("Markov");

// //     says(sound, person) {
//     // console.log(`${this.name} says ${sound} to ${person}!`);
//     // return true;

// Function.prototype.myBind = function(context){
//     const bindArgs = Array.from(arguments).slice(1);
//     const that = this;  // the that here is Markov

//     return function () {
//         const callArgs= Array.from(arguments);
//         return that.apply(context, args.concat(callArgs));

//     }

// };



// Function.prototype.myBind = function(context, ...args){

//     const that = this;
//     return function(...callArgs) {

//         return that.apply(context, args.concat(callArgs))
//     }
// }
// class Cat {
//     constructor(name) {
//       this.name = name;
//     }
  
//     says(sound, person) {
//       console.log(`${this.name} says ${sound} to ${person}!`);
//       return true;
//     }
//   }
  
//   class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const markov = new Cat("Markov");
//   const pavlov = new Dog("Pavlov");
  
//   markov.says("meow", "Ned");
//   // Markov says meow to Ned!
//   // true
  
//   // bind time args are "meow" and "Kush", no call time args
//   markov.says.myBind(pavlov, "meow", "Kush")();
//   // Pavlov says meow to Kush!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "a tree"
//   markov.says.myBind(pavlov)("meow", "a tree");
//   // Pavlov says meow to a tree!
//   // true
  
//   // bind time arg is "meow", call time arg is "Markov"
//   markov.says.myBind(pavlov, "meow")("Markov");
//   // Pavlov says meow to Markov!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "me"
//   const notMarkovSays = markov.says.myBind(pavlov);
//   notMarkovSays("meow", "me");

function curriedSum(numArgs){
    debugger
    let numbers = [];
    function _curriedSum(num1) {
        numbers.push(num1);
        if (numbers.length === numArgs) {
            return sum(numbers);
        }
    }
    return _curriedSum;
}

function sum(){
    let total = 0;
    let args = Array.from(arguments);
    args.forEach( element => {
        total += element;
    })
    return total;
}

// const total = curriedSum(4);
// total(5)(30)(20)(1);

// console.log(total());
