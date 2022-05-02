import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
        slug: 'katsu-curry',
        title: 'katsu-curry',
        description: 'A delicious curry',
        ingredients: [
          '1 tbs olive oil',
          '1 onion, chopped',
          '2 cloves garlic, chopped',
          'curry powder'
        ],
        method: [
          'Cook with oil',
          'Cook quick',
          'Do not overcook'
        ]
      },
      {
        slug: 'Chicken Pesto',
        title: 'Chicken Pesto',
        description: 'A delicious healthy dish',
        ingredients: [
          '1 tbs olive oil',
          '1 onion, chopped',
          '2 cloves garlic, chopped',
          'pesto powder'
        ],
        method: [
          'Cook with oil',
          'Cook quick',
          'Do not overcook'
        ]
      },
      {
        slug: 'Alfredo',
        title: 'Alfredo',
        description: 'A delicious creamy pasta dish',
        ingredients: [
          '1 tbs olive oil',
          '1 onion, chopped',
          '2 cloves garlic, chopped',
          'lots of Cheese'
        ],
        method: [
          'Cook with oil',
          'Cook quick',
          'Do not overcook'
        ]
      }
   ]
  },
  mutations: {
    ADD_RECIPE (state, recipe) {
      state.recipes.push(recipe)
    }
  },
  actions: {
  },
  modules: {
  }
})
