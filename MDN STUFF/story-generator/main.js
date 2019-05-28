var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');
var storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`;

var insertX = [
    "Willy the Goblin",
    "No this Big Daddy",
    "Father Christmas",
    "This Big Daddy",
    "Willy the Goblin",
    "blah",
    'blah 2'
];

var insertY = [
    "the soup kitchen",
    "Disneyland",
    "the White House"
];

var insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"
];

function randomValueFromArray(array){
    return array[Math.floor(Math.random()*array.length)];
}


var xItem = randomValueFromArray(insertX);
var yItem = randomValueFromArray(insertY);
var zItem =  randomValueFromArray(insertZ);
var newStory = storyText;

function result() {
    var name = customName.value;

    name !== '' ? name = name : name = "Bob";
    

    if(document.getElementById("uk").checked) {
        var weight = Math.round(300/14) + ' stones';
        var temperature =  Math.round((94 - 32) *5/9) + ' centigrade';  
    } else {
        weight = "300 pounds";
        temperature = "94 fahrenheit";
    }
    
    newStory = `It was ${temperature} outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${insertZ}. ${name} saw the whole thing, but was not surprised — ${xItem} weighs ${weight}, and it was a hot day.`;
    story.textContent = newStory;
    story.style.visibility = 'visible';
}
randomize.addEventListener('click', result);
