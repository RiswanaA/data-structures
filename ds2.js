const inputarray= [0,1,2,3,3,4,5,6,6,9];
const finalarray = [];
var testelement;
var j=0;
for(i=0;i<inputarray.length;i++)
{ 
 testelement=inputarray[i];
 if(testelement<inputarray[i+1])
 finalarray.push(testelement);
 
}
finalarray.push(inputarray.length-1);
console.log(finalarray.toString());

