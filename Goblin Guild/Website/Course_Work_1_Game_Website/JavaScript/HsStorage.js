//Leaderboard Script

var scoreListings = [];//Array where all information in local storage is placed into

//This function helps sort through the local storage, turns them back into object.
//It them adds them to the array scoreListings.

function storageFiles() {
    
    
   let usrInf = Object.keys(localStorage);
    let i = usrInf.length;
    
    while (i--) {
        let usrOb = localStorage.getItem(usrInf[i]);
        scoreListings.push(JSON.parse(usrOb));
        
    }
    
}

//Uses StorageFiles() to select values from both users high score and users username

function tableLeader(scoreListings) {
    var tableBody = document.getElementById("tableData");
    let UsrScoreData = '';
    
    for (let person of scoreListings) {
        UsrScoreData += `<tr><td>${person.userName}</td><td>${person.highScore}</td></tr>`;
    }
    
    
    tableBody.innerHTML = UsrScoreData;
}


//calls the functions so Leaderboard are amended to show new score
storageFiles();
tableLeader(scoreListings);

