// basic
var price=100;
var product="Apple";
var tax=10;
var total=price+tax;

console.log(product);
console.log(total)
 
// basic

var fruit="Apple";
var count=12;
var price=16;
var total=count*price;

console.log(total);
console.log(fruit);

// function

function samsung(){
    console.log("This is Samsung")
}
function iphone(){
    console.log("This is iphone")
}
function Redmi(){
    console.log("This is Redmi")
}
function Oppo(){
    console.log("This is Oppo")
}
samsung()
Redmi()
iphone()
Oppo()

// function

var a=10;
var b=20;

function add(){
         console.log(a+b);
}
add()

// function
var factor="Ajth"
var fplayer="Rohit Sharma"
var fdirector="Arunprasath Natarajan"


function favorite(){
    console.log("Favorite actor is:"+" "+factor);
    console.log("Favorite player is:"+" "+fplayer);
    console.log("Favorite director is:"+" "+fdirector);
}
favorite()


// function

function area(l,b){
    var area=l*b;
    console.log(area)
}
area(10,20)
// var length=10;
// var breadth=20;


                    //  doubt return keyword usage
function add(a,b){
    return  a+b;
  }
  var total=add(20,30)
  console.log(total)


// if else

  var rain =false;

if(rain){
    console.log("Take umbrella")
}else{
    console.log("Enjoy Sunshine")
}

var homework=false;

if(homework){
    console.log("Great Job")
}else{
    console.log("Finish your homework before playing")
}

var cookies=false;
if(cookies){
    console.log("Would you like to have?")
}else{
    console.log("Time to bake more")
}

var brush=true;
if(brush){
    console.log("Your teeth are clean")
}else{
    console.log("Brush your teeth now")
}


var birthday=false;
if(birthday){
    console.log("Happy Birthday")
}else{
    console.log("Have a greatday")
}


// if statement
var color="green";

if(color=="green"){
    console.log("Go")
}if(color=="yellow"){
    console.log("Ready to go")
}if(color=="Red"){
    console.log("stop")
}

// if statement
var season="spring";

if (season=="spring"){
    console.log("Enjoy the blooming flower")
}
if(season=="winter"){
    console.log("Bundleup and stay warm")
}
if(season=="summer"){
    console.log("Have fun in the sun")
}
if(season=="Autumn"){
    console.log("Admire the colorful leaves")
}


// if/else if statement
var score=50;

if(score<=50){
    console.log("You need to improve")
}if (score>50&& score<=70){
    console.log("Good Job")
}if(score>70){
    console.log("Excellent performance")
}

// if/else if
var number="even";
if(number=="odd"){
    console.log("The number is odd")
}else if (number=="even") {
    console.log("The number is even")
}

// doubt if /else
var character='c';
if (character='a','e','i','o','u'){
    console.log("Its a vowel");
}else{
    console.log("Its Consonant")
}


// for loop
for(count=1;count<=10;count=count+1)
{
    console.log(count)

}

// for loop
for(i=1;i<=5;i++){
    console.log("Priya");
}

// for loop to print 1,3,5,7,9 !doubt
for(i=1;i<=10;i+2){
    console.log(i)
}
// second try
for(i=1;i<=10;i=i+2){
    console.log(i)
}



// for loop reverse no printing
for(i=10;i>=0;i--){
    console.log(i)
}


 