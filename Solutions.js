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

const festivalColours = color1 => {
  // code here!
  var x = Math.abs(color1+150);
  var y = Math.abs(color1+210); 
  return [Math.min(x,y), Math.max(x,y)];
}
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

// Day 16

const festivalColours = color1 => {
  // code here!
  var x = Math.abs(color1+150);
  var y = Math.abs(color1+210); 
  return [Math.min(x,y), Math.max(x,y)];
}

// Day 17

const judgeVegetable = (vegetables, metric) => {
  // Code here!
  var red = vegetables[0].redness;
  var rednam = vegetables[0].submitter;
  var plum = vegetables[0].plumpness;
  var plumnam = vegetables[0].submitter;

  for (var i=0; i<vegetables.length; i++) {
    if (red < vegetables[i].redness) {
      red = vegetables[i].redness;
      rednam = vegetables[i].submitter;
    } 
    if (plum < vegetables[i].redness) {
      plum = vegetables[i].redness;
      plumnam = vegetables[i].submitter;
    } 
    
    
  }
   
  if (metric === "redness") {
    return rednam;
  }
  
  if (metric === "plumpness") {
    return plumnam;
  }
  
}

// Day 18

const countTickets = (tickets) => {
    // Code here!
  var counter = {'red':0, 'green':0, 'blue':0};
  
  for (var i=0; i< tickets.length; i++) {
    counter[tickets[i]]++;
  }
  
  return counter;
}

const bestOdds = (tickets, raffleEntries) => {
  // Code here!
const counter = countTickets(tickets);
var odds = {'red':0,'green':0,'blue':0};
var odd = counter['red']/raffleEntries['red'];
var raffle = 'red';

if(Object.keys(raffleEntries).length) {
    Object.keys(raffleEntries).forEach(key => {
      odds[key] = counter[key]/raffleEntries[key]; 
      if (odds[key] > odd) {
        odd = odds[key];
        raffle = key;
      }
    });
}


  return "You have the best odds of winning the " + raffle + " raffle."
  
}

// Day 19

const pumpkinSpice = money => {
var left = money;
var pie = 0 ; latte = 0; macaron = 0; spice = 0;

console.log(money);

while (left >= 5) {
  pie = Math.floor(left/5);
  left -= 5*pie;
  spice += 30*pie;
}
  
while (left >= 3) {
  latte = Math.floor(left/3);
  left -= 3*latte;
  spice += 15*latte;
}
  
  while (left >= 1) {
      macaron = Math.floor(left);
      console.log(macaron);
      left -= macaron;
      spice += 3*macaron;
    }
    
  return [pie,latte,macaron,spice];
  
}

// Day 20


// Use the value below whenever you need the value of Pi

const PI = 3.14159 

const sphereVolume = function (radius) {
    return 4/3*PI*radius**3;
}

const coneVolume = function (radius, height) {
  return 1/3*PI*radius**2*height;
}

const prismVolume = function (height, width, depth) {
  return height*width*depth;
}


const totalVolume = function (solids) {
var total_vol=0;
  for (i=0; i<solids.length; i++) {
    if (solids[i].type == 'sphere') {
      total_vol += sphereVolume(solids[i].radius);
    }
    
    if (solids[i].type == 'cone') {
      total_vol += coneVolume(solids[i].radius, solids[i].height);
    }
      
     if (solids[i].type == 'prism') {
      total_vol += prismVolume(solids[i].height,solids[i].width,solids[i].depth);
    }
  }
  return total_vol;
}

// Day 21

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  const isinbakery = (ingredient) => bakeryA.includes(ingredient)||bakeryB.includes(ingredient);
  for (i=0; i < recipes.length; i++) {
    if (recipes[i].ingredients.every(isinbakery)){
      return recipes[i].name;
    }
  }
}
   
