var uploadFile;
var app = angular.module("myApp", ['ui.router']).config(($stateProvider, $httpProvider, $urlRouterProvider) => {
    $stateProvider.state("fileUpload", {
        url: "/fileUpload",
        templateUrl: "fileUp.html",
        controller: "fileUploadController",
        controllerAs: 'fileUploadCtrl',
        resolve: {
            authRouth: ['myservice', '$state', function (myservice, $state) {
                if (myservice.upload()) {
                    return true;
                }
                else {
                    $state.go('user');
                    return false;
                }
            }]
        }
    })
})
function FileUpload(event) {
    console.log(event);
    uploadFile = event.target.files[0];
    console.log("file:", uploadFile);
}