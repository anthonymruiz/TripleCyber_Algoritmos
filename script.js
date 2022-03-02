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
getFibo(10); 

//2. Function to random Order 
function randomOrder(n){
    let randoms = [];
    for(let i=1; i<=n; i++){
        randoms.push(i); 
    } 
    randoms = randoms.sort(r =>  Math.random() - 0.5);
    return randoms; 
} 
randomOrder(10);