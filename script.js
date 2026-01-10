
let model;

async function analyzeImage(){
  const url = document.getElementById("modelURL").value;
  if(!url) return alert("Paste model URL");

  const modelURL = url + "model.json";
  const metadataURL = url + "metadata.json";
  model = await tmImage.load(modelURL, metadataURL);

  const imgInput = document.getElementById("imageUpload");
  if(!imgInput.files.length) return alert("Upload image");

  const img = document.getElementById("preview");
  img.src = URL.createObjectURL(imgInput.files[0]);
  await img.decode();

  const prediction = await model.predict(img);
  prediction.sort((a,b)=>b.probability-a.probability);
  const detected = prediction[0].className.toLowerCase();

  showResult(detected);
}

function showResult(name){
  const data = foodData[name];
  const res = document.getElementById("result");
  if(!data){ res.innerHTML="Food not found in database"; return; }

  res.innerHTML = `
    <h2>${name.toUpperCase()} - <span class="${data.type.toLowerCase()}">${data.type}</span></h2>
    <p>Calories: ${data.calories}</p>
    <p>Protein: ${data.protein}</p>
    <p>Carbs: ${data.carbs}</p>
    <p>Fat: ${data.fat}</p>
    <p>Fiber: ${data.fiber}</p>
    <p><b>Advantages:</b> ${data.advantages}</p>
    <p><b>Disadvantages:</b> ${data.disadvantages}</p>
    <p><b>Best Time:</b> ${data.bestTime}</p>
  `;
}
