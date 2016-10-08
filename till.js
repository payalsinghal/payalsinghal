var no1000=1;
var no500=1;
var no100=2;
var no50=2;
var no20=5;
var no10=6;
var no5=4;
var no2=5;
var no1=10;
var a
var n1000;
var n500;
var n100;
var n50;
var n20;
var n10;
var n5;
var n2;
var n1;
var r1000;
var r500;
var r100;
var r50;
var r20;
var r10;
var r5;
var r2;
var r1;
iamount= 2000;
var pprice=776;
var cmoney=800;
var rem,current

console.log("number of node in intilze till")
console.log("note 1000= "+no1000)
console.log("note 500= "+no500)
console.log("note 100= "+no100)
console.log("note 50= "+no50)
console.log("note 20= "+no20)
console.log("note 10= "+no10)
console.log("note 5= "+no5)
console.log("note 2= "+no2)
console.log("note 1= "+no1)
console.log("-------")
console.log("intilize till"+iamount)
current=iamount+pprice
console.log("current till" +current)
console.log("product price"+pprice)
console.log("customer money"+cmoney)
profit=current-iamount
console.log("profit till"+ profit)
note(iamount)


	function note(amount)
	{
		while(amount>=1000)
    	{
    		n1000=parseInt(amount/1000);
    		amount=amount%1000;
    		console.log("note 1000= "+n1000)
    	}
    	while(amount>=500)
    	{
    	n500=parseInt(amount/500);
	    amount=amount%500;
	    console.log("note 500= "+n500)
	    }
	    while(amount>=100)
	    {
	    n100=parseInt(amount/100);
	    amount=amount%100;
	    console.log("note 100= "+n100)
	    }
	    while(amount>=50)
	    {
	    n50=parseInt(amount/50);
	    amount=amount%50;
	    console.log("note 50= "+n50)
	    }
	    while(amount>=20)
	    {
	    n20=parseInt(amount/20);
	    amount=amount%20;
	    console.log("note 20=" +n20)
	    }
	   while(amount>=10)
	    {
	    n10=parseInt(amount/10);
	    amount=amount%10;
	    console.log("note 10= "+n10)
	    }
	    while(amount>=5)
	    {
	    n5=parseInt(amount/5);
	    amount=amount%5;
	    console.log("note 5= "+n5)
	    }
	    while(amount>=2)
	    {
	    n2=parseInt(amount/2);
	    amount=amount%2;
	    console.log("note 2= "+n2)
	    }
	    while(amount>=1)
	    {
	    n1=amount/1;
	    amount=parseInt(amount%1);
	    console.log("note 1= "+n1)
	    }
    
    }

function balance(pprice,cmoney)
{
if(pprice>cmoney)
{
	rem=pprice-cmoney;
	console.log("balance="+rem)
	note(rem)
checktill(rem)
console("after no. of notes")
rretune(rem)


}
else if(pprice<cmoney)
{
	rem=cmoney-pprice
	console.log("balance="+rem)
	note(rem)
	checktill(rem)
	rretune(rem)
}
else if(pprice=cmoney)
{
	rem=cmoney-pprice;
	console.log("balance="+rem)
	note(rem)
	checktill(rem)
}
else 
{
	console.log("error")
}
}
balance(pprice,cmoney)

function checktill()
{
	while(no1000>=n1000)
	{
		console.log("retune note of 1000")
		break;
	}
	while(no500>=n500)
	{
		console.log(" retune note of 500")
		break;
	}
	while(no100>=n100)
	{
		console.log("retune note of 100")
		break
	}
	while(no50>=n50)
	{
		console.log("not retune note of 50")
		break;
	}
	while(no20>=n20)
	{
		console.log("retune note of 20")
		break;
	}
	while(no10>=n10)
	{
		console.log("retune note of 10")
		break;
	}
	while(no5>=n5)
	{
		console.log("not retune note of 5")
		break;
	}
	while(no2>=n2)
	{
		console.log("retune note of 2")
		break;
	}
	while(no1>=n1)
	{
	console.log("  retune note of 1")
	break;
	}

}

function add(rem)
{
	if(rem >= 1000)
   {
       note1000 = parseInt(rem/1000);
       rem -= note1000 * 1000;
       r1000=no1000-note1000;
   }
   if(rem >= 500)
   {
       note500 = parseInt(rem/500);
       rem -= note500 * 500;
       r500=no500-note500
   
   }
   if(rem >= 100)
   {
       note100 = parseInt(rem/100);
       rem -= note100 * 100;
       r100=no100-note100;
   
   }
   if(rem >= 50)
   {
       note50 = parseInt(rem/50);
       rem -= note50 * 50;
       r50=no50-note50;
   
   }
   if(rem >= 20)
   {
       note20 = parseInt(rem/20);
       rem -= note20 * 20;
       r20=no20-note20;
   
   }
   if(rem >= 10)
   {
       note10 = parseInt(rem/10);
       rem -= note10 * 10;
       r10=no10-note10;
   
   }
   if(rem >= 5)
   {
       note5 = parseInt(rem/5);
       rem -= note5 * 5;
       r5=no5-note5;
   
   }
   if(rem >= 2)
   {
       note2 = parseInt(rem /2);
       rem -= note2 * 2;
       r2=no2-note2
   
   }
   if(rem >= 1)
   {
       note1 = rem;
       r1=no1-note1
   
   }

   console.log("Total number of after notes = ");
    console.log("1000 = "+r1000);
   console.log("500 = "+r500);
   console.log("100 = "+r100);
   console.log("50 = "+r50);
   console.log("20 = "+r20);
   console.log("10 = "+r10);
   console.log("5 = "+r5);
   console.log("2 = "+r2);
   console.log("1 = "+r1);

   return 0;
}


function rretune(rem)
{
	if(rem >= 1000)
   {
       note1000 = parseInt(rem/1000);
       rem -= note1000 * 1000;
       r1000=no1000-note1000;
   }
   if(rem >= 500)
   {
       note500 = parseInt(rem/500);
       rem -= note500 * 500;
       r500=no500-note500
   
   }
   if(rem >= 100)
   {
       note100 = parseInt(rem/100);
       rem -= note100 * 100;
       r100=no100-note100;
   
   }
   if(rem >= 50)
   {
       note50 = parseInt(rem/50);
       rem -= note50 * 50;
       r50=no50-note50;
   
   }
   if(rem >= 20)
   {
       note20 = parseInt(rem/20);
       rem -= note20 * 20;
       r20=no20-note20;
   
   }
   if(rem >= 10)
   {
       note10 = parseInt(rem/10);
       rem -= note10 * 10;
       r10=no10-note10;
   
   }
   if(rem >= 5)
   {
       note5 = parseInt(rem/5);
       rem -= note5 * 5;
       r5=no5-note5;
   
   }
   if(rem >= 2)
   {
       note2 = parseInt(rem /2);
       rem -= note2 * 2;
       r2=no2-note2
   
   }
   if(rem >= 1)
   {
       note1 = rem;
       r1=no1-note1
   
   }

   console.log("Total number of after notes = ");
    console.log("1000 = "+r1000);
   console.log("500 = "+r500);
   console.log("100 = "+r100);
   console.log("50 = "+r50);
   console.log("20 = "+r20);
   console.log("10 = "+r10);
   console.log("5 = "+r5);
   console.log("2 = "+r2);
   console.log("1 = "+r1);

   return 0;
}