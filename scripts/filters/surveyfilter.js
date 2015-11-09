
'use strict';

/**
 * @ngdoc filter
 * @name surveyCreator.filter:questionFilter
 * @description
 * # filters questions based on question order
 */
angular.module('surveyCreator')
  .filter('questionFilter', function () {
    return function(questions){
      
      var sortedQuestions = questions.sort(function(a,b){
        return a.questionOrder - b.questionOrder;
      });
      
      return sortedQuestions;
    };
  });