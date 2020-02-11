# Project #4: Build a Game with HTML, CSS and JavaScript

For your fourth project, you'll be creating a familiar game using HTML, CSS and
JS! Please choose one of the following options:

- **Flash Cards**
- **Trivia (Self-scoring)**
- **Hangman**
- **Tower of Hanoi**
- **Simon**

This is an opportunity to **be creative**, and work through some **tough
programming challenges**.

**You will be working individually for this project**, but we'll be guiding you
along the process and helping as you go. Show us what you've got!

> If you want to choose a different game for Project #4, please consult with an
> instructor! Warning - many seemingly simple games end up being much more
> complex than you might think!

## Requirements

### Technical Requirements

Your game must:

- Render in the browser
- Include separate HTML / CSS / JavaScript files
- Use Javascript for DOM manipulation
- Be deployed online, using [Github Project pages](https://pages.github.com)
  and/or to a custom domain.
- Use semantic markup for HTML and CSS (adhere to best practices)
- Show a good commit history with frequent commits

Additionally, your project should stick with KISS (Keep It Stupid Simple) and
DRY (Don't Repeat Yourself) principles.

## Submission

**_DO NOT FORK THIS REPOSITORY!_** Create a **new** repository. Then, submit
your project as an issue to this repo:

[github.com/ga-dc/project1-gallery](https://github.com/ga-dc/project1-gallery/issues/new)

You must turn in something before presentations begin. However, you're welcome
to continue working on it over the course of SEI and beyond!

With your submission please include any questions you'd like answered, or
specific things on which you'd like us to focus when giving feedback.

### Necessary Deliverables

Your submission must include **all** of the following:

- A hosted copy of your game, built by you, hosted on Github Pages
- Your HTML/CSS should pass the [HTML5 Validator](https://html5.validator.nu)
  and [CSS Validator](https://jigsaw.w3.org/css-validator/)
- A git repository hosted on Github with frequent commits dating back to the
  very beginning of the project
- A link to your hosted project in the URL section of your Github repo
- A `readme.md` file, including
  - Explanations of the technologies used, the approach taken, installation
    instructions, unsolved problems, etc.
  - [Follow this mini-lesson on writing documentation](https://git.generalassemb.ly/dc-wdi-fundamentals/markdown-and-documentation)
    for your project

The URL section of your Github repo:
![URL section](https://i.imgur.com/QQ7RsfR.gif)

## Asking For Help

Instructors will not be hosting office hours during this project week. Unit
projects are an opportunity for two things:

1. Working through problems on your own. This solidifies your knowledge and is
   crucial for mastering the skills we've covered.
1. Becoming an independent developer. Developers tend to coordinate in groups,
   but contribute individually, so this mimics the real world.

> The purpose of this project is for you to show us and future employers what
> you're capable of, so we want as much of the project to be your own,
> independent work as possible

### Project Review

During the week, the instructors will be hosting a project review. The purpose
of this time is to have your code and progress reviewed, to make sure you're on
track to finish.

**You should use this time to ask for constructive feedback, so come with
questions prepared and specific things you'd like advice on.**

## Suggested Ways to Get Started

[Create your bronze, silver, and gold plan.](https://github.com/ga-wdi-lessons/bronze-silver-gold)

- **Break the project down into different components** (data, presentation,
  views, style, DOM manipulation) and brainstorm each component individually.
  Use whiteboards!
- **Use your Development Tools** (console.log, inspector, alert statements, etc)
  to debug and solve problems
- Work through the lessons in class & ask questions when you need to! Think
  about adding relevant code to your game each night, instead of, you know...
  _procrastinating_.
- **Commit early, commit often.** Don’t be afraid to break something because you
  can always go back in time to a previous version.
- **Make it work, make it good, make it fast.** Don't get hung up on only saving
  or writing code that is good code. Get it working first, even if it means
  writing bad or ugly code. Once it's working, come back and refactor!
- **Consult documentation resources** (MDN, jQuery, etc.) at home to better
  understand what you’ll be getting into.
- **Don’t be afraid to write code that you know you will have to remove later.**
  Create temporary elements (buttons, links, etc) that trigger events if real
  data is not available. For example, if you’re trying to figure out how to
  change some text when the game is over but you haven’t solved the win/lose
  game logic, you can create a button to simulate that until then.

## Project Choices

### Flash-Cards

Pre-load your app with some data, and let the user flip through them quickly
(back or front), and use the keyboard flip the card, and to mark whether they
got it right or not. Track which cards were incorrect, and re-display them until
the user gets them right!

_Bonus:_

- Track scores over time (even if the page is reloaded)
- Include images on one or both sides of the flash card
- Let the user add flash cards (don't need to be saved across refreshes)

[Here's an example from a previous student](https://www.dpcii.com/mmry/)

### Self-scoring Trivia

Pre-load your app with some questions and answers.

Test the user's wits & knowledge with whatever-the-heck you know about (so you
can actually win). Guess answers, have the computer tell you how right you are!

_Bonus:_

- Add time-based scoring
- Track scores across games (even if the page is reloaded)
- Allow users to compete against each other on a high-score board.

[Here's an example from a previous student](https://sathyaram.github.io/oscarstriviagame/)

### Hangman

Have a player enter a word that will be guessed during the game. The word is
then hidden and represented by blank spaces. The second player then chooses
letters, which are revealed if present.

_Bonus:_

- Add timer-based scoring
- Track scores across games (even if the page is reloaded)

[Here's an example from a previous student](https://hangman-ntartaro.herokuapp.com/)

### Tower of Hanoi

<a href="https://en.wikipedia.org/wiki/Tower_of_Hanoi">Tower of Hanoi</a> is a
mathematical puzzle where the objective is to move a stack of discs from one rod
to another. There are three rules:

- Only one disk can be moved at a time
- Every move involves taking the top disk from one of the stacks and placing it
  on top of another stack
- No disk can be put on top of a smaller disk

_Bonus:_

- Add time-based scoring
- Track scores across games (even if the page is reloaded)

[Here's an example from a previous student](https://nnguy152.github.io/01-Tower-of-Hanoi/)

### Simon

<a href="https://en.wikipedia.org/wiki/Simon_">Simon</a> is a test of memory.
Have your program choose a sequence of different colors at random and then
prompt your player repeat the sequence allowing them to go to advance to next
round if the player is successful.

_Bonus:_

- Add timer-based scoring
- Track scores across games (even if the page is reloaded)

[Here's an example from a previous student](https://aiyentam.github.io/Simon-Says/)

## Useful Resources

- [MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  _(a great reference for all things Vanilla Javascript)_
- [jQuery Docs](http://api.jquery.com) _(if you're using jQuery)_
- [Github Pages](https://pages.github.com) _(for hosting your game)_

## Evaluation

Your instructors will use this rubric to assess your project:

[Evaluation Rubric](evaluation.md)

## Presentations

We expect everyone to attend all presentations in their entirety and will
provide breaks between each session.

This means **no working on your code** while others are presenting. This is your
chance to ask others how they tackled their project.

Each session of presentations will be science-fair style. Several people will
set up at a given time, and other students will walk around asking questions
like:

- What would you do differently?
- What are you most proud of?
- What would you do next?
- How did you plan your project?
- What did you learn?

## Plagiarism

Take a moment to re-familiarize yourself with the plagiarism policy,
specifically on using work you find online and on work you do with other
students.

We give assignments like this to give you the opportunity to review the material
in class in a practical manner. By building something using what you've learned
in class, you'll be reviewing the material and gaining a deeper understanding of
it.

These assignments are similar to those you can expect when applying for a job,
either in the form of a take-home coding challenge or an in-person technical
interview. So it's important that you put in your best effort now and challenge
yourself to do this assignment on your own.

If you are struggling with the material, that's alright! That's why you're here.
First, try reviewing the previous lessons and exercises. Go easy on yourself,
you're still learning! If you're still struggling after that, come to office
hours and ask an instructor for help. They're here to help you!

Don't copy and paste from another source or another student or the solution
branch. That's just going to put you at a disadvantage when you're interviewing
for a job.
