function add(a,b){
    return a+b;
}

module.exports = add;
module.exports.add = add;


module.exports.sub = function sub(a,b){
    return a-b;
}