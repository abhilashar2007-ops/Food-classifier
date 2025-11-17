const foodData = {
  "apple": {
    "nutrients": {
      "calories": 52,
      "protein": 0.3,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "advantages": "Rich in fiber and vitamin C.",
    "disadvantages": "May upset stomach if overeaten.",
    "quantity": "1 medium/day",
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
    "advantages": "High potassium, quick energy.",
    "disadvantages": "High sugar for diabetics.",
    "quantity": "1-2/day",
    "bestTime": "Morning or pre-workout"
  },
  "orange": {
    "nutrients": {
      "calories": 47,
      "protein": 0.9,
      "carbs": 12,
      "fat": 0.1,
      "fiber": 2.4
    },
    "advantages": "High vitamin C.",
    "disadvantages": "Acidic for sensitive stomachs.",
    "quantity": "1/day",
    "bestTime": "Morning"
  },
  "grapes": {
    "nutrients": {
      "calories": 69,
      "protein": 0.6,
      "carbs": 18,
      "fat": 0.2,
      "fiber": 0.9
    },
    "advantages": "Antioxidants.",
    "disadvantages": "High sugar.",
    "quantity": "1 cup",
    "bestTime": "Snack"
  },
  "mango": {
    "nutrients": {
      "calories": 60,
      "protein": 0.8,
      "carbs": 15,
      "fat": 0.4,
      "fiber": 1.6
    },
    "advantages": "Vitamins A & C.",
    "disadvantages": "High sugar when ripe.",
    "quantity": "1 cup",
    "bestTime": "Afternoon"
  },
  "pizza": {
    "nutrients": {
      "calories": 266,
      "protein": 11,
      "carbs": 33,
      "fat": 10,
      "fiber": 2
    },
    "advantages": "Energy & protein.",
    "disadvantages": "High saturated fat & sodium.",
    "quantity": "1-2 slices occasionally",
    "bestTime": "Occasional meal"
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
    "disadvantages": "High fat & sodium.",
    "quantity": "Once a week",
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
    "disadvantages": "High oil and acrylamide.",
    "quantity": "Small serving occasionally",
    "bestTime": "Occasional"
  },
  "idli": {
    "nutrients": {
      "calories": 39,
      "protein": 2.4,
      "carbs": 7.9,
      "fat": 0.2,
      "fiber": 0.2
    },
    "advantages": "Low fat, fermented.",
    "disadvantages": "Low protein unless paired.",
    "quantity": "2-3",
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
    "advantages": "Fermented, easy to digest.",
    "disadvantages": "Often with oily accompaniments.",
    "quantity": "1-2",
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
  "biryani": {
    "nutrients": {
      "calories": 280,
      "protein": 8,
      "carbs": 45,
      "fat": 9,
      "fiber": 2
    },
    "advantages": "Complete meal if balanced.",
    "disadvantages": "High calories.",
    "quantity": "1 small plate",
    "bestTime": "Lunch/Dinner"
  },
  "chapati": {
    "nutrients": {
      "calories": 71,
      "protein": 3,
      "carbs": 14,
      "fat": 0.3,
      "fiber": 2
    },
    "advantages": "Whole wheat option.",
    "disadvantages": "Depends on oil used.",
    "quantity": "2-3",
    "bestTime": "Any"
  },
  "rice": {
    "nutrients": {
      "calories": 130,
      "protein": 2.7,
      "carbs": 28,
      "fat": 0.3,
      "fiber": 0.4
    },
    "advantages": "Staple energy source.",
    "disadvantages": "White rice high glycemic.",
    "quantity": "1 cup cooked",
    "bestTime": "Lunch/Dinner"
  },
  "pasta": {
    "nutrients": {
      "calories": 131,
      "protein": 5,
      "carbs": 25,
      "fat": 1.1,
      "fiber": 1.3
    },
    "advantages": "Energy for athletes.",
    "disadvantages": "Calories depend on sauce.",
    "quantity": "1 cup cooked",
    "bestTime": "Lunch"
  },
  "noodles": {
    "nutrients": {
      "calories": 138,
      "protein": 4.4,
      "carbs": 18,
      "fat": 5.3,
      "fiber": 1.5
    },
    "advantages": "Quick meal.",
    "disadvantages": "Often high sodium.",
    "quantity": "1 bowl",
    "bestTime": "Occasional"
  },
  "sandwich": {
    "nutrients": {
      "calories": 250,
      "protein": 10,
      "carbs": 30,
      "fat": 8,
      "fiber": 3
    },
    "advantages": "Convenient balanced meal.",
    "disadvantages": "Processed fillings may be unhealthy.",
    "quantity": "1",
    "bestTime": "Lunch"
  },
  "chicken": {
    "nutrients": {
      "calories": 239,
      "protein": 27,
      "carbs": 0,
      "fat": 14,
      "fiber": 0
    },
    "advantages": "Lean protein when grilled.",
    "disadvantages": "Fried versions high fat.",
    "quantity": "100-150 g",
    "bestTime": "Lunch/Dinner"
  },
  "fish": {
    "nutrients": {
      "calories": 206,
      "protein": 22,
      "carbs": 0,
      "fat": 12,
      "fiber": 0
    },
    "advantages": "Omega-3s for some species.",
    "disadvantages": "Mercury in some fish.",
    "quantity": "100-150 g",
    "bestTime": "Lunch/Dinner"
  },
  "paneer": {
    "nutrients": {
      "calories": 265,
      "protein": 18,
      "carbs": 1.2,
      "fat": 20,
      "fiber": 0
    },
    "advantages": "High protein.",
    "disadvantages": "High fat.",
    "quantity": "50-100 g",
    "bestTime": "Any"
  },
  "milk": {
    "nutrients": {
      "calories": 42,
      "protein": 3.4,
      "carbs": 5,
      "fat": 1,
      "fiber": 0
    },
    "advantages": "Calcium & protein.",
    "disadvantages": "Lactose intolerance for some.",
    "quantity": "1 glass",
    "bestTime": "Morning"
  },
  "yogurt": {
    "nutrients": {
      "calories": 59,
      "protein": 10,
      "carbs": 3.6,
      "fat": 0.4,
      "fiber": 0
    },
    "advantages": "Probiotics for gut health.",
    "disadvantages": "Flavored variants add sugar.",
    "quantity": "1 cup",
    "bestTime": "Any"
  },
  "egg": {
    "nutrients": {
      "calories": 155,
      "protein": 13,
      "carbs": 1.1,
      "fat": 11,
      "fiber": 0
    },
    "advantages": "High-quality protein.",
    "disadvantages": "Allergies for some.",
    "quantity": "1-2 eggs",
    "bestTime": "Morning"
  },
  "oats": {
    "nutrients": {
      "calories": 389,
      "protein": 17,
      "carbs": 66,
      "fat": 7,
      "fiber": 11
    },
    "advantages": "Good fiber, lowers cholesterol.",
    "disadvantages": "May need flavoring.",
    "quantity": "40-60 g",
    "bestTime": "Breakfast"
  },
  "walnuts": {
    "nutrients": {
      "calories": 654,
      "protein": 15,
      "carbs": 14,
      "fat": 65,
      "fiber": 7
    },
    "advantages": "Omega-3 fats.",
    "disadvantages": "High calorie density.",
    "quantity": "Few pieces",
    "bestTime": "Snack"
  },
  "almonds": {
    "nutrients": {
      "calories": 579,
      "protein": 21,
      "carbs": 22,
      "fat": 50,
      "fiber": 12
    },
    "advantages": "Healthy fats & vitamin E.",
    "disadvantages": "Calorie-dense.",
    "quantity": "6-8 nuts",
    "bestTime": "Snack"
  },
  "peanut butter": {
    "nutrients": {
      "calories": 588,
      "protein": 25,
      "carbs": 20,
      "fat": 50,
      "fiber": 6
    },
    "advantages": "Protein & healthy fats.",
    "disadvantages": "Added sugar in many brands.",
    "quantity": "1-2 tbsp",
    "bestTime": "Any"
  },
  "pancake": {
    "nutrients": {
      "calories": 227,
      "protein": 6,
      "carbs": 28,
      "fat": 10,
      "fiber": 1.2
    },
    "advantages": "Pleasure meal.",
    "disadvantages": "Often sugary toppings.",
    "quantity": "1-2 small",
    "bestTime": "Occasional"
  },
  "salad": {
    "nutrients": {
      "calories": 33,
      "protein": 1.2,
      "carbs": 6,
      "fat": 0.2,
      "fiber": 1.8
    },
    "advantages": "Vitamins & fiber.",
    "disadvantages": "Dressings add calories.",
    "quantity": "1 bowl",
    "bestTime": "Any"
  },
  "tofu": {
    "nutrients": {
      "calories": 76,
      "protein": 8,
      "carbs": 1.9,
      "fat": 4.8,
      "fiber": 0.3
    },
    "advantages": "Plant protein.",
    "disadvantages": "Processed variants exist.",
    "quantity": "100 g",
    "bestTime": "Any"
  },
  "beans": {
    "nutrients": {
      "calories": 347,
      "protein": 21,
      "carbs": 63,
      "fat": 1.2,
      "fiber": 16
    },
    "advantages": "High fiber & protein.",
    "disadvantages": "Gas for some people.",
    "quantity": "1 cup cooked",
    "bestTime": "Lunch/Dinner"
  },
  "lentils": {
    "nutrients": {
      "calories": 116,
      "protein": 9,
      "carbs": 20,
      "fat": 0.4,
      "fiber": 8
    },
    "advantages": "Good plant protein.",
    "disadvantages": "Needs soaking/cooking.",
    "quantity": "1 cup cooked",
    "bestTime": "Lunch/Dinner"
  },
  "puri": {
    "nutrients": {
      "calories": 200,
      "protein": 4,
      "carbs": 25,
      "fat": 9,
      "fiber": 1.5
    },
    "advantages": "Traditional delight.",
    "disadvantages": "Deep-fried.",
    "quantity": "1-2",
    "bestTime": "Occasional"
  },
  "pav": {
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
  "jalebi": {
    "nutrients": {
      "calories": 360,
      "protein": 0.8,
      "carbs": 70,
      "fat": 3,
      "fiber": 0.1
    },
    "advantages": "Festive sweet.",
    "disadvantages": "Very high sugar.",
    "quantity": "Rarely",
    "bestTime": "Occasional"
  },
  "kulfi": {
    "nutrients": {
      "calories": 200,
      "protein": 4,
      "carbs": 22,
      "fat": 10,
      "fiber": 0
    },
    "advantages": "Dessert delight.",
    "disadvantages": "High sugar & fat.",
    "quantity": "Small",
    "bestTime": "Occasional"
  }
};


let hjModel = null;
let mobileNet = null;
let webcamStream = null;
let videoEl = null;
let captureCanvas = null;
let captureCtx = null;
let predictInterval = null;

function setStatus(s){ document.getElementById('status').innerText = s; }

// load TM model
async function loadHJModel(url){
  if(!url) throw new Error('Model URL empty');
  if(!url.endsWith('/')) url = url + '/';
  setStatus('Loading Teachable Machine model...');
  const modelURL = url + 'model.json';
  const metadataURL = url + 'metadata.json';
  hjModel = await tmImage.load(modelURL, metadataURL);
  setStatus('Teachable Machine (H/J) model loaded.');
  return hjModel;
}

document.getElementById('loadBtn').addEventListener('click', async ()=>{
  const url = document.getElementById('hjModelUrl').value.trim();
  try{
    if(!url){ alert('Please paste your Teachable Machine model folder URL.'); return; }
    await loadHJModel(url);
    // load ml5 MobileNet
    setStatus('Loading MobileNet (ml5) for food-name detection...');
    mobileNet = await ml5.imageClassifier('MobileNet');
    setStatus('MobileNet ready. Click Start Webcam.');
    document.getElementById('startBtn').disabled = false;
  } catch(err){
    console.error(err);
    alert('Error loading model: ' + err.message);
    setStatus('Model load failed.');
  }
});

// start webcam
document.getElementById('startBtn').addEventListener('click', async ()=>{
  if(videoEl) return;
  videoEl = document.getElementById('webcam');
  captureCanvas = document.getElementById('captureCanvas');
  captureCtx = captureCanvas.getContext('2d');
  try{
    webcamStream = await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}, audio:false});
    videoEl.srcObject = webcamStream;
    await videoEl.play();
    setStatus('Webcam started.');
    document.getElementById('stopBtn').disabled = false;
    document.getElementById('startBtn').disabled = true;
    document.getElementById('snapshotBtn').disabled = false;
    document.getElementById('resultsPanel').style.display = 'block';
    // load ml5 MobileNet if not already loaded
    if(!mobileNet){ mobileNet = await ml5.imageClassifier('MobileNet', videoEl); }
    // begin loop
    predictInterval = setInterval(predictFrame, 800);
  } catch(err){
    alert('Could not start webcam: ' + err.message);
    setStatus('Webcam error.');
  }
});

// snapshot
document.getElementById('snapshotBtn').addEventListener('click', async ()=>{
  await predictFrame();
});

// stop
document.getElementById('stopBtn').addEventListener('click', ()=>{
  if(webcamStream){
    webcamStream.getTracks().forEach(t=>t.stop());
    webcamStream = null;
  }
  if(predictInterval) clearInterval(predictInterval);
  document.getElementById('startBtn').disabled = false;
  document.getElementById('stopBtn').disabled = true;
  setStatus('Webcam stopped.');
});

async function predictFrame(){
  if(!videoEl) return;
  // draw the video frame to canvas
  captureCanvas.width = videoEl.videoWidth || 480;
  captureCanvas.height = videoEl.videoHeight || 360;
  captureCtx.drawImage(videoEl, 0, 0, captureCanvas.width, captureCanvas.height);

  // 1) get food name via MobileNet (ml5)
  let foodLabel = 'Unknown';
  let foodConf = 0;
  try{
    const results = await mobileNet.classify(captureCanvas);
    if(results && results.length){
      foodLabel = results[0].label;
      foodConf = results[0].confidence;
    }
  } catch(e){
    console.warn('MobileNet classify error', e);
  }

  // canonicalize food label
  const canonical = findCanonicalFood(foodLabel);
  document.getElementById('foodName').innerText = canonical.displayName;
  document.getElementById('foodConfidence').innerText = (foodConf*100).toFixed(1) + '%';

  // 2) get H/J from Teachable Machine model
  if(hjModel){
    try{
      const preds = await hjModel.predict(captureCanvas);
      if(preds && preds.length){
        const top = preds.reduce((a,b)=> a.probability > b.probability ? a : b);
        const label = top.className;
        const conf = (top.probability*100).toFixed(1) + '%';
        const hjBadge = document.getElementById('hjBadge');
        hjBadge.innerText = `${label} (${conf})`;
        if(label.toLowerCase().includes('healthy')) hjBadge.className = 'badge green';
        else if(label.toLowerCase().includes('junk')||label.toLowerCase().includes('unhealthy')) hjBadge.className = 'badge red';
        else hjBadge.className = 'badge';
      }
    } catch(e){
      console.warn('HJ model predict failed', e);
    }
  } else {
    attemptRuleBasedHJ(canonical.key);
  }

  // 3) show nutrition/advice
  if(canonical.key && foodData[canonical.key]){
    const e = foodData[canonical.key];
    document.getElementById('nutri').innerHTML = `
      Calories: ${e.nutrients.calories} kcal<br/>
      Protein: ${e.nutrients.protein} g<br/>
      Carbs: ${e.nutrients.carbs} g<br/>
      Fat: ${e.nutrients.fat} g<br/>
      Fiber: ${e.nutrients.fiber ?? '-'} g
    `;
    document.getElementById('adv').innerText = e.advantages;
    document.getElementById('disadv').innerText = e.disadvantages;
    document.getElementById('qty').innerText = e.quantity;
    document.getElementById('bestTime').innerText = e.bestTime;
  } else {
    document.getElementById('nutri').innerText = 'No nutrition data found for this food. Add it to foodData in the code.';
    document.getElementById('adv').innerText = '-';
    document.getElementById('disadv').innerText = '-';
    document.getElementById('qty').innerText = '-';
    document.getElementById('bestTime').innerText = '-';
  }
}

function attemptRuleBasedHJ(foodKey){
  const hjBadge = document.getElementById('hjBadge');
  if(foodKey && foodData[foodKey]){
    const e = foodData[foodKey];
    const junk = (e.nutrients.calories && e.nutrients.calories > 250) || (e.nutrients.fat && e.nutrients.fat > 12);
    hjBadge.innerText = junk ? "Junk (rule)" : "Healthy (rule)";
    hjBadge.className = junk ? 'badge red' : 'badge green';
  } else {
    hjBadge.innerText = "—";
    hjBadge.className = 'badge';
  }
}

// try to canonicalize MobileNet label to a key in foodData
function findCanonicalFood(label){
  if(!label) return {key:null, displayName:'Unknown'};
  const lower = label.toLowerCase();
  if(foodData[lower]) return {key:lower, displayName:capitalize(lower)};
  // split tokens and match
  const tokens = lower.replace(/,/g,' ').split(/\\s+/);
  for(const t of tokens){
    const singular = t.replace(/s$/,'');
    if(foodData[t]) return {key:t, displayName:capitalize(t)};
    if(foodData[singular]) return {key:singular, displayName:capitalize(singular)};
  }
  // synonyms
  const synonyms = {'hot dog':'hotdog','hot-dog':'hotdog','french fries':'fries','french-fries':'fries','fried rice':'rice','veg biryani':'biryani'};
  for(const s in synonyms){
    if(lower.includes(s)){
      const key = synonyms[s];
      if(foodData[key]) return {key:key, displayName:capitalize(key)};
    }
  }
  // substring match
  for(const key in foodData){
    if(lower.includes(key)) return {key:key, displayName:capitalize(key)};
  }
  // fallback
  return {key:null, displayName:label};
}

function capitalize(s){ if(!s) return s; return s[0].toUpperCase() + s.slice(1); }
