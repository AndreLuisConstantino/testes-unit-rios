const soma = (a,b) => {
    return a + b
}

const fatorial = (n) => {
    return n <= 1 ? 1 : n * fatorial(n-1) 
}

module.exports = {
    soma,
    fatorial
}