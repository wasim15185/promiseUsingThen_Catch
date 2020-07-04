function studentRoll() {
	let roll_no = [ 1, 2, 3, 4, 5 ];
	let rand = Math.random();
	const promise = new Promise(function(resolve, reject) {
		setTimeout(function() {
			if (rand > 0.5) {
				resolve(roll_no);
			} else {
				reject("i can't fetch roll no");
			}
		}, 2000);
	});
	return promise;
}

function stuBioData(stuRoll) {
	const details = {
		name: 'wasim',
		Roll: 2,
		age: 13
	};
	const promise = new Promise(function(resolve, reject) {
		setTimeout(function() {
			if (stuRoll === details.Roll) {
				resolve(`I got it..name is ${details.name} and his age is ${details.age}`);
			} else {
				reject(`this rollno is not entered my database `);
			}
		}, 2000);
	});
	return promise;
}

studentRoll()
	.then((roll) => {
		console.log(roll[1]);
		return stuBioData(roll[1]);
	})
	.then((fromStuBioData) => {
		console.log(fromStuBioData);
	})
	.catch((rejectedOutput) => {
		console.log(rejectedOutput);
	})
	.catch((rejectFromStuBioData) => {
		console.log(rejectFromStuBioData);
	});
