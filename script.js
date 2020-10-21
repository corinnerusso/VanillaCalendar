 //Delivery sentence
document.getElementById("target").textContent=document.getElementById("startDate").value;
document.getElementById("target2").textContent=document.getElementById("endDate").value;
document.getElementById("target3").textContent=document.getElementById("numdays").value;

 
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


//Calculate num of days between 2 dates
function getDays(){
   let begin = new Date(document.getElementById("startDate").value);
   let finish = new Date(document.getElementById("endDate").value);

return parseInt((finish-begin)/(24*3600*1000));
}

function cal(){
   if(document.getElementById("endDate")){
       document.getElementById("numdays").value=getDays();
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
//the day before
function theDayBefore(){
    let currDate = new Date(document.getElementById("startDate").value);
    let myNewDate= new Date(currDate);
    let finalDate=myNewDate.setDate(myNewDate.getDate() - 1);

    let dateObject = new Date(finalDate);
    let convertDate=dateObject.toISOString().substr(0,10);
    document.getElementById("endDate").value=convertDate;
    document.getElementById("startDate").value=convertDate;
}

// 7 last days
function sevenLastDays(){
    let currDate = new Date(document.getElementById("startDate").value);
    let myNewDate= new Date(currDate);
    let finalDate=myNewDate.setDate(myNewDate.getDate() - 6);

    let dateObject = new Date(finalDate);
    let convertDate=dateObject.toISOString().substr(0,10);
    document.getElementById("endDate").value=convertDate;
    }

// this week
function thisWeek(){
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
    }

    // 30 last days
function thirtyLastDays(){
    let currDate = new Date(document.getElementById("endDate").value);
    let myNewDate= new Date(currDate);   
    let finalDate=myNewDate.setDate(myNewDate.getDate() - 29);

    let dateObject = new Date(finalDate);
    let convertDate=dateObject.toISOString().substr(0,10);
    document.getElementById("startDate").value=convertDate;
    }


    // this month
function thisMonth(){
    let currDate = new Date(document.getElementById("endDate").value);
   
    first_day_of_month = new Date(currDate.getFullYear(),currDate.getMonth(),+1); 
    last_day_of_month = new Date(currDate.getFullYear(),currDate.getMonth() + 1,0); 

    let firstDay=first_day_of_month.setDate(first_day_of_month.getDate() + 1);
    let LastDay=last_day_of_month.setDate(last_day_of_month.getDate() + 1);

    let dateObject = new Date(firstDay);
    let convertDate=dateObject.toISOString().substr(0,10);
    document.getElementById("startDate").value=convertDate;
    console.log(convertDate);

    let dateObject2 = new Date(LastDay);
    let convertDate2=dateObject2.toISOString().substr(0,10);
    document.getElementById("endDate").value=convertDate2;
    }

    // this year
    function currYear(){
        let currDate = new Date(document.getElementById("endDate").value);
       
        first_day_of_year = new Date(currDate.getFullYear(),+1); 
        last_day_of_year = new Date(currDate.getFullYear()+ 1,0); 
    
        let firstDay=first_day_of_year.setDate(first_day_of_year.getDate());
        let lastDay=last_day_of_year.setDate(last_day_of_year.getDate() + 1);
    
        let dateObject = new Date(firstDay);
        let convertDate=dateObject.toISOString().substr(0,10);
        document.getElementById("startDate").value=convertDate;
    
        let dateObject2 = new Date(lastDay);
        let convertDate2=dateObject2.toISOString().substr(0,10);
        document.getElementById("endDate").value=convertDate2;
        }

        function currYear2(){
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

            }

    