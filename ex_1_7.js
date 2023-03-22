const brands = {
    volkswagen: 1,
    toyota: 2,
    mercedes_benz: 3,
    ford: 4,
    honda: 1,
    general_motors: 0,
    bmw: 5,
    saic: 2,
    stellantis: 3,
    hyundai: 5
}

const entries = Object.entries(brands);

// Insertion Sort.

for (var i = 1; i < entries.length; i++) {
    var entry = entries[i];
    var j = i;
    while (j > 0 && entries[j - 1][1] > entry[1]) {
        entries[j] = entries[j - 1];
        j--;
    }
    entries[j] = entry;
}

console.log(entries.slice(entries.length - 3, entries.length));
