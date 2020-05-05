//Task 1 

function convert() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            arr.push(Number(arguments[i]));
        }
        if (typeof arguments[i] === 'number') {
            arr.push(String(arguments[i]));
        }
    }
    return arr;
}

console.log(convert('1', 2, 3, '4'));

//Task 2

function executeforEach(arg, callback) {

    for (let i = 0; i < arg.length; i++) {
        callback(arg[i]);
    }

}

executeforEach([1, 2, 3], function (el) {
    console.log(el * 2);
});

//Task 3

function mapArray(arg, callback) {
    let arr = [];
    for (let i = 0; i < arg.length; i++) {
        arr.push(callback(parseInt(arg[i])));
    }
    return arr;
}

console.log(mapArray([2, '5', 8], function (el) {
    return el + 3;
}));

//Task 4

function filterArray(arg, callback) {

    let arr = [];
    for (let i = 0; i < arg.length; i++) {
        if (callback(arg[i])) {
            arr.push(arg[i]);
        }
    }
    return arr;
}

console.log(filterArray([2, 5, 8], function (el) {
    return el % 2 === 0;
}));

// Task 5

function containsValue(arr, value) {

    return arr.indexOf(value) > -1;

}

console.log(containsValue([2, 5, 8], 2));


// Task 6 

function flipOver(str) {

    let newString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(flipOver('hey world'));

// Task 7

function makeListFromRange(range) {

    let result = [];
    let j = 0;
    for (let i = range[0]; i <= range[1]; i++) {
        result[j] = i;
        j++;
    }
    return result;
}

console.log(makeListFromRange([2, 7]));


// Task 8

const fruits = [{
        name: 'apple',
        weight: 0.5
    },
    {
        name: 'pineapple',
        weight: 2
    }
];

function getArrayOfKeys() {
    let arr = [];
    executeforEach(fruits, function (el) {
        arr.push(el.name);
    });
    return arr;
}
console.log(getArrayOfKeys());



// Task 9

function substitute(numbers) {

    let arr = [];
    let i = 0;
    mapArray(numbers, function (el) {
        if (el < 20 && el > 10) {
            arr[i] = '*';
        } else {
            arr[i] = el;
        }
        i++;
    });
    return arr;
}
console.log(substitute([58, 14, 48, 12, 31, 19, 10]));


// Task 10

function getPastDay(date, d) {
    const newDay = date.getDate() - d;
    let newDate = new Date(date.getFullYear(), date.getMonth(), newDay);
    return newDate.getDate();
}

const date = new Date(2020, 0, 2);
console.log(getPastDay(date, 1));
console.log(getPastDay(date, 2));
console.log(getPastDay(date, 365));

// Task 11

function formatDate(d){
    let hour = d.getHours()<10 ? `0${d.getHours()}` : d.getHours();
    let minute = d.getMinutes()<10 ? `0${d.getMinutes()}` : d.getMinutes();
    return `"${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()} ${hour}:${minute}"`;
}
console.log(formatDate(new Date('6/15/2019 09:15:00')));