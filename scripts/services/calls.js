(function() {
    'use strict';
    /**
     * @ngdoc service
     * @name surveyCreator.factory:surveyFacotry
     * @description
     *     Provides methods for survey creator
     */
    angular
        .module('surveyCreator')
        .factory('surveyFactory', surveyFactory);
    surveyFactory.$inject = ['$http', '$q', '$log'];
    function surveyFactory($http, $q, $log) {
        
        var service = {
            getSurveys        : getSurveys,
						saveNewSurvey     : saveNewSurvey,
						editSurvey        : editSurvey,
						deleteSurvey      : deleteSurvey
        };
        return service;

					 function getSurveys(){
					 	 var surveysDeferred = $q.defer(),
					 	 		 surveys = [];

					 	 		 // mock surveys
					 	 // 		 surveysFromDB = [{
					 	 // 		 										'name' : '1st mock survey',
					 	 // 		 										'description' : 'mock survey',
					 	 // 		 										'completionMessage' : 'Thanks for completing the survey!',
					 	 // 		 										'theme' : 'default',
					 	 // 		 										'new'   : false,
					 	 // 		 										'questions' : [{'questionType' : 'Yes/No',
					 	 // 		 																		'questionOrder': 3,
					 	 // 		 																		'questionText' : 'First dummy boolean question : order 3'
					 	 // 		 																		},
					 	 // 		 																	 {'questionType' : 'Short Answer',
					 	 // 		 																	  'questionOrder': 2,
					 	 // 		 																		'questionText' : 'First dummy short answer question : order 2'
					 	 // 		 																	 },
					 	 // 		 																	 {'questionType' : 'Multiple Choice',
					 	 // 		 																	  'questionOrder': 1,
					 	 // 		 																		'questionText' : 'First dummy multiOption question : order 1',
					 	 // 		 																		'options'      : ['a','b','c','d']
					 	 // 		 																	 }
					 	 // 		 																	]
					 	 // 		 									},
					 	 // 		 									{
					 	 // 		 										'name' : '2nd mock survey',
					 	 // 		 										'description' : 'mock survey',
					 	 // 		 										'completionMessage' : 'Thanks for completing the survey!',
					 	 // 		 										'theme' : 'dark',
					 	 // 		 										'new' : false,
					 	 // 		 										'questions' : [{'questionType' : 'Yes/No',
					 	 // 		 																		'questionOrder': 1,
					 	 // 		 																		'questionText' : 'First dummy boolean question : order 1'
					 	 // 		 																	 },
					 	 // 		 																	 {'questionType' : 'Short Answer',
					 	 // 		 																	  'questionOrder': 2,
					 	 // 		 																		'questionText' : 'First dummy short answer question : order 2'
					 	 // 		 																	 },
					 	 // 		 																	 {'questionType' : 'Multiple Choice',
					 	 // 		 																	  'questionOrder': 3,
					 	 // 		 																		'questionText' : 'First dummy multiOption question : order 3',
					 	 // 		 																		'options'      : ['a','b','c','d']
					 	 // 		 																	 }
					 	 // 		 																	]
					 	 // 		 									}];


					 	 // surveys = surveysFromDB;	

					 	 // mock code to get surveys
					 	 // $http.get('http://surveys.com/endpoint/to/get/surveys').then(function(data){
					 	 // 		surveysFromDB = data;
					 	 // 		surveysDeferred.resolve(surveysFromDB);
					 	 // 		$log.debug('got surveys from db');
					 	 // },function(err){
					 	 // 		surveysFromDB = null;
					 	 // 		surveysDeferred.reject(err);
					 	 //     $log.debug('error getting surveys', err);
					 	 // });

						surveysDeferred.resolve(surveys);


					 	 return surveysDeferred.promise;
					 };


					 function saveNewSurvey(surveys,survey){
					 	 var surveysDeferred = $q.defer();	 	 
					 	 	 
					 	 // mock code to save surveys
					 	 // $http.post('http://surveys.com/endpoint/to/save/surveys',survey).then(function(data){
					 	 // 		surveysDeferred.resolve();
					 	 // 		$log.debug('posted new survey to db');
					 	 // },function(err){
					 	 // 		surveysDeferred.reject();
					 	 //     $log.debug('error saving survey', err);
					 	 // });


					 	 	// surveys.push(survey);
					 	 	surveysDeferred.resolve(surveys);
			

					 	 return surveysDeferred.promise;
					 };


					 function editSurvey(surveys,survey,index){
					 	 var surveysDeferred = $q.defer();

	 
					 	 // mock code to save edited surveys
					 	 // $http.put('http://surveys.com/endpoint/to/save/edited/surveys',survey).then(function(data){
					 	 // 		surveysDeferred.resolve(data);
					 	 // 		$log.debug('posted edited survey to db');
					 	 // },function(err){
					 	 // 		surveysDeferred.reject();
					 	 //     $log.debug('error saving edited survey', err);
					 	 // });

							
					 	 		surveys[index] = survey;
					 	 	  surveysDeferred.resolve(surveys);
					
					 	 return surveysDeferred.promise;
					 } 


					 function deleteSurvey(surveys,index){
					 	 var surveysDeferred = $q.defer();
					 	 		 

	 
					 	 // mock code to save edited surveys
					 	 // $http.delete('http://surveys.com/endpoint/to/save/edited/surveys').then(function(data){
					 	 // 		surveysDeferred.resolve(data);
					 	 // 		$log.debug('deleted survey');
					 	 // },function(err){
					 	 // 		surveysDeferred.reject();
					 	 //     $log.debug('error deleting survey', err);
					 	 // });

							
					 	 		surveys.splice(index,1);
					 	 	  surveysDeferred.resolve(surveys);

					 	 return surveysDeferred.promise;
					 }

					         
    }
})();