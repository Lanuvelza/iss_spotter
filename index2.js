// index2.js

const { nextISSTimesForMyLocation } = require('./iss_promised');

// see index.js for printPassTimes 
// copy it from there, or better yet, moduralize and require it in both files

// Call 
nextISSTimesForMyLocation()
  .then((passTimes) => {
    for (let time of passTimes) { 
      const date = new Date(0); 
      date.setUTCSeconds(time.risetime);
      console.log(`Next pass at ${date} for ${time.duration} seconds!`); 
    };
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });