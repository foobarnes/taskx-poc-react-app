export default async function emitMetric(metricName) {
	const url = "https://fayktmygu7.execute-api.us-east-1.amazonaws.com/test/metric";
	const headers = new Headers();

	const publicIp = require('public-ip');
	let myIp = 'None'
	myIp = await publicIp.v4()
							.catch(err => console.log(err))
 
	const emitMetricRequest = new Request(url, {
		method: 'POST',
		headers: headers,
        contentType: "application/json",
		body: JSON.stringify({
			'metric': metricName,
			'datetime': Date.now(),
			'user': myIp
		}),
		mode: 'cors',
		cache: 'default'
	});
	const response = await fetch(emitMetricRequest);
	const data = await response.json();

	console.log(data)
}