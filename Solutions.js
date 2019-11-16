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

// Day 6
const voterTurnout = (voter_signatures, voter_ids) => {
  // Code here!
  if (voter_signatures.length != voter_ids.length) 
    return false;
    for (var i = voter_signatures.length; i--;) {
      if (voter_signatures[i] != voter_ids[i]) {
        return "FRAUD!";
      }
    }
   return "All clear, we can count the votes!";
}

// Day 7

const termTopics = (interviews) => {
  // Code here!
  var result = [0,0,0];
  for (i=0; i < interviews.length; i++) {
    switch(interviews[i]){
      case "smart city":
        result[0]++;
      break;
       case "arts funding":
        result[1]++;
      break;
      case "transportation":
        result[2]++;
      break;
    }  
    
  }  
  // Remember to return an array!
  return result;
}

// Day 8 

const smartGarbage = (trash, bins) => {
    // Code here!
    bins[trash]++
    return bins;
}

// Day 9 
const carPassing = (cars, speed) => {
  // Code here!
   cars.push({time:Date.now() , speed:speed});
   return cars;
  
}

// Day 10
  
  for (var i = 0; i < spots.length; i++) {
    for (var j = 0 ; j < spots[i].length ; j++) {
      // 'regular', 'small', or 'motorcycle'
      var ve = vehicle.charAt(0).toUpperCase();
      switch (ve) {
        case 'R':
          if (spots[i][j] == 'R') {
            result.push(j,i);
          }
          break;
        case 'S':
          if (spots[i][j] == 'R' || spots[i][j] == 'S') {
            result.push(j,i);
          }
          break;
        case 'M':
          if (spots[i][j] == 'R' || spots[i][j] == 'S' || spots[i][j] == 'M') {
            result.push(j,i);
          }
         break;
        }
      }
    }
    
  if (result.length ===0) {
    return false; 
  }
  else {
    return result.slice(0,2);
   
  }
}


// Day 11
const busTimes = buses => {
  // Code here!
newobj = {};
for (let key in buses) {
  newobj[key] = buses[key].distance/buses[key].speed;
}
  return newobj;
}

// Day 12

const checkAir = function (samples, threshold) {
  // Code here!
  var dirty = samples.filter(sample=> sample == 'dirty');
  if (dirty.length/samples.length < threshold) {
    return 'Clean';
  }
  else return 'Polluted';
}

// Day 13

const lightsOn = function(lights) {
  // Code here!
 lights.forEach(item => {
        if (item.on === false) {
          item.on = true;
        }
  });
  return lights;
}

const lightsOff = function(lights) {
    // Code here!
  lights.forEach(item => {
        if (item.on === true) {
          item.on = false;
        }
  });
  return lights;
}

const toggleLights = function(lights, lightsAreOn) {
  // Code here!
  if (lightsAreOn === true) {
    lightsOff(lights);
  }
  else lightsOn(lights);
  return lights;
}

// Day 14

const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  // Code here!
  var price = 0;
  if (numberOfPeople >= 30) {
      price = 1 + 0.25*distanceTraveled +0.25;
  }
  else price = 1 + 0.25*distanceTraveled;
  return "$" + price.toFixed(2);
}


// Day 15


const finalPosition = (moves) => {
  // Code here!

var  x = moves.reduce(function(n, move) {
    return n + ( move == 'east') - (move == 'west');
}, 0);
  
var  y = moves.reduce(function(n, move) {
    return n + ( move == 'north') - (move == 'south');
}, 0);

return [x,y];

}
