members = [];

function addToMembers() {
    var node = document.createElement("Li");
    node.classList.add('list-group-item');
    var text = document.getElementById("memberName").value;
    var textnode=document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
    document.getElementById("memberName").value = "";
    members.push(text);
}

function revealTeams() {
    document.getElementById('team1card').style.display = 'block';
    document.getElementById('team2card').style.display = 'block';
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function randomizeElement() {

    revealTeams();
    var new_arr = shuffle(members);

    for (var i = 0; i < new_arr.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        item.classList.add('list-group-item');

        // Set its contents:
        item.appendChild(document.createTextNode(new_arr[i]));

        // Add it to the list:
        document.getElementById("team1_list").appendChild(item);
    }
}

