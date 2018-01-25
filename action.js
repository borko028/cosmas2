const quizAnswer1 = document.getElementById('quizAnswer1');
const quizAnswer2 = document.getElementById('quizAnswer2');
const quizAnswer3 = document.getElementById('quizAnswer3');
const quizAnswer4 = document.getElementById('quizAnswer4');

quizAnswer1.addEventListener('mouseover', function() {
  quizAnswer1.style.backgroundColor = "rgba(186, 186, 186, 0.3)";
});
quizAnswer1.addEventListener('mouseout', function() {
  quizAnswer1.style.backgroundColor = "rgba(186, 186, 186, 0.5)";
});

quizAnswer2.addEventListener('mouseover', function() {
  quizAnswer2.style.backgroundColor = "rgba(186, 186, 186, 0.3)";
});
quizAnswer2.addEventListener('mouseout', function() {
  quizAnswer2.style.backgroundColor = "rgba(186, 186, 186, 0.5)";
});

quizAnswer3.addEventListener('mouseover', function() {
  quizAnswer3.style.backgroundColor = "rgba(186, 186, 186, 0.3)";
});
quizAnswer3.addEventListener('mouseout', function() {
  quizAnswer3.style.backgroundColor = "rgba(186, 186, 186, 0.5)";
});

quizAnswer4.addEventListener('mouseover', function() {
  quizAnswer4.style.backgroundColor = "rgba(186, 186, 186, 0.3)";
});
quizAnswer4.addEventListener('mouseout', function() {
  quizAnswer4.style.backgroundColor = "rgba(186, 186, 186, 0.5)";
});

//Content Box color change
const contentBox = document.getElementById('contentBox');

contentBox.addEventListener('mouseover', function() {
  contentBox.style.backgroundColor = "rgba(186, 186, 186, 0.3)";
});
contentBox.addEventListener('mouseout', function() {
  contentBox.style.backgroundColor = "rgba(186, 186, 186, 0.2)";
});
