//задание 1

function message (){
console.log ('Я учу JavaScript!');
}
message()

let message1 = function(){
    console.log ('Я учу JavaScript!')
};
message1()

let message2=()=>console.log ('Я учу JavaScript!')
message2()

//задание 2

function getAnotherImage1(){
    let image = document.getElementById('fish');
    image.src = "./images/fish2.jpg";
}

function getAnotherImage2(){
    let image = document.getElementById('fish');
    image.src = "./images/fish1.jpg";
}

//задание со звездочкой

let year = prompt('Ведите год')
if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
{
    alert (' Год является високосным (366 дней)');
}
else {
    alert ('Год не високосный (у него 365 дней)');
}



