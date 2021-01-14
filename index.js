// index.js
const { nextISSTimesForMyLocation } = require('./iss');


// iss.js 



nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  for (let time of passTimes) { 
    const date = new Date(0); 
    date.setUTCSeconds(time.risetime);
    console.log(`Next pass at ${date} for ${time.duration} seconds!`); 
  }
})


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('207.216.211.47' , (error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
  
//   console.log('It worked! Returned coordinates:', data);
// });

// fetchISSFlyOverTimes({ latitude: 49.2246, longitude: -123.0711 }, (error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
  
//   console.log('It worked! Returned flyover times:', data);
// });

