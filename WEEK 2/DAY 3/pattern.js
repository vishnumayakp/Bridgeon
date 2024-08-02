let n=5;
let string="";
for(i=1; i<=n; i++){
    for(j=1; j<=n; j++){
        if(j==1 ||  j==i || j==n || i==1 || i==5 || (n-i)+1==j){
            string+="* ";
        }else{
            string+="  ";
        }
    }
    string+="\n";
}
console.log(string)
