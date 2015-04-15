var comboDemoApp = angular.module("comboDemoApp",[]);

comboDemoApp.controller("comboDemoController", function($scope){
	$scope.data = [
					{'value':'en','label':'English'},
					{'value':'ina','label':'Indonesia'}
				];
	$scope.language = {};			

});

comboDemoApp.directive('combobutton', function () {
    return {
        scope : {
            data : "=data",
            selected : "=selected"
        },   
        link: function (scope, element, attrs) {
          var counterId = 1;

					var options = {
						data : new Array(),
						modalDiv : 
							"<div class='jqueryComboModal'>"+
							"</div>",
						id : ""
					};
					
					var comboModalId = "#"+element.attr('id');
			
					var data = scope.data;
					if(data.length>0){
						var id = "#jqueryComboModal"+counterId;
						element.append("<div id='jqueryComboModal"+counterId+"' class='jqueryComboModal'></div>");
						$(id).css("top",element.height()+1);
						$(id).css("min-width",element.outerWidth()-3);
						options.id = id;
						
						for(var i=0;i<data.length;i++) {
							$(options.id).append("<div class='comboItem' value='"+data[i].value+"'>"+data[i].label+"</div>");
						}
					}
					
					element.on('click',function(e){
						if($(options.id).hasClass('opened')==false) {
							$(options.id).addClass('opened')
							$(options.id).css("display","block");
						}
						else {
							$(options.id).removeClass('opened')
							$(options.id).css("display","none");
						}
					});
					
					$(options.id+" .comboItem").on('click',function(event){
						var target = $(event.target);
						scope.selected.label = target.html();
						scope.selected.value = target.attr('value');
						var selected = scope.selected;
						$(comboModalId).data("selected",scope.selected);
						$(comboModalId).find(".comboLabel").html(scope.selected.label);
						scope.$apply(function () {
							scope.selected = selected;
						});
					});
					counterId++;
							
        }
    };
});
