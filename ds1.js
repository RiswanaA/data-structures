const array1= [5,7,8,10];

if(array1.length!=0)
{
    search();
}
else
 console.log("array is empty");

function search() 
{
    for(i=0;i<(array1.length-1);i++)
    {
        if((array1[i]+1)!=array1[i+1])
        {
        console.log("missing number is:"+ (array1[i]+1) );
        }
    }
}
   
    
    
