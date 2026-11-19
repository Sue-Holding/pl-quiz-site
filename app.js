// Äldre datafiler (window.TOPICS) räknas till kursen Projektledning 55 YHP
if(window.TOPICS&&window.TOPICS.length){COURSES[0].topics.push(...window.TOPICS);window.TOPICS=[];}
const A=document.getElementById('app');
const h=s=>String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const nq=C=>C.topics.reduce((a,t)=>a+t.q.length,0);
function home(){A.innerHTML='<h1>Projektledning – studieapp</h1><p class="mu">IT-projektledare. Välj kurs.</p>'+COURSES.map((c,i)=>`<div class="card"><b>${h(c.name)}, ${c.yhp} YHP</b><div class="mu">${c.topics.length?c.topics.length+' ämnen · '+nq(c)+' frågor':'Inga quiz ännu'}</div><div class="row"><button class="p" onclick="course(${i})">Öppna</button></div></div>`).join('');}

function course(c) {
  const C = COURSES[c];
  const total = nq(C);
  const combined = C.combinedQuiz;
  A.innerHTML = `<button onclick="home()">← Kurser</button><h2>${h(C.name)}, ${C.yhp} YHP</h2>`;
  if (combined && total) {
    A.innerHTML += `<div class="card"><b>${h(combined.t)}</b>
      <div class="mu">${total} frågor · Godkänt från ${combined.passPercent} %</div>
      <div class="row"><button class="p" onclick="quiz(${c})">Starta samlat quiz</button></div></div>`;
  }
  A.innerHTML += C.topics.length ? C.topics.map((x, i) => `<div class="card"><b>${i+1}. ${h(x.t)}</b>
    <div class="mu">${x.q.length} frågor</div><div class="row">
      <button class="p" onclick="quiz(${c},${i})">Quiz</button>
      <button onclick="cards(${c},${i})">Flashkort</button></div></div>`).join('')
    : '<div class="card mu">Inga quiz ännu. Innehållet läggs till senare.</div>';
}

function quiz(c, t) {
  const C = COURSES[c];
  const combined = t === undefined;
  const { t: title, passPercent } = combined ? C.combinedQuiz : C.topics[t];
  const questions = combined ? C.topics.flatMap(topic => topic.q) : C.topics[t].q;
  const total = questions.length;
  const missed = [];

  function showResult() {
    const correct = total - missed.length;
    let grade = '';
    if (passPercent !== undefined) {
      const passed = correct * 100 >= passPercent * total;
      const percent = (Math.floor(correct * 1000 / total) / 10).toLocaleString('sv-SE', { maximumFractionDigits: 1 });
      grade = `<div>${passed ? 'Godkänt' : 'Ej godkänt'} (${percent} %)</div>
        <div class="mu">Gräns för godkänt ${passPercent} %</div>`;
    }
    A.innerHTML = `<h2 tabindex="-1">${h(title)}</h2><div class="card"><b>Resultat: ${correct} / ${total}</b>${grade}</div>
      <div class="row"><button class="p" id="retry-quiz">Försök igen</button>
        ${missed.length ? `<button id="quiz-missed">Öva på missade kort (${missed.length})</button>` : ''}
        <button onclick="course(${c})">Alla ämnen</button></div>`;
    document.getElementById('retry-quiz').onclick = () => quiz(c, t);
    const practice = document.getElementById('quiz-missed');
    if (practice) practice.onclick = () => practiceCards(c, title, missed, true);
    A.querySelector('h2').focus();
  }

  function showQuestion(n) {
    const q = questions[n];
    A.innerHTML = `<button onclick="course(${c})">← Ämnen</button><h2>${h(title)}</h2>
      <div class="mu">Fråga ${n+1} av ${total}</div><div class="card"><b id="question" tabindex="-1">${h(q[0])}</b>
      ${q[1].map((o, i) => `<button class="opt" data-i="${i}">${h(o)}</button>`).join('')}
      <div id="fb" tabindex="-1"></div></div>`;
    const options = A.querySelectorAll('.opt');
    options.forEach(button => button.onclick = () => {
      const ok = Number(button.dataset.i) === q[2];
      options.forEach(option => {
        option.disabled = true;
        if (Number(option.dataset.i) === q[2]) option.classList.add('ok');
      });
      if (!ok) {
        button.classList.add('no');
        missed.push(q);
      }
      const last = n + 1 === total;
      const feedback = document.getElementById('fb');
      feedback.innerHTML = `<p><b>${ok ? 'Rätt!' : 'Inte riktigt. Rätt svar: ' + h(q[1][q[2]])}</b></p>
        <p>${h(q[3])}</p><button class="p" id="next-question">${last ? 'Se resultat' : 'Nästa'}</button>`;
      const next = document.getElementById('next-question');
      next.onclick = last ? showResult : () => showQuestion(n + 1);
      feedback.focus();
    });
    document.getElementById('question').focus();
  }

  showQuestion(0);
}

function cards(c, t) {
  const topic = COURSES[c].topics[t];
  practiceCards(c, topic.t, topic.q);
}

function practiceCards(c, title, questions, missedOnly = false) {
  function startRound(deck, reviewing) {
    const missed = new Set();

    function showCard(n, flipped = false, focus = 'flip-card') {
      const q = deck[n];
      const total = deck.length;
      const marked = missed.has(n);
      A.innerHTML = `<button onclick="course(${c})">← Ämnen</button><h2>${h(title)}</h2>
        <div class="mu">${reviewing ? 'Missade kort · ' : ''}Kort ${n+1} av ${total} · tryck för att vända</div>
        <button class="card fc" id="flip-card">${flipped ? h(q[1][q[2]]) + '<span class="mu">' + h(q[3]) + '</span>' : h(q[0])}</button>
        <div class="row"><button id="previous-card">← Föregående</button>
          <button class="p" id="next-card">Nästa →</button></div>
        ${flipped || missed.size ? `<div class="row">
          ${flipped ? `<button id="mark-missed">${marked ? 'Ta bort markering' : 'Markera som missat'}</button>` : ''}
          ${missed.size ? `<button id="study-missed">Öva på missade kort (${missed.size})</button>` : ''}
        </div>` : ''}`;
      document.getElementById('flip-card').onclick = () => showCard(n, !flipped);
      document.getElementById('previous-card').onclick = () => showCard((n - 1 + total) % total);
      document.getElementById('next-card').onclick = () => showCard((n + 1) % total);
      const mark = document.getElementById('mark-missed');
      if (mark) mark.onclick = () => {
        if (marked) missed.delete(n);
        else missed.add(n);
        showCard(n, true, 'mark-missed');
      };
      const retry = document.getElementById('study-missed');
      if (retry) retry.onclick = () => startRound(deck.filter((_, i) => missed.has(i)), true);
      document.getElementById(focus).focus();
    }

    showCard(0);
  }

  startRound(questions, missedOnly);
}

home();
