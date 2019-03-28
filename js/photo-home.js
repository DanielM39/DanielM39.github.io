let loadLargerImgs = true;
var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
if (connection) {
    if (connection.effectiveType=== 'slow-2g' || connection.effectiveType=== '2g' || connection.effectiveType=== '3g') 
    {
        loadLargerImgs = false;
    }
}

largerImgs = ["img/sitting.jpg", "img/laying.jpg", "img/stretching.jpg"];

function preloadImages(sources, callback) 
{
	let counter = 0;

	function onLoad() {
		counter++;
		if (counter == sources.length) callback();
	}

	for(let source of sources) {
		let img = document.createElement('img');
		img.onload = img.onerror = onLoad;
		img.src = source;
	}
}

function switchToLargerImgs()
{
    for (let index = 0; index < largerImgs.length; index++) {
        document.getElementById("carousel-img-"+index).src = largerImgs[index];
    }
}

function checkIfShouldSwitch()
{
    if(loadLargerImgs)
    {
        preloadImages(largerImgs, switchToLargerImgs);
    }
}