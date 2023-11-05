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
var randomAnimalBodyParts = [];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 5)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 5)];
var randomAnimal = randomAnimals[Math.floor(Math.random() * 5)];
