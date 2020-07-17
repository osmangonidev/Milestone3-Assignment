//feet to Mile converter function name is feeToMile.
function feetToMile(feet){
    if(feet<1){
        return 'Please enter a valid number.';
    }
   const mile= feet/5280;
   return mile+' mile';
}
const result=feetToMile(100);
console.log( result);

//Takes three different furniture itemts number and calculate how many wood. 
function woodCalculator(chair,table,bed){
    const chairWood=chair*1;
    const tablaWood=table*3;
    const bedWood=bed*5;
    totalWood=chairWood+tablaWood+bedWood;
    return 'Total wood requirement is '+ totalWood + ' Cubic Feet.';
}
console.log(woodCalculator(1,1,1));                     

//Take a floor input and calculate how many brick is need for that floor.
function brickCalculator(floor){
    if(floor<1 || isNaN(floor)==true){
        return "It's a invalid number.";
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
console.log("Total brick requirement is "+brickCalculator(13)/1000 +" Thousand");

//Take a input friends name array and return the smallest name.
function tinyFriend(array){
    if (typeof array!="object"){
        return 'Please input a array.';
    }
    let smallName=array[0];
    for (let i=1; i< array.length; i++){
        let element=array[i];
        if(smallName.length > element.length ){
            smallName=element;
        }
    }
    return smallName;
}

const friendName=['osman','goni','akash','omor','rashidul'];
console.log("The smallest name under my friends names is '"+tinyFriend(friendName)+"'.");