app.controller('ProfileCtrl', function($scope, $rootScope, $mdDialog, Auth, Users, $firebaseObject) {

    // fetches the user's unique id to look up the user profile
    var uid = Auth.$getAuth().uid;

    $scope.userCopy = angular.copy($rootScope.user);

    // updates the profile upon clicking submit
    $scope.saveProfile = function(userData){

        var profile = firebase.database().ref("users").child(uid);
        console.log('profile', profile);

        // console.log('what dis', Users.getProfile(uid));
        // console.log('dis is da userdata', userData);
        profile.update({
            first_name: userData.first_name,
            last_name: userData.last_name,
            manager: userData.manager
        }).then(function(){
            console.log('Synchronization success');
        }).catch(function(err){
            console.log('Synchronization failed, error code:', err);
        })
    }
});
