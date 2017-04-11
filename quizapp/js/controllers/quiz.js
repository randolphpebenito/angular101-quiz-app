(function(){
    angular
        .module('quizApp')
        .controller("quizCtrl", QuizController); /* Defining a named function instead of anonymous function */

        ListController.$inject = ['quizMetrics', 'DataService']

        function QuizController(quizMetrics, DataService) {
            var vm = this;

            vm.quizMetrics = quizMetrics;

        }
})();
