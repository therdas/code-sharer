document.getElementById('bt-add').addEventListener('click', function(e){
	if(document.getElementById('adder').classList.contains('hidden'))
		document.getElementById('adder').classList.remove('hidden');
});

document.getElementById('bt-fetch').addEventListener('click', function(e){
	if(document.getElementById('shower').classList.contains('hidden'))
		document.getElementById('shower').classList.remove('hidden');
});

document.getElementById('ad-close').addEventListener('click', function(e){
	if(!document.getElementById('adder').classList.contains('hidden'))
		document.getElementById('adder').classList.add('hidden');
});

document.getElementById('sh-close').addEventListener('click', function(e){
	if(!document.getElementById('shower').classList.contains('hidden'))
		document.getElementById('shower').classList.add('hidden');
});

document.getElementById('submitbutton').addEventListener('click', function(e){
	var text = _.escape(document.getElementById('codeinput').value);
	var uname = _.escape(document.getElementById('ad-username').value);
	addCode(uname, text);
	if(!document.getElementById('adder').classList.contains('hidden'))
		document.getElementById('adder').classList.add('hidden');
})

function fetchCode(userName){
	db.collection('users').doc(userName).get().then(function(doc){
		if(doc.exists) {
			arr = doc.data().code;
			var parent = document.getElementById('codeoutput');
			parent.innerHTML = "";
			for(var i=0; i<arr.length; ++i){
				var elem = document.createElement('textarea');
				elem.value = _.unescape(arr[i]);
				parent.appendChild(elem);
			}
		} else {
			document.getElementById('codeoutput').innerHTML = 'No such user found';
		}
	}).catch(function(err){
		document.getElementById('codeoutput').innerHTML = 'An error just occured: ' + _.escape(err);
	})
}

document.getElementById('fetchbutton').addEventListener('click', function(e){
	var uname = _.escape(document.getElementById('sh-username').value);
	fetchCode(uname);
})