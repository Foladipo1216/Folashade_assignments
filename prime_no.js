function prime(){
   var number= 20
   var isPrime;
   for(let i=2; i<=number; i++){
      isPrime = 1;g
      for(let j=2; j<i; j++){
         if(i % j === 0){
            isPrime = 0;
            break;
         }
      }
      if(isPrime === 1){
         console.log(i);
      }
   }
}
prime();