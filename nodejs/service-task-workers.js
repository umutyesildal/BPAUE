const { ZBClient } = require('zeebe-node')

const zbc = new ZBClient({
	camundaCloud: {
		clusterId: 'a26cb4a6-e0c0-40b1-ae07-fe15ea1baf5c',
		clientId: 'LYLoNjv4TOfTXTT2ihTfqcLTR-mEimdP',
		clientSecret: 'iCVJPn3LcX3iSBmT7Jr6KYZoUhTHSe3s8ywoKVfrU5.Bxusfwq.9DIb4p8Xdoudg',
	},
})

const driverNames = [
	"Alex",
	"Emma",
	"Max",
	"Olivia",
	"Sophia",
	"Liam",
	"Lucas",
	"Umut",
	"Jonas"
  ];

function getUberDriverName(inputString) {

  if (inputString.length > 6) {
	  // If the input string is longer than 6 characters, return a different random name
	  const filteredNames = driverNames.filter(name => name !== inputString);
	  const randomName = filteredNames[Math.floor(Math.random() * filteredNames.length)];
	  return randomName;
	} else if (inputString.length > 3) {
	  // If the input string is longer than 4 characters but not longer than 6, return a random name
	  const randomName = driverNames[Math.floor(Math.random() * driverNames.length)];
	  return randomName;
	} else {
	  // If the input string is 4 characters or shorter, return an informative message
	  return "";
	}
  }

  function appendRatingToDriver(driverName,driverRating) {
  // Appending the rating to the driver name
  const driverWithRating = `${driverName} got rating: ${driverRating}`;

  return driverWithRating;


  }
const workerDestination = zbc.createWorker({
	taskType: 'destination_select',
	taskHandler: (job) => {
		workerDestination.log(`Selected destination ${job.variables["destination"]}`)	
		job.complete()
	}
})

const workerDriver = zbc.createWorker({
	taskType: 'choose_driver',
	taskHandler: (job) => {
		driverName = getUberDriverName(job.variables["destination"])
		workerDriver.log(`${driverName} will drive you`)
		job.complete({
			driver_name: driverName,
		  });	}
})

const workerRating = zbc.createWorker({
	taskType: 'append-rating',
	taskHandler: (job) => {
		workerRating.log(appendRatingToDriver(job.variables["driver_name"],job.variables["rating_value"]))
		job.complete({
			driver_name: job.variables["driver_name"],
			rating: job.variables["rating_value"]
		  });	}
})
