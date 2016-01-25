.directive('addClass', [
  '$document',
  function($document) {
    return {
      restrict: 'A',
      scope: {
        class: '@'
      },
      link: function(scope, element, attrs) {

        element.on('click', function(e) {
          if (element[0].className !== scope.class) {
            scope.$apply(function() {
              console.log("inside");
              element[0].addClass(scope.class);
              $compile(element)(scope);
            });
          }

          e.stopPropagation(); //stop event from bubbling up to document object
        });

      }
    };
  }
]);
