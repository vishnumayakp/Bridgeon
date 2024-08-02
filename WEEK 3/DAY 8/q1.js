// function giveMeSomething(str){
//     return "Something"+ " " + str
// }
// console.log(giveMeSomething("Something"))



// function cube(n){
//     return n ** 3
// }
// console.log(cube(10))


// function calcAge(age){
//     len=365;
//     days="";
//     return days=len*age
// }
// console.log(calcAge(20))


// function sum(n1,n2){
//     result=""
//     return result=n1+n2;
// }
// console.log(sum(-3, -6))


// function remainder(x, y){
//     result="";
//     return result = x % y;

// }
// console.log(remainder(-9, 45))



// function addition(n){
//  result="";
//  return result=n+1;
// }
// console.log(addition(-3))


// function circuitPower(voltage, current) {
//   let power="";
//   return power=voltage * current;
// }
// console.log(circuitPower(110,3));


// function sortByLength(arr) {
//     return arr.sort((a,b)=>{
//         return a.length-b.length
//     })
// }
// console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]));


// function concatName(firstName, lastName) {
    
//     let str=lastName.concat(",", firstName)
//     return str
// }
// console.log(concatName("First", "Last"))
// console.log(concatName("John", "Doe"))
// console.log(concatName("Mary", "Jane"))



// function convert(minutes){
//     let sec=60;
//     return minutes*sec
// }
// console.log(convert(2));


// function triArea(base,height){
//     let area=0;
//     return area=(base*height)/2

// }
// console.log(triArea(7,4));

// function getSumOfItems(arr) {
//     let sum=0;
//     for(i=0; i<=arr.length-1; i++){
//         sum+=arr[i]
//     }
//     return sum
// }
// console.log(getSumOfItems([45, 3, 0]) );


// function findIndex(arr, str) {
// 	return arr.indexOf(str)
// }
// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));



// function search(arr, item) {
// 	return arr.indexOf(item)
// }
// console.log(search([1, 2, 3], 4));






// function arrayValuesTypes(arr) {

// 	return arr.map(index=> typeof index)
// }
// console.log(arrayValuesTypes([1, 2, "null", []]));


// function vowelCount(str){
// 	let result=0;
// 	let vowels="aeiou"
// 	for(let i=0; i<=str.length-1; i++){
// 		if(vowels.indexOf(str[i])!=-1){
// 			result+=1
			
// 		}
		
// 	}
// 	return result
	

// }
// console.log(vowelCount("bridgeON"))
// console.log(vowelCount("AEIOU"))


// function findSum(obj){
// 	let sum=Object.values(obj).reduce((total,value)=>{
// 		return total+value
// 	})
// 	return sum
// 	}
// console.log(findSum({ first: 1, second: 6, third: 5 }))


// function toArray(num){
// 	let arr=String(num).split("").map((num)=>{
// 		return Number(num)
// 	})
// 	return arr
// }
// console.log(toArray(235))


// function arrayUnique(arr){

// 	let array=[];
// 	for (let i=0; i<=arr.length-1; i++){
// 		if(array.indexOf(arr[i])===-1){
// 			 array.push(arr[i]);
// 		}else{
// 			return false
// 		}
// 	}
// 	return true
// }
// console.log(arrayUnique(["a","b","c","c","d"]))

// function countVowel(str){
// 	let vowels="aeiouAEIOU"
// 	let count=0;
// 	for(let i=0; i<=str.length-1; i++){
// 		if(vowels.indexOf(str[i])!==-1){
// 			count+=1
// 		}
		
// 	}
// 	return count
// }
// console.log(countVowel("bridgeON"))
// console.log(countVowel("aeiou"))
// console.log(countVowel("HTML"))

// function stringValue(obj){
// 	let str="";
// 	for(let x in obj){
// 		str=Object.values(obj).join(' ')
		
// 	}
// 	return str
// }
// console.log(stringValue({ 1: "We", 2: "are", 3: "bridgeon" }))
// console.log(stringValue({ 1: "I", 2: "am", 3: "innocent" }))
// console.log(stringValue({ 1: "Code", 2: "your", 3: "future" }))


// function stringtoArray(arr){
// 	let str=[];
// 	str=arr.sort((a,b)=>{
// 		return a.length-b.length
// 	})
// 	return str

// }
// console.log(stringtoArray(["Google", "Apple", "Microsoft"]))
// console.log(stringtoArray(["Leonardo", "Michelangelo", "Raphael", "Donatello"]))
// console.log(stringtoArray(["Turing", "Einstein", "Jung"]))

// function countTrue(arr){
// let count=0;
// for(let x in arr){
// 	if(arr[x]==true){
// 		count+=1
// 	}
	
// }
// return count
// }
// console.log(countTrue([true, false, false, true, false]))
// console.log(countTrue([false, true, false, false]))
// console.log(countTrue([]))

// let i,j;
// let str="";
// row=5;
// for(i=1; i<=row; i++){
// 	for(j=1; j<=row-i+1; j++){
// 		str+=j
// 	}
// 	str+="\n"
// }
// console.log(str)


// function missingNumber(arr){
// 	let num='';
// 	let n=arr.length;
// 	let expSum=n*(n+1)/2
// 	let actSum=arr.reduce((total,value)=>total+value,0)
// 	num=expSum-actSum;
// 	return num
// }
// console.log(missingNumber([2, 0, 1, 4]))
// console.log(missingNumber([0, 1]))
// console.log(missingNumber([4, 2, 3, 5, 0]))

// let i,j;
// let str="";
// row=5;
// for(i=1; i<=row; i++){
// 	for(j=5; j>=row-1; j--){
// 		str+=j
// 	}
// 	str+="\n"
// }
// console.log(str)




// let i,j;
// let str="";
// row=6;
// for(i=1; i<=row; i++){
// 	for(j=row; j>=i; j--){
// 		str+=j
// 	}
// 	str+="\n"
// }
// console.log(str)


function spinWords(str){
	let result=[];
	 let rev=str.split(' ');
	for(let x of rev){
		if(x.length>4){
			 result.push(x.split('').reverse().join(''))
		}else{
			result.push(x)
		}
	}
	return result.join(' ')
}
console.log(spinWords("helloo The Mangossss"));