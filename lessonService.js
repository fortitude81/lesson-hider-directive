angular.module('directivePractice')
.service('lessonService', function( $http ) {
	
	this.getSchedule = function() {  		//create method
		return $http.get('./schedule.json');  //returns get request to json
	}

});