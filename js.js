// document.write(22==22 && 44==44);

var avg = prompt("inter your point");

if (avg >= 80 && avg<=100){
    document.write("You Got A+");
}
    else if (avg >= 70 && avg <= 79){
    document.write("You Got A");
}
else if (avg >= 60 && avg <= 69){
    document.write("You Got A-");
}

else if (avg >= 50 && avg <= 59){
    document.write("You Got B");
}
else if (avg >= 40 && avg <= 49){
    document.write("You Got C");
}
else if (avg >= 33 && avg <= 49){
    document.write("You Got D");
}
else{
    document.write("You Got VERY F");
}

