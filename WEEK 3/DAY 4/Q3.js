// function stringValue(str){
//     let str1="";
//     len=str.length;
//     for(let i=0; i<=len-1; i++){ 
//         str1+=str[i].repeat(2); 
//     }
//    return str1
    
// }
// console.log(stringValue("Hello World!"));






// function stringValue(str1,str2){
//     let string1="";
//     for(i=0; i<str1.length; i++){
//         string1+=str1[i]+str2[i]
//     }
//     return string1

    
// }
// console.log(stringValue("abc","123"))




// function findLargest(arr){
//     let arr1=[];
//     for(let x of arr){
//     let array=x.sort((a,b)=>{
//         return b-a
//     })
//     arr1.push(array[0])
//     }
//     return arr1
    
// }
// console.log(findLargest([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));





// function reverseString(str){
//     let reverse=str.split(' ').reverse()
//     return reverse.join(' ').trim().replaceAll('  ',' ')
// }
// console.log(reverseString(" Welcome to  Bridgeon "))



// const ageMembers=([
//     { name: "John", age: 15 },
//     { name: "Steve", age: 50 }])
// function getAge(arr){
//     let diff=0;
//     let array=[];
//     let arrRev=[]
//     for (let x of arr){
//         array.push(x.age)
//     }
//    array.sort((a,b)=>{
//     return a-b
//    })
//   arrRev.push(array[0],array[array.length-1],(array[array.length-1] - array[0]))
//   return arrRev
// }
// console.log(getAge(ageMembers))


// function getAverage(values){
//     let sum=0;
//     let mark=values.marks;
//     console.log(mark)  
//     sum=mark.reduce((total,mark)=> total+mark,0)
//     let avg = sum/mark.length

//     return avg
    
// }
// console.log(getAverage({name: "John", marks: [50, 45, 40, 40, 25] }));




// function oddOrEven(arr){
//     let sum=0
//     let ans="";
//     let len=arr.length
//     for(i=0; i<=len-1; i++){
//         sum+=arr[i]  
//     }
//     if(sum%2==0 || sum==0){
//         ans+="even"
//     }else{
//         ans+="odd"
//     }
//     return ans
   
// }
// console.log(oddOrEven([0, 2, 4]))


// let string="Web Development Tutorial"
// let result="";
// let str=string.split(' ')
// for(let i=0; i<=str.length-1; i++){
//     if(str[i].length>result.length){
//         result=str[i]
//     }
    
// }
// console.log(result)


// function arrayofMultiples(num,length){
//     let array=[];
//     for(let i=1; i<=length; i++){
//         array.push(num*i)
//     }
//     return array
// }
// console.log(arrayofMultiples(7,5))
function nearestChapter(obj,num){
    let key=""
    let result=Infinity
    for(let x in obj){
        let value=obj[x]
        let diff=Math.abs(obj[x]-num)
        if(diff<result || (diff==result && obj[x]>value)){
            result=diff
            key=x
        }
        
    }
   return key
    

}
console.log(nearestChapter({chapter1 : 1, chapter2 : 15, chapter3 : 20}, 10));
console.log(nearestChapter({HTML : 7, CSS : 10, JavaScript : 15}, 12));
console.log(nearestChapter({A : 1, B : 7}, 4));