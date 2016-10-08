// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill


var unit=225
var bill,rbill,rbill1;
function bill()
{
	
	if(unit<=50)
	{
	bill=unit*0.50
	gtotal=bill+0.20
	consol.log(bill+gtotal)
	}
	else if(unit<=150)
	{
	rbill=50*0.50
	remunit=unit-50
	bill=rbill+(remunit*0.75)
	console.log("bill="+(bill+0.20))
	}
	else if(unit<=250)
	{
	rbill=50*0.50
	rbill1=100*0.75
	remunit=unit-150
	bill=rbill+rbill1+(remunit*1.20)
	console.log("bill="+(bill+0.20))
	}
	else if(unit>250)
	{
	bill=unit*1.50
	console.log("bill="+(bill+0.20))
	}
	
}
bill();

