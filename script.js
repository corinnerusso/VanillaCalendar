 //Today declaration
 let today = new Date().toISOString().substr(0, 10);
 document.getElementById("startDate").value = today;
 document.getElementById("endDate").value = today;
 
 //Initialize variables
 let first_date=new Date(document.getElementById("startDate").value);
 let last_date= new Date(document.getElementById("endDate").value);

 //Show or hide calendar modal
function showHide() {
   let popup = document.getElementById('calendar_container');
    if (window.getComputedStyle(popup).display === "none") {
        popup.style.display = "block";
    } else {
        popup.style.display="none";
    }
}

 
 //Initiate delivery sentence with today dates
 let initDate=new Date(today).toLocaleDateString();
 document.getElementById("target1").textContent=initDate;
 
 
 let endingDate= new Date(today).toLocaleDateString();
 document.getElementById("target2").textContent= endingDate;
 
//  document.getElementById("target3").textContent=document.getElementById("numdays").value;
 
//set target1
 let startInput=document.getElementById("startDate");
 let target1 = document.getElementById("target1");
 startInput.addEventListener('change', updateValue);
 function updateValue(e) {
   let setInitDate=  new Date(e.target.value);
   let finalInitDate=setInitDate.toLocaleDateString();
   target1.textContent=finalInitDate;
 }

//set target2
 let endInput=document.getElementById("endDate");
 let target2 = document.getElementById("target2");
 endInput.addEventListener('change', updateValue2);
 function updateValue2(e) {
   let setEndingInput=  new Date(e.target.value);
   let finalEndingDate=setEndingInput.toLocaleDateString();
   target2.textContent=finalEndingDate;
 }

 //set target3

 let newNumdays=document.getElementById("numdays");
 let target3 = document.getElementById("target3");
 newNumdays.addEventListener('change', updateValue3);
 function updateValue3(e) {
   target3.textContent=e.target.value;
 }

 
 
//refresh sentence while changes occure
function refresh() {
    document.getElementById("target3").textContent=document.getElementById("numdays").value;
    
    // let initDate=new Date(document.getElementById("startDate").value);
    let fromDate = first_date.toLocaleDateString();
    document.getElementById("target1").textContent=fromDate;
 
    // let endingDate= new Date(document.getElementById("endDate").value);
    let untilDate = last_date.toLocaleDateString();
    document.getElementById("target2").textContent= untilDate;
  }



//Change dates if num of days is changed by user
function setDate(){
    // let currDate = new Date(document.getElementById("startDate").value);
    let delay= (document.getElementById("numdays").value);
    console.log(delay);
    let newdelay=parseInt((delay)/(24*3600*1000));

    let myNewDate = new Date(first_date);

    let finalDate=myNewDate.setDate(myNewDate.getDate() + newdelay);

    let dateObject = new Date(finalDate);
    let convertDate=dateObject.toISOString().substr(0,10);
    document.getElementById("endDate").value=convertDate;
}


    //Calculate num of days between 2 dates
    function getDays(){
        // let first_date = new Date(document.getElementById("startDate").value);
        let last_day = new Date(document.getElementById("endDate").value);
     return parseInt((last_day-first_date)/(24*3600*1000));
     }
     
     function cal(){
         
        if(document.getElementById("endDate")){
            document.getElementById("numdays").value=getDays();
        }
     }
    
    

/***QUICK ACCESS ***/

    $(".quick_access_link").click(function(){
        let currDate = new Date();
        let id = $(this).attr('id');
        
        
        //today
        if(id === "today"){
            let convertDate=currDate.toISOString().substr(0,10);
            document.getElementById("endDate").value=convertDate;
            document.getElementById("startDate").value=convertDate;
        } 
        
        //yesterday 
            else if(id === "yesterday") {
                let finalDate=currDate.setDate(currDate.getDate() - 1);
                let dateObject = new Date(finalDate);
                let convertDate=dateObject.toISOString().substr(0,10);

                document.getElementById("endDate").value=convertDate;
                document.getElementById("startDate").value=convertDate;
                document.getElementById("numdays").value="1";
            }
        //last 7 days
              else if(id === "last7days") {

                let myNewDate= new Date(currDate);
                let finalDate=currDate.setDate(currDate.getDate() - 6);
            
                let dateObject = new Date(finalDate);
                let dateObject2 = new Date(myNewDate);
            
                let convertDate=dateObject.toISOString().substr(0,10);
                let convertDate2=dateObject2.toISOString().substr(0,10);
             
                document.getElementById("startDate").value=convertDate;
                document.getElementById("endDate").value=convertDate2;
            
                document.getElementById("numdays").value="7";
            }
        //this week 
              else if(id === "thisweek") {

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
        //last 30 days 
              else if(id === "last30days") {
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
        //this month 
              else if(id === "thismonth") {
   
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
        //this year 
              else {
                // let currDate = new Date(document.getElementById("endDate").value);
           
                first_day_of_year = new Date(last_date.getFullYear(), 0); 
                let firstDay=first_day_of_year.setDate(first_day_of_year.getDate()+1);
                last_day_of_year = new Date(last_date.getFullYear(), 12)  
                    
                let dateObject = new Date(firstDay);
                let convertDate=dateObject.toISOString().substr(0,10);
                document.getElementById("startDate").value=convertDate;
                
                let dateObject2 = new Date(last_day_of_year);
                let convertDate2=dateObject2.toISOString().substr(0,10);
                document.getElementById("endDate").value=convertDate2;
                document.getElementById("numdays").value="365";
              }    
      });

