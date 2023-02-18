let menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: []
    }, 
    addDishToCourse(courseName, dishName, dishPrice) {
        let dish = {}; 
        dish.name = dishName;
        dish.price = dishPrice; 
        if(courseName === 'appetizers') {
            menu.courses.appetizers.push(dish);
        } else if(courseName === 'mains') {
            menu.courses.mains.push(dish);
        } else if(courseName === 'desserts') {
            menu.courses.desserts.push(dish);
        }; 
    },
    getRandomDishfFromCourse(courseName) {
        if(courseName === 'appetizers') {
            dishes = menu.courses.appetizers; 
            index = Math.floor(Math.random() * dishes.length); 
            return dishes[index]; 
        } else if(courseName === 'mains') {
            dishes = menu.courses.mains; 
            index = Math.floor(Math.random() * dishes.length);
            return dishes[index];  
        } else if (courseName === 'desserts') {
            dishes = menu.courses.desserts;
            index = Math.floor(Math.random() * dishes.length); 
            return dishes[index]; 
        } else {
            return `Not a valid course name.`
        }
    },
    generateRandomMeal() {
        appetizer = menu.getRandomDishfFromCourse('appetizers'); 
        main = menu.getRandomDishfFromCourse('mains'); 
        dessert = menu.getRandomDishfFromCourse('desserts')
        totalPriceOfMeal = appetizer.price + main.price + dessert.price; 
        return `Your meal for the night will start off with ${appetizer.name}. For the main course you will have ${main.name}. And for dessert, ${dessert.name}. The total cost of your meal will be ${totalPriceOfMeal} dollars. `
    },


}; 

var dishes; 
var index; 
var appetizer; 
var main; 
var dessert; 
var totalPriceOfMeal; 

menu.addDishToCourse('appetizers', 'Cheese Plate', 11);  
menu.addDishToCourse('appetizers', 'Salad', 7); 
menu.addDishToCourse('appetizers', 'Fries', 10);
menu.addDishToCourse('appetizers', 'Soup', 6);
menu.addDishToCourse('mains', 'Pasta', 35);  
menu.addDishToCourse('mains', 'Steak', 50); 
menu.addDishToCourse('mains', 'Falafal Plate', 17);
menu.addDishToCourse('mains', 'Curry', 16);
menu.addDishToCourse('desserts', 'Tiramisu', 8);
menu.addDishToCourse('desserts', 'Brownie', 4);
menu.addDishToCourse('desserts', 'Ice Cream', 5);
menu.addDishToCourse('desserts', 'Carrot Cake', 8);
menu.addDishToCourse('desserts', 'Derby Pie', 4);

let meal = menu.generateRandomMeal(); 

console.log(meal); 
