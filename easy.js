function avCalc (arr){
    let sum = 0;
     
    for (let i = 0; i < arr.length; i++){
        
        sum += arr[i];
    }
    
    let avrg = (sum/arr.length);
    return avrg;
}

const test = [1.5, 3, 2.5, 1];
console.log(avCalc(test));