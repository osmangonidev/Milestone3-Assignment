function feetToMile(feet){
   const mile= feet/5280;
   return mile;
}
// console.log(feetToMile(15000));

function woodCalculator(chair,table,bed){
    const chairWood=chair*1;
    const tablaWood=table*3;
    const bedWood=bed*5;
    totalWood=chairWood+tablaWood+bedWood;
    return 'Total wood requirement is '+ totalWood + ' Cubic Feet.';
}
console.log(woodCalculator(1,1,1));

function brickCalculator(floor){
    if(floor<1 || isNaN(floor)==true){
        return "It's a invalid number."
    }
    let totalBrick;
    let totalHeight;
    if (floor<=10){
        totalHeight=floor*15;
        totalBrick=totalHeight*1000;
    }
    else if(floor<=20){
        totalHeight=(10*15)+(10*12);
        totalBrick=totalHeight*1000;
    }
    else{
        moreFloor=floor-20;
        totalHeight=(10*15)+(10*12)+(moreFloor*10);
        totalBrick=totalHeight*1000;
    }
    return totalBrick;
}
console.log("Total brick requirement is = "+brickCalculator(13)/1000 +" Thousand");
/*function tinyFriend(array){
    
    return smallName;

    function finyFriend(array){
        let minName=[];
        minName[0]=array[0];
        for(let i =1;i<array.length;i++){
            let element=array[i];
            let previesElement=minName[i-1];
            if(element.length<=previesElement.length){
                minName.push(element);
            }
        }
        return minName;
    }
let arr=['osman','akash','ovi','omor'];
console.log(finyFriend(arr));}*/
    
//     let lengthArray=[];
//     for(let i=0; i<array.length; i++){
//         let element=array[i];
//         let elementLength=element.length;
//         lengthArray.push(elementLength);
//     }
//     let minLength=Math.min.apply(null,lengthArray);
// let minLengthPossition=[];
// for (let i=0; i<lengthArray.length;i++){
//     if(lengthArray[i]==minLength){
//         minLengthPossition.push(i);
//     }
// }

// console.log(lengthArray);
// console.log(minLength);
// console.log(minLengthPossition);
let array=['osman','goni','omor','akash','rashidul',]
var minName=array[0];
for(let i=1; i<array.length; i++){
    
    let element=array[i];
    if(element.length< minName.length){
        minName=element;
      
    }
    

}
let arr=[];
let minNameLength=minName.length;
for(let i=1; i<array.length; i++){
    if(array[i].length==minNameLength){
        arr.push(i);
    }
}
array[arr[0]]

console.log(arr);
