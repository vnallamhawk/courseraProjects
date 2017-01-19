(function(){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);
        LunchCheckController.$inject =['$scope'];


function LunchCheckController($scope)
{
    var splitted="";

	//var splited = $scope.dishes;
    //console.log(splited);

    $scope.splitFunc=function(){
        $scope.message="";
        $scope.classAssigned ="";
        //alert("inside function");

        alert($scope.dishes);
        if($scope.dishes!==undefined&&$scope.dishes!="")
        {
          alert("inside if loop")
        splitted = $scope.dishes.split(',');
          print(splitted);
        }
        else {
              $scope.message="Please enter data first!";
                $scope.classAssigned="red";
        }

        $scope.className = function() {

      var className = '';

      if ($scope.classAssigned=="red")
          className += ' red';

      if ($scope.classAssigned=="green")
          className += ' green';

      return className;
  };

        // $scope.checkClass=function()
        // {
        //   return $scope.classAssigned == 'red';
        // }

        //print(splitted.length);


        //console.log(splitted);
       // console.log(splited.split(','));


    };


    function print(message)
    {
        $scope.classAssigned="green";
      alert(message.length);
        if(message.length<=3)
        {
            $scope.message="Enjoy!";
          }
        else

        {
            $scope.message="Too Much!";
            }

    }

    // function printMessage(message)
    // {
    //   if(message==0)
    //       $scope.message="Please enter data first!";
    //   else if(message<=3)
    //       $scope.message="Enjoy!";
    //   else
    //       $scope.message="Too Much!";
    //
    // }

}

    })();
