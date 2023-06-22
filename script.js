// 'use strict'
// class Recipe {
//   constructor(recipe) {
//     this.name = recipe.name
//     this.ingridients = recipe.ingridients
//     this.cookingTime = recipe.cookingTime
//     this.cookingMethod = recipe.cookingMethod
//     this.nutritionalInfomation = recipe.nutritionalInfomation
//   }
// }
// class CountryRecipe extends Recipe {
//   constructor(newIngridients, newCookingMethode, ...args) {
//     super(...args)
//     this.ingridients = [...ingridients, ...newIngridients]
//     this.methode = [...cookingMethod, ...newCookingMethode]
//     console.log(ingridients)
//   }
// }

// const ugali = new Recipe({
//   name: 'Ugali',
//   ingridients: ['Maize flour', 'water'],
//   cookingTime: '20 minutes',
//   nutritionalInfomation: {
//     calories: '154 kcals',
//     protein: '3g',
//     carbohydrates: '68 g',
//     fat: '< 1 g',
//   },
//   cookingMethod: [
//     `Mix the maize and water to form a dough`,
//     `Knead for about five mins until it becomes smooth`,
//   ],
// })
// const NigerianUgali = new CountryRecipe(ugali)

'use strict'

class Recipe {
  constructor(recipe) {
    this.name = recipe.name
    this.ingridients = recipe.ingridients
    this.cookingTime = recipe.cookingTime
    this.cookingMethod = recipe.cookingMethod
    this.nutritionalInfomation = recipe.nutritionalInfomation
  }
}

class CountryRecipe extends Recipe {
  constructor(newIngridients, newCookingMethod, ...args) {
    super(...args)
    this.ingridients = [...args[0].ingridients, ...newIngridients]
    this.cookingMethod = [...args[0].cookingMethod, ...newCookingMethod]
  }
}

const ugali = new Recipe({
  name: 'Ugali',
  ingridients: ['Maize flour', 'water'],
  cookingTime: '20 minutes',
  nutritionalInfomation: {
    calories: '154 kcals',
    protein: '3g',
    carbohydrates: '68 g',
    fat: '< 1 g',
  },
  cookingMethod: [
    'Mix the maize and water to form a dough',
    'Knead for about five mins until it becomes smooth',
  ],
})

const NigerianUgali = new CountryRecipe(
  ['Palm oil'],
  ['Add palm oil and stir well'],
  ugali,
)

console.log(NigerianUgali)
