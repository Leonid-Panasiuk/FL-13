function letterCount(str, letter) {
    let letter_count = 0;
    for (let position = 0; position < str.length; position++) {

        if (str.charAt(position) === letter.toUpperCase() || str.charAt(position) === letter.toLowerCase()) {
            letter_count += 1;
        }

    }
    return letter_count;
}

console.log(letterCount("Maggy", "g"));
console.log(letterCount("Barry", "b"));
console.log(letterCount("", "z"));