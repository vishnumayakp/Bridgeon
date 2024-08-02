let n=5;
let string="";

for(let i=5; i>=1; i--){
    for(let j=1; j<=i; j++){
        // if(j==1 || i==n || j==i){
            string+="* ";
        
        // }else{
        //     string+="  ";
        // }
    }
    string+="\n";
}
console.log(string)