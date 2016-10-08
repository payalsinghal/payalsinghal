var bsalary = 10000
function gsalary(bsalary)
{
if (bsalary>=10000)
	{
	hra=(20/100)*bsalary
	da=(80/100)*bsalary
	gsalary=hra+da+bsalary
	console.log("glossy salary="+gsalary)
	}	
else if (bsalary>=20000)
	{
	hra=(25/100)*bsalary
	da=(90/100)*bsalary
	gsalary=hra+da+bsalary
	console.log("glossy salary="+gsalary)
	}	
else if (bsalary>=30000)
	{
	hra=(30/100)*bsalary
	da=(95/100)*bsalary
	gsalary=hra+da+bsalary
	console.log("glossy salary="+gsalary)
	}	
else
{
	console.log("not mention")
}
}
gsalary(bsalary)









