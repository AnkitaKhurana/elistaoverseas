

var item = function (name , url ) {

    this.name = name;
    this.url = url;
}


//////////////////////HEELS/////////////////////////////////////////////
var heels = [] ;
var eh1 = new item('EH1','Catalog/High_Heels/1.jpg');
var eh2 = new item('EH2','Catalog/High_Heels/2.jpg');
var eh3 = new item('EH3','Catalog/High_Heels/3.jpg');
var eh4 = new item('EH4','Catalog/High_Heels/4.jpg');
var eh5 = new item('EH5','Catalog/High_Heels/5.jpg');
var eh6 = new item('EH6','Catalog/High_Heels/6.jpg');
var eh7 = new item('EH7','Catalog/High_Heels/7.jpg');
var eh8 = new item('EH8','Catalog/High_Heels/8.jpg');
var eh9 = new item('EH9','Catalog/High_Heels/9.jpg');
var eh10 = new item('EH10','Catalog/High_Heels/eh10.jpg');
var eh11 = new item('EH11','Catalog/High_Heels/eh11.jpg');
var eh12 = new item('EH12','Catalog/High_Heels/eh12.jpg');
var eh13 = new item('EH13','Catalog/High_Heels/eh13.jpg');
var eh14 = new item('EH14','Catalog/High_Heels/eh14.jpg');

heels.push(eh1);
heels.push(eh2);
heels.push(eh3);
heels.push(eh4);
heels.push(eh5);
heels.push(eh6);
heels.push(eh7);
heels.push(eh8);
heels.push(eh9);
heels.push(eh10);
heels.push(eh11);
heels.push(eh12);
heels.push(eh13);
heels.push(eh14);







/////////////////////BELLI//////////////////////////////////

var eb1 = new item('EB1','Catalog/Belli/1.jpg');
var eb2 = new item('EB2','Catalog/Belli/2.jpg');
var eb3 = new item('EB3','Catalog/Belli/3.jpg');
var eb4 = new item('EB4','Catalog/Belli/4.jpg');
var eb5 = new item('EB5','Catalog/Belli/5.jpg');
var eb6 = new item('EB6','Catalog/Belli/6.jpg');
var eb7 = new item('EB7','Catalog/Belli/7.jpg');
var eb8 = new item('EB8','Catalog/Belli/8.jpg');
var eb9 = new item('EB9','Catalog/Belli/9.jpg');
var eb10 = new item('EB10','Catalog/Belli/10.jpg');
var eb11 = new item('EB11','Catalog/Belli/eb11.jpg');
var eb12 = new item('EB12','Catalog/Belli/eb12.jpg');
var eb13 = new item('EB13','Catalog/Belli/eb13.jpg');
var eb14 = new item('EB14','Catalog/Belli/eb14.jpg');
var eb15 = new item('EB15','Catalog/Belli/eb15.jpg');
var eb16 = new item('EB16','Catalog/Belli/eb16.jpg');
var eb17 = new item('EB17','Catalog/Belli/eb17.jpg');
var eb18 = new item('EB18','Catalog/Belli/eb18.jpg');


var bellis = [] ;

bellis.push(eb1);
bellis.push(eb2);
bellis.push(eb3);
bellis.push(eb4);
bellis.push(eb5);
bellis.push(eb6);
bellis.push(eb7);
bellis.push(eb8);
bellis.push(eb9);
bellis.push(eb10);
bellis.push(eb11);
bellis.push(eb12);
bellis.push(eb13);
bellis.push(eb14);
bellis.push(eb15);
bellis.push(eb16);
bellis.push(eb17);
bellis.push(eb18);



//////////////////////BOOTS///////////////////

var boots = [];

var bt1 = new item('EBT1','Catalog/Boots/1.jpg');
var bt2 = new item('EBT2','Catalog/Boots/2.jpg');
var bt3 = new item('EBT3','Catalog/Boots/eb3.jpg');
var bt4 = new item('EBT4','Catalog/Boots/eb4.jpg');
var bt5 = new item('EBT5','Catalog/Boots/eb5.jpg');
var bt6 = new item('EBT6','Catalog/Boots/eb6.jpg');
var bt7 = new item('EBT7','Catalog/Boots/eb7.jpg');


boots.push(bt1);
boots.push(bt2);
boots.push(bt3);
boots.push(bt4);
boots.push(bt5);
boots.push(bt6);
boots.push(bt7);



//////////////////LACE UPS////////////

var laceUps=[];

var el1 = new item('EL1','Catalog/Lace_Ups/1.jpg');
var el2 = new item('EL2','Catalog/Lace_Ups/2.jpg');
var el3 = new item('EL3','Catalog/Lace_Ups/3.jpg');
var el4 = new item('EL4','Catalog/Lace_Ups/4.jpg');
var el5 = new item('EL5','Catalog/Lace_Ups/elp5.jpg');
var el6 = new item('EL6','Catalog/Lace_Ups/elp6.jpg');

laceUps.push(el1);
laceUps.push(el2);
laceUps.push(el3);
laceUps.push(el4);
laceUps.push(el5);
laceUps.push(el6);




//////////Slip Ons ////////


var slip_ons = [] ;

var eso1 = new item('ESO1','Catalog/Slip_On/1.jpg');
var eso2 = new item('ESO2','Catalog/Slip_On/2.jpg');
var eso3 = new item('ESO3','Catalog/Slip_On/3.jpg');
var eso4 = new item('ESO4','Catalog/Slip_On/4.jpg');
var eso5 = new item('ESO5','Catalog/Slip_On/5.jpg');


slip_ons.push(eso1);
slip_ons.push(eso2);
slip_ons.push(eso3);
slip_ons.push(eso4);
slip_ons.push(eso5);


////////SPORTY /////////////

var sporty = [] ;

var esp1 = new item('ESP1','Catalog/sporty/1.jpg');


sporty.push(esp1);

///////////SANDALS ///////////

var sandals = [] ;

for(var i = 1 ; i <=28;i++)
sandals[i-1] = new item('ES'+i,'Catalog/Sandal/'+i+'.jpg');

for(var i = 30 ; i <=35;i++)
    sandals[i-1] = new item('ES'+i,'Catalog/Sandal/'+i+'.jpg');

for(var i = 50 ; i <=66;i++)
    sandals[i-1] = new item('ES'+i,'Catalog/Sandal/'+i+'.jpg');


for(var i = 81 ; i <=83;i++)
    sandals[i-1] = new item('ES'+i,'Catalog/Sandal/'+i+'.jpg');

for(var i = 84 ; i <=100;i++)
    sandals[i-1] = new item('ES'+i,'Catalog/Sandal/es'+i+'.jpg');





////////////Slippers ///////////







$(document).ready(function()

{
    var a = $('#heel');

    for(i in heels) {

        str =   "<div   class='col-md-3' > <img style='height:218px;max-width:300px' class = 'popimg' src='"+heels[i].url+"'>"+"<p style='padding: 2px;color: rgb(0, 0, 0);background-color:beige;font-size: 24px;'>"+heels[i].name+"</p></div>";


        console.log(str);

        a.append(str);


    }


    var b = $('#boot');

    for(i in boots) {

        str =   "<div   class='col-md-3'  > <img style='height:218px;max-width:300px;'   class = 'popimg' src='"+boots[i].url+"'>"+"<p style='padding: 2px;color: rgb(0, 0, 0);background-color:beige;font-size: 24px;'>"+boots[i].name+"</p></div>";


        console.log(str);

        b.append(str);


    }
    var c = $('#belli');

    for(i in bellis) {

        str =   "<div   class='col-md-3'  > <img style='height:218px;max-width:300px;'   class = 'popimg' src='"+bellis[i].url+"'>"+"<p style='padding: 2px;color: rgb(0, 0, 0);background-color:beige;font-size: 24px;'>"+bellis[i].name+"</p></div>";


        console.log(str);

        c.append(str);


    }


    var d = $('#laceUp');

    for(i in laceUps) {

        str =   "<div class='col-md-3 ' > <img style='height:218px;max-width:300px;'   class = 'popimg' src='"+laceUps[i].url+"'>"+"<p style='padding: 2px;color: rgb(0, 0, 0);background-color:beige;font-size: 24px;'>"+laceUps[i].name+"</p></div>";


        console.log(str);

        d.append(str);


    }
    var e = $('#sandal');

    for(i in sandals) {

        str =   "<div   class='col-md-3'  > <img style='height:218px;max-width:300px;'   class = 'popimg' src='"+sandals[i].url+"'>"+"<p style='padding: 2px;color: rgb(0, 0, 0);background-color:beige;font-size: 24px;'>"+sandals[i].name+"</p></div>";


        console.log(str);

        e.append(str);


    }

    var f = $('#sporty');
    f.append('<hr/>');
    for(i in sporty) {

        str =   "<div style='height:218px;max-width:300px;float:left'class='col-md-3 '  > <img style='height:218px;max-width:300px;'   class = 'popimg' src='"+sporty[i].url+"'>"+"<p style='padding: 2px;color: rgb(0, 0, 0);background-color:beige;font-size: 24px;'>"+sporty[i].name+"</p></div>";


        console.log(str);

        f.append(str);


    }


    var g = $('#slipOn');
    g.append('<hr/>');
    for(i in slip_ons) {

        str =   "<div   class='col-md-3'  > <img style='height:218px;max-width:300px;'   class = 'popimg' src='"+slip_ons[i].url+"'>"+"<p style='padding: 2px;color: rgb(0, 0, 0);background-color:beige;font-size: 24px;'>"+slip_ons[i].name+"</p></div>";


        console.log(str);

        g.append(str);


    }

    var h = $('#');





});