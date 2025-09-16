function fibonacciLastTwo(n) {
    let sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    // devolver los últimos dos números
    return sequence.slice(-2);
}

// Ejemplo:
console.log(fibonacciLastTwo(245)); // 👉 [34, 55]