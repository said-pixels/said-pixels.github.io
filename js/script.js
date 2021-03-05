/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */

var quiz = { "JS" : [
	{
		"id" : "01",
		"question" : "Type et ancienneté du diabète:",
		"options" : [
			{"a": "Diabète de type 1", 
			 "b":"Diabète de Type 2", 
			 "c":"Durée ≥ 10 ans", 
			 "d":"Durée <10 ans"}
			],
		"answer":"Diabète de Type 2",
		"score":0,
		"status": ""
	},
	{
		"id" : "02",
		"question" : "Présence d'hypoglycémie:",
		"options" : [
			{"a": "Hypoglycémie inconsciente", 
			 "b":"Hypoglycémie récurrente / sévère", 
			 "c":"Hypoglycémie légère quotidienne",
			 "d":"Hypoglycémie: 1-6 fois par semaine",
			  "e":"Hypoglycémie moins d'une fois par semaine",
			   "f":"Pas d'hypoglycémie"



			}
			],
		"answer":"Hypoglycémie récurrente / sévère",
		"score":0,
		"status": ""
	},
	{
		"id" : "03",
		"question" : "caractéristiques du controle glycémique:",
		"options" : [
			{"a": "HbA1c > 9% (11,7 mmol/L)", 
			 "b":"HbA1c  entre 7,5% et 9% (9,4-11,7 mmol/L)", 
			 "c":"HbA1c < 7,5% ( 9,4 mmol/L)"}
			],
		"answer":"HbA1c  entre 7,5% et 9% (9,4-11,7 mmol/L)",
		"score":0,
		"status": ""
	},
	{
		"id" : "04",
		"question" : "Auto-surveillance glycémique:",
		"options" : [
			{"a": "Indiquée mais non réalisée", 
			 "b":"Indiquée mais non optimisée",
			 "c":"Réalisée  comme indiquée"
			}
			],
		"answer":"Indiquée mais non optimisée",
		"score":0,
		"status": ""
	},
	{
		"id" : "05",
		"question" : "complications aigues:",
		"options" : [
			{"a": "Acidocétose diabétique ou coma hyperglycémique hyperosmolaire non cétosique durant les 3 derneirs mois", 
			 "b":"Acidocétose diabétique ou coma hyperglycémique hyperosmolaire non cétosique durant les 6 derneirs mois",
			 "c":"Acidocétose diabétique ou coma hyperglycémique hyperosmolaire non cétosique durant les 12 derneirs mois",
			 "d":"Absence d'acidocétose diabétique ou coma hyperglycémique hyperosmolaire non cétosique ",
			}
			],
		"answer":"Acidocétose diabétique ou coma hyperglycémique hyperosmolaire non cétosique durant les 6 derneirs mois",
		"score":0,
		"status": ""
	},
	{
		"id" : "06",
		"question" : "complications chroniques/comorbidités:",
		"options" : [
			{"a": "Angor instable / Insuffisance cardiaque / DFG <30 mL/min", 
			 "b":"DFG entre 30 et 45 mL/min",
			 "c":"Maladie cardiovasculaire stable/ DFG entre 45 et 60 mL/min",
			  "d":"Pas de maladie cardiovasculaire et DFG normal"
			}
			],
		"answer":"DFG entre 30 et 45 mL/min",
		"score":0,
		"status": ""
	},
	{
		"id" : "07",
		"question" : "Grossesse:",
		"options" : [
			{"a": "Enceinte, n'étant pas aux objectifs glycémiques", 
			 "b":"Enceinte, aux objectifs glycémiques",
			 "c":"Non enceinte",
			}
			],
		"answer":"Enceinte, aux objectifs glycémiques",
		"score":0,
		"status": ""
	},
	{
		"id" : "08",
		"question" : "fragilité et fonction cognitive:",
		"options" : [
			{"a": "Fonction cognitive altérée", 
			 "b":"Patient fragile",
			 "c":"Age > 70 ans sans support à domicile",
			 "d":"Non fragile/ pas de perte des fonctions cognitives",
			}
			],
		"answer":"Patient fragile",
		"score":0,
		"status": ""
	},
	{
		"id" : "09",
		"question" : "effort physique:",
		"options" : [
			{"a": "Effort physique intense", 
			 "b":"Pas d&#39; effort physique"
			
			}
			],
		"answer":"Pas d&#39; effort physique",
		"score":0,
		"status": ""
	},
	{
		"id" : "10",
		"question" : "expérience précédente du mois de ramadan:",
		"options" : [
			{"a": "Expérience négative en général", 
			 "b":"Pas d&#39; expérience négative ou positive"
			
			}
			],
		"answer":"Pas d&#39; expérience négative ou positive",
		"score":0,
		"status": ""
	},
	{
		"id" : "11",
		"question" : "nombre d'heures de jeune par jour:",
		"options" : [
			{"a": "≥ 16 heures", 
			 "b":"&gt; 16 heures"
		
			}
			],
		"answer":"&gt; 16 heures",
		"score":0,
		"status": ""
	},
	{
		"id" : "12",
		"question" : "traitement du diabète:",
		"options" : [
			{"a": "Injection quotidienne multiple d'insuline mixte", 
			 "b":"Basal bolus/ pompe à insuline",
			 "c":"Insuline mixte une fois par jour",
			 "d":"Insuline basale",
			  "e":"Glibenclamide",
			  "f":"Gliclazide/MR, Glimépiride ou repaglinide",
			  "e":"Autre traitement n'incluant ni Sulfamides hypoglycémiants ni insuline"

			}
			],
		"answer":"Basal bolus/ pompe à insuline",
		"score":0,
		"status": ""
	}
	

	]
}



var quizApp = function() {

	this.score = 0;		
	this.qno = 1;
	this.currentque = 0;
	var totalque = quiz.JS.length;

	
	this.displayQuiz = function(cque) {
		this.currentque = cque;
		if(this.currentque <  totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("body.Templatequestion section .content .quiz-body .btn-Precedent").css("opacity", "1");
			$("#next").attr("disabled", false);
			$("#qid").html('<span> Question </span>' +  quiz.JS[this.currentque].id + '<span class="sous-title">/12</span>');
	
$("body.Templatequestion section .content .quiz-body .btn-suivant .valider").css("display", "none");
	if(quiz.JS[this.currentque].id=="12") {
$("body.Templatequestion section .content .quiz-body .btn-suivant .nxt").css("display", "none");
$("body.Templatequestion section .content .quiz-body .btn-suivant .valider").css("display", "block");
	}
			
			$("#question").html(quiz.JS[this.currentque].question);	
			 $("#question-options").html("");
			for (var key in quiz.JS[this.currentque].options[0]) {
			  if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
		
				$("#question-options").append(
					"<div class='form-check option-block'>" +
					"<label class='form-check-label'>" +
							  "<input type='checkbox' class='form-check-input' name='option"+key+"'   id='q"+key+"' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
								  quiz.JS[this.currentque].options[0][key] +
							 "</span></label>"
				);
			  }
			}
		}
		if(this.currentque <= 0) {
			$("#previous").attr("disabled", true);	

$("body.Templatequestion section .content .quiz-body .btn-Precedent").css("opacity", "0.3");
		}
		if(this.currentque >= totalque) {
				$('#next').attr('disabled', true);
				for(var i = 0; i < totalque; i++) {
					this.score = this.score + quiz.JS[i].score;
				}
			return this.showResult(this.score);	
		}
	}
	
	this.showResult = function(scr) {
     

	if(scr <= 3) {
$("body.Templatequestion section.part1").css("display", "none");
$("body.Templatequestion section.result1.vert").css("display", "block");

 document.getElementById("sum").innerHTML=scr;
	}
else if (scr > 3 && scr < 6) {
$("body.Templatequestion section.part1").css("display", "none");
$("body.Templatequestion section.result1.orange").css("display", "block");
 document.getElementById("sum1").innerHTML=scr;
}
else  {
$("body.Templatequestion section.part1").css("display", "none");
$("body.Templatequestion section.result1.rouge").css("display", "block");

 document.getElementById("sum2").innerHTML=scr;
}





		// $("#result").addClass('result');
		// $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr  + '/' + totalque + "</h1>");
		// for(var j = 0; j < totalque; j++) {
		// 	var res;
		// 	if(quiz.JS[j].score == 0) {
		// 			res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
		// 	} else {
		// 		res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
		// 	}
		// 	$("#result").append(
		// 	'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
		// 	'<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
		// 	'<div class="last-row"><b>Score:</b> &nbsp;' + res +
			
		// 	'</div>' 
			
		// 	);
			
		// }
	}
	
	this.checkAnswer = function(option) {
		var answer = quiz.JS[this.currentque].answer;
		option = option.replace(/\</g,"&lt;")   //for <
		option = option.replace(/\>/g,"&gt;")   //for >
		option = option.replace(/"/g, "&quot;")
		option = option.replace(/'/g, "&#39;")
		option = option.replace(/>/g, "&#62;")
		if(option ==  quiz.JS[this.currentque].answer) {
			if(quiz.JS[this.currentque].score == "") {
				quiz.JS[this.currentque].score = 1;
				quiz.JS[this.currentque].status = "correct";
		}
		} else {
			quiz.JS[this.currentque].status = "wrong";
		}
		
	}	
	 
	this.changeQuestion = function(cque) {
			this.currentque = this.currentque + cque;
			this.displayQuiz(this.currentque);	
			
	}
	
}


var jsq = new quizApp();

var selectedopt;
	$(document).ready(function() {
			jsq.displayQuiz(0);		
		
	$('#question-options').on('change', 'input[type=checkbox]', function(e) {

			
				selectedopt = $(this).val();







		});
		
			
			 
	});


	
	
	$('#next').click(function(e) {
			e.preventDefault();
			if(selectedopt) {
				jsq.checkAnswer(selectedopt);
			}
			jsq.changeQuestion(1);
	});	
	
	$('#previous').click(function(e) {
		e.preventDefault();
		if(selectedopt) {
			jsq.checkAnswer(selectedopt);
		}
			jsq.changeQuestion(-1);
	});	



