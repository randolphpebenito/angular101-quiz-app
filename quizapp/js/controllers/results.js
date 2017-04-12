(function(){
    
    angular
        .module('quizApp')
        .controller("resultsCtrl", ResultsController); /* Defining a named function instead of anonymous function */

        ResultsController.$inject = ['quizMetrics']

        function ResultsController(quizMetrics) {
            var vm = this;
            vm.quizMetrics = quizMetrics;
        }


        

})();
