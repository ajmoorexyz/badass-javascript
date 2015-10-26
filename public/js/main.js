var mainController = function($scope, $http, $localStorage){
    console.log('Hello Boulder!')
    
    $scope.submissionView = true  //ng-hide
    $scope.collectionView = true //ng-hide
    $scope.defaultDisplay = false

    // $scope.piggyBank = true

    // $scope.splash     = true
    // $scope.submission = true

    $scope.viewCollection = function() {
    	$scope.collectionView = false
    	$scope.submissionView = true
    	$scope.defaultDisplay = true
       
    }

    $scope.exitFunction = function() {
    	$scope.submissionView = true  //ng-hide
    	$scope.collectionView = true //ng-hide
    	$scope.defaultDisplay = false //ng-hide

    }

    $scope.submissionFunction =function() {
        // $scope.splash = !$scope.splash
        $scope.submissionView = false
        $scope.collectionView = true
        $scope.defaultDisplay = true
        $scope.newSnippet = {
          snippet         : '',
          functionality   : '',
          tags            : [
                { text: 'JavaScript' },
                { text: 'OOP' },
                { text: 'Functional Programming' },
              ],
            }
    }
    // $scope.javascriptsCollection = []
    $scope.userCollection = []

    // $scope.submissionFunction =function() {
    //     $scope.splash = !$scope.splash
    //     $scope.submission = !$scope.submission
    // }
    // addSnippet pushes newSnippet Objects to javascripts
    $scope.addSnippet = function(e) {
      e.preventDefault();
      console.log('addSnippet is firing');
      // $scope.javascriptsCollection.push($scope.newSnippet)
      // $scope.defaultJavaScripts.push($scope.newSnippet)
      // $scope.javascriptsCollection = getItem('javascripts')

      // console.log($scope.javascriptsCollection)
      
        // logic to prevent empty objects from being added to javascripts
        if ($scope.newSnippet.snippet != '' && $scope.newSnippet.functionality != '') {
          $http.post('/api/javascripts', $scope.newScript) //Req TO SERVER
            .then(function(returnData){ //Res FROM SERVER
              console.log('Made a javascript! ', returnData)
            });
      };
      // setItem('javascripts', $scope.javascriptsCollection)
    // $scope.javascriptsCollection = getItem('javascripts')

    } 


    // Data model | Schema
    // $scope.newScript = {
    //  snippet       : string
    //  functionality : string
    //  tags          : array of objects
    // }

    // OLD
    // $scope.newSnippet = {
    //   snippet         : '',
    //   functionality   : '',
    //   toggle          : false,
    //   tags            : [
    //         { text: 'JavaScript' },
    //         { text: 'OOP' },
    //         { text: 'Functional Programming' },
    //       ],
    //     }

    // NEW
    $scope.javascripts = [];

    $scope.createScript = function() {
      $http({
          method  : 'POST',
          url     : '/api/javascripts',
          data    : $scope.newSnippet
      }).then(function(returnData) {
        console.log(returnData);
      }, function(error) {
        console.log('error!', error);
      });
    };

    // $scope.toggle = false
    $scope.textToCopy = "Hello Boulder!";

    $scope.previewSnippet = function(script) {
      console.log(script)
      // needs to be a GET request
      for (var i = 0; i < $localStorage.o.length; i++) {
        $localStorage.o[i].toggle = false
      };
      // $scope.toggle = !$scope.toggle
      $scope.activeSnippet = true
      $scope.textToCopy = script
    }
    // user collectionView
    $scope.previewUserSnippet = function(script) {
      console.log(script)
      
      // Will become a GET request
      for (var i = 0; i < $localStorage.u.length; i++) {
        $localStorage.u[i].toggle = false
      };
      // $scope.toggle = !$scope.toggle
      $scope.activeSnippet = true
      $scope.textToCopy    = script
    }


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

    $scope.loadTags = function(query) {
      return tags
    }
    // $scope.defaultJavaScripts
     $scope.defaultJavaScripts = [
        {
          snippet       : "console.log('jim')",
          functionality : "logs the string literal 'jim'.",
          tags          : [{ text: 'JavaScript' },
                           { text: 'OOP' },
                           { text: 'Functional Programming' },]
        },
        {
          snippet       : "var name = 'Alex'",
          functionality : "assigns the variable name a value of 'Alex'",
          tags          : [{ text: 'JavaScript' },
                           { text: 'OOP' },
                           { text: 'Functional Programming' },]
        },
        {
          snippet       : "console.log(Math.floor(Math.random() * 10))",
          functionality : "returns a random number between 1 and 10",
          tags          : [{ text: 'JavaScript' },
                           { text: 'OOP' },
                           { text: 'Functional Programming' },]
        },
        {
          snippet       : "console.log(this)",
          functionality : "logs the value of this in it's current state.",
          tags          : [{ text: 'JavaScript' },
                           { text: 'OOP' },
                           { text: 'Functional Programming' },]
        },
]


}

angular.module('app', ['angular-clipboard', 'ngTagsInput','ngStorage'])
    .controller('mainController', ['$scope', '$http', '$localStorage', mainController])
