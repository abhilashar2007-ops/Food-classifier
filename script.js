
let model, webcam;
const apiKey="Qah1G2mP7q56LSOfCJBxzvR8WJ9L68pziyLvwGSA";

const ingredientMap = {
 "chapati":["whole wheat"], "roti":["whole wheat"], "dosa":["rice","urad dal"],
 "idli":["rice","urad dal"], "rice":["rice"], "sambar":["dal","vegetables"],
 "rasam":["spices"], "curd rice":["rice","curd"], "pongal":["rice","dal"],
 "upma":["semolina"], "poha":["flattened rice"]
};

function ingredientBasedClass(name){
 name=name.toLowerCase();
 for(let food in ingredientMap){
  if(name.includes(food)) return "Healthy";
 }
 return null;
}

async function startCamera(){
 const url=document.getElementById("modelURL").value;
 if(!url){alert("Paste model URL");return;}
 model = await tmImage.load(url+"model.json", url+"metadata.json");
 webcam = new tmImage.Webcam(300,300,true);
 await webcam.setup(); await webcam.play();
 document.getElementById("camera").appendChild(webcam.canvas);
 window.requestAnimationFrame(loop);
}

async function loop(){
 webcam.update();
 const prediction = await model.predict(webcam.canvas);
 prediction.sort((a,b)=>b.probability-a.probability);
 document.getElementById("tmResult").innerText =
  prediction[0].className+" ("+(prediction[0].probability*100).toFixed(2)+"%)";
 window.requestAnimationFrame(loop);
}

document.getElementById("foodInput").addEventListener("keypress",e=>{
 if(e.key==="Enter") searchNutrition();
});

function nutritionClass(n){
 if((n.sugar>10 && n.fat>15) || n.calories>250 || n.sodium>500) return "Junk";
 if(n.protein>8 && n.fiber>4 && n.sugar<10) return "Healthy";
 return "Moderate";
}

async function searchNutrition(){
 const food=document.getElementById("foodInput").value;
 const resDiv=document.getElementById("nutritionResult");
 if(!food)return;

 const res=await fetch(
  `https://api.nal.usda.gov/fdc/v1/foods/search?query=${food}&api_key=${apiKey}`
 );
 const data=await res.json();
 if(!data.foods||!data.foods.length){
  resDiv.innerHTML="<p>Food not found</p>";return;
 }

 const nData=data.foods[0].foodNutrients;
 const get=name=>{
  const x=nData.find(i=>i.nutrientName===name);
  return x?x.value:0;
 };

 const n={
  calories:get("Energy"), protein:get("Protein"),
  carbs:get("Carbohydrate, by difference"), fat:get("Total lipid (fat)"),
  fiber:get("Fiber, total dietary"), sugar:get("Sugars, total"),
  sodium:get("Sodium, Na"), cholesterol:get("Cholesterol")
 };

 let category = ingredientBasedClass(food) || nutritionClass(n);

 // ALWAYS generate advantages & disadvantages
 let adv=[
  "Provides energy required for daily activities.",
  "Contains essential nutrients that support body functions."
 ];
 let dis=[
  "Should be consumed in balanced portions.",
  "Overconsumption may lead to health issues."
 ];

 // Nutrition-specific additions
 if(n.protein>10) adv.push("Good source of protein which supports muscle growth.");
 if(n.fiber>5) adv.push("Dietary fiber improves digestion and gut health.");
 if(n.sugar>10) dis.push("High sugar content may increase blood glucose levels.");
 if(n.fat>15) dis.push("High fat intake may contribute to weight gain.");
 if(n.sodium>300) dis.push("Excess sodium may increase blood pressure.");

 resDiv.innerHTML=`
 <span class="badge ${category}">${food.toUpperCase()} — ${category}</span>

 <div class="grid">
  <div class="box"><b>Calories</b><br>${n.calories} kcal</div>
  <div class="box"><b>Protein</b><br>${n.protein} g</div>
  <div class="box"><b>Carbs</b><br>${n.carbs} g</div>
  <div class="box"><b>Fat</b><br>${n.fat} g</div>
  <div class="box"><b>Fiber</b><br>${n.fiber} g</div>
  <div class="box"><b>Sugar</b><br>${n.sugar} g</div>
  <div class="box"><b>Sodium</b><br>${n.sodium} mg</div>
  <div class="box"><b>Cholesterol</b><br>${n.cholesterol} mg</div>
 </div>

 ${n.sugar>10 ? "<div class='alert'>⚠ HIGH SUGAR ALERT</div>" : ""}

 <div class="section"><h3>Advantages</h3><ul>${adv.map(a=>`<li>${a}</li>`).join("")}</ul></div>
 <div class="section"><h3>Disadvantages</h3><ul>${dis.map(d=>`<li>${d}</li>`).join("")}</ul></div>
 `;
}
