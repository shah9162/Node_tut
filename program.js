// n=5;

// count= 0;
// for(i=1;i<=n;i++){
// if(n%i==0){
//     count+=1;
// }
// }
// if(count==2){
//     console.log(n +" is prime number");
// }
// else{
//     console.log(n +" is not prime number");
// }
function  primeNumber(n){
    // n=7; 
    for(i=1;i<=n;i++){
        count = 0;
        for(j=1;j<=n;j++){
            if(i%j==0){
                count+=1;
            }
        }
        if(count==2){
            console.log(i);
        }
     }
}
 function abc(a,b){
 let c;
    c=a+b;
    console.log(c)

}
module.exports={
    abc,primeNumber
}
//abc(3,4)





