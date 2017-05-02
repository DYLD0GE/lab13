var app = angular.module('ourModule', []);

app.controller('wordController', function($scope){

  $scope.wordBank = ["Sam", "I", "Am", "Green", "Eggs", "and", "Ham"];
  $scope.phraseBank = ["Today you are you! That is truer than true! There is no one alive who is you-er than you!", "A person's a person, no matter how small", "ometimes the questions are complicated and the answers are simple"];
  $scope.classBank = ["em", "bold", "red", "green"];
  $scope.words = [];


  $scope.getWord = function (){

    var random = $scope.wordBank[Math.floor(Math.random() * $scope.wordBank.length)];
    $scope.words.push({word: random});
    console.log(random);

  }
  $scope.getCoolWord = function (){

    var random = $scope.wordBank[Math.floor(Math.random() * $scope.wordBank.length)];
     var cls = $scope.classBank[Math.floor(Math.random() * $scope.classBank.length)];

    $scope.words.push({word: random, klass:cls})
    console.log(cls);
  }
  $scope.getPhrase = function (){

    var random = $scope.phraseBank[Math.floor(Math.random() * $scope.phraseBank.length)];
    $scope.words.push({word: random});

  }
  $scope.getCoolPhrase = function (){

    var random = $scope.phraseBank[Math.floor(Math.random() * $scope.phraseBank.length)];
    var cls = $scope.classBank[Math.floor(Math.random() * $scope.classBank.length)];
    $scope.words.push({word: random, klass:cls})
  }


});
