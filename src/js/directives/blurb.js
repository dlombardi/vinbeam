
let blurbHelper = () => {
  let controller = ["$scope", function($scope) {
    let vm = this

    vm.blurbs = [];
    vm.lgCol = `col-lg-${vm.lgColumns}`;
    vm.mdCol = `col-md-${vm.mdColumns}`;

    for (var prop in vm.datasource) {
      vm.blurbs.push(vm.datasource[prop]);
    }
  }];

  return {
    restrict: 'E',
    replace: true,
    scope: {
      datasource: '=',
      lgColumns: '@',
      mdColumns: '@'
    },
    controller: controller,
    controllerAs: 'vm',
    bindToController: true,
    templateUrl: '../html/directiveTemplates/blurbHelper.html'
  }
}

app.directive('blurbHelper', blurbHelper);
