const { ZBClient } = require('zeebe-node')

void (async () => {
	const zbc = new ZBClient({
		camundaCloud: {
			clusterId: 'a26cb4a6-e0c0-40b1-ae07-fe15ea1baf5c',
			clientId: 'LYLoNjv4TOfTXTT2ihTfqcLTR-mEimdP',
			clientSecret: 'iCVJPn3LcX3iSBmT7Jr6KYZoUhTHSe3s8ywoKVfrU5.Bxusfwq.9DIb4p8Xdoudg',
		},
	})

	await zbc.deployProcess(['rider.bpmn'])

	process.exit(0)
})()
