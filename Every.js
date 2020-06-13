let somef = function(value){
    if(value%2==0){return 1}
    else {return 0}
    
}
let every = function(array, func){
    let resulttable = [];
    for (let i = 0; i < array.length; i++){
        resulttable.push(func(array[i]))
    }
    if(resulttable.includes(0)){return false}
    else return true

}

every([2,3,4,4,5,7,8,9,10,1,11,23],somef);

let every2 = function(array, func){
    return array.some(func)
}
every2([2,6,10,14,20],somef);