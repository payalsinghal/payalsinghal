
    var note500, note100, note50, note20, note10, note5, note2, note1;
   var note500 = note100 = note50 = note20 = note10 = note5 = note2 = note1 = 0 ;
    var amount=575
 
 
    if(amount >= 500)
    {
        note500 = amount/500;
        amount -= note500 * 500;
    }
    if(amount >= 100)
    {
        note100 = amount/100;
        amount -= note100 * 100;
    }
    if(amount >= 50)
    {
        note50 = amount/50;
        amount -= note50 * 50;
    }
    if(amount >= 20)
    {
        note20 = amount/20;
        amount -= note20 * 20;
    }
    if(amount >= 10)
    {
        note10 = amount/10;
        amount -= note10 * 10;
    }
    if(amount >= 5)
    {
        note5 = amount/5;
        amount -= note5 * 5;
    }
    if(amount >= 2)
    {
        note2 = amount /2;
        amount -= note2 * 2;
    }
    if(amount >= 1)
    {
        note1 = amount;
    }
 
    console.log("Total number of notes = \n");
    console.log("500 ="+note500);
    console.log("100 ="+note100);
    console.log("50 = "+note50);
    console.log("20 = "+note20);
    console.log("10 = "+note10);
    console.log("5 = "+note5);
    console.log("2 = "+note2);
    console.log("1 = "+note1);
 
