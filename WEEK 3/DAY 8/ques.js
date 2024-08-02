// function nearestChapter(obj,num){
//     let near='';
//     let number=Infinity
//     for(let x in obj){
//         let distance=Math.abs(obj[x]-num)
//         if(distance<number || distance==number && obj[x]>obj[near]){
//            near=x
//            number=distance
         
//         }
//     }
   
//     return near
// }
// console.log(nearestChapter({chapter1 : 1, chapter2 : 15, chapter3 : 20}, 10))
// console.log(nearestChapter({HTML : 7, CSS : 10, JavaScript : 15}, 12))
// console.log(nearestChapter({A : 1, B : 5}, 3))


// function calculator(num1,exp,num2){
//     let result=0;
//     if(exp=="+"){
//         result=num1+num2;
//     }else if(exp=="*"){
//         result=num1*num2;
//     }else if(exp=="/"){
//         result=num1/num2
//     }
//     return result

// }
// console.log(calculator(2, "+", 2))
// console.log(calculator(2, "*", 2))
// console.log(calculator(4, "/", 2))



// function singleNumber(arr){
//     let num=0;
//     for(let x of arr){
//         num ^= x
//     }
//     return num
// }
// console.log(singleNumber([2, 2, 1]))
// console.log(singleNumber([4, 1, 2, 1, 2]))
// console.log(singleNumber([3]))

// function highLow(str){
//     let str1='';
//     str1=str.split(" ").sort((a,b)=>{
//         return a-b
//     })
//     return ""+str1[str1.length-1]+" "+str1[0]

// }
// console.log(highLow("1 2 3 4 5"))
// console.log(highLow("1 2 -3 4 5"))
// console.log(highLow("1 9 3 4 -5"))
// console.log(highLow("13"))



// function getScore(arr){
//     let sum=0;
//     for(let x of arr){
//         sum+=x.score
//     }
//     return sum
// }
// console.log(getScore([ { name: "Henry", score: 59 }, { name: "Jack", score: 41 }, { name: "Maria", score: 88 } ]))
// console.log(getScore([ { name: "Alex", score: 90 }, { name: "Megan", score: 32 } ]))



// function hoursToSeconds(hr){
//     let sec=hr*(60*60)
//     return sec
// }
// console.log(hoursToSeconds(10))
// console.log(hoursToSeconds(24))



// let i,j,k;
// let str="";

// let row=5;
// for(i=1; i<=row; i++){
//     for(j=1; j<=i; j++){
//         str+=" "
//     }
//     for(k=1; k<=10-(i*2-1); k++){
//         str+=""+k
//     }
//     str+="\n"
    
// }
// console.log(str)


// function reverseString(str){
//     let rev=str.split(" ").reverse().join(' ')
//     return rev.trim()
// }
// console.log(reverseString("we are bridgeon"))
// console.log(reverseString(" hello world "))
// console.log(reverseString("a good example"))


// function capitalize(str){
//     let arr='';
//     let arr2='';
//     for(let i=0; i<=str.length-1; i++){
//         if(i%2==0){
//             arr+=str[i].toUpperCase()
//             arr2+=str[i].toLowerCase()
//         }
//         else{
//             arr+=str[i].toLowerCase()
//             arr2+=str[i].toUpperCase()
//         }
       
       
//     }
//     return [arr ,arr2]
// }
// console.log(capitalize("abcdef"))
// console.log(capitalize("bridgeon"))


function onlyNumber(arr){
 let number= "1,2,3,4,5,6,7,8,9";
 let num=[];
 
 for(let x  of arr){
    if(x==number){
       num.push(number) 
    }
    }
   
}
console.log(onlyNumber([1,"bridgeon",true,5]))
// console.log(onlyNumber(["10",false,6,"Ten"]))




