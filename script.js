//your JS code here. If required.
let timer=document.getElementById('timer');
let date= new Date();
setInterval(
	function(){
date=new Date();
	timer.innerHTML=date.toLocaleString();
},1000
	)
// timer.innerHTML=date.toLocaleString();