
let mobilenet;
let foodDB = {'pizza': {'calories': 266, 'protein': 11, 'fat': 10, 'carbs': 33, 'advantages': 'Energy rich meal.', 'disadvantages': 'High in fat & sodium.', 'quantity': '1–2 slices'}, 'burger': {'calories': 295, 'protein': 17, 'fat': 13, 'carbs': 30, 'advantages': 'Good protein source.', 'disadvantages': 'High saturated fats.', 'quantity': '1 burger'}, 'apple': {'calories': 120, 'protein': 3, 'fat': 2, 'carbs': 22, 'advantages': 'Nutritious when consumed properly.', 'disadvantages': 'Overeating causes issues.', 'quantity': 'Moderate amount'}, 'banana': {'calories': 120, 'protein': 3, 'fat': 2, 'carbs': 22, 'advantages': 'Nutritious when consumed properly.', 'disadvantages': 'Overeating causes issues.', 'quantity': 'Moderate amount'}, 'orange': {'calories': 120, 'protein': 3, 'fat': 2, 'carbs': 22, 'advantages': 'Nutritious when consumed properly.', 'disadvantages': 'Overeating causes issues.', 'quantity': 'Moderate amount'}, 'grapes': {'calories': 120, 'protein': 3, 'fat': 2, 'carbs': 22, 'advantages': 'Nutritious when consumed properly.', 'disadvantages': 'Overeating causes issues.', 'quantity': 'Moderate amount'}, 'salad': {'calories': 120, 'protein': 3, 'fat': 2, 'carbs': 22, 'advantages': 'Nutritious when consumed properly.', 'disadvantages': 'Overeating causes issues.', 'quantity': 'Moderate amount'}, 'biryani': {'calories': 120, 'protein': 3, 'fat': 2, 'carbs': 22, 'advantages': 'Nutritious when consumed properly.', 'disadvantages': 'Overeating causes issues.', 'quantity': 'Moderate amount'}, 'rice': {'calories': 120, 'protein': 3, 'fat': 2, 'carbs': 22, 'advantages': 'Nutritious when consumed properly.', 'disadvantages': 'Overeating causes issues.', 'quantity': 'Moderate amount'}, 'idli': {'calories': 120, 'protein': 3, 'fat': 2, 'carbs': 22, 'advantages': 'Nutritious when consumed properly.', 'disadvantages': 'Overeating causes issues.', 'quantity': 'Moderate amount'}, 'dosa': {'calories': 120, 'protein': 3, 'fat': 2, 'carbs': 22, 'advantages': 'Nutritious when consumed properly.', 'disadvantages': 'Overeating causes issues.', 'quantity': 'Moderate amount'}, 'pasta': {'calories': 120, 'protein': 3, 'fat': 2, 'carbs': 22, 'advantages': 'Nutritious when consumed properly.', 'disadvantages': 'Overeating causes issues.', 'quantity': 'Moderate amount'}, 'noodles': {'calories': 120, 'protein': 3, 'fat': 2, 'carbs': 22, 'advantages': 'Nutritious when consumed properly.', 'disadvantages': 'Overeating causes issues.', 'quantity': 'Moderate amount'}, 'chicken': {'calories': 120, 'protein': 3, 'fat': 2, 'carbs': 22, 'advantages': 'Nutritious when consumed properly.', 'disadvantages': 'Overeating causes issues.', 'quantity': 'Moderate amount'}, 'fish': {'calories': 120, 'protein': 3, 'fat': 2, 'carbs': 22, 'advantages': 'Nutritious when consumed properly.', 'disadvantages': 'Overeating causes issues.', 'quantity': 'Moderate amount'}, 'paneer': {'calories': 120, 'protein': 3, 'fat': 2, 'carbs': 22, 'advantages': 'Nutritious when consumed properly.', 'disadvantages': 'Overeating causes issues.', 'quantity': 'Moderate amount'}, 'milk': {'calories': 120, 'protein': 3, 'fat': 2, 'carbs': 22, 'advantages': 'Nutritious when consumed properly.', 'disadvantages': 'Overeating causes issues.', 'quantity': 'Moderate amount'}, 'donut': {'calories': 120, 'protein': 3, 'fat': 2, 'carbs': 22, 'advantages': 'Nutritious when consumed properly.', 'disadvantages': 'Overeating causes issues.', 'quantity': 'Moderate amount'}, 'cake': {'calories': 120, 'protein': 3, 'fat': 2, 'carbs': 22, 'advantages': 'Nutritious when consumed properly.', 'disadvantages': 'Overeating causes issues.', 'quantity': 'Moderate amount'}, 'cookie': {'calories': 120, 'protein': 3, 'fat': 2, 'carbs': 22, 'advantages': 'Nutritious when consumed properly.', 'disadvantages': 'Overeating causes issues.', 'quantity': 'Moderate amount'}, 'ice cream': {'calories': 120, 'protein': 3, 'fat': 2, 'carbs': 22, 'advantages': 'Nutritious when consumed properly.', 'disadvantages': 'Overeating causes issues.', 'quantity': 'Moderate amount'}, 'sandwich': {'calories': 120, 'protein': 3, 'fat': 2, 'carbs': 22, 'advantages': 'Nutritious when consumed properly.', 'disadvantages': 'Overeating causes issues.', 'quantity': 'Moderate amount'}};

window.onload = function() {
  mobilenet = ml5.imageClassifier('MobileNet', modelLoaded);
  document.getElementById('imageUpload').addEventListener('change', classifyImage);
}

function modelLoaded() {
  console.log("MobileNet Loaded");
}

function classifyImage(event) {
  let file = event.target.files[0];
  let img = document.createElement('img');
  img.src = URL.createObjectURL(file);

  document.getElementById("preview").innerHTML = "";
  document.getElementById("preview").appendChild(img);

  img.onload = function() {
      mobilenet.classify(img, (err, results) => {
          let name = results[0].label.split(',')[0].toLowerCase();
          let data = foodDB[name] || null;

          let output = `<h2>${name.toUpperCase()}</h2>`;

          if(data) {
              output += `
                <p><b>Calories:</b> ${data.calories}</p>
                <p><b>Protein:</b> ${data.protein}</p>
                <p><b>Fat:</b> ${data.fat}</p>
                <p><b>Carbs:</b> ${data.carbs}</p>
                <p><b>Advantages:</b> ${data.advantages}</p>
                <p><b>Disadvantages:</b> ${data.disadvantages}</p>
                <p><b>Recommended Quantity:</b> ${data.quantity}</p>
              `;
          } else {
              output += `<p>No nutrition data found.</p>`;
          }

          document.getElementById("result").innerHTML = output;
      });
  }
}
