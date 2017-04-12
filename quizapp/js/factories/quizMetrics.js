(function(){
    angular
        .module('quizApp')
        .factory("quizMetrics", QuizMetrics);

        QuizMetrics.$inject = ['DataService'];

        function QuizMetrics(DataService) {
            var quizObj = {
                quizActive: false,
                resultsActive: false,
                changeState: changeState,
                correctAnswers: [],
                markQuiz: markQuiz,
                numCorrect: 0
            }

            return quizObj;

            function changeState(metric, state) {
                if (metric === "quiz") {
                    quizObj.quizActive = state;
                    console.log("im in quiz!!!");
                    console.log(quizObj.quizActive);
                } else if (metric === "results") {
                    quizObj.quizActive = state;
                } else {
                    return false;
                }

            }

            function markQuiz() {
                quizObj.correctAnswers = DataService.correctAnswers;
                for (var i = 0; i < DataService.quizQuestions.length; i++) {
                    if (DataService.quizQuestions[i].selected === DataService.correctAnswers[i]) {
                        DataService.quizQuestions[i].correct = true; 
                        quizObj.numCorrect++;
                    } else {
                        DataService.quizQuestions[i].correct = false;
                    }

                }

            }

        }

})();
