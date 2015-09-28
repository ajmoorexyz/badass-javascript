var mainController = function($scope){
    console.log('Hello Boulder!')
    
    $scope.submissionView = true  //ng-hide
    $scope.collectionView = true //ng-hide
    $scope.defaultDisplay = false

    // $scope.piggyBank = true

    // $scope.splash     = true
    // $scope.submission = true

    $scope.viewCollection = function() {
    	$scope.collectionView = !$scope.collectionView
    	$scope.submissionView = !$scope.submissionView
    	$scope.defaultDisplay = !$scope.defaultDisplay
    }

    $scope.exitFunction = function() {
    	$scope.submissionView = true  //ng-hide
    	$scope.collectionView = true //ng-hide
    	$scope.defaultDisplay = false //ng-hide

    }

    $scope.submissionFunction =function() {
        // $scope.splash = !$scope.splash
        $scope.submissionView = !$scope.submissionView
        $scope.collectionView = !$scope.collectionView
        $scope.defaultDisplay = !$scope.defaultDisplay
    }

    $scope.javascripts = []

    // $scope.submissionFunction =function() {
    //     $scope.splash = !$scope.splash
    //     $scope.submission = !$scope.submission
    // }
    // addSnippet pushes newSnippet Objects to javascripts
    $scope.addSnippet = function(e) {
    	e.preventDefault()
        console.log('addSnippet is firing')
    	$scope.javascripts.push($scope.newSnippet)
    	console.log($scope.javascripts)
    	
        // logic to prevent empty objects from being added to javascripts
        if ($scope.newSnippet.snippet != '' && $scope.newSnippet.functionality != '') {
    		$scope.javascripts.push($scope.newSnippet);
    		$scope.newSnippet = ''; 
    		$scope.splash = !$scope.splash
            $scope.submissionView = !$scope.submissionView
    	};
    } 


    // Data model | Schema
    // $scope.newScript = {
    // 	snippet       : string
    // 	functionality : string
    //  tags          : array of objects
    // }

    $scope.newSnippet = {
    	snippet         : '',
    	functionality   : '',
        tags            : [
            { text: 'JavaScript' },
            { text: 'OOP' },
            { text: 'Functional Programming' },
          ],
        }

    $scope.textToCopy = "Hello Boulder!";

    $scope.success = function () {
        console.log('Copied!');
    };

    $scope.fail = function (err) {
        console.error('Error!', err);
    };

    // autocomplete values
    var tags = [
          { "text": "JavaScript" },
          { "text": "OOP" },
          { "text": "Closure" },
          { "text": "Functional Programming" },
          { "text": "sort" },
          { "text": "object" },
          { "text": "array" },
          { "text": "callback" },
          { "text": "functional declaration" },
          { "text": "function" },
        ]

    $scope.defaultJavaScripts = [
  {
    snippet       : "console.log('jim')",
    functionality : "logs the string literal 'jim'.",
    tags          : []
  },
  {
    snippet       : "var name = 'Alex'",
    functionality : "assigns the variable name a value of 'Alex'",
    tags          : []
  },
  {
    snippet       : "console.log(Math.floor(Math.random() * 10))",
    functionality : "returns a random number between 1 and 10",
    tags          : []
  },
  {
    snippet       : "console.log(this)",
    functionality : "logs the value of this in it's current state.",
    tags          : []
  },
  {
    snippet       : "var nameless = function(a) { console.log(arguments); return a}",
    functionality : "example of logging arguments passed to a function",
    tags          : []
  },
  {
    snippet       : "console.log(2 + 3)",
    functionality : "JavaScript can do math for you.",
    tags          : []
  },
  {
    snippet       : "console.log(window)",
    functionality : "logs the window Object.",
    tags          : []
  },
  {
    snippet       : "console.log('foo')",
    functionality : "logs the string literal 'jim'.",
    tags          : []
  },
  {
    snippet       : "console.log(fixBuzz())",
    functionality : "logs the return value of fixBuzz",
    tags          : []
  },
  {
    snippet       : "console.log('Hello World')",
    functionality : "For good measure.",
    tags          : []
  },
]

}

angular.module('app', ['angular-clipboard'])
    .controller('mainController', ['$scope', mainController])

// var clipApp = angular.module('clipApp', ['angular-clipboard']);

// clipApp.controller('clipCtrl', ['$scope', function ($scope) {
//     $scope.textToCopy = "I can copy by clicking!\nAnd also new lines!";

//     $scope.success = function () {
//         console.log('Copied!');
//     };

//     $scope.fail = function (err) {
//         console.error('Error!', err);
//     };
// }]);
