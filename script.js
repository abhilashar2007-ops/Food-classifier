
const list=document.getElementById("foods");
Object.values(foodData).forEach(f=>{
 const o=document.createElement("option");
 o.value=f.name;
 list.appendChild(o);
});

document.getElementById("searchBox").addEventListener("keypress",e=>{
 if(e.key==="Enter") searchFood();
});

function searchFood(){
 const key=document.getElementById("searchBox").value.toLowerCase();
 const r=document.getElementById("result");
 const f=foodData[key];
 if(!f){r.innerHTML="<div class='result-card'>Food not found</div>";return;}
 r.innerHTML=`
 <div class="result-card">
  <h2>${f.name}</h2>
  <span class="badge ${f.label}">${f.label}</span>
  <p><b>Category:</b> ${f.category}</p>

  <div class="grid">
    <div class="box"><b>Calories</b><br>${f.calories} kcal</div>
    <div class="box"><b>Protein</b><br>${f.protein} g</div>
    <div class="box"><b>Carbs</b><br>${f.carbs} g</div>
    <div class="box"><b>Fat</b><br>${f.fat} g</div>
    <div class="box"><b>Fiber</b><br>${f.fiber} g</div>
    <div class="box"><b>Sugar</b><br>${f.sugar} g</div>
    <div class="box"><b>Cholesterol</b><br>${f.cholesterol} mg</div>
    <div class="box"><b>Sodium</b><br>${f.sodium} mg</div>
  </div>

  ${f.sugarAlert ? "<div class='alert'>⚠ SUGAR ALERT</div>" : ""}

  <p><b>Best time:</b> ${f.bestTime}</p>
  <p><b>Quantity:</b> ${f.quantity}</p>
  <p><b>Advantages:</b> ${f.advantages.join(", ")}</p>
  <p><b>Disadvantages:</b> ${f.disadvantages.join(", ")}</p>
 </div>`;
}
