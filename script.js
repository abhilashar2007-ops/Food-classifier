
const list=document.getElementById("foods");
foodData.forEach(f=>{
 const o=document.createElement("option");
 o.value=f.name;
 list.appendChild(o);
});

document.getElementById("searchBox").addEventListener("keypress",e=>{
 if(e.key==="Enter") searchFood();
});

function searchFood(){
 const name=document.getElementById("searchBox").value.toLowerCase();
 const r=document.getElementById("result");
 const food=foodData.find(f=>f.name.toLowerCase()===name);
 if(!food){
  r.innerHTML="<div class='result-card'>Food not found</div>";
  return;
 }
 r.innerHTML=`
 <div class="result-card">
   <div class="header">
     <h2>${food.name}</h2>
     <span class="badge ${food.type.replace(" ","-")}">${food.type}</span>
   </div>

   <div class="grid">
     <div class="box"><b>Calories</b><br>${food.calories}</div>
     <div class="box"><b>Best Time</b><br>${food.bestTime}</div>
   </div>

   <div class="box" style="margin-top:15px">
     <b>Advantages</b>
     <ul>${food.advantages.map(a=>`<li>${a}</li>`).join("")}</ul>
   </div>

   <div class="box" style="margin-top:15px">
     <b>Disadvantages</b>
     <ul>${food.disadvantages.map(d=>`<li>${d}</li>`).join("")}</ul>
   </div>

   ${food.sugarAlert ? "<div class='alert'>⚠ SUGAR ALERT: High sugar content</div>" : ""}
 </div>
 `;
}
