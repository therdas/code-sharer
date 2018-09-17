function addCode(userName, string){
	db.collection('users').doc(userName).get().then(function(doc){
		if(doc.exists){
			arr = doc.data().code;
			console.log(arr);
			arr.unshift(string);
			db.collection('users').doc(userName).set({
				code: arr
			}).then(function(){
				console.log('Added Code');
			}).catch(function(err){
				console.log('Something went horribly wrong\nHere\'s the data: ', err);
			})
		} else {

			console.log('Doc doesn\'t exist');

			db.collection('users').doc(userName).set({
				code: [string]
			}).then(function(){
				console.log('Created Doc');
			}).catch(function(err){
				console.log('Something went horribly wrong\nHere\'s the data: ', err);
			})

		}
	}).catch(function(err){
		console.log('Something went wrong\nHere\'s the data: ', err);
	})
}

