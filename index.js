module.exports = Math.sign || function sign(x){
    return parseInt(x / Math.abs(x) || +x);
};