// Day 1
  const doorToDoor = (volunteers, neighbourhoods) => {
    // Code here!
    n_neighborhoods = neighbourhoods.length/volunteers.length

    // Remember to return a value
    return  n_neighborhoods

  }
  
// Day 2 
const interviewAnswer = (topic) => {
  // Code here!
  var answer = "";
  switch(topic) {
    case 'arts funding':
      answer = "We'll have to get creative!";
      break;
    case 'economy':
      answer = "Time is money.";
      break;
    case 'transportation':
      answer = "It's going to be a long road, so we better get moving.";
      break;
    default:
      answer = "QUACK!"
  }

  // Remember to return a value!
  return answer
}

//Day 3
const castVote = (name, votes) => {
  // Code here!
  // var votes=[0,0,0];
  // var name='';
  
  switch(name) {
    case 'Tim':
      votes[0]++;
      break;
    case 'Sally':
      votes[1]++;
      break;
    case 'Beth':
      votes[2]++
      break;
  }
  // Remember to return a value!
  return votes;
}

//Day 4

const registerToVote = (name, unregisteredVoters) => {
  // Code here!

  // Remember to return a value!
  return unregisteredVoters.filter(voter=> voter!= name)
}

 // Remember to return a value!
  return unregisteredVoters
}

//Day 5

const chooseStations = (stations) => {
  
  // Code here!
  
var filtered = [];

for (var i = 0; i < stations.length ; i++) {
    if (stations[i][1] >=20 && (stations[i][2] == "school"||stations[i][2] == "community centre")) {
        filtered.push(stations[i][0]);
    }
}

  // Remember to return a value!
  return filtered;

}
