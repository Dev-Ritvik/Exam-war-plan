// ===================== HELPERS =====================
function formatDateShort(date) {
  return date.toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

function getWeekdayName(date) {
  return date.toLocaleDateString(undefined, { weekday: "long" });
}

function todayKey() {
  const d = new Date();
  return d.toISOString().slice(0, 10); // YYYY-MM-DD
}

function getWeekId(date) {
  const year = date.getFullYear();
  const first = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date - first) / (1000 * 60 * 60 * 24));
  const week = Math.floor((days + first.getDay()) / 7);
  return `${year}-W${week}`;
}

// ===================== STUDY STATE =====================
const STUDY_STATE_KEY = "warroom_study_v1";

function loadStudyState() {
  try {
    const raw = localStorage.getItem(STUDY_STATE_KEY);
    if (!raw) {
      return { subjects: {}, log: {} };
    }
    return JSON.parse(raw);
  } catch (e) {
    console.warn("Failed to load study state", e);
    return { subjects: {}, log: {} };
  }
}

let studyState = loadStudyState();

function ensureSubjectStudyState(subject) {
  if (!studyState.subjects[subject.id]) {
    studyState.subjects[subject.id] = { lessons: {} };
  }
  subject.lessons.forEach((lesson) => {
    if (!studyState.subjects[subject.id].lessons[lesson.id]) {
      studyState.subjects[subject.id].lessons[lesson.id] = {
        done: false,
        hours: 0,
        mySummary: "",
        myFormulas: "",
        myRecap: ""
      };
    } else {
      const ls = studyState.subjects[subject.id].lessons[lesson.id];
      if (ls.mySummary === undefined) ls.mySummary = "";
      if (ls.myFormulas === undefined) ls.myFormulas = "";
      if (ls.myRecap === undefined) ls.myRecap = "";
    }
  });
}

function saveStudyState() {
  localStorage.setItem(STUDY_STATE_KEY, JSON.stringify(studyState));
}

SUBJECTS.forEach(ensureSubjectStudyState);
saveStudyState();

// ===================== TRAINING STATE =====================
const TRAINING_STATE_KEY = "warroom_training_v1";

function loadTrainingState() {
  try {
    const raw = localStorage.getItem(TRAINING_STATE_KEY);
    if (!raw) return { days: {} };
    return JSON.parse(raw);
  } catch (e) {
    console.warn("Failed to load training state", e);
    return { days: {} };
  }
}

let trainingState = loadTrainingState();

function saveTrainingState() {
  localStorage.setItem(TRAINING_STATE_KEY, JSON.stringify(trainingState));
}

function ensureTrainingDayState(key) {
  if (!trainingState.days[key]) {
    trainingState.days[key] = {
      minutes: 0,
      creatine: false,
      tens: false,
      waterLiters: 0,
      exercises: {}
    };
  }
}

// ===================== FOOD STATE =====================
const FOOD_STATE_KEY = "warroom_food_v1";

function loadFoodState() {
  try {
    const raw = localStorage.getItem(FOOD_STATE_KEY);
    if (!raw) return { days: {} };
    return JSON.parse(raw);
  } catch (e) {
    console.warn("Failed to load food state", e);
    return { days: {} };
  }
}

let foodState = loadFoodState();

function saveFoodState() {
  localStorage.setItem(FOOD_STATE_KEY, JSON.stringify(foodState));
}

function ensureFoodDayState(key) {
  if (!foodState.days[key]) {
    foodState.days[key] = {
      meals: {
        breakfast: { itemId: "" },
        lunch: { itemId: "", eggs: 0 },
        tea: { itemId: "" },
        dinner: { itemId: "" }
      }
    };
  }
}

// ===================== DOMContentLoaded =====================
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();

  // Top labels
  const todayLabel = document.getElementById("todayLabel");
  if (todayLabel) {
    todayLabel.textContent = `Today: ${formatDateShort(today)} (${getWeekdayName(
      today
    )})`;
  }

  const seasonLabel = document.getElementById("seasonLabel");
  if (seasonLabel) {
    seasonLabel.textContent = `Season: ${formatDateShort(
      EXAM_SEASON.start
    )} – ${formatDateShort(EXAM_SEASON.end)}`;
  }

  const daysLeftLabel = document.getElementById("daysLeftLabel");
  if (daysLeftLabel) {
    const msLeft = EXAM_SEASON.end - today;
    const dLeft = msLeft > 0 ? Math.ceil(msLeft / (1000 * 60 * 60 * 24)) : 0;
    daysLeftLabel.textContent = `Days left: ${dLeft}`;
  }

  updateNextExamLabel(today);

  // Views + nav
  const views = {
    myday: document.getElementById("view-myday"),
    study: document.getElementById("view-study"),
    training: document.getElementById("view-training"),
    food: document.getElementById("view-food"),
    sleep: document.getElementById("view-sleep")
  };

  const navButtons = document.querySelectorAll(".nav-btn");
  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const viewName = btn.dataset.view;
      navButtons.forEach((b) => b.classList.toggle("active", b === btn));
      Object.entries(views).forEach(([name, section]) => {
        if (!section) return;
        section.classList.toggle("active", name === viewName);
      });
    });
  });

  // My Day → jump into blocks
  document.querySelectorAll(".block-card").forEach((card) => {
    const target = card.dataset.open;
    if (!target) return;
    card.addEventListener("click", () => {
      navButtons.forEach((btn) => {
        const v = btn.dataset.view;
        btn.classList.toggle("active", v === target);
      });
      Object.entries(views).forEach(([name, section]) => {
        if (!section) return;
        section.classList.toggle("active", name === target);
      });
    });
  });

  // Init blocks
  initSleepBlock();
  renderStudySection();
  initTrainingBlock(today);
  initFoodBlock();
  updateDailyScore();
});

// ===================== NEXT EXAM LABEL =====================
function updateNextExamLabel(today) {
  const label = document.getElementById("nextExamLabel");
  if (!label) return;

  if (!SUBJECTS.length) {
    label.textContent = "Next exam: (add subjects in data.js)";
    return;
  }

  const upcoming = SUBJECTS.map((s) => ({
    subject: s,
    date: new Date(s.examDate)
  }))
    .filter((x) => x.date >= today)
    .sort((a, b) => a.date - b.date);

  if (!upcoming.length) {
    label.textContent = "Next exam: none set";
    return;
  }

  const next = upcoming[0];
  const diffMs = next.date - today;
  const diffDays = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));

  label.textContent = `Next exam: ${next.subject.name} in ${diffDays} day(s) (${next.date.toLocaleDateString()})`;
}

// ===================== SLEEP (simple for now) =====================
// ===================== SLEEP STATE & UI =====================
const SLEEP_STATE_KEY = "warroom_sleep_v1";

function loadSleepState() {
  try {
    const raw = localStorage.getItem(SLEEP_STATE_KEY);
    if (!raw) {
      return {
        targetHours: 7.5,
        days: {}
      };
    }
    const parsed = JSON.parse(raw);
    if (parsed.targetHours == null) parsed.targetHours = 7.5;
    if (!parsed.days) parsed.days = {};
    return parsed;
  } catch (e) {
    console.warn("Failed to load sleep state", e);
    return { targetHours: 7.5, days: {} };
  }
}

let sleepState = loadSleepState();

function saveSleepState() {
  localStorage.setItem(SLEEP_STATE_KEY, JSON.stringify(sleepState));
}

function ensureSleepDayState(key) {
  if (!sleepState.days[key]) {
    sleepState.days[key] = {
      hours: 0,
      quality: 3,       // 1–5
      note: ""
    };
  }
}

function computeSleepStats(target) {
  const today = new Date();

  let totalHours7 = 0;
  let countedDays7 = 0;
  let debt7 = 0;

  // last 7 days average + debt
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const day = sleepState.days[key];
    if (!day) continue;
    countedDays7++;
    totalHours7 += Number(day.hours || 0);
    const diff = target - Number(day.hours || 0);
    if (diff > 0) debt7 += diff;
  }

  const avg7 = countedDays7 ? totalHours7 / countedDays7 : 0;

  // streak of “green” nights (>= 90% of target) going backwards
  let streak = 0;
  for (let i = 0; i < 30; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const day = sleepState.days[key];
    if (!day) break;
    const h = Number(day.hours || 0);
    if (h >= target * 0.9) streak++;
    else break;
  }

  return { avg7, debt7, streak };
}

function initSleepBlock() {
  renderSleepTab();
  updateSleepSummaryCard();
}

// Full Sleep tab
function renderSleepTab() {
  const panel = document.getElementById("sleepPanel");
  if (!panel) return;

  const key = todayKey();
  ensureSleepDayState(key);
  const todayData = sleepState.days[key];
  const target = sleepState.targetHours || 7.5;
  const hours = Number(todayData.hours || 0);
  const quality = Number(todayData.quality || 3);

  const stats = computeSleepStats(target);
  const pct = target ? Math.min(100, Math.round((hours / target) * 100)) : 0;

  panel.innerHTML = `
    <div class="sleep-header-line">
      Today: <strong>${formatDateShort(new Date())}</strong> (${getWeekdayName(new Date())})
    </div>

    <div class="progress-bar">
      <div class="progress-fill" id="sleepProgressMain" style="width:${pct}%;"></div>
    </div>

    <div class="sleep-grid">
      <div class="sleep-main">
        <div class="sleep-input-row">
          <div class="sleep-input-block">
            <label for="sleepTargetInput">Target sleep (hours)</label>
            <input id="sleepTargetInput" type="number" min="4" max="10" step="0.25"
                   value="${target.toFixed(1)}" />
          </div>
          <div class="sleep-input-block">
            <label for="sleepHoursInput">Last night (hours)</label>
            <input id="sleepHoursInput" type="number" min="0" max="14" step="0.25"
                   value="${hours.toFixed(1)}" />
          </div>
          <div class="sleep-input-block">
            <label for="sleepQualitySelect">Quality</label>
            <select id="sleepQualitySelect">
              <option value="5"${quality === 5 ? " selected" : ""}>⭐️⭐️⭐️⭐️⭐️</option>
              <option value="4"${quality === 4 ? " selected" : ""}>⭐️⭐️⭐️⭐️</option>
              <option value="3"${quality === 3 ? " selected" : ""}>⭐️⭐️⭐️</option>
              <option value="2"${quality === 2 ? " selected" : ""}>⭐️⭐️</option>
              <option value="1"${quality === 1 ? " selected" : ""}>⭐️</option>
            </select>
          </div>
        </div>

        <p class="sleep-tip">
          Tip: Aim for ${target.toFixed(
            1
          )} h. Anything above 90% of target counts as a <span class="badge-sm">green night</span>.
        </p>
      </div>

      <div class="sleep-side">
        <div class="sleep-stat">7-day average: <strong>${stats.avg7.toFixed(
          1
        )} h</strong></div>
        <div class="sleep-stat">7-day sleep debt: <strong>${stats.debt7.toFixed(
          1
        )} h</strong></div>
        <div class="sleep-stat">Green streak: <strong>${
          stats.streak
        }</strong> night(s)</div>

        <label for="sleepNoteInput" class="sleep-note-label">Night notes</label>
        <textarea id="sleepNoteInput" rows="3" placeholder="Late screens? Stress? Anything that messed or boosted your sleep.">${
          todayData.note || ""
        }</textarea>
      </div>
    </div>
  `;

  // --- listeners ---
  const targetInput = document.getElementById("sleepTargetInput");
  const hoursInput = document.getElementById("sleepHoursInput");
  const qualitySelect = document.getElementById("sleepQualitySelect");
  const noteInput = document.getElementById("sleepNoteInput");

  if (targetInput) {
    targetInput.addEventListener("change", () => {
      let val = Number(targetInput.value || 0);
      if (!val || val < 4) val = 4;
      if (val > 10) val = 10;
      sleepState.targetHours = val;
      saveSleepState();
      renderSleepTab();
      updateSleepSummaryCard();
    });
  }

  if (hoursInput) {
    hoursInput.addEventListener("change", () => {
      const key = todayKey();
      ensureSleepDayState(key);
      let val = Number(hoursInput.value || 0);
      if (val < 0) val = 0;
      if (val > 14) val = 14;
      sleepState.days[key].hours = val;
      saveSleepState();
      renderSleepTab();
      updateSleepSummaryCard();
    });
  }

  if (qualitySelect) {
    qualitySelect.addEventListener("change", () => {
      const key = todayKey();
      ensureSleepDayState(key);
      sleepState.days[key].quality = Number(qualitySelect.value || 3);
      saveSleepState();
    });
  }

  if (noteInput) {
    noteInput.addEventListener("blur", () => {
      const key = todayKey();
      ensureSleepDayState(key);
      sleepState.days[key].note = noteInput.value || "";
      saveSleepState();
    });
  }
}

// Update the small Sleep card on "My Day"
function updateSleepSummaryCard() {
  const key = todayKey();
  ensureSleepDayState(key);

  const target = sleepState.targetHours || 7.5;
  const hours = Number(sleepState.days[key].hours || 0);

  const tag = document.getElementById("sleepTargetTag");
  const last = document.getElementById("sleepLastNight");
  const bar = document.getElementById("sleepProgress");
  const statusEl = document.getElementById("sleepStatus");

  if (tag) tag.textContent = `Target: ${target.toFixed(1)} h`;
  if (last) last.textContent = `${hours.toFixed(1)} h`;

  const pct = target
    ? Math.min(100, Math.round((hours / target) * 100))
    : 0;
  if (bar) bar.style.width = pct + "%";

  let status = "no data";
  if (hours > 0) {
    if (pct >= 90 && pct <= 110) status = "Green zone";
    else if (pct >= 70) status = "Okay-ish";
    else status = "Low";
  }
  if (statusEl) statusEl.textContent = status;

  // Recalculate My Day total
  updateDailyScore();
}


// ===================== STUDY =====================
function computeSubjectStats(subject) {
  const sState = studyState.subjects[subject.id];
  let totalWeight = 0;
  let doneWeight = 0;
  let totalHours = 0;

  subject.lessons.forEach((lesson) => {
    const w = lesson.weight || 1;
    totalWeight += w;
    const lState = sState.lessons[lesson.id];
    if (lState.done) doneWeight += w;
    totalHours += Number(lState.hours || 0);
  });

  const progress = totalWeight
    ? Math.round((doneWeight / totalWeight) * 100)
    : 0;
  return { progress, totalHours, lessonCount: subject.lessons.length };
}

function renderStudySection() {
  const overviewEl = document.getElementById("subjectsOverview");
  const detailEl = document.getElementById("subjectDetail");
  if (!overviewEl || !detailEl) return;

  overviewEl.innerHTML = "";
  detailEl.classList.add("hidden");
  detailEl.innerHTML = "";

  if (!SUBJECTS.length) {
    overviewEl.innerHTML =
      '<p style="font-size:0.8rem;color:#9ca3af;">Add your subjects in <code>data.js</code> to start tracking study.</p>';
  } else {
    SUBJECTS.forEach((subject) => {
      const stats = computeSubjectStats(subject);
      const card = document.createElement("div");
      card.className = "block-card subject-card";

      const examDate = new Date(subject.examDate);
      const diffMs = examDate - new Date();
      const diffDays = Math.max(
        0,
        Math.ceil(diffMs / (1000 * 60 * 60 * 24))
      );

      card.innerHTML = `
        <h3>${subject.name}</h3>
        <div class="subject-meta">
          <span>${subject.credits} credits</span>
          <span>${subject.lessons.length} lessons</span>
          <span>Exam in ${diffDays} day(s)</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width:${stats.progress}%;"></div>
        </div>
        <div class="subject-progress-row">
          <span>Completion: ${stats.progress}%</span>
          <span>${stats.totalHours.toFixed(1)} h studied</span>
        </div>
      `;
      card.addEventListener("click", () => openSubjectDetail(subject.id));
      overviewEl.appendChild(card);
    });
  }

  initStudyBlock();
}

function initStudyBlock() {
  const targetHours = 6;
  const key = todayKey();
  const dayLog = studyState.log[key] || {};
  let todayHours = 0;
  let subjectsTouched = 0;

  Object.entries(dayLog).forEach(([_, hrs]) => {
    const h = Number(hrs || 0);
    if (h > 0) {
      todayHours += h;
      subjectsTouched += 1;
    }
  });

  const targetTag = document.getElementById("studyTargetTag");
  const todayEl = document.getElementById("studyTodayHours");
  const subjEl = document.getElementById("studySubjectsTouched");
  const overallEl = document.getElementById("studyOverallPct");
  const bar = document.getElementById("studyProgress");

  if (targetTag) targetTag.textContent = `Target: ${targetHours} h`;
  if (todayEl) todayEl.textContent = todayHours.toFixed(1);
  if (subjEl) subjEl.textContent = subjectsTouched;

  let totalWeight = 0;
  let doneWeight = 0;

  SUBJECTS.forEach((subject) => {
    const sState = studyState.subjects[subject.id];
    subject.lessons.forEach((lesson) => {
      const w = lesson.weight || 1;
      totalWeight += w;
      if (sState.lessons[lesson.id].done) {
        doneWeight += w;
      }
    });
  });

  const overallPct = totalWeight
    ? Math.round((doneWeight / totalWeight) * 100)
    : 0;
  if (overallEl) overallEl.textContent = overallPct + "%";
  if (bar) bar.style.width = overallPct + "%";
}

function openSubjectDetail(subjectId) {
  const subject = SUBJECTS.find((s) => s.id === subjectId);
  if (!subject) return;
  const stats = computeSubjectStats(subject);
  const sState = studyState.subjects[subject.id];
  const examDate = new Date(subject.examDate);
  const diffMs = examDate - new Date();
  const diffDays = Math.max(
    0,
    Math.ceil(diffMs / (1000 * 60 * 60 * 24))
  );

  const detailEl = document.getElementById("subjectDetail");
  if (!detailEl) return;
  detailEl.classList.remove("hidden");

  let totalLessons = subject.lessons.length;
  let completedLessons = 0;
  subject.lessons.forEach((lesson) => {
    if (sState.lessons[lesson.id].done) completedLessons++;
  });

  const revisionItems = subject.lessons
    .map((l) => {
      const ls = sState.lessons[l.id];
      const recap = (ls && ls.myRecap && ls.myRecap.trim()) || l.revision;
      if (!recap) return "";
      return `<div class="revision-item"><strong>${l.title}:</strong> ${recap}</div>`;
    })
    .filter(Boolean)
    .join("");

  detailEl.innerHTML = `
    <button class="back-btn" id="backToSubjects">&larr; Back to all subjects</button>
    <div class="subject-detail-header">
      <div class="subject-detail-main">
        <h3>${subject.name}</h3>
        <p>
          Total syllabus: ${totalLessons} lessons • Completed: ${completedLessons}
          <span class="badge-sm">Completion: ${stats.progress}%</span>
        </p>
      </div>
      <div class="subject-detail-meta">
        <div>Credits: ${subject.credits}</div>
        <div>Exam: ${examDate.toLocaleDateString()}</div>
        <div>Days left: ${diffDays}</div>
        <div>Total hours: ${stats.totalHours.toFixed(1)} h</div>
      </div>
    </div>

    <div class="lesson-list">
      ${subject.lessons
        .map((lesson) => {
          const lState = sState.lessons[lesson.id];
          const formulasHtml =
            lesson.formulas && lesson.formulas.length
              ? `<ul class="lesson-formulas">${lesson.formulas
                  .map((f) => `<li>${f}</li>`)
                  .join("")}</ul>`
              : '<p style="font-size:0.75rem;color:#9ca3af;margin-top:2px;">No formulae added yet.</p>';

          const notesLockedClass = lState.done ? "" : "notes-locked";
          const lockMsg = lState.done
            ? ""
            : '<div class="notes-lock-msg">Mark this topic as done to unlock your custom summary & recap.</div>';

          return `
          <div class="lesson-row" data-lesson-id="${lesson.id}" data-subject-id="${subject.id}">
            <div class="lesson-header">
              <div class="lesson-header-left">
                <input type="checkbox" class="lesson-done" ${
                  lState.done ? "checked" : ""
                } />
                <span class="lesson-title">${lesson.title}</span>
              </div>
              <div class="lesson-controls">
                <span>Hours:</span>
                <input type="number" min="0" step="0.5" value="${Number(
                  lState.hours || 0
                ).toFixed(1)}" class="lesson-hours" />
              </div>
            </div>
            <div class="lesson-body">
              <strong>Summary:</strong> ${lesson.summary || "No summary yet."}
              <br/>
              <strong>Important formulae:</strong>
              ${formulasHtml}
            </div>

            <div class="lesson-notes ${notesLockedClass}">
              <h5>Your notes after mastering this topic</h5>
              <div class="notes-grid">
                <div class="notes-field">
                  <label>1. Your 1–3 line summary</label>
                  <textarea class="notes-textarea notes-summary">${
                    lState.mySummary || ""
                  }</textarea>
                </div>
                <div class="notes-field">
                  <label>2. Formulae you care about</label>
                  <textarea class="notes-textarea notes-formulas">${
                    lState.myFormulas || ""
                  }</textarea>
                </div>
                <div class="notes-field">
                  <label>3. Quick recap / trap points</label>
                  <textarea class="notes-textarea notes-recap">${
                    lState.myRecap || ""
                  }</textarea>
                </div>
              </div>
              ${lockMsg}
            </div>
          </div>
        `;
        })
        .join("")}
    </div>

    <div class="revision-desk">
      <h4>Revision Desk – Important Topics (your notes first)</h4>
      ${
        revisionItems ||
        '<p style="font-size:0.78rem;color:#9ca3af;">Once you add quick recaps to completed topics, they will appear here for rapid revision.</p>'
      }
    </div>
  `;

  const backBtn = document.getElementById("backToSubjects");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      detailEl.classList.add("hidden");
    });
  }

  detailEl.querySelectorAll(".lesson-row").forEach((row) => {
    const lessonId = row.dataset.lessonId;
    const subjId = row.dataset.subjectId;
    const checkbox = row.querySelector(".lesson-done");
    const hoursInput = row.querySelector(".lesson-hours");
    const notesBlock = row.querySelector(".lesson-notes");
    const summaryArea = row.querySelector(".notes-summary");
    const formulasArea = row.querySelector(".notes-formulas");
    const recapArea = row.querySelector(".notes-recap");

    checkbox.addEventListener("change", () => {
      const lState = studyState.subjects[subjId].lessons[lessonId];
      lState.done = checkbox.checked;

      if (checkbox.checked) {
        notesBlock.classList.remove("notes-locked");
        const msg = notesBlock.querySelector(".notes-lock-msg");
        if (msg) msg.remove();
      } else {
        if (!notesBlock.classList.contains("notes-locked")) {
          notesBlock.classList.add("notes-locked");
        }
      }

      saveStudyState();
      renderStudySection();
      openSubjectDetail(subjId);
      updateDailyScore();
    });

    hoursInput.addEventListener("change", () => {
      const lState = studyState.subjects[subjId].lessons[lessonId];
      const newVal = Number(hoursInput.value || 0);
      const prevVal = Number(lState.hours || 0);

      lState.hours = newVal;

      const diff = newVal - prevVal;
      const key = todayKey();
      if (!studyState.log[key]) studyState.log[key] = {};
      if (!studyState.log[key][subjId]) studyState.log[key][subjId] = 0;
      studyState.log[key][subjId] += diff;

      saveStudyState();
      renderStudySection();
      openSubjectDetail(subjId);
      updateDailyScore();
    });

    const saveNotes = () => {
      const lState = studyState.subjects[subjId].lessons[lessonId];
      lState.mySummary = summaryArea.value || "";
      lState.myFormulas = formulasArea.value || "";
      lState.myRecap = recapArea.value || "";
      saveStudyState();
      renderStudySection();
      openSubjectDetail(subjId);
    };

    summaryArea.addEventListener("blur", saveNotes);
    formulasArea.addEventListener("blur", saveNotes);
    recapArea.addEventListener("blur", saveNotes);
  });
}

// ===================== TRAINING =====================
function initTrainingBlock(today) {
  const weekday = getWeekdayName(today);
  const muscles = TRAINING_PLAN[weekday] || [];
  const labelEl = document.getElementById("trainingDayTag");

  const key = todayKey();
  ensureTrainingDayState(key);
  const dayState = trainingState.days[key];

  if (labelEl) {
    if (!muscles.length) {
      labelEl.textContent = `${weekday}: Rest`;
    } else {
      const names = muscles.map((m) => TRAINING_LABELS[m] || m).join(", ");
      labelEl.textContent = `${weekday}: ${names}`;
    }
  }

  const targetMinutes = muscles.length ? 60 : 0;
  const doneMinutes = dayState.minutes || 0;

  const minsEl = document.getElementById("trainingMinutes");
  const targetEl = document.getElementById("trainingTargetMinutes");
  const bar = document.getElementById("trainingProgress");
  const creatEl = document.getElementById("creatineStatus");
  const tensEl = document.getElementById("tensStatus");

  if (minsEl) minsEl.textContent = doneMinutes;
  if (targetEl) targetEl.textContent = targetMinutes;

  const pct = targetMinutes
    ? Math.min(100, Math.round((doneMinutes / targetMinutes) * 100))
    : 0;
  if (bar) bar.style.width = pct + "%";

  if (creatEl) creatEl.textContent = dayState.creatine ? "✅" : "❌";
  if (tensEl) tensEl.textContent = dayState.tens ? "✅" : "❌";

  renderTrainingToday(weekday, muscles, dayState);
  updateFoodWaterFromTraining();
  updateFoodScore();
  updateDailyScore();
}

function renderTrainingToday(weekday, muscles, dayState) {
  const panel = document.getElementById("trainingToday");
  if (!panel) return;

  if (!muscles.length) {
    panel.innerHTML = `
      <p class="training-header-line">
        Today is <strong>${weekday}</strong>. This is your scheduled <strong>rest day</strong>. Recovery = part of training.
      </p>
    `;
    return;
  }

  const focusText = muscles.map((m) => TRAINING_LABELS[m] || m).join(", ");

  panel.innerHTML = `
    <div class="training-header-line">
      Today is <strong>${weekday}</strong>. Focus: <strong>${focusText}</strong>
    </div>
    <div class="training-meta">
      <span id="trainMetaMinutes">Minutes: ${dayState.minutes || 0} / 60</span>
      <span class="water-pill" id="trainWaterPill">Water today: ${(dayState.waterLiters || 0).toFixed(
        1
      )} / 4.0 L</span>
    </div>

    <div class="training-controls-row">
      <div>
        <label for="trainMinutesInput">Minutes trained:</label>
        <input id="trainMinutesInput" type="number" min="0" max="180" step="5" value="${
          dayState.minutes || 0
        }" />
      </div>
      <div class="toggle-pill" id="creatineToggle" data-on="${dayState.creatine}">
        <span>Creatine HCl 3 g</span>
        <span>${dayState.creatine ? "✅" : "❌"}</span>
      </div>
      <div class="toggle-pill" id="tensToggle" data-on="${dayState.tens}">
        <span>TENS after training</span>
        <span>${dayState.tens ? "✅" : "❌"}</span>
      </div>
      <div>
        <label for="waterInput">Water (L):</label>
        <input id="waterInput" type="number" min="0" max="6" step="0.25" value="${(
          dayState.waterLiters || 0
        ).toFixed(1)}" />
      </div>
    </div>

    <div class="training-groups">
      ${muscles
        .map((muscle) => {
          const exList = TRAINING_EXERCISES[muscle] || [];
          const title = TRAINING_LABELS[muscle] || muscle;
          return `
          <div class="training-group" data-muscle="${muscle}">
            <div class="training-group-title">${title}</div>
            ${exList
              .map((ex) => {
                const checked = dayState.exercises && dayState.exercises[ex.id];
                return `
                  <div class="training-exercise" data-ex-id="${ex.id}">
                    <input type="checkbox" ${checked ? "checked" : ""} />
                    <span>${ex.name}</span>
                  </div>
                `;
              })
              .join("")}
          </div>
        `;
        })
        .join("")}
    </div>
  `;

  const minutesInput = document.getElementById("trainMinutesInput");
  if (minutesInput) {
    minutesInput.addEventListener("change", () => {
      const val = Number(minutesInput.value || 0);
      const key = todayKey();
      ensureTrainingDayState(key);
      trainingState.days[key].minutes = val;
      saveTrainingState();
      const minsEl = document.getElementById("trainingMinutes");
      if (minsEl) minsEl.textContent = val;
      const meta = document.getElementById("trainMetaMinutes");
      if (meta) meta.textContent = `Minutes: ${val} / 60`;
      const target =
        TRAINING_PLAN[weekday] && TRAINING_PLAN[weekday].length ? 60 : 0;
      const pct = target
        ? Math.min(100, Math.round((val / target) * 100))
        : 0;
      const bar = document.getElementById("trainingProgress");
      if (bar) bar.style.width = pct + "%";
      updateDailyScore();
    });
  }

  const creatToggle = document.getElementById("creatineToggle");
  if (creatToggle) {
    creatToggle.addEventListener("click", () => {
      const key = todayKey();
      ensureTrainingDayState(key);
      const state = trainingState.days[key];
      state.creatine = !state.creatine;
      saveTrainingState();
      creatToggle.dataset.on = state.creatine;
      creatToggle.querySelectorAll("span")[1].textContent = state.creatine
        ? "✅"
        : "❌";
      const creatEl = document.getElementById("creatineStatus");
      if (creatEl) creatEl.textContent = state.creatine ? "✅" : "❌";
    });
  }

  const tensToggle = document.getElementById("tensToggle");
  if (tensToggle) {
    tensToggle.addEventListener("click", () => {
      const key = todayKey();
      ensureTrainingDayState(key);
      const state = trainingState.days[key];
      state.tens = !state.tens;
      saveTrainingState();
      tensToggle.dataset.on = state.tens;
      tensToggle.querySelectorAll("span")[1].textContent = state.tens
        ? "✅"
        : "❌";
      const tensEl = document.getElementById("tensStatus");
      if (tensEl) tensEl.textContent = state.tens ? "✅" : "❌";
    });
  }

  const waterInput = document.getElementById("waterInput");
  if (waterInput) {
    waterInput.addEventListener("change", () => {
      const val = Math.max(0, Number(waterInput.value || 0));
      const key = todayKey();
      ensureTrainingDayState(key);
      trainingState.days[key].waterLiters = val;
      saveTrainingState();
      const pill = document.getElementById("trainWaterPill");
      if (pill) pill.textContent = `Water today: ${val.toFixed(
        1
      )} / 4.0 L`;
      updateFoodWaterFromTraining();
      updateFoodScore();
      updateDailyScore();
    });
  }

  panel.querySelectorAll(".training-exercise").forEach((row) => {
    const exId = row.dataset.exId;
    const cb = row.querySelector("input[type='checkbox']");
    cb.addEventListener("change", () => {
      const key = todayKey();
      ensureTrainingDayState(key);
      if (!trainingState.days[key].exercises)
        trainingState.days[key].exercises = {};
      trainingState.days[key].exercises[exId] = cb.checked;
      saveTrainingState();
    });
  });
}

// ===================== FOOD COACH LOGIC =====================
// Decide what the app recommends for today
// Decide what the app recommends for today
// Decide what the app recommends for today (random but smart)
function getCoachPlan(paneerCount, mushroomCount, eggDaysCount, nutrition) {
  const remaining = FOOD_TARGET_CALORIES - (nutrition.calories || 0);

  const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const paneerAllowed = paneerCount < FOOD_RULES.paneerPerWeek;
  const eggsAllowedToday = eggDaysCount < FOOD_RULES.eggDaysPerWeek;

  // ---------- BREAKFAST ----------
  const bfHighProteinWithPaneer = [
    "bf_soya_paneer_parantha",
    "bf_milk_cornflakes_banana",
    "bf_sprouts"
  ];
  const bfHighProteinNoPaneer = [
    "bf_veg_poha_curd",
    "bf_milk_cornflakes_banana",
    "bf_sprouts",
    "bf_idli_sambhar"
  ];
  const bfHeavier = [
    "bf_plain_dosa",
    "bf_masala_dosa",
    "bf_poori_bhaji",
    "bf_bhatura_channa"
  ];

  let breakfast;
  if (remaining > 3200) {
    // very early in the day – heavy
    breakfast = randomFrom(bfHeavier);
  } else {
    // focus on protein, avoid paneer if quota used
    breakfast = paneerAllowed
      ? randomFrom(bfHighProteinWithPaneer)
      : randomFrom(bfHighProteinNoPaneer);
  }

  // ---------- LUNCH ----------
  const lunchCleanNoPaneer = [
    "fd_north_thali_plain",
    "fd_north_thali_khichdi",
    "fd_south_thali_plain",
    "fd_south_thali_lemon",
    "fd_combo_veg_biryani",
    "fd_combo_curd_rice_set"
  ];
  const lunchPaneer = [
    "fd_combo_paneer_rice_bowl",
    "fd_combo_paneer_bhurji_parantha",
    "fd_combo_paneer_gravy_parantha"
  ];
  const lunchHeavyNonPaneer = [
    "fd_north_thali_pulao",
    "fd_north_thali_jeera",
    "fd_chinese_fried_rice_combo",
    "fd_chinese_veg_noodles_combo"
  ];

  let lunch;
  let lunchEggs = 0;

  if (remaining > 2500) {
    // you still need a lot of calories → heavier options
    if (paneerAllowed && Math.random() < 0.6) {
      lunch = randomFrom(lunchPaneer);
    } else {
      lunch = randomFrom(lunchHeavyNonPaneer.concat(lunchCleanNoPaneer));
    }
  } else {
    // closer to target → clean thali
    lunch = randomFrom(lunchCleanNoPaneer);
  }

  if (eggsAllowedToday) {
    lunchEggs = remaining > 2200 ? 3 : 2;
  } else {
    lunchEggs = 0;
  }

  // ---------- TEA ----------
  const teaClean = ["tea_sprouts", "tea_fruit_bowl"];
  const teaJunk = ["tea_samosa", "tea_bread_pakoda", "tea_besan_aloo_tikki"];

  let tea;
  if (remaining < 900) {
    // close to 4k → keep snack clean
    tea = randomFrom(teaClean);
  } else {
    // still space → mostly clean, sometimes fun
    tea = Math.random() < 0.7 ? randomFrom(teaClean) : randomFrom(teaJunk);
  }

  // ---------- DINNER ----------
  const dinnerClean = [
    "fd_south_thali_plain",
    "fd_north_thali_khichdi",
    "fd_combo_curd_rice_set",
    "fd_combo_soya_rice_roti",
    "fd_combo_veg_biryani"
  ];
  const dinnerPaneer = [
    "fd_combo_paneer_rice_bowl",
    "fd_combo_paneer_bhurji_parantha",
    "fd_combo_paneer_gravy_parantha"
  ];
  const dinnerChinese = [
    "fd_chinese_garlic_rice_combo",
    "fd_chinese_schezwan_rice_combo",
    "fd_chinese_hakka_noodles_combo"
  ];

  let dinner;
  if (remaining > 1500) {
    // need more calories at night
    if (paneerAllowed && Math.random() < 0.5) {
      dinner = randomFrom(dinnerPaneer);
    } else if (Math.random() < 0.3) {
      dinner = randomFrom(dinnerChinese);
    } else {
      dinner = randomFrom(dinnerClean);
    }
  } else {
    // already near target → cleaner dinner
    dinner = randomFrom(dinnerClean);
  }

  return { breakfast, lunch, lunchEggs, tea, dinner };
}



// ===================== FOOD =====================
function initFoodBlock() {
  renderFoodToday();
  updateFoodWaterFromTraining();
  updateFoodScore();
}

function renderFoodToday() {
  const container = document.getElementById("foodMeals");
  if (!container) return;

  const today = new Date();
  const key = todayKey();
  ensureFoodDayState(key);
  const day = foodState.days[key];

  // weekly usage
  const currentWeekId = getWeekId(today);
  let paneerCount = 0;
  let mushroomCount = 0;
  let eggDaysCount = 0;

  Object.entries(foodState.days).forEach(([dateStr, d]) => {
    const dDate = new Date(dateStr);
    if (getWeekId(dDate) !== currentWeekId) return;
    const meals = d.meals || {};
    ["breakfast", "lunch", "tea", "dinner"].forEach((mealName) => {
      const m = meals[mealName];
      if (!m || !m.itemId) return;
      const item = findFoodItem(m.itemId);
      if (!item) return;
      if (item.tags?.includes("paneer")) paneerCount++;
      if (item.tags?.includes("mushroom")) mushroomCount++;
    });
    if ((meals.lunch?.eggs || 0) > 0) {
      eggDaysCount++;
    }
  });

  const nutrition = computeDailyNutrition();
  const remainingCalories = Math.max(
    0,
    FOOD_TARGET_CALORIES - nutrition.calories
  );

  const coachPlan = getCoachPlan(
    paneerCount,
    mushroomCount,
    eggDaysCount,
    nutrition
  );

  const macroSummaryHtml = `
    <div class="food-header-line">
      Calories: <strong>${Math.round(
        nutrition.calories
      )}</strong> / ${FOOD_TARGET_CALORIES}
      (<strong>${Math.round(remainingCalories)}</strong> left)
      &nbsp;•&nbsp;
      Protein: <strong>${Math.round(nutrition.protein)} g</strong>
      &nbsp;•&nbsp;
      Carbs: <strong>${Math.round(nutrition.carbs)} g</strong>
      &nbsp;•&nbsp;
      Fats: <strong>${Math.round(nutrition.fats)} g</strong>
    </div>
  `;

  const weekUsageHtml = `
    <div class="food-week-usage">
      <span>Paneer this week: ${paneerCount} / ${FOOD_RULES.paneerPerWeek}</span>
      <span>Mushroom this week: ${mushroomCount} / ${FOOD_RULES.mushroomPerWeek}</span>
      <span>Egg days this week: ${eggDaysCount} / ${FOOD_RULES.eggDaysPerWeek}</span>
    </div>
  `;

  const mealsGridHtml = `
    <div class="food-meals-grid">
      ${renderMealCard("breakfast", "Breakfast", day, false, coachPlan.breakfast, null)}
      ${renderMealCard("lunch", "Lunch", day, true, coachPlan.lunch, coachPlan.lunchEggs)}
      ${renderMealCard("tea", "Tea", day, false, coachPlan.tea, null)}
      ${renderMealCard("dinner", "Dinner", day, false, coachPlan.dinner, null)}
    </div>
  `;

  container.innerHTML = `
    <div class="food-header-line">
      Today: <strong>${formatDateShort(today)}</strong> (${getWeekdayName(today)})
    </div>
    ${macroSummaryHtml}
    ${weekUsageHtml}
    ${mealsGridHtml}
  `;

  // normal dropdowns
  ["breakfast", "lunch", "tea", "dinner"].forEach((mealName) => {
    const select = document.getElementById(`food-select-${mealName}`);
    if (select) {
      select.addEventListener("change", () => {
        const key = todayKey();
        ensureFoodDayState(key);
        foodState.days[key].meals[mealName].itemId = select.value;
        saveFoodState();
        updateFoodScore();
        renderFoodToday();
      });
    }
  });

  // eggs input
  const eggInput = document.getElementById("food-eggs-lunch");
  if (eggInput) {
    eggInput.addEventListener("change", () => {
      let val = Number(eggInput.value || 0);
      val = Math.max(0, Math.min(FOOD_RULES.eggMaxPerDay, val));
      eggInput.value = val;
      const key = todayKey();
      ensureFoodDayState(key);
      foodState.days[key].meals.lunch.eggs = val;
      saveFoodState();
      updateFoodScore();
      renderFoodToday();
    });
  }

  // coach buttons
  document.querySelectorAll(".coach-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const meal = btn.dataset.meal;
      const itemId = btn.dataset.coachId;
      const coachEggs = btn.dataset.coachEggs
        ? Number(btn.dataset.coachEggs)
        : null;
      if (!meal || !itemId) return;

      const key = todayKey();
      ensureFoodDayState(key);
      foodState.days[key].meals[meal].itemId = itemId;
      if (meal === "lunch" && coachEggs !== null) {
        foodState.days[key].meals.lunch.eggs = coachEggs;
      }

      saveFoodState();
      updateFoodScore();
      renderFoodToday();
    });
  });
}

function renderMealCard(
  mealKey,
  label,
  day,
  isLunch = false,
  coachItemId = null,
  coachEggs = null
) {
  const meal = day.meals[mealKey];
  const selectedId = meal.itemId || "";
  const groups = MEAL_OPTIONS[mealKey] || [];

  let optionsHtml = '<option value="">-- Select what you ate --</option>';

  groups.forEach((group) => {
    optionsHtml += `<optgroup label="${group.label}">`;
    group.items.forEach((itemId) => {
      const item = findFoodItem(itemId);
      if (!item) return;
      optionsHtml += `<option value="${itemId}" ${
        itemId === selectedId ? "selected" : ""
      }>${item.name}</option>`;
    });
    optionsHtml += "</optgroup>";
  });

  // coach info
  let coachHtml = "";
  if (coachItemId) {
    const item = findFoodItem(coachItemId);
    if (item) {
      const kcal = item.calories || 0;
      const p = item.protein || 0;
      coachHtml = `
        <div class="food-meal-note">
          Coach's pick: <strong>${item.name}</strong>
          (~${Math.round(kcal)} kcal, ${Math.round(p)} g protein${
        isLunch && coachEggs ? ` + ${coachEggs} egg(s)` : ""
      })
        </div>
        <button type="button"
                class="coach-btn"
                data-meal="${mealKey}"
                data-coach-id="${coachItemId}"
                data-coach-eggs="${coachEggs !== null ? coachEggs : ""}">
          Use coach's pick
        </button>
      `;
    }
  }

  let extraHtml = "";
  if (isLunch) {
    const eggs = meal.eggs || 0;
    extraHtml += `
      <div class="food-meal-note">
        Eggs allowed at lunch: up to ${FOOD_RULES.eggMaxPerDay} per day,
        only ${FOOD_RULES.eggDaysPerWeek} days/week.
      </div>
      <div style="margin-top:4px;">
        <label style="font-size:0.75rem;">Eggs today (0–${FOOD_RULES.eggMaxPerDay}):</label>
        <input id="food-eggs-lunch" type="number" min="0" max="${FOOD_RULES.eggMaxPerDay}" step="1" value="${eggs}"/>
      </div>
    `;
  }

  const quotesPerMeal = {
    breakfast: [
      "Heavy breakfast, heavy lifts, heavy focus.",
      "First meal decides your momentum.",
      "Clean start, strong finish."
    ],
    lunch: [
      "Midday fuel = afternoon marks.",
      "Paneer + dal > random fried junk.",
      "Eat like someone who trains and studies."
    ],
    tea: [
      "Snacks can be power-ups or traps.",
      "Chana beats chips every single time.",
      "Small smart snack > big dumb snack."
    ],
    dinner: [
      "Light but strong – sleep like a lion.",
      "Don’t go to bed with fried food guilt.",
      "Recovery starts with your plate."
    ]
  };
  const qArr = quotesPerMeal[mealKey] || [];
  const quote = qArr.length
    ? qArr[Math.floor(Math.random() * qArr.length)]
    : "";

  return `
    <div class="food-meal-card">
      <h3>${label}</h3>
      <select id="food-select-${mealKey}">
        ${optionsHtml}
      </select>
      ${extraHtml}
      ${coachHtml}
      <div class="food-meal-quote">${quote ? "“" + quote + "”" : ""}</div>
    </div>
  `;
}

function findFoodItem(itemId) {
  return FOOD_ITEMS[itemId] || null;
}

function computeDailyNutrition() {
  const key = todayKey();
  ensureFoodDayState(key);
  const day = foodState.days[key];

  let calories = 0;
  let protein = 0;
  let carbs = 0;
  let fats = 0;

  ["breakfast", "lunch", "tea", "dinner"].forEach((mealKey) => {
    const meal = day.meals[mealKey];
    if (!meal || !meal.itemId) return;
    const item = findFoodItem(meal.itemId);
    if (!item) return;

    calories += item.calories || 0;
    protein += item.protein || 0;
    carbs += item.carbs || 0;
    fats += item.fats || 0;

    if (mealKey === "lunch") {
      const eggs = meal.eggs || 0;
      calories += eggs * FOOD_RULES.eggCalories;
      protein += eggs * FOOD_RULES.eggProtein;
      carbs += eggs * FOOD_RULES.eggCarbs;
      fats += eggs * FOOD_RULES.eggFats;
    }
  });

  return { calories, protein, carbs, fats };
}

function updateFoodWaterFromTraining() {
  const key = todayKey();
  ensureTrainingDayState(key);
  const liters = trainingState.days[key].waterLiters || 0;
  const waterTag = document.getElementById("waterTag");
  if (waterTag) waterTag.textContent = `Water: ${liters.toFixed(1)} / 4 L`;
}

// ===================== FOOD SCORE =====================
function updateFoodScore() {
  const key = todayKey();
  ensureFoodDayState(key);
  ensureTrainingDayState(key);
  const day = foodState.days[key];
  const trainDay = trainingState.days[key];

  let goodMeals = 0;
  let junkMeals = 0;
  let proteinMeals = 0;

  ["breakfast", "lunch", "tea", "dinner"].forEach((mealKey) => {
    const meal = day.meals[mealKey];
    if (!meal || !meal.itemId) return;
    const item = findFoodItem(meal.itemId);
    if (!item) return;
    const tags = item.tags || [];
    if (tags.includes("junk") || tags.includes("fried")) {
      junkMeals++;
    } else if (tags.includes("clean") || tags.includes("paratha")) {
      goodMeals++;
    }
    if (
      tags.includes("protein") ||
      tags.includes("paneer") ||
      tags.includes("mushroom")
    ) {
      proteinMeals++;
    }
  });

  const nutrition = computeDailyNutrition();

  let score = 0;
  score += goodMeals * 20;
  if (junkMeals === 0 && goodMeals > 0) score += 10;
  else if (junkMeals >= 2) score -= 10;

  if (nutrition.protein >= 130) score += 10;
  else if (nutrition.protein >= 100) score += 5;

  const water = trainDay.waterLiters || 0;
  if (water >= 3.5) score += 10;
  else if (water >= 2) score += 5;

  if (nutrition.calories < 2500) score -= 10;
  if (nutrition.calories > 4500 && junkMeals > 0) score -= 10;

  if (score < 0) score = 0;
  if (score > 100) score = 100;

  const scoreEl = document.getElementById("foodScore");
  const bar = document.getElementById("foodProgress");
  if (scoreEl) scoreEl.textContent = score;
  if (bar) bar.style.width = score + "%";
}

// ===================== DAILY SCORE =====================
function updateDailyScore() {
  const sleepPct = getWidthPercent("sleepProgress");
  const studyPct = getWidthPercent("studyProgress");
  const trainPct = getWidthPercent("trainingProgress");
  const foodPct = getWidthPercent("foodProgress");

  const blocks = [sleepPct, studyPct, trainPct, foodPct];
  const score = blocks.reduce((sum, v) => sum + v, 0) / (blocks.length || 1);

  const el = document.getElementById("dailyScore");
  if (el) el.textContent = Math.round(score);
}

function getWidthPercent(id) {
  const el = document.getElementById(id);
  if (!el || !el.parentElement) return 0;
  const style = window.getComputedStyle(el);
  const pStyle = window.getComputedStyle(el.parentElement);
  const w = parseFloat(style.width);
  const pw = parseFloat(pStyle.width) || 1;
  return Math.round((w / pw) * 100);
}
