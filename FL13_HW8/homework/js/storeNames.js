function storeNames() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i];
    }
    return arr;
}

console.log(storeNames('Nick Fury', 'Iron Man', 'Doctor Strange'));