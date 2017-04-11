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

    var correctAnswers = [0, 3, 2, 3, 1, 1, 0];

    var quizQuestions = [
        {
            type: "text",
            text: "Who is the CEO of XyberDrada?",
            possibilities: [
                {
                    answer: "Loki Andrade"
                },
                {
                    answer: "Rapvan Racers"
                },
                {
                    answer: "Duds Younghusband"
                },
                {
                    answer: "Jhonelyn Beau"
                }
            ], 
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who is the only female in XyberDrada?",
            possibilities: [
                {
                    answer: "Loki Andrade"
                },
                {
                    answer: "Rapvan Racers"
                },
                {
                    answer: "Duds Younghusband"
                },
                {
                    answer: "Jhonelyn Beau"
                }
            ], 
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What's the last name of Jhonelyn?",
            possibilities: [
                {
                    answer: "Sasis"
                },
                {
                    answer: "Bautista"
                },
                {
                    answer: "Beau"
                },
                {
                    answer: "Batman"
                }
            ], 
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who is the oldest in XyberDrada?",
            possibilities: [
                {
                    answer: "Loki Andrade"
                },
                {
                    answer: "Rapvan Racers"
                },
                {
                    answer: "Duds Younghusband"
                },
                {
                    answer: "Jhonelyn Beau"
                }
            ], 
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the last name of the oldest Male in XyberDrada?",
            possibilities: [
                {
                    answer: "Andrade"
                },
                {
                    answer: "Racers"
                },
                {
                    answer: "Younghusband"
                },
                {
                    answer: "Sasis"
                }
            ], 
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the position of Duds Younghusband?",
            possibilities: [
                {
                    answer: "CEO"
                },
                {
                    answer: "Child Prophecy"
                },
                {
                    answer: "Senior Director"
                },
                {
                    answer: "Senior Manager"
                }
            ], 
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What team does Rapvan Racers belong to?",
            possibilities: [
                {
                    answer: "Board of Directors"
                },
                {
                    answer: "Four Emperors"
                },
                {
                    answer: "Production Team"
                },
                {
                    answer: "Project Management"
                }
            ], 
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the first name of the youngest employee in Xyberdrada?",
            possibilities: [
                {
                    answer: "Duds"
                },
                {
                    answer: "Loki"
                },
                {
                    answer: "Rapvan"
                },
                {
                    answer: "Jhonelyn"
                }
            ], 
            selected: null,
            correct: null
        },
    
    
    
    
    
    
    ]
})();
