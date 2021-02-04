const model = {
    login: {
        user: '',
        password: '',
    },
    registerPage: {
        firstname: 'Ola',
        surname: 'Nordmann',
        email: 'ola.nordmann@mail.no',
        password: '*******',
    },
    users: [
        {
            ID: 0,
            username: 'ola.nordmann@mail.no',
            password: '123',
            firstname: 'Ola',
            surname: 'Nordmann',
        },
        {
            ID: 1,
            username: 'robin.nordmann@mail.no',
            password: '123',
            firstname: 'Robin',
            surname: 'Nordmann',
        },
    ],
    userID: 0,
    createMeal: {
        mealName: '',
        ingredients: [
            {
                ingredient: '',
                quantity: '',
                optional: false,
            },
            
        ],
        recipe: '',
    },
    suggestedMeals: {
        suggestedMealsStart: 0,
        suggestedMeals: [],
        missingIngredients: [],
    },
    savedMealsValues: {
        index: false,
        loopStart: 0,
        loopEnd: 8,
    },
    savedMeals: [
        [
            {
                mealName: 'Chicken & Rice',
                ingredients: [
                    {
                        ingredient: 'Chicken',
                        quantity: '400g',
                        optional: false,
                    },
                    {
                        ingredient: 'Rice',
                        quantity: '120g',
                        optional: false,
                    },
                    {
                        ingredient: 'Broccoli',
                        quantity: '1',
                        optional: false,
                    },
                    {
                        ingredient: 'Random sauce',
                        quantity: '',
                        optional: true,
                    },
                ],
                recipe: '',
            },
            {
                mealName: 'temporary1',
                ingredients: [
                    {
                        ingredient: 'Minced Meat',
                        quantity: '400g',
                        optional: false,
                    },
                ],
                recipe: '',
            },
            {
                mealName: 'temporary2',
                ingredients: [
                    {
                        ingredient: 'Minced Meat',
                        quantity: '400g',
                        optional: false,
                    },
                ],
                recipe: '',
            },
            {
                mealName: 'temporary3',
                ingredients: [
                    {
                        ingredient: 'Minced Meat',
                        quantity: '400g',
                        optional: false,
                    },
                    {
                        ingredient: 'Missing Ingredient',
                        quantity: '400g',
                        optional: false,
                    },
                    {
                        ingredient: 'Missing Ingredient',
                        quantity: '400g',
                        optional: false,
                    },
                    {
                        ingredient: 'Missing Ingredient',
                        quantity: '400g',
                        optional: false,
                    },
                ],
                recipe: '',
            },
            {
                mealName: 'Taco',
                ingredients: [
                    {
                        ingredient: 'Minced Meat',
                        quantity: '400g',
                        optional: false,
                    },
                    {
                        ingredient: 'Tortillas',
                        quantity: '4',
                        optional: false,
                    },
                    {
                        ingredient: 'Cheese',
                        quantity: '100g',
                        optional: false,
                    },
                    {
                        ingredient: 'Sour Cream',
                        quantity: '',
                        optional: false,
                    },
                    {
                        ingredient: 'fish',
                        quantity: '',
                        optional: true,
                    }
                ],
                recipe: '',
            },
            {
                mealName: 'Salmon & Pasta',
                ingredients: [
                    {
                        ingredient: 'Salmon',
                        quantity: '400g',
                        optional: false,
                    },
                    {
                        ingredient: 'Pasta',
                        quantity: '100g',
                        optional: false,
                    },
                    {
                        ingredient: 'Mushroom',
                        quantity: '1',
                        optional: true,
                    },
                ],
                recipe: '',
            },
            {
                mealName: 'Pizza',
                ingredients: [
                    {
                        ingredient: 'Flour',
                        quantity: '250g',
                        optional: false,
                    },
                    {
                        ingredient: 'Yeast',
                        quantity: '10g',
                        optional: false,
                    },
                    {
                        ingredient: 'Pizzasauce',
                        quantity: '1 cup',
                        optional: false,
                    },
                    {
                        ingredient: 'Cheese',
                        quantity: '100g',
                        optional: false,
                    },
                    {
                        ingredient: 'Ham',
                        quantity: '80g',
                        optional: true,
                    },
                    {
                        ingredient: 'Mushrooms',
                        quantity: '80g',
                        optional: true,
                    },
                    {
                        ingredient: 'Onion',
                        quantity: '1/2',
                        optional: true,
                    },
                    {
                        ingredient: 'Mushrooms',
                        quantity: '80g',
                        optional: true,
                    },
                    {
                        ingredient: 'Pinapple',
                        quantity: '1/2 box',
                        optional: true,
                    },
                    {
                        ingredient: 'Pizzaspices',
                        quantity: '',
                        optional: false,
                    },
                ],
            },
            {
                mealName: 'Mediterranean Lamb Burgers',
                ingredients: [
                    {
                        ingredient: 'Ground lamb',
                        quantity: '400g',
                        optional: false,
                    },
                    {
                        ingredient: 'ground beef',
                        quantity: '200g',
                        optional: false,
                    },
                    {
                        ingredient: 'mint',
                        quantity: '3 tablespoons',
                        optional: true,
                    },
                    {
                        ingredient: 'Garlic',
                        quantity: '1 clove',
                        optional: false,
                    },
                    {
                        ingredient: 'Greek yoghurt',
                        quantity: '40g',
                        optional: false,
                    },
                    {
                        ingredient: 'tomato',
                        quantity: '4 slices',
                        optional: true,
                    },
                    {
                        ingredient: 'Onion',
                        quantity: '1/4',
                        optional: true,
                    },
                    {
                        ingredient: 'feta cheese',
                        quantity: '30g',
                        optional: true,
                    },
                    {
                        ingredient: 'ciabatta sandwich rolls',
                        quantity: '2',
                        optional: false,
                    },
                    {
                        ingredient: 'arugula leaves',
                        quantity: '8',
                        optional: true,
                    },
                ],
            },

            {
                mealName: 'Rosemary Braised Lamb Shanks',
                ingredients: [
                    {
                        ingredient: 'Lamb shanks',
                        quantity: '6',
                        optional: false,
                    },
                    {
                        ingredient: 'carrots',
                        quantity: '80g',
                        optional: false,
                    },
                    {
                        ingredient: 'red wine',
                        quantity: '500ml',
                        optional: false,
                    },
                    {
                        ingredient: 'Garlic',
                        quantity: '5 cloves',
                        optional: false,
                    },
                    {
                        ingredient: 'chicken broth',
                        quantity: '100ml',
                        optional: false,
                    },
                    {
                        ingredient: 'tomato',
                        quantity: '2',
                        optional: false,
                    },
                    {
                        ingredient: 'Onion',
                        quantity: '2',
                        optional: false,
                    },
                    {
                        ingredient: 'Beef broth',
                        quantity: '100ml',
                        optional: false,
                    },
                    {
                        ingredient: 'rosemary',
                        quantity: '5 teaspoons',
                        optional: true,
                    },
                    {
                        ingredient: 'thyme',
                        quantity: '2 teaspoons',
                        optional: true,
                    },
                ],
            },
            {
                mealName: 'Egg, bacon & Beans',
                ingredients: [
                    {
                        ingredient: 'Eggs',
                        quantity: '4',
                        optional: false,
                    },
                    {
                        ingredient: 'Bacon',
                        quantity: '100g',
                        optional: false,
                    },
                    {
                        ingredient: 'Beans',
                        quantity: '120g',
                        optional: false,
                    },
                ],
            },
            {
                mealName: 'Chicken & Spinnach',
                ingredients: [
                    {
                        ingredient: 'Chicken',
                        quantity: '400g',
                        optional: false,
                    },
                    {
                        ingredient: 'Spinnach',
                        quantity: '100g',
                        optional: false,
                    },
                    {
                        ingredient: 'Pasta',
                        quantity: '120g',
                        optional: false,
                    },
                    {
                        ingredient: 'Cheese',
                        quantity: '100g',
                        optional: false,
                    },
                    {
                        ingredient: 'Garlic',
                        quantity: '2 cloves',
                        optional: false,
                    },
                    {
                        ingredient: 'Maizenna',
                        quantity: '1 spoon',
                        optional: false,
                    },
                    {
                        ingredient: 'Olive-oil',
                        quantity: '50ml',
                        optional: true,
                    },
                    {
                        ingredient: 'Parmezan',
                        quantity: '60g',
                        optional: true,
                    },
                    {
                        ingredient: 'Spring union',
                        quantity: '2 cloves',
                        optional: true,
                    },
                ],
                recipe: '',
            },
        ],
        [
            {
                mealName: 'Chicken & Rice',
                ingredients: [
                    {
                        ingredient: 'Chicken',
                        quantity: '400g',
                        optional: false,
                    },
                    {
                        ingredient: 'Rice',
                        quantity: '120g',
                        optional: false,
                    },
                    {
                        ingredient: 'Broccoli',
                        quantity: '1',
                        optional: false,
                    },
                    {
                        ingredient: 'Random sauce',
                        quantity: '',
                        optional: true,
                    },
                ],
                recipe: '',
            },
            {
                mealName: 'Taco',
                ingredients: [
                    {
                        ingredient: 'Minced Meat',
                        quantity: '400g',
                        optional: false,
                    },
                    {
                        ingredient: 'Tortillas',
                        quantity: '4',
                        optional: false,
                    },
                    {
                        ingredient: 'Cheese',
                        quantity: '100g',
                        optional: false,
                    },
                    {
                        ingredient: 'Sour Cream',
                        quantity: '',
                        optional: false,
                    }
                ],
                recipe: '',
            },
            {
                mealName: 'Salmon & Pasta',
                ingredients: [
                    {
                        ingredient: 'Salmon',
                        quantity: '400g',
                        optional: false,
                    },
                    {
                        ingredient: 'Pasta',
                        quantity: '100g',
                        optional: false,
                    },
                    {
                        ingredient: 'Mushroom',
                        quantity: '1',
                        optional: true,
                    },
                ],
                recipe: '',
            },
        ],
    ],
    changeStorageItem: '',

    newStorageItem: {
        item: '',
        quantity: '',
        date: '',
    },
    storage: [
        [
            {
                item: 'Minced Meat',
                quantity: '400g',
                date: '2021-04-05',
            },
            {
                item: 'Tortillas',
                quantity: '4',
                date: '2021-04-05',
            },
            {
                item: 'Cheese',
                quantity: '100g',
                date: '2021-04-05',
            },
            {
                item: 'Sour Cream',
                quantity: '',
                date: '2021-04-05',
            },
            {
                item: 'Beans',
                quantity: '120g',
                date: '2021-04-04',
            },
            {
                item: 'Chicken',
                quantity: '400g',
                date: '2021-01-05',
            },
            {
                item: 'Pasta',
                quantity: '200g',
                date: '2025-02-03',
            },
            {
                item: 'Broccoli',
                quantity: '1',
                date: '',
            },
            {
                item: 'Carrots',
                quantity: '8',
                date: '',
            },
            {
                item: 'Potatoes',
                quantity: '1000g',
                date: '2021-02-03',
            },
            {
                item: 'Mustard',
                quantity: '1',
                date: '2022-04-22',
            },
            {
                item: 'Paprika',
                quantity: '2',
                date: '2021-02-03',
            },
            {
                item: 'Celery',
                quantity: '2 stalks',
                date: '2021-02-10',
            },
            {
                item: 'Tomatoes',
                quantity: '2',
                date: '2021-01-18',
            },
            {
                item: 'Bacon',
                quantity: '200g',
                date: '2021-03-17',
            },
            {
                item: 'Peas',
                quantity: '160g',
                date: '2022-05-01',
            },
            {
                item: 'Ham',
                quantity: '400g',
                date: '2021-06-13',
            },
        ],
        [
            {
                item: 'Tortillas',
                quantity: '4',
                date: '2021-04-05',
            },
            {
                item: 'Cheese',
                quantity: '100g',
                date: '2021-04-05',
            },
            {
                item: 'Sour Cream',
                quantity: '',
                date: '2021-04-05',
            },
            {
                item: 'Beans',
                quantity: '120g',
                date: '2021-04-04',
            },
            {
                item: 'Chicken',
                quantity: '400g',
                date: '2021-01-05',
            },
            {
                item: 'Pasta',
                quantity: '200g',
                date: '2025-02-03',
            },
            {
                item: 'Broccoli',
                quantity: '1',
                date: '',
            },
            {
                item: 'Carrots',
                quantity: '8',
                date: '',
            },
            {
                item: 'Potatoes',
                quantity: '1000g',
                date: '2021-02-03',
            },
            {
                item: 'Mustard',
                quantity: '1',
                date: '2022-04-22',
            },
            {
                item: 'Paprika',
                quantity: '2',
                date: '2021-02-03',
            },
            {
                item: 'Celery',
                quantity: '2 stalks',
                date: '2021-02-10',
            },
            {
                item: 'Tomatoes',
                quantity: '2',
                date: '2021-01-18',
            },
            {
                item: 'Bacon',
                quantity: '200g',
                date: '2021-03-17',
            },
            {
                item: 'Peas',
                quantity: '160g',
                date: '2022-05-01',
            },
            {
                item: 'Ham',
                quantity: '400g',
                date: '2021-06-13',
            },
        ],
    ],
    shoppingList: [
        [
            {
                item: 'Mushroom',
                quantity: '',
                date: 'no date',
            },
            {
                item: 'Chicken',
                quantity: '',
                date: 'no date',
            },
            {
                item: 'Garlic',
                quantity: '',
                date: 'no date',
            },
        ],
        [
            {
                item: 'Fish',
                quantity: '',
                date: 'no date',
            },
            {
                item: 'Chicken',
                quantity: '',
                date: 'no date',
            },
            {
                item: 'Garlic',
                quantity: '',
                date: 'no date',
            },
        ],
    ],
    shoppingListPermaBan: [
        [

        ],
        [

        ],
    ],
}