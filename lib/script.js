let answers = document.querySelectorAll('.answers');
answers.forEach(answers => answers.addEventListener('click', selectAnswer))

let counter = 0

//these questions have correlating possibilities to be printed
let quenstions = ["Who designed what was considered the world’s first car?", 
					"What famous auto maker is responsible for designing the Volkswagen Beetle?",
					"Who did Ford enlist to help design their Ferrari-beating car in the 1960's?",
					"How did the Ford Mustang get it’s name?",
					"Which car is considered to be the first “muscle car”?",
					"What is the worlds largest automotive company?",
					"What company opened up the first drive-in gas station?",
					"What was the race that Ford wanted to win to show up Ferrari?",
					"The famous Safari Rally was held in which country during the 1990s?",
					"What is the name of the caped lady on top of the Rolls Royce radiators?",
					"Who originally founded Tesla?",
					"Actor Steve McQueen did his own racing stunts in 'Bullitt' and 'The Great Escape,' but do you know what vehicle he chose when he raced the Baja 1000 in 1969?",
					"Why was a national speed limit of 55 mph enacted in 1974?",
					"The first official Lancia Group B rally car was the Lancia Rally -____ ?",
					"What was the first Japanese car to be produced in the United States?",
					"What was Henry Ford most famous for?",
					"Who was the first English driver to win the driver's title?",
					"Tesla, Inc. is named after _______.",
					"What production car is considered the most winningest racecar in touring and DTM?",
					"entley, Bugatti, Lamborghini and Porsche are auto manufacturers under what flagship company?"]

//the answerkey uses the possibility index as a reference
let possibilities = [['Henry Ford', 'Ferdinand Porsche', 'Karl Benz', 'Louis Chevrolet'], ['Bavarian Motor Works', 'Walter P. Chrysler', 'Henry Ford', 'Ferdinand Porsche'],
					['Carroll Shelby', 'John DeLorean', 'Lee Iacocca', 'Louis Chevrolet'], ['Herd of Wild Horses', 'WWII Fighter Plane', 'Henry Ford’s Wife', 'Play on words for Horsepower'],
					['1964 Pontiac GTO', '1962 Chevrolet Impala', '1967 Chevrolet Camaro', '1964 Ford Mustang'], ['Volkswagen Group', 'General Motors', 'Ford Motors', 'Toyota Motor'],
					['Mobile', 'Exxon', 'Shell', 'Gulf'], ['Indy 500', 'Monaco Grand Prix', '24 Hours of Le Mans', '24 at Daytona'],
					['South Africa', 'Morocco', 'Mexico', 'Kenya'], ['Flying Woman', 'Queen Elizabeth', 'Spirit of Ecstasy', 'Lady Liberty'],
					['Elon Musk & Martin Eberhard', 'J.B. Straubel & Ian Wright', 'Martin Eberhard & Marc Tarpenning'], ['Dune Buggy', 'Dirt Bike', 'Trophy Truck', 'Rally Car'],
					['Increase in automobile accidents', 'Increase in speeding tickets', 'Oil Shortage', 'Increase in city traffic'], ['Stratos', 'S4', '037', 'Integrale'],
					['Toyota Camry','Honda Civic', 'Nissan Altima', 'Honda Accord'], ['Inventing the Automobile', 'Inventing Combustion Engines', 'Development of the assembly line', 'Development of the Ford Mustang'],
					['Tony Pond', 'Colin McRae', 'Richard Burns', 'Jimmy McRae'], ['a Magician', 'an astronomer', 'an electrical engineer', 'a mechanical engineer'],
					['Mercedes 190E EVO II', 'BMW E30 M3', 'Porsche 911 Turbo', 'Nissan Skyline GT-R'], ['Daimler AG', 'Ford Motor Company', 'Volkswagen Group', 'General Motors']]

//this is an array of values that are referencing the correct index from the possibilities array
let answerKey = [2, 3, 0, 1, 0, 3, 3, 2, 3, 3, 3, 0, 3, 3, 3, 2, 2, 2, 1, 2]

//playersAnswers stays empty until javascript fills it with possible answers
let playersAnswers = []

function selectAnswer(e) {
	e.target.style.background = "white";
	counter+=1;
	playersAnswers.push(counter);
	console.log(counter);
	if (counter==1) {
		e.target.style.background = "black";
	}
	e.target.removeEventListener('click', selectAnswer);
	// winner();
}




