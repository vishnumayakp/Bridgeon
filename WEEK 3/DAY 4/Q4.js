// function findLargest(arr){
//     let array=[];
//     for(let x of arr){
//         array.push(Math.max(...x))
//     }
//     return array
// }
// console.log(findLargest([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));


// function getSalary(arr){
//     let sum=0;
//     for (let x of arr){
//     sum+=x.salary
//     }
//     return sum
// }
// console.log(getSalary([
//     { name: "John", salary: 23000 },
//     { name: "Steve", salary: 40000 },
//     { name: "Martin", salary: 15000 }
//     ]))


// function getSum(arr){
//     let sum=0;
//     for(let i=0; i<=arr.length-1; i++){
//         if(arr[i]%3==0){
//             sum+=arr[i]
//         }
//     }
//     return sum
// }
// console.log(getSum([1, 2, 3, 4, 5]))



// function spinWords(str){
//     let value=""
//     let string=str.split(' ')
//     for(let x of string){
//         if(x.length>=5){
//            value+=" "+x.split('').reverse().join('')
//         } else{
//             value+=x
//         }

//     }
//     return value
// }
// console.log(spinWords("Hey fellow warriors"))



// function spinWords(str){
//     let value=""
//     let string=str.split(' ')
//     console.log(string)
//     for(let x of string){
//         if(x.length>=5){
//           value+=" "+x.split('').reverse().join('')
//         }else{
//             value+=x
//         }
//     }
//     return value
// }
// console.log(spinWords( "Hey fellow warriors" ))


// const words=['apple', 'banana', 'cherry', 'blueberry'];
// let value="";
// for(let i=0; i<=words.length-1; i++){
//     if(words[i].length>value.length){
//         value=words[i]
//     }

    
// }console.log(value)



// function checkPalindromes(arr){
//     let string=[];
//     let str="";
//     for(i=0; i<=arr.length-1; i++){
//         str=arr[i].split('').reverse().join('');
//         if(str==arr[i]){
//             string.push(arr[i])
           
//         }
        
//     }
//     return string
   
// }
// console.log(checkPalindromes(["rotator","level","haii"]))



// function ageMembers(arr){
//     let diff=0;
//     let arr1=[];
//     let revArr=[];
//     for(let x of arr){
//         arr1.push(x.age)
    
//     }
//     arr1.sort((a,b)=>{
//         return a-b
//     })
//     revArr.push(arr1[0],arr1[arr1.length-1],(arr1[arr1.length-1]-arr1[0]))
//     return revArr
// }
// console.log(ageMembers([
//     { name: "John", age: 15 },
//     { name: "Steve", age: 50 }]))


function operation(str){
    total=0;
    for(i=0; i<=str.length-1; i++){
        if(str[i]=="i"){
            total+=1
        }else if(str[i]=="d"){
            total-=1
        }else if(str[i]=="s"){
            total*=total
        }
    }
    return total
}
console.log(operation("iiisd"))