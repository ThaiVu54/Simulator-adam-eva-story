class Apple {
    constructor(weight) {
        this.weight = weight; //weight = 10
    }
    decreaseWeight() {
        this.weight--;
    }
    isEmpty(weight) {
        return weight === 0;
    }
    getWeight() {
        return this.weight;
    }
}
class Human {
    constructor(name, weight, boolean) {
        this.name = name;
        this.weight = weight;
        this.gender = boolean;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    setGender(boolean) {
        if (boolean === true) {
            this.gender = "Male"
        } else
            this.gender = "Female"
    }
    isMale() {
        if (this.gender === "Male" || this.gender === true) {
            document.write(this.name + " is a Male" + "<br>")
        } else
            document.write(this.name + " is a Female" + "<br>")
    }

    sayString(string) {
        document.write(this.name + ": " + string + "<br>")
    }
    eatApple(apple) {
        this.weight++;
        document.write(this.weight + "<br>");
        apple.decreaseWeight();
        document.write(apple.getWeight() + "<br>")
    }
    checkApple(apple) {
        if (apple.getWeight() > 0) {
            this.eatApple(apple)
        } else
            alert("apple run out!!")
    }
}

let apple = new Apple(10);
let male = new Human("Adam", 55);
male.setGender(true);
male.isMale();
let female = new Human("Eva", 45);
female.setGender(false);
female.isMale();

let say = "Hello";
let say2 = "Hi";
male.sayString(say);
female.sayString(say2);

function HumanEatApple() {
    male.checkApple(apple, male.getWeight());
    female.checkApple(apple, female.getWeight());
    setTimeout(HumanEatApple, 2000);
}

HumanEatApple();





// let Apple = function (weight) {
//     this.weight = weight
//     this.getWeight = function () {
//         return this.weight
//     }
//     this.decreaseWeight = function () {
//         this.weight--
//     }
//     this.isEmpty = function (weight) {
//         return weight === 0;

//     }
// }

// let Human = function (name, weight, boolean) {
//     this.name = name;
//     this.weight = weight;
//     this.gender = boolean;

//     this.getName = function () {
//         return this.name
//     }

//     this.setName = function (name) {
//         this.name = name
//     }

//     this.getWeight = function () {
//         return this.weight
//     }

//     this.setWeight = function (weight) {
//         this.weight = weight
//     }

//     this.setGender = function (boolean) {
//         if (boolean === true) {
//             this.gender = "Male"
//         } else
//             this.gender = "Female"
//     }

//     this.isMale = function () {
//         if (this.gender === "Male" || this.gender === true) {
//             document.write(this.name + " là con trai" + "<br>")
//         } else
//             document.write(this.name + " là con gái" + "<br>")
//     }

//     this.sayString = function (string) {
//         document.write(this.name + ": " + string + "<br>")
//     }

//     this.eatApple = function (apple) {
//         this.weight++;
//         document.write(this.weight + "<br>");
//         apple.decreaseWeight();
//         document.write(apple.getWeight() + "<br>")
//     }

//     this.checkApple = function (apple) {
//         if (apple.getWeight() > 0) {
//             this.eatApple(apple)
//         } else
//             alert("Hết táo rồi!")
//     }
// }

// let apple = new Apple(10);
// let male = new Human("Adam", 55);
// male.setGender(true);
// male.isMale();
// let female = new Human("Eva", 45);
// female.setGender(false);
// female.isMale();

// let say = "Hello";
// let say2 = "Hi";
// male.sayString(say);
// female.sayString(say2);

// function HumanEatApple() {
//     male.checkApple(apple, male.getWeight());
//     female.checkApple(apple, female.getWeight());
//     setTimeout(HumanEatApple, 3000);
// }

// HumanEatApple();