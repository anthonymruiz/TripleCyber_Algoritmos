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