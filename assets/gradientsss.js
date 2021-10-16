$(document).ready(function() {
	var pointerX = window.innerWidth*2/3;
	var pointerY = window.innerHeight*2/3;
	var pointerScale = .7
	var objectScale = .8
	var objects = $('body,main,header,footer,a,.post-meta,.site-title,#overlay,h1,th,.p-name')

	var pointerUpdate = function(event) {
		pointerX = event.pageX-window.scrollX;
		pointerY = event.pageY-window.scrollY;
	}
	window.scroll(pointerUpdate)
	window.addEventListener("mousemove",pointerUpdate)
	window.addEventListener("touchmove",pointerUpdate)
	window.addEventListener("touchstart",pointerUpdate)
	
	objects.not("body,#overlay").addClass("shine")
	
	setInterval(pointerCheck, 30);
	function pointerCheck() {
		objects.each(function(){
			this.style.backgroundPositionX = pointerScale*(pointerX-window.innerWidth/2)-window.innerWidth/2-
						objectScale*$(this).position().left+window.scrollX+"px"
			this.style.backgroundPositionY = pointerScale*(pointerY-window.innerHeight/2)-window.innerHeight/2-
						objectScale*$(this).position().top+window.scrollY+"px"
		})
		// console.log(pointerX+","+pointerY)
	}
})