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
  "roti": {
    "nutrients": {
      "calories": 110,
      "protein": 3,
      "carbs": 18,
      "fat": 2,
      "fiber": 2
    },
    "advantages": "Whole wheat fiber source.",
    "disadvantages": "Dry if eaten alone.",
    "quantity": "2\u20133",
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
    "advantages": "Healthy staple.",
    "disadvantages": "Low protein.",
    "quantity": "2\u20133",
    "bestTime": "Any"
  },
  "phulka": {
    "nutrients": {
      "calories": 60,
      "protein": 2.5,
      "carbs": 12,
      "fat": 0.2,
      "fiber": 1.5
    },
    "advantages": "Light and oil-free.",
    "disadvantages": "Low calories.",
    "quantity": "3\u20134",
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
    "advantages": "Filling meal.",
    "disadvantages": "Often oily.",
    "quantity": "1",
    "bestTime": "Breakfast"
  },
  "aloo paratha": {
    "nutrients": {
      "calories": 320,
      "protein": 6,
      "carbs": 40,
      "fat": 14,
      "fiber": 3
    },
    "advantages": "Filling.",
    "disadvantages": "High fat.",
    "quantity": "1",
    "bestTime": "Breakfast"
  },
  "paneer paratha": {
    "nutrients": {
      "calories": 330,
      "protein": 10,
      "carbs": 34,
      "fat": 14,
      "fiber": 2
    },
    "advantages": "Good protein.",
    "disadvantages": "High fat.",
    "quantity": "1",
    "bestTime": "Breakfast"
  },
  "puri": {
    "nutrients": {
      "calories": 270,
      "protein": 4,
      "carbs": 28,
      "fat": 14,
      "fiber": 2
    },
    "advantages": "Festive food.",
    "disadvantages": "Deep fried.",
    "quantity": "1\u20132",
    "bestTime": "Occasional"
  },
  "bhature": {
    "nutrients": {
      "calories": 300,
      "protein": 6,
      "carbs": 38,
      "fat": 12,
      "fiber": 2
    },
    "advantages": "High energy.",
    "disadvantages": "Oily.",
    "quantity": "1",
    "bestTime": "Occasional"
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
  "uttapam": {
    "nutrients": {
      "calories": 180,
      "protein": 5,
      "carbs": 30,
      "fat": 3,
      "fiber": 2
    },
    "advantages": "Vegetable-rich.",
    "disadvantages": "Depends on toppings.",
    "quantity": "1",
    "bestTime": "Breakfast"
  },
  "pongal": {
    "nutrients": {
      "calories": 130,
      "protein": 4,
      "carbs": 20,
      "fat": 3,
      "fiber": 1
    },
    "advantages": "Comfort food.",
    "disadvantages": "Ghee content.",
    "quantity": "1 bowl",
    "bestTime": "Breakfast"
  },
  "upma": {
    "nutrients": {
      "calories": 180,
      "protein": 4,
      "carbs": 30,
      "fat": 5,
      "fiber": 2
    },
    "advantages": "Light meal.",
    "disadvantages": "Oil varies.",
    "quantity": "1 plate",
    "bestTime": "Breakfast"
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
  "veg biryani": {
    "nutrients": {
      "calories": 250,
      "protein": 6,
      "carbs": 42,
      "fat": 7,
      "fiber": 3
    },
    "advantages": "Vegetable-rich.",
    "disadvantages": "Oil content.",
    "quantity": "1 plate",
    "bestTime": "Lunch"
  },
  "chicken biryani": {
    "nutrients": {
      "calories": 290,
      "protein": 14,
      "carbs": 38,
      "fat": 10,
      "fiber": 2
    },
    "advantages": "Protein + carbs.",
    "disadvantages": "Oily.",
    "quantity": "1 plate",
    "bestTime": "Lunch"
  },
  "mutton biryani": {
    "nutrients": {
      "calories": 320,
      "protein": 18,
      "carbs": 36,
      "fat": 15,
      "fiber": 2
    },
    "advantages": "Rich flavor.",
    "disadvantages": "High fat.",
    "quantity": "1 plate",
    "bestTime": "Lunch"
  },
  "fried rice": {
    "nutrients": {
      "calories": 238,
      "protein": 4.4,
      "carbs": 34,
      "fat": 7.5,
      "fiber": 1.2
    },
    "advantages": "Filling.",
    "disadvantages": "Oil & sodium.",
    "quantity": "1 bowl",
    "bestTime": "Lunch"
  },
  "curd rice": {
    "nutrients": {
      "calories": 130,
      "protein": 4,
      "carbs": 22,
      "fat": 3,
      "fiber": 0.5
    },
    "advantages": "Cooling & easy to digest.",
    "disadvantages": "Low protein.",
    "quantity": "1 bowl",
    "bestTime": "Lunch"
  },
  "lemon rice": {
    "nutrients": {
      "calories": 180,
      "protein": 3,
      "carbs": 28,
      "fat": 5,
      "fiber": 1
    },
    "advantages": "Light meal.",
    "disadvantages": "Oil content varies.",
    "quantity": "1 plate",
    "bestTime": "Lunch"
  },
  "tomato rice": {
    "nutrients": {
      "calories": 190,
      "protein": 4,
      "carbs": 32,
      "fat": 5,
      "fiber": 2
    },
    "advantages": "Good flavor.",
    "disadvantages": "High carbs.",
    "quantity": "1 plate",
    "bestTime": "Lunch"
  },
  "bisibelebath": {
    "nutrients": {
      "calories": 180,
      "protein": 6,
      "carbs": 28,
      "fat": 4,
      "fiber": 4
    },
    "advantages": "Balanced dish.",
    "disadvantages": "Oil varies.",
    "quantity": "1 bowl",
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
  "sambar": {
    "nutrients": {
      "calories": 50,
      "protein": 2,
      "carbs": 8,
      "fat": 1,
      "fiber": 2
    },
    "advantages": "Nutritious & light.",
    "disadvantages": "None major.",
    "quantity": "1 bowl",
    "bestTime": "Any"
  },
  "rasam": {
    "nutrients": {
      "calories": 20,
      "protein": 1,
      "carbs": 4,
      "fat": 0.2,
      "fiber": 1
    },
    "advantages": "Helps digestion.",
    "disadvantages": "Spicy.",
    "quantity": "1 bowl",
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
    "quantity": "50\u2013100g",
    "bestTime": "Any"
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
  "chicken curry": {
    "nutrients": {
      "calories": 239,
      "protein": 27,
      "carbs": 0,
      "fat": 14,
      "fiber": 0
    },
    "advantages": "Good protein.",
    "disadvantages": "Oily variants.",
    "quantity": "100\u2013150g",
    "bestTime": "Lunch"
  }
};


// Script identical to previous with search + TM + MobileNet + showFoodData
let hjModel = null, mobileNet = null, webcamStream = null;
let videoEl = null, captureCanvas = null, captureCtx = null, predictInterval = null;

document.getElementById('loadBtn').addEventListener('click', async ()=>{
  const url = document.getElementById('hjModelUrl').value.trim();
  try{
    if(!url) throw new Error("Model URL empty");
    const finalUrl = url.endsWith('/') ? url : url + '/';
    hjModel = await tmImage.load(finalUrl + "model.json", finalUrl + "metadata.json");
    mobileNet = await ml5.imageClassifier("MobileNet");
    document.getElementById('startBtn').disabled = false;
  }catch(e){ alert("Load failed: "+e.message); }
});

document.getElementById('startBtn').addEventListener('click', async ()=>{
  videoEl = document.getElementById('webcam');
  captureCanvas = document.getElementById('captureCanvas');
  captureCtx = captureCanvas.getContext('2d');
  try{
    webcamStream = await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});
    videoEl.srcObject = webcamStream;
    await videoEl.play();
    document.getElementById('stopBtn').disabled = false;
    document.getElementById('snapshotBtn').disabled = false;
    document.getElementById('resultsPanel').style.display = "block";

    if(!mobileNet) mobileNet = await ml5.imageClassifier("MobileNet", videoEl);
    predictInterval = setInterval(predictFrame, 800);
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
document.getElementById('manualFood').addEventListener('keydown', e=>{
  if(e.key==="Enter") document.getElementById('searchBtn').click();
});

function populateSuggestions(){
  const dl = document.getElementById('food-suggestions');
  Object.keys(foodData).sort().forEach(k=>{
    const opt = document.createElement('option');
    opt.value = k;
    dl.appendChild(opt);
  });
}
populateSuggestions();

async function predictFrame(){
  if(!videoEl) return;
  captureCanvas.width = videoEl.videoWidth;
  captureCanvas.height = videoEl.videoHeight;
  captureCtx.drawImage(videoEl, 0, 0);

  // MobileNet detection
  let guess = null;
  try{
    const res = await mobileNet.classify(captureCanvas);
    if(res && res.length) guess = res[0].label.toLowerCase();
  }catch{}

  if(guess){
    const matched = findMatch(guess);
    if(matched) showFoodData(matched);
  }

  // Healthy/Junk model
  if(hjModel){
    try{
      const preds = await hjModel.predict(captureCanvas);
      if(preds.length){
        const best = preds.reduce((a,b)=> a.probability>b.probability?a:b);
        const badge = document.getElementById("hjBadge");
        badge.innerText = `${best.className} (${(best.probability*100).toFixed(1)}%)`;
        badge.style.color = best.className.toLowerCase().includes("healthy") ? "green" : "crimson";
      }
    }catch{}
  }
}

function lookupFoodByName(q){
  const key = findMatch(q.toLowerCase());
  if(key) showFoodData(key);
  else alert("Not found: " + q);
}

function findMatch(q){
  if(foodData[q]) return q;
  for(const key of Object.keys(foodData)){
    if(key.includes(q) || q.includes(key)) return key;
  }
  return null;
}

function showFoodData(key){
  const e = foodData[key];
  document.getElementById("resultsPanel").style.display = "block";
  document.getElementById("foodName").innerText = key;
  document.getElementById("foodConfidence").innerText = "—";
  document.getElementById("hjBadge").innerText = "—";
  document.getElementById("nutri").innerHTML =
    `Calories: ${e.nutrients.calories}<br>`+
    `Protein: ${e.nutrients.protein} g<br>`+
    `Carbs: ${e.nutrients.carbs} g<br>`+
    `Fat: ${e.nutrients.fat} g<br>`+
    `Fiber: ${e.nutrients.fiber}`;
  document.getElementById("adv").innerText = e.advantages;
  document.getElementById("disadv").innerText = e.disadvantages;
  document.getElementById("qty").innerText = e.quantity;
  document.getElementById("bestTime").innerText = e.bestTime;
}
