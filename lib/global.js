$(document).ready(function() {
	
});

//check if click event firing twice on same position.
 var lastclickpoint, curclickpoint;
var isJQMGhostClick = function(event){
      curclickpoint = event.clientX+'x'+event.clientY;
      if (lastclickpoint === curclickpoint) {
        lastclickpoint = '';
        return true;
      } else {
        //alert(lastclickpoint);
        lastclickpoint = curclickpoint;
        return false;
      }
  }

	function navigation(){


		//$('#wrapper').removeClass('ui-overlay-c');

		//Slide ID herausfinden
		if($('.slide').attr('class')==undefined) { sid='p0-0';  }
		else sid=$('.slide').attr('class').split(' ')[1];
	
		if(sid.charAt(1)!=activeButton.attr('class').charAt(1)) {
			activeButton.removeClass('active');
			activeButton=$('#nav .p'+sid.charAt(1)).addClass('active');
			
		}
		//alert(activeButton.attr('class'));

		
		//alert(prefix);
		swiper.init(prefix+'lib/slides.xml',sid);
			
			$("#nav .p0").one( 'tap',function(event){
				if  (isJQMGhostClick(event)) { return; }
				activeButton.removeClass('active');
				activeButton=$('#nav .p0').addClass('active');
				$.mobile.changePage( prefix+"index.html", { transition: "slide",reverse:true} );
				prefix='';
				event.stopPropagation();
				event.stopImmediatePropagation()  
				return false;  	 
			});

			

			$('#nav .p1').one( 'tap',function(event){
				if  (isJQMGhostClick(event)) { return; }
				//alert('2'+prefix);
				//alert(prefix);
				activeButton.removeClass('active');
				activeButton=$('#nav .p1').addClass('active');
				//alert('2: '+prefix);
				$.mobile.changePage( prefix+"1.1.0/index.html", { transition: "slidefade"} );
				prefix='../';
				event.stopPropagation();
				event.stopImmediatePropagation()  
				return false;  	
			});
			


			$("#nav .p2").one( 'tap',function(event){
				if  (isJQMGhostClick(event)) { return; }
				//alert('3'+prefix);
			
				activeButton.removeClass('active');
				activeButton=$('#nav .p2').addClass('active');
				//alert('3: '+prefix);
				$.mobile.changePage( prefix+"2.6.0/index.html", { transition: "slidefade"} );
				prefix='../';
				event.stopPropagation();
				event.stopImmediatePropagation()  
				return false;  	
			});

			$('#nav .p3').one( 'tap',function(event){
				if  (isJQMGhostClick(event)) { return; }
				//alert('4'+prefix);
				
				activeButton.removeClass('active');
				activeButton=$('#nav .p3').addClass('active');
				//alert('4: '+prefix);
				$.mobile.changePage( prefix+"3.7.0/index.html", { transition: "slidefade"} );
				prefix='../';
				event.stopPropagation();
				event.stopImmediatePropagation()  
				return false;  	 
			});

			$('#nav .p4').one( 'tap',function(event){
			
				if  (isJQMGhostClick(event)) { return; }
				activeButton.removeClass('active');
				activeButton=$('#nav .p4').addClass('active');
				//alert('5: '+prefix);
				$.mobile.changePage( prefix+"4.8.0/index.html", { transition: "slidefade"} );
				prefix='../';	
				event.stopPropagation();
				event.stopImmediatePropagation()  
				return false;  	
			});
			
	
		// Rotate Fuktion
		$(".chartbox-1 .flipRight").bind( 'tap',function(event){
			$("#flip").addClass("rotate");
		});	
		$(".chartbox-2 .flipLeft").bind( 'tap',function(event){
			$("#flip").removeClass("rotate");
		});
		
/*
		$(".start").one( 'swipeleft',function(event){
			
			activeButton.removeClass('active');
			activeButton=$('#nav .p1-1-0').addClass('active');
			$.mobile.changePage( "1.1.0/index.html", { 
				transition: "slidefade",
				reverse: false
			});
			event.stopPropagation();
			event.stopImmediatePropagation()  
			return false;  	
		});
		
		$(".slide.p1-1-0").one( 'swipeleft',function(event){
			
			activeButton.removeClass('active');
			activeButton=$('#nav .p2-6-0').addClass('active');
			$.mobile.changePage( "../2.6.0/index.html", { 
				transition: "slidefade",
				reverse: false
			});
			event.stopPropagation();
			event.stopImmediatePropagation()  
			return false;  	
		});
		
		$(".slide.p1-1-0").one( 'swiperight',function(event){
			activeButton.removeClass('active');
			activeButton=$('#nav .p0-0').addClass('active');
			$.mobile.changePage( "../index.html", {
				transition: "slidefade",
				reverse: true
			});
			event.stopPropagation();
			event.stopImmediatePropagation()  
			return false;  	
		});
		
			$(".slide.p2-6-0").one( 'swiperight',function(event){
			activeButton.removeClass('active');
			activeButton=$('#nav .p1-1-0').addClass('active');
			$.mobile.changePage( "../1.1.0/index.html", {
				transition: "slidefade",
				reverse: true
			});
			event.stopPropagation();
			event.stopImmediatePropagation()  
			return false;  	
		});
				
		$(".slide.p2-6-0").one( 'swipeleft',function(event){
			activeButton.removeClass('active');
			activeButton=$('#nav .p3-7-0').addClass('active');
			$.mobile.changePage( "../3.7.0/index.html", {
				transition: "slidefade",
				reverse: false
			});
			event.stopPropagation();
			event.stopImmediatePropagation()  
			return false;  	
		});	
		
		$(".slide.p3-7-0").one( 'swiperight',function(event){
			activeButton.removeClass('active');
			activeButton=$('#nav .p2-6-0').addClass('active');
			$.mobile.changePage( "../2.6.0/index.html", {
				transition: "slidefade",
				reverse: true
			});
			event.stopPropagation();
			event.stopImmediatePropagation()  
			return false;  	
		});
		$(".slide.p3-7-0").one( 'swipeleft',function(event){
			activeButton.removeClass('active');
			activeButton=$('#nav .p4-8-0').addClass('active');
			$.mobile.changePage( "../4.8.0/index.html", {
				transition: "slidefade",
				reverse: false
			});
			event.stopPropagation();
			event.stopImmediatePropagation()  
			return false;  	
		});
		$(".slide.p4-8-0").one( 'swiperight',function(event){
			activeButton.removeClass('active');
			activeButton=$('#nav .p3-7-0').addClass('active');
			$.mobile.changePage( "../3.7.0/index.html", {
				transition: "slidefade",
				reverse: true
			});
			event.stopPropagation();
			event.stopImmediatePropagation()  
			return false;  	
		});
		*/
		
	};
	
	
	    
	    function showSourcesPopup() {
			var visible = false;
			
		    $(".btn_ref, #closeSources").bind( 'tap',function(event){
		       // $("section#sources, #sourcesBackground").fadeToggle();
		       
		        if(visible){ 
		        	visible = false;
		        	alert('false')
		        	$("#sourcesBackground").removeClass("hideContent");
		        	$("section#sources").removeClass("showQuelle");
		        	//setTimeout('$("section#sources").css("z-index", 1); $("#sourcesBackground").css("z-index", 0);', 1000);
		        }else{
		        	visible = true;
		        	//$("section#sources").css("z-index", 303);
		        	$("section#sources").addClass("showQuelle");
		        	$("#sourcesBackground").addClass("hideContent");
		        	
		        	//$("#sourcesBackground").css("z-index", 302);
		        }
		        
		       // alert(visible)
		        
		    });
		    
		    $("#sourcesBackground, #sources").bind( 'tap',function(event){
		    	if(visible){ 
		        	visible = false;
		        	$("#sourcesBackground").removeClass("hideContent");
		        	$("section#sources").removeClass("showQuelle");
		        	//setTimeout('$("section#sources").css("z-index", 1); $("#sourcesBackground").css("z-index", 0);', 1000);
		        }
		    });
		}
