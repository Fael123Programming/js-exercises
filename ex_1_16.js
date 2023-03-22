function calculate(...salaries) {  // Rest operator.
    let total = 0;
    salaries.forEach(s => total += s);
    return total;
}

console.log(calculate());