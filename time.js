//Write a program that determines the time of the day based on the curent time and greet the user accordingly
//12am-6am - Good morning
//6am-12pm - Good afternoon
//12pm-6pm - Good evening
//Tip: Use the Date object to get the current time


const time = new Date() .getHours(5);
if (time >= 12 && time <= 16) {
   console.log("Good afternoon");
}
else if(time >= 16 && time <= 23){
   console.log("Good evening");
}
else{
   console.log("Good morning")
}