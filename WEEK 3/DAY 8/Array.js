// const arr=[1,2,3,4,5,6,7,8]
// let text="";
// arr.forEach(myFunction);
// console.log(text)

// function myFunction(value){
//     text+=value
   
// }


// const arr=[1,2,3,4,5,6,7,8]
// let newArr="";
// arr.map(myFunction)

// function myFunction(value){
//     newArr=value*2;
//     console.log (newArr)
// }



// const arr=[1,2,3,4,5,6,7,8]
// let text=arr.filter(myFunction)
// console.log(text)

// function myFunction(value){
//     return value>2;


// const arr=[1,2,3,4,5,6,7,8]
// let sum=arr.reduce(myFunction)
// console.log(sum);
// function myFunction(total,value,index,array){
//     return total+value
// }


function countTrue(arr){
    let arr1=0;
    for(i=0; i<=arr.length-1; i++){
        if(arr[i]==true){
            arr1+=1
        }
    }
    return arr1
}
console.log(countTrue([true, false, false, true, false]));