export default function fibonacci(number) {
    // base case
    if(number === 0) {
        return 0;
    }else if(number === 1) {
        return 1
    }else{

    // fibonacci(3) = fibonacci(2) + fibonacci(1)
    return fibonacci(number - 1) + fibonacci(number - 2)
    }
}


