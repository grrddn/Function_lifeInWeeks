var output = [];

function sumOne(){
    if((output.length + 1) % 3 === 0 && (output.length + 1) % 5 === 0){
        output.push("fizz Buzz");
    }else if((output.length + 1) % 3 === 0 && (output.length + 1) % 5 !== 0){
        output.push("fizz");
    }else if((output.length + 1) % 5 === 0 && (output.length + 1) % 3 !== 0){
        output.push("buzz");
    }else if((output.length + 1) % 3 !== 0 && (output.length + 1) % 5 !== 0){
        output.push(output.length + 1);
    }
    console.log(output);
}

sumOne();