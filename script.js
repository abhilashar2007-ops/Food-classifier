const list=document.getElementById("foodList");
const input=document.getElementById("searchInput");
const result=document.getElementById("result");

foodData.forEach(f=>{
 const o=document.createElement("option");
 o.value=f.name;
 list.appendChild(o);
});

input.addEventListener("keydown",e=>{
 if(e.key==="Enter"){
  const food=foodData.find(x=>x.name.toLowerCase()===input.value.toLowerCase());
  if(food) show(food);
 }
});

function show(f){
 result.classList.remove("hidden");
 result.innerHTML=`
 <h2>${f.name} <span class="badge ${f.category}">${f.category}</span></h2>

 <div class="nutrient-grid">
  <div class="nutrient-card"><span>${f.calories}</span><br>Calories</div>
  <div class="nutrient-card"><span>${f.protein} g</span><br>Protein</div>
  <div class="nutrient-card"><span>${f.carbs} g</span><br>Carbs</div>
  <div class="nutrient-card"><span>${f.fat} g</span><br>Fat</div>
  <div class="nutrient-card"><span>${f.fiber} g</span><br>Fiber</div>
  <div class="nutrient-card"><span>${f.sugar} g</span><br>Sugar</div>
 </div>

 <h3>Advantages</h3><ul>${f.advantages.map(a=>"<li>"+a+"</li>").join("")}</ul>
 <h3>Disadvantages</h3><ul>${f.disadvantages.map(d=>"<li>"+d+"</li>").join("")}</ul>
 <p><b>Best time to consume:</b> ${f.bestTime}</p>`;
}

// Teachable Machine automap
let model,webcam;
async function startTM(){
 const url=document.getElementById("tmURL").value.trim();
 model=await tmImage.load(url+"model.json",url+"metadata.json");
 webcam=new tmImage.Webcam(300,300,true);
 await webcam.setup();await webcam.play();
 document.getElementById("webcam-container").appendChild(webcam.canvas);
 loop();
}
async function loop(){
 webcam.update();
 const p=await model.predict(webcam.canvas);
 p.sort((a,b)=>b.probability-a.probability);
 const pred=p[0].className;
 document.getElementById("tmOutput").innerText=pred;
 const match=foodData.find(f=>f.name.toLowerCase()===pred.toLowerCase());
 if(match) show(match);
 requestAnimationFrame(loop);
}