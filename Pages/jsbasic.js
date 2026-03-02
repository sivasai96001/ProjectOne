let str ='banana';
let op={};
for(let i of str){
   if(op[i]){
      op[i]=op[i]+1;
   }else{
      op[i]=1;
   }
}
console.log(op)