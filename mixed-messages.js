const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6)
}

const verbs = ['Plant', 'Clean', 'Sweep', 'Write', 'Chase', 'Organize'];
const nouns = ['herbs', 'the bathroom', 'dirt', 'notes', 'true love', 'books'];
const details = ['in the rain', 'to the sounds of music', 'under the rug', 'in the moonlight', 'first thing in the morning', 'on the shelf'];

const generateToDoList = () => {
    first = generateRandomNumber();
    second = generateRandomNumber();
    third = generateRandomNumber();
    console.log(verbs[first] + ' ' + nouns[second] + ' ' + details[third] + '.')
}

generateToDoList();