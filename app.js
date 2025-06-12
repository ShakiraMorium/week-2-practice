const num= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const oddEven = (array) => {
    let oddnumber = [];
    let evenNumber = [];

    for (let i = 0;i<num.length;i++){
        const numbers = array[i];

        if (numbers % 2 == 0) {
            evenNumber.push(numbers);
        }
        else {
            oddnumber.push(numbers);
        }
    

    }
   return {oddnumber, evenNumber};
}
const result = oddEven(num);
console.log(result);