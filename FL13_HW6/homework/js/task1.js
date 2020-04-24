let a = +prompt('Enter the check amount', '');
let b = +prompt('Enter a percentage tip', '');
const max = 100;

if (isNaN(a) || isNaN(b) || b < 0 || b > max ) {
    
    alert('Invalid input data');

} else {
    
    let amount = a * b / max;
    let total = a / max * b + a;

    alert('Check mount:' + ' ' 
    + a + '\nTip:' + ' ' 
    + b + '%' + '\nTip amount:' + ' ' 
    + amount + '\nTotal sum to pay:' + ' ' 
    + Math.round(total * max) / max);

}
