let PDFToolsIsReadyInterval;
let PDFToolsIsReady = function(){

	let elems = {
		print: document.getElementById( "print" ),
		print2: document.getElementById( "secondaryPrint" ),
		download: document.getElementById( "download" ),
		download2: document.getElementById( "secondaryDownload" ),
		select: document.getElementById( "cursorSelectTool" ),
		hand: document.getElementById( "cursorHandTool" ),
	};

	if( !elems.print || !elems.download || !elems.print2 || !elems.download2 )
		return;

	clearInterval( PDFToolsIsReadyInterval );

	let w = window.top || window;
	//w.Access = 7;

	if( w.Access >= 5 ){
		elems.print.classList.remove( "hidden" );	
		elems.download.classList.remove( "hidden" );		
		elems.print2.classList.remove( "hidden" );	
		elems.download2.classList.remove( "hidden" );
	};

	if( elems.select && elems.hand ){

		if( w.Access >= 5 )
			elems.select.click();
		else
			elems.hand.click();	

	};

	document.body.addEventListener( "keydown", function( e ){

		if( e.target && e.target.nodeName == "INPUT" )
			return;

		console.log( e );

		if( e.keyCode == 82 && !e.ctrlKey ){ //R - Rotations
			e.preventDefault();
			e.stopPropagation();		
		};				
		if( e.keyCode == 79 && e.ctrlKey ){ //O - Open
			e.preventDefault();
			e.stopPropagation();		
		};		
		if( (e.keyCode == 80 && e.ctrlKey && e.altKey) || e.keyCode == 109 ){ //P - Presentation/Fullscreen
			e.preventDefault();
			e.stopPropagation();		
		};

	});

};

export function RefbookAppendixInit(){
	clearInterval( PDFToolsIsReadyInterval );
	PDFToolsIsReadyInterval = setInterval( PDFToolsIsReady, 60 );
};