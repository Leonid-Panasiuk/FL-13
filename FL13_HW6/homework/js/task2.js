let str = prompt('Enter your word:');
let trimmedStr = str.trim();
const half = 2;

if (trimmedStr.length === 0) {

    alert('Invalid value');
    
} else {

let mid = str.length / half;

if (str.length % half === 0) {

    alert(str[mid - 1] + str[mid]);

} else {

    mid = Math.floor(mid);
    alert(str[mid]);
}

}