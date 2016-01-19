// var myApp = angular.module('myModule', []);  // myModule = name, [] dependencies

// myApp.controller("myController", function  ($scope) {
// 	var employee = {
// 		firstName : "Sanket",
// 		lastname : "Devlekar",
// 		contact : 9664625124
// 	};
// 	$scope.message = "Angular Welcome";
// 	$scope.employee = employee;
// }); 
// // controller builds a model(data) for the view to display
// //controller should be used to add inital state od scope and adding behaviour to scope object
// //**the data that we attach too the scope object is the model

var myApp = angular
				.module('myModule', [])
				.controller("myController", function  ($scope) {    //method chaining compare up
					var employee = {
					firstName : "Sanket",
					lastname : "Devlekar",
					contact : 9664625124
				};
				var country = {
					name : "India",
					capital : "Delhi",
					flag : "images/lalu.png"

				};
				$scope.message = "Angular Welcome";
				$scope.employee = employee;
				$scope.country = country;


			}); 