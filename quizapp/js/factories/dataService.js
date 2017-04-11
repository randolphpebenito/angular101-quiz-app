(function(){
    angular
        .module('quizApp')
        .factory("DataService", DataFactory);

        function DataFactory() {
            var dataObj = {
                empData: empData,
                quizQuestions: quizQuestions
            };
            return dataObj;
        }
    var empData = [
        {
            "name": "Loki Andrade",
            "position": "CEO",
            "team": "Board of Directors",
            "gender": "Male",
            "age": 28
        },
        {
            "name": "Rapvan Racers",
            "position": "Senior Director",
            "team": "Four Emperors",
            "gender": "Male",
            "age": 31
        },
        {
            "name": "Duds Younghusband",
            "position": "Child Prophecy",
            "team": "Production Team",
            "gender": "Male",
            "age": 25
        },
        {
            "name": "Jhonelyn Beau",
            "position": "Senior Product Manager",
            "team": "Project Management",
            "gender": "Female",
            "age": 33
        }
    ]

    var quizQuestions = []
})();
