angular.module('Admin', [])
.controller('Table', [
'$scope',
'$window',
function ($scope, $window) {

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
  };


  $scope.sort = function(columnName) {

    // // var direction = $location.search()['direction'] ? $location.search()['direction'] : 1;
    var url = window.location.pathname;
    var limit = getQueryVariable('limit');
    var skip = getQueryVariable('skip');
    var sort = getQueryVariable('sort');
    var direction = 1;
    var sorted, currentDirection, currentColumn;

    try {
      sorted = JSON.parse(sort)[0];
      currentDirection = sorted.direction;
      currentColumn = sorted.columnName;
    } catch(e) {
      // Doesn't matter, just means there was no previous sort
    }

    // Check if sorting column is the same as the current sort and if so
    // get the direction and reverse it
    if(columnName === currentColumn) {
      direction = currentDirection === 1 ? -1 : 1;
    }

    var sortObj = [{
      columnName: columnName,
      direction: direction
    }];

    var location = url + '?limit=' + limit + '&skip=' + skip + '&sort=' + JSON.stringify(sortObj);
    window.location = location;
  };

}]);
