angular.module('directivePractice')
.directive('lessonHider', function() {
  return {
  	restrict: 'E',		//determines how you can use the directive in your DOM, can only be used in html as an 'element'
  	templateUrl: 'lessonHider.html',
  	scope: {
  		lesson: '=',  //lesson attr, 2way binding btwn directive & parent ctrl on what value is passed to that attr
      dayAlert: '&'
    },
    controller: function( $scope, lessonService ) {  //this controller only applies to this directive
			$scope.getSchedule = lessonService.getSchedule();  //assn service val to new value
		},
  	link: function(scope, elem, attrs) {  //these parameter carry no special meaning, unlike dependency injection
  		scope.getSchedule.then(function( response ) {  //getSchedule still a promise, assign retun value to our scope
        	scope.schedule = response.data;  //set return value to property on the scope named
      
        scope.schedule.forEach(function( scheduleDay ) {  //loop throuch sched & check if 
          if (scheduleDay.lesson === scope.lesson) {		//scope.lesson matches a lesson already sched
            element.css('text-decoration', 'line-through');  //if so, use jquery to strike through last item
            scope.lessonDay = scheduleDay.weekday;
            return;											//return if value found
          }
        });	
      });
  	}

  }
});