
let sectionHeader = () => {
  let controller = ["$scope", function($scope) {
    let header = this

    header.class = `${header.section}-header`;
    header.bigTitle = header.title.toUpperCase();
    header.subtitle = header.subtitle;

  }];

  return {
    restrict: 'E',
    replace: true,
    scope: {
      section: '@',
      title: '@',
      subtitle: '@'
    },
    controller: controller,
    controllerAs: 'header',
    bindToController: true,
    templateUrl: '../html/directiveTemplates/headerTemplate.html'
  }
}

app.directive('sectionHeader', sectionHeader);
