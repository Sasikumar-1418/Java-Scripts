for(let i=1;i<=20;i++){
    if(i%3===0 && i%5===0){
        console.log("Fizzbuzz: "+i);
    }
    else if (i%3===0){
        console.log("Fizz: "+i);
    }
    else if(i%5===0){
        console.log("Buzz: "+i);
    }
    else{
        console.log("printing the number: "+i);
    }
}