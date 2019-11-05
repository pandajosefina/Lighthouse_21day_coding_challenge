
  const doorToDoor = (volunteers, neighbourhoods) => {
    // Code here!
    n_neighborhoods = neighbourhoods.length/volunteers.length

    // Remember to return a value
    return  n_neighborhoods

    // Want to see what's going on inside your function? You can use console.log() to debug and print variables to the console below.

  }
  
  
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


const registerToVote = (name, unregisteredVoters) => {
  // Code here!
  if (unregisteredVoters.includes(name)) {
      var n = unregisteredVoters.indexOf(name);
      unregisteredVoters.splice(n,1)
    
  }

  
  // Remember to return a value!
  return unregisteredVoters
}
