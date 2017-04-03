var state = {
	questions: ['The Bangles had a manic one',
				'Maroon 5 sings about rain falling on this particular morning',
				'Robert Smith of the Cure is in love on this day',
				'Chicago thinks it was the 4th of July and they were in the park on this day',
				'Katy Perry went streaking through the park on this night',
				'Lisa Loeb is waiting for'],
	correctAnswers: ['Monday', 'Sunday', 'Friday', 'Saturday', 'Friday', 'Wednesday'],
	possibleAnswers: ['Sunday', 'Monday', 'Wednesday', 'Friday', 'Saturday'],
	sarcasticPraise: ['Let\'s be honest, that was an easy one!',
					  'I would be worried if you got that one wrong!',
					  'Could that one have been any easier?',
					  'Good job! You \'guessed\' right!',
					  'That was the easiest question of them all!',
					  'Nobody gets that one wrong!'],
	sarcasticSlates: ['My cat gets that one correct!',
					  'I\'m starting to worry!',
					  'You\'re the first person to miss that question!',
					  'You might want to start today over!',
					  'You missed THAT one? Wow... just Wow!',
					  'I would suggest an easier quiz, but there isn\'t one!'],
	currentQuestion: 0,
	score: 0
};

function createAnswerList() {
	state.possibleAnswers.map(function(value){
		$('.js-possible-answers').append('<li>' + value + '</li>');
	});
}

$('.js-possible-answers').on('click', 'li', function() {
    var text = $(this).text();
    var questionIndex = state.currentQuestion;
    var feedback = Math.floor((Math.random() * 5));
    $('.js-possible-answers').hide();
    if (text === state.correctAnswers[questionIndex]) {
    	$('.js-question').text(state.sarcasticPraise[feedback]);
    	state.score++;
    	$('.js-score').text("Score: " + state.score + " out of " + state.questions.length + " correct");
    } else {
    	$('.js-question').text(state.sarcasticSlates[feedback]);
    }
    if (state.currentQuestion === state.questions.length - 1) {
    	$('.js-start').text('Play Again').show().addClass('mb-50');
    } else {
    	$('.js-next-question').removeClass('hidden');
    }
});

$('.js-next-question').click(function(e) {
	e.preventDefault();
	state.currentQuestion++;
	$('.js-next-question').addClass('hidden');
	$('.js-question').text(state.questions[state.currentQuestion]);
	$('.js-possible-answers').show();
});

$('.js-start').click(function(e){
	e.preventDefault();
	if ($('.js-start').text() === 'Play Again') {
		state.score = 0;
		state.currentQuestion = 0;
		$('.js-possible-answers').show();
	} else {
		createAnswerList();
	}
	$('.js-start').hide();
	$('.js-question').text(state.questions[state.currentQuestion]);
	$('.js-score').text("Score: " + state.score + " out of " + state.questions.length + " correct");
});