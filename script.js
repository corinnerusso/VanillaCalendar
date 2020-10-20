

function showHide() {
   var x = document.getElementById('calendar');
   if (x.style.display === 'none') {
       x.style.display = 'block';
   } else {
       x.style.display = 'none';
   }
}

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




   $(document).ready(function() {
       $('input[id="startDate"]').change(function() {
               /* on change get value then print to page */
               var outputDate = (this.value);
               $("#target").text(outputDate);
       });
       $('input[id="endDate"]').change(function() {
               /* on change get value then print to page */
               var outputDate = (this.value);
               $("#target2").text(outputDate);
       });
});
