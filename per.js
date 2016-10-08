var phy=50
var chem=50
var bio=50
var math=50
var com=50
var per
var obtain_no
function grade(per)
{
 	if(per>90)
 	{
 	console.log("grade A")
 	}
 	else if(per>80)
 	{
 		console.log("grade B")
 	}
 	else if(per>70)
 	{
 		console.log("grade C")
 	}
 	else if(per>60)
 	{
 		console.log("grade D")
 	}
 	else if(per>40)
 	{
 		console.log("grade E")
 	}
 	else
 	{
 		console.log("grade F")
 	}
 }

obtain_no=phy+chem+bio+math+com;
console.log("obtain_no=" +obtain_no)
per=(obtain_no/500)*100;
console.log("percentage=" +per+"%")
grade(per);