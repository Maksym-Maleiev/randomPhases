// #1: new offensive phrases
var randomAdjectives = ["Stupid", "Noisome", "Dirty", "Lazy"];
var randomWords = ["Dunkey", "Monkey", "Ass", "Whore", "Bitch"];

var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

var randomPhrase = "You" + " are " + randomAdjective + " " + randomWord + "🖕";
randomPhrase;

// #2: insult more subtly
var randomBodyParts = ["Hair", "Legs", "Eyes", "Noise", "Face"];
var randomAdjectives = ["Stupid", "Noisome", "Dirty", "Lazy", "Long"];
var randomAnimals = ["Dunkey", "Monkey", "Pig", "Horse", "Cow"];
var randomAnimalBodyParts = ["Tail", "Wings", "Claws", "Beak", "Wool"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 5)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 5)];
var randomAnimal = randomAnimals[Math.floor(Math.random() * 5)];
var randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * 5)];

var randomPhrase = "Your " + randomBodyPart + " is more " + randomAdjective + " than a " + randomAnimal + "'s " + randomAnimalBodyPart + "🖕";
randomPhrase;

// #3 use "+" or "join"?
var randomPhrase = ["Your", randomBodyPart, "is", "more", randomAdjective, "than", "a", randomAnimal + "'s", randomAnimalBodyPart, "🖕"].join(" ");
randomPhrase;

// #4 connect the numbers
var numbers = [3, 2, 1];
var numberThree = [3, "is", "bigger"].join(" ");
var numberTwo = ["than", 2, "is"].join(" ");
var numberOne = ["bigger", "than", 1].join(" ");

var numbers = [numberThree, numberTwo, numberOne].join(" ");
numbers;

var numbers = [3, "is", "bigger", "than", 2, "is", "bigger", "than", 1].join(" ");
numbers;

// use "concat"

var numbers = [3, 2, 1];
var numberThree = [3, "is", "bigger", ""].join(" ");
var numberTwo = ["than", 2, "is", ""].join(" ");
var numberOne = ["bigger", "than", 1].join(" ");

var numbers = numberThree.concat(numberTwo, numberOne);
numbers;