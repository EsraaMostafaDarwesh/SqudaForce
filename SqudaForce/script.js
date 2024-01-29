
//alert("hello");  //will appear when load the page
document.write("test");  //output in webpage
document.getElementById("a").innerHTML="ffff"; //change the content of h1 in html
console.log("welcome"); //test the code in the console,not appear in webpage

//primitive data
//the first(num)
var x = 10; //declare the variable
console.log(typeof(x)); //num
//the second(string)
var x = "esraa"; 
console.log(typeof(x)); //string
//the third(booleans)->true or false 1 or 0 yes or no
var x = true;
console.log(typeof(x)); //boolean
//undefined
var y;
console.log(typeof(y)); //undefined

//complex data
//the first(object(array,object,null))
//array
var s = ["ahmed","mai",true,10]; //contain any type of data
console.log(typeof(s)); //object

//object(key:value)
var w = {name:"mai",age:12};
console.log(typeof(w)); //object

//null
var q = {};
console.log(typeof(q)); //object

//operators
//arithmetic operators
var x = 10+9; // x:operator  10,9:operand
console.log(x); //19
var x =10, y=9,w=x+y;
console.log(w); //19

var x = "ahmed"+"belal"; //concatenate
console.log(x); //ahmedbelal
var x = "ahmed"+9; //ahmed9
console.log(x);
var x = "100"+7; //1007
console.log(x);
var x = "100"-10;
console.log(x);//90
var x = 20-6;
console.log(x);//14
var x = 3*2;
console.log(x);//6
var x = 100/4;
console.log(x);//25
var x = 100 % 5;
console.log(x); //0
var x=9;
console.log(x++);//9 +10
console.log(++x);//11
console.log(x--);//11 + 10
console.log(--x);//9
console.log(5**2);//25

//Operator Precedence
x=10*2+(5**2)-6/2;
console.log(x); //42

//comparison operator
var x = 5;
console.log(x=5);//5
console.log(x==5);//true
console.log(x=="5");//true
console.log(x===5);//true (value and data)
console.log(x==="5");//false
console.log(x!=5);//false
console.log(x!=8);//true
console.log(x!==5);//false
console.log(x>=5);//true
console.log(x>5);//false
console.log(x<5);//false
console.log(x<=5);//true

//logical operator
var x=10,y=9;
console.log(x==10 && y==9);//true
console.log(x==="10" && y==9);//false
console.log(x==10 || y==="9");//true

//function
function add(){
    var x = 10;
    var y = 9;
   console.log(x+y);
}
add();

(function name(){
    console.log("hello");
}());

function sub(x,y){
    return x+y;
}
console.log(sub(10,10));
console.log(sub);

x="hello";
console.log(x.length);//5
console.log(x.indexOf('e'));//1
console.log(x.indexOf('a'));//-1



//task
//1
function sum(x1,x2,x3,x4){
    var z = x1+x2+x3+x4;
    return z ;
}
console.log(sum(3,4,3,5));//15

//2
function sumstring(x,y){
    var z = x+y;
    return z;
}
console.log(sumstring('t','m'));//tm

//3
function search(x,y){
    var z = x;
    return z.indexOf(y);
}
console.log(search("ahmed",'a'));
search ("mero",'z');//-1

//4
var x = "ahmed";
console.log(x.length);//5






//task
//1
var x = "  Ahmed   belal  ";
console.log(x.slice(0,8));//ahmed+spaces
console.log(x.substr(2,4));//med
console.log(x.charAt(2));//m
console.log(x.replace("   ","omar"));//ahmedomarbelal
console.log(x.toUpperCase());//AHMED   BELAL
console.log(x.toLowerCase());//ahmed   belal
var x = "ahmed";
console.log(x.concat("belal"));//ahmedbelal
console.log(x.includes("m"));//true
console.log(x.includes("M"));//false
var x = "    hello";
console.log(x.trim());//hello

//numbers
x=100/"a";
console.log(x);//NaN
console.log(typeof(x));//number

var x = 12;
console.log(x.toString());//12 as string
console.log(typeof(x.toString()));//string
var x = 12.874;
console.log(x.toFixed(1));//12.9
console.log(x.toFixed());//13
console.log(x.toFixed(2));//12.87
console.log(Number(true));//1
console.log(parseInt("20 30 60"));//20
console.log(parseInt("10 20"));//10
console.log(parseInt("ahmed  10"));//nan
console.log(parseFloat("20"));//20
console.log(parseFloat("1.33"));//1.33
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.POSITIVE_INFINITY);//-..
console.log(Number.NEGATIVE_INFINITY);//..
console.log(Number.NaN);//NAN

//task
//the first
function str(x,y,z,w){
    return x.concat(y,z,w);
}
console.log(str("ahmed"," ","belal"," "));//ahmed belal
console.log(str("ahmed"," omar ","belal"," helal"));//ahmed omar belal helal

//the second

 (function test(){
    var str="welcome mr ahmed";
    var x=str.indexOf("mr");//8
    var i=str.indexOf("a");
    var s=str.slice(i,i+1);
    //console.log(s);
    var y=str.substr(11,5);//ahmed
    var z=str.replace("ahmed","mohamed");//welcome mr mohamed
    var u=str.toUpperCase();//WELCOME MR AHMED
    var c=str.includes("yasser");//false
    var arr=[x,y,z,u,c,s];
    for(i=0;i<(arr.length);i++){
        console.log(arr[i]);
    }
    return;
 }());
  

    var str="welcome mr ahmed";
    var x=str.indexOf("mr");//8
    var s=str.slice(str.indexOf("a"),(str.indexOf("a"))+1);//a
    var y=str.substr(11,5);//ahmed
    var z=str.replace("ahmed","mohamed");//welcome mr mohamed
    var u=str.toUpperCase();//WELCOME MR AHMED
    var c=str.includes("yasser");//false
    console.log(x,s,y,z,u,c);

//the third
var num="10.879879";
console.log((Number(num)).toFixed());
console.log((Number(num)).toFixed(6));
console.log((Number(num)).toFixed(1));



 //task(array)
var fname="ahmed2020";
var lname="belal";
console.log(fname.substr(0,5));
console.log(fname.length);
console.log(fname.indexOf("m"));
console.log(fname.includes("z"));
console.log(fname.replace("ahmed2020","mohamed"));

var student=["mohamed","belal"];
student[2]=30;
console.log(student);
student.push("egypt");
console.log(student);
student.unshift("grade2");
console.log(student);
student.splice(3,0,88,79,80);
console.log(student);
var num=[1,2,3];
var con=student.concat(num);
console.log(con);
console.log(con.reverse());


var arr=[10,30,-5,13,6,55];
console.log(Math.min.apply(null,arr));
console.log(Math.max.apply(null,arr));
console.log(arr.sort(function(x, y){return x - y}));
var num2 = arr.map(multiply);
function multiply (x) {
return x * 2;
}
console.log(num2);
 

var check=arr.every(test2);
function test2(value){
  return value > 0;
}
console.log(check);


var divide = arr.filter(test);
function test(value) {
   var y = value % 2;
   return y == 0;
}
console.log(divide);


//task(object)
var obj={
    fname:"ahmed",
    lname:"belal",
    age:20,
    degrees:{ 
             arabic:60,
             english:70,
             french:88
            },
    total_degrees:function(){return this.degrees.arabic + this.degrees.english + this.degrees.french},
    full_name:function(){return this.fname +" "+ this.lname}
}
console.log(obj.total_degrees());
console.log(obj.full_name());


var x = new Date();
//console.log(x.getUtcDay());
console.log(x);
console.log(x.getFullYear());
var month=["January", "February", "March", "April", 
           "May", "June", "July", "August", "Sept",
           "October", "November", "December"];
console.log(month[x.getMonth()]);
console.log((x.getDate()));
console.log(x.getMilliseconds());
var days = [ "Saturday","Sunday", "Monday", 
             "Tuesday", "Wednesday", "Thursday", "Friday"];
console.log(days[x.getDay()+1]);
console.log(x.getTime());
console.log((x.getFullYear())+"/"+(x.getMonth()+1)+"/"+(x.getDate()));
var x = new Date("2021-9-15");
console.log(x);


var sum=0;
for(i=2;i<=8;i++){
    sum+=i;
}
console.log(sum);


//task
//1
function check2(x,y){
    return Math.max(x,y);
}
console.log(check2(11,9));

function checkl(x,y){
    if(x>y){
       return (x+"is larger than"+y);
    } else if(y>x){
        return (y+"is larger than"+x);
    }else{
        return (x+"="+y);
    }
}
console.log(checkl(10,8));
console.log(checkl(7,9));
console.log(checkl(9,9));


//2
function total_degrees2(){
    var degrees=[55,77,15,54];
    var sum=0;
    for(i=0;i<degrees.length;i++){
     sum+=degrees[i];
     var x = (sum/400)*100;
    }
    if(x >= 85){
        return "excellent";
    }else if(x >= 75 && x < 85){
        return "very good";
    }else if(x>=65 && x<75){
        return "good";
    }else if(x>=50 && x<65){
        return "succeed";
    }else{
        return "fail";
    }
}
console.log(total_degrees2());



//3
function area(x){
    var area=Math.pow(x,2);
    return area+" cm^2";
}
console.log(area(10));

//4
function time(){
    var x = new Date();
    var h=x.getHours();
    var m=x.getMinutes();
    var s=x.getSeconds();
    var days = [ "Saturday","Sunday", "Monday", 
             "Tuesday", "Wednesday", "Thursday", "Friday"];
    var day=days[x.getDay()+1];
    return "today is ="+day+"\n"+"current time is "+(h-12)+"pm :"+m+":"+s;
}
console.log(time());


//5
function random(x,y){
    if(x<0){
        x*=-1;
    }
    if(y<0){
        y*=-1;
    }
    if(x<(Math.ceil(x))&& x>(Math.floor(x))){
        x.toFixed();
    }
    if(y<(Math.ceil(y))&& y>(Math.floor(y))){
        y.toFixed();
    }
  return Math.floor(Math.random()*(y-x)+x);
}
console.log(random(4.5,8.7));
console.log(random(-5,8.7));


/*function random2(x,y){
    if(x<0){
        x*=-1;
        if(y<0){
            y*=-1;
            if(x<(Math.ceil(x))&& x>(Math.floor(x))){
                x.toFixed();
                if(y<(Math.ceil(y))&& y>(Math.floor(y))){
                    y.toFixed();
                }
            }else{
                if(y<(Math.ceil(y))&& y>(Math.floor(y))){
                    y.toFixed();
                }
            }
        }else{
            if(x<(Math.ceil(x))&& x>(Math.floor(x))){
                x.toFixed();
                if(y<(Math.ceil(y))&& y>(Math.floor(y))){
                    y.toFixed();
                }
            }else{
                if(y<(Math.ceil(y))&& y>(Math.floor(y))){
                    y.toFixed();
                }
            }
        }
    }else{
        if(y<0){
            y*=-1;
            if(x<(Math.ceil(x))&& x>(Math.floor(x))){
                x.toFixed();
                if(y<(Math.ceil(y))&& y>(Math.floor(y))){
                    y.toFixed();
                }
            }else{
                if(y<(Math.ceil(y))&& y>(Math.floor(y))){
                    y.toFixed();
                }
            }
        }

    }
}*/

function random2(x,y){
    if(x<0){
        x*=-1;
        if(y<0){
            y*=-1;
            if(x<(Math.ceil(x))&& x>(Math.floor(x))){
                x.toFixed();
                if(y<(Math.ceil(y))&& y>(Math.floor(y))){
                    y.toFixed();
                    return Math.random*(y-x)+x;
                }
            }else if(y<(Math.ceil(y))&& y>(Math.floor(y))){
                y.toFixed();
                return Math.random*(y-x)+x;
            }
        }else if(x<(Math.ceil(x))&& x>(Math.floor(x))){
            x.toFixed();
            if(y<(Math.ceil(y))&& y>(Math.floor(y))){
                y.toFixed();
                return Math.random*(y-x)+x;
            }
        }else if(y<(Math.ceil(y))&& y>(Math.floor(y))){
            y.toFixed();
            return Math.random*(y-x)+x;
        }else{
            return Math.random*(y-x)+x;
        } 
    }else if(y<0){
        y*=-1;
        if(x<(Math.ceil(x))&& x>(Math.floor(x))){
            x.toFixed();
            if(y<(Math.ceil(y))&& y>(Math.floor(y))){
                y.toFixed();
                return Math.random*(y-x)+x;
            }
        }else if(y<(Math.ceil(y))&& y>(Math.floor(y))){
            y.toFixed();
            return Math.random*(y-x)+x;
        }else{
            return Math.random*(y-x)+x;
        }
  
    }else{
        if(x<(Math.ceil(x))&& x>(Math.floor(x))){
            x.toFixed();
            if(y<(Math.ceil(y))&& y>(Math.floor(y))){
                y.toFixed();
                return Math.random*(y-x)+x;
            }
        }else if(y<(Math.ceil(y))&& y>(Math.floor(y))){
            y.toFixed();
            return Math.random*(y-x)+x;
        }else{
            return Math.random*(y-x)+x;
        }
    }
}
console.log(random2(0,9));


/*function watt(min,max){
  return Math.random()*(max-min)+min;
}
console.log(watt);*/


/*function ran(min,max){
    if(min<0){
        var x=parseInt(Math.abs(min));
        if(max<0){
            var y=parseInt(Math.abs(max));
            return (Math.random())*(y-x)+x;
        }else{
            var y=parseInt(max);
            returnMath.random()*(y-x)+x;
        }
    }else if(max<0){
        var y=parseInt(Math.abs(max));
        var x=parseInt(min);
        return Math.random()*(y-x)+x;
    }else{
        var y=parseInt(max);
        var x=parseInt(min);
        return Math.random()*(y-x)+x;
    }
}
console.log(ran(-4.6,7));*/


function random3(x,y){
    var min=parseInt(Math.abs(x));
    var max=parseInt(Math.abs(y));
    return (parseInt(Math.random()*(max-min))+min);
}
console.log(random3(-3.9,9));