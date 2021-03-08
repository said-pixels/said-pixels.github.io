/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */

var quiz = {
    "JS": [
        {
            "id": "01",
            "question": "Type et ancienneté du diabète:",
            "options":
            {
                "a": {
                    "group": "1",
                    "label": "Diabète de type 1",
                    "score": 1
                },
                "b": {
                    "group": "1",
                    "label": "Diabète de Type 2",
                    "score": 0
                },
                "c": {
                    "group": "2",
                    "label": "Durée ≥ 10 ans",
                    "score": 1
                },
                "d": {
                    "group": "2",
                    "label": "Durée <10 ans",
                    "score": 0
                }
            },
            "answer": [],
            "score": 0
        },
        {
            "id": "02",
            "question": "Présence d'hypoglycémie:",
            "options":
            {
                "a": {
                    "group": "1",
                    "label": "Hypoglycémie inconsciente",
                    "score": 5
                },
                "b": {
                    "group": "1",
                    "label": "Hypoglycémie récurrente / sévère",
                    "score": 4
                },
                "c": {
                    "group": "1",
                    "label": "Hypoglycémie légère quotidienne",
                    "score": 3
                },
                "d": {
                    "group": "1",
                    "label": "Hypoglycémie: 1-6 fois par semaine",
                    "score": 2
                },
                "e": {
                    "group": "1",
                    "label": "Hypoglycémie moins d'une fois par semaine",
                    "score": 1
                },
                "f": {
                    "group": "1",
                    "label": "Pas d'hypoglycémie",
                    "score": 0
                }
            },
            "answer": [],
            "score": 0
        },
        {
            "id": "03",
            "question": "caractéristiques du controle glycémique:",
            "options":
            {
                "a": {
                    "group": "1",
                    "label": "HbA1c > 9% (11,7 mmol/L)",
                    "score": 2
                },
                "b": {
                    "group": "1",
                    "label": "HbA1c  entre 7,5% et 9% (9,4-11,7 mmol/L)",
                    "score": 1
                },
                "c": {
                    "group": "1",
                    "label": "HbA1c < 7,5% ( 9,4 mmol/L)",
                    "score": 0
                }
            },
            "answer": [],
            "score": 0
        },
        {
            "id": "04",
            "question": "Auto-surveillance glycémique:",
            "options":
            {
                "a": {
                    "group": "1",
                    "label": "Indiquée mais non réalisée",
                    "score": 2
                },
                "b": {
                    "group": "1",
                    "label": "Indiquée mais non optimisée",
                    "score": 1
                },
                "c": {
                    "group": "1",
                    "label": "Réalisée  comme indiquée",
                    "score": 0
                }
            },
            "answer": [],
            "score": 0
        },
        {
            "id": "05",
            "question": "complications aigues:",
            "options":
            {
                "a": {
                    "group": "1",
                    "label": "Acidocétose diabétique ou coma hyperglycémique hyperosmolaire non cétosique durant les 3 derneirs mois",
                    "score": 3
                },
                "b": {
                    "group": "1",
                    "label": "Acidocétose diabétique ou coma hyperglycémique hyperosmolaire non cétosique durant les 6 derneirs mois",
                    "score": 3
                },
                "c": {
                    "group": "1",
                    "label": "Acidocétose diabétique ou coma hyperglycémique hyperosmolaire non cétosique durant les 12 derneirs mois",
                    "score": 1
                },
                "d": {
                    "group": "1",
                    "label": "Absence d'acidocétose diabétique ou coma hyperglycémique hyperosmolaire non cétosique ",
                    "score": 0
                },
            },
            "answer": [],
            "score": 0
        },
        {
            "id": "06",
            "question": "complications chroniques/comorbidités:",
            "options":
            {
                "a": {
                    "group": "1",
                    "label": "Angor instable / Insuffisance cardiaque / DFG <30 mL/min",
                    "score": 6
                },
                "b": {
                    "group": "1",
                    "label": "DFG entre 30 et 45 mL/min",
                    "score": 4
                },
                "c": {
                    "group": "1",
                    "label": "Maladie cardiovasculaire stable/ DFG entre 45 et 60 mL/min",
                    "score": 2
                },
                "d": {
                    "group": "1",
                    "label": "Pas de maladie cardiovasculaire et DFG normal",
                    "score": 0
                }
            },
            "answer": [],
            "score": 0
        },
        {
            "id": "07",
            "question": "Grossesse:",
            "options":
            {
                "a": {
                    "group": "1",
                    "label": "Enceinte, n'étant pas aux objectifs glycémiques",
                    "score": 4
                },
                "b": {
                    "group": "1",
                    "label": "Enceinte, aux objectifs glycémiques",
                    "score": 2
                },
                "c": {
                    "group": "1",
                    "label": "Non enceinte",
                    "score": 0
                },
            },
            "answer": [],
            "score": 0
        },
        {
            "id": "08",
            "question": "fragilité et fonction cognitive:",
            "options":
            {
                "a": {
                    "group": "1",
                    "label": "Fonction cognitive altérée",
                    "score": 4
                },
                "b": {
                    "group": "1",
                    "label": "Patient fragile",
                    "score": 3
                },
                "c": {
                    "group": "1",
                    "label": "Age > 70 ans sans support à domicile",
                    "score": 1
                },
                "d": {
                    "group": "1",
                    "label": "Non fragile/ pas de perte des fonctions cognitives",
                    "score": 0
                },

                
            },

            "answer": [],
            "score": 0
        },
        {
            "id": "09",
            "question": "effort physique:",
            "options":
            {
                "a": {
                    "group": "1",
                    "label": "Effort physique intense",
                    "score": 1
                },
                "b": {
                    "group": "1",
                    "label": "Pas d&#39; effort physique",
                    "score": 0
                }

            },
            "answer": [],
            "score": 0
        },
        {
            "id": "10",
            "question": "expérience précédente du mois de ramadan:",
            "options":
            {
                "a": {
                    "group": "1",
                    "label": "Expérience négative en général",
                    "score": 1
                },
                "b": {
                    "group": "1",
                    "label": "Pas d&#39; expérience négative ou positive",
                    "score": 0
                }

            },
            "answer": [],
            "score": 0
        },
        {
            "id": "11",
            "question": "nombre d'heures de jeune par jour:",
            "options":
            {
                "a": {
                    "group": "1",
                    "label": "≥ 16 heures",
                    "score": 1
                },
                "b": {
                    "group": "1",
                    "label": "&lt; 16 heures",
                    "score": 0
                }

            },
            "answer": [],
            "score": 0
        },
        {
            "id": "12",
            "question": "traitement du diabète:",
            "options":
            {
                "a": {
                    "group": "1",
                    "label": "Injection quotidienne multiple d'insuline mixte",
                    "score": 3
                },
                "b": {
                    "group": "1",
                    "label": "Basal bolus/ pompe à insuline",
                    "score": 2.5
                },
                "c": {
                    "group": "1",
                    "label": "Insuline mixte une fois par jour",
                    "score": 2
                },
                "d": {
                    "group": "1",
                    "label": "Insuline basale",
                    "score": 1.5
                },
                "e": {
                    "group": "1",
                    "label": "Glibenclamide",
                    "score": 1
                },
                "f": {
                    "group": "1",
                    "label": "Gliclazide/MR, Glimépiride ou repaglinide",
                    "score": 0.5
                },
                "g": {
                    "group": "1",
                    "label": "Autre traitement n'incluant ni Sulfamides hypoglycémiants ni insuline",
                    "score": 0
                }

            },
            "answer": [],
            "score": 0
        }
    ]
}



var quizApp = function () {

    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;


    this.displayQuiz = function (cque) {
        this.currentque = cque;
        if (this.currentque < totalque) {
            $("#tque").html(totalque);
            $("#previous").attr("disabled", false);
            $("body.Templatequestion section .content .quiz-body .btn-Precedent").css("opacity", "1");
            $("#next").attr("disabled", false);
            $("#qid").html('<span> Question </span>' + quiz.JS[this.currentque].id + '<span class="sous-title">/12</span>');

            $("body.Templatequestion section .content .quiz-body .btn-suivant .valider").css("display", "none");
              $("body.Templatequestion section .content .quiz-body  .refq08").css("display", "none");


                if (quiz.JS[this.currentque].id == "08") {
             
               $("body.Templatequestion section .content .quiz-body  .refq08").css("display", "block");
            }

            if (quiz.JS[this.currentque].id == "12") {
                $("body.Templatequestion section .content .quiz-body .btn-suivant .nxt").css("display", "none");
                $("body.Templatequestion section .content .quiz-body .btn-suivant .valider").css("display", "block");
            }

            $("#question").html(quiz.JS[this.currentque].question);
            $("#question-options").html("");
            for (var key in quiz.JS[this.currentque].options) {
                if (quiz.JS[this.currentque].options.hasOwnProperty(key)) {
                    $("#question-options").append(
                        "<div class='form-check option-block'>" +
                        "<label class='form-check-label'>" +
                        "<input type='radio' class='form-check-input' name='option" + quiz.JS[this.currentque].options[key].group + "'   id='q" + key + "' value='" + key + "' ><span id='optionval'>" +
                        quiz.JS[this.currentque].options[key].label +
                        "</span></label>"
                    );
                }
            }
        }
        if (this.currentque <= 0) {
            $("#previous").attr("disabled", true);

            $("body.Templatequestion section .content .quiz-body .btn-Precedent").css("opacity", "0.3");
        }
        if (this.currentque >= totalque) {
            $('#next').attr('disabled', true);
            for (var i = 0; i < totalque; i++) {
                this.score = this.score + quiz.JS[i].score;
            }
            return this.showResult(this.score);
        }
    }

    this.showResult = function (scr) {


        if (scr <= 3) {
            $("body.Templatequestion section.part1").css("display", "none");
            $("body.Templatequestion section.result1.vert").css("display", "block");
            $(".bloc1 > img").attr("src","images/risk.png")

            document.getElementById("sum").innerHTML = scr;
        }
        else if (scr > 3 && scr < 6) {
            $("body.Templatequestion section.part1").css("display", "none");
            $("body.Templatequestion section.result1.orange").css("display", "block");
            $(".bloc1 > img").attr("src", "images/risk1.png")
            document.getElementById("sum1").innerHTML = scr;
        }
        else {
            $("body.Templatequestion section.part1").css("display", "none");
            $("body.Templatequestion section.result1.rouge").css("display", "block");
            $(".bloc1 > img").attr("src", "images/risk2.png")

            document.getElementById("sum2").innerHTML = scr;
        }
    }

    this.checkAnswer = function (option) {
        var _this = this;
        quiz.JS[this.currentque].score = 0;
        quiz.JS[this.currentque].answer = [];
        $("form[name=quizForm] input[type=radio][name^=option]:checked").each(function () {
            quiz.JS[_this.currentque].answer.push($(this).val());
            quiz.JS[_this.currentque].score += quiz.JS[_this.currentque].options[$(this).val()].score;
        });
    }

    this.changeQuestion = function (cque) {
        this.currentque = this.currentque + cque;
        this.displayQuiz(this.currentque);

    }

}


var jsq = new quizApp();

var selectedopt;
$(document).ready(function () {
    jsq.displayQuiz(0);

    $('#question-options').on('change', 'input[type=radio][name^=option]', function (e) {
        $(this).prop("checked", true);
        selectedopt = $(this).val();

    });
});

$('#next').click(function (e) {
 
if ($('input.form-check-input').is(':checked')){
console.log($('.form-check-input'));
    e.preventDefault();
    jsq.checkAnswer();
    jsq.changeQuestion(1);}
    else {

$('body.Templatequestion section .content .quiz-body .form-group #optionval').addClass('border');




}



});

$('#previous').click(function (e) {
    e.preventDefault();
    jsq.checkAnswer();
    jsq.changeQuestion(-1);
});



