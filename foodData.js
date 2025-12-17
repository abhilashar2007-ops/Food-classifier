const foodData = [
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 173,
    "protein": 3.0,
    "carbs": 32.5,
    "fat": 1.7,
    "fiber": 12.5,
    "sugar": 3.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 102,
    "protein": 19.8,
    "carbs": 48.7,
    "fat": 11.8,
    "fiber": 8.3,
    "sugar": 6.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 463,
    "protein": 26.2,
    "carbs": 25.6,
    "fat": 33.3,
    "fiber": 3.4,
    "sugar": 29.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Orange",
    "category": "Healthy",
    "calories": 474,
    "protein": 22.0,
    "carbs": 13.9,
    "fat": 10.7,
    "fiber": 4.7,
    "sugar": 18.7,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Papaya",
    "category": "Healthy",
    "calories": 266,
    "protein": 26.1,
    "carbs": 20.1,
    "fat": 28.1,
    "fiber": 2.4,
    "sugar": 1.3,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Guava",
    "category": "Healthy",
    "calories": 177,
    "protein": 25.7,
    "carbs": 29.9,
    "fat": 11.7,
    "fiber": 9.6,
    "sugar": 38.3,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Pineapple",
    "category": "Healthy",
    "calories": 49,
    "protein": 21.0,
    "carbs": 39.7,
    "fat": 28.8,
    "fiber": 10.0,
    "sugar": 30.8,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Watermelon",
    "category": "Healthy",
    "calories": 140,
    "protein": 10.1,
    "carbs": 39.6,
    "fat": 4.2,
    "fiber": 11.4,
    "sugar": 25.5,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Grapes",
    "category": "Healthy",
    "calories": 284,
    "protein": 10.4,
    "carbs": 12.7,
    "fat": 0.4,
    "fiber": 1.0,
    "sugar": 3.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Pear",
    "category": "Healthy",
    "calories": 170,
    "protein": 10.1,
    "carbs": 53.8,
    "fat": 4.3,
    "fiber": 3.5,
    "sugar": 11.7,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Kiwi",
    "category": "Healthy",
    "calories": 372,
    "protein": 6.9,
    "carbs": 19.2,
    "fat": 32.8,
    "fiber": 11.7,
    "sugar": 4.5,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Plum",
    "category": "Healthy",
    "calories": 367,
    "protein": 17.7,
    "carbs": 60.5,
    "fat": 27.4,
    "fiber": 2.3,
    "sugar": 6.8,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Peach",
    "category": "Healthy",
    "calories": 215,
    "protein": 0.6,
    "carbs": 70.9,
    "fat": 32.1,
    "fiber": 12.9,
    "sugar": 28.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Strawberry",
    "category": "Healthy",
    "calories": 60,
    "protein": 26.9,
    "carbs": 6.3,
    "fat": 18.0,
    "fiber": 7.4,
    "sugar": 27.1,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Blueberry",
    "category": "Healthy",
    "calories": 389,
    "protein": 25.6,
    "carbs": 73.9,
    "fat": 6.4,
    "fiber": 5.9,
    "sugar": 37.1,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Raspberry",
    "category": "Healthy",
    "calories": 408,
    "protein": 9.9,
    "carbs": 69.1,
    "fat": 34.8,
    "fiber": 2.2,
    "sugar": 37.4,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Cherry",
    "category": "Healthy",
    "calories": 440,
    "protein": 14.6,
    "carbs": 28.0,
    "fat": 33.2,
    "fiber": 0.3,
    "sugar": 23.5,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Pomegranate",
    "category": "Healthy",
    "calories": 149,
    "protein": 7.7,
    "carbs": 73.2,
    "fat": 7.5,
    "fiber": 0.1,
    "sugar": 36.4,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Fig",
    "category": "Healthy",
    "calories": 39,
    "protein": 18.3,
    "carbs": 36.0,
    "fat": 25.6,
    "fiber": 9.5,
    "sugar": 1.8,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Date",
    "category": "Healthy",
    "calories": 301,
    "protein": 17.1,
    "carbs": 49.2,
    "fat": 15.3,
    "fiber": 8.7,
    "sugar": 9.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Carrot",
    "category": "Healthy",
    "calories": 364,
    "protein": 28.4,
    "carbs": 43.4,
    "fat": 14.5,
    "fiber": 1.8,
    "sugar": 17.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Spinach",
    "category": "Healthy",
    "calories": 456,
    "protein": 29.6,
    "carbs": 22.7,
    "fat": 16.2,
    "fiber": 13.1,
    "sugar": 13.7,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Broccoli",
    "category": "Healthy",
    "calories": 95,
    "protein": 27.1,
    "carbs": 23.9,
    "fat": 32.6,
    "fiber": 6.8,
    "sugar": 32.1,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Cabbage",
    "category": "Healthy",
    "calories": 375,
    "protein": 17.0,
    "carbs": 78.0,
    "fat": 7.6,
    "fiber": 2.8,
    "sugar": 22.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Cauliflower",
    "category": "Healthy",
    "calories": 449,
    "protein": 2.6,
    "carbs": 25.5,
    "fat": 23.3,
    "fiber": 2.2,
    "sugar": 12.2,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Beans",
    "category": "Healthy",
    "calories": 82,
    "protein": 19.6,
    "carbs": 57.1,
    "fat": 18.0,
    "fiber": 13.0,
    "sugar": 4.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Tomato",
    "category": "Healthy",
    "calories": 482,
    "protein": 21.6,
    "carbs": 39.3,
    "fat": 3.8,
    "fiber": 9.4,
    "sugar": 35.2,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Potato",
    "category": "Healthy",
    "calories": 377,
    "protein": 20.9,
    "carbs": 52.5,
    "fat": 34.2,
    "fiber": 7.4,
    "sugar": 3.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Onion",
    "category": "Healthy",
    "calories": 224,
    "protein": 19.8,
    "carbs": 40.7,
    "fat": 9.1,
    "fiber": 8.1,
    "sugar": 33.7,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Beetroot",
    "category": "Healthy",
    "calories": 253,
    "protein": 17.5,
    "carbs": 28.4,
    "fat": 26.5,
    "fiber": 13.5,
    "sugar": 9.8,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Pumpkin",
    "category": "Healthy",
    "calories": 188,
    "protein": 2.2,
    "carbs": 73.0,
    "fat": 21.3,
    "fiber": 5.0,
    "sugar": 9.1,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Cucumber",
    "category": "Healthy",
    "calories": 108,
    "protein": 15.0,
    "carbs": 67.7,
    "fat": 1.6,
    "fiber": 8.2,
    "sugar": 32.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Radish",
    "category": "Healthy",
    "calories": 307,
    "protein": 4.4,
    "carbs": 46.4,
    "fat": 28.0,
    "fiber": 12.2,
    "sugar": 38.7,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Brinjal",
    "category": "Healthy",
    "calories": 372,
    "protein": 8.8,
    "carbs": 20.8,
    "fat": 13.1,
    "fiber": 5.6,
    "sugar": 35.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Okra",
    "category": "Healthy",
    "calories": 346,
    "protein": 12.7,
    "carbs": 64.3,
    "fat": 4.7,
    "fiber": 6.9,
    "sugar": 32.3,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Lettuce",
    "category": "Healthy",
    "calories": 255,
    "protein": 15.5,
    "carbs": 35.5,
    "fat": 6.7,
    "fiber": 6.9,
    "sugar": 4.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Capsicum",
    "category": "Healthy",
    "calories": 183,
    "protein": 14.3,
    "carbs": 68.8,
    "fat": 13.2,
    "fiber": 10.8,
    "sugar": 33.3,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Zucchini",
    "category": "Healthy",
    "calories": 387,
    "protein": 20.7,
    "carbs": 76.4,
    "fat": 23.8,
    "fiber": 11.0,
    "sugar": 7.1,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 354,
    "protein": 17.3,
    "carbs": 67.6,
    "fat": 13.1,
    "fiber": 13.8,
    "sugar": 9.2,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Roti",
    "category": "Healthy",
    "calories": 309,
    "protein": 29.3,
    "carbs": 31.8,
    "fat": 4.5,
    "fiber": 2.8,
    "sugar": 0.2,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 258,
    "protein": 20.2,
    "carbs": 12.6,
    "fat": 12.3,
    "fiber": 5.8,
    "sugar": 39.2,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 380,
    "protein": 12.4,
    "carbs": 34.6,
    "fat": 13.7,
    "fiber": 14.9,
    "sugar": 18.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 346,
    "protein": 5.7,
    "carbs": 26.0,
    "fat": 13.2,
    "fiber": 2.1,
    "sugar": 36.4,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Sambar",
    "category": "Healthy",
    "calories": 334,
    "protein": 26.9,
    "carbs": 39.1,
    "fat": 7.4,
    "fiber": 2.8,
    "sugar": 33.7,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Rasam",
    "category": "Healthy",
    "calories": 143,
    "protein": 23.6,
    "carbs": 71.9,
    "fat": 16.3,
    "fiber": 3.1,
    "sugar": 20.3,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Dal",
    "category": "Healthy",
    "calories": 381,
    "protein": 5.2,
    "carbs": 11.1,
    "fat": 29.5,
    "fiber": 13.1,
    "sugar": 8.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Upma",
    "category": "Healthy",
    "calories": 317,
    "protein": 4.8,
    "carbs": 33.3,
    "fat": 18.4,
    "fiber": 4.2,
    "sugar": 20.5,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Poha",
    "category": "Healthy",
    "calories": 173,
    "protein": 1.0,
    "carbs": 72.4,
    "fat": 5.5,
    "fiber": 3.8,
    "sugar": 30.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Khichdi",
    "category": "Healthy",
    "calories": 231,
    "protein": 17.8,
    "carbs": 10.6,
    "fat": 6.4,
    "fiber": 13.4,
    "sugar": 21.8,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Curd Rice",
    "category": "Healthy",
    "calories": 221,
    "protein": 26.3,
    "carbs": 32.9,
    "fat": 1.9,
    "fiber": 4.7,
    "sugar": 18.7,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Pongal",
    "category": "Healthy",
    "calories": 435,
    "protein": 4.4,
    "carbs": 71.7,
    "fat": 6.0,
    "fiber": 5.4,
    "sugar": 22.5,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Vegetable Curry",
    "category": "Healthy",
    "calories": 122,
    "protein": 26.6,
    "carbs": 68.9,
    "fat": 16.1,
    "fiber": 7.8,
    "sugar": 30.7,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Lemon Rice",
    "category": "Healthy",
    "calories": 162,
    "protein": 8.0,
    "carbs": 14.4,
    "fat": 10.9,
    "fiber": 12.3,
    "sugar": 20.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Tamarind Rice",
    "category": "Healthy",
    "calories": 251,
    "protein": 29.1,
    "carbs": 79.0,
    "fat": 18.0,
    "fiber": 13.5,
    "sugar": 12.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Boiled Egg",
    "category": "Moderate",
    "calories": 116,
    "protein": 16.5,
    "carbs": 7.9,
    "fat": 30.6,
    "fiber": 12.8,
    "sugar": 37.5,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Egg Omelette",
    "category": "Moderate",
    "calories": 450,
    "protein": 3.2,
    "carbs": 77.1,
    "fat": 30.0,
    "fiber": 0.2,
    "sugar": 24.2,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 246,
    "protein": 5.2,
    "carbs": 31.8,
    "fat": 15.6,
    "fiber": 2.0,
    "sugar": 20.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Grilled Chicken",
    "category": "Moderate",
    "calories": 57,
    "protein": 11.0,
    "carbs": 61.4,
    "fat": 0.4,
    "fiber": 2.9,
    "sugar": 25.5,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Fish Curry",
    "category": "Moderate",
    "calories": 109,
    "protein": 26.7,
    "carbs": 75.4,
    "fat": 25.3,
    "fiber": 9.7,
    "sugar": 6.4,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Grilled Fish",
    "category": "Moderate",
    "calories": 443,
    "protein": 3.3,
    "carbs": 38.7,
    "fat": 23.5,
    "fiber": 14.3,
    "sugar": 17.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Mutton Curry",
    "category": "Moderate",
    "calories": 159,
    "protein": 15.3,
    "carbs": 71.1,
    "fat": 12.4,
    "fiber": 2.9,
    "sugar": 29.8,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Chicken Biryani",
    "category": "Moderate",
    "calories": 231,
    "protein": 25.4,
    "carbs": 76.8,
    "fat": 14.2,
    "fiber": 9.3,
    "sugar": 7.2,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Fish Fry",
    "category": "Moderate",
    "calories": 490,
    "protein": 23.9,
    "carbs": 73.6,
    "fat": 30.6,
    "fiber": 8.1,
    "sugar": 18.1,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Egg Curry",
    "category": "Moderate",
    "calories": 287,
    "protein": 26.5,
    "carbs": 28.8,
    "fat": 22.3,
    "fiber": 7.4,
    "sugar": 14.8,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Pasta",
    "category": "Moderate",
    "calories": 55,
    "protein": 17.9,
    "carbs": 54.2,
    "fat": 19.9,
    "fiber": 14.9,
    "sugar": 31.6,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Lasagna",
    "category": "Moderate",
    "calories": 90,
    "protein": 15.1,
    "carbs": 47.5,
    "fat": 17.1,
    "fiber": 0.7,
    "sugar": 3.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Noodles",
    "category": "Moderate",
    "calories": 183,
    "protein": 7.7,
    "carbs": 25.8,
    "fat": 18.8,
    "fiber": 9.7,
    "sugar": 20.8,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Ramen",
    "category": "Moderate",
    "calories": 171,
    "protein": 9.4,
    "carbs": 38.1,
    "fat": 31.3,
    "fiber": 0.3,
    "sugar": 12.2,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Sushi",
    "category": "Moderate",
    "calories": 460,
    "protein": 29.2,
    "carbs": 26.0,
    "fat": 16.8,
    "fiber": 4.5,
    "sugar": 27.3,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Taco",
    "category": "Moderate",
    "calories": 476,
    "protein": 4.2,
    "carbs": 44.5,
    "fat": 15.5,
    "fiber": 8.8,
    "sugar": 31.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Burrito",
    "category": "Moderate",
    "calories": 62,
    "protein": 2.2,
    "carbs": 33.0,
    "fat": 12.9,
    "fiber": 14.2,
    "sugar": 38.1,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Hot Dog",
    "category": "Moderate",
    "calories": 485,
    "protein": 23.9,
    "carbs": 66.8,
    "fat": 31.4,
    "fiber": 13.1,
    "sugar": 8.2,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Sandwich",
    "category": "Moderate",
    "calories": 178,
    "protein": 12.7,
    "carbs": 41.2,
    "fat": 8.4,
    "fiber": 8.4,
    "sugar": 27.0,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Fried Rice",
    "category": "Moderate",
    "calories": 221,
    "protein": 10.0,
    "carbs": 36.3,
    "fat": 2.1,
    "fiber": 9.1,
    "sugar": 9.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Steak",
    "category": "Moderate",
    "calories": 155,
    "protein": 23.9,
    "carbs": 76.2,
    "fat": 25.4,
    "fiber": 2.8,
    "sugar": 24.1,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Roast Chicken",
    "category": "Moderate",
    "calories": 367,
    "protein": 15.1,
    "carbs": 30.9,
    "fat": 17.0,
    "fiber": 7.7,
    "sugar": 16.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Mashed Potato",
    "category": "Moderate",
    "calories": 198,
    "protein": 23.9,
    "carbs": 70.7,
    "fat": 25.8,
    "fiber": 14.5,
    "sugar": 36.4,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Grilled Salmon",
    "category": "Moderate",
    "calories": 172,
    "protein": 20.7,
    "carbs": 37.0,
    "fat": 25.0,
    "fiber": 11.7,
    "sugar": 38.8,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 428,
    "protein": 14.1,
    "carbs": 11.1,
    "fat": 16.0,
    "fiber": 14.3,
    "sugar": 7.8,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 451,
    "protein": 7.6,
    "carbs": 27.1,
    "fat": 25.3,
    "fiber": 7.5,
    "sugar": 22.0,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "French Fries",
    "category": "Junk",
    "calories": 168,
    "protein": 26.8,
    "carbs": 24.4,
    "fat": 0.9,
    "fiber": 7.6,
    "sugar": 5.0,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 170,
    "protein": 19.9,
    "carbs": 61.1,
    "fat": 1.2,
    "fiber": 7.4,
    "sugar": 6.9,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Pakoda",
    "category": "Junk",
    "calories": 447,
    "protein": 14.4,
    "carbs": 23.6,
    "fat": 24.8,
    "fiber": 0.5,
    "sugar": 30.5,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Fried Chicken",
    "category": "Junk",
    "calories": 145,
    "protein": 5.0,
    "carbs": 13.9,
    "fat": 21.0,
    "fiber": 10.7,
    "sugar": 16.9,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Cake",
    "category": "Junk",
    "calories": 193,
    "protein": 26.6,
    "carbs": 63.1,
    "fat": 19.1,
    "fiber": 9.4,
    "sugar": 1.9,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Donut",
    "category": "Junk",
    "calories": 227,
    "protein": 29.9,
    "carbs": 67.4,
    "fat": 13.5,
    "fiber": 14.1,
    "sugar": 17.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Ice Cream",
    "category": "Junk",
    "calories": 99,
    "protein": 3.7,
    "carbs": 37.2,
    "fat": 25.7,
    "fiber": 11.8,
    "sugar": 3.1,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Soft Drink",
    "category": "Junk",
    "calories": 148,
    "protein": 5.4,
    "carbs": 53.7,
    "fat": 34.6,
    "fiber": 4.0,
    "sugar": 16.0,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Energy Drink",
    "category": "Junk",
    "calories": 252,
    "protein": 25.2,
    "carbs": 40.1,
    "fat": 6.2,
    "fiber": 13.6,
    "sugar": 15.2,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Chocolate",
    "category": "Junk",
    "calories": 79,
    "protein": 5.2,
    "carbs": 21.9,
    "fat": 20.9,
    "fiber": 13.4,
    "sugar": 34.1,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Pastry",
    "category": "Junk",
    "calories": 331,
    "protein": 26.5,
    "carbs": 74.1,
    "fat": 16.0,
    "fiber": 6.3,
    "sugar": 36.5,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Milkshake",
    "category": "Junk",
    "calories": 499,
    "protein": 24.9,
    "carbs": 35.6,
    "fat": 27.5,
    "fiber": 6.2,
    "sugar": 17.7,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Ice Cream (Hyderabadi)",
    "category": "Junk",
    "calories": 234,
    "protein": 12.1,
    "carbs": 66.2,
    "fat": 1.1,
    "fiber": 7.4,
    "sugar": 36.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Cabbage (South Indian)",
    "category": "Healthy",
    "calories": 208,
    "protein": 20.9,
    "carbs": 37.5,
    "fat": 8.6,
    "fiber": 9.3,
    "sugar": 13.2,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Noodles (Punjabi)",
    "category": "Healthy",
    "calories": 375,
    "protein": 28.6,
    "carbs": 66.9,
    "fat": 19.8,
    "fiber": 0.1,
    "sugar": 9.2,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Cake (Fried)",
    "category": "Moderate",
    "calories": 403,
    "protein": 24.3,
    "carbs": 70.5,
    "fat": 25.2,
    "fiber": 13.7,
    "sugar": 27.6,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Khichdi (Spicy)",
    "category": "Junk",
    "calories": 485,
    "protein": 19.5,
    "carbs": 35.0,
    "fat": 17.6,
    "fiber": 4.4,
    "sugar": 3.8,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Beetroot (Grilled)",
    "category": "Healthy",
    "calories": 84,
    "protein": 9.2,
    "carbs": 16.7,
    "fat": 34.5,
    "fiber": 10.6,
    "sugar": 29.5,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Idli (North Indian)",
    "category": "Junk",
    "calories": 175,
    "protein": 5.8,
    "carbs": 73.9,
    "fat": 20.4,
    "fiber": 11.3,
    "sugar": 16.2,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Spinach (Spicy)",
    "category": "Junk",
    "calories": 364,
    "protein": 16.1,
    "carbs": 29.4,
    "fat": 24.6,
    "fiber": 13.0,
    "sugar": 30.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Vegetable Curry (Spicy)",
    "category": "Moderate",
    "calories": 408,
    "protein": 6.5,
    "carbs": 52.7,
    "fat": 26.2,
    "fiber": 11.8,
    "sugar": 33.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Upma (North Indian)",
    "category": "Healthy",
    "calories": 269,
    "protein": 24.6,
    "carbs": 42.2,
    "fat": 5.0,
    "fiber": 6.1,
    "sugar": 7.2,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Rasam (North Indian)",
    "category": "Junk",
    "calories": 260,
    "protein": 28.9,
    "carbs": 73.3,
    "fat": 32.0,
    "fiber": 5.5,
    "sugar": 20.3,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Okra (Fried)",
    "category": "Moderate",
    "calories": 337,
    "protein": 12.4,
    "carbs": 32.3,
    "fat": 23.6,
    "fiber": 4.9,
    "sugar": 14.0,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Taco (Punjabi)",
    "category": "Junk",
    "calories": 483,
    "protein": 11.3,
    "carbs": 35.8,
    "fat": 26.8,
    "fiber": 7.2,
    "sugar": 5.3,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Tomato (Home Style)",
    "category": "Healthy",
    "calories": 37,
    "protein": 12.8,
    "carbs": 65.1,
    "fat": 17.0,
    "fiber": 5.4,
    "sugar": 11.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Fried Rice (Spicy)",
    "category": "Junk",
    "calories": 453,
    "protein": 5.6,
    "carbs": 69.1,
    "fat": 33.6,
    "fiber": 3.1,
    "sugar": 31.7,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Lasagna (South Indian)",
    "category": "Healthy",
    "calories": 322,
    "protein": 21.7,
    "carbs": 33.5,
    "fat": 24.3,
    "fiber": 12.8,
    "sugar": 38.2,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Cauliflower (Kerala Style)",
    "category": "Junk",
    "calories": 500,
    "protein": 15.2,
    "carbs": 78.0,
    "fat": 18.1,
    "fiber": 12.8,
    "sugar": 37.8,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Egg Omelette (Fried)",
    "category": "Healthy",
    "calories": 451,
    "protein": 18.5,
    "carbs": 53.0,
    "fat": 9.9,
    "fiber": 12.4,
    "sugar": 24.8,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Carrot (Spicy)",
    "category": "Junk",
    "calories": 188,
    "protein": 3.7,
    "carbs": 31.9,
    "fat": 27.5,
    "fiber": 0.2,
    "sugar": 30.1,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Banana (Hyderabadi)",
    "category": "Moderate",
    "calories": 115,
    "protein": 2.8,
    "carbs": 43.0,
    "fat": 8.2,
    "fiber": 14.7,
    "sugar": 20.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Grapes (Fried)",
    "category": "Moderate",
    "calories": 58,
    "protein": 8.2,
    "carbs": 73.9,
    "fat": 1.2,
    "fiber": 3.6,
    "sugar": 29.6,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Mashed Potato (Punjabi)",
    "category": "Moderate",
    "calories": 310,
    "protein": 4.0,
    "carbs": 69.3,
    "fat": 9.5,
    "fiber": 12.1,
    "sugar": 32.2,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Idli (Grilled)",
    "category": "Junk",
    "calories": 301,
    "protein": 19.9,
    "carbs": 35.7,
    "fat": 25.8,
    "fiber": 12.2,
    "sugar": 28.8,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Noodles (Home Style)",
    "category": "Moderate",
    "calories": 144,
    "protein": 5.2,
    "carbs": 78.9,
    "fat": 27.2,
    "fiber": 2.5,
    "sugar": 23.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Soft Drink (North Indian)",
    "category": "Junk",
    "calories": 473,
    "protein": 28.8,
    "carbs": 67.2,
    "fat": 15.9,
    "fiber": 1.0,
    "sugar": 32.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Upma (Hyderabadi)",
    "category": "Moderate",
    "calories": 392,
    "protein": 4.5,
    "carbs": 27.1,
    "fat": 24.3,
    "fiber": 5.8,
    "sugar": 0.1,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Beans (Spicy)",
    "category": "Junk",
    "calories": 191,
    "protein": 9.2,
    "carbs": 42.2,
    "fat": 18.8,
    "fiber": 11.9,
    "sugar": 39.5,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Apple (Steamed)",
    "category": "Moderate",
    "calories": 295,
    "protein": 13.1,
    "carbs": 29.9,
    "fat": 18.6,
    "fiber": 11.2,
    "sugar": 12.1,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Sandwich (Grilled)",
    "category": "Moderate",
    "calories": 41,
    "protein": 13.1,
    "carbs": 65.4,
    "fat": 17.1,
    "fiber": 11.9,
    "sugar": 28.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Steak (South Indian)",
    "category": "Moderate",
    "calories": 135,
    "protein": 27.7,
    "carbs": 54.3,
    "fat": 28.3,
    "fiber": 0.3,
    "sugar": 13.1,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Sandwich (Home Style)",
    "category": "Moderate",
    "calories": 279,
    "protein": 7.0,
    "carbs": 43.7,
    "fat": 34.0,
    "fiber": 10.7,
    "sugar": 29.6,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Egg Omelette (Steamed)",
    "category": "Junk",
    "calories": 440,
    "protein": 9.2,
    "carbs": 65.6,
    "fat": 23.7,
    "fiber": 1.1,
    "sugar": 2.0,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Papaya (Grilled)",
    "category": "Healthy",
    "calories": 35,
    "protein": 28.8,
    "carbs": 58.3,
    "fat": 23.1,
    "fiber": 2.3,
    "sugar": 33.5,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Spinach (Hyderabadi)",
    "category": "Moderate",
    "calories": 208,
    "protein": 20.2,
    "carbs": 21.6,
    "fat": 29.1,
    "fiber": 11.7,
    "sugar": 4.5,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Pasta (Grilled)",
    "category": "Junk",
    "calories": 118,
    "protein": 21.7,
    "carbs": 28.8,
    "fat": 23.6,
    "fiber": 12.3,
    "sugar": 22.8,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Egg Omelette (Kerala Style)",
    "category": "Junk",
    "calories": 172,
    "protein": 1.0,
    "carbs": 56.4,
    "fat": 20.6,
    "fiber": 4.3,
    "sugar": 10.8,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Capsicum (Kerala Style)",
    "category": "Junk",
    "calories": 294,
    "protein": 14.2,
    "carbs": 69.0,
    "fat": 29.6,
    "fiber": 12.8,
    "sugar": 15.0,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Carrot (Home Style)",
    "category": "Junk",
    "calories": 163,
    "protein": 4.9,
    "carbs": 33.0,
    "fat": 12.0,
    "fiber": 8.2,
    "sugar": 11.9,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Capsicum (Hyderabadi)",
    "category": "Healthy",
    "calories": 39,
    "protein": 25.0,
    "carbs": 18.9,
    "fat": 17.3,
    "fiber": 10.2,
    "sugar": 36.7,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Grilled Salmon (North Indian)",
    "category": "Moderate",
    "calories": 69,
    "protein": 17.7,
    "carbs": 49.2,
    "fat": 16.3,
    "fiber": 2.3,
    "sugar": 30.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Burger (Home Style)",
    "category": "Healthy",
    "calories": 482,
    "protein": 6.1,
    "carbs": 47.1,
    "fat": 24.0,
    "fiber": 14.8,
    "sugar": 32.8,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Curd Rice (South Indian)",
    "category": "Moderate",
    "calories": 497,
    "protein": 12.3,
    "carbs": 74.0,
    "fat": 10.7,
    "fiber": 10.4,
    "sugar": 39.1,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Grilled Chicken (South Indian)",
    "category": "Moderate",
    "calories": 322,
    "protein": 8.9,
    "carbs": 59.7,
    "fat": 3.9,
    "fiber": 2.6,
    "sugar": 16.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Guava (Kerala Style)",
    "category": "Moderate",
    "calories": 298,
    "protein": 26.2,
    "carbs": 65.5,
    "fat": 4.1,
    "fiber": 3.9,
    "sugar": 9.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Pongal (South Indian)",
    "category": "Moderate",
    "calories": 256,
    "protein": 23.9,
    "carbs": 74.4,
    "fat": 21.0,
    "fiber": 11.6,
    "sugar": 2.6,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Mango (North Indian)",
    "category": "Healthy",
    "calories": 225,
    "protein": 29.6,
    "carbs": 5.9,
    "fat": 9.5,
    "fiber": 13.8,
    "sugar": 10.2,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Lettuce (Spicy)",
    "category": "Healthy",
    "calories": 304,
    "protein": 4.6,
    "carbs": 41.0,
    "fat": 27.9,
    "fiber": 10.1,
    "sugar": 1.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Taco (Spicy)",
    "category": "Moderate",
    "calories": 100,
    "protein": 26.4,
    "carbs": 24.2,
    "fat": 33.8,
    "fiber": 10.9,
    "sugar": 1.6,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Sambar (Spicy)",
    "category": "Healthy",
    "calories": 111,
    "protein": 27.2,
    "carbs": 15.8,
    "fat": 6.0,
    "fiber": 13.3,
    "sugar": 13.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Potato (Kerala Style)",
    "category": "Junk",
    "calories": 327,
    "protein": 28.4,
    "carbs": 70.1,
    "fat": 24.3,
    "fiber": 11.8,
    "sugar": 5.3,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Grapes (Home Style)",
    "category": "Healthy",
    "calories": 183,
    "protein": 10.6,
    "carbs": 65.5,
    "fat": 34.9,
    "fiber": 4.8,
    "sugar": 9.1,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Guava (North Indian)",
    "category": "Junk",
    "calories": 354,
    "protein": 22.5,
    "carbs": 43.6,
    "fat": 14.4,
    "fiber": 1.5,
    "sugar": 12.5,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Grilled Chicken (Grilled)",
    "category": "Moderate",
    "calories": 48,
    "protein": 25.1,
    "carbs": 41.8,
    "fat": 30.0,
    "fiber": 12.3,
    "sugar": 2.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Plum (Kerala Style)",
    "category": "Junk",
    "calories": 459,
    "protein": 29.2,
    "carbs": 20.2,
    "fat": 0.8,
    "fiber": 2.5,
    "sugar": 1.5,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Chapati (North Indian)",
    "category": "Moderate",
    "calories": 336,
    "protein": 20.4,
    "carbs": 37.0,
    "fat": 31.2,
    "fiber": 7.7,
    "sugar": 31.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Banana (South Indian)",
    "category": "Moderate",
    "calories": 398,
    "protein": 10.4,
    "carbs": 21.2,
    "fat": 29.0,
    "fiber": 5.1,
    "sugar": 34.5,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Pizza (Spicy)",
    "category": "Moderate",
    "calories": 366,
    "protein": 23.1,
    "carbs": 41.6,
    "fat": 8.9,
    "fiber": 5.5,
    "sugar": 9.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Pakoda (Kerala Style)",
    "category": "Moderate",
    "calories": 394,
    "protein": 5.0,
    "carbs": 8.3,
    "fat": 17.8,
    "fiber": 8.9,
    "sugar": 21.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Mashed Potato (North Indian)",
    "category": "Junk",
    "calories": 79,
    "protein": 28.3,
    "carbs": 53.0,
    "fat": 14.3,
    "fiber": 1.6,
    "sugar": 19.2,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Noodles (Grilled)",
    "category": "Healthy",
    "calories": 285,
    "protein": 0.8,
    "carbs": 11.3,
    "fat": 25.8,
    "fiber": 7.1,
    "sugar": 31.8,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Pakoda (Steamed)",
    "category": "Moderate",
    "calories": 138,
    "protein": 16.5,
    "carbs": 27.7,
    "fat": 5.0,
    "fiber": 1.9,
    "sugar": 7.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Pakoda (South Indian)",
    "category": "Moderate",
    "calories": 89,
    "protein": 4.6,
    "carbs": 66.4,
    "fat": 23.4,
    "fiber": 3.6,
    "sugar": 9.1,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Banana (Fried)",
    "category": "Healthy",
    "calories": 378,
    "protein": 16.1,
    "carbs": 19.1,
    "fat": 12.3,
    "fiber": 9.3,
    "sugar": 16.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Rice (Fried)",
    "category": "Healthy",
    "calories": 191,
    "protein": 4.5,
    "carbs": 67.1,
    "fat": 29.9,
    "fiber": 10.2,
    "sugar": 27.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Egg Curry (Steamed)",
    "category": "Junk",
    "calories": 410,
    "protein": 11.6,
    "carbs": 21.4,
    "fat": 6.2,
    "fiber": 11.6,
    "sugar": 24.8,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Sandwich (Fried)",
    "category": "Junk",
    "calories": 42,
    "protein": 24.7,
    "carbs": 78.7,
    "fat": 7.1,
    "fiber": 4.7,
    "sugar": 10.2,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Fish Fry (Grilled)",
    "category": "Moderate",
    "calories": 224,
    "protein": 18.7,
    "carbs": 41.6,
    "fat": 28.5,
    "fiber": 0.6,
    "sugar": 38.4,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Khichdi (Punjabi)",
    "category": "Junk",
    "calories": 182,
    "protein": 24.2,
    "carbs": 74.3,
    "fat": 34.3,
    "fiber": 3.1,
    "sugar": 10.3,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Fried Chicken (Kerala Style)",
    "category": "Junk",
    "calories": 435,
    "protein": 2.0,
    "carbs": 79.5,
    "fat": 9.9,
    "fiber": 9.2,
    "sugar": 36.7,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Carrot (Grilled)",
    "category": "Healthy",
    "calories": 387,
    "protein": 23.3,
    "carbs": 28.1,
    "fat": 23.1,
    "fiber": 10.7,
    "sugar": 18.1,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Sandwich (Steamed)",
    "category": "Moderate",
    "calories": 244,
    "protein": 18.9,
    "carbs": 24.6,
    "fat": 8.4,
    "fiber": 12.1,
    "sugar": 23.1,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Strawberry (Fried)",
    "category": "Moderate",
    "calories": 441,
    "protein": 23.8,
    "carbs": 68.0,
    "fat": 12.3,
    "fiber": 1.2,
    "sugar": 19.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Egg Curry (Kerala Style)",
    "category": "Moderate",
    "calories": 67,
    "protein": 25.2,
    "carbs": 11.1,
    "fat": 33.5,
    "fiber": 0.6,
    "sugar": 15.0,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Beetroot (Home Style)",
    "category": "Junk",
    "calories": 199,
    "protein": 24.3,
    "carbs": 51.1,
    "fat": 10.1,
    "fiber": 6.9,
    "sugar": 32.8,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Mashed Potato (Kerala Style)",
    "category": "Healthy",
    "calories": 488,
    "protein": 13.7,
    "carbs": 17.4,
    "fat": 0.7,
    "fiber": 14.4,
    "sugar": 13.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Roti (Grilled)",
    "category": "Junk",
    "calories": 347,
    "protein": 11.5,
    "carbs": 26.9,
    "fat": 9.1,
    "fiber": 3.3,
    "sugar": 10.9,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Fried Chicken (Fried)",
    "category": "Healthy",
    "calories": 409,
    "protein": 13.9,
    "carbs": 35.0,
    "fat": 12.4,
    "fiber": 13.3,
    "sugar": 39.1,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Fig (Spicy)",
    "category": "Junk",
    "calories": 74,
    "protein": 19.2,
    "carbs": 21.0,
    "fat": 7.9,
    "fiber": 8.3,
    "sugar": 17.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Potato (Spicy)",
    "category": "Junk",
    "calories": 451,
    "protein": 11.2,
    "carbs": 19.9,
    "fat": 11.4,
    "fiber": 6.6,
    "sugar": 13.5,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Fried Chicken (Hyderabadi)",
    "category": "Junk",
    "calories": 232,
    "protein": 12.0,
    "carbs": 15.3,
    "fat": 12.1,
    "fiber": 6.1,
    "sugar": 34.3,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Pizza (Punjabi)",
    "category": "Junk",
    "calories": 461,
    "protein": 26.1,
    "carbs": 76.9,
    "fat": 22.9,
    "fiber": 0.5,
    "sugar": 38.2,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Upma (Punjabi)",
    "category": "Moderate",
    "calories": 443,
    "protein": 24.6,
    "carbs": 71.1,
    "fat": 5.3,
    "fiber": 1.1,
    "sugar": 11.5,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Milkshake (North Indian)",
    "category": "Moderate",
    "calories": 161,
    "protein": 16.4,
    "carbs": 54.0,
    "fat": 32.8,
    "fiber": 13.0,
    "sugar": 15.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Banana (Home Style)",
    "category": "Junk",
    "calories": 51,
    "protein": 2.4,
    "carbs": 13.3,
    "fat": 15.8,
    "fiber": 7.8,
    "sugar": 1.2,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "French Fries (Kerala Style)",
    "category": "Moderate",
    "calories": 297,
    "protein": 29.4,
    "carbs": 51.2,
    "fat": 20.1,
    "fiber": 6.4,
    "sugar": 10.2,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Roast Chicken (North Indian)",
    "category": "Junk",
    "calories": 80,
    "protein": 2.1,
    "carbs": 25.5,
    "fat": 2.1,
    "fiber": 2.0,
    "sugar": 39.5,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Soft Drink (Punjabi)",
    "category": "Moderate",
    "calories": 67,
    "protein": 13.5,
    "carbs": 32.2,
    "fat": 32.6,
    "fiber": 2.8,
    "sugar": 37.8,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Grilled Salmon (Fried)",
    "category": "Healthy",
    "calories": 359,
    "protein": 17.7,
    "carbs": 76.6,
    "fat": 24.9,
    "fiber": 1.5,
    "sugar": 11.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Grilled Chicken (Spicy)",
    "category": "Moderate",
    "calories": 387,
    "protein": 8.1,
    "carbs": 12.4,
    "fat": 20.0,
    "fiber": 2.0,
    "sugar": 25.0,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Banana (Steamed)",
    "category": "Healthy",
    "calories": 273,
    "protein": 24.9,
    "carbs": 16.8,
    "fat": 12.7,
    "fiber": 3.9,
    "sugar": 27.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Pastry (Kerala Style)",
    "category": "Healthy",
    "calories": 274,
    "protein": 12.8,
    "carbs": 63.9,
    "fat": 21.9,
    "fiber": 7.7,
    "sugar": 27.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Cucumber (Home Style)",
    "category": "Junk",
    "calories": 442,
    "protein": 16.4,
    "carbs": 31.2,
    "fat": 16.5,
    "fiber": 0.9,
    "sugar": 15.8,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Beans (Hyderabadi)",
    "category": "Healthy",
    "calories": 105,
    "protein": 28.9,
    "carbs": 33.0,
    "fat": 4.9,
    "fiber": 6.0,
    "sugar": 30.7,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Potato (Punjabi)",
    "category": "Healthy",
    "calories": 369,
    "protein": 23.1,
    "carbs": 6.6,
    "fat": 17.9,
    "fiber": 7.6,
    "sugar": 36.1,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Steak (Grilled)",
    "category": "Junk",
    "calories": 327,
    "protein": 19.1,
    "carbs": 56.2,
    "fat": 2.0,
    "fiber": 11.4,
    "sugar": 21.1,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Roast Chicken (Hyderabadi)",
    "category": "Junk",
    "calories": 228,
    "protein": 23.7,
    "carbs": 54.1,
    "fat": 19.8,
    "fiber": 9.3,
    "sugar": 29.0,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Roast Chicken (Grilled)",
    "category": "Junk",
    "calories": 363,
    "protein": 13.6,
    "carbs": 76.2,
    "fat": 2.7,
    "fiber": 6.9,
    "sugar": 28.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Fish Curry (Grilled)",
    "category": "Moderate",
    "calories": 477,
    "protein": 23.6,
    "carbs": 68.3,
    "fat": 12.0,
    "fiber": 12.8,
    "sugar": 20.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Zucchini (Hyderabadi)",
    "category": "Moderate",
    "calories": 240,
    "protein": 20.2,
    "carbs": 62.1,
    "fat": 2.5,
    "fiber": 12.2,
    "sugar": 24.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Fried Chicken (Grilled)",
    "category": "Moderate",
    "calories": 435,
    "protein": 19.9,
    "carbs": 36.2,
    "fat": 34.2,
    "fiber": 7.3,
    "sugar": 5.1,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Sambar (Hyderabadi)",
    "category": "Healthy",
    "calories": 221,
    "protein": 28.9,
    "carbs": 49.2,
    "fat": 23.5,
    "fiber": 2.8,
    "sugar": 26.7,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Lasagna (Spicy)",
    "category": "Healthy",
    "calories": 93,
    "protein": 7.8,
    "carbs": 22.5,
    "fat": 18.9,
    "fiber": 7.9,
    "sugar": 38.1,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Zucchini (Fried)",
    "category": "Moderate",
    "calories": 324,
    "protein": 19.9,
    "carbs": 79.2,
    "fat": 2.3,
    "fiber": 7.3,
    "sugar": 2.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Egg Omelette (Punjabi)",
    "category": "Healthy",
    "calories": 86,
    "protein": 14.2,
    "carbs": 16.4,
    "fat": 3.7,
    "fiber": 4.6,
    "sugar": 9.5,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Brinjal (Home Style)",
    "category": "Junk",
    "calories": 238,
    "protein": 6.5,
    "carbs": 12.2,
    "fat": 20.9,
    "fiber": 10.0,
    "sugar": 0.8,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Beans (Grilled)",
    "category": "Healthy",
    "calories": 303,
    "protein": 1.2,
    "carbs": 67.7,
    "fat": 5.8,
    "fiber": 3.6,
    "sugar": 10.2,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Steak (Spicy)",
    "category": "Junk",
    "calories": 209,
    "protein": 11.3,
    "carbs": 6.0,
    "fat": 23.2,
    "fiber": 5.0,
    "sugar": 13.8,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Burrito (Steamed)",
    "category": "Junk",
    "calories": 441,
    "protein": 22.6,
    "carbs": 21.7,
    "fat": 12.6,
    "fiber": 10.5,
    "sugar": 30.8,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Spinach (Grilled)",
    "category": "Moderate",
    "calories": 39,
    "protein": 22.4,
    "carbs": 29.1,
    "fat": 11.7,
    "fiber": 5.2,
    "sugar": 31.3,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Papaya (Punjabi)",
    "category": "Moderate",
    "calories": 379,
    "protein": 10.2,
    "carbs": 35.5,
    "fat": 28.7,
    "fiber": 12.1,
    "sugar": 36.6,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Spinach (Fried)",
    "category": "Healthy",
    "calories": 230,
    "protein": 14.0,
    "carbs": 78.2,
    "fat": 24.2,
    "fiber": 12.5,
    "sugar": 5.3,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Pastry (Punjabi)",
    "category": "Junk",
    "calories": 272,
    "protein": 4.1,
    "carbs": 42.8,
    "fat": 4.4,
    "fiber": 4.9,
    "sugar": 10.8,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Raspberry (North Indian)",
    "category": "Healthy",
    "calories": 60,
    "protein": 1.0,
    "carbs": 72.8,
    "fat": 4.5,
    "fiber": 4.4,
    "sugar": 29.4,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Pastry (Hyderabadi)",
    "category": "Junk",
    "calories": 100,
    "protein": 0.8,
    "carbs": 32.0,
    "fat": 1.9,
    "fiber": 6.8,
    "sugar": 21.2,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Mashed Potato (Spicy)",
    "category": "Healthy",
    "calories": 67,
    "protein": 20.2,
    "carbs": 79.9,
    "fat": 22.8,
    "fiber": 0.1,
    "sugar": 1.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Cabbage (Kerala Style)",
    "category": "Junk",
    "calories": 312,
    "protein": 11.1,
    "carbs": 74.7,
    "fat": 2.5,
    "fiber": 12.3,
    "sugar": 6.2,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Grilled Salmon (South Indian)",
    "category": "Healthy",
    "calories": 35,
    "protein": 29.5,
    "carbs": 53.9,
    "fat": 18.1,
    "fiber": 3.2,
    "sugar": 29.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Boiled Egg (Grilled)",
    "category": "Moderate",
    "calories": 201,
    "protein": 3.9,
    "carbs": 76.7,
    "fat": 9.8,
    "fiber": 11.0,
    "sugar": 30.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Energy Drink (Fried)",
    "category": "Junk",
    "calories": 98,
    "protein": 4.3,
    "carbs": 45.7,
    "fat": 3.7,
    "fiber": 9.4,
    "sugar": 20.3,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Papaya (Home Style)",
    "category": "Junk",
    "calories": 235,
    "protein": 3.7,
    "carbs": 77.3,
    "fat": 9.4,
    "fiber": 12.0,
    "sugar": 16.1,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Upma (Fried)",
    "category": "Healthy",
    "calories": 61,
    "protein": 7.8,
    "carbs": 48.9,
    "fat": 7.9,
    "fiber": 6.6,
    "sugar": 35.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Steak (Kerala Style)",
    "category": "Junk",
    "calories": 479,
    "protein": 11.3,
    "carbs": 9.6,
    "fat": 13.3,
    "fiber": 10.3,
    "sugar": 18.3,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Chicken Biryani (Fried)",
    "category": "Healthy",
    "calories": 467,
    "protein": 2.8,
    "carbs": 48.7,
    "fat": 21.4,
    "fiber": 0.9,
    "sugar": 27.8,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Vegetable Curry (Punjabi)",
    "category": "Junk",
    "calories": 43,
    "protein": 27.8,
    "carbs": 69.7,
    "fat": 34.2,
    "fiber": 0.6,
    "sugar": 16.1,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Strawberry (Steamed)",
    "category": "Moderate",
    "calories": 247,
    "protein": 2.5,
    "carbs": 72.8,
    "fat": 31.9,
    "fiber": 6.4,
    "sugar": 34.2,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Khichdi (Hyderabadi)",
    "category": "Healthy",
    "calories": 342,
    "protein": 20.3,
    "carbs": 17.4,
    "fat": 29.2,
    "fiber": 5.1,
    "sugar": 4.7,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Broccoli (Kerala Style)",
    "category": "Healthy",
    "calories": 455,
    "protein": 2.5,
    "carbs": 53.6,
    "fat": 13.6,
    "fiber": 6.6,
    "sugar": 22.1,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Fig (South Indian)",
    "category": "Moderate",
    "calories": 442,
    "protein": 20.0,
    "carbs": 70.4,
    "fat": 24.5,
    "fiber": 1.0,
    "sugar": 24.3,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Peach (Steamed)",
    "category": "Moderate",
    "calories": 294,
    "protein": 25.7,
    "carbs": 34.3,
    "fat": 33.9,
    "fiber": 7.3,
    "sugar": 16.1,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Orange (Steamed)",
    "category": "Junk",
    "calories": 272,
    "protein": 21.2,
    "carbs": 35.6,
    "fat": 19.9,
    "fiber": 8.2,
    "sugar": 15.1,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Boiled Egg (Home Style)",
    "category": "Junk",
    "calories": 165,
    "protein": 10.7,
    "carbs": 19.6,
    "fat": 31.1,
    "fiber": 14.1,
    "sugar": 9.8,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Lettuce (Fried)",
    "category": "Moderate",
    "calories": 258,
    "protein": 1.7,
    "carbs": 34.3,
    "fat": 34.1,
    "fiber": 7.6,
    "sugar": 22.5,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Pomegranate (Grilled)",
    "category": "Moderate",
    "calories": 241,
    "protein": 8.2,
    "carbs": 66.2,
    "fat": 22.3,
    "fiber": 14.6,
    "sugar": 20.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Orange (Home Style)",
    "category": "Moderate",
    "calories": 381,
    "protein": 22.7,
    "carbs": 68.7,
    "fat": 8.3,
    "fiber": 0.8,
    "sugar": 39.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Cabbage (Grilled)",
    "category": "Junk",
    "calories": 256,
    "protein": 17.5,
    "carbs": 42.9,
    "fat": 2.7,
    "fiber": 14.5,
    "sugar": 2.1,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Idli (Hyderabadi)",
    "category": "Junk",
    "calories": 119,
    "protein": 2.2,
    "carbs": 19.3,
    "fat": 13.2,
    "fiber": 8.0,
    "sugar": 19.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Onion (Spicy)",
    "category": "Healthy",
    "calories": 226,
    "protein": 14.5,
    "carbs": 60.7,
    "fat": 5.8,
    "fiber": 0.6,
    "sugar": 9.8,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Donut (Spicy)",
    "category": "Healthy",
    "calories": 163,
    "protein": 22.2,
    "carbs": 62.2,
    "fat": 30.4,
    "fiber": 14.8,
    "sugar": 4.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Milkshake (Spicy)",
    "category": "Junk",
    "calories": 122,
    "protein": 26.0,
    "carbs": 53.0,
    "fat": 22.8,
    "fiber": 7.1,
    "sugar": 10.2,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Dosa (Punjabi)",
    "category": "Healthy",
    "calories": 53,
    "protein": 23.1,
    "carbs": 40.8,
    "fat": 1.3,
    "fiber": 13.5,
    "sugar": 26.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "French Fries (Home Style)",
    "category": "Junk",
    "calories": 466,
    "protein": 29.1,
    "carbs": 20.4,
    "fat": 32.3,
    "fiber": 9.4,
    "sugar": 14.3,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Pakoda (Grilled)",
    "category": "Junk",
    "calories": 382,
    "protein": 12.2,
    "carbs": 72.1,
    "fat": 22.4,
    "fiber": 6.3,
    "sugar": 7.7,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Plum (Home Style)",
    "category": "Moderate",
    "calories": 175,
    "protein": 4.5,
    "carbs": 15.3,
    "fat": 28.7,
    "fiber": 6.8,
    "sugar": 3.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Cabbage (North Indian)",
    "category": "Moderate",
    "calories": 453,
    "protein": 26.4,
    "carbs": 63.4,
    "fat": 21.7,
    "fiber": 11.3,
    "sugar": 6.2,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Roti (Steamed)",
    "category": "Junk",
    "calories": 97,
    "protein": 27.6,
    "carbs": 17.3,
    "fat": 10.2,
    "fiber": 13.4,
    "sugar": 13.3,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Burger (Steamed)",
    "category": "Junk",
    "calories": 345,
    "protein": 23.7,
    "carbs": 70.5,
    "fat": 29.8,
    "fiber": 1.7,
    "sugar": 3.8,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Taco (Hyderabadi)",
    "category": "Junk",
    "calories": 479,
    "protein": 15.5,
    "carbs": 60.9,
    "fat": 30.1,
    "fiber": 8.0,
    "sugar": 14.4,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Dal (North Indian)",
    "category": "Healthy",
    "calories": 178,
    "protein": 27.3,
    "carbs": 79.8,
    "fat": 27.3,
    "fiber": 0.0,
    "sugar": 2.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Apple (Kerala Style)",
    "category": "Junk",
    "calories": 427,
    "protein": 20.6,
    "carbs": 20.6,
    "fat": 20.5,
    "fiber": 14.3,
    "sugar": 39.1,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Noodles (Steamed)",
    "category": "Junk",
    "calories": 147,
    "protein": 26.6,
    "carbs": 49.8,
    "fat": 12.2,
    "fiber": 13.0,
    "sugar": 10.5,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Dal (Home Style)",
    "category": "Healthy",
    "calories": 133,
    "protein": 29.6,
    "carbs": 55.2,
    "fat": 19.5,
    "fiber": 0.3,
    "sugar": 33.5,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Raspberry (South Indian)",
    "category": "Moderate",
    "calories": 241,
    "protein": 27.0,
    "carbs": 34.8,
    "fat": 0.3,
    "fiber": 8.6,
    "sugar": 33.3,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Ramen (Steamed)",
    "category": "Junk",
    "calories": 140,
    "protein": 8.4,
    "carbs": 77.7,
    "fat": 32.9,
    "fiber": 11.7,
    "sugar": 39.2,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Pomegranate (Spicy)",
    "category": "Healthy",
    "calories": 178,
    "protein": 5.0,
    "carbs": 66.4,
    "fat": 6.0,
    "fiber": 2.2,
    "sugar": 14.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Cherry (Kerala Style)",
    "category": "Moderate",
    "calories": 116,
    "protein": 1.2,
    "carbs": 75.1,
    "fat": 24.4,
    "fiber": 9.6,
    "sugar": 19.8,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Radish (Kerala Style)",
    "category": "Junk",
    "calories": 478,
    "protein": 0.5,
    "carbs": 28.3,
    "fat": 14.2,
    "fiber": 5.2,
    "sugar": 9.7,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Radish (Steamed)",
    "category": "Healthy",
    "calories": 466,
    "protein": 9.8,
    "carbs": 47.0,
    "fat": 15.2,
    "fiber": 4.9,
    "sugar": 20.1,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Zucchini (South Indian)",
    "category": "Healthy",
    "calories": 241,
    "protein": 18.5,
    "carbs": 33.5,
    "fat": 7.5,
    "fiber": 6.6,
    "sugar": 20.3,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Sushi (Grilled)",
    "category": "Healthy",
    "calories": 482,
    "protein": 23.1,
    "carbs": 19.7,
    "fat": 3.3,
    "fiber": 12.3,
    "sugar": 0.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Cauliflower (Hyderabadi)",
    "category": "Healthy",
    "calories": 432,
    "protein": 5.8,
    "carbs": 44.5,
    "fat": 2.6,
    "fiber": 12.5,
    "sugar": 3.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Sushi (Steamed)",
    "category": "Junk",
    "calories": 277,
    "protein": 2.6,
    "carbs": 74.9,
    "fat": 19.0,
    "fiber": 12.0,
    "sugar": 21.9,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Poha (Hyderabadi)",
    "category": "Junk",
    "calories": 406,
    "protein": 4.6,
    "carbs": 46.9,
    "fat": 13.2,
    "fiber": 12.2,
    "sugar": 9.3,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Sushi (North Indian)",
    "category": "Moderate",
    "calories": 469,
    "protein": 1.7,
    "carbs": 32.3,
    "fat": 32.9,
    "fiber": 2.0,
    "sugar": 28.5,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Cauliflower (Fried)",
    "category": "Junk",
    "calories": 331,
    "protein": 18.7,
    "carbs": 68.5,
    "fat": 8.9,
    "fiber": 3.0,
    "sugar": 9.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Rice (Kerala Style)",
    "category": "Healthy",
    "calories": 254,
    "protein": 3.2,
    "carbs": 19.7,
    "fat": 23.4,
    "fiber": 9.4,
    "sugar": 27.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Soft Drink (South Indian)",
    "category": "Junk",
    "calories": 262,
    "protein": 16.2,
    "carbs": 57.2,
    "fat": 32.5,
    "fiber": 14.2,
    "sugar": 0.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Brinjal (South Indian)",
    "category": "Healthy",
    "calories": 31,
    "protein": 18.3,
    "carbs": 44.6,
    "fat": 28.6,
    "fiber": 11.0,
    "sugar": 29.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Peach (Kerala Style)",
    "category": "Junk",
    "calories": 189,
    "protein": 15.5,
    "carbs": 56.1,
    "fat": 19.4,
    "fiber": 0.2,
    "sugar": 30.5,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Lasagna (Hyderabadi)",
    "category": "Moderate",
    "calories": 119,
    "protein": 15.8,
    "carbs": 68.2,
    "fat": 8.4,
    "fiber": 8.1,
    "sugar": 6.6,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Fig (Grilled)",
    "category": "Junk",
    "calories": 390,
    "protein": 22.4,
    "carbs": 12.9,
    "fat": 16.8,
    "fiber": 14.6,
    "sugar": 10.5,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Watermelon (Spicy)",
    "category": "Junk",
    "calories": 145,
    "protein": 1.2,
    "carbs": 7.8,
    "fat": 9.4,
    "fiber": 5.8,
    "sugar": 6.4,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Fried Chicken (Punjabi)",
    "category": "Moderate",
    "calories": 498,
    "protein": 23.4,
    "carbs": 77.6,
    "fat": 13.6,
    "fiber": 5.1,
    "sugar": 20.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Chicken Biryani (Spicy)",
    "category": "Moderate",
    "calories": 451,
    "protein": 9.7,
    "carbs": 11.3,
    "fat": 24.6,
    "fiber": 4.7,
    "sugar": 17.3,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Energy Drink (North Indian)",
    "category": "Moderate",
    "calories": 446,
    "protein": 12.0,
    "carbs": 61.6,
    "fat": 3.9,
    "fiber": 12.1,
    "sugar": 8.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Onion (Steamed)",
    "category": "Junk",
    "calories": 305,
    "protein": 16.0,
    "carbs": 32.1,
    "fat": 5.4,
    "fiber": 14.9,
    "sugar": 2.7,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Hot Dog (Home Style)",
    "category": "Moderate",
    "calories": 43,
    "protein": 17.1,
    "carbs": 68.0,
    "fat": 2.1,
    "fiber": 5.0,
    "sugar": 3.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Pomegranate (Hyderabadi)",
    "category": "Junk",
    "calories": 491,
    "protein": 23.9,
    "carbs": 36.9,
    "fat": 24.0,
    "fiber": 3.1,
    "sugar": 32.1,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Mutton Curry (Home Style)",
    "category": "Junk",
    "calories": 180,
    "protein": 14.9,
    "carbs": 23.2,
    "fat": 9.2,
    "fiber": 1.9,
    "sugar": 5.9,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Plum (Grilled)",
    "category": "Healthy",
    "calories": 375,
    "protein": 23.6,
    "carbs": 42.5,
    "fat": 28.0,
    "fiber": 3.6,
    "sugar": 33.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Pomegranate (Fried)",
    "category": "Junk",
    "calories": 285,
    "protein": 19.5,
    "carbs": 37.9,
    "fat": 27.6,
    "fiber": 13.0,
    "sugar": 34.4,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Ice Cream (Fried)",
    "category": "Healthy",
    "calories": 349,
    "protein": 15.3,
    "carbs": 70.8,
    "fat": 15.5,
    "fiber": 0.4,
    "sugar": 35.4,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Burger (Spicy)",
    "category": "Moderate",
    "calories": 31,
    "protein": 6.8,
    "carbs": 60.9,
    "fat": 9.3,
    "fiber": 14.2,
    "sugar": 22.2,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Mango (Steamed)",
    "category": "Healthy",
    "calories": 328,
    "protein": 11.9,
    "carbs": 74.1,
    "fat": 14.0,
    "fiber": 12.1,
    "sugar": 35.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Pomegranate (South Indian)",
    "category": "Junk",
    "calories": 213,
    "protein": 24.7,
    "carbs": 50.3,
    "fat": 5.1,
    "fiber": 0.7,
    "sugar": 35.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Kiwi (North Indian)",
    "category": "Junk",
    "calories": 469,
    "protein": 8.1,
    "carbs": 63.6,
    "fat": 16.8,
    "fiber": 9.9,
    "sugar": 3.3,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Steak (Steamed)",
    "category": "Junk",
    "calories": 479,
    "protein": 3.4,
    "carbs": 24.5,
    "fat": 21.6,
    "fiber": 13.9,
    "sugar": 13.5,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Lemon Rice (Grilled)",
    "category": "Junk",
    "calories": 469,
    "protein": 15.0,
    "carbs": 78.3,
    "fat": 11.4,
    "fiber": 8.5,
    "sugar": 3.9,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Date (South Indian)",
    "category": "Healthy",
    "calories": 51,
    "protein": 19.9,
    "carbs": 24.8,
    "fat": 19.7,
    "fiber": 12.3,
    "sugar": 12.8,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Lettuce (Punjabi)",
    "category": "Healthy",
    "calories": 330,
    "protein": 11.3,
    "carbs": 18.6,
    "fat": 3.7,
    "fiber": 9.6,
    "sugar": 13.7,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Burrito (South Indian)",
    "category": "Junk",
    "calories": 191,
    "protein": 27.7,
    "carbs": 60.1,
    "fat": 7.5,
    "fiber": 0.7,
    "sugar": 31.0,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Mango (Punjabi)",
    "category": "Moderate",
    "calories": 464,
    "protein": 18.5,
    "carbs": 31.3,
    "fat": 23.6,
    "fiber": 13.3,
    "sugar": 22.2,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Poha (South Indian)",
    "category": "Junk",
    "calories": 368,
    "protein": 12.4,
    "carbs": 20.2,
    "fat": 4.9,
    "fiber": 13.6,
    "sugar": 3.7,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Grilled Chicken (North Indian)",
    "category": "Healthy",
    "calories": 255,
    "protein": 24.5,
    "carbs": 70.6,
    "fat": 34.2,
    "fiber": 1.5,
    "sugar": 26.2,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Banana (Spicy)",
    "category": "Moderate",
    "calories": 97,
    "protein": 1.6,
    "carbs": 54.4,
    "fat": 34.4,
    "fiber": 5.4,
    "sugar": 23.8,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Radish (Punjabi)",
    "category": "Healthy",
    "calories": 374,
    "protein": 28.8,
    "carbs": 71.0,
    "fat": 2.2,
    "fiber": 3.9,
    "sugar": 39.2,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Roast Chicken (South Indian)",
    "category": "Junk",
    "calories": 108,
    "protein": 25.3,
    "carbs": 45.2,
    "fat": 9.1,
    "fiber": 14.2,
    "sugar": 14.4,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Zucchini (Home Style)",
    "category": "Junk",
    "calories": 241,
    "protein": 29.0,
    "carbs": 41.3,
    "fat": 34.7,
    "fiber": 1.8,
    "sugar": 4.3,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Pumpkin (South Indian)",
    "category": "Moderate",
    "calories": 146,
    "protein": 20.8,
    "carbs": 58.0,
    "fat": 5.9,
    "fiber": 4.5,
    "sugar": 19.2,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Peach (North Indian)",
    "category": "Healthy",
    "calories": 129,
    "protein": 26.3,
    "carbs": 77.8,
    "fat": 29.3,
    "fiber": 3.0,
    "sugar": 9.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Fish Curry (Home Style)",
    "category": "Junk",
    "calories": 421,
    "protein": 22.2,
    "carbs": 51.1,
    "fat": 26.6,
    "fiber": 6.2,
    "sugar": 11.3,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Sandwich (Spicy)",
    "category": "Healthy",
    "calories": 208,
    "protein": 8.9,
    "carbs": 31.9,
    "fat": 8.4,
    "fiber": 13.0,
    "sugar": 26.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Beetroot (Spicy)",
    "category": "Healthy",
    "calories": 375,
    "protein": 17.4,
    "carbs": 60.1,
    "fat": 30.0,
    "fiber": 8.9,
    "sugar": 38.8,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Fish Fry (Punjabi)",
    "category": "Junk",
    "calories": 396,
    "protein": 23.4,
    "carbs": 32.6,
    "fat": 6.6,
    "fiber": 5.8,
    "sugar": 38.9,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Guava (Punjabi)",
    "category": "Healthy",
    "calories": 391,
    "protein": 19.4,
    "carbs": 64.9,
    "fat": 10.6,
    "fiber": 5.6,
    "sugar": 17.7,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Chicken Curry (Hyderabadi)",
    "category": "Junk",
    "calories": 235,
    "protein": 26.7,
    "carbs": 46.8,
    "fat": 34.0,
    "fiber": 2.7,
    "sugar": 15.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Pear (Punjabi)",
    "category": "Healthy",
    "calories": 399,
    "protein": 18.9,
    "carbs": 47.3,
    "fat": 17.7,
    "fiber": 2.1,
    "sugar": 0.3,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Curd Rice (Steamed)",
    "category": "Moderate",
    "calories": 414,
    "protein": 17.3,
    "carbs": 46.3,
    "fat": 12.0,
    "fiber": 5.6,
    "sugar": 36.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Noodles (Hyderabadi)",
    "category": "Junk",
    "calories": 117,
    "protein": 25.2,
    "carbs": 5.9,
    "fat": 26.0,
    "fiber": 8.6,
    "sugar": 3.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Lemon Rice (Fried)",
    "category": "Junk",
    "calories": 32,
    "protein": 24.4,
    "carbs": 53.7,
    "fat": 16.2,
    "fiber": 10.0,
    "sugar": 29.8,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Dosa (South Indian)",
    "category": "Junk",
    "calories": 402,
    "protein": 7.0,
    "carbs": 69.1,
    "fat": 2.2,
    "fiber": 9.8,
    "sugar": 30.9,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Grilled Fish (South Indian)",
    "category": "Junk",
    "calories": 290,
    "protein": 0.6,
    "carbs": 60.1,
    "fat": 0.7,
    "fiber": 14.4,
    "sugar": 5.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Burger (Punjabi)",
    "category": "Moderate",
    "calories": 141,
    "protein": 11.6,
    "carbs": 66.8,
    "fat": 13.6,
    "fiber": 14.3,
    "sugar": 31.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Sambar (Punjabi)",
    "category": "Healthy",
    "calories": 470,
    "protein": 16.0,
    "carbs": 76.6,
    "fat": 22.2,
    "fiber": 7.2,
    "sugar": 30.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Tamarind Rice (Spicy)",
    "category": "Healthy",
    "calories": 109,
    "protein": 19.2,
    "carbs": 43.6,
    "fat": 26.3,
    "fiber": 8.5,
    "sugar": 25.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Papaya (North Indian)",
    "category": "Healthy",
    "calories": 359,
    "protein": 29.6,
    "carbs": 53.2,
    "fat": 24.1,
    "fiber": 0.9,
    "sugar": 6.2,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Lemon Rice (North Indian)",
    "category": "Healthy",
    "calories": 471,
    "protein": 9.7,
    "carbs": 49.5,
    "fat": 28.9,
    "fiber": 12.0,
    "sugar": 9.7,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Soft Drink (Fried)",
    "category": "Moderate",
    "calories": 189,
    "protein": 17.8,
    "carbs": 56.5,
    "fat": 0.5,
    "fiber": 8.6,
    "sugar": 13.3,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Khichdi (North Indian)",
    "category": "Junk",
    "calories": 150,
    "protein": 17.6,
    "carbs": 59.4,
    "fat": 10.6,
    "fiber": 15.0,
    "sugar": 11.3,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Dosa (Steamed)",
    "category": "Junk",
    "calories": 31,
    "protein": 16.9,
    "carbs": 5.8,
    "fat": 27.6,
    "fiber": 1.3,
    "sugar": 17.5,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Samosa (Home Style)",
    "category": "Moderate",
    "calories": 87,
    "protein": 11.3,
    "carbs": 42.6,
    "fat": 0.5,
    "fiber": 5.1,
    "sugar": 33.2,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Pineapple (Kerala Style)",
    "category": "Healthy",
    "calories": 161,
    "protein": 2.6,
    "carbs": 20.5,
    "fat": 31.4,
    "fiber": 1.0,
    "sugar": 31.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Fish Curry (Punjabi)",
    "category": "Healthy",
    "calories": 30,
    "protein": 12.5,
    "carbs": 23.4,
    "fat": 4.9,
    "fiber": 2.7,
    "sugar": 6.3,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Poha (Kerala Style)",
    "category": "Junk",
    "calories": 112,
    "protein": 4.6,
    "carbs": 16.7,
    "fat": 34.2,
    "fiber": 14.2,
    "sugar": 3.0,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Pineapple (Spicy)",
    "category": "Moderate",
    "calories": 350,
    "protein": 24.2,
    "carbs": 63.9,
    "fat": 9.8,
    "fiber": 5.1,
    "sugar": 26.3,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Pineapple (South Indian)",
    "category": "Healthy",
    "calories": 176,
    "protein": 14.2,
    "carbs": 70.3,
    "fat": 25.0,
    "fiber": 13.4,
    "sugar": 33.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Pakoda (Home Style)",
    "category": "Healthy",
    "calories": 281,
    "protein": 17.8,
    "carbs": 34.5,
    "fat": 31.9,
    "fiber": 2.1,
    "sugar": 39.8,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Zucchini (Punjabi)",
    "category": "Healthy",
    "calories": 165,
    "protein": 1.1,
    "carbs": 43.0,
    "fat": 10.1,
    "fiber": 14.0,
    "sugar": 27.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Date (Hyderabadi)",
    "category": "Junk",
    "calories": 164,
    "protein": 26.7,
    "carbs": 65.9,
    "fat": 31.4,
    "fiber": 7.5,
    "sugar": 12.0,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Fried Rice (Punjabi)",
    "category": "Healthy",
    "calories": 96,
    "protein": 16.1,
    "carbs": 26.4,
    "fat": 29.5,
    "fiber": 13.0,
    "sugar": 36.8,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Chicken Biryani (South Indian)",
    "category": "Moderate",
    "calories": 202,
    "protein": 3.5,
    "carbs": 14.1,
    "fat": 21.6,
    "fiber": 9.1,
    "sugar": 34.0,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Roast Chicken (Fried)",
    "category": "Junk",
    "calories": 411,
    "protein": 8.9,
    "carbs": 58.5,
    "fat": 8.1,
    "fiber": 12.3,
    "sugar": 17.8,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Date (North Indian)",
    "category": "Healthy",
    "calories": 151,
    "protein": 25.0,
    "carbs": 16.9,
    "fat": 28.7,
    "fiber": 4.9,
    "sugar": 31.8,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Radish (Grilled)",
    "category": "Moderate",
    "calories": 252,
    "protein": 15.2,
    "carbs": 52.0,
    "fat": 17.0,
    "fiber": 8.9,
    "sugar": 29.4,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Samosa (Steamed)",
    "category": "Junk",
    "calories": 488,
    "protein": 5.9,
    "carbs": 65.8,
    "fat": 14.3,
    "fiber": 4.7,
    "sugar": 9.4,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Carrot (Fried)",
    "category": "Healthy",
    "calories": 277,
    "protein": 24.1,
    "carbs": 62.6,
    "fat": 22.7,
    "fiber": 9.9,
    "sugar": 34.7,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Kiwi (Fried)",
    "category": "Moderate",
    "calories": 144,
    "protein": 12.6,
    "carbs": 49.0,
    "fat": 3.6,
    "fiber": 4.8,
    "sugar": 39.2,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Idli (Fried)",
    "category": "Moderate",
    "calories": 369,
    "protein": 7.5,
    "carbs": 15.1,
    "fat": 24.0,
    "fiber": 9.5,
    "sugar": 39.2,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Pear (Grilled)",
    "category": "Healthy",
    "calories": 373,
    "protein": 10.6,
    "carbs": 26.5,
    "fat": 29.5,
    "fiber": 4.4,
    "sugar": 16.3,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Blueberry (Kerala Style)",
    "category": "Junk",
    "calories": 474,
    "protein": 11.3,
    "carbs": 44.9,
    "fat": 1.7,
    "fiber": 6.5,
    "sugar": 26.9,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Cucumber (Kerala Style)",
    "category": "Healthy",
    "calories": 389,
    "protein": 25.5,
    "carbs": 56.3,
    "fat": 6.6,
    "fiber": 7.6,
    "sugar": 18.7,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Zucchini (Grilled)",
    "category": "Moderate",
    "calories": 207,
    "protein": 23.9,
    "carbs": 67.2,
    "fat": 1.9,
    "fiber": 2.9,
    "sugar": 38.3,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Lemon Rice (South Indian)",
    "category": "Healthy",
    "calories": 380,
    "protein": 20.2,
    "carbs": 22.9,
    "fat": 33.7,
    "fiber": 7.8,
    "sugar": 28.2,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Grilled Salmon (Hyderabadi)",
    "category": "Healthy",
    "calories": 296,
    "protein": 27.3,
    "carbs": 42.9,
    "fat": 23.8,
    "fiber": 8.5,
    "sugar": 8.3,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Cake (Home Style)",
    "category": "Moderate",
    "calories": 380,
    "protein": 14.2,
    "carbs": 78.5,
    "fat": 18.0,
    "fiber": 11.3,
    "sugar": 15.3,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Samosa (Grilled)",
    "category": "Healthy",
    "calories": 310,
    "protein": 14.8,
    "carbs": 51.6,
    "fat": 14.2,
    "fiber": 1.0,
    "sugar": 22.2,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Peach (Punjabi)",
    "category": "Junk",
    "calories": 228,
    "protein": 3.2,
    "carbs": 8.7,
    "fat": 18.7,
    "fiber": 7.0,
    "sugar": 10.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Potato (South Indian)",
    "category": "Junk",
    "calories": 91,
    "protein": 27.6,
    "carbs": 60.7,
    "fat": 34.2,
    "fiber": 5.8,
    "sugar": 18.3,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Chicken Biryani (North Indian)",
    "category": "Junk",
    "calories": 327,
    "protein": 28.9,
    "carbs": 72.2,
    "fat": 1.8,
    "fiber": 0.8,
    "sugar": 28.7,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Poha (Fried)",
    "category": "Junk",
    "calories": 399,
    "protein": 4.8,
    "carbs": 56.3,
    "fat": 3.9,
    "fiber": 6.0,
    "sugar": 23.3,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Date (Spicy)",
    "category": "Moderate",
    "calories": 182,
    "protein": 2.1,
    "carbs": 51.8,
    "fat": 3.3,
    "fiber": 0.2,
    "sugar": 15.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Ice Cream (Kerala Style)",
    "category": "Junk",
    "calories": 118,
    "protein": 5.2,
    "carbs": 75.6,
    "fat": 6.5,
    "fiber": 5.7,
    "sugar": 2.8,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Burrito (Home Style)",
    "category": "Healthy",
    "calories": 270,
    "protein": 3.0,
    "carbs": 41.9,
    "fat": 13.7,
    "fiber": 10.6,
    "sugar": 1.4,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Milkshake (Grilled)",
    "category": "Healthy",
    "calories": 163,
    "protein": 1.6,
    "carbs": 61.5,
    "fat": 24.2,
    "fiber": 4.6,
    "sugar": 0.3,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Pumpkin (North Indian)",
    "category": "Healthy",
    "calories": 409,
    "protein": 7.9,
    "carbs": 67.8,
    "fat": 26.7,
    "fiber": 10.1,
    "sugar": 24.3,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Fish Fry (Kerala Style)",
    "category": "Junk",
    "calories": 333,
    "protein": 0.8,
    "carbs": 5.2,
    "fat": 14.4,
    "fiber": 5.1,
    "sugar": 7.0,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Fried Rice (Grilled)",
    "category": "Junk",
    "calories": 256,
    "protein": 23.1,
    "carbs": 38.5,
    "fat": 19.8,
    "fiber": 8.4,
    "sugar": 12.4,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Rasam (Grilled)",
    "category": "Junk",
    "calories": 172,
    "protein": 15.0,
    "carbs": 10.0,
    "fat": 1.1,
    "fiber": 11.6,
    "sugar": 17.9,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Pongal (Hyderabadi)",
    "category": "Moderate",
    "calories": 194,
    "protein": 23.3,
    "carbs": 78.2,
    "fat": 26.2,
    "fiber": 8.0,
    "sugar": 38.5,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Chicken Curry (Steamed)",
    "category": "Junk",
    "calories": 390,
    "protein": 2.4,
    "carbs": 60.1,
    "fat": 0.8,
    "fiber": 6.6,
    "sugar": 6.0,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Blueberry (Spicy)",
    "category": "Moderate",
    "calories": 208,
    "protein": 23.1,
    "carbs": 39.5,
    "fat": 6.3,
    "fiber": 2.3,
    "sugar": 3.0,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Burrito (Spicy)",
    "category": "Junk",
    "calories": 281,
    "protein": 2.4,
    "carbs": 63.1,
    "fat": 19.0,
    "fiber": 2.3,
    "sugar": 11.1,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Beans (Punjabi)",
    "category": "Junk",
    "calories": 176,
    "protein": 7.8,
    "carbs": 44.0,
    "fat": 5.3,
    "fiber": 11.6,
    "sugar": 2.1,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Boiled Egg (Kerala Style)",
    "category": "Junk",
    "calories": 417,
    "protein": 12.8,
    "carbs": 10.1,
    "fat": 31.0,
    "fiber": 2.8,
    "sugar": 26.2,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Fig (Steamed)",
    "category": "Moderate",
    "calories": 455,
    "protein": 19.8,
    "carbs": 67.7,
    "fat": 4.6,
    "fiber": 2.7,
    "sugar": 24.8,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Beetroot (Hyderabadi)",
    "category": "Healthy",
    "calories": 415,
    "protein": 2.7,
    "carbs": 19.6,
    "fat": 26.8,
    "fiber": 13.5,
    "sugar": 25.1,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Tamarind Rice (South Indian)",
    "category": "Junk",
    "calories": 30,
    "protein": 22.9,
    "carbs": 48.5,
    "fat": 26.0,
    "fiber": 6.4,
    "sugar": 27.7,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Donut (Grilled)",
    "category": "Healthy",
    "calories": 465,
    "protein": 8.8,
    "carbs": 19.3,
    "fat": 4.9,
    "fiber": 10.2,
    "sugar": 23.5,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "French Fries (Steamed)",
    "category": "Healthy",
    "calories": 422,
    "protein": 1.3,
    "carbs": 19.8,
    "fat": 33.8,
    "fiber": 8.3,
    "sugar": 24.5,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Cabbage (Punjabi)",
    "category": "Moderate",
    "calories": 281,
    "protein": 8.3,
    "carbs": 74.0,
    "fat": 14.1,
    "fiber": 10.3,
    "sugar": 19.3,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Ramen (Fried)",
    "category": "Moderate",
    "calories": 73,
    "protein": 15.1,
    "carbs": 63.7,
    "fat": 7.2,
    "fiber": 5.8,
    "sugar": 6.4,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Chicken Biryani (Steamed)",
    "category": "Healthy",
    "calories": 447,
    "protein": 2.9,
    "carbs": 63.9,
    "fat": 22.8,
    "fiber": 3.4,
    "sugar": 10.4,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Pizza (North Indian)",
    "category": "Healthy",
    "calories": 141,
    "protein": 2.3,
    "carbs": 13.3,
    "fat": 34.2,
    "fiber": 8.8,
    "sugar": 39.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Fried Rice (Fried)",
    "category": "Moderate",
    "calories": 340,
    "protein": 4.8,
    "carbs": 23.6,
    "fat": 34.1,
    "fiber": 12.8,
    "sugar": 7.2,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Grilled Chicken (Kerala Style)",
    "category": "Junk",
    "calories": 300,
    "protein": 6.2,
    "carbs": 24.7,
    "fat": 1.4,
    "fiber": 11.3,
    "sugar": 10.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Pear (South Indian)",
    "category": "Healthy",
    "calories": 146,
    "protein": 8.3,
    "carbs": 72.9,
    "fat": 34.3,
    "fiber": 2.3,
    "sugar": 22.5,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Fish Fry (Hyderabadi)",
    "category": "Moderate",
    "calories": 111,
    "protein": 14.8,
    "carbs": 35.1,
    "fat": 34.9,
    "fiber": 9.6,
    "sugar": 16.3,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Pizza (Home Style)",
    "category": "Healthy",
    "calories": 64,
    "protein": 6.8,
    "carbs": 65.4,
    "fat": 17.3,
    "fiber": 14.5,
    "sugar": 12.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Pakoda (Punjabi)",
    "category": "Healthy",
    "calories": 215,
    "protein": 12.8,
    "carbs": 20.6,
    "fat": 29.1,
    "fiber": 13.7,
    "sugar": 15.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Grilled Fish (North Indian)",
    "category": "Healthy",
    "calories": 51,
    "protein": 13.4,
    "carbs": 62.9,
    "fat": 12.3,
    "fiber": 13.7,
    "sugar": 2.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Ramen (South Indian)",
    "category": "Junk",
    "calories": 294,
    "protein": 16.9,
    "carbs": 65.7,
    "fat": 34.9,
    "fiber": 5.5,
    "sugar": 32.2,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Donut (Punjabi)",
    "category": "Junk",
    "calories": 473,
    "protein": 1.7,
    "carbs": 6.3,
    "fat": 34.8,
    "fiber": 9.5,
    "sugar": 22.1,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Rasam (Punjabi)",
    "category": "Moderate",
    "calories": 210,
    "protein": 23.6,
    "carbs": 68.5,
    "fat": 8.3,
    "fiber": 9.9,
    "sugar": 21.8,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Grapes (Kerala Style)",
    "category": "Healthy",
    "calories": 379,
    "protein": 6.4,
    "carbs": 20.1,
    "fat": 3.9,
    "fiber": 2.4,
    "sugar": 18.8,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Milkshake (Fried)",
    "category": "Healthy",
    "calories": 324,
    "protein": 22.1,
    "carbs": 10.2,
    "fat": 32.0,
    "fiber": 2.7,
    "sugar": 15.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Okra (Spicy)",
    "category": "Healthy",
    "calories": 32,
    "protein": 14.2,
    "carbs": 70.6,
    "fat": 18.1,
    "fiber": 5.9,
    "sugar": 34.4,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Upma (Steamed)",
    "category": "Moderate",
    "calories": 216,
    "protein": 7.6,
    "carbs": 27.5,
    "fat": 11.8,
    "fiber": 11.4,
    "sugar": 26.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Broccoli (Hyderabadi)",
    "category": "Junk",
    "calories": 400,
    "protein": 20.9,
    "carbs": 17.9,
    "fat": 5.0,
    "fiber": 10.4,
    "sugar": 8.0,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Dal (Fried)",
    "category": "Healthy",
    "calories": 496,
    "protein": 19.5,
    "carbs": 6.3,
    "fat": 10.9,
    "fiber": 5.6,
    "sugar": 0.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Pakoda (Hyderabadi)",
    "category": "Junk",
    "calories": 466,
    "protein": 4.2,
    "carbs": 28.0,
    "fat": 4.4,
    "fiber": 0.6,
    "sugar": 10.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Radish (Fried)",
    "category": "Moderate",
    "calories": 367,
    "protein": 28.3,
    "carbs": 22.2,
    "fat": 27.3,
    "fiber": 11.4,
    "sugar": 7.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Grapes (Punjabi)",
    "category": "Healthy",
    "calories": 346,
    "protein": 20.7,
    "carbs": 27.7,
    "fat": 24.8,
    "fiber": 3.2,
    "sugar": 27.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Chapati (Fried)",
    "category": "Moderate",
    "calories": 149,
    "protein": 27.9,
    "carbs": 34.0,
    "fat": 13.7,
    "fiber": 8.0,
    "sugar": 23.6,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Roast Chicken (Kerala Style)",
    "category": "Junk",
    "calories": 166,
    "protein": 20.6,
    "carbs": 8.9,
    "fat": 18.9,
    "fiber": 12.0,
    "sugar": 2.5,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Onion (Home Style)",
    "category": "Healthy",
    "calories": 278,
    "protein": 29.7,
    "carbs": 18.4,
    "fat": 26.7,
    "fiber": 1.7,
    "sugar": 18.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "French Fries (Hyderabadi)",
    "category": "Junk",
    "calories": 477,
    "protein": 21.4,
    "carbs": 45.3,
    "fat": 20.9,
    "fiber": 6.3,
    "sugar": 38.7,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Radish (North Indian)",
    "category": "Junk",
    "calories": 201,
    "protein": 16.9,
    "carbs": 36.4,
    "fat": 7.1,
    "fiber": 11.4,
    "sugar": 36.2,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Hot Dog (Kerala Style)",
    "category": "Moderate",
    "calories": 197,
    "protein": 16.6,
    "carbs": 49.7,
    "fat": 9.2,
    "fiber": 3.4,
    "sugar": 5.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Samosa (North Indian)",
    "category": "Moderate",
    "calories": 493,
    "protein": 17.6,
    "carbs": 32.2,
    "fat": 5.6,
    "fiber": 13.3,
    "sugar": 12.0,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Noodles (Kerala Style)",
    "category": "Junk",
    "calories": 49,
    "protein": 28.7,
    "carbs": 63.5,
    "fat": 3.5,
    "fiber": 5.5,
    "sugar": 20.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Egg Omelette (South Indian)",
    "category": "Healthy",
    "calories": 140,
    "protein": 12.4,
    "carbs": 18.5,
    "fat": 17.7,
    "fiber": 3.7,
    "sugar": 15.1,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Idli (South Indian)",
    "category": "Moderate",
    "calories": 235,
    "protein": 2.9,
    "carbs": 56.5,
    "fat": 34.1,
    "fiber": 0.8,
    "sugar": 4.2,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Steak (North Indian)",
    "category": "Junk",
    "calories": 196,
    "protein": 9.7,
    "carbs": 57.8,
    "fat": 30.9,
    "fiber": 11.7,
    "sugar": 7.0,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Khichdi (Home Style)",
    "category": "Moderate",
    "calories": 99,
    "protein": 24.4,
    "carbs": 10.3,
    "fat": 28.4,
    "fiber": 3.2,
    "sugar": 19.1,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Tomato (North Indian)",
    "category": "Healthy",
    "calories": 232,
    "protein": 25.7,
    "carbs": 75.5,
    "fat": 30.1,
    "fiber": 6.1,
    "sugar": 2.4,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Carrot (Kerala Style)",
    "category": "Healthy",
    "calories": 409,
    "protein": 11.5,
    "carbs": 21.5,
    "fat": 32.1,
    "fiber": 11.7,
    "sugar": 37.7,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Vegetable Curry (Home Style)",
    "category": "Moderate",
    "calories": 230,
    "protein": 20.7,
    "carbs": 66.1,
    "fat": 14.6,
    "fiber": 7.3,
    "sugar": 7.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Raspberry (Hyderabadi)",
    "category": "Healthy",
    "calories": 74,
    "protein": 18.5,
    "carbs": 16.4,
    "fat": 35.0,
    "fiber": 14.0,
    "sugar": 6.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Spinach (South Indian)",
    "category": "Junk",
    "calories": 397,
    "protein": 11.3,
    "carbs": 16.9,
    "fat": 31.2,
    "fiber": 6.1,
    "sugar": 8.8,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Grilled Salmon (Kerala Style)",
    "category": "Healthy",
    "calories": 453,
    "protein": 23.5,
    "carbs": 20.0,
    "fat": 10.4,
    "fiber": 9.6,
    "sugar": 35.2,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Spinach (Punjabi)",
    "category": "Healthy",
    "calories": 162,
    "protein": 29.7,
    "carbs": 30.7,
    "fat": 0.8,
    "fiber": 1.6,
    "sugar": 35.5,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Potato (Fried)",
    "category": "Healthy",
    "calories": 255,
    "protein": 25.7,
    "carbs": 43.6,
    "fat": 33.7,
    "fiber": 14.5,
    "sugar": 20.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Pasta (Home Style)",
    "category": "Healthy",
    "calories": 315,
    "protein": 25.6,
    "carbs": 42.4,
    "fat": 10.4,
    "fiber": 0.3,
    "sugar": 13.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Dal (Kerala Style)",
    "category": "Junk",
    "calories": 210,
    "protein": 25.1,
    "carbs": 50.6,
    "fat": 8.6,
    "fiber": 4.0,
    "sugar": 34.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Grilled Salmon (Spicy)",
    "category": "Healthy",
    "calories": 192,
    "protein": 12.6,
    "carbs": 71.9,
    "fat": 15.1,
    "fiber": 13.7,
    "sugar": 18.5,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Chapati (Spicy)",
    "category": "Moderate",
    "calories": 456,
    "protein": 17.8,
    "carbs": 36.0,
    "fat": 14.3,
    "fiber": 12.6,
    "sugar": 17.0,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Cabbage (Home Style)",
    "category": "Moderate",
    "calories": 99,
    "protein": 13.1,
    "carbs": 15.6,
    "fat": 34.5,
    "fiber": 6.5,
    "sugar": 39.4,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Soft Drink (Spicy)",
    "category": "Moderate",
    "calories": 325,
    "protein": 12.3,
    "carbs": 62.1,
    "fat": 21.4,
    "fiber": 9.8,
    "sugar": 8.6,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "French Fries (Punjabi)",
    "category": "Junk",
    "calories": 453,
    "protein": 21.3,
    "carbs": 39.0,
    "fat": 34.4,
    "fiber": 12.2,
    "sugar": 27.9,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Ice Cream (Home Style)",
    "category": "Junk",
    "calories": 122,
    "protein": 19.6,
    "carbs": 34.2,
    "fat": 9.7,
    "fiber": 8.3,
    "sugar": 37.8,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Burrito (Grilled)",
    "category": "Moderate",
    "calories": 285,
    "protein": 0.6,
    "carbs": 71.2,
    "fat": 0.3,
    "fiber": 12.1,
    "sugar": 20.1,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Cake (South Indian)",
    "category": "Healthy",
    "calories": 254,
    "protein": 13.8,
    "carbs": 65.4,
    "fat": 11.5,
    "fiber": 13.3,
    "sugar": 2.8,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Papaya (Steamed)",
    "category": "Moderate",
    "calories": 74,
    "protein": 2.8,
    "carbs": 28.4,
    "fat": 31.5,
    "fiber": 13.0,
    "sugar": 7.0,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Grilled Salmon (Punjabi)",
    "category": "Junk",
    "calories": 48,
    "protein": 15.5,
    "carbs": 64.7,
    "fat": 29.7,
    "fiber": 4.2,
    "sugar": 35.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Raspberry (Kerala Style)",
    "category": "Moderate",
    "calories": 175,
    "protein": 12.3,
    "carbs": 28.2,
    "fat": 24.6,
    "fiber": 13.8,
    "sugar": 21.8,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Cucumber (Steamed)",
    "category": "Moderate",
    "calories": 189,
    "protein": 6.2,
    "carbs": 41.8,
    "fat": 17.5,
    "fiber": 13.3,
    "sugar": 21.0,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Pizza (South Indian)",
    "category": "Moderate",
    "calories": 322,
    "protein": 3.2,
    "carbs": 67.3,
    "fat": 33.1,
    "fiber": 3.5,
    "sugar": 24.0,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Raspberry (Spicy)",
    "category": "Healthy",
    "calories": 62,
    "protein": 12.5,
    "carbs": 68.5,
    "fat": 31.0,
    "fiber": 3.3,
    "sugar": 18.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Sushi (Punjabi)",
    "category": "Junk",
    "calories": 210,
    "protein": 2.7,
    "carbs": 9.0,
    "fat": 18.7,
    "fiber": 0.5,
    "sugar": 5.9,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Rice (North Indian)",
    "category": "Healthy",
    "calories": 85,
    "protein": 20.6,
    "carbs": 43.5,
    "fat": 8.6,
    "fiber": 2.2,
    "sugar": 28.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Cake (Grilled)",
    "category": "Moderate",
    "calories": 297,
    "protein": 19.2,
    "carbs": 47.9,
    "fat": 26.9,
    "fiber": 2.2,
    "sugar": 35.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Rasam (Spicy)",
    "category": "Junk",
    "calories": 150,
    "protein": 14.2,
    "carbs": 53.0,
    "fat": 9.3,
    "fiber": 8.4,
    "sugar": 4.3,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Peach (Fried)",
    "category": "Moderate",
    "calories": 395,
    "protein": 16.3,
    "carbs": 75.5,
    "fat": 5.6,
    "fiber": 8.1,
    "sugar": 18.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Chocolate (Spicy)",
    "category": "Junk",
    "calories": 400,
    "protein": 8.5,
    "carbs": 14.0,
    "fat": 5.7,
    "fiber": 5.8,
    "sugar": 9.7,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Poha (North Indian)",
    "category": "Moderate",
    "calories": 377,
    "protein": 18.3,
    "carbs": 70.8,
    "fat": 25.2,
    "fiber": 13.4,
    "sugar": 10.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Papaya (Hyderabadi)",
    "category": "Healthy",
    "calories": 293,
    "protein": 1.8,
    "carbs": 11.3,
    "fat": 30.6,
    "fiber": 8.2,
    "sugar": 13.2,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Chicken Curry (Spicy)",
    "category": "Moderate",
    "calories": 464,
    "protein": 15.0,
    "carbs": 27.6,
    "fat": 11.8,
    "fiber": 9.1,
    "sugar": 6.3,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Zucchini (Kerala Style)",
    "category": "Healthy",
    "calories": 432,
    "protein": 20.9,
    "carbs": 21.2,
    "fat": 18.1,
    "fiber": 2.6,
    "sugar": 32.3,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Peach (South Indian)",
    "category": "Healthy",
    "calories": 426,
    "protein": 26.6,
    "carbs": 12.1,
    "fat": 32.5,
    "fiber": 1.2,
    "sugar": 20.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Chicken Curry (North Indian)",
    "category": "Junk",
    "calories": 358,
    "protein": 28.9,
    "carbs": 5.2,
    "fat": 26.1,
    "fiber": 6.0,
    "sugar": 2.3,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Tomato (Kerala Style)",
    "category": "Junk",
    "calories": 290,
    "protein": 7.9,
    "carbs": 27.4,
    "fat": 11.3,
    "fiber": 13.5,
    "sugar": 36.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Fish Fry (Steamed)",
    "category": "Moderate",
    "calories": 459,
    "protein": 12.3,
    "carbs": 64.9,
    "fat": 16.8,
    "fiber": 4.1,
    "sugar": 4.3,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Burger (Grilled)",
    "category": "Healthy",
    "calories": 144,
    "protein": 2.2,
    "carbs": 60.0,
    "fat": 23.2,
    "fiber": 9.6,
    "sugar": 10.8,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Fish Curry (South Indian)",
    "category": "Healthy",
    "calories": 314,
    "protein": 27.1,
    "carbs": 33.2,
    "fat": 22.6,
    "fiber": 6.0,
    "sugar": 2.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Watermelon (Punjabi)",
    "category": "Junk",
    "calories": 311,
    "protein": 24.0,
    "carbs": 20.3,
    "fat": 24.0,
    "fiber": 11.5,
    "sugar": 31.4,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Banana (Kerala Style)",
    "category": "Moderate",
    "calories": 374,
    "protein": 19.6,
    "carbs": 23.1,
    "fat": 26.1,
    "fiber": 13.3,
    "sugar": 37.6,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Pongal (Fried)",
    "category": "Junk",
    "calories": 75,
    "protein": 2.7,
    "carbs": 24.4,
    "fat": 10.1,
    "fiber": 1.4,
    "sugar": 7.2,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Steak (Punjabi)",
    "category": "Healthy",
    "calories": 425,
    "protein": 15.9,
    "carbs": 14.0,
    "fat": 4.4,
    "fiber": 0.9,
    "sugar": 31.7,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Rice (Punjabi)",
    "category": "Healthy",
    "calories": 407,
    "protein": 17.4,
    "carbs": 22.3,
    "fat": 16.0,
    "fiber": 2.0,
    "sugar": 6.8,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Poha (Grilled)",
    "category": "Junk",
    "calories": 397,
    "protein": 29.6,
    "carbs": 47.2,
    "fat": 17.7,
    "fiber": 14.3,
    "sugar": 5.3,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Chocolate (Kerala Style)",
    "category": "Healthy",
    "calories": 67,
    "protein": 11.4,
    "carbs": 42.8,
    "fat": 28.1,
    "fiber": 13.2,
    "sugar": 23.9,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Samosa (Kerala Style)",
    "category": "Junk",
    "calories": 386,
    "protein": 14.7,
    "carbs": 18.3,
    "fat": 10.9,
    "fiber": 8.1,
    "sugar": 3.1,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Watermelon (North Indian)",
    "category": "Healthy",
    "calories": 444,
    "protein": 27.2,
    "carbs": 37.4,
    "fat": 13.8,
    "fiber": 10.1,
    "sugar": 31.2,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Rice (Spicy)",
    "category": "Moderate",
    "calories": 182,
    "protein": 1.3,
    "carbs": 40.2,
    "fat": 29.4,
    "fiber": 7.1,
    "sugar": 24.1,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Mango (Kerala Style)",
    "category": "Moderate",
    "calories": 325,
    "protein": 25.3,
    "carbs": 46.5,
    "fat": 27.5,
    "fiber": 1.7,
    "sugar": 8.5,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Fish Fry (Home Style)",
    "category": "Junk",
    "calories": 44,
    "protein": 24.9,
    "carbs": 53.2,
    "fat": 4.2,
    "fiber": 4.3,
    "sugar": 27.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Dosa (Home Style)",
    "category": "Junk",
    "calories": 282,
    "protein": 25.1,
    "carbs": 11.7,
    "fat": 7.8,
    "fiber": 0.9,
    "sugar": 4.0,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Pakoda (Spicy)",
    "category": "Junk",
    "calories": 51,
    "protein": 8.9,
    "carbs": 48.3,
    "fat": 11.0,
    "fiber": 13.8,
    "sugar": 39.8,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Vegetable Curry (North Indian)",
    "category": "Moderate",
    "calories": 460,
    "protein": 11.8,
    "carbs": 45.0,
    "fat": 23.6,
    "fiber": 14.9,
    "sugar": 31.5,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Plum (South Indian)",
    "category": "Healthy",
    "calories": 128,
    "protein": 17.8,
    "carbs": 24.0,
    "fat": 5.2,
    "fiber": 10.5,
    "sugar": 6.4,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Pumpkin (Home Style)",
    "category": "Healthy",
    "calories": 389,
    "protein": 28.1,
    "carbs": 33.4,
    "fat": 1.2,
    "fiber": 7.6,
    "sugar": 24.4,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Radish (Home Style)",
    "category": "Moderate",
    "calories": 30,
    "protein": 12.5,
    "carbs": 62.7,
    "fat": 8.7,
    "fiber": 12.4,
    "sugar": 1.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Cucumber (North Indian)",
    "category": "Moderate",
    "calories": 306,
    "protein": 1.4,
    "carbs": 7.2,
    "fat": 28.5,
    "fiber": 11.6,
    "sugar": 9.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Carrot (North Indian)",
    "category": "Healthy",
    "calories": 180,
    "protein": 27.9,
    "carbs": 75.7,
    "fat": 1.3,
    "fiber": 4.0,
    "sugar": 3.7,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Guava (Steamed)",
    "category": "Healthy",
    "calories": 84,
    "protein": 25.9,
    "carbs": 30.8,
    "fat": 27.7,
    "fiber": 1.4,
    "sugar": 38.4,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Pastry (Steamed)",
    "category": "Healthy",
    "calories": 232,
    "protein": 16.9,
    "carbs": 20.5,
    "fat": 5.9,
    "fiber": 15.0,
    "sugar": 14.3,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Egg Curry (Grilled)",
    "category": "Moderate",
    "calories": 66,
    "protein": 5.2,
    "carbs": 75.2,
    "fat": 11.3,
    "fiber": 3.2,
    "sugar": 12.6,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Zucchini (North Indian)",
    "category": "Moderate",
    "calories": 208,
    "protein": 10.5,
    "carbs": 58.5,
    "fat": 1.8,
    "fiber": 4.0,
    "sugar": 2.3,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Onion (North Indian)",
    "category": "Moderate",
    "calories": 115,
    "protein": 21.4,
    "carbs": 15.5,
    "fat": 12.2,
    "fiber": 10.7,
    "sugar": 12.2,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Donut (Hyderabadi)",
    "category": "Healthy",
    "calories": 485,
    "protein": 25.7,
    "carbs": 75.1,
    "fat": 11.1,
    "fiber": 9.1,
    "sugar": 27.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Roti (North Indian)",
    "category": "Moderate",
    "calories": 305,
    "protein": 5.8,
    "carbs": 56.7,
    "fat": 34.3,
    "fiber": 13.9,
    "sugar": 26.6,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Plum (Hyderabadi)",
    "category": "Moderate",
    "calories": 424,
    "protein": 9.5,
    "carbs": 74.3,
    "fat": 7.3,
    "fiber": 4.8,
    "sugar": 35.0,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Broccoli (Grilled)",
    "category": "Healthy",
    "calories": 170,
    "protein": 6.4,
    "carbs": 10.5,
    "fat": 7.6,
    "fiber": 1.8,
    "sugar": 30.4,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Milkshake (Home Style)",
    "category": "Moderate",
    "calories": 97,
    "protein": 20.7,
    "carbs": 48.3,
    "fat": 3.9,
    "fiber": 5.7,
    "sugar": 11.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Date (Grilled)",
    "category": "Healthy",
    "calories": 58,
    "protein": 8.1,
    "carbs": 42.1,
    "fat": 3.8,
    "fiber": 13.7,
    "sugar": 24.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Dosa (Spicy)",
    "category": "Healthy",
    "calories": 189,
    "protein": 6.7,
    "carbs": 34.9,
    "fat": 17.3,
    "fiber": 12.1,
    "sugar": 35.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Lasagna (Fried)",
    "category": "Junk",
    "calories": 53,
    "protein": 10.0,
    "carbs": 41.6,
    "fat": 29.8,
    "fiber": 13.6,
    "sugar": 1.1,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Sambar (Kerala Style)",
    "category": "Moderate",
    "calories": 105,
    "protein": 22.9,
    "carbs": 25.5,
    "fat": 13.6,
    "fiber": 1.2,
    "sugar": 33.6,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Watermelon (Hyderabadi)",
    "category": "Moderate",
    "calories": 421,
    "protein": 25.3,
    "carbs": 74.6,
    "fat": 4.7,
    "fiber": 3.2,
    "sugar": 28.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Fig (North Indian)",
    "category": "Moderate",
    "calories": 441,
    "protein": 16.4,
    "carbs": 77.0,
    "fat": 11.1,
    "fiber": 12.6,
    "sugar": 12.3,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Khichdi (Fried)",
    "category": "Junk",
    "calories": 266,
    "protein": 14.3,
    "carbs": 24.0,
    "fat": 14.6,
    "fiber": 13.3,
    "sugar": 14.7,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Fish Fry (South Indian)",
    "category": "Moderate",
    "calories": 108,
    "protein": 5.8,
    "carbs": 17.6,
    "fat": 18.9,
    "fiber": 3.6,
    "sugar": 29.5,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Burrito (Kerala Style)",
    "category": "Healthy",
    "calories": 251,
    "protein": 11.1,
    "carbs": 62.1,
    "fat": 27.2,
    "fiber": 3.2,
    "sugar": 26.7,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Cake (Steamed)",
    "category": "Junk",
    "calories": 479,
    "protein": 13.4,
    "carbs": 63.0,
    "fat": 6.6,
    "fiber": 6.6,
    "sugar": 37.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Dal (Punjabi)",
    "category": "Junk",
    "calories": 412,
    "protein": 24.7,
    "carbs": 56.2,
    "fat": 11.4,
    "fiber": 0.5,
    "sugar": 4.2,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Burger (North Indian)",
    "category": "Moderate",
    "calories": 132,
    "protein": 27.2,
    "carbs": 17.1,
    "fat": 25.9,
    "fiber": 7.5,
    "sugar": 18.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Onion (Fried)",
    "category": "Moderate",
    "calories": 130,
    "protein": 10.3,
    "carbs": 75.2,
    "fat": 32.9,
    "fiber": 4.3,
    "sugar": 12.8,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Tomato (South Indian)",
    "category": "Moderate",
    "calories": 378,
    "protein": 2.5,
    "carbs": 74.7,
    "fat": 3.4,
    "fiber": 3.2,
    "sugar": 2.6,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Orange (North Indian)",
    "category": "Moderate",
    "calories": 397,
    "protein": 25.5,
    "carbs": 72.7,
    "fat": 28.8,
    "fiber": 12.9,
    "sugar": 33.5,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Dal (South Indian)",
    "category": "Moderate",
    "calories": 329,
    "protein": 21.5,
    "carbs": 55.9,
    "fat": 32.5,
    "fiber": 0.2,
    "sugar": 6.0,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Pongal (Kerala Style)",
    "category": "Junk",
    "calories": 495,
    "protein": 4.3,
    "carbs": 45.9,
    "fat": 7.3,
    "fiber": 0.2,
    "sugar": 8.4,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Grilled Fish (Steamed)",
    "category": "Junk",
    "calories": 148,
    "protein": 27.7,
    "carbs": 26.6,
    "fat": 20.1,
    "fiber": 9.4,
    "sugar": 34.2,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Lemon Rice (Home Style)",
    "category": "Junk",
    "calories": 488,
    "protein": 7.8,
    "carbs": 8.4,
    "fat": 11.7,
    "fiber": 7.1,
    "sugar": 26.3,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Sandwich (Kerala Style)",
    "category": "Moderate",
    "calories": 432,
    "protein": 3.6,
    "carbs": 10.7,
    "fat": 5.3,
    "fiber": 14.7,
    "sugar": 26.6,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Fish Fry (Spicy)",
    "category": "Junk",
    "calories": 429,
    "protein": 17.8,
    "carbs": 68.8,
    "fat": 1.0,
    "fiber": 11.4,
    "sugar": 13.3,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Fried Chicken (Home Style)",
    "category": "Moderate",
    "calories": 132,
    "protein": 25.2,
    "carbs": 72.9,
    "fat": 11.8,
    "fiber": 9.6,
    "sugar": 36.6,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Grilled Fish (Fried)",
    "category": "Junk",
    "calories": 307,
    "protein": 24.9,
    "carbs": 47.3,
    "fat": 3.2,
    "fiber": 8.2,
    "sugar": 11.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Watermelon (Home Style)",
    "category": "Moderate",
    "calories": 92,
    "protein": 1.3,
    "carbs": 19.9,
    "fat": 30.1,
    "fiber": 4.2,
    "sugar": 38.2,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Mutton Curry (Kerala Style)",
    "category": "Healthy",
    "calories": 314,
    "protein": 16.7,
    "carbs": 70.2,
    "fat": 30.1,
    "fiber": 4.8,
    "sugar": 18.1,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Blueberry (Hyderabadi)",
    "category": "Junk",
    "calories": 361,
    "protein": 22.5,
    "carbs": 61.3,
    "fat": 13.9,
    "fiber": 1.0,
    "sugar": 17.4,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Onion (Kerala Style)",
    "category": "Healthy",
    "calories": 106,
    "protein": 17.1,
    "carbs": 33.6,
    "fat": 5.5,
    "fiber": 7.7,
    "sugar": 23.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Strawberry (Hyderabadi)",
    "category": "Moderate",
    "calories": 422,
    "protein": 13.9,
    "carbs": 68.3,
    "fat": 8.6,
    "fiber": 6.4,
    "sugar": 4.5,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Lettuce (Kerala Style)",
    "category": "Junk",
    "calories": 186,
    "protein": 15.0,
    "carbs": 73.4,
    "fat": 12.0,
    "fiber": 9.9,
    "sugar": 4.7,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Tamarind Rice (Grilled)",
    "category": "Junk",
    "calories": 226,
    "protein": 24.1,
    "carbs": 57.0,
    "fat": 11.1,
    "fiber": 4.8,
    "sugar": 6.3,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Idli (Punjabi)",
    "category": "Junk",
    "calories": 107,
    "protein": 16.8,
    "carbs": 37.2,
    "fat": 10.7,
    "fiber": 9.4,
    "sugar": 0.5,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Chicken Biryani (Home Style)",
    "category": "Junk",
    "calories": 185,
    "protein": 27.8,
    "carbs": 74.6,
    "fat": 6.4,
    "fiber": 7.8,
    "sugar": 28.9,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Egg Curry (Hyderabadi)",
    "category": "Healthy",
    "calories": 375,
    "protein": 12.4,
    "carbs": 7.6,
    "fat": 25.1,
    "fiber": 10.2,
    "sugar": 10.7,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Steak (Fried)",
    "category": "Healthy",
    "calories": 393,
    "protein": 11.4,
    "carbs": 64.1,
    "fat": 19.4,
    "fiber": 7.2,
    "sugar": 39.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Khichdi (Grilled)",
    "category": "Moderate",
    "calories": 435,
    "protein": 25.7,
    "carbs": 76.4,
    "fat": 10.6,
    "fiber": 5.7,
    "sugar": 30.1,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Pastry (Fried)",
    "category": "Junk",
    "calories": 278,
    "protein": 22.3,
    "carbs": 59.7,
    "fat": 18.0,
    "fiber": 4.7,
    "sugar": 22.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Sambar (Steamed)",
    "category": "Moderate",
    "calories": 147,
    "protein": 28.4,
    "carbs": 7.4,
    "fat": 16.3,
    "fiber": 5.8,
    "sugar": 17.5,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Watermelon (Grilled)",
    "category": "Healthy",
    "calories": 422,
    "protein": 15.7,
    "carbs": 56.6,
    "fat": 7.8,
    "fiber": 9.8,
    "sugar": 24.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Fried Rice (Steamed)",
    "category": "Healthy",
    "calories": 468,
    "protein": 22.8,
    "carbs": 35.8,
    "fat": 22.7,
    "fiber": 2.8,
    "sugar": 34.2,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Kiwi (Home Style)",
    "category": "Junk",
    "calories": 130,
    "protein": 5.6,
    "carbs": 46.0,
    "fat": 24.8,
    "fiber": 9.2,
    "sugar": 1.1,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Banana (Punjabi)",
    "category": "Moderate",
    "calories": 412,
    "protein": 0.7,
    "carbs": 25.4,
    "fat": 6.5,
    "fiber": 5.1,
    "sugar": 1.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Idli (Steamed)",
    "category": "Healthy",
    "calories": 256,
    "protein": 18.4,
    "carbs": 12.7,
    "fat": 28.2,
    "fiber": 1.1,
    "sugar": 11.4,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Broccoli (Punjabi)",
    "category": "Healthy",
    "calories": 454,
    "protein": 11.3,
    "carbs": 59.6,
    "fat": 13.2,
    "fiber": 1.7,
    "sugar": 4.6,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Egg Omelette (Home Style)",
    "category": "Healthy",
    "calories": 482,
    "protein": 25.6,
    "carbs": 79.5,
    "fat": 22.5,
    "fiber": 2.9,
    "sugar": 23.5,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "French Fries (Grilled)",
    "category": "Moderate",
    "calories": 52,
    "protein": 28.2,
    "carbs": 52.1,
    "fat": 23.4,
    "fiber": 13.6,
    "sugar": 30.7,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Mashed Potato (Grilled)",
    "category": "Junk",
    "calories": 192,
    "protein": 27.0,
    "carbs": 30.9,
    "fat": 20.0,
    "fiber": 7.6,
    "sugar": 21.2,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Grilled Chicken (Hyderabadi)",
    "category": "Junk",
    "calories": 476,
    "protein": 13.2,
    "carbs": 51.3,
    "fat": 33.8,
    "fiber": 2.5,
    "sugar": 11.8,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Pastry (Spicy)",
    "category": "Junk",
    "calories": 74,
    "protein": 26.3,
    "carbs": 53.6,
    "fat": 7.2,
    "fiber": 14.2,
    "sugar": 20.7,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Fried Chicken (Spicy)",
    "category": "Healthy",
    "calories": 96,
    "protein": 16.5,
    "carbs": 51.4,
    "fat": 10.0,
    "fiber": 7.5,
    "sugar": 12.2,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Burrito (Hyderabadi)",
    "category": "Junk",
    "calories": 470,
    "protein": 18.3,
    "carbs": 78.8,
    "fat": 12.1,
    "fiber": 0.4,
    "sugar": 14.7,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Hot Dog (Steamed)",
    "category": "Junk",
    "calories": 179,
    "protein": 23.2,
    "carbs": 45.9,
    "fat": 12.4,
    "fiber": 4.5,
    "sugar": 19.6,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Chocolate (Grilled)",
    "category": "Junk",
    "calories": 373,
    "protein": 22.5,
    "carbs": 56.4,
    "fat": 19.3,
    "fiber": 4.4,
    "sugar": 6.4,
    "advantages": [
      "Provides quick energy",
      "Good taste"
    ],
    "disadvantages": [
      "High fat or sugar",
      "Frequent intake may cause health issues"
    ]
  },
  {
    "name": "Tomato (Punjabi)",
    "category": "Healthy",
    "calories": 324,
    "protein": 12.8,
    "carbs": 74.8,
    "fat": 29.8,
    "fiber": 14.2,
    "sugar": 13.3,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  },
  {
    "name": "Pear (North Indian)",
    "category": "Moderate",
    "calories": 54,
    "protein": 28.2,
    "carbs": 52.2,
    "fat": 19.4,
    "fiber": 5.6,
    "sugar": 38.9,
    "advantages": [
      "Provides energy",
      "Contains protein and nutrients"
    ],
    "disadvantages": [
      "Excess intake may lead to imbalance"
    ]
  },
  {
    "name": "Apple (North Indian)",
    "category": "Healthy",
    "calories": 118,
    "protein": 28.6,
    "carbs": 59.2,
    "fat": 12.7,
    "fiber": 8.4,
    "sugar": 3.0,
    "advantages": [
      "Rich in nutrients",
      "Supports overall health",
      "Provides natural energy"
    ],
    "disadvantages": [
      "Overconsumption may increase blood sugar"
    ]
  }
]