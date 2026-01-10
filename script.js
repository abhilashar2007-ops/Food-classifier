
const search = document.getElementById("search");
const suggestions = document.getElementById("suggestions");
const result = document.getElementById("result");

const names = Object.keys(foodData);

search.addEventListener("input", ()=>{
  suggestions.innerHTML="";
  const v = search.value.toLowerCase();
  if(!v) return;
  names.filter(n=>n.toLowerCase().includes(v)).slice(0,20).forEach(n=>{
    const d=document.createElement("div");
    d.textContent=n;
    d.onclick=()=>{search.value=n;show(n);suggestions.innerHTML="";};
    suggestions.appendChild(d);
  });
});

search.addEventListener("keydown", e=>{
  if(e.key==="Enter"){ show(search.value); suggestions.innerHTML="";}
});

function show(name){
  const f=foodData[name];
  if(!f){alert("Food not found");return;}
  result.classList.remove("hidden");
  result.innerHTML=`
  <h2>${name} <span class="${f.type}">${f.type}</span></h2>
  <div class="card">Calories: ${f.calories}</div>
  <div class="card">Protein: ${f.protein} g</div>
  <div class="card">Carbs: ${f.carbs} g</div>
  <div class="card">Fat: ${f.fat} g</div>
  <div class="card">Fiber: ${f.fiber} g</div>
  <div class="card">Sugar: ${f.sugar} g</div>
  <h3>Advantages</h3><ul>${f.advantages.map(a=>`<li>${a}</li>`).join("")}</ul>
  <h3>Disadvantages</h3><ul>${f.disadvantages.map(d=>`<li>${d}</li>`).join("")}</ul>
  <p><b>Best time:</b> ${f.bestTime}</p>
  `;
}
