const inputarray=[1,3,3,4,2,3,6,6,1,0,9];

var totalCount=0;
var countarray=[];
//console.log("the Array value are ",inputarray)
for(var i=0;i<inputarray.length;i++){
    var duplicateBoolean = false;
    for(var k=0;k<i;k++){
        if(inputarray[k]==inputarray[i]){
            duplicateBoolean = true;
        }
    }
    if(!duplicateBoolean){
        totalCount = 0;
        //console.log("Checking Now", inputarray[i], i);
        for(var j=i;j<(inputarray.length);j++){
            if(inputarray[i]==inputarray[j]){
                totalCount++;
            }
        }
        console.log(inputarray[i] + "=" + totalCount+"times");        ;
    }
}

