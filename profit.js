var cp=1000
var sp=5000
var loss
var profit
function profit(cp,sp)
{
	if(cp>sp)
	{
	loss=cp-sp;
	console.log("loss"+ loss)
	}
	else
	{
	profit=sp-cp
	console.log("profit"+ profit)
	}
}
profit(cp,sp);