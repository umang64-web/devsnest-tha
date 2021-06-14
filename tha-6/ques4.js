function first(x){
    return x.join();
}
function first2(x){
    return x.join('+');
}
console.log(first(["'Red", "Green", "White", "Black'"]));
console.log(first2(["'Red", "Green", "White", "Black'"]));