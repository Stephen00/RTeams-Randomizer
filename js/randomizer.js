// Javascript for RTeams Randomizer
// Created by Stephen Graham

// initialize a dictionary of team members
members = {};
// Adds a member to the team members list
function addToMembers() {

    var member = document.getElementById('memberName').value;
    var skill = document.getElementById('skillRange').value;
    if (member in members) {
        // add error handling here
    } else {
        if (member != "") {
            members[member] = skill;

            if (skill != '0') {
                 document.querySelector(".list-group").innerHTML += "<li class=\"list-group-item\">{n}&nbsp:&nbsp&nbsp{s} </li>".replace("{n}", (member)).replace("{s}", (skill));
            } else {
                document.querySelector(".list-group").innerHTML += "<li class=\"list-group-item\">{n} </li>".replace("{n}", (member));
            }

        }
    }
    document.getElementById("memberName").value = '';
}

// Reveals the team 1 and team 2 cards on the webpage
function revealTeams() {
    document.getElementById('team1card').style.display = 'block';
    document.getElementById('team2card').style.display = 'block';
}

// Function to shuffle the array  of
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle
    while (0 !== currentIndex) {

        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function displayTeam(array, list) {
    for (let i = 0; i < array.length; i++) {
        // Create the list item:
        let item = document.createElement('li');

        item.classList.add('list-group-item');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        document.getElementById(list).appendChild(item);
    }
}

function randomizeTeam() {
    revealTeams();

    // Create an array of members and shuffle that array
    const arr = Object.keys(members);

    let shuffled = shuffle(arr);
    var half_length = Math.ceil(shuffled.length / 2);
    var team1 = shuffled.slice(0,half_length);
    var team2 = shuffled.slice(half_length, shuffled.length);

    displayTeam(team1, 'team1_list');
    displayTeam(team2, 'team2_list');
}

function sortBySkill() {

}