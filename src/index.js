module.exports = function reverse (n) {
    let str = n.toString();
    let strMod = str.replace('-', '');
    let result = '';

    for (let i = 0; i <= strMod.length - 1; i++) {
        result = `${strMod[i]}${result}`;
    }
    return result;
    }

