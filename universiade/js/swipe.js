//swipe
 $(document).ready(function() { 
 	$(".carousel-inner").swipe( {
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
        	$(this).parent().carousel('prev'); 
      	},
        swipeRight: function() {
			$(this).parent().carousel('next'); 
 	 	},
 	 	threshold:0,
 	 	tap: function(event, target){
 	 		console.log(target);
 	 		myModal(target.id);
 	 	}
	});
});