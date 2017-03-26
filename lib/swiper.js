var swiper={}; 

swiper.init=function(xml,sid){
	
	//alert(xml);

	$.get(xml, function(d){
	var $slide,directions;
		
		

		$slide = $(d).find('slide[id=".'+sid+'"]');
		
		directions=[$slide.find('swipeleft'),$slide.find('swiperight'),$slide.find('swipeup'),$slide.find('swipedown')];
		
		//alert(sid+' swipeleft: '+directions[0].text());
		//alert(sid+' swipeleft: '+directions[0].text());
		
		if(directions[0]!=undefined&&directions[0].text()!='') {
			//alert('links');
			$("div."+sid).on('swipeleft',function(event) {
				//alert(sid+' swipeleft: '+directions[0].text());
		
				$.mobile.changePage($slide.find('swipeleft').text(), {
					transition:"slidefade",
					reverse:false
				});
			event.stopPropagation();
			event.stopImmediatePropagation()  
			return false;  	
			});
		}
		if(directions[1]!=undefined&&directions[1].text()!='') {
			//alert('rechts');
			$("div."+sid).on('swiperight',function(event) {
				
				$.mobile.changePage($slide.find('swiperight').text(), {
					transition:"slidefade",
					reverse:true
				});
			event.stopPropagation();
			event.stopImmediatePropagation()  
			return false;
			});
		}
		if(directions[2]!=undefined&&directions[2].text()!='') {
			//alert('hoch');
			$("div."+sid).on('swipeup',function(event) {
				
				$.mobile.changePage($slide.find('swipeup').text(), {
					transition:"slidedown",
					reverse:true
				});
			event.stopPropagation();
			event.stopImmediatePropagation()  
			return false;  	
			});
		}
		if(directions[3]!=undefined&&directions[3].text()!='') {
			//alert('runter');
			$("div."+sid).on('swipedown',function(event) {
				
				$.mobile.changePage($slide.find('swipedown').text(), {
					transition:"slidedown",
					reverse:false
				});
			event.stopPropagation();
			event.stopImmediatePropagation()  
			return false;  	
			});
		}

	});
}



