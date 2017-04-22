
var app = angular.module('myApp', []);
app.controller('trashCtrl', function($scope) {
    $scope.name = "John Doe";
    $scope.trashList = [
        {'id' :3212, 'name': 'City Spot 1', 'statusColor': 'red-stat', 'status': 'high', 'location': '1233,212'},
        {'id' :3213, 'name': 'City Spot 2', 'statusColor': 'green-stat', 'status': 'low', 'location': '1233,212'},
        {'id' :3214, 'name': 'City Spot 3', 'statusColor': 'yellow-stat', 'status': 'medium', 'location': '1233,212'},
        {'id' :3215, 'name': 'City Spot 4', 'statusColor': 'yellow-stat', 'status': 'medium', 'location': '1233,212'},
        {'id' :3232, 'name': 'City Spot 5', 'statusColor': 'red-stat', 'status': 'high', 'location': '1233,212'},
        {'id' :3243, 'name': 'City Spot 6', 'statusColor': 'green-stat', 'status': 'low', 'location': '1233,212'},
        {'id' :3264, 'name': 'City Spot 7', 'statusColor': 'yellow-stat', 'status': 'medium', 'location': '1233,212'},
        {'id' :3285, 'name': 'City Spot 8', 'statusColor': 'yellow-stat', 'status': 'medium', 'location': '1233,212'}
    ];
    $scope.scrollToBottom = function() {
        window.scrollTo(0,document.body.scrollHeight);
    };
});