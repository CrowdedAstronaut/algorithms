// const largestNumber = (num) => {
//     if (num === 0) return 0;
//     if(num > 0) return parseInt('9'.repeat(num));
//     else if (num < 0) return parseFloat('.' + '9'.repeat(num * -1));
// }


const largestNumber = (num) => {
    if (num === 0) return 0;
    if(num > 0) return parseInt('9'.repeat(num));
    else if (num < 0) return parseFloat('.' + '9'.repeat(num * -1));
}

function large(num) {
    return num > 0 ? parseInt("9".repeat(num)) : num === 0 ? 0 : parseFloat("." + "9".repeat(Math.abs(num)));
};

