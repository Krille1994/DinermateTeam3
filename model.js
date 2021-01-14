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
    users:[
        {
            username: 'ola.nordmann@mail.no',
            password: '123',
            firstname: 'Ola',
            surname: 'Nordmann',
        },
        {
            username: 'robin.nordmann@mail.no',
            password: '123',
            firstname: 'Robin',
            surname: 'Nordmann',
        },
    ],
    
    mainPage: {
        
    },
    createMeal: {
        mealName: 'Hamburger and fries',
        ingredients: [
            {
                ingredient: 'Minced Meat',
                quantity: '400g',
                optional: false,
            },
            {
                ingredient: 'Fries',
                quantity: '180g',
                optional: false,
            },
            {
                ingredient: 'Tomato',
                quantity: '1',
                optional: true,
            },
        ],
        recipe: '',
    },
    suggestedMeals: {
        suggestedMealsStart: 0,
        missingIngredients: [],
    },
    savedMeals: [
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
    storage: [
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
            item: 'mustard',
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
    shoppingList: [
        {
            item: 'Mushroom',
            quantity: '100g',
        },
        {
            item: 'Chicken',
            quantity: '400g',
        },
        {
            item: 'Garlic',
            quantity: '2',
        },
    ],
}