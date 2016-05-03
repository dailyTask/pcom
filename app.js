var app=angular.module('PanaTeamOfTeam',['ngMaterial','firebase']);
app.constant("MY_FIREBASE_URL", "https://panateampro.firebaseio.com/messages");


app.controller('getUsersDetails',function($scope, $firebaseArray, MY_FIREBASE_URL ){
    var  ref=new Firebase (MY_FIREBASE_URL);
    var messages=$firebaseArray(ref);

    $scope.savetask=function(){
        messages.$add($scope.task);

    }


});
app.controller("showTodos", function($scope, $firebaseArray, MY_FIREBASE_URL){
    var ref = new Firebase(MY_FIREBASE_URL);
    $scope.messages = $firebaseArray(ref);

    $scope.removeTask = function(taskDetails){
        $scope.messages.$remove(taskDetails);
    };

});