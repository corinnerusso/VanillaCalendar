 //Today declaration
 let today = new Date().toISOString().substr(0, 10);
 document.querySelector("#startDate").value = today;
 document.querySelector("#endDate").value = today;
 

 //Show or hide calendar modal
function showHide() {
   var x = document.getElementById('calendar');
   if (x.style.display === 'none') {
       x.style.display = 'block';
   } else {
       x.style.display = 'none';
   }
}


//Change dates if num of days is changed by user
function setDate(){
    let currDate = new Date(document.getElementById("startDate").value);
    let delay= (document.getElementById("numdays").value);
    let newdelay=parseInt((delay)/(24*3600*1000));

    let myNewDate = new Date(currDate);

    let finalDate=myNewDate.setDate(myNewDate.getDate() + newdelay);

    let dateObject = new Date(finalDate);
    let convertDate=dateObject.toISOString().substr(0,10);
    document.getElementById("endDate").value=convertDate;
}


/***QUICK ACCESS ***/

//today
function isToday(){
    let currDate = new Date();

    let convertDate=currDate.toISOString().substr(0,10);
    document.getElementById("endDate").value=convertDate;
    document.getElementById("startDate").value=convertDate;
}

//the day before
function theDayBefore(){
    let currDate = new Date();
    let finalDate=currDate.setDate(currDate.getDate() - 1);

    let dateObject = new Date(finalDate);
    let convertDate=dateObject.toISOString().substr(0,10);
    document.getElementById("endDate").value=convertDate;
    document.getElementById("startDate").value=convertDate;
    document.getElementById("numdays").value="1";
}

// 7 last days
function sevenLastDays(){
    let currDate = new Date();
    let myNewDate= new Date(currDate);
    let finalDate=currDate.setDate(currDate.getDate() - 6);

    let dateObject = new Date(finalDate);
    let dateObject2 = new Date (myNewDate);

    let convertDate=dateObject.toISOString().substr(0,10);
    let convertDate2=dateObject2.toISOString().substr(0,10);
 
    document.getElementById("startDate").value=convertDate;
    document.getElementById("endDate").value=convertDate2;

    document.getElementById("numdays").value="7";
    }

// this week
function currWeek(){
    let currDate = new Date(document.getElementById("endDate").value);
    // let myNewDate= new Date(currDate);   
    day = currDate.getDay(); 
    first_day = new Date(currDate.getTime() - 60*60*24* (day-1)*1000); 
    last_day = new Date(first_day.getTime() + 60 * 60 *24 * 6 * 1000); 

    let dateObject = new Date(first_day);
    let convertDate=dateObject.toISOString().substr(0,10);
    document.getElementById("startDate").value=convertDate;

    let dateObject2 = new Date(last_day);
    let convertDate2=dateObject2.toISOString().substr(0,10);
    document.getElementById("endDate").value=convertDate2;

    document.getElementById("numdays").value="7";
    }

    // 30 last days
function thirtyLastDays(){
    let currDate = new Date();
    let myNewDate= new Date(currDate);   
    let finalDate=currDate.setDate(currDate.getDate() - 29);

    let dateObject = new Date(finalDate);
    let dateObject2 = new Date (myNewDate);

    let convertDate=dateObject.toISOString().substr(0,10);
    let convertDate2=dateObject2.toISOString().substr(0,10);

    document.getElementById("startDate").value=convertDate;
    document.getElementById("endDate").value=convertDate2;

    document.getElementById("numdays").value="30";
    }


    // this month
function currMonth(){
    let currDate = new Date(document.getElementById("endDate").value);
   
    first_day_of_month = new Date(currDate.getFullYear(),currDate.getMonth(),+1); 
    last_day_of_month = new Date(currDate.getFullYear(),currDate.getMonth() + 1,0); 

    let firstDay=first_day_of_month.setDate(first_day_of_month.getDate() + 1);
    let LastDay=last_day_of_month.setDate(last_day_of_month.getDate() + 1);

    let dateObject = new Date(firstDay);
    let convertDate=dateObject.toISOString().substr(0,10);
    document.getElementById("startDate").value=convertDate;

    let dateObject2 = new Date(LastDay);
    let convertDate2=dateObject2.toISOString().substr(0,10);
    document.getElementById("endDate").value=convertDate2;
    document.getElementById("numdays").value="30";
    }

// this year
function currYear(){
    let currDate = new Date(document.getElementById("endDate").value);
           
    first_day_of_year = new Date(currDate.getFullYear(), 0); 
    let firstDay=first_day_of_year.setDate(first_day_of_year.getDate()+1);
    last_day_of_year = new Date(currDate.getFullYear(), 12)  
        
    let dateObject = new Date(firstDay);
    let convertDate=dateObject.toISOString().substr(0,10);
    document.getElementById("startDate").value=convertDate;
    
    let dateObject2 = new Date(last_day_of_year);
    let convertDate2=dateObject2.toISOString().substr(0,10);
    document.getElementById("endDate").value=convertDate2;
    document.getElementById("numdays").value="365";
    }


    //Calculate num of days between 2 dates
function getDays(){
    let first_date = new Date(document.getElementById("startDate").value);
    let last_day = new Date(document.getElementById("endDate").value);
 return parseInt((last_day-first_date)/(24*3600*1000));
 }
 
 function cal(){
     
    if(document.getElementById("endDate")){
        document.getElementById("numdays").value=getDays();
    }
 }
 
 //Delivery sentence
 let initDate=new Date(document.getElementById("startDate").value);
 let fromDate = initDate.toLocaleDateString();
 document.getElementById("target").textContent=fromDate;
 
 let endingDate= new Date(document.getElementById("endDate").value);
 let untilDate = endingDate.toLocaleDateString();
 document.getElementById("target2").textContent= untilDate;
 
 document.getElementById("target3").textContent=document.getElementById("numdays").value;
 
 
 
//test
function refresh() {
    document.getElementById("target3").textContent=document.getElementById("numdays").value;
    
    let initDate=new Date(document.getElementById("startDate").value);
    let fromDate = initDate.toLocaleDateString();
    document.getElementById("target").textContent=fromDate;
 
    let endingDate= new Date(document.getElementById("endDate").value);
    let untilDate = endingDate.toLocaleDateString();
    document.getElementById("target2").textContent= untilDate;
  }
