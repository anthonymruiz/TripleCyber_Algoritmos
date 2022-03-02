(function() {
    console.log("Fibonaccis");
    console.log(getFibo(10));

    console.log("Random and uniques numbers from 1 to random number");
    console.log(randomOrder(10));

    console.log("Obtener cambio");
    console.log(getCoins(17984));
})();

//1. Function to print N fibbonacci
function getFibo(n){ 
    let next = 1;
    let previous = 0;  
    let numbers = [0,1];
    
    for(let i=2; i<n; i++){
       fib = next + previous;
       previous = next;
       next = fib;
       numbers.push(next);
    }
    return numbers;
} 

//2. Function to random Order 
function randomOrder(n){
    let randoms = [];
    for(let i=1; i<=n; i++){
        randoms.push(i); 
    } 
    randoms = randoms.sort(r =>  Math.random() - 0.5);
    return randoms; 
}  

//3. Funciton 
function getCoins(amount){
    let coins = [2000, 1000, 500, 200, 100, 50, 25, 10, 5, 1].sort((a,b) => b-a); 
    let output  = [];
    coins.forEach(coin => {
       if(coin < amount){
          let cantidad = Math.floor(amount / coin);
          let total = cantidad * coin; 
          output.push(`${cantidad} x ${coin} = ${total}`); 
          amount -= total;
       } 
    }) 
    return output;
} 