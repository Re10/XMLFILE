app.service('myservice', function () {
    this.upload = function () {
        console.log("within upload function");
        console.log("uploaded file:", uploadFile);

        $scope.newemp = {};
        $scope.newemp.file = uploadFile;
        console.log("FILE NAME:", $scope.newemp.file);
        var formData = new FormData();
        formData.append("file", $scope.newemp.file);
        for (var value of formData.values()) {
            console.log("Formdatavalues", value);
        }
        $http.post('http://localhost:4000/emp/', formData, {

            transformRequest: angular.identity,
            headers: {
                'Content-Type': undefined
            }

        }).then(function (res) {
            console.log("Response", res);

            $scope.emp = res.data.doc;
            $scope.emp1 = res.data.doc.fname;
            console.log("Scope data isssssss", $scope.emp);

            $scope.manager = res.data.doc1;
            console.log("Scope data isssssss", $scope.manager);
            $scope.arr = [];
            for (let i = 0; i < $scope.emp.length; i++) {
                for (let j = 0; j < $scope.emp.length; j++) {
                    if ($scope.emp[i].manager_code == $scope.manager[j].emp_code) {
                        console.log("managaercode", $scope.emp[i].manager_code);
                        console.log("managaercode NAmes", $scope.manager[j].fname, $scope.manager[j].lname);
                        $scope.arr.push($scope.manager[j].fname);
                        console.log("arr", $scope.arr);
                    }
                }
            }
            console.log("arr---------------", $scope.arr);
        })
    }
})