try {
    let number = Math.floor(Math.random() * 9);
    if (number % 2 == 1) {
        throw new Error(number);
    }
    console.log(`Even number: ${number}`);
} catch (err) {
    console.log(`Odd number: ${err.message}`);
} finally {
    console.log('Operation finished.');
}

