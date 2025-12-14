const foodData = [
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 374,
    "protein": 11.4,
    "carbs": 12.6,
    "fat": 25.6,
    "fiber": 5.5,
    "sugar": 18.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 351,
    "protein": 4.1,
    "carbs": 53.2,
    "fat": 3.0,
    "fiber": 6.1,
    "sugar": 22.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 70,
    "protein": 21.7,
    "carbs": 43.0,
    "fat": 22.8,
    "fiber": 4.2,
    "sugar": 24.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 208,
    "protein": 13.4,
    "carbs": 17.6,
    "fat": 22.3,
    "fiber": 10.7,
    "sugar": 1.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 367,
    "protein": 18.0,
    "carbs": 16.6,
    "fat": 27.1,
    "fiber": 4.4,
    "sugar": 5.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 310,
    "protein": 2.6,
    "carbs": 40.2,
    "fat": 24.6,
    "fiber": 8.8,
    "sugar": 10.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 281,
    "protein": 25.3,
    "carbs": 52.0,
    "fat": 9.3,
    "fiber": 0.2,
    "sugar": 4.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 50,
    "protein": 24.6,
    "carbs": 64.6,
    "fat": 23.3,
    "fiber": 6.2,
    "sugar": 4.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 247,
    "protein": 24.9,
    "carbs": 68.5,
    "fat": 15.6,
    "fiber": 2.7,
    "sugar": 19.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 272,
    "protein": 21.8,
    "carbs": 14.0,
    "fat": 8.8,
    "fiber": 10.0,
    "sugar": 14.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 126,
    "protein": 7.4,
    "carbs": 47.8,
    "fat": 29.6,
    "fiber": 2.6,
    "sugar": 14.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 171,
    "protein": 2.7,
    "carbs": 59.1,
    "fat": 21.7,
    "fiber": 11.1,
    "sugar": 9.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 332,
    "protein": 8.5,
    "carbs": 57.6,
    "fat": 11.9,
    "fiber": 4.1,
    "sugar": 4.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 383,
    "protein": 3.4,
    "carbs": 55.0,
    "fat": 11.1,
    "fiber": 12.2,
    "sugar": 9.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 101,
    "protein": 9.2,
    "carbs": 30.6,
    "fat": 20.6,
    "fiber": 2.4,
    "sugar": 9.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 166,
    "protein": 18.3,
    "carbs": 10.1,
    "fat": 24.6,
    "fiber": 14.6,
    "sugar": 2.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 320,
    "protein": 16.7,
    "carbs": 43.2,
    "fat": 8.3,
    "fiber": 14.4,
    "sugar": 0.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 243,
    "protein": 3.9,
    "carbs": 30.8,
    "fat": 5.9,
    "fiber": 12.2,
    "sugar": 6.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 370,
    "protein": 15.3,
    "carbs": 46.0,
    "fat": 0.5,
    "fiber": 0.3,
    "sugar": 14.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 288,
    "protein": 19.3,
    "carbs": 36.9,
    "fat": 25.5,
    "fiber": 6.5,
    "sugar": 1.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 298,
    "protein": 10.1,
    "carbs": 34.2,
    "fat": 27.7,
    "fiber": 9.0,
    "sugar": 21.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 229,
    "protein": 4.2,
    "carbs": 57.7,
    "fat": 0.0,
    "fiber": 7.3,
    "sugar": 0.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 205,
    "protein": 15.6,
    "carbs": 26.6,
    "fat": 13.5,
    "fiber": 3.6,
    "sugar": 13.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 173,
    "protein": 23.8,
    "carbs": 7.1,
    "fat": 4.5,
    "fiber": 1.9,
    "sugar": 22.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 332,
    "protein": 27.3,
    "carbs": 28.3,
    "fat": 15.0,
    "fiber": 13.5,
    "sugar": 24.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 388,
    "protein": 26.3,
    "carbs": 66.6,
    "fat": 18.8,
    "fiber": 5.7,
    "sugar": 15.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 289,
    "protein": 9.1,
    "carbs": 25.1,
    "fat": 8.3,
    "fiber": 0.7,
    "sugar": 7.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 351,
    "protein": 6.8,
    "carbs": 16.2,
    "fat": 11.8,
    "fiber": 2.7,
    "sugar": 10.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 82,
    "protein": 22.3,
    "carbs": 37.0,
    "fat": 29.6,
    "fiber": 9.0,
    "sugar": 21.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 165,
    "protein": 18.2,
    "carbs": 54.1,
    "fat": 1.1,
    "fiber": 6.6,
    "sugar": 15.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 128,
    "protein": 23.1,
    "carbs": 25.6,
    "fat": 5.3,
    "fiber": 8.6,
    "sugar": 16.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 186,
    "protein": 28.6,
    "carbs": 28.8,
    "fat": 1.9,
    "fiber": 12.9,
    "sugar": 4.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 59,
    "protein": 18.2,
    "carbs": 19.4,
    "fat": 4.2,
    "fiber": 5.8,
    "sugar": 1.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 198,
    "protein": 22.9,
    "carbs": 34.8,
    "fat": 19.0,
    "fiber": 1.3,
    "sugar": 0.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 354,
    "protein": 10.3,
    "carbs": 71.1,
    "fat": 20.9,
    "fiber": 14.7,
    "sugar": 2.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 124,
    "protein": 6.4,
    "carbs": 38.5,
    "fat": 7.5,
    "fiber": 7.6,
    "sugar": 6.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 253,
    "protein": 20.1,
    "carbs": 51.7,
    "fat": 17.2,
    "fiber": 0.9,
    "sugar": 7.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 247,
    "protein": 27.2,
    "carbs": 72.5,
    "fat": 17.5,
    "fiber": 14.6,
    "sugar": 19.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 253,
    "protein": 11.1,
    "carbs": 17.6,
    "fat": 2.8,
    "fiber": 11.4,
    "sugar": 15.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 178,
    "protein": 26.2,
    "carbs": 45.7,
    "fat": 3.1,
    "fiber": 1.4,
    "sugar": 9.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 287,
    "protein": 1.0,
    "carbs": 19.8,
    "fat": 21.5,
    "fiber": 13.8,
    "sugar": 15.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 141,
    "protein": 29.1,
    "carbs": 53.1,
    "fat": 25.2,
    "fiber": 1.1,
    "sugar": 0.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 168,
    "protein": 21.8,
    "carbs": 64.9,
    "fat": 13.3,
    "fiber": 1.6,
    "sugar": 20.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 336,
    "protein": 7.3,
    "carbs": 70.0,
    "fat": 19.3,
    "fiber": 9.9,
    "sugar": 22.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 78,
    "protein": 2.0,
    "carbs": 14.7,
    "fat": 3.0,
    "fiber": 4.4,
    "sugar": 12.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 362,
    "protein": 15.0,
    "carbs": 65.4,
    "fat": 15.7,
    "fiber": 9.7,
    "sugar": 6.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 201,
    "protein": 4.0,
    "carbs": 14.9,
    "fat": 20.8,
    "fiber": 14.6,
    "sugar": 14.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 375,
    "protein": 25.2,
    "carbs": 52.2,
    "fat": 16.6,
    "fiber": 2.3,
    "sugar": 6.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 58,
    "protein": 26.8,
    "carbs": 14.0,
    "fat": 18.4,
    "fiber": 1.0,
    "sugar": 1.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 236,
    "protein": 10.6,
    "carbs": 45.4,
    "fat": 23.5,
    "fiber": 11.7,
    "sugar": 7.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 108,
    "protein": 15.6,
    "carbs": 18.0,
    "fat": 0.7,
    "fiber": 8.5,
    "sugar": 16.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 274,
    "protein": 6.6,
    "carbs": 53.9,
    "fat": 28.9,
    "fiber": 14.5,
    "sugar": 10.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 186,
    "protein": 9.5,
    "carbs": 30.1,
    "fat": 14.3,
    "fiber": 12.4,
    "sugar": 1.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 320,
    "protein": 10.2,
    "carbs": 25.8,
    "fat": 0.7,
    "fiber": 1.9,
    "sugar": 4.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 383,
    "protein": 11.8,
    "carbs": 42.9,
    "fat": 7.9,
    "fiber": 1.0,
    "sugar": 4.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 339,
    "protein": 29.6,
    "carbs": 26.1,
    "fat": 7.8,
    "fiber": 13.3,
    "sugar": 21.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 288,
    "protein": 1.7,
    "carbs": 75.4,
    "fat": 2.6,
    "fiber": 0.5,
    "sugar": 19.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 234,
    "protein": 20.3,
    "carbs": 41.2,
    "fat": 14.5,
    "fiber": 13.8,
    "sugar": 13.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 228,
    "protein": 28.3,
    "carbs": 6.7,
    "fat": 20.9,
    "fiber": 3.5,
    "sugar": 7.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 284,
    "protein": 13.9,
    "carbs": 30.4,
    "fat": 25.9,
    "fiber": 7.1,
    "sugar": 2.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 368,
    "protein": 19.6,
    "carbs": 12.9,
    "fat": 25.2,
    "fiber": 11.7,
    "sugar": 4.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 329,
    "protein": 10.2,
    "carbs": 65.3,
    "fat": 24.6,
    "fiber": 8.0,
    "sugar": 2.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 387,
    "protein": 22.8,
    "carbs": 46.1,
    "fat": 15.9,
    "fiber": 4.0,
    "sugar": 10.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 251,
    "protein": 29.2,
    "carbs": 29.2,
    "fat": 18.8,
    "fiber": 8.3,
    "sugar": 10.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 297,
    "protein": 4.9,
    "carbs": 8.1,
    "fat": 24.8,
    "fiber": 14.4,
    "sugar": 19.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 309,
    "protein": 8.8,
    "carbs": 47.9,
    "fat": 21.9,
    "fiber": 13.9,
    "sugar": 18.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 361,
    "protein": 15.4,
    "carbs": 15.3,
    "fat": 19.4,
    "fiber": 0.8,
    "sugar": 16.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 264,
    "protein": 20.6,
    "carbs": 29.1,
    "fat": 20.4,
    "fiber": 4.2,
    "sugar": 13.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 246,
    "protein": 28.5,
    "carbs": 78.4,
    "fat": 7.5,
    "fiber": 6.8,
    "sugar": 9.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 271,
    "protein": 26.6,
    "carbs": 47.3,
    "fat": 17.1,
    "fiber": 4.0,
    "sugar": 20.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 351,
    "protein": 7.5,
    "carbs": 24.5,
    "fat": 23.8,
    "fiber": 8.6,
    "sugar": 4.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 169,
    "protein": 2.1,
    "carbs": 45.9,
    "fat": 15.0,
    "fiber": 7.9,
    "sugar": 11.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 361,
    "protein": 19.3,
    "carbs": 17.6,
    "fat": 19.0,
    "fiber": 7.8,
    "sugar": 1.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 295,
    "protein": 22.6,
    "carbs": 26.6,
    "fat": 3.9,
    "fiber": 10.0,
    "sugar": 0.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 79,
    "protein": 18.2,
    "carbs": 35.1,
    "fat": 20.6,
    "fiber": 5.5,
    "sugar": 14.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 119,
    "protein": 18.0,
    "carbs": 62.8,
    "fat": 16.3,
    "fiber": 12.6,
    "sugar": 9.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 151,
    "protein": 6.5,
    "carbs": 11.6,
    "fat": 15.7,
    "fiber": 10.2,
    "sugar": 0.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 205,
    "protein": 16.2,
    "carbs": 62.3,
    "fat": 7.8,
    "fiber": 1.1,
    "sugar": 18.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 198,
    "protein": 1.1,
    "carbs": 7.8,
    "fat": 21.7,
    "fiber": 5.9,
    "sugar": 21.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 276,
    "protein": 16.7,
    "carbs": 69.8,
    "fat": 5.4,
    "fiber": 14.3,
    "sugar": 16.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 286,
    "protein": 28.0,
    "carbs": 31.5,
    "fat": 11.9,
    "fiber": 5.8,
    "sugar": 4.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 266,
    "protein": 1.8,
    "carbs": 64.9,
    "fat": 5.4,
    "fiber": 13.8,
    "sugar": 15.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 145,
    "protein": 1.3,
    "carbs": 27.6,
    "fat": 20.9,
    "fiber": 2.8,
    "sugar": 10.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 142,
    "protein": 29.2,
    "carbs": 60.7,
    "fat": 3.0,
    "fiber": 12.0,
    "sugar": 17.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 174,
    "protein": 18.4,
    "carbs": 27.0,
    "fat": 6.5,
    "fiber": 0.9,
    "sugar": 18.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 242,
    "protein": 17.5,
    "carbs": 67.3,
    "fat": 29.7,
    "fiber": 13.2,
    "sugar": 9.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 382,
    "protein": 21.3,
    "carbs": 22.0,
    "fat": 21.9,
    "fiber": 10.7,
    "sugar": 1.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 339,
    "protein": 4.6,
    "carbs": 66.1,
    "fat": 8.0,
    "fiber": 0.5,
    "sugar": 6.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 267,
    "protein": 3.0,
    "carbs": 62.4,
    "fat": 3.6,
    "fiber": 4.9,
    "sugar": 16.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 80,
    "protein": 23.3,
    "carbs": 65.7,
    "fat": 11.2,
    "fiber": 12.2,
    "sugar": 21.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 266,
    "protein": 18.7,
    "carbs": 18.2,
    "fat": 18.6,
    "fiber": 10.2,
    "sugar": 3.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 147,
    "protein": 2.2,
    "carbs": 48.6,
    "fat": 12.7,
    "fiber": 2.5,
    "sugar": 1.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 192,
    "protein": 8.3,
    "carbs": 11.6,
    "fat": 22.7,
    "fiber": 4.6,
    "sugar": 20.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 229,
    "protein": 21.9,
    "carbs": 33.4,
    "fat": 27.8,
    "fiber": 12.2,
    "sugar": 14.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 370,
    "protein": 7.8,
    "carbs": 55.8,
    "fat": 26.0,
    "fiber": 0.6,
    "sugar": 17.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 314,
    "protein": 11.8,
    "carbs": 78.1,
    "fat": 23.9,
    "fiber": 1.7,
    "sugar": 14.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 159,
    "protein": 4.9,
    "carbs": 23.3,
    "fat": 10.7,
    "fiber": 12.6,
    "sugar": 10.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 385,
    "protein": 6.6,
    "carbs": 70.6,
    "fat": 10.5,
    "fiber": 3.6,
    "sugar": 4.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 376,
    "protein": 2.0,
    "carbs": 46.1,
    "fat": 26.3,
    "fiber": 2.7,
    "sugar": 5.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 211,
    "protein": 15.7,
    "carbs": 62.9,
    "fat": 20.4,
    "fiber": 0.9,
    "sugar": 18.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 189,
    "protein": 9.2,
    "carbs": 11.1,
    "fat": 26.7,
    "fiber": 1.1,
    "sugar": 21.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 118,
    "protein": 27.3,
    "carbs": 51.0,
    "fat": 5.4,
    "fiber": 5.7,
    "sugar": 5.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 95,
    "protein": 26.2,
    "carbs": 25.7,
    "fat": 8.6,
    "fiber": 11.1,
    "sugar": 17.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 153,
    "protein": 23.9,
    "carbs": 57.2,
    "fat": 14.5,
    "fiber": 10.6,
    "sugar": 10.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 364,
    "protein": 1.2,
    "carbs": 60.7,
    "fat": 14.3,
    "fiber": 1.7,
    "sugar": 25.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 128,
    "protein": 23.3,
    "carbs": 44.1,
    "fat": 7.3,
    "fiber": 6.0,
    "sugar": 3.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 378,
    "protein": 16.3,
    "carbs": 32.7,
    "fat": 20.5,
    "fiber": 5.9,
    "sugar": 22.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 342,
    "protein": 8.6,
    "carbs": 78.8,
    "fat": 2.0,
    "fiber": 9.4,
    "sugar": 14.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 183,
    "protein": 20.0,
    "carbs": 21.5,
    "fat": 27.3,
    "fiber": 4.1,
    "sugar": 22.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 157,
    "protein": 5.0,
    "carbs": 14.8,
    "fat": 21.4,
    "fiber": 5.1,
    "sugar": 16.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 175,
    "protein": 1.7,
    "carbs": 76.9,
    "fat": 21.3,
    "fiber": 7.6,
    "sugar": 19.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 305,
    "protein": 10.1,
    "carbs": 41.4,
    "fat": 15.7,
    "fiber": 1.7,
    "sugar": 19.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 216,
    "protein": 14.8,
    "carbs": 78.9,
    "fat": 4.8,
    "fiber": 1.9,
    "sugar": 14.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 279,
    "protein": 11.9,
    "carbs": 31.3,
    "fat": 22.3,
    "fiber": 6.9,
    "sugar": 19.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 277,
    "protein": 7.5,
    "carbs": 12.4,
    "fat": 25.8,
    "fiber": 13.7,
    "sugar": 16.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 153,
    "protein": 20.3,
    "carbs": 65.4,
    "fat": 17.2,
    "fiber": 13.1,
    "sugar": 1.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 153,
    "protein": 29.2,
    "carbs": 27.7,
    "fat": 27.8,
    "fiber": 14.4,
    "sugar": 8.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 157,
    "protein": 20.4,
    "carbs": 28.4,
    "fat": 19.1,
    "fiber": 2.7,
    "sugar": 14.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 116,
    "protein": 24.3,
    "carbs": 28.8,
    "fat": 23.6,
    "fiber": 1.4,
    "sugar": 14.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 224,
    "protein": 14.9,
    "carbs": 53.8,
    "fat": 24.5,
    "fiber": 11.0,
    "sugar": 16.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 343,
    "protein": 8.7,
    "carbs": 46.2,
    "fat": 6.6,
    "fiber": 1.1,
    "sugar": 12.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 181,
    "protein": 28.8,
    "carbs": 30.0,
    "fat": 10.3,
    "fiber": 3.7,
    "sugar": 4.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 366,
    "protein": 27.2,
    "carbs": 6.8,
    "fat": 19.9,
    "fiber": 8.3,
    "sugar": 19.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 73,
    "protein": 19.0,
    "carbs": 44.5,
    "fat": 21.1,
    "fiber": 6.6,
    "sugar": 22.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 104,
    "protein": 22.1,
    "carbs": 33.5,
    "fat": 9.0,
    "fiber": 10.2,
    "sugar": 8.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 349,
    "protein": 15.3,
    "carbs": 61.1,
    "fat": 17.7,
    "fiber": 14.3,
    "sugar": 8.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 126,
    "protein": 1.9,
    "carbs": 67.7,
    "fat": 5.3,
    "fiber": 11.7,
    "sugar": 10.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 185,
    "protein": 17.2,
    "carbs": 51.2,
    "fat": 28.0,
    "fiber": 11.2,
    "sugar": 7.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 227,
    "protein": 14.7,
    "carbs": 33.8,
    "fat": 10.1,
    "fiber": 8.0,
    "sugar": 0.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 225,
    "protein": 16.4,
    "carbs": 67.1,
    "fat": 25.3,
    "fiber": 4.4,
    "sugar": 16.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 135,
    "protein": 1.4,
    "carbs": 16.2,
    "fat": 20.7,
    "fiber": 10.3,
    "sugar": 24.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 150,
    "protein": 25.1,
    "carbs": 70.9,
    "fat": 7.4,
    "fiber": 14.2,
    "sugar": 24.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 91,
    "protein": 21.6,
    "carbs": 77.7,
    "fat": 7.2,
    "fiber": 1.4,
    "sugar": 6.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 160,
    "protein": 2.1,
    "carbs": 12.5,
    "fat": 11.6,
    "fiber": 2.8,
    "sugar": 24.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 128,
    "protein": 11.2,
    "carbs": 75.4,
    "fat": 3.6,
    "fiber": 5.0,
    "sugar": 8.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 289,
    "protein": 28.0,
    "carbs": 69.6,
    "fat": 26.0,
    "fiber": 11.9,
    "sugar": 3.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 211,
    "protein": 13.8,
    "carbs": 62.7,
    "fat": 26.2,
    "fiber": 11.3,
    "sugar": 11.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 138,
    "protein": 29.8,
    "carbs": 66.3,
    "fat": 27.0,
    "fiber": 3.5,
    "sugar": 6.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 356,
    "protein": 29.6,
    "carbs": 36.1,
    "fat": 22.8,
    "fiber": 8.6,
    "sugar": 22.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 53,
    "protein": 7.4,
    "carbs": 17.2,
    "fat": 10.1,
    "fiber": 11.1,
    "sugar": 15.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 312,
    "protein": 1.1,
    "carbs": 63.6,
    "fat": 15.3,
    "fiber": 13.5,
    "sugar": 5.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 174,
    "protein": 18.4,
    "carbs": 73.6,
    "fat": 2.9,
    "fiber": 4.5,
    "sugar": 11.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 342,
    "protein": 3.2,
    "carbs": 71.7,
    "fat": 4.7,
    "fiber": 1.4,
    "sugar": 21.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 193,
    "protein": 11.7,
    "carbs": 50.0,
    "fat": 15.7,
    "fiber": 8.6,
    "sugar": 1.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 307,
    "protein": 29.8,
    "carbs": 23.8,
    "fat": 24.5,
    "fiber": 7.9,
    "sugar": 12.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 399,
    "protein": 23.0,
    "carbs": 53.9,
    "fat": 13.2,
    "fiber": 7.6,
    "sugar": 7.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 222,
    "protein": 5.5,
    "carbs": 20.4,
    "fat": 7.1,
    "fiber": 1.4,
    "sugar": 7.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 170,
    "protein": 29.2,
    "carbs": 42.5,
    "fat": 3.5,
    "fiber": 8.4,
    "sugar": 1.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 303,
    "protein": 10.8,
    "carbs": 72.9,
    "fat": 28.2,
    "fiber": 2.3,
    "sugar": 8.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 392,
    "protein": 24.8,
    "carbs": 24.8,
    "fat": 26.8,
    "fiber": 13.7,
    "sugar": 9.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 327,
    "protein": 1.7,
    "carbs": 50.7,
    "fat": 29.1,
    "fiber": 7.8,
    "sugar": 12.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 116,
    "protein": 13.8,
    "carbs": 65.2,
    "fat": 24.1,
    "fiber": 7.8,
    "sugar": 12.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 104,
    "protein": 22.0,
    "carbs": 51.8,
    "fat": 12.7,
    "fiber": 8.2,
    "sugar": 2.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 240,
    "protein": 12.2,
    "carbs": 69.7,
    "fat": 23.9,
    "fiber": 2.9,
    "sugar": 15.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 161,
    "protein": 22.2,
    "carbs": 61.0,
    "fat": 22.8,
    "fiber": 13.9,
    "sugar": 19.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 292,
    "protein": 8.8,
    "carbs": 62.3,
    "fat": 18.7,
    "fiber": 5.7,
    "sugar": 1.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 113,
    "protein": 7.2,
    "carbs": 26.7,
    "fat": 22.7,
    "fiber": 0.7,
    "sugar": 18.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 177,
    "protein": 29.3,
    "carbs": 64.0,
    "fat": 18.9,
    "fiber": 5.8,
    "sugar": 9.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 198,
    "protein": 1.4,
    "carbs": 77.7,
    "fat": 15.7,
    "fiber": 0.3,
    "sugar": 10.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 300,
    "protein": 11.4,
    "carbs": 24.8,
    "fat": 15.7,
    "fiber": 13.1,
    "sugar": 14.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 115,
    "protein": 23.2,
    "carbs": 19.9,
    "fat": 2.0,
    "fiber": 6.8,
    "sugar": 0.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 97,
    "protein": 28.9,
    "carbs": 35.6,
    "fat": 5.9,
    "fiber": 0.9,
    "sugar": 22.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 208,
    "protein": 17.1,
    "carbs": 38.1,
    "fat": 14.7,
    "fiber": 2.2,
    "sugar": 18.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 182,
    "protein": 15.7,
    "carbs": 74.6,
    "fat": 22.2,
    "fiber": 6.9,
    "sugar": 4.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 60,
    "protein": 25.5,
    "carbs": 39.4,
    "fat": 7.5,
    "fiber": 14.0,
    "sugar": 16.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 365,
    "protein": 5.6,
    "carbs": 46.9,
    "fat": 9.6,
    "fiber": 0.6,
    "sugar": 0.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 378,
    "protein": 9.1,
    "carbs": 8.4,
    "fat": 16.6,
    "fiber": 9.7,
    "sugar": 20.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 192,
    "protein": 17.2,
    "carbs": 57.5,
    "fat": 2.4,
    "fiber": 13.9,
    "sugar": 5.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 380,
    "protein": 3.5,
    "carbs": 26.2,
    "fat": 12.0,
    "fiber": 7.5,
    "sugar": 19.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 375,
    "protein": 3.0,
    "carbs": 42.3,
    "fat": 3.9,
    "fiber": 5.3,
    "sugar": 1.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 167,
    "protein": 2.2,
    "carbs": 31.5,
    "fat": 25.8,
    "fiber": 1.8,
    "sugar": 14.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 190,
    "protein": 13.0,
    "carbs": 24.0,
    "fat": 12.1,
    "fiber": 5.9,
    "sugar": 13.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 185,
    "protein": 3.9,
    "carbs": 65.7,
    "fat": 11.1,
    "fiber": 3.3,
    "sugar": 3.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 353,
    "protein": 27.8,
    "carbs": 70.1,
    "fat": 22.2,
    "fiber": 14.9,
    "sugar": 14.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 329,
    "protein": 27.3,
    "carbs": 60.1,
    "fat": 29.1,
    "fiber": 2.6,
    "sugar": 11.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 398,
    "protein": 28.8,
    "carbs": 41.9,
    "fat": 3.9,
    "fiber": 2.4,
    "sugar": 10.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 182,
    "protein": 26.8,
    "carbs": 32.0,
    "fat": 6.3,
    "fiber": 12.1,
    "sugar": 21.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 237,
    "protein": 28.0,
    "carbs": 20.4,
    "fat": 21.6,
    "fiber": 7.5,
    "sugar": 21.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 74,
    "protein": 17.3,
    "carbs": 40.3,
    "fat": 28.6,
    "fiber": 14.1,
    "sugar": 21.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 228,
    "protein": 28.0,
    "carbs": 66.9,
    "fat": 9.8,
    "fiber": 14.2,
    "sugar": 6.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 238,
    "protein": 12.5,
    "carbs": 48.0,
    "fat": 21.8,
    "fiber": 10.0,
    "sugar": 6.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 129,
    "protein": 2.7,
    "carbs": 40.4,
    "fat": 20.2,
    "fiber": 8.5,
    "sugar": 10.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 107,
    "protein": 2.2,
    "carbs": 40.7,
    "fat": 24.5,
    "fiber": 1.2,
    "sugar": 9.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 205,
    "protein": 26.8,
    "carbs": 31.5,
    "fat": 27.1,
    "fiber": 4.4,
    "sugar": 18.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 59,
    "protein": 7.0,
    "carbs": 42.5,
    "fat": 19.9,
    "fiber": 12.7,
    "sugar": 11.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 330,
    "protein": 19.5,
    "carbs": 8.6,
    "fat": 5.2,
    "fiber": 3.0,
    "sugar": 11.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 174,
    "protein": 16.4,
    "carbs": 15.6,
    "fat": 19.1,
    "fiber": 9.3,
    "sugar": 5.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 354,
    "protein": 23.5,
    "carbs": 70.9,
    "fat": 20.2,
    "fiber": 3.6,
    "sugar": 6.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 238,
    "protein": 23.2,
    "carbs": 56.1,
    "fat": 3.6,
    "fiber": 6.7,
    "sugar": 21.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 94,
    "protein": 11.5,
    "carbs": 25.6,
    "fat": 1.7,
    "fiber": 7.2,
    "sugar": 17.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 181,
    "protein": 1.5,
    "carbs": 6.4,
    "fat": 26.3,
    "fiber": 12.6,
    "sugar": 3.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 141,
    "protein": 6.1,
    "carbs": 12.0,
    "fat": 14.6,
    "fiber": 6.9,
    "sugar": 20.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 323,
    "protein": 25.2,
    "carbs": 24.7,
    "fat": 1.9,
    "fiber": 1.0,
    "sugar": 0.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 177,
    "protein": 24.5,
    "carbs": 12.9,
    "fat": 24.8,
    "fiber": 9.8,
    "sugar": 1.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 328,
    "protein": 28.6,
    "carbs": 74.7,
    "fat": 19.4,
    "fiber": 11.3,
    "sugar": 11.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 235,
    "protein": 21.5,
    "carbs": 52.8,
    "fat": 26.3,
    "fiber": 6.9,
    "sugar": 23.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 397,
    "protein": 15.5,
    "carbs": 79.5,
    "fat": 21.9,
    "fiber": 14.1,
    "sugar": 1.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 335,
    "protein": 21.2,
    "carbs": 52.7,
    "fat": 1.2,
    "fiber": 5.1,
    "sugar": 23.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 86,
    "protein": 27.5,
    "carbs": 49.5,
    "fat": 25.0,
    "fiber": 7.7,
    "sugar": 15.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 347,
    "protein": 16.0,
    "carbs": 11.9,
    "fat": 2.3,
    "fiber": 3.1,
    "sugar": 21.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 276,
    "protein": 14.3,
    "carbs": 63.9,
    "fat": 21.1,
    "fiber": 11.2,
    "sugar": 6.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 192,
    "protein": 22.4,
    "carbs": 52.2,
    "fat": 19.5,
    "fiber": 14.9,
    "sugar": 16.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 214,
    "protein": 16.3,
    "carbs": 11.8,
    "fat": 20.4,
    "fiber": 0.6,
    "sugar": 8.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 190,
    "protein": 26.2,
    "carbs": 12.4,
    "fat": 3.6,
    "fiber": 2.3,
    "sugar": 23.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 306,
    "protein": 26.5,
    "carbs": 67.1,
    "fat": 4.5,
    "fiber": 13.2,
    "sugar": 5.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 68,
    "protein": 15.2,
    "carbs": 42.5,
    "fat": 14.4,
    "fiber": 8.9,
    "sugar": 20.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 308,
    "protein": 1.7,
    "carbs": 11.9,
    "fat": 28.9,
    "fiber": 13.8,
    "sugar": 6.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 282,
    "protein": 23.3,
    "carbs": 9.5,
    "fat": 22.0,
    "fiber": 8.5,
    "sugar": 17.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 282,
    "protein": 24.7,
    "carbs": 12.5,
    "fat": 11.9,
    "fiber": 6.5,
    "sugar": 16.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 247,
    "protein": 10.9,
    "carbs": 64.6,
    "fat": 14.1,
    "fiber": 3.6,
    "sugar": 18.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 239,
    "protein": 2.9,
    "carbs": 34.7,
    "fat": 1.3,
    "fiber": 5.6,
    "sugar": 23.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 160,
    "protein": 1.8,
    "carbs": 42.1,
    "fat": 23.7,
    "fiber": 14.8,
    "sugar": 4.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 247,
    "protein": 12.4,
    "carbs": 33.8,
    "fat": 6.4,
    "fiber": 8.8,
    "sugar": 8.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 161,
    "protein": 12.3,
    "carbs": 50.5,
    "fat": 22.8,
    "fiber": 8.4,
    "sugar": 20.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 223,
    "protein": 24.9,
    "carbs": 8.9,
    "fat": 28.5,
    "fiber": 13.7,
    "sugar": 10.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 374,
    "protein": 9.9,
    "carbs": 72.1,
    "fat": 3.1,
    "fiber": 3.2,
    "sugar": 1.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 292,
    "protein": 4.9,
    "carbs": 77.3,
    "fat": 18.6,
    "fiber": 13.3,
    "sugar": 3.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 56,
    "protein": 15.1,
    "carbs": 17.3,
    "fat": 11.5,
    "fiber": 5.1,
    "sugar": 16.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 239,
    "protein": 23.3,
    "carbs": 40.9,
    "fat": 1.7,
    "fiber": 3.8,
    "sugar": 23.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 91,
    "protein": 14.6,
    "carbs": 26.6,
    "fat": 0.8,
    "fiber": 10.8,
    "sugar": 2.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 126,
    "protein": 10.4,
    "carbs": 11.4,
    "fat": 9.3,
    "fiber": 10.0,
    "sugar": 23.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 186,
    "protein": 8.9,
    "carbs": 30.1,
    "fat": 15.1,
    "fiber": 3.1,
    "sugar": 9.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 93,
    "protein": 26.5,
    "carbs": 47.8,
    "fat": 23.0,
    "fiber": 1.3,
    "sugar": 1.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 210,
    "protein": 21.2,
    "carbs": 37.6,
    "fat": 11.8,
    "fiber": 13.4,
    "sugar": 10.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 145,
    "protein": 17.1,
    "carbs": 40.5,
    "fat": 0.4,
    "fiber": 14.4,
    "sugar": 13.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 373,
    "protein": 20.8,
    "carbs": 38.2,
    "fat": 11.8,
    "fiber": 4.4,
    "sugar": 1.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 286,
    "protein": 14.5,
    "carbs": 42.8,
    "fat": 6.4,
    "fiber": 0.3,
    "sugar": 21.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 94,
    "protein": 23.6,
    "carbs": 32.9,
    "fat": 0.1,
    "fiber": 3.1,
    "sugar": 7.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 369,
    "protein": 24.2,
    "carbs": 37.6,
    "fat": 12.3,
    "fiber": 11.0,
    "sugar": 3.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 125,
    "protein": 14.6,
    "carbs": 70.6,
    "fat": 17.4,
    "fiber": 5.3,
    "sugar": 13.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 239,
    "protein": 9.1,
    "carbs": 55.2,
    "fat": 1.0,
    "fiber": 4.4,
    "sugar": 19.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 106,
    "protein": 1.2,
    "carbs": 39.0,
    "fat": 5.5,
    "fiber": 10.2,
    "sugar": 4.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 135,
    "protein": 9.3,
    "carbs": 59.0,
    "fat": 25.8,
    "fiber": 0.1,
    "sugar": 0.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 218,
    "protein": 27.6,
    "carbs": 32.8,
    "fat": 11.1,
    "fiber": 11.0,
    "sugar": 4.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 277,
    "protein": 25.8,
    "carbs": 63.5,
    "fat": 8.4,
    "fiber": 5.3,
    "sugar": 14.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 109,
    "protein": 2.5,
    "carbs": 24.5,
    "fat": 9.9,
    "fiber": 4.5,
    "sugar": 19.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 253,
    "protein": 29.1,
    "carbs": 44.8,
    "fat": 18.4,
    "fiber": 11.3,
    "sugar": 10.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 367,
    "protein": 1.9,
    "carbs": 51.2,
    "fat": 2.8,
    "fiber": 10.8,
    "sugar": 10.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 368,
    "protein": 21.1,
    "carbs": 48.7,
    "fat": 20.5,
    "fiber": 2.8,
    "sugar": 16.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 309,
    "protein": 9.6,
    "carbs": 53.6,
    "fat": 15.0,
    "fiber": 12.5,
    "sugar": 16.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 288,
    "protein": 27.3,
    "carbs": 62.9,
    "fat": 22.5,
    "fiber": 11.8,
    "sugar": 16.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 232,
    "protein": 3.8,
    "carbs": 35.3,
    "fat": 10.0,
    "fiber": 11.0,
    "sugar": 5.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 134,
    "protein": 6.0,
    "carbs": 41.1,
    "fat": 0.2,
    "fiber": 11.7,
    "sugar": 16.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 94,
    "protein": 23.3,
    "carbs": 29.4,
    "fat": 12.8,
    "fiber": 13.6,
    "sugar": 11.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 314,
    "protein": 20.9,
    "carbs": 74.7,
    "fat": 8.6,
    "fiber": 11.2,
    "sugar": 14.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 367,
    "protein": 9.5,
    "carbs": 47.3,
    "fat": 20.4,
    "fiber": 7.3,
    "sugar": 8.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 108,
    "protein": 25.2,
    "carbs": 67.8,
    "fat": 10.6,
    "fiber": 7.5,
    "sugar": 7.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 165,
    "protein": 9.7,
    "carbs": 30.4,
    "fat": 23.2,
    "fiber": 2.3,
    "sugar": 15.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 245,
    "protein": 12.9,
    "carbs": 50.4,
    "fat": 19.9,
    "fiber": 8.0,
    "sugar": 9.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 260,
    "protein": 18.8,
    "carbs": 55.4,
    "fat": 7.9,
    "fiber": 7.9,
    "sugar": 22.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 217,
    "protein": 22.0,
    "carbs": 56.9,
    "fat": 7.0,
    "fiber": 3.1,
    "sugar": 24.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 224,
    "protein": 24.4,
    "carbs": 58.8,
    "fat": 15.4,
    "fiber": 14.2,
    "sugar": 3.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 300,
    "protein": 6.2,
    "carbs": 21.2,
    "fat": 19.3,
    "fiber": 6.5,
    "sugar": 8.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 95,
    "protein": 23.9,
    "carbs": 10.3,
    "fat": 13.7,
    "fiber": 13.3,
    "sugar": 7.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 126,
    "protein": 1.9,
    "carbs": 41.2,
    "fat": 5.9,
    "fiber": 6.9,
    "sugar": 21.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 244,
    "protein": 17.5,
    "carbs": 73.0,
    "fat": 7.7,
    "fiber": 3.2,
    "sugar": 23.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 165,
    "protein": 3.9,
    "carbs": 64.4,
    "fat": 20.1,
    "fiber": 1.4,
    "sugar": 3.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 303,
    "protein": 12.7,
    "carbs": 46.2,
    "fat": 17.6,
    "fiber": 4.3,
    "sugar": 23.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 290,
    "protein": 6.0,
    "carbs": 46.6,
    "fat": 21.3,
    "fiber": 12.6,
    "sugar": 16.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 310,
    "protein": 5.1,
    "carbs": 7.2,
    "fat": 12.4,
    "fiber": 7.0,
    "sugar": 21.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 271,
    "protein": 8.5,
    "carbs": 31.1,
    "fat": 25.0,
    "fiber": 12.5,
    "sugar": 23.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 332,
    "protein": 18.0,
    "carbs": 22.7,
    "fat": 6.9,
    "fiber": 10.1,
    "sugar": 7.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 53,
    "protein": 15.9,
    "carbs": 19.6,
    "fat": 15.6,
    "fiber": 2.3,
    "sugar": 8.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 255,
    "protein": 10.0,
    "carbs": 65.5,
    "fat": 24.5,
    "fiber": 1.5,
    "sugar": 0.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 97,
    "protein": 11.1,
    "carbs": 65.0,
    "fat": 24.2,
    "fiber": 11.5,
    "sugar": 21.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 337,
    "protein": 8.9,
    "carbs": 37.1,
    "fat": 5.0,
    "fiber": 0.0,
    "sugar": 13.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 160,
    "protein": 17.5,
    "carbs": 15.3,
    "fat": 14.3,
    "fiber": 3.2,
    "sugar": 22.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 132,
    "protein": 13.3,
    "carbs": 50.3,
    "fat": 29.2,
    "fiber": 2.0,
    "sugar": 7.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 65,
    "protein": 10.0,
    "carbs": 51.2,
    "fat": 13.4,
    "fiber": 8.0,
    "sugar": 12.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 238,
    "protein": 7.8,
    "carbs": 35.7,
    "fat": 16.6,
    "fiber": 1.6,
    "sugar": 2.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 232,
    "protein": 3.7,
    "carbs": 26.0,
    "fat": 2.4,
    "fiber": 8.0,
    "sugar": 12.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 261,
    "protein": 27.8,
    "carbs": 72.5,
    "fat": 20.9,
    "fiber": 7.8,
    "sugar": 21.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 217,
    "protein": 25.1,
    "carbs": 41.6,
    "fat": 8.2,
    "fiber": 6.8,
    "sugar": 23.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 320,
    "protein": 22.5,
    "carbs": 71.9,
    "fat": 29.8,
    "fiber": 1.9,
    "sugar": 7.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 332,
    "protein": 5.2,
    "carbs": 34.0,
    "fat": 29.8,
    "fiber": 0.8,
    "sugar": 19.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 107,
    "protein": 21.4,
    "carbs": 57.1,
    "fat": 5.0,
    "fiber": 3.4,
    "sugar": 21.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 253,
    "protein": 18.4,
    "carbs": 67.7,
    "fat": 2.5,
    "fiber": 3.9,
    "sugar": 1.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 287,
    "protein": 19.3,
    "carbs": 5.4,
    "fat": 8.6,
    "fiber": 9.9,
    "sugar": 12.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 327,
    "protein": 29.3,
    "carbs": 26.7,
    "fat": 27.7,
    "fiber": 2.4,
    "sugar": 19.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 146,
    "protein": 25.0,
    "carbs": 44.3,
    "fat": 6.6,
    "fiber": 13.1,
    "sugar": 23.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 311,
    "protein": 14.4,
    "carbs": 72.7,
    "fat": 21.2,
    "fiber": 7.1,
    "sugar": 23.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 260,
    "protein": 23.8,
    "carbs": 16.3,
    "fat": 6.5,
    "fiber": 7.6,
    "sugar": 1.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 284,
    "protein": 25.1,
    "carbs": 67.6,
    "fat": 24.1,
    "fiber": 12.8,
    "sugar": 8.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 68,
    "protein": 5.5,
    "carbs": 5.6,
    "fat": 7.6,
    "fiber": 11.7,
    "sugar": 9.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 271,
    "protein": 6.0,
    "carbs": 52.0,
    "fat": 7.0,
    "fiber": 8.4,
    "sugar": 4.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 50,
    "protein": 20.2,
    "carbs": 8.5,
    "fat": 16.7,
    "fiber": 4.0,
    "sugar": 7.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 374,
    "protein": 5.3,
    "carbs": 16.7,
    "fat": 6.0,
    "fiber": 7.8,
    "sugar": 23.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 118,
    "protein": 19.9,
    "carbs": 25.4,
    "fat": 15.8,
    "fiber": 3.9,
    "sugar": 21.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 381,
    "protein": 1.8,
    "carbs": 22.1,
    "fat": 15.9,
    "fiber": 1.0,
    "sugar": 14.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 182,
    "protein": 2.7,
    "carbs": 14.0,
    "fat": 5.6,
    "fiber": 11.4,
    "sugar": 5.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 199,
    "protein": 29.1,
    "carbs": 58.0,
    "fat": 19.5,
    "fiber": 2.6,
    "sugar": 23.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 234,
    "protein": 7.1,
    "carbs": 33.6,
    "fat": 17.4,
    "fiber": 8.3,
    "sugar": 15.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 284,
    "protein": 10.6,
    "carbs": 49.4,
    "fat": 21.2,
    "fiber": 8.6,
    "sugar": 18.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 215,
    "protein": 29.2,
    "carbs": 78.8,
    "fat": 23.9,
    "fiber": 2.1,
    "sugar": 8.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 260,
    "protein": 5.1,
    "carbs": 37.0,
    "fat": 5.8,
    "fiber": 3.3,
    "sugar": 18.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 301,
    "protein": 20.2,
    "carbs": 77.8,
    "fat": 11.2,
    "fiber": 14.9,
    "sugar": 17.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 180,
    "protein": 9.1,
    "carbs": 19.0,
    "fat": 11.6,
    "fiber": 13.9,
    "sugar": 13.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 87,
    "protein": 10.7,
    "carbs": 21.2,
    "fat": 20.1,
    "fiber": 3.6,
    "sugar": 24.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 277,
    "protein": 5.3,
    "carbs": 50.4,
    "fat": 23.2,
    "fiber": 2.8,
    "sugar": 11.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 121,
    "protein": 30.0,
    "carbs": 20.8,
    "fat": 23.0,
    "fiber": 0.6,
    "sugar": 13.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 333,
    "protein": 9.0,
    "carbs": 32.7,
    "fat": 20.4,
    "fiber": 8.2,
    "sugar": 4.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 123,
    "protein": 10.2,
    "carbs": 72.3,
    "fat": 29.9,
    "fiber": 4.0,
    "sugar": 21.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 172,
    "protein": 4.8,
    "carbs": 65.4,
    "fat": 9.2,
    "fiber": 8.9,
    "sugar": 5.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 381,
    "protein": 11.7,
    "carbs": 10.0,
    "fat": 19.2,
    "fiber": 9.7,
    "sugar": 19.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 122,
    "protein": 4.3,
    "carbs": 27.0,
    "fat": 3.0,
    "fiber": 1.0,
    "sugar": 0.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 352,
    "protein": 19.2,
    "carbs": 59.6,
    "fat": 16.3,
    "fiber": 14.0,
    "sugar": 12.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 322,
    "protein": 3.4,
    "carbs": 60.6,
    "fat": 9.7,
    "fiber": 12.4,
    "sugar": 3.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 283,
    "protein": 23.2,
    "carbs": 68.5,
    "fat": 6.8,
    "fiber": 13.8,
    "sugar": 24.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 309,
    "protein": 22.9,
    "carbs": 51.9,
    "fat": 27.3,
    "fiber": 3.3,
    "sugar": 17.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 230,
    "protein": 18.2,
    "carbs": 26.6,
    "fat": 25.0,
    "fiber": 10.5,
    "sugar": 14.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 306,
    "protein": 10.4,
    "carbs": 33.8,
    "fat": 11.8,
    "fiber": 12.4,
    "sugar": 13.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 236,
    "protein": 3.6,
    "carbs": 75.3,
    "fat": 14.4,
    "fiber": 9.3,
    "sugar": 5.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 254,
    "protein": 20.4,
    "carbs": 17.4,
    "fat": 17.5,
    "fiber": 0.9,
    "sugar": 7.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 145,
    "protein": 27.6,
    "carbs": 61.8,
    "fat": 8.1,
    "fiber": 5.4,
    "sugar": 23.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 264,
    "protein": 6.0,
    "carbs": 67.9,
    "fat": 13.7,
    "fiber": 11.6,
    "sugar": 14.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 132,
    "protein": 27.3,
    "carbs": 17.2,
    "fat": 12.5,
    "fiber": 9.6,
    "sugar": 1.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 169,
    "protein": 24.6,
    "carbs": 32.3,
    "fat": 10.9,
    "fiber": 0.4,
    "sugar": 9.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 185,
    "protein": 28.6,
    "carbs": 12.8,
    "fat": 1.7,
    "fiber": 4.2,
    "sugar": 23.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 333,
    "protein": 7.3,
    "carbs": 32.3,
    "fat": 0.6,
    "fiber": 8.1,
    "sugar": 22.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 291,
    "protein": 12.6,
    "carbs": 68.5,
    "fat": 14.5,
    "fiber": 11.4,
    "sugar": 0.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 77,
    "protein": 19.3,
    "carbs": 53.3,
    "fat": 20.2,
    "fiber": 7.4,
    "sugar": 21.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 320,
    "protein": 3.6,
    "carbs": 9.2,
    "fat": 16.5,
    "fiber": 11.4,
    "sugar": 22.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 297,
    "protein": 8.0,
    "carbs": 48.5,
    "fat": 22.1,
    "fiber": 9.2,
    "sugar": 7.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 395,
    "protein": 29.4,
    "carbs": 26.5,
    "fat": 1.8,
    "fiber": 4.2,
    "sugar": 16.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 124,
    "protein": 8.5,
    "carbs": 73.6,
    "fat": 25.8,
    "fiber": 11.0,
    "sugar": 24.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 224,
    "protein": 13.0,
    "carbs": 56.4,
    "fat": 29.3,
    "fiber": 3.3,
    "sugar": 14.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 229,
    "protein": 7.4,
    "carbs": 61.0,
    "fat": 2.0,
    "fiber": 5.3,
    "sugar": 15.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 100,
    "protein": 2.1,
    "carbs": 8.6,
    "fat": 16.7,
    "fiber": 12.9,
    "sugar": 2.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 98,
    "protein": 18.6,
    "carbs": 61.9,
    "fat": 13.2,
    "fiber": 7.4,
    "sugar": 15.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 261,
    "protein": 7.7,
    "carbs": 65.9,
    "fat": 10.7,
    "fiber": 6.2,
    "sugar": 16.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 193,
    "protein": 8.8,
    "carbs": 59.1,
    "fat": 12.7,
    "fiber": 2.6,
    "sugar": 1.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 139,
    "protein": 10.0,
    "carbs": 70.8,
    "fat": 21.9,
    "fiber": 0.8,
    "sugar": 19.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 220,
    "protein": 17.4,
    "carbs": 28.7,
    "fat": 1.5,
    "fiber": 9.1,
    "sugar": 9.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 134,
    "protein": 10.9,
    "carbs": 78.9,
    "fat": 1.9,
    "fiber": 10.5,
    "sugar": 24.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 385,
    "protein": 16.0,
    "carbs": 49.7,
    "fat": 22.1,
    "fiber": 6.4,
    "sugar": 12.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 287,
    "protein": 10.6,
    "carbs": 16.5,
    "fat": 21.7,
    "fiber": 1.0,
    "sugar": 5.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 252,
    "protein": 28.4,
    "carbs": 15.8,
    "fat": 17.2,
    "fiber": 14.7,
    "sugar": 11.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 149,
    "protein": 8.7,
    "carbs": 52.8,
    "fat": 10.3,
    "fiber": 12.4,
    "sugar": 17.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 72,
    "protein": 6.0,
    "carbs": 63.6,
    "fat": 23.6,
    "fiber": 0.0,
    "sugar": 17.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 264,
    "protein": 17.0,
    "carbs": 72.6,
    "fat": 1.5,
    "fiber": 2.7,
    "sugar": 15.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 301,
    "protein": 11.8,
    "carbs": 27.6,
    "fat": 19.6,
    "fiber": 0.2,
    "sugar": 17.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 304,
    "protein": 22.2,
    "carbs": 15.1,
    "fat": 18.2,
    "fiber": 14.8,
    "sugar": 7.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 276,
    "protein": 10.8,
    "carbs": 58.5,
    "fat": 8.0,
    "fiber": 13.7,
    "sugar": 11.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 136,
    "protein": 13.5,
    "carbs": 79.9,
    "fat": 19.7,
    "fiber": 10.1,
    "sugar": 14.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 367,
    "protein": 6.5,
    "carbs": 69.7,
    "fat": 27.2,
    "fiber": 9.0,
    "sugar": 20.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 266,
    "protein": 14.2,
    "carbs": 24.9,
    "fat": 28.6,
    "fiber": 14.2,
    "sugar": 6.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 210,
    "protein": 22.6,
    "carbs": 64.9,
    "fat": 26.5,
    "fiber": 1.5,
    "sugar": 3.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 281,
    "protein": 13.2,
    "carbs": 69.2,
    "fat": 9.8,
    "fiber": 8.4,
    "sugar": 8.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 243,
    "protein": 6.5,
    "carbs": 55.0,
    "fat": 29.9,
    "fiber": 13.0,
    "sugar": 15.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 171,
    "protein": 2.7,
    "carbs": 49.8,
    "fat": 18.0,
    "fiber": 1.2,
    "sugar": 2.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 290,
    "protein": 21.8,
    "carbs": 30.2,
    "fat": 17.1,
    "fiber": 10.2,
    "sugar": 9.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 252,
    "protein": 28.5,
    "carbs": 69.6,
    "fat": 5.8,
    "fiber": 8.9,
    "sugar": 0.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 217,
    "protein": 6.2,
    "carbs": 34.0,
    "fat": 7.0,
    "fiber": 14.8,
    "sugar": 24.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 118,
    "protein": 5.0,
    "carbs": 10.4,
    "fat": 27.0,
    "fiber": 7.8,
    "sugar": 23.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 232,
    "protein": 25.1,
    "carbs": 18.4,
    "fat": 4.4,
    "fiber": 9.1,
    "sugar": 14.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 262,
    "protein": 1.1,
    "carbs": 78.6,
    "fat": 12.5,
    "fiber": 9.6,
    "sugar": 11.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 110,
    "protein": 11.4,
    "carbs": 73.4,
    "fat": 25.5,
    "fiber": 7.3,
    "sugar": 10.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 357,
    "protein": 22.5,
    "carbs": 65.6,
    "fat": 1.8,
    "fiber": 10.6,
    "sugar": 17.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 223,
    "protein": 6.1,
    "carbs": 5.0,
    "fat": 21.2,
    "fiber": 11.7,
    "sugar": 9.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 347,
    "protein": 6.0,
    "carbs": 74.7,
    "fat": 16.7,
    "fiber": 12.3,
    "sugar": 13.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 170,
    "protein": 21.9,
    "carbs": 44.4,
    "fat": 11.6,
    "fiber": 13.0,
    "sugar": 18.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 250,
    "protein": 7.6,
    "carbs": 23.2,
    "fat": 3.0,
    "fiber": 6.3,
    "sugar": 24.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 324,
    "protein": 28.0,
    "carbs": 41.5,
    "fat": 7.2,
    "fiber": 14.7,
    "sugar": 15.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 128,
    "protein": 7.7,
    "carbs": 10.7,
    "fat": 5.1,
    "fiber": 9.3,
    "sugar": 14.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 347,
    "protein": 10.4,
    "carbs": 76.1,
    "fat": 1.5,
    "fiber": 12.3,
    "sugar": 1.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 91,
    "protein": 9.8,
    "carbs": 11.3,
    "fat": 8.7,
    "fiber": 4.5,
    "sugar": 20.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 397,
    "protein": 27.7,
    "carbs": 68.0,
    "fat": 21.8,
    "fiber": 4.9,
    "sugar": 16.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 125,
    "protein": 7.8,
    "carbs": 5.4,
    "fat": 4.2,
    "fiber": 5.8,
    "sugar": 19.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 333,
    "protein": 14.8,
    "carbs": 71.1,
    "fat": 13.4,
    "fiber": 7.9,
    "sugar": 6.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 209,
    "protein": 29.9,
    "carbs": 49.9,
    "fat": 23.3,
    "fiber": 8.4,
    "sugar": 19.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 95,
    "protein": 29.0,
    "carbs": 53.4,
    "fat": 19.8,
    "fiber": 6.0,
    "sugar": 10.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 242,
    "protein": 29.5,
    "carbs": 25.3,
    "fat": 20.3,
    "fiber": 9.4,
    "sugar": 4.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 323,
    "protein": 20.9,
    "carbs": 20.0,
    "fat": 11.3,
    "fiber": 9.5,
    "sugar": 3.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 68,
    "protein": 5.8,
    "carbs": 61.1,
    "fat": 11.4,
    "fiber": 4.4,
    "sugar": 3.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 187,
    "protein": 2.9,
    "carbs": 36.3,
    "fat": 29.8,
    "fiber": 11.7,
    "sugar": 23.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 280,
    "protein": 1.5,
    "carbs": 45.9,
    "fat": 17.9,
    "fiber": 0.8,
    "sugar": 7.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 234,
    "protein": 18.2,
    "carbs": 43.9,
    "fat": 20.9,
    "fiber": 3.8,
    "sugar": 22.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 153,
    "protein": 23.4,
    "carbs": 28.5,
    "fat": 19.1,
    "fiber": 3.1,
    "sugar": 11.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 369,
    "protein": 18.3,
    "carbs": 6.8,
    "fat": 26.6,
    "fiber": 12.1,
    "sugar": 3.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 225,
    "protein": 14.6,
    "carbs": 14.4,
    "fat": 12.6,
    "fiber": 0.5,
    "sugar": 6.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 135,
    "protein": 17.9,
    "carbs": 44.3,
    "fat": 9.1,
    "fiber": 11.6,
    "sugar": 6.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 258,
    "protein": 29.5,
    "carbs": 11.3,
    "fat": 23.8,
    "fiber": 5.0,
    "sugar": 20.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 189,
    "protein": 24.8,
    "carbs": 36.6,
    "fat": 23.2,
    "fiber": 4.2,
    "sugar": 4.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 195,
    "protein": 4.6,
    "carbs": 13.7,
    "fat": 11.4,
    "fiber": 3.4,
    "sugar": 0.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 120,
    "protein": 21.1,
    "carbs": 57.7,
    "fat": 23.0,
    "fiber": 8.5,
    "sugar": 23.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 296,
    "protein": 19.2,
    "carbs": 49.8,
    "fat": 21.7,
    "fiber": 7.0,
    "sugar": 3.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 308,
    "protein": 22.0,
    "carbs": 73.1,
    "fat": 15.2,
    "fiber": 1.9,
    "sugar": 10.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 94,
    "protein": 3.1,
    "carbs": 57.3,
    "fat": 21.0,
    "fiber": 5.2,
    "sugar": 9.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 224,
    "protein": 12.4,
    "carbs": 22.3,
    "fat": 15.2,
    "fiber": 4.9,
    "sugar": 10.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 54,
    "protein": 14.4,
    "carbs": 57.5,
    "fat": 12.0,
    "fiber": 8.7,
    "sugar": 5.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 158,
    "protein": 1.5,
    "carbs": 7.3,
    "fat": 0.9,
    "fiber": 11.7,
    "sugar": 14.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 208,
    "protein": 16.4,
    "carbs": 27.0,
    "fat": 1.7,
    "fiber": 12.8,
    "sugar": 6.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 141,
    "protein": 6.8,
    "carbs": 73.6,
    "fat": 19.0,
    "fiber": 4.6,
    "sugar": 14.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 152,
    "protein": 1.5,
    "carbs": 61.1,
    "fat": 24.2,
    "fiber": 0.8,
    "sugar": 14.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 139,
    "protein": 10.9,
    "carbs": 22.7,
    "fat": 15.8,
    "fiber": 10.5,
    "sugar": 14.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 381,
    "protein": 1.3,
    "carbs": 18.5,
    "fat": 10.8,
    "fiber": 8.2,
    "sugar": 5.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 66,
    "protein": 23.0,
    "carbs": 6.3,
    "fat": 7.8,
    "fiber": 11.5,
    "sugar": 14.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 138,
    "protein": 13.7,
    "carbs": 36.9,
    "fat": 20.2,
    "fiber": 13.5,
    "sugar": 21.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 201,
    "protein": 15.8,
    "carbs": 36.7,
    "fat": 11.6,
    "fiber": 11.4,
    "sugar": 14.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 175,
    "protein": 29.7,
    "carbs": 52.1,
    "fat": 13.8,
    "fiber": 11.5,
    "sugar": 24.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 153,
    "protein": 24.9,
    "carbs": 73.4,
    "fat": 14.1,
    "fiber": 13.0,
    "sugar": 14.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 362,
    "protein": 5.9,
    "carbs": 23.5,
    "fat": 21.1,
    "fiber": 13.6,
    "sugar": 9.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 395,
    "protein": 2.0,
    "carbs": 32.3,
    "fat": 4.6,
    "fiber": 12.9,
    "sugar": 10.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 341,
    "protein": 11.4,
    "carbs": 65.9,
    "fat": 29.5,
    "fiber": 14.8,
    "sugar": 24.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 327,
    "protein": 25.8,
    "carbs": 45.1,
    "fat": 0.9,
    "fiber": 11.2,
    "sugar": 10.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 150,
    "protein": 14.0,
    "carbs": 66.8,
    "fat": 13.2,
    "fiber": 9.2,
    "sugar": 22.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 227,
    "protein": 3.0,
    "carbs": 30.0,
    "fat": 27.8,
    "fiber": 12.8,
    "sugar": 9.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 88,
    "protein": 14.5,
    "carbs": 8.7,
    "fat": 25.0,
    "fiber": 7.5,
    "sugar": 11.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 132,
    "protein": 29.0,
    "carbs": 42.6,
    "fat": 26.7,
    "fiber": 3.5,
    "sugar": 16.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 64,
    "protein": 6.9,
    "carbs": 58.3,
    "fat": 28.4,
    "fiber": 12.2,
    "sugar": 22.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 184,
    "protein": 25.3,
    "carbs": 16.4,
    "fat": 21.7,
    "fiber": 3.7,
    "sugar": 21.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 200,
    "protein": 15.3,
    "carbs": 12.4,
    "fat": 16.8,
    "fiber": 10.0,
    "sugar": 9.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 105,
    "protein": 9.5,
    "carbs": 40.4,
    "fat": 15.1,
    "fiber": 9.0,
    "sugar": 1.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 261,
    "protein": 20.3,
    "carbs": 71.1,
    "fat": 3.7,
    "fiber": 0.5,
    "sugar": 1.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 365,
    "protein": 4.2,
    "carbs": 61.1,
    "fat": 24.3,
    "fiber": 0.8,
    "sugar": 13.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 247,
    "protein": 8.5,
    "carbs": 16.1,
    "fat": 13.1,
    "fiber": 0.8,
    "sugar": 1.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 157,
    "protein": 5.4,
    "carbs": 21.4,
    "fat": 11.0,
    "fiber": 1.6,
    "sugar": 18.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 72,
    "protein": 22.0,
    "carbs": 78.4,
    "fat": 15.7,
    "fiber": 5.4,
    "sugar": 11.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 143,
    "protein": 22.6,
    "carbs": 34.9,
    "fat": 24.8,
    "fiber": 4.3,
    "sugar": 5.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 386,
    "protein": 23.2,
    "carbs": 33.2,
    "fat": 24.8,
    "fiber": 11.1,
    "sugar": 17.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 174,
    "protein": 11.9,
    "carbs": 16.3,
    "fat": 29.7,
    "fiber": 10.8,
    "sugar": 4.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 165,
    "protein": 15.9,
    "carbs": 51.9,
    "fat": 1.0,
    "fiber": 6.1,
    "sugar": 20.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 380,
    "protein": 7.4,
    "carbs": 20.7,
    "fat": 18.4,
    "fiber": 5.8,
    "sugar": 6.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 183,
    "protein": 8.2,
    "carbs": 77.3,
    "fat": 12.2,
    "fiber": 2.9,
    "sugar": 15.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 371,
    "protein": 28.9,
    "carbs": 66.0,
    "fat": 17.6,
    "fiber": 0.7,
    "sugar": 22.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 165,
    "protein": 17.1,
    "carbs": 51.5,
    "fat": 10.0,
    "fiber": 3.2,
    "sugar": 16.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 181,
    "protein": 7.2,
    "carbs": 42.4,
    "fat": 27.4,
    "fiber": 0.5,
    "sugar": 4.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 226,
    "protein": 8.0,
    "carbs": 49.4,
    "fat": 7.9,
    "fiber": 13.8,
    "sugar": 0.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 249,
    "protein": 18.0,
    "carbs": 69.7,
    "fat": 29.9,
    "fiber": 10.2,
    "sugar": 6.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 233,
    "protein": 14.5,
    "carbs": 27.9,
    "fat": 7.5,
    "fiber": 2.4,
    "sugar": 1.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 390,
    "protein": 24.6,
    "carbs": 32.6,
    "fat": 2.7,
    "fiber": 11.8,
    "sugar": 11.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 365,
    "protein": 27.9,
    "carbs": 21.5,
    "fat": 21.8,
    "fiber": 6.4,
    "sugar": 1.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 165,
    "protein": 26.5,
    "carbs": 52.1,
    "fat": 19.7,
    "fiber": 3.5,
    "sugar": 13.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 333,
    "protein": 26.2,
    "carbs": 69.2,
    "fat": 25.0,
    "fiber": 7.0,
    "sugar": 23.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 134,
    "protein": 20.8,
    "carbs": 11.6,
    "fat": 17.3,
    "fiber": 8.5,
    "sugar": 6.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 181,
    "protein": 5.4,
    "carbs": 41.0,
    "fat": 4.6,
    "fiber": 10.8,
    "sugar": 16.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 76,
    "protein": 28.9,
    "carbs": 54.7,
    "fat": 27.6,
    "fiber": 1.1,
    "sugar": 24.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 274,
    "protein": 24.0,
    "carbs": 50.0,
    "fat": 20.3,
    "fiber": 3.7,
    "sugar": 21.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 160,
    "protein": 13.8,
    "carbs": 7.7,
    "fat": 23.4,
    "fiber": 13.6,
    "sugar": 4.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 131,
    "protein": 6.6,
    "carbs": 22.8,
    "fat": 28.1,
    "fiber": 3.7,
    "sugar": 8.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 193,
    "protein": 12.6,
    "carbs": 10.7,
    "fat": 10.7,
    "fiber": 3.4,
    "sugar": 9.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 364,
    "protein": 26.8,
    "carbs": 20.1,
    "fat": 19.1,
    "fiber": 3.5,
    "sugar": 7.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 81,
    "protein": 27.9,
    "carbs": 8.4,
    "fat": 29.6,
    "fiber": 3.8,
    "sugar": 0.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 243,
    "protein": 17.0,
    "carbs": 20.2,
    "fat": 7.7,
    "fiber": 12.2,
    "sugar": 13.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 328,
    "protein": 9.6,
    "carbs": 38.7,
    "fat": 5.1,
    "fiber": 12.6,
    "sugar": 2.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 385,
    "protein": 16.7,
    "carbs": 27.3,
    "fat": 19.5,
    "fiber": 7.1,
    "sugar": 23.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 367,
    "protein": 12.7,
    "carbs": 37.8,
    "fat": 10.1,
    "fiber": 2.1,
    "sugar": 10.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 229,
    "protein": 6.1,
    "carbs": 12.2,
    "fat": 7.5,
    "fiber": 6.1,
    "sugar": 24.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 367,
    "protein": 1.0,
    "carbs": 6.6,
    "fat": 8.6,
    "fiber": 3.9,
    "sugar": 12.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 107,
    "protein": 14.5,
    "carbs": 13.9,
    "fat": 19.0,
    "fiber": 3.6,
    "sugar": 21.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 240,
    "protein": 6.0,
    "carbs": 71.1,
    "fat": 23.1,
    "fiber": 6.9,
    "sugar": 17.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 168,
    "protein": 5.0,
    "carbs": 65.4,
    "fat": 1.0,
    "fiber": 1.7,
    "sugar": 11.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 154,
    "protein": 22.4,
    "carbs": 64.4,
    "fat": 0.3,
    "fiber": 14.6,
    "sugar": 9.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 283,
    "protein": 25.1,
    "carbs": 65.8,
    "fat": 29.0,
    "fiber": 8.8,
    "sugar": 23.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 350,
    "protein": 7.9,
    "carbs": 40.2,
    "fat": 18.0,
    "fiber": 12.1,
    "sugar": 17.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 299,
    "protein": 8.9,
    "carbs": 50.0,
    "fat": 17.7,
    "fiber": 12.3,
    "sugar": 6.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 295,
    "protein": 13.2,
    "carbs": 55.4,
    "fat": 12.9,
    "fiber": 5.4,
    "sugar": 0.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 218,
    "protein": 18.2,
    "carbs": 11.9,
    "fat": 6.2,
    "fiber": 5.7,
    "sugar": 20.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 67,
    "protein": 10.9,
    "carbs": 29.4,
    "fat": 20.9,
    "fiber": 9.2,
    "sugar": 2.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 185,
    "protein": 20.0,
    "carbs": 54.2,
    "fat": 15.3,
    "fiber": 8.4,
    "sugar": 3.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 164,
    "protein": 2.3,
    "carbs": 25.7,
    "fat": 21.3,
    "fiber": 13.7,
    "sugar": 7.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 62,
    "protein": 1.1,
    "carbs": 71.7,
    "fat": 27.8,
    "fiber": 1.7,
    "sugar": 1.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 160,
    "protein": 5.7,
    "carbs": 58.2,
    "fat": 17.5,
    "fiber": 14.6,
    "sugar": 24.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 71,
    "protein": 3.4,
    "carbs": 51.1,
    "fat": 29.1,
    "fiber": 10.3,
    "sugar": 22.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 198,
    "protein": 12.2,
    "carbs": 41.6,
    "fat": 4.7,
    "fiber": 4.9,
    "sugar": 21.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 156,
    "protein": 8.5,
    "carbs": 57.9,
    "fat": 23.0,
    "fiber": 6.2,
    "sugar": 12.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 337,
    "protein": 21.7,
    "carbs": 39.0,
    "fat": 16.3,
    "fiber": 9.4,
    "sugar": 9.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 343,
    "protein": 8.2,
    "carbs": 64.2,
    "fat": 14.0,
    "fiber": 5.4,
    "sugar": 15.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 391,
    "protein": 21.1,
    "carbs": 13.9,
    "fat": 5.3,
    "fiber": 1.0,
    "sugar": 4.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 149,
    "protein": 15.4,
    "carbs": 66.5,
    "fat": 21.5,
    "fiber": 6.2,
    "sugar": 11.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 263,
    "protein": 6.8,
    "carbs": 21.9,
    "fat": 21.2,
    "fiber": 14.2,
    "sugar": 17.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 130,
    "protein": 17.0,
    "carbs": 44.2,
    "fat": 21.4,
    "fiber": 14.1,
    "sugar": 3.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 227,
    "protein": 25.7,
    "carbs": 72.3,
    "fat": 7.9,
    "fiber": 12.6,
    "sugar": 14.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 71,
    "protein": 16.8,
    "carbs": 30.8,
    "fat": 20.4,
    "fiber": 7.6,
    "sugar": 11.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 124,
    "protein": 8.4,
    "carbs": 47.1,
    "fat": 13.8,
    "fiber": 5.2,
    "sugar": 22.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 393,
    "protein": 18.8,
    "carbs": 37.8,
    "fat": 15.6,
    "fiber": 13.7,
    "sugar": 0.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 299,
    "protein": 2.8,
    "carbs": 60.1,
    "fat": 18.7,
    "fiber": 11.9,
    "sugar": 19.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 398,
    "protein": 29.2,
    "carbs": 44.6,
    "fat": 17.0,
    "fiber": 0.6,
    "sugar": 6.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 301,
    "protein": 19.1,
    "carbs": 21.7,
    "fat": 25.1,
    "fiber": 6.8,
    "sugar": 23.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 202,
    "protein": 8.8,
    "carbs": 13.5,
    "fat": 21.6,
    "fiber": 8.5,
    "sugar": 24.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 335,
    "protein": 18.0,
    "carbs": 18.8,
    "fat": 22.3,
    "fiber": 2.2,
    "sugar": 15.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 83,
    "protein": 7.3,
    "carbs": 29.0,
    "fat": 12.9,
    "fiber": 4.8,
    "sugar": 22.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 207,
    "protein": 20.8,
    "carbs": 73.0,
    "fat": 23.1,
    "fiber": 6.7,
    "sugar": 7.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chicken Curry",
    "category": "Moderate",
    "calories": 388,
    "protein": 9.4,
    "carbs": 16.6,
    "fat": 5.3,
    "fiber": 3.2,
    "sugar": 21.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 219,
    "protein": 27.6,
    "carbs": 58.7,
    "fat": 29.7,
    "fiber": 10.9,
    "sugar": 23.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 209,
    "protein": 14.3,
    "carbs": 20.5,
    "fat": 1.8,
    "fiber": 2.6,
    "sugar": 10.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 289,
    "protein": 13.6,
    "carbs": 56.8,
    "fat": 14.2,
    "fiber": 12.5,
    "sugar": 0.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 278,
    "protein": 8.0,
    "carbs": 58.1,
    "fat": 4.7,
    "fiber": 1.2,
    "sugar": 18.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 337,
    "protein": 25.1,
    "carbs": 36.9,
    "fat": 11.0,
    "fiber": 9.0,
    "sugar": 3.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 158,
    "protein": 27.4,
    "carbs": 65.2,
    "fat": 25.5,
    "fiber": 7.7,
    "sugar": 0.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 262,
    "protein": 23.2,
    "carbs": 77.5,
    "fat": 13.1,
    "fiber": 6.3,
    "sugar": 11.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 197,
    "protein": 8.3,
    "carbs": 70.8,
    "fat": 10.3,
    "fiber": 6.7,
    "sugar": 9.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Burger",
    "category": "Junk",
    "calories": 299,
    "protein": 25.6,
    "carbs": 7.0,
    "fat": 4.3,
    "fiber": 8.1,
    "sugar": 21.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Egg Omelette",
    "category": "Healthy",
    "calories": 96,
    "protein": 12.1,
    "carbs": 63.6,
    "fat": 24.8,
    "fiber": 5.4,
    "sugar": 19.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Mango",
    "category": "Healthy",
    "calories": 283,
    "protein": 17.1,
    "carbs": 75.7,
    "fat": 25.1,
    "fiber": 0.6,
    "sugar": 13.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 369,
    "protein": 11.7,
    "carbs": 43.3,
    "fat": 2.7,
    "fiber": 14.6,
    "sugar": 17.1,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 97,
    "protein": 1.4,
    "carbs": 47.0,
    "fat": 17.7,
    "fiber": 5.8,
    "sugar": 11.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Samosa",
    "category": "Junk",
    "calories": 312,
    "protein": 13.2,
    "carbs": 21.4,
    "fat": 2.5,
    "fiber": 7.9,
    "sugar": 18.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 358,
    "protein": 6.8,
    "carbs": 59.1,
    "fat": 12.8,
    "fiber": 11.3,
    "sugar": 19.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 347,
    "protein": 21.9,
    "carbs": 73.2,
    "fat": 17.1,
    "fiber": 1.0,
    "sugar": 19.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 183,
    "protein": 12.8,
    "carbs": 34.0,
    "fat": 19.5,
    "fiber": 0.2,
    "sugar": 9.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 351,
    "protein": 8.2,
    "carbs": 46.8,
    "fat": 18.1,
    "fiber": 8.0,
    "sugar": 22.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 344,
    "protein": 14.9,
    "carbs": 52.6,
    "fat": 27.2,
    "fiber": 9.8,
    "sugar": 7.6,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 261,
    "protein": 24.2,
    "carbs": 47.8,
    "fat": 20.9,
    "fiber": 11.0,
    "sugar": 14.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Rice",
    "category": "Healthy",
    "calories": 77,
    "protein": 27.6,
    "carbs": 73.3,
    "fat": 0.8,
    "fiber": 7.5,
    "sugar": 1.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 365,
    "protein": 24.9,
    "carbs": 34.5,
    "fat": 17.0,
    "fiber": 11.5,
    "sugar": 8.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 243,
    "protein": 17.0,
    "carbs": 64.4,
    "fat": 3.7,
    "fiber": 14.2,
    "sugar": 12.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 269,
    "protein": 16.8,
    "carbs": 62.2,
    "fat": 3.5,
    "fiber": 4.4,
    "sugar": 24.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 371,
    "protein": 15.7,
    "carbs": 62.9,
    "fat": 12.9,
    "fiber": 7.1,
    "sugar": 4.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Idli",
    "category": "Healthy",
    "calories": 222,
    "protein": 12.8,
    "carbs": 36.3,
    "fat": 3.5,
    "fiber": 0.1,
    "sugar": 3.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Banana",
    "category": "Healthy",
    "calories": 78,
    "protein": 26.3,
    "carbs": 69.9,
    "fat": 28.3,
    "fiber": 1.9,
    "sugar": 10.5,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 210,
    "protein": 24.7,
    "carbs": 6.9,
    "fat": 22.6,
    "fiber": 13.2,
    "sugar": 13.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Apple",
    "category": "Healthy",
    "calories": 102,
    "protein": 18.2,
    "carbs": 39.5,
    "fat": 10.9,
    "fiber": 10.3,
    "sugar": 22.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Fish Curry",
    "category": "Healthy",
    "calories": 247,
    "protein": 6.9,
    "carbs": 11.2,
    "fat": 9.3,
    "fiber": 11.5,
    "sugar": 12.7,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 81,
    "protein": 17.8,
    "carbs": 53.6,
    "fat": 5.6,
    "fiber": 12.8,
    "sugar": 13.4,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Pizza",
    "category": "Junk",
    "calories": 223,
    "protein": 15.5,
    "carbs": 41.1,
    "fat": 9.9,
    "fiber": 7.1,
    "sugar": 10.3,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Biryani",
    "category": "Moderate",
    "calories": 173,
    "protein": 6.2,
    "carbs": 17.7,
    "fat": 11.3,
    "fiber": 12.1,
    "sugar": 21.0,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Dosa",
    "category": "Healthy",
    "calories": 393,
    "protein": 19.8,
    "carbs": 41.1,
    "fat": 9.1,
    "fiber": 0.3,
    "sugar": 17.2,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 101,
    "protein": 10.9,
    "carbs": 24.3,
    "fat": 25.5,
    "fiber": 3.6,
    "sugar": 17.8,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  },
  {
    "name": "Chapati",
    "category": "Healthy",
    "calories": 317,
    "protein": 2.1,
    "carbs": 43.2,
    "fat": 6.3,
    "fiber": 3.5,
    "sugar": 12.9,
    "advantages": [
      "Provides energy",
      "Supports body functions"
    ],
    "disadvantages": [
      "Excess intake may cause health issues"
    ],
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving"
  }
]