
const list=document.getElementById("foods");
Object.values(foodData).forEach(f=>{
 const o=document.createElement("option");
 o.value=f.name;
 list.appendChild(o);
});

function searchFood(){
 const key=document.getElementById("search").value.toLowerCase();
 const r=document.getElementById("result");
 if(!foodData[key]){
  r.innerHTML="<p>Food not found</p>";
  return;
 }
 const f=foodData[key];
 r.innerHTML=`
 <h2>${f.name}</h2>
 <p><b>Category:</b> ${f.category}</p>
 <p><b>Label:</b> ${f.label}</p>
 <p><b>Calories:</b> ${f.calories} kcal</p>
 <p><b>Protein:</b> ${f.protein} g</p>
 <p><b>Carbs:</b> ${f.carbs} g</p>
 <p><b>Fat:</b> ${f.fat} g</p>
 <p><b>Fiber:</b> ${f.fiber} g</p>
 <p><b>Sugar:</b> ${f.sugar} g</p>
 ${f.sugarAlert?"<p style='color:#ff6b6b'><b>SUGAR ALERT</b></p>":""}
 <p><b>Best time:</b> ${f.bestTime}</p>
 <p><b>Quantity:</b> ${f.quantity}</p>
 <p><b>Advantages:</b> ${f.advantages.join(", ")}</p>
 <p><b>Disadvantages:</b> ${f.disadvantages.join(", ")}</p>
 `;
}
