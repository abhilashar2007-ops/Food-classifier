
document.getElementById("search").addEventListener("keypress",e=>{
  if(e.key==="Enter"){
    const q=e.target.value.toLowerCase();
    const food=foodData.find(f=>f.name.toLowerCase()===q);
    const r=document.getElementById("result");
    if(!food){ r.innerHTML="Food not found"; return; }
    r.innerHTML=`<h3>${food.name} — ${food.category}</h3>
    Calories: ${food.calories}<br>
    Protein: ${food.protein} g<br>
    Carbs: ${food.carbs} g<br>
    Fat: ${food.fat} g<br>
    Sugar: ${food.sugar} g<br>
    <b>Advantages</b><ul>${food.advantages.map(a=>"<li>"+a+"</li>").join("")}</ul>
    <b>Disadvantages</b><ul>${food.disadvantages.map(d=>"<li>"+d+"</li>").join("")}</ul>`;
  }
});
