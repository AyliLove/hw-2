
let a;
a = 10;
alert (a);

a = 20;
alert (a);

const date = 'Год выпуска первого iPhone - 2007';
alert (date);


const name = 'Создатель JavaScript -  Брендан Эйх';
alert (name);

let b = 10;
let c = 2;
alert (b+c);
alert (b-c);
alert (b*c);
alert (b/c);

const result = 2**5;
alert (result);

const divisionResult = 9%2;
alert (divisionResult);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

let age = prompt ("Сколько вам лет?");
alert ("ваш возраст " + age); 

let user = {    
    name: 'Ilya',
    age: 35,
    isAdmin: true
}

user['cityofresidence'] = 'Saint- Petersburg';


user.age = 36;


delete user['cityofresidence'];


let info = prompt ('Какую информацию хотите узнать о пользователе?');
alert (user[info]);

let userName = prompt("Как вас зовут?");
alert("Привет, " + userName);
