const model = {
    registerPage: {
        firstName: 'Ola',
        surName: 'Nordmann',
        email: 'ola.nordmann@mail.no',
        password: '*******',
    },
    users:[
        {
            username: '',
            password: '',
            firstName: '',
            surName: '',
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
    ],
    storage: [
        {
            item: 'Chicken',
            quantity: '400g',
            date: '15/1-21',
        },
        {
            item: 'Pasta',
            quantity: '200g',
            date: '12/4-26',
        },
        {
            item: 'Broccoli',
            quantity: '1',
            date: '',
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