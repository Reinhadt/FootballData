angular.module('futFilters',[])
.filter('reverse',function(){
 return function(items) {
    return items.slice().reverse();
  };
})
.filter('yearDiff', function($filter){
  return function(item){
    var d = $filter('date')(new Date(item), 'yyyy');
    var y = new Date().getFullYear();
    var diff = y - d;
    return diff;
  }
})