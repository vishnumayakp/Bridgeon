// function integerValue(n){
//     let sum=0;
//  for(let i=1; i<=n; i++){
//     if(i%3==0 || i%5==0 || i%7==0){
//         sum+=i
//     }
//  }
//  return sum
// }
// console.log(integerValue(10))



// function stringValue(str){
//     let total=0;
//     let str1=str.length;
//     for(i=0; i<=str1-1; i++){
//         if(str[i]=="i"){
//             total+=1
//         }else if(str[i]=="d"){
//             total-=1
//         }else if(str[i]=="s"){
//             total*=total
//         }
//     }
//     return total
// }
// console.log(stringValue("iiss"))



// function stringValue(arr){
//     let array=arr.length;
//     let arr1=[];
//     let values=true;
//     for(let i=0; i<=array-1; i++){  
//         if(arr[i]=="bridgeon"){
//             if(values==true){
//                 values=false;
//             }else{
//                 values=true
//             }


//         }
//         if(values==true){
//             arr1.push(values)
//         }else{
//             arr1.push(values)
//         }
       
//     }
//     return arr1
// }
// console.log(stringValue(["bridgeon", 10101, 3.14, 53, "bridgeon"]));



// function switchValue(arr){
//     let arr1=[];
//     let len=arr.length;
//     let value=true;
//     for(let i=0; i<=len-1; i++){
        
//             if(arr[i]=="bridgeon"){
//                 if(value==true){
//                     value=false
//                 }else{
//                     value=true
//                 }
//             }
//             arr1.push(value)
//     }
//     return arr1
   
// }
// console.log(switchValue(["bridgeon", 10101, 3.14, 53, "bridgeon"]))