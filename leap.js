var x=2001
function leap(x)
{
if(x%4==0||x%400==0||x%100==0)
{
	console.log("Is a leap year")
}
else
{
console.log("Is not a leap year")
}
}
leap(x);