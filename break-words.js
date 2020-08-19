function breakWord(targetElem, elemClass, maxWords){
	var lw = $(''+targetElem+'').html().split(' ');
	var lwArray = new Array();
	for(var i =0; i < lw.length; i++){
		if(lw[i].length > maxWords){
			lw[i] = '<span class="'+elemClass+'">' + lw[i] + '</span>';
		}
		lwArray.push(lw[i]);
		if(i != lw.length-1){
			lwArray.push(' ');
		}
	}
	$(''+targetElem+'').html(lwArray);
}
