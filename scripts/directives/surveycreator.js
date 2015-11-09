'use strict';

/**
 * @ngdoc directive
 * @name surveyCreator.directive:surveyCreatorDirective
 * @description
 * # directive for surveyCreator
 */
angular.module('surveyCreator')
  .directive('surveyCreatorDirective', function ($sce, $timeout, $log, surveyFactory, $uibModal) {
    return {
      templateUrl : 'views/survey-creator.tpl.html',
      restrict: 'E',
      replace: true,
      scope: {},
      link: function link(scope, element, attrs) {

        surveyFactory.getSurveys().then(function(data){
           scope.surveys = data;
           // $log.debug('scope.surveys',scope.surveys);
        });


        // create new survey
        scope.addSurvey = function(){
          var newSurvey = {'name' : 'new survey',
                           'new' : true,
                           'description' : null,
                           'completionMessage' : null,
                           'theme' : 'default',
                           'questions' : []
                          }
          scope.surveys.push(newSurvey);
        };


        // add new question to survey
        scope.addQuestion = function(type,questions){
          var newQuestion = {};
          if(type === 'bool'){
            newQuestion.questionType  = 'Yes/No';
            newQuestion.questionOrder = questions.length+1;
            newQuestion.questionText  = 'New Yes/No question';
            questions.push(newQuestion);

          } else if (type === 'short'){
            newQuestion.questionType  = 'Short Answer';
            newQuestion.questionOrder = questions.length+1;
            newQuestion.questionText  = 'New short answer question';
            questions.push(newQuestion);

          } else {
            newQuestion.questionType  = 'Multiple Choice';
            newQuestion.questionOrder = questions.length+1;
            newQuestion.questionText  = 'New multiple choice question';
            newQuestion.options = ['New option']
            questions.push(newQuestion);
          };
        };


        // adds new option to question
        scope.addOption = function(options){
          options.push('New option');
        };

        // removes selected option from question
        scope.removeOption = function(index,options){
          options.splice(index,1);
        };

        // remove selected question from questions array
        scope.removeQuestion = function(index,questions){
          questions.splice(index,1);
        };

        // delete selected survey
        scope.deleteSurvey = function(index){
          

          if(!scope.surveys[index].new){
            surveyFactory.deleteSurvey(scope.surveys,index).then(function(data){
              // $log.debug('deleted survey',data);
              scope.surveys = data;
            },function(err){
              // $log.debug('error deleting survey');
            })
          }else{
            scope.surveys.splice(index,1);
          }
        };


        // moves question based on direction that is passed in
        scope.moveQuestion = function(direction,index,questions){

          var currentQuestOrder = null,
              prevQuestOrder = null,
              nextQuestOrder = null;

          if(direction === 'up' && questions[index-1]){
          
            currentQuestOrder = questions[index].questionOrder;
            prevQuestOrder = currentQuestOrder -1;

            questions[index-1].questionOrder = currentQuestOrder;
            questions[index].questionOrder= prevQuestOrder;

          } else if(direction === 'down' && questions[index+1]){

            currentQuestOrder = questions[index].questionOrder;
            nextQuestOrder = currentQuestOrder +1;

            questions[index+1].questionOrder = currentQuestOrder;
            questions[index].questionOrder= nextQuestOrder;
 
          }
        };

        

        //calls mock api call to save to db
        scope.saveSurvey = function(survey, index){

          // if survey is new, save it else update existing
          if(survey.new){
            survey.new = false;
            surveyFactory.saveNewSurvey(scope.surveys,survey).then(function(data){
              // $log.debug('saved new survey',data);
              scope.surveys = data;
            },function(err){
              // $log.debug('error saving new survey');
            });
          }else{
            surveyFactory.editSurvey(scope.surveys,survey,index).then(function(data){
              // $log.debug('saved edited survey',data);
              scope.surveys = data;
            },function(err){
              // $log.debug('error saving edited survey');
            })
          };
        };

        // fn used to open the survey preview
        scope.previewSurvey = function(survey){

          var modalInstance = $uibModal.open({
              animation: true,
              templateUrl: 'views/survey-preview.tpl.html',
              controller: 'ModalInstanceCtrl',
              resolve: {
                survey: function () {
                  return survey;
                }
              }
          });

        };
      }
    };
  });


