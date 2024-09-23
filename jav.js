
const thanksgivingMeal = {
    starter : { 
        fruit: "honeydew melon",
        wine: "moscato",
        calories: 180
    },
    entree : {
        meat: "Turkey",
        alt: "Stuffed green peppers",
        vegetables : {
            potatoes: "Creamed mashed potatoes",
            greens: "French beans",
            salad: "Radacchio"
            },
        sides : {
            bread: "garlic bread rolls",
            pasta: "Macaroni and Cheese"
            },
        calories: 450
        },
    dessert : {
        ice_cream: "pumpkin-vanilla",
        cake: "frosted pumpkin pie",
        calories: 300
    },
    total_cost : 25.0,
    senior_discount: .10,
    prettyPrint : function(){
       let menuStr = `Start your meal with ${this.starter.fruit}, ${this.starter.wine}. Help yourself to 
       ${this.entree.meat} or ${this.entree.alt} with ${this.entree.salad} ${this.entree.beans} and ${this.entree.potatoes}. Have a side! Planty of ${this.entree.sides.bread} and ${this.entree.sides.pasta}. Finish your meal with a sweet ${this.dessert.ice_cream} or ${this.dessert.cake}`
       return menuStr;
    },

    totalPrice(isSenior) {
        let price = this.total_cost
        if(isSenior == "yes"){
            console.log("You get a discount")
            price = price - price * (this.senior_discount)
            }
            else{
                price = price 
            }
            priceStr = `Seniors get a 10% discount, the total cost for ur Thanksgiving meal? Your price: $${price}`
            let priceArea = document.querySelector(".priceInfo");
            priceArea.textContent = priceStr
    },
    totalCalories : function() {
        // Add the total calories
        return (this.starter.calories + this.entree.calories)},
    caloriesFrom: function(indicator) {
 
        indicator = parseInt(indicator);
        switch(indicator){
            case 1:
                return `starter : ${this.starter.calories}`
            case 2: 
                return `entree : ${this.entree.calories}`
            case 3: 
                return `dessert : ${this.dessert.calories}`
        }
    }
};

let fullMeal = document.querySelector(".fullMeal");
let greeting = document.querySelector(".greeting");

greeting.textContent = "Enjoy your Thanksgiving meal!";
fullMeal.textContent = thanksgivingMeal.prettyPrint();
senior = "yes"
thanksgivingMeal.totalPrice(senior)

totalCalories = thanksgivingMeal.totalCalories()
let indicator = prompt("What part of meal do u want the amout of calories for? 1-starter, 2-entree, 3-desert")
let caloriesStr = thanksgivingMeal.caloriesFrom(indicator);
let calArea = document.querySelector(".calorieInfo");

calArea.textContent = `Worried about calories? total damage is ${totalCalories} (${caloriesStr})`
    