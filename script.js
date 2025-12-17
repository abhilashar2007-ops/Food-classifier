
const list = document.getElementById("foodList");
const input = document.getElementById("searchInput");
const result = document.getElementById("result");

foodData.forEach(f => {
  const o = document.createElement("option");
  o.value = f.name;
  list.appendChild(o);
});

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const food = foodData.find(x => x.name.toLowerCase() === input.value.toLowerCase());
    if (food) showResult(food);
  }
});

function showResult(f){
  result.classList.remove("hidden");
  result.innerHTML = `
    <h2>${f.name} <span class="badge ${f.category}">${f.category}</span></h2>
    <div class="grid">
      <div>Calories<br>${f.calories} kcal</div>
      <div>Protein<br>${f.protein} g</div>
      <div>Carbs<br>${f.carbs} g</div>
      <div>Fat<br>${f.fat} g</div>
      <div>Fiber<br>${f.fiber} g</div>
      <div>Sugar<br>${f.sugar} g</div>
    </div>
    <h3>Advantages</h3>
    <ul>${f.advantages.map(a => `<li>${a}</li>`).join("")}</ul>
    <h3>Disadvantages</h3>
    <ul>${f.disadvantages.map(d => `<li>${d}</li>`).join("")}</ul>
  `;
}

let model, webcam;
async function startTM(){
  const url = document.getElementById("tmURL").value.trim();
  if(!url){ alert("Paste Teachable Machine model URL"); return; }
  const modelURL = url + "model.json";
  const metadataURL = url + "metadata.json";
  model = await tmImage.load(modelURL, metadataURL);
  webcam = new tmImage.Webcam(300,300,true);
  await webcam.setup();
  await webcam.play();
  document.getElementById("webcam-container").innerHTML = "";
  document.getElementById("webcam-container").appendChild(webcam.canvas);
  window.requestAnimationFrame(loopTM);
}
async function loopTM(){
  webcam.update();
  const p = await model.predict(webcam.canvas);
  p.sort((a,b)=>b.probability-a.probability);
  document.getElementById("tmOutput").innerText =
    p[0].className + " (" + (p[0].probability*100).toFixed(2) + "%)";
  window.requestAnimationFrame(loopTM);
}
