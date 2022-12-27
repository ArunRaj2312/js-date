let date=new Date();
console.log(date);

let a=parseInt(prompt("enter the time"));
console.log("Current Time Is "+a);
let time=date.setTime(a);
if(time<12){
    console.log("morning");
}
else if(time>=12 && time<=16){
    console.log("afternoon");
}
else if(time>16 && time<=19){
    console.log("Evening")
}
else{
    console.log("night");
}