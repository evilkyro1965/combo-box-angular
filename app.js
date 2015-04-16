var comboDemoApp = angular.module("comboDemoApp",['ComboModal']);

comboDemoApp.controller("comboDemoController", function($scope){
	$scope.data = [
					{'value':'en','label':'English'},
					{'value':'ina','label':'Indonesia'},
					{'value':'farsi','label':'Farsi'},
					{'value':'arab','label':'Arab'},
					{'value':'en','label':'English'},
					{'value':'ina','label':'Indonesia'},
					{'value':'farsi','label':'Farsi'},
					{'value':'arab','label':'Arab'},
					{'value':'en','label':'English'},
					{'value':'ina','label':'Indonesia'},
					{'value':'farsi','label':'Farsi'},
					{'value':'arab','label':'Arab'},
					{'value':'ina','label':'Indonesia'},
					{'value':'farsi','label':'Farsi'},
					{'value':'arab','label':'Arab'},
					{'value':'en','label':'English'},
					{'value':'ina','label':'Indonesia'},
					{'value':'farsi','label':'Farsi'},
					{'value':'arab','label':'Arab'}
				];
	$scope.language = {};			

});

