 
    var note1000, note500, note100, note50, note20, note10, note5, note2, note1;
    var note1000=note500=note100=note50=note20=note10=note5=note2=note1=0;

    var amount=2078


    while(amount>=1000)
    {
    note1000=parseInt(amount/1000);
    console.log(note1000)
    amount=amount%1000;
    console.log(amount)
    console.log("note 1000= "+note1000)
    }
    while(amount>=500)
    {
    note500=parseInt(amount/500);
    amount=amount%500;
    console.log("note 500= "+note500)
    }
    while(amount>=100)
    {
    note100=parseInt(amount/100);
    amount=amount%100;
    console.log("note 100= "+note100)
    }
    while(amount>=50)
    {
    note50=parseInt(amount/50);
    amount=amount%50;
    console.log("note 50= "+note50)
    }
   while(amount>=10)
    {
    note10=parseInt(amount/10);
    amount=amount%10;
    console.log("note 10= "+note10)
    }
    while(amount>=5)
    {
    note5=parseInt(amount/5);
    amount=amount%5;
    console.log("note 5= "+note5)
    }
    while(amount>=1)
    {
    note1=amount/1;
    amount=parseInt(amount%1);
    console.log("note 1= "+note1)
    }
    