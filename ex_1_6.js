const phone_numbers = [
    '+5564993124464',
    '+351123456789',
    '123',
    'asdas',
    '+15678900111'
];

function validate(phone_number) {
    const regex = new RegExp('\\+\\d{7,15}');
    return regex.test(phone_number);
}

phone_numbers.forEach(number => {
        if (validate(number)) {
            console.log(`${number} is valid.`)
        } else {
            console.log(`${number} is invalid.`)
        }
    }
);
