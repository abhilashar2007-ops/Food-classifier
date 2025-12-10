const foodData = {
  "pizza": {
    "nutrients": {
      "calories": 266,
      "protein": 11,
      "carbs": 33,
      "fat": 10,
      "fiber": 2
    },
    "advantages": "Energy & protein.",
    "disadvantages": "High sodium.",
    "quantity": "1-2 slices",
    "bestTime": "Occasional"
  },
  "burger": {
    "nutrients": {
      "calories": 295,
      "protein": 17,
      "carbs": 28,
      "fat": 12,
      "fiber": 1.5
    },
    "advantages": "Protein source.",
    "disadvantages": "High fat.",
    "quantity": "Once/week",
    "bestTime": "Occasional"
  },
  "fries": {
    "nutrients": {
      "calories": 312,
      "protein": 3.4,
      "carbs": 41,
      "fat": 15,
      "fiber": 3.8
    },
    "advantages": "Quick energy.",
    "disadvantages": "High oil.",
    "quantity": "Small serving",
    "bestTime": "Occasional"
  },
  "apple": {
    "nutrients": {
      "calories": 52,
      "protein": 0.3,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "advantages": "Good fiber.",
    "disadvantages": "Overeating affects stomach.",
    "quantity": "1/day",
    "bestTime": "Any"
  },
  "banana": {
    "nutrients": {
      "calories": 89,
      "protein": 1.1,
      "carbs": 23,
      "fat": 0.3,
      "fiber": 2.6
    },
    "advantages": "Quick energy.",
    "disadvantages": "High sugar.",
    "quantity": "1",
    "bestTime": "Morning"
  },
  "orange juice": {
    "nutrients": {
      "calories": 45,
      "protein": 0.7,
      "carbs": 10.4,
      "fat": 0.2,
      "fiber": 0.2
    },
    "advantages": "High vitamin C, hydrates.",
    "disadvantages": "High natural sugar; lacks fiber compared to whole fruit.",
    "quantity": "200 ml",
    "bestTime": "Morning"
  },
  "apple juice": {
    "nutrients": {
      "calories": 46,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0.1,
      "fiber": 0.1
    },
    "advantages": "Source of vitamins; hydrating.",
    "disadvantages": "High sugar; low fiber.",
    "quantity": "200 ml",
    "bestTime": "Morning"
  },
  "mango juice": {
    "nutrients": {
      "calories": 60,
      "protein": 0.5,
      "carbs": 15,
      "fat": 0.2,
      "fiber": 0.5
    },
    "advantages": "Rich in vitamin A & C.",
    "disadvantages": "High sugar and calories.",
    "quantity": "200 ml",
    "bestTime": "Afternoon"
  },
  "pineapple juice": {
    "nutrients": {
      "calories": 50,
      "protein": 0.5,
      "carbs": 13,
      "fat": 0.1,
      "fiber": 0.1
    },
    "advantages": "Vitamin C and bromelain enzyme.",
    "disadvantages": "Acidic; may irritate stomach.",
    "quantity": "200 ml",
    "bestTime": "Any"
  },
  "grape juice": {
    "nutrients": {
      "calories": 70,
      "protein": 0.4,
      "carbs": 17,
      "fat": 0.2,
      "fiber": 0.1
    },
    "advantages": "Antioxidants.",
    "disadvantages": "Very high sugar content.",
    "quantity": "150 ml",
    "bestTime": "Occasional"
  },
  "watermelon juice": {
    "nutrients": {
      "calories": 30,
      "protein": 0.6,
      "carbs": 8,
      "fat": 0.2,
      "fiber": 0.1
    },
    "advantages": "Hydrating; low calorie.",
    "disadvantages": "High glycemic index.",
    "quantity": "250 ml",
    "bestTime": "Afternoon"
  },
  "pomegranate juice": {
    "nutrients": {
      "calories": 83,
      "protein": 1.7,
      "carbs": 19,
      "fat": 1.2,
      "fiber": 0.1
    },
    "advantages": "Antioxidant-rich.",
    "disadvantages": "High sugar; expensive.",
    "quantity": "150 ml",
    "bestTime": "Any"
  },
  "lemon juice": {
    "nutrients": {
      "calories": 22,
      "protein": 0.4,
      "carbs": 6.9,
      "fat": 0.2,
      "fiber": 0.3
    },
    "advantages": "Vitamin C; aids digestion when diluted.",
    "disadvantages": "Very acidic; should be diluted.",
    "quantity": "1 small glass (diluted)",
    "bestTime": "Morning"
  },
  "carrot juice": {
    "nutrients": {
      "calories": 40,
      "protein": 0.9,
      "carbs": 9.6,
      "fat": 0.2,
      "fiber": 0.8
    },
    "advantages": "Rich in beta-carotene (vitamin A).",
    "disadvantages": "High sugar concentration; watch portion.",
    "quantity": "150 ml",
    "bestTime": "Morning"
  },
  "beetroot juice": {
    "nutrients": {
      "calories": 43,
      "protein": 1.6,
      "carbs": 9.6,
      "fat": 0.2,
      "fiber": 0.8
    },
    "advantages": "Nitrate-rich; may improve blood flow.",
    "disadvantages": "May lower blood pressure; strong taste.",
    "quantity": "100 ml",
    "bestTime": "Pre-workout"
  },
  "idli": {
    "nutrients": {
      "calories": 39,
      "protein": 2.4,
      "carbs": 7.9,
      "fat": 0.2,
      "fiber": 0.2
    },
    "advantages": "Fermented & light.",
    "disadvantages": "Low protein alone.",
    "quantity": "2\u20133",
    "bestTime": "Breakfast"
  },
  "dosa": {
    "nutrients": {
      "calories": 135,
      "protein": 3.5,
      "carbs": 26,
      "fat": 2.5,
      "fiber": 1.2
    },
    "advantages": "Fermented.",
    "disadvantages": "Often oily.",
    "quantity": "1\u20132",
    "bestTime": "Breakfast"
  },
  "masala dosa": {
    "nutrients": {
      "calories": 168,
      "protein": 4,
      "carbs": 30,
      "fat": 3,
      "fiber": 2
    },
    "advantages": "Tasty meal.",
    "disadvantages": "Oil in masala.",
    "quantity": "1",
    "bestTime": "Breakfast"
  },
  "vada": {
    "nutrients": {
      "calories": 200,
      "protein": 4,
      "carbs": 20,
      "fat": 10,
      "fiber": 1
    },
    "advantages": "Tasty snack.",
    "disadvantages": "Deep fried.",
    "quantity": "1 small",
    "bestTime": "Occasional"
  },
  "poha": {
    "nutrients": {
      "calories": 250,
      "protein": 5,
      "carbs": 45,
      "fat": 6,
      "fiber": 3
    },
    "advantages": "Light & quick.",
    "disadvantages": "Often oily.",
    "quantity": "1 plate",
    "bestTime": "Breakfast"
  },
  "biryani": {
    "nutrients": {
      "calories": 280,
      "protein": 8,
      "carbs": 45,
      "fat": 9,
      "fiber": 2
    },
    "advantages": "Complete meal.",
    "disadvantages": "High calories.",
    "quantity": "1 small plate",
    "bestTime": "Lunch"
  },
  "chole": {
    "nutrients": {
      "calories": 164,
      "protein": 8.9,
      "carbs": 27,
      "fat": 2.6,
      "fiber": 8
    },
    "advantages": "High protein.",
    "disadvantages": "Spicy.",
    "quantity": "1 cup",
    "bestTime": "Lunch"
  },
  "rajma": {
    "nutrients": {
      "calories": 127,
      "protein": 8.7,
      "carbs": 22,
      "fat": 0.5,
      "fiber": 6
    },
    "advantages": "High fiber & protein.",
    "disadvantages": "Gas for some.",
    "quantity": "1 cup",
    "bestTime": "Lunch/Dinner"
  },
  "dal": {
    "nutrients": {
      "calories": 116,
      "protein": 9,
      "carbs": 20,
      "fat": 0.4,
      "fiber": 8
    },
    "advantages": "Great plant protein.",
    "disadvantages": "Needs pairing.",
    "quantity": "1 cup",
    "bestTime": "Lunch/Dinner"
  },
  "butter chicken": {
    "nutrients": {
      "calories": 280,
      "protein": 20,
      "carbs": 8,
      "fat": 18,
      "fiber": 0
    },
    "advantages": "Protein rich.",
    "disadvantages": "Very high fat.",
    "quantity": "Small serving",
    "bestTime": "Dinner"
  },
  "palak paneer": {
    "nutrients": {
      "calories": 180,
      "protein": 8,
      "carbs": 12,
      "fat": 10,
      "fiber": 3
    },
    "advantages": "Iron + protein.",
    "disadvantages": "Cream adds calories.",
    "quantity": "1 bowl",
    "bestTime": "Lunch"
  },
  "naan": {
    "nutrients": {
      "calories": 262,
      "protein": 8,
      "carbs": 49,
      "fat": 6,
      "fiber": 2
    },
    "advantages": "Soft & tasty.",
    "disadvantages": "Refined flour.",
    "quantity": "1",
    "bestTime": "Lunch/Dinner"
  },
  "paratha": {
    "nutrients": {
      "calories": 300,
      "protein": 6,
      "carbs": 35,
      "fat": 12,
      "fiber": 2
    },
    "advantages": "Filling.",
    "disadvantages": "Often fried in ghee/oil.",
    "quantity": "1 small",
    "bestTime": "Breakfast"
  },
  "samosa": {
    "nutrients": {
      "calories": 260,
      "protein": 4,
      "carbs": 30,
      "fat": 12,
      "fiber": 3
    },
    "advantages": "Filling snack.",
    "disadvantages": "Deep-fried.",
    "quantity": "1 small",
    "bestTime": "Occasional"
  },
  "gulab jamun": {
    "nutrients": {
      "calories": 300,
      "protein": 3,
      "carbs": 40,
      "fat": 12,
      "fiber": 0.5
    },
    "advantages": "Festive dessert.",
    "disadvantages": "High sugar & fat.",
    "quantity": "1-2 small",
    "bestTime": "Occasional"
  },
  "pav bhaji": {
    "nutrients": {
      "calories": 260,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 4
    },
    "advantages": "Vegetable content.",
    "disadvantages": "Butter & oil used.",
    "quantity": "Small serving",
    "bestTime": "Occasional"
  },
  "tea": {
    "nutrients": {
      "calories": 1,
      "protein": 0.1,
      "carbs": 0,
      "fat": 0,
      "fiber": 0
    },
    "advantages": "Antioxidants (unsweetened).",
    "disadvantages": "Caffeine sensitivity.",
    "quantity": "1-2 cups",
    "bestTime": "Morning"
  },
  "coffee": {
    "nutrients": {
      "calories": 2,
      "protein": 0.1,
      "carbs": 0,
      "fat": 0,
      "fiber": 0
    },
    "advantages": "Alertness (black).",
    "disadvantages": "Caffeine effects.",
    "quantity": "1-2 cups",
    "bestTime": "Morning"
  }
};


// Stylish full script: TM + MobileNet + search + UI updates (with juices & Indian foods)
let hjModel = null, mobileNet = null, webcamStream = null;
let videoEl = null, captureCanvas = null, captureCtx = null, predictInterval = null;

function setProgress(el, pct){ el.style.width = Math.max(0, Math.min(100, pct)) + '%'; }

document.getElementById('loadBtn').addEventListener('click', async ()=>{
  const url = document.getElementById('hjModelUrl').value.trim();
  try{
    if(!url) throw new Error("Model URL empty");
    const finalUrl = url.endsWith('/') ? url : url + '/';
    hjModel = await tmImage.load(finalUrl + "model.json", finalUrl + "metadata.json");
    mobileNet = await ml5.imageClassifier("MobileNet");
    document.getElementById('startBtn').disabled = false;
    alert("Models loaded");
  }catch(e){ alert("Load failed: "+e.message); }
});

document.getElementById('startBtn').addEventListener('click', async ()=>{
  videoEl = document.getElementById('webcam');
  captureCanvas = document.getElementById('captureCanvas');
  captureCtx = captureCanvas.getContext('2d');
  try{
    webcamStream = await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});
    videoEl.srcObject = webcamStream; await videoEl.play();
    document.getElementById('stopBtn').disabled = false; document.getElementById('snapshotBtn').disabled = false;
    document.getElementById('resultsPanel').style.display = "block";
    if(!mobileNet) mobileNet = await ml5.imageClassifier("MobileNet", videoEl);
    predictInterval = setInterval(predictFrame, 900);
  }catch(e){ alert("Webcam error: "+e.message); }
});

document.getElementById('stopBtn').addEventListener('click', ()=>{
  if(webcamStream){ webcamStream.getTracks().forEach(t=>t.stop()); }
  if(predictInterval) clearInterval(predictInterval);
  document.getElementById('startBtn').disabled = false;
});

document.getElementById('snapshotBtn').addEventListener('click', predictFrame);

document.getElementById('searchBtn').addEventListener('click', ()=>{
  const q = document.getElementById('manualFood').value.trim();
  if(q) lookupFoodByName(q);
});
document.getElementById('manualFood').addEventListener('keydown', e=>{ if(e.key==="Enter") document.getElementById('searchBtn').click(); });

function populateSuggestions(){
  const dl = document.getElementById('food-suggestions');
  Object.keys(foodData).sort().forEach(k=>{ const opt=document.createElement('option'); opt.value=k; dl.appendChild(opt); });
}
populateSuggestions();

async function predictFrame(){
  if(!videoEl) return;
  captureCanvas.width = videoEl.videoWidth || 640; captureCanvas.height = videoEl.videoHeight || 480;
  captureCtx.drawImage(videoEl, 0, 0, captureCanvas.width, captureCanvas.height);
  try{ const dataUrl = captureCanvas.toDataURL('image/jpeg', 0.7); document.getElementById('thumbPreview').innerHTML = '<img src="'+dataUrl+'" style="height:88px;border-radius:8px;object-fit:cover">'; }catch(e){}
  let foodLabel='Unknown', foodConf=0;
  try{ const res = await mobileNet.classify(captureCanvas); if(res && res.length){ foodLabel=res[0].label; foodConf=res[0].confidence; } }catch(e) {}
  const canonical = findCanonicalFood(foodLabel);
  document.getElementById('foodName').innerText = canonical.displayName;
  document.getElementById('foodSub').innerText = canonical.key ? 'Matched from database' : 'Detected by MobileNet';
  document.getElementById('foodConfidence').innerText = (foodConf*100).toFixed(1)+'%';
  setProgress(document.getElementById('foodBar'), (foodConf*100));
  if(hjModel){
    try{
      const preds = await hjModel.predict(captureCanvas);
      if(preds && preds.length){
        const best = preds.reduce((a,b)=> a.probability>b.probability?a:b);
        document.getElementById('hjBadge').innerText = `${best.className}`;
        document.getElementById('hjConfidence').innerText = (best.probability*100).toFixed(1)+'%';
        setProgress(document.getElementById('hjBar'), best.probability*100);
        document.getElementById('hjBadge').style.background = best.className.toLowerCase().includes('healthy') ? 'linear-gradient(90deg,#0ce9a8,#2bd18a)' : 'linear-gradient(90deg,#ff7b7b,#ffbaba)';
      }
    }catch(e){ console.warn(e); }
  }
  if(canonical.key) showFoodData(canonical.key);
}

function lookupFoodByName(q){ const key = findMatch(q.toLowerCase()); if(key) showFoodData(key); else alert('Not found: '+q); }
function findMatch(q){ if(foodData[q]) return q; for(const key of Object.keys(foodData)){ if(key.includes(q) || q.includes(key)) return key; } return null; }
function showFoodData(key){
  const e = foodData[key];
  document.getElementById('resultsPanel').style.display = 'block';
  document.getElementById('foodName').innerText = key.charAt(0).toUpperCase()+key.slice(1);
  document.getElementById('nutri').innerHTML = `Calories: ${e.nutrients.calories} kcal<br/>Protein: ${e.nutrients.protein} g<br/>Carbs: ${e.nutrients.carbs} g<br/>Fat: ${e.nutrients.fat} g<br/>Fiber: ${e.nutrients.fiber}`;
  document.getElementById('adv').innerText = e.advantages;
  document.getElementById('disadv').innerText = e.disadvantages;
  document.getElementById('qty').innerText = e.quantity;
  document.getElementById('bestTime').innerText = e.bestTime;
  const cals = e.nutrients.calories || 0; const pill = document.getElementById('hjBadge');
  if(cals > 300) pill.style.background = 'linear-gradient(90deg,#ff7b7b,#ffbaba)'; else pill.style.background = 'linear-gradient(90deg,#0ce9a8,#2bd18a)';
  setProgress(document.getElementById('foodBar'), Math.min(95, cals/4));
  document.getElementById('foodConfidence').innerText = '—'; document.getElementById('hjConfidence').innerText = '—';
  setProgress(document.getElementById('hjBar'), 0);
}
