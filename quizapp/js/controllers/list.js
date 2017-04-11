(function(){
    angular
        .module('quizApp')
        .controller("listCtrl", ListController); /* Defining a named function instead of anonymous function */

        ListController.$inject = ['quizMetrics', 'DataService']

        function ListController(quizMetrics, DataService) {
            var vm = this;

            vm.quizMetrics = quizMetrics;
            vm.data = DataService.empData;
            vm.activeEmp = {};
			vm.activateQuiz = activateQuiz;
            vm.changeActiveEmp = changeActiveEmp;
			vm.search = "";
			vm.quizActive = false;

            function changeActiveEmp(index) {
                vm.activeEmp = index;
            }

			function activateQuiz() {
                quizMetrics.changeState(true);
			}
        }


})();
