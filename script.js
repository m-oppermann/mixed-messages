const messageComponents = {
    firstPart: ['Inspire', 'Motivate', 'Excite'],
    secondPart: ['your friends', 'your colleagues', 'your family'],
    thirdPart: ['to do great things', 'to be there for others', 'to create something new']
};

function createRandomMessage() {
    selectFirstPart = messageComponents.firstPart[Math.floor(Math.random() * messageComponents.firstPart.length)];
    selectSecondPart = messageComponents.secondPart[Math.floor(Math.random() * messageComponents.secondPart.length)];
    selectThirdPart = messageComponents.thirdPart[Math.floor(Math.random() * messageComponents.thirdPart.length)];
    console.log(`${selectFirstPart} ${selectSecondPart} ${selectThirdPart}.`);
}

createRandomMessage();