const foodData = {
  "apple": {
    "nutrients": {
      "calories": 52,
      "protein": 0.3,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4,
      "sugar": 10.4
    },
    "advantages": "Good for heart",
    "disadvantages": "Natural sugar",
    "quantity": "1 medium",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "banana": {
    "nutrients": {
      "calories": 89,
      "protein": 1.1,
      "carbs": 23,
      "fat": 0.3,
      "fiber": 2.6,
      "sugar": 12.2
    },
    "advantages": "Energy, potassium",
    "disadvantages": "High carbs",
    "quantity": "1 medium",
    "bestTime": "Morning",
    "category": "Healthy",
    "sugarAlert": false
  },
  "mango": {
    "nutrients": {
      "calories": 60,
      "protein": 0.8,
      "carbs": 15,
      "fat": 0.4,
      "fiber": 1.6,
      "sugar": 14
    },
    "advantages": "Vitamins A/C",
    "disadvantages": "High sugar",
    "quantity": "1 medium",
    "bestTime": "Afternoon",
    "category": "Healthy",
    "sugarAlert": false
  },
  "orange": {
    "nutrients": {
      "calories": 47,
      "protein": 0.9,
      "carbs": 12,
      "fat": 0.1,
      "fiber": 2.4,
      "sugar": 9
    },
    "advantages": "Vitamin C",
    "disadvantages": "Acidic for some",
    "quantity": "1 medium",
    "bestTime": "Morning",
    "category": "Healthy",
    "sugarAlert": false
  },
  "grapes": {
    "nutrients": {
      "calories": 69,
      "protein": 0.7,
      "carbs": 18,
      "fat": 0.2,
      "fiber": 0.9,
      "sugar": 16
    },
    "advantages": "Antioxidants",
    "disadvantages": "High sugar",
    "quantity": "100 g",
    "bestTime": "Snack",
    "category": "Healthy",
    "sugarAlert": true
  },
  "pineapple": {
    "nutrients": {
      "calories": 50,
      "protein": 0.5,
      "carbs": 13,
      "fat": 0.1,
      "fiber": 1.4,
      "sugar": 10
    },
    "advantages": "Vitamin C",
    "disadvantages": "Acidic",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "spinach": {
    "nutrients": {
      "calories": 23,
      "protein": 2.9,
      "carbs": 3.6,
      "fat": 0.4,
      "fiber": 2.2,
      "sugar": 0.4
    },
    "advantages": "Iron rich",
    "disadvantages": "Oxalates",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "potato": {
    "nutrients": {
      "calories": 77,
      "protein": 2,
      "carbs": 17,
      "fat": 0.1,
      "fiber": 2.2,
      "sugar": 0.8
    },
    "advantages": "Filling carb",
    "disadvantages": "High GI if fried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "tomato": {
    "nutrients": {
      "calories": 18,
      "protein": 0.9,
      "carbs": 3.9,
      "fat": 0.2,
      "fiber": 1.2,
      "sugar": 2.6
    },
    "advantages": "Low cal",
    "disadvantages": "Acidic for some",
    "quantity": "1 medium",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "almond": {
    "nutrients": {
      "calories": 579,
      "protein": 21,
      "carbs": 22,
      "fat": 50,
      "fiber": 12.5,
      "sugar": 4.4
    },
    "advantages": "Healthy fats",
    "disadvantages": "High cal",
    "quantity": "30 g",
    "bestTime": "Snack",
    "category": "Healthy",
    "sugarAlert": false
  },
  "walnut": {
    "nutrients": {
      "calories": 654,
      "protein": 15,
      "carbs": 14,
      "fat": 65,
      "fiber": 6.7,
      "sugar": 2.6
    },
    "advantages": "Omega-3",
    "disadvantages": "Calorie-dense",
    "quantity": "30 g",
    "bestTime": "Snack",
    "category": "Healthy",
    "sugarAlert": false
  },
  "paneer": {
    "nutrients": {
      "calories": 265,
      "protein": 18,
      "carbs": 1.2,
      "fat": 20,
      "fiber": 0,
      "sugar": 0.5
    },
    "advantages": "Protein",
    "disadvantages": "High fat",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "idli": {
    "nutrients": {
      "calories": 39,
      "protein": 2.4,
      "carbs": 7.9,
      "fat": 0.2,
      "fiber": 0.2,
      "sugar": 0.5
    },
    "advantages": "Steamed",
    "disadvantages": "Low protein alone",
    "quantity": "2 pcs",
    "bestTime": "Breakfast",
    "category": "Healthy",
    "sugarAlert": false
  },
  "dosa": {
    "nutrients": {
      "calories": 135,
      "protein": 3.5,
      "carbs": 26,
      "fat": 2.5,
      "fiber": 1.2,
      "sugar": 1.2
    },
    "advantages": "Fermented",
    "disadvantages": "Often oily sides",
    "quantity": "1",
    "bestTime": "Breakfast",
    "category": "Healthy",
    "sugarAlert": false
  },
  "pizza": {
    "nutrients": {
      "calories": 266,
      "protein": 11,
      "carbs": 33,
      "fat": 10,
      "fiber": 2.3,
      "sugar": 4
    },
    "advantages": "Tasty",
    "disadvantages": "High fat & salt",
    "quantity": "1 slice",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "burger": {
    "nutrients": {
      "calories": 295,
      "protein": 17,
      "carbs": 30,
      "fat": 12,
      "fiber": 1.5,
      "sugar": 6
    },
    "advantages": "Protein & carbs",
    "disadvantages": "High fat",
    "quantity": "1",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "fries": {
    "nutrients": {
      "calories": 312,
      "protein": 3.4,
      "carbs": 41,
      "fat": 15,
      "fiber": 3.8,
      "sugar": 0.3
    },
    "advantages": "Tasty",
    "disadvantages": "High oil",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "orange juice": {
    "nutrients": {
      "calories": 45,
      "protein": 0.7,
      "carbs": 10.4,
      "fat": 0.2,
      "fiber": 0.2,
      "sugar": 8.4
    },
    "advantages": "Hydrating",
    "disadvantages": "Low fibre",
    "quantity": "200 ml",
    "bestTime": "Morning",
    "category": "Moderate",
    "sugarAlert": false
  },
  "cola": {
    "nutrients": {
      "calories": 42,
      "protein": 0,
      "carbs": 10.6,
      "fat": 0,
      "fiber": 0,
      "sugar": 10.6
    },
    "advantages": "Refreshment",
    "disadvantages": "High sugar",
    "quantity": "330 ml",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "ice cream": {
    "nutrients": {
      "calories": 207,
      "protein": 3.5,
      "carbs": 24,
      "fat": 11,
      "fiber": 0.7,
      "sugar": 21
    },
    "advantages": "Calcium",
    "disadvantages": "High sugar",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "apple dried": {
    "nutrients": {
      "calories": 300,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 40
    },
    "advantages": "Good (dried)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": true
  },
  "banana dried": {
    "nutrients": {
      "calories": 300,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 40
    },
    "advantages": "Good (dried)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": true
  },
  "mango dried": {
    "nutrients": {
      "calories": 300,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 40
    },
    "advantages": "Good (dried)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": true
  },
  "orange dried": {
    "nutrients": {
      "calories": 300,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 40
    },
    "advantages": "Good (dried)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": true
  },
  "grapes dried": {
    "nutrients": {
      "calories": 300,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 40
    },
    "advantages": "Good (dried)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": true
  },
  "pineapple dried": {
    "nutrients": {
      "calories": 300,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 40
    },
    "advantages": "Good (dried)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": true
  },
  "pear": {
    "nutrients": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 10
    },
    "advantages": "Good (fresh)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "pear dried": {
    "nutrients": {
      "calories": 300,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 40
    },
    "advantages": "Good (dried)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": true
  },
  "peach": {
    "nutrients": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 10
    },
    "advantages": "Good (fresh)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "peach dried": {
    "nutrients": {
      "calories": 300,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 40
    },
    "advantages": "Good (dried)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": true
  },
  "plum": {
    "nutrients": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 10
    },
    "advantages": "Good (fresh)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "plum dried": {
    "nutrients": {
      "calories": 300,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 40
    },
    "advantages": "Good (dried)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": true
  },
  "kiwi": {
    "nutrients": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 10
    },
    "advantages": "Good (fresh)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "kiwi dried": {
    "nutrients": {
      "calories": 300,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 40
    },
    "advantages": "Good (dried)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": true
  },
  "papaya": {
    "nutrients": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 10
    },
    "advantages": "Good (fresh)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "papaya dried": {
    "nutrients": {
      "calories": 300,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 40
    },
    "advantages": "Good (dried)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": true
  },
  "watermelon": {
    "nutrients": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 10
    },
    "advantages": "Good (fresh)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "watermelon dried": {
    "nutrients": {
      "calories": 300,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 40
    },
    "advantages": "Good (dried)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": true
  },
  "strawberry": {
    "nutrients": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 10
    },
    "advantages": "Good (fresh)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "strawberry dried": {
    "nutrients": {
      "calories": 300,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 40
    },
    "advantages": "Good (dried)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": true
  },
  "blueberry": {
    "nutrients": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 10
    },
    "advantages": "Good (fresh)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "blueberry dried": {
    "nutrients": {
      "calories": 300,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 40
    },
    "advantages": "Good (dried)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": true
  },
  "cherry": {
    "nutrients": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 10
    },
    "advantages": "Good (fresh)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "cherry dried": {
    "nutrients": {
      "calories": 300,
      "protein": 1,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 1,
      "sugar": 40
    },
    "advantages": "Good (dried)",
    "disadvantages": "Watch sugar in dried",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": true
  },
  "aloo paratha": {
    "nutrients": {
      "calories": 262,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "samosa": {
    "nutrients": {
      "calories": 256,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "gulab jamun": {
    "nutrients": {
      "calories": 261,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 25
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "jalebi": {
    "nutrients": {
      "calories": 256,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 25
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "pani puri": {
    "nutrients": {
      "calories": 259,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "bhel puri": {
    "nutrients": {
      "calories": 259,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "sev puri": {
    "nutrients": {
      "calories": 258,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "pav bhaji": {
    "nutrients": {
      "calories": 259,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "vada pav": {
    "nutrients": {
      "calories": 258,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "kachori": {
    "nutrients": {
      "calories": 257,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "chole bhature": {
    "nutrients": {
      "calories": 263,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "paratha": {
    "nutrients": {
      "calories": 257,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "poori": {
    "nutrients": {
      "calories": 255,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "misal pav": {
    "nutrients": {
      "calories": 259,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "bhature": {
    "nutrients": {
      "calories": 257,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "rasgulla": {
    "nutrients": {
      "calories": 258,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 25
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "rasmalai": {
    "nutrients": {
      "calories": 258,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 25
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "kheer": {
    "nutrients": {
      "calories": 255,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 25
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "halwa": {
    "nutrients": {
      "calories": 255,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 25
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "gajar halwa": {
    "nutrients": {
      "calories": 261,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "ladoo": {
    "nutrients": {
      "calories": 255,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 25
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "barfi": {
    "nutrients": {
      "calories": 255,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 25
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "peda": {
    "nutrients": {
      "calories": 254,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 25
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "modak": {
    "nutrients": {
      "calories": 255,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 25
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "dhokla": {
    "nutrients": {
      "calories": 256,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "thepla": {
    "nutrients": {
      "calories": 256,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "undhiyu": {
    "nutrients": {
      "calories": 257,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "puran poli": {
    "nutrients": {
      "calories": 260,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "bisi bele bath": {
    "nutrients": {
      "calories": 264,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "upma": {
    "nutrients": {
      "calories": 254,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "poha": {
    "nutrients": {
      "calories": 254,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "pongal": {
    "nutrients": {
      "calories": 256,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "pongal (sweet)": {
    "nutrients": {
      "calories": 264,
      "protein": 6,
      "carbs": 30,
      "fat": 12,
      "fiber": 2,
      "sugar": 25
    },
    "advantages": "Traditional dish",
    "disadvantages": "Varies by prep",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "sushi": {
    "nutrients": {
      "calories": 205,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "pasta": {
    "nutrients": {
      "calories": 205,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "lasagna": {
    "nutrients": {
      "calories": 207,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "risotto": {
    "nutrients": {
      "calories": 207,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "tiramisu": {
    "nutrients": {
      "calories": 208,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 25
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "brownie": {
    "nutrients": {
      "calories": 207,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 25
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "cheesecake": {
    "nutrients": {
      "calories": 210,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 25
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "donut": {
    "nutrients": {
      "calories": 205,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 25
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "bagel": {
    "nutrients": {
      "calories": 205,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "pancake with syrup": {
    "nutrients": {
      "calories": 218,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 25
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "waffle": {
    "nutrients": {
      "calories": 206,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "burger king burger": {
    "nutrients": {
      "calories": 218,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "double cheeseburger": {
    "nutrients": {
      "calories": 219,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "hot dog": {
    "nutrients": {
      "calories": 207,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "nachos": {
    "nutrients": {
      "calories": 206,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "taco": {
    "nutrients": {
      "calories": 204,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "burrito": {
    "nutrients": {
      "calories": 207,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "paella": {
    "nutrients": {
      "calories": 206,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "ratatouille": {
    "nutrients": {
      "calories": 211,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "gnocchi": {
    "nutrients": {
      "calories": 207,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "bruschetta": {
    "nutrients": {
      "calories": 210,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "focaccia": {
    "nutrients": {
      "calories": 208,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "ramen": {
    "nutrients": {
      "calories": 205,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "udon": {
    "nutrients": {
      "calories": 204,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "tempura": {
    "nutrients": {
      "calories": 207,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "spring roll": {
    "nutrients": {
      "calories": 211,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "dumplings": {
    "nutrients": {
      "calories": 209,
      "protein": 8,
      "carbs": 28,
      "fat": 10,
      "fiber": 2,
      "sugar": 5
    },
    "advantages": "Popular foreign dish",
    "disadvantages": "Often rich",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Moderate",
    "sugarAlert": false
  },
  "cheeseburger": {
    "nutrients": {
      "calories": 320,
      "protein": 15,
      "carbs": 30,
      "fat": 15,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Fast food",
    "disadvantages": "High in fat/salt",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "chicken nuggets": {
    "nutrients": {
      "calories": 320,
      "protein": 15,
      "carbs": 30,
      "fat": 15,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Fast food",
    "disadvantages": "High in fat/salt",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "mozzarella sticks": {
    "nutrients": {
      "calories": 320,
      "protein": 15,
      "carbs": 30,
      "fat": 15,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Fast food",
    "disadvantages": "High in fat/salt",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "onion rings": {
    "nutrients": {
      "calories": 320,
      "protein": 15,
      "carbs": 30,
      "fat": 15,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Fast food",
    "disadvantages": "High in fat/salt",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "chipotle burrito": {
    "nutrients": {
      "calories": 320,
      "protein": 15,
      "carbs": 30,
      "fat": 15,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Fast food",
    "disadvantages": "High in fat/salt",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "chicken pizza": {
    "nutrients": {
      "calories": 320,
      "protein": 15,
      "carbs": 30,
      "fat": 15,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Fast food",
    "disadvantages": "High in fat/salt",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "margherita pizza": {
    "nutrients": {
      "calories": 320,
      "protein": 15,
      "carbs": 30,
      "fat": 15,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Fast food",
    "disadvantages": "High in fat/salt",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "pepperoni pizza": {
    "nutrients": {
      "calories": 320,
      "protein": 15,
      "carbs": 30,
      "fat": 15,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Fast food",
    "disadvantages": "High in fat/salt",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "calzone": {
    "nutrients": {
      "calories": 320,
      "protein": 15,
      "carbs": 30,
      "fat": 15,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Fast food",
    "disadvantages": "High in fat/salt",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "wrap (veg)": {
    "nutrients": {
      "calories": 320,
      "protein": 15,
      "carbs": 30,
      "fat": 15,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Fast food",
    "disadvantages": "High in fat/salt",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "wrap (chicken)": {
    "nutrients": {
      "calories": 320,
      "protein": 15,
      "carbs": 30,
      "fat": 15,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Fast food",
    "disadvantages": "High in fat/salt",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "paneer tikka roll": {
    "nutrients": {
      "calories": 320,
      "protein": 15,
      "carbs": 30,
      "fat": 15,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Fast food",
    "disadvantages": "High in fat/salt",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "kathi roll": {
    "nutrients": {
      "calories": 320,
      "protein": 15,
      "carbs": 30,
      "fat": 15,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Fast food",
    "disadvantages": "High in fat/salt",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "mango juice": {
    "nutrients": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fat": 1,
      "fiber": 0.5,
      "sugar": 10
    },
    "advantages": "Drink",
    "disadvantages": "Watch sugar",
    "quantity": "250 ml",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "apple juice": {
    "nutrients": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fat": 1,
      "fiber": 0.5,
      "sugar": 10
    },
    "advantages": "Drink",
    "disadvantages": "Watch sugar",
    "quantity": "250 ml",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "sugarcane juice": {
    "nutrients": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fat": 1,
      "fiber": 0.5,
      "sugar": 10
    },
    "advantages": "Drink",
    "disadvantages": "Watch sugar",
    "quantity": "250 ml",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "coconut water": {
    "nutrients": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fat": 1,
      "fiber": 0.5,
      "sugar": 0
    },
    "advantages": "Drink",
    "disadvantages": "Watch sugar",
    "quantity": "250 ml",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "buttermilk": {
    "nutrients": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fat": 1,
      "fiber": 0.5,
      "sugar": 0
    },
    "advantages": "Drink",
    "disadvantages": "Watch sugar",
    "quantity": "250 ml",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "masala chai": {
    "nutrients": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fat": 1,
      "fiber": 0.5,
      "sugar": 10
    },
    "advantages": "Drink",
    "disadvantages": "Watch sugar",
    "quantity": "250 ml",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "lemonade": {
    "nutrients": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fat": 1,
      "fiber": 0.5,
      "sugar": 0
    },
    "advantages": "Drink",
    "disadvantages": "Watch sugar",
    "quantity": "250 ml",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "iced tea sweetened": {
    "nutrients": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fat": 1,
      "fiber": 0.5,
      "sugar": 0
    },
    "advantages": "Drink",
    "disadvantages": "Watch sugar",
    "quantity": "250 ml",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "iced tea unsweetened": {
    "nutrients": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fat": 1,
      "fiber": 0.5,
      "sugar": 0
    },
    "advantages": "Drink",
    "disadvantages": "Watch sugar",
    "quantity": "250 ml",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "smoothie (banana)": {
    "nutrients": {
      "calories": 55,
      "protein": 1,
      "carbs": 12,
      "fat": 1,
      "fiber": 0.5,
      "sugar": 15
    },
    "advantages": "Drink",
    "disadvantages": "Watch sugar",
    "quantity": "250 ml",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "smoothie (berry)": {
    "nutrients": {
      "calories": 55,
      "protein": 1,
      "carbs": 12,
      "fat": 1,
      "fiber": 0.5,
      "sugar": 15
    },
    "advantages": "Drink",
    "disadvantages": "Watch sugar",
    "quantity": "250 ml",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "latte": {
    "nutrients": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fat": 1,
      "fiber": 0.5,
      "sugar": 0
    },
    "advantages": "Drink",
    "disadvantages": "Watch sugar",
    "quantity": "250 ml",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "cappuccino": {
    "nutrients": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fat": 1,
      "fiber": 0.5,
      "sugar": 0
    },
    "advantages": "Drink",
    "disadvantages": "Watch sugar",
    "quantity": "250 ml",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "espresso": {
    "nutrients": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fat": 1,
      "fiber": 0.5,
      "sugar": 0
    },
    "advantages": "Drink",
    "disadvantages": "Watch sugar",
    "quantity": "250 ml",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "ice cream vanilla": {
    "nutrients": {
      "calories": 217,
      "protein": 4,
      "carbs": 30,
      "fat": 12,
      "fiber": 1,
      "sugar": 20
    },
    "advantages": "Dessert",
    "disadvantages": "High sugar",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "ice cream chocolate": {
    "nutrients": {
      "calories": 219,
      "protein": 4,
      "carbs": 30,
      "fat": 12,
      "fiber": 1,
      "sugar": 20
    },
    "advantages": "Dessert",
    "disadvantages": "High sugar",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "kulfi": {
    "nutrients": {
      "calories": 205,
      "protein": 4,
      "carbs": 30,
      "fat": 12,
      "fiber": 1,
      "sugar": 15
    },
    "advantages": "Dessert",
    "disadvantages": "High sugar",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "gulab jamun (2 pcs)": {
    "nutrients": {
      "calories": 219,
      "protein": 4,
      "carbs": 30,
      "fat": 12,
      "fiber": 1,
      "sugar": 30
    },
    "advantages": "Dessert",
    "disadvantages": "High sugar",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "jalebi small": {
    "nutrients": {
      "calories": 212,
      "protein": 4,
      "carbs": 30,
      "fat": 12,
      "fiber": 1,
      "sugar": 30
    },
    "advantages": "Dessert",
    "disadvantages": "High sugar",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "jalebi large": {
    "nutrients": {
      "calories": 212,
      "protein": 4,
      "carbs": 30,
      "fat": 12,
      "fiber": 1,
      "sugar": 30
    },
    "advantages": "Dessert",
    "disadvantages": "High sugar",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "cupcake chocolate": {
    "nutrients": {
      "calories": 217,
      "protein": 4,
      "carbs": 30,
      "fat": 12,
      "fiber": 1,
      "sugar": 20
    },
    "advantages": "Dessert",
    "disadvantages": "High sugar",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "cupcake vanilla": {
    "nutrients": {
      "calories": 215,
      "protein": 4,
      "carbs": 30,
      "fat": 12,
      "fiber": 1,
      "sugar": 20
    },
    "advantages": "Dessert",
    "disadvantages": "High sugar",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "chocolate cake slice": {
    "nutrients": {
      "calories": 220,
      "protein": 4,
      "carbs": 30,
      "fat": 12,
      "fiber": 1,
      "sugar": 20
    },
    "advantages": "Dessert",
    "disadvantages": "High sugar",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "brownie square": {
    "nutrients": {
      "calories": 214,
      "protein": 4,
      "carbs": 30,
      "fat": 12,
      "fiber": 1,
      "sugar": 15
    },
    "advantages": "Dessert",
    "disadvantages": "High sugar",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "donut chocolate": {
    "nutrients": {
      "calories": 215,
      "protein": 4,
      "carbs": 30,
      "fat": 12,
      "fiber": 1,
      "sugar": 20
    },
    "advantages": "Dessert",
    "disadvantages": "High sugar",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "donut glazed": {
    "nutrients": {
      "calories": 212,
      "protein": 4,
      "carbs": 30,
      "fat": 12,
      "fiber": 1,
      "sugar": 20
    },
    "advantages": "Dessert",
    "disadvantages": "High sugar",
    "quantity": "1 serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "red apple": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "green apple": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "smith apple": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "golden apple": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "ripe banana": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "raw banana": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "plantain": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "small banana": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "baby corn": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "okra fry": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "okra steamed": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "boiled potato": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "mashed potato": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "baked potato": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "roasted potato": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "sweet corn": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "baby spinach": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "kale": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "collard greens": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "bok choy": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "seaweed": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "arugula": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "endive": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "beet greens": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "swiss chard": {
    "nutrients": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 0.5,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Vegetable/variant",
    "disadvantages": "Depends on prep",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "roasted almond": {
    "nutrients": {
      "calories": 550,
      "protein": 18,
      "carbs": 25,
      "fat": 40,
      "fiber": 5,
      "sugar": 3
    },
    "advantages": "Nutty snack",
    "disadvantages": "High calories",
    "quantity": "30 g",
    "bestTime": "Snack",
    "category": "Healthy",
    "sugarAlert": false
  },
  "raw almond": {
    "nutrients": {
      "calories": 550,
      "protein": 18,
      "carbs": 25,
      "fat": 40,
      "fiber": 5,
      "sugar": 3
    },
    "advantages": "Nutty snack",
    "disadvantages": "High calories",
    "quantity": "30 g",
    "bestTime": "Snack",
    "category": "Healthy",
    "sugarAlert": false
  },
  "salted peanuts": {
    "nutrients": {
      "calories": 550,
      "protein": 18,
      "carbs": 25,
      "fat": 40,
      "fiber": 5,
      "sugar": 3
    },
    "advantages": "Nutty snack",
    "disadvantages": "High calories",
    "quantity": "30 g",
    "bestTime": "Snack",
    "category": "Healthy",
    "sugarAlert": false
  },
  "roasted cashew": {
    "nutrients": {
      "calories": 550,
      "protein": 18,
      "carbs": 25,
      "fat": 40,
      "fiber": 5,
      "sugar": 3
    },
    "advantages": "Nutty snack",
    "disadvantages": "High calories",
    "quantity": "30 g",
    "bestTime": "Snack",
    "category": "Healthy",
    "sugarAlert": false
  },
  "dry roasted pistachio": {
    "nutrients": {
      "calories": 550,
      "protein": 18,
      "carbs": 25,
      "fat": 40,
      "fiber": 5,
      "sugar": 3
    },
    "advantages": "Nutty snack",
    "disadvantages": "High calories",
    "quantity": "30 g",
    "bestTime": "Snack",
    "category": "Healthy",
    "sugarAlert": false
  },
  "peanut chikki": {
    "nutrients": {
      "calories": 550,
      "protein": 18,
      "carbs": 25,
      "fat": 40,
      "fiber": 5,
      "sugar": 5
    },
    "advantages": "Nutty snack",
    "disadvantages": "High calories",
    "quantity": "30 g",
    "bestTime": "Snack",
    "category": "Healthy",
    "sugarAlert": false
  },
  "sesame chikki": {
    "nutrients": {
      "calories": 550,
      "protein": 18,
      "carbs": 25,
      "fat": 40,
      "fiber": 5,
      "sugar": 5
    },
    "advantages": "Nutty snack",
    "disadvantages": "High calories",
    "quantity": "30 g",
    "bestTime": "Snack",
    "category": "Healthy",
    "sugarAlert": false
  },
  "sesame laddu": {
    "nutrients": {
      "calories": 550,
      "protein": 18,
      "carbs": 25,
      "fat": 40,
      "fiber": 5,
      "sugar": 5
    },
    "advantages": "Nutty snack",
    "disadvantages": "High calories",
    "quantity": "30 g",
    "bestTime": "Snack",
    "category": "Healthy",
    "sugarAlert": false
  },
  "til ladoo": {
    "nutrients": {
      "calories": 550,
      "protein": 18,
      "carbs": 25,
      "fat": 40,
      "fiber": 5,
      "sugar": 3
    },
    "advantages": "Nutty snack",
    "disadvantages": "High calories",
    "quantity": "30 g",
    "bestTime": "Snack",
    "category": "Healthy",
    "sugarAlert": false
  },
  "corn flakes": {
    "nutrients": {
      "calories": 350,
      "protein": 8,
      "carbs": 60,
      "fat": 5,
      "fiber": 6,
      "sugar": 2
    },
    "advantages": "Breakfast cereal",
    "disadvantages": "Check sugar",
    "quantity": "30 g",
    "bestTime": "Morning",
    "category": "Moderate",
    "sugarAlert": false
  },
  "wheat flakes": {
    "nutrients": {
      "calories": 350,
      "protein": 8,
      "carbs": 60,
      "fat": 5,
      "fiber": 6,
      "sugar": 2
    },
    "advantages": "Breakfast cereal",
    "disadvantages": "Check sugar",
    "quantity": "30 g",
    "bestTime": "Morning",
    "category": "Moderate",
    "sugarAlert": false
  },
  "oats": {
    "nutrients": {
      "calories": 350,
      "protein": 8,
      "carbs": 60,
      "fat": 5,
      "fiber": 6,
      "sugar": 2
    },
    "advantages": "Breakfast cereal",
    "disadvantages": "Check sugar",
    "quantity": "30 g",
    "bestTime": "Morning",
    "category": "Moderate",
    "sugarAlert": false
  },
  "muesli": {
    "nutrients": {
      "calories": 350,
      "protein": 8,
      "carbs": 60,
      "fat": 5,
      "fiber": 6,
      "sugar": 2
    },
    "advantages": "Breakfast cereal",
    "disadvantages": "Check sugar",
    "quantity": "30 g",
    "bestTime": "Morning",
    "category": "Moderate",
    "sugarAlert": false
  },
  "granola (low sugar)": {
    "nutrients": {
      "calories": 350,
      "protein": 8,
      "carbs": 60,
      "fat": 5,
      "fiber": 6,
      "sugar": 5
    },
    "advantages": "Breakfast cereal",
    "disadvantages": "Check sugar",
    "quantity": "30 g",
    "bestTime": "Morning",
    "category": "Moderate",
    "sugarAlert": false
  },
  "granola (sweet)": {
    "nutrients": {
      "calories": 350,
      "protein": 8,
      "carbs": 60,
      "fat": 5,
      "fiber": 6,
      "sugar": 18
    },
    "advantages": "Breakfast cereal",
    "disadvantages": "Check sugar",
    "quantity": "30 g",
    "bestTime": "Morning",
    "category": "Moderate",
    "sugarAlert": true
  },
  "porridge oats": {
    "nutrients": {
      "calories": 350,
      "protein": 8,
      "carbs": 60,
      "fat": 5,
      "fiber": 6,
      "sugar": 2
    },
    "advantages": "Breakfast cereal",
    "disadvantages": "Check sugar",
    "quantity": "30 g",
    "bestTime": "Morning",
    "category": "Moderate",
    "sugarAlert": false
  },
  "moong dal": {
    "nutrients": {
      "calories": 340,
      "protein": 22,
      "carbs": 45,
      "fat": 2,
      "fiber": 15,
      "sugar": 2
    },
    "advantages": "Plant protein",
    "disadvantages": "Requires cooking",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "toor dal": {
    "nutrients": {
      "calories": 340,
      "protein": 22,
      "carbs": 45,
      "fat": 2,
      "fiber": 15,
      "sugar": 2
    },
    "advantages": "Plant protein",
    "disadvantages": "Requires cooking",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "chana dal": {
    "nutrients": {
      "calories": 340,
      "protein": 22,
      "carbs": 45,
      "fat": 2,
      "fiber": 15,
      "sugar": 2
    },
    "advantages": "Plant protein",
    "disadvantages": "Requires cooking",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "urad dal": {
    "nutrients": {
      "calories": 340,
      "protein": 22,
      "carbs": 45,
      "fat": 2,
      "fiber": 15,
      "sugar": 2
    },
    "advantages": "Plant protein",
    "disadvantages": "Requires cooking",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "masoor dal": {
    "nutrients": {
      "calories": 340,
      "protein": 22,
      "carbs": 45,
      "fat": 2,
      "fiber": 15,
      "sugar": 2
    },
    "advantages": "Plant protein",
    "disadvantages": "Requires cooking",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "black chana": {
    "nutrients": {
      "calories": 340,
      "protein": 22,
      "carbs": 45,
      "fat": 2,
      "fiber": 15,
      "sugar": 2
    },
    "advantages": "Plant protein",
    "disadvantages": "Requires cooking",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "green moong (whole)": {
    "nutrients": {
      "calories": 340,
      "protein": 22,
      "carbs": 45,
      "fat": 2,
      "fiber": 15,
      "sugar": 2
    },
    "advantages": "Plant protein",
    "disadvantages": "Requires cooking",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "soya chunks": {
    "nutrients": {
      "calories": 340,
      "protein": 22,
      "carbs": 45,
      "fat": 2,
      "fiber": 15,
      "sugar": 2
    },
    "advantages": "Plant protein",
    "disadvantages": "Requires cooking",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "quinoa salad": {
    "nutrients": {
      "calories": 200,
      "protein": 8,
      "carbs": 20,
      "fat": 8,
      "fiber": 5,
      "sugar": 3
    },
    "advantages": "Healthy option",
    "disadvantages": "Watch dressings",
    "quantity": "1 bowl",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "greek salad": {
    "nutrients": {
      "calories": 200,
      "protein": 8,
      "carbs": 20,
      "fat": 8,
      "fiber": 5,
      "sugar": 3
    },
    "advantages": "Healthy option",
    "disadvantages": "Watch dressings",
    "quantity": "1 bowl",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "caesar salad (light)": {
    "nutrients": {
      "calories": 200,
      "protein": 8,
      "carbs": 20,
      "fat": 8,
      "fiber": 5,
      "sugar": 3
    },
    "advantages": "Healthy option",
    "disadvantages": "Watch dressings",
    "quantity": "1 bowl",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "avocado toast": {
    "nutrients": {
      "calories": 200,
      "protein": 8,
      "carbs": 20,
      "fat": 8,
      "fiber": 5,
      "sugar": 3
    },
    "advantages": "Healthy option",
    "disadvantages": "Watch dressings",
    "quantity": "1 bowl",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "hummus": {
    "nutrients": {
      "calories": 200,
      "protein": 8,
      "carbs": 20,
      "fat": 8,
      "fiber": 5,
      "sugar": 3
    },
    "advantages": "Healthy option",
    "disadvantages": "Watch dressings",
    "quantity": "1 bowl",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "tabbouleh": {
    "nutrients": {
      "calories": 200,
      "protein": 8,
      "carbs": 20,
      "fat": 8,
      "fiber": 5,
      "sugar": 3
    },
    "advantages": "Healthy option",
    "disadvantages": "Watch dressings",
    "quantity": "1 bowl",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "falafel (baked)": {
    "nutrients": {
      "calories": 200,
      "protein": 8,
      "carbs": 20,
      "fat": 8,
      "fiber": 5,
      "sugar": 3
    },
    "advantages": "Healthy option",
    "disadvantages": "Watch dressings",
    "quantity": "1 bowl",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "buddha bowl": {
    "nutrients": {
      "calories": 200,
      "protein": 8,
      "carbs": 20,
      "fat": 8,
      "fiber": 5,
      "sugar": 3
    },
    "advantages": "Healthy option",
    "disadvantages": "Watch dressings",
    "quantity": "1 bowl",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "poke bowl": {
    "nutrients": {
      "calories": 200,
      "protein": 8,
      "carbs": 20,
      "fat": 8,
      "fiber": 5,
      "sugar": 3
    },
    "advantages": "Healthy option",
    "disadvantages": "Watch dressings",
    "quantity": "1 bowl",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "grilled vegetable platter": {
    "nutrients": {
      "calories": 200,
      "protein": 8,
      "carbs": 20,
      "fat": 8,
      "fiber": 5,
      "sugar": 3
    },
    "advantages": "Healthy option",
    "disadvantages": "Watch dressings",
    "quantity": "1 bowl",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "stir fry veggies": {
    "nutrients": {
      "calories": 200,
      "protein": 8,
      "carbs": 20,
      "fat": 8,
      "fiber": 5,
      "sugar": 3
    },
    "advantages": "Healthy option",
    "disadvantages": "Watch dressings",
    "quantity": "1 bowl",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "generic food 1": {
    "nutrients": {
      "calories": 180,
      "protein": 6,
      "carbs": 25,
      "fat": 7,
      "fiber": 2,
      "sugar": 4
    },
    "advantages": "Generic food",
    "disadvantages": "Placeholder",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "generic food 2": {
    "nutrients": {
      "calories": 180,
      "protein": 6,
      "carbs": 25,
      "fat": 7,
      "fiber": 2,
      "sugar": 4
    },
    "advantages": "Generic food",
    "disadvantages": "Placeholder",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "generic food 3": {
    "nutrients": {
      "calories": 180,
      "protein": 6,
      "carbs": 25,
      "fat": 7,
      "fiber": 2,
      "sugar": 4
    },
    "advantages": "Generic food",
    "disadvantages": "Placeholder",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "generic food 4": {
    "nutrients": {
      "calories": 180,
      "protein": 6,
      "carbs": 25,
      "fat": 7,
      "fiber": 2,
      "sugar": 4
    },
    "advantages": "Generic food",
    "disadvantages": "Placeholder",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "generic food 5": {
    "nutrients": {
      "calories": 180,
      "protein": 6,
      "carbs": 25,
      "fat": 7,
      "fiber": 2,
      "sugar": 4
    },
    "advantages": "Generic food",
    "disadvantages": "Placeholder",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "generic food 6": {
    "nutrients": {
      "calories": 180,
      "protein": 6,
      "carbs": 25,
      "fat": 7,
      "fiber": 2,
      "sugar": 4
    },
    "advantages": "Generic food",
    "disadvantages": "Placeholder",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "generic food 7": {
    "nutrients": {
      "calories": 180,
      "protein": 6,
      "carbs": 25,
      "fat": 7,
      "fiber": 2,
      "sugar": 4
    },
    "advantages": "Generic food",
    "disadvantages": "Placeholder",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "generic food 8": {
    "nutrients": {
      "calories": 180,
      "protein": 6,
      "carbs": 25,
      "fat": 7,
      "fiber": 2,
      "sugar": 4
    },
    "advantages": "Generic food",
    "disadvantages": "Placeholder",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "generic food 9": {
    "nutrients": {
      "calories": 180,
      "protein": 6,
      "carbs": 25,
      "fat": 7,
      "fiber": 2,
      "sugar": 4
    },
    "advantages": "Generic food",
    "disadvantages": "Placeholder",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "generic food 10": {
    "nutrients": {
      "calories": 180,
      "protein": 6,
      "carbs": 25,
      "fat": 7,
      "fiber": 2,
      "sugar": 4
    },
    "advantages": "Generic food",
    "disadvantages": "Placeholder",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "generic food 11": {
    "nutrients": {
      "calories": 180,
      "protein": 6,
      "carbs": 25,
      "fat": 7,
      "fiber": 2,
      "sugar": 4
    },
    "advantages": "Generic food",
    "disadvantages": "Placeholder",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "generic food 12": {
    "nutrients": {
      "calories": 180,
      "protein": 6,
      "carbs": 25,
      "fat": 7,
      "fiber": 2,
      "sugar": 4
    },
    "advantages": "Generic food",
    "disadvantages": "Placeholder",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "generic food 13": {
    "nutrients": {
      "calories": 180,
      "protein": 6,
      "carbs": 25,
      "fat": 7,
      "fiber": 2,
      "sugar": 4
    },
    "advantages": "Generic food",
    "disadvantages": "Placeholder",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "generic food 14": {
    "nutrients": {
      "calories": 180,
      "protein": 6,
      "carbs": 25,
      "fat": 7,
      "fiber": 2,
      "sugar": 4
    },
    "advantages": "Generic food",
    "disadvantages": "Placeholder",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "generic food 15": {
    "nutrients": {
      "calories": 180,
      "protein": 6,
      "carbs": 25,
      "fat": 7,
      "fiber": 2,
      "sugar": 4
    },
    "advantages": "Generic food",
    "disadvantages": "Placeholder",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "generic food 16": {
    "nutrients": {
      "calories": 180,
      "protein": 6,
      "carbs": 25,
      "fat": 7,
      "fiber": 2,
      "sugar": 4
    },
    "advantages": "Generic food",
    "disadvantages": "Placeholder",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  },
  "generic food 17": {
    "nutrients": {
      "calories": 180,
      "protein": 6,
      "carbs": 25,
      "fat": 7,
      "fiber": 2,
      "sugar": 4
    },
    "advantages": "Generic food",
    "disadvantages": "Placeholder",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Moderate",
    "sugarAlert": false
  }
};


// Simple classifier script for expanded DB
let hjModel=null, mobileNet=null, videoEl=null, webcamStream=null, captureCanvas=null, captureCtx=null, predictInterval=null;
function setProgress(el,pct){ el.style.width = Math.max(0, Math.min(100, pct)) + '%'; }
document.getElementById('loadBtn').addEventListener('click', async ()=>{
  const url = document.getElementById('hjModelUrl').value.trim();
  if(!url){ alert('Please paste your Teachable Machine model URL (folder URL ending with /)'); return; }
  try{
    const finalUrl = url.endsWith('/') ? url : url + '/';
    hjModel = await tmImage.load(finalUrl + 'model.json', finalUrl + 'metadata.json');
    mobileNet = await ml5.imageClassifier('MobileNet');
    document.getElementById('startBtn').disabled = false;
    alert('Model loaded. Now click Start to enable webcam.');
  }catch(e){
    alert('Model load failed: ' + e.message);
  }
});
document.getElementById('startBtn').addEventListener('click', async ()=>{
  videoEl = document.getElementById('webcam');
  captureCanvas = document.getElementById('captureCanvas');
  captureCtx = captureCanvas.getContext('2d');
  try{
    webcamStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
    videoEl.srcObject = webcamStream;
    await videoEl.play();
    document.getElementById('webcam-container').classList.add('has-stream');
    document.getElementById('stopBtn').disabled = false;
    document.getElementById('snapshotBtn').disabled = false;
    document.getElementById('resultsPanel').style.display = 'block';
    if(!mobileNet) mobileNet = await ml5.imageClassifier('MobileNet', videoEl);
    predictInterval = setInterval(predictFrame, 1000);
  }catch(e){
    alert('Webcam error: ' + e.message);
  }
});
document.getElementById('stopBtn').addEventListener('click', ()=>{
  if(webcamStream) webcamStream.getTracks().forEach(t=>t.stop());
  if(predictInterval) clearInterval(predictInterval);
  document.getElementById('webcam-container').classList.remove('has-stream');
  document.getElementById('startBtn').disabled = false;
});
document.getElementById('snapshotBtn').addEventListener('click', predictFrame);
document.getElementById('searchBtn').addEventListener('click', ()=>{ const q = document.getElementById('manualFood').value.trim(); if(q) lookupFoodByName(q); });
document.getElementById('manualFood').addEventListener('keydown', e=>{ if(e.key === 'Enter') document.getElementById('searchBtn').click(); });
function findMatch(q){
  if(!q) return null;
  q = q.toLowerCase().trim();
  if(foodData[q]) return q;
  for(const k of Object.keys(foodData)){
    if(k.includes(q) || q.includes(k)) return k;
  }
  return null;
}
function lookupFoodByName(q){
  const key = findMatch(q);
  if(key){
    showFoodData(key);
    return key;
  } else {
    alert('Not found: ' + q);
    return null;
  }
}
async function predictFrame(){
  if(!videoEl) return;
  captureCanvas.width = videoEl.videoWidth || 640;
  captureCanvas.height = videoEl.videoHeight || 480;
  captureCtx.drawImage(videoEl, 0, 0, captureCanvas.width, captureCanvas.height);
  try{ const dataUrl = captureCanvas.toDataURL('image/jpeg', 0.7); document.getElementById('thumbPreview').innerHTML = '<img src="'+dataUrl+'" style="height:88px;border-radius:8px;object-fit:cover">'; }catch(e){}
  let foodLabel='Unknown', foodConf=0;
  try{ const res = await mobileNet.classify(captureCanvas); if(res && res.length){ foodLabel = res[0].label; foodConf = res[0].confidence; } }catch(e){}
  const canonical = findCanonicalFood(foodLabel);
  document.getElementById('foodName').innerText = canonical.displayName;
  document.getElementById('foodSub').innerText = canonical.key ? 'Matched from database' : 'Detected by MobileNet';
  document.getElementById('foodConfidence').innerText = (foodConf*100).toFixed(1) + '%';
  setProgress(document.getElementById('foodBar'), foodConf*100);
  if(hjModel){
    try{
      const preds = await hjModel.predict(captureCanvas);
      if(preds && preds.length){
        const best = preds.reduce((a,b)=> a.probability>b.probability?a:b);
        document.getElementById('categoryBadge').innerText = best.className;
      }
    }catch(e){ console.warn(e); }
  }
  if(canonical.key) showFoodData(canonical.key);
}
function showFoodData(key){
  const e = foodData[key];
  if(!e) return;
  document.getElementById('resultsPanel').style.display = 'block';
  document.getElementById('foodName').innerText = key.charAt(0).toUpperCase()+key.slice(1);
  document.getElementById('foodSub').innerText = 'Matched from database';
  document.getElementById('nutri').innerHTML = `Calories: ${e.nutrients.calories} kcal<br/>Protein: ${e.nutrients.protein} g<br/>Carbs: ${e.nutrients.carbs} g<br/>Fat: ${e.nutrients.fat} g<br/>Fiber: ${e.nutrients.fiber} g`;
  document.getElementById('adv').innerText = e.advantages;
  document.getElementById('disadv').innerText = e.disadvantages;
  document.getElementById('qty').innerText = e.quantity;
  document.getElementById('bestTime').innerText = e.bestTime;
  document.getElementById('categoryBadge').innerText = e.category;
  document.getElementById('sugarVal').innerText = (e.nutrients.sugar !== undefined ? e.nutrients.sugar + ' g per 100g' : '—');
  const sugarAlertEl = document.getElementById('sugarAlert');
  if(e.sugarAlert){ sugarAlertEl.innerHTML = '<div class="sugar-high">⚠ SUGAR ALERT — High sugar content. Limit intake.</div>'; }
  else { sugarAlertEl.innerHTML = '<div class="sugar-ok">✓ Sugar within moderate range.</div>'; }
  setProgress(document.getElementById('foodBar'), Math.min(95, e.nutrients.calories/4));
}
function findCanonicalFood(label){
  if(!label) return {key:null, displayName:label||'Unknown'};
  const simple = label.toLowerCase().split(',')[0].split(' or ')[0].split(' with ')[0].trim();
  if(foodData[simple]) return {key:simple, displayName:simple.charAt(0).toUpperCase()+simple.slice(1)};
  for(const k of Object.keys(foodData)){
    if(simple.includes(k) || k.includes(simple)) return {key:k, displayName:k.charAt(0).toUpperCase()+k.slice(1)};
  }
  return {key:null, displayName:label};
}
