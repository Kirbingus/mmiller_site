// quiz logic
document.addEventListener("DOMContentLoaded", () => {
  const quiz = document.getElementById("quizForm");
  const result = document.getElementById("result");
  const resetBtn = document.getElementById("resetBtn");

  quiz.addEventListener("submit", e => {
    e.preventDefault();
    let score = 0, total = 5, feedback = "";
    const answers = {q1:"WorldWideWeb", q2:"Mosaic", q3:"Mozilla", q4:"Edge", q5:["AI","Privacy","PWA"]};

    const q1 = quiz.q1.value.trim();
    if(q1.toLowerCase() === answers.q1.toLowerCase()){score++; feedback += "<p class='correct'>1. Correct!</p>";}
    else{feedback += "<p class='incorrect'>1. Incorrect. Answer: WorldWideWeb.</p>";}

    for(let i=2;i<=4;i++){const val=quiz["q"+i].value;
      if(val===answers["q"+i]){score++;feedback+=`<p class='correct'>${i}. Correct!</p>`;}
      else{feedback+=`<p class='incorrect'>${i}. Incorrect. Answer: ${answers["q"+i]}.</p>`;}
    }

    const selected=[...quiz.querySelectorAll('input[name="q5"]:checked')].map(c=>c.value);
    const correctSet=new Set(answers.q5);
    const correct=selected.length===answers.q5.length && selected.every(v=>correctSet.has(v));
    if(correct){score++;feedback+="<p class='correct'>5. Correct!</p>";}
    else{feedback+="<p class='incorrect'>5. Incorrect. Answers: AI Integration, Privacy Controls, Progressive Web Apps.</p>";}

    const percent=Math.round(score/total*100);
    const pass=percent>=60;
    result.innerHTML=`<h3>Score: ${score}/${total} (${percent}%)</h3><p class='${pass?"score-pass":"score-fail"}'>${pass?"You Passed!":"You Failed."}</p>${feedback}`;
  });

  resetBtn.addEventListener("click",()=>{quiz.reset(); result.innerHTML="";});
});
