// Closures are one of the most powerful features of JavaScript.
//  JavaScript allows for the nesting of functions and grants the
//   inner function full access to all the variables and functions defined inside the
//    outer function (and all other variables and functions that the outer function 
//     has access to).

function outer(){
    let counter = 0
    function inner(){
        counter++
        console.log(counter)
    }
    return inner
}
const fn  = outer()
fn()