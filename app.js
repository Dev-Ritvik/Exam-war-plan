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
// ===================== PLANNER STATE =====================
const PLANNER_STATE_KEY = "warroom_planner_v1";

function loadPlannerState() {
  try {
    const raw = localStorage.getItem(PLANNER_STATE_KEY);
    if (!raw) return { days: {} };
    return JSON.parse(raw);
  } catch (e) {
    console.warn("Failed to load planner state", e);
    return { days: {} };
  }
}

let plannerState = loadPlannerState();

function savePlannerState() {
  localStorage.setItem(PLANNER_STATE_KEY, JSON.stringify(plannerState));
}

function ensurePlannerDayState(key) {
  if (!plannerState.days[key]) {
    plannerState.days[key] = {
      mit1: { text: "", done: false },
      mit2: { text: "", done: false },
      mit3: { text: "", done: false },
      deepWorkHours: 0,
      adminHours: 0,
      wastedHours: 0
    };
  }
}
// ===================== PROJECTS STATE =====================
const PROJECTS_STATE_KEY = "warroom_projects_v1";

function loadProjectsState() {
  try {
    const raw = localStorage.getItem(PROJECTS_STATE_KEY);
    if (!raw) return { projects: {} };
    return JSON.parse(raw);
  } catch (e) {
    console.warn("Failed to load projects state", e);
    return { projects: {} };
  }
}

let projectsState = loadProjectsState();

function saveProjectsState() {
  localStorage.setItem(PROJECTS_STATE_KEY, JSON.stringify(projectsState));
}
// ===================== SKILLS STATE =====================
const SKILLS_STATE_KEY = "warroom_skills_v1";

function loadSkillsState() {
  try {
    const raw = localStorage.getItem(SKILLS_STATE_KEY);
    if (!raw) return { skills: {} };
    return JSON.parse(raw);
  } catch (e) {
    console.warn("Failed to load skills state", e);
    return { skills: {} };
  }
}

let skillsState = loadSkillsState();

function saveSkillsState() {
  localStorage.setItem(SKILLS_STATE_KEY, JSON.stringify(skillsState));
}
// ===================== MONEY STATE =====================
const MONEY_STATE_KEY = "warroom_money_v1";

function loadMoneyState() {
  try {
    const raw = localStorage.getItem(MONEY_STATE_KEY);
    if (!raw) return { entries: [] };
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.entries)) parsed.entries = [];
    return parsed;
  } catch (e) {
    console.warn("Failed to load money state", e);
    return { entries: [] };
  }
}

let moneyState = loadMoneyState();

function saveMoneyState() {
  localStorage.setItem(MONEY_STATE_KEY, JSON.stringify(moneyState));
}
// ===================== NETWORK STATE =====================
const NETWORK_STATE_KEY = "warroom_network_v1";

function loadNetworkState() {
  try {
    const raw = localStorage.getItem(NETWORK_STATE_KEY);
    if (!raw) return { contacts: {}, interactions: [], opportunities: [] };
    const parsed = JSON.parse(raw);
    if (!parsed.contacts)      parsed.contacts      = {};
    if (!Array.isArray(parsed.interactions))  parsed.interactions  = [];
    if (!Array.isArray(parsed.opportunities)) parsed.opportunities = [];
    return parsed;
  } catch (e) {
    console.warn("Failed to load network state", e);
    return { contacts: {}, interactions: [], opportunities: [] };
  }
}

let networkState = loadNetworkState();

function saveNetworkState() {
  localStorage.setItem(NETWORK_STATE_KEY, JSON.stringify(networkState));
}
// ===================== ARM WRESTLING STATE =====================
const ARM_STATE_KEY = "warroom_arm_v1";

function loadArmState() {
  try {
    const raw = localStorage.getItem(ARM_STATE_KEY);
    if (!raw) return buildDefaultArmState();
    const parsed = JSON.parse(raw);
    // Ensure all nested keys exist for forward compatibility
    if (!parsed.self)                        parsed.self = buildDefaultArmState().self;
    if (!parsed.self.metrics)                parsed.self.metrics = buildDefaultArmState().self.metrics;
    if (!parsed.self.recovery)               parsed.self.recovery = buildDefaultArmState().self.recovery;
    if (!Array.isArray(parsed.self.matches)) parsed.self.matches = [];
    if (!parsed.association)                 parsed.association = buildDefaultArmState().association;
    return parsed;
  } catch (e) {
    console.warn("Failed to load arm state", e);
    return buildDefaultArmState();
  }
}

function buildDefaultArmState() {
  return {
    self: {
      metrics: {
        pronationMax:     0,
        cuppingMax:       0,
        riserMax:         0,
        hookHoldSeconds:  0,
        bodyWeight:       0
      },
      recovery: {
        elbowPain:    1,
        wristFatigue: 1,
        gripFatigue:  1
      },
      matches: []
    },
    association: {
      members:             0,
      tournamentsHosted:   0,
      activeRegistrations: 0,
      sponsors:            0,
      funds:               0,
      notes:               ""
    }
  };
}

let armState = loadArmState();

function saveArmState() {
  localStorage.setItem(ARM_STATE_KEY, JSON.stringify(armState));
}

// Tracks which subsection is currently active inside the Arm view
let armActiveSection = "self";
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
    myday:    document.getElementById("view-myday"),
    study:    document.getElementById("view-study"),
    training: document.getElementById("view-training"),
    food:     document.getElementById("view-food"),
    sleep:    document.getElementById("view-sleep"),
    planner:  document.getElementById("view-planner"),
    projects: document.getElementById("view-projects"),
    skills:   document.getElementById("view-skills"),
    money:    document.getElementById("view-money"),
    network:  document.getElementById("view-network"),
    arm:      document.getElementById("view-arm")
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
  initPlannerBlock();
  initProjectsBlock();
  initSkillsBlock();
  initMoneyBlock();
  initNetworkBlock();
  initArmBlock();
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
// ===================== CAPTAIN INDEX =====================

function computeCaptainIndex() {
  const weights = {
    plannerProgress:  0.20,
    projectsProgress: 0.15,
    skillsProgress:   0.15,
    moneyProgress:    0.10,
    networkProgress:  0.10,
    armProgress:      0.15,
    studyProgress:    0.10,
    trainingProgress: 0.03,
    sleepProgress:    0.02
  };

  let index = 0;
  Object.entries(weights).forEach(([id, weight]) => {
    index += getWidthPercent(id) * weight;
  });

  if (index < 0)   index = 0;
  if (index > 100) index = 100;

  return Math.round(index);
}

function updateCaptainIndexUI() {
  const index = computeCaptainIndex();

  const valueEl = document.getElementById("captainIndexValue");
  const bar     = document.getElementById("captainIndexProgress");
  const rankEl  = document.getElementById("captainIndexRank");

  if (valueEl) valueEl.textContent = index;
  if (bar)     bar.style.width     = index + "%";

  if (rankEl) {
    let rank, color;
    if      (index >= 90) { rank = "🏆 ELITE OPERATOR";    color = "#22c55e"; }
    else if (index >= 75) { rank = "⚡ HIGH PERFORMER";     color = "#4ade80"; }
    else if (index >= 60) { rank = "🎯 ON TRACK";           color = "#60a5fa"; }
    else if (index >= 40) { rank = "⚠ NEEDS FOCUS";         color = "#f97316"; }
    else                  { rank = "🔴 CRITICAL — ACT NOW"; color = "#ef4444"; }
    rankEl.textContent  = rank;
    rankEl.style.color  = color;
  }
}
// ===================== DAILY SCORE =====================
function updateDailyScore() {
  const sleepPct     = getWidthPercent("sleepProgress");
  const studyPct     = getWidthPercent("studyProgress");
  const trainPct     = getWidthPercent("trainingProgress");
  const foodPct      = getWidthPercent("foodProgress");
  const plannerPct   = getWidthPercent("plannerProgress");
  const projectsPct  = getWidthPercent("projectsProgress");
  const skillsPct    = getWidthPercent("skillsProgress");
  const moneyPct     = getWidthPercent("moneyProgress");
  const networkPct   = getWidthPercent("networkProgress");
  const armPct       = getWidthPercent("armProgress");

  const blocks = [sleepPct, studyPct, trainPct, foodPct, plannerPct, projectsPct, skillsPct, moneyPct, networkPct, armPct];
  const score = blocks.reduce((sum, v) => sum + v, 0) / (blocks.length || 1);

  const el = document.getElementById("dailyScore");
  if (el) el.textContent = Math.round(score);

  // Captain Index reads all bar widths — must run after all bars are set
  updateCaptainIndexUI();
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
// ===================== PLANNER =====================

function computePlannerScore() {
  const key = todayKey();
  ensurePlannerDayState(key);
  const day = plannerState.days[key];

  // MIT score: each done MIT = 33.33 points, all 3 = 100
  let mitDone = 0;
  if (day.mit1.done) mitDone++;
  if (day.mit2.done) mitDone++;
  if (day.mit3.done) mitDone++;
  const mitScore = (mitDone / 3) * 100;

  // Deep work score
  const dw = Number(day.deepWorkHours || 0);
  let deepWorkScore = 0;
  if (dw >= 3) deepWorkScore = 100;
  else if (dw >= 2) deepWorkScore = 80;
  else if (dw >= 1) deepWorkScore = 60;
  else deepWorkScore = 0;

  // Weighted combined score
  let score = (mitScore * 0.6) + (deepWorkScore * 0.4);

  // Wasted hours cap
  const wasted = Number(day.wastedHours || 0);
  if (wasted > 4) score = Math.min(score, 40);

  // Clamp 0–100
  if (score < 0) score = 0;
  if (score > 100) score = 100;

  return Math.round(score);
}

function initPlannerBlock() {
  renderPlannerTab();
  updatePlannerSummaryCard();
}

function renderPlannerTab() {
  const panel = document.getElementById("plannerPanel");
  if (!panel) return;

  const key = todayKey();
  ensurePlannerDayState(key);
  const day = plannerState.days[key];
  const score = computePlannerScore();

  let mitDone = 0;
  if (day.mit1.done) mitDone++;
  if (day.mit2.done) mitDone++;
  if (day.mit3.done) mitDone++;

  panel.innerHTML = `
    <div class="planner-header-line">
      Today: <strong>${formatDateShort(new Date())}</strong>
      (${getWeekdayName(new Date())})
    </div>

    <div class="progress-bar" style="margin-bottom:12px;">
      <div class="progress-fill" id="plannerProgressMain" style="width:${score}%;"></div>
    </div>

    <div class="planner-grid">

      <div class="planner-mits">
        <h4 class="planner-section-title">Most Important Tasks (MITs)</h4>
        <p class="planner-hint">
          Pick 3 tasks. Finish these and the day is a win.
        </p>

        <div class="planner-mit-row">
          <input type="checkbox" id="plannerMit1Check" ${day.mit1.done ? "checked" : ""} />
          <input
            type="text"
            id="plannerMit1Text"
            class="planner-mit-input ${day.mit1.done ? "planner-mit-done" : ""}"
            placeholder="MIT #1 — your highest-leverage task"
            value="${(day.mit1.text || "").replace(/"/g, "&quot;")}"
          />
        </div>

        <div class="planner-mit-row">
          <input type="checkbox" id="plannerMit2Check" ${day.mit2.done ? "checked" : ""} />
          <input
            type="text"
            id="plannerMit2Text"
            class="planner-mit-input ${day.mit2.done ? "planner-mit-done" : ""}"
            placeholder="MIT #2"
            value="${(day.mit2.text || "").replace(/"/g, "&quot;")}"
          />
        </div>

        <div class="planner-mit-row">
          <input type="checkbox" id="plannerMit3Check" ${day.mit3.done ? "checked" : ""} />
          <input
            type="text"
            id="plannerMit3Text"
            class="planner-mit-input ${day.mit3.done ? "planner-mit-done" : ""}"
            placeholder="MIT #3"
            value="${(day.mit3.text || "").replace(/"/g, "&quot;")}"
          />
        </div>

        <p class="planner-mit-count">
          Completed: <strong>${mitDone} / 3</strong>
        </p>
      </div>

      <div class="planner-hours">
        <h4 class="planner-section-title">Hour Breakdown</h4>

        <div class="planner-hour-row">
          <label for="plannerDeepWork">Deep Work (h)</label>
          <input
            id="plannerDeepWork"
            type="number"
            min="0"
            max="16"
            step="0.5"
            value="${Number(day.deepWorkHours || 0).toFixed(1)}"
          />
          <span class="planner-hour-hint">3 h+ = full bonus</span>
        </div>

        <div class="planner-hour-row">
          <label for="plannerAdmin">Admin / shallow (h)</label>
          <input
            id="plannerAdmin"
            type="number"
            min="0"
            max="16"
            step="0.5"
            value="${Number(day.adminHours || 0).toFixed(1)}"
          />
          <span class="planner-hour-hint">Tracked, not scored</span>
        </div>

        <div class="planner-hour-row">
          <label for="plannerWasted">Wasted hours (h)</label>
          <input
            id="plannerWasted"
            type="number"
            min="0"
            max="16"
            step="0.5"
            value="${Number(day.wastedHours || 0).toFixed(1)}"
          />
          <span class="planner-hour-hint ${Number(day.wastedHours || 0) > 4 ? "planner-warn" : ""}">
            ${Number(day.wastedHours || 0) > 4 ? "⚠ Score capped at 40%" : ">4 h caps score at 40%"}
          </span>
        </div>

        <div class="planner-score-display">
          Execution Score: <strong>${score}</strong> / 100
        </div>
      </div>

    </div>
  `;

  // ---- MIT checkbox listeners ----
  ["1", "2", "3"].forEach((n) => {
    const checkbox = document.getElementById(`plannerMit${n}Check`);
    const textInput = document.getElementById(`plannerMit${n}Text`);

    if (checkbox) {
      checkbox.addEventListener("change", () => {
        const k = todayKey();
        ensurePlannerDayState(k);
        plannerState.days[k][`mit${n}`].done = checkbox.checked;
        savePlannerState();
        renderPlannerTab();
        updatePlannerSummaryCard();
      });
    }

    if (textInput) {
      textInput.addEventListener("blur", () => {
        const k = todayKey();
        ensurePlannerDayState(k);
        plannerState.days[k][`mit${n}`].text = textInput.value || "";
        savePlannerState();
      });
    }
  });

  // ---- Hour input listeners ----
  const deepWorkInput = document.getElementById("plannerDeepWork");
  if (deepWorkInput) {
    deepWorkInput.addEventListener("change", () => {
      let val = Number(deepWorkInput.value || 0);
      if (val < 0) val = 0;
      if (val > 16) val = 16;
      deepWorkInput.value = val.toFixed(1);
      const k = todayKey();
      ensurePlannerDayState(k);
      plannerState.days[k].deepWorkHours = val;
      savePlannerState();
      renderPlannerTab();
      updatePlannerSummaryCard();
    });
  }

  const adminInput = document.getElementById("plannerAdmin");
  if (adminInput) {
    adminInput.addEventListener("change", () => {
      let val = Number(adminInput.value || 0);
      if (val < 0) val = 0;
      if (val > 16) val = 16;
      adminInput.value = val.toFixed(1);
      const k = todayKey();
      ensurePlannerDayState(k);
      plannerState.days[k].adminHours = val;
      savePlannerState();
    });
  }

  const wastedInput = document.getElementById("plannerWasted");
  if (wastedInput) {
    wastedInput.addEventListener("change", () => {
      let val = Number(wastedInput.value || 0);
      if (val < 0) val = 0;
      if (val > 16) val = 16;
      wastedInput.value = val.toFixed(1);
      const k = todayKey();
      ensurePlannerDayState(k);
      plannerState.days[k].wastedHours = val;
      savePlannerState();
      renderPlannerTab();
      updatePlannerSummaryCard();
    });
  }
}

function updatePlannerSummaryCard() {
  const key = todayKey();
  ensurePlannerDayState(key);
  const day = plannerState.days[key];
  const score = computePlannerScore();

  let mitDone = 0;
  if (day.mit1.done) mitDone++;
  if (day.mit2.done) mitDone++;
  if (day.mit3.done) mitDone++;

  const mitsDoneEl     = document.getElementById("plannerMITsDone");
  const bar            = document.getElementById("plannerProgress");
  const deepWorkFootEl = document.getElementById("plannerDeepWorkFoot");
  const wastedFootEl   = document.getElementById("plannerWastedFoot");

  if (mitsDoneEl)     mitsDoneEl.textContent     = mitDone;
  if (bar)            bar.style.width             = score + "%";
  if (deepWorkFootEl) deepWorkFootEl.textContent  = Number(day.deepWorkHours || 0).toFixed(1);
  if (wastedFootEl)   wastedFootEl.textContent    = Number(day.wastedHours   || 0).toFixed(1);

  // Must always be last — reads the freshly-set bar width
  updateDailyScore();
}
// ===================== PROJECTS =====================

function computeProjectsScore() {
  const today = todayKey();
  const thisMonth = today.slice(0, 7); // "YYYY-MM"
  const now = new Date();

  const list = Object.values(projectsState.projects);

  let score = 0;

  // +40: any Active project has lastWorkedDate === today
  const workedToday = list.some(
    (p) => p.status === "Active" && p.lastWorkedDate === today
  );
  if (workedToday) score += 40;

  // +30: any project updated within the last 7 days
  const sevenDaysAgo = new Date(now);
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const updatedThisWeek = list.some((p) => {
    if (!p.lastWorkedDate) return false;
    return new Date(p.lastWorkedDate) >= sevenDaysAgo;
  });
  if (updatedThisWeek) score += 30;

  // +30: any project with status Completed and lastWorkedDate in current month
  const completedThisMonth = list.some(
    (p) =>
      p.status === "Completed" &&
      p.lastWorkedDate &&
      p.lastWorkedDate.startsWith(thisMonth)
  );
  if (completedThisMonth) score += 30;

  if (score < 0) score = 0;
  if (score > 100) score = 100;

  return score;
}

function initProjectsBlock() {
  renderProjectsTab();
  updateProjectsSummaryCard();
}

function renderProjectsTab() {
  const panel = document.getElementById("projectsPanel");
  if (!panel) return;

  const score = computeProjectsScore();
  const list = Object.values(projectsState.projects);
  const today = todayKey();
  const thisMonth = today.slice(0, 7);

  const STATUS_GROUPS = ["Active", "Planned", "On Hold", "Completed"];
  const STATUS_COLORS = {
    Active:    "#22c55e",
    Planned:   "#60a5fa",
    "On Hold": "#f97316",
    Completed: "#a78bfa"
  };

  // Build grouped sections HTML
  function buildGroupHtml(status) {
    const group = list.filter((p) => p.status === status);
    if (!group.length) return "";

    const color = STATUS_COLORS[status] || "#9ca3af";
    const rows = group
      .map((p) => {
        const isWorkedToday = p.lastWorkedDate === today;
        return `
        <div class="proj-card" data-project-id="${p.id}">
          <div class="proj-card-top">
            <div class="proj-name-row">
              <span class="proj-status-dot" style="background:${color};"></span>
              <input
                type="text"
                class="proj-name-input"
                value="${(p.name || "").replace(/"/g, "&quot;")}"
                placeholder="Project name"
              />
            </div>
            <button class="proj-delete-btn" title="Delete project">✕</button>
          </div>

          <div class="proj-meta-row">
            <div class="proj-field-group">
              <label>Category</label>
              <input
                type="text"
                class="proj-category-input"
                value="${(p.category || "").replace(/"/g, "&quot;")}"
                placeholder="e.g. Web App, Research"
              />
            </div>
            <div class="proj-field-group">
              <label>Linked Skill</label>
              <input
                type="text"
                class="proj-skill-input"
                value="${(p.linkedSkill || "").replace(/"/g, "&quot;")}"
                placeholder="e.g. React, Writing"
              />
            </div>
            <div class="proj-field-group">
              <label>Revenue (₹)</label>
              <input
                type="number"
                min="0"
                step="1"
                class="proj-revenue-input"
                value="${Number(p.revenue || 0)}"
              />
            </div>
            <div class="proj-field-group">
              <label>Status</label>
              <select class="proj-status-select">
                ${STATUS_GROUPS.map(
                  (s) =>
                    `<option value="${s}" ${s === p.status ? "selected" : ""}>${s}</option>`
                ).join("")}
              </select>
            </div>
          </div>

          <div class="proj-notes-row">
            <label>Notes</label>
            <textarea
              class="proj-notes-input"
              rows="2"
              placeholder="Progress, blockers, next step…"
            >${p.notes || ""}</textarea>
          </div>

          <div class="proj-footer-row">
            <span class="proj-dates">
              Started: ${p.startDate || "—"} &nbsp;•&nbsp;
              Last worked: ${p.lastWorkedDate || "—"}
            </span>
            <button
              class="proj-worked-btn ${isWorkedToday ? "proj-worked-today" : ""}"
              title="Mark as worked today"
            >
              ${isWorkedToday ? "✅ Worked Today" : "Mark Worked Today"}
            </button>
          </div>
        </div>
      `;
      })
      .join("");

    return `
      <div class="proj-group">
        <div class="proj-group-title" style="color:${color};">
          ${status}
          <span class="proj-group-count">${group.length}</span>
        </div>
        ${rows}
      </div>
    `;
  }

  const activeCount  = list.filter((p) => p.status === "Active").length;
  const doneMonth    = list.filter(
    (p) => p.status === "Completed" && p.lastWorkedDate && p.lastWorkedDate.startsWith(thisMonth)
  ).length;

  panel.innerHTML = `
    <div class="proj-score-bar-wrap">
      <div class="progress-bar">
        <div class="progress-fill" id="projectsProgressMain" style="width:${score}%;"></div>
      </div>
      <div class="proj-score-label">
        Velocity score: <strong>${score}</strong> / 100 &nbsp;•&nbsp;
        Active: <strong>${activeCount}</strong> &nbsp;•&nbsp;
        Completed this month: <strong>${doneMonth}</strong>
      </div>
    </div>

    <!-- ADD PROJECT FORM -->
    <div class="proj-add-form">
      <div class="proj-add-title">+ Add New Project</div>
      <div class="proj-add-row">
        <input
          type="text"
          id="projFormName"
          placeholder="Project name *"
          class="proj-form-input proj-form-name"
        />
        <input
          type="text"
          id="projFormCategory"
          placeholder="Category"
          class="proj-form-input"
        />
        <input
          type="text"
          id="projFormSkill"
          placeholder="Linked skill"
          class="proj-form-input"
        />
        <select id="projFormStatus" class="proj-form-select">
          <option value="Planned">Planned</option>
          <option value="Active">Active</option>
          <option value="On Hold">On Hold</option>
          <option value="Completed">Completed</option>
        </select>
        <input
          type="number"
          id="projFormRevenue"
          placeholder="Revenue ₹"
          min="0"
          step="1"
          class="proj-form-input proj-form-revenue"
        />
      </div>
      <div class="proj-add-row">
        <textarea
          id="projFormNotes"
          rows="2"
          placeholder="Notes (optional)"
          class="proj-form-notes"
        ></textarea>
        <button id="projAddBtn" class="proj-add-btn">Add Project</button>
      </div>
    </div>

    <!-- GROUPED PROJECT LIST -->
    <div id="projGroupList">
      ${
        list.length === 0
          ? '<p class="proj-empty">No projects yet. Add your first project above.</p>'
          : STATUS_GROUPS.map(buildGroupHtml).join("")
      }
    </div>
  `;

  // ---- Add Project button ----
  const addBtn = document.getElementById("projAddBtn");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      const nameInput = document.getElementById("projFormName");
      const name = (nameInput && nameInput.value.trim()) || "";
      if (!name) {
        nameInput && nameInput.focus();
        return;
      }

      const category   = document.getElementById("projFormCategory")?.value.trim()  || "";
      const skill      = document.getElementById("projFormSkill")?.value.trim()      || "";
      const status     = document.getElementById("projFormStatus")?.value            || "Planned";
      const revenue    = Number(document.getElementById("projFormRevenue")?.value    || 0);
      const notes      = document.getElementById("projFormNotes")?.value.trim()      || "";
      const id         = "proj_" + Date.now();
      const startDate  = todayKey();

      projectsState.projects[id] = {
        id,
        name,
        category,
        status,
        linkedSkill:     skill,
        startDate,
        lastWorkedDate:  startDate,
        revenue,
        notes
      };

      saveProjectsState();
      renderProjectsTab();
      updateProjectsSummaryCard();
    });
  }

  // ---- Per-card listeners ----
  panel.querySelectorAll(".proj-card").forEach((card) => {
    const projectId = card.dataset.projectId;
    if (!projectId || !projectsState.projects[projectId]) return;

    const proj           = projectsState.projects[projectId];
    const nameInput      = card.querySelector(".proj-name-input");
    const categoryInput  = card.querySelector(".proj-category-input");
    const skillInput     = card.querySelector(".proj-skill-input");
    const revenueInput   = card.querySelector(".proj-revenue-input");
    const statusSelect   = card.querySelector(".proj-status-select");
    const notesInput     = card.querySelector(".proj-notes-input");
    const workedBtn      = card.querySelector(".proj-worked-btn");
    const deleteBtn      = card.querySelector(".proj-delete-btn");

    function touchProject() {
      projectsState.projects[projectId].lastWorkedDate = todayKey();
    }

    // Name
    if (nameInput) {
      nameInput.addEventListener("blur", () => {
        const val = nameInput.value.trim();
        if (!val) return;
        proj.name = val;
        touchProject();
        saveProjectsState();
        updateProjectsSummaryCard();
      });
    }

    // Category
    if (categoryInput) {
      categoryInput.addEventListener("blur", () => {
        proj.category = categoryInput.value.trim();
        touchProject();
        saveProjectsState();
        updateProjectsSummaryCard();
      });
    }

    // Linked skill
    if (skillInput) {
      skillInput.addEventListener("blur", () => {
        proj.linkedSkill = skillInput.value.trim();
        touchProject();
        saveProjectsState();
        updateProjectsSummaryCard();
      });
    }

    // Revenue
    if (revenueInput) {
      revenueInput.addEventListener("change", () => {
        proj.revenue = Math.max(0, Number(revenueInput.value || 0));
        touchProject();
        saveProjectsState();
        updateProjectsSummaryCard();
      });
    }

    // Status — re-renders so the card moves to the correct group
    if (statusSelect) {
      statusSelect.addEventListener("change", () => {
        proj.status = statusSelect.value;
        touchProject();
        saveProjectsState();
        renderProjectsTab();
        updateProjectsSummaryCard();
      });
    }

    // Notes
    if (notesInput) {
      notesInput.addEventListener("blur", () => {
        proj.notes = notesInput.value;
        touchProject();
        saveProjectsState();
        updateProjectsSummaryCard();
      });
    }

    // Mark worked today
    if (workedBtn) {
      workedBtn.addEventListener("click", () => {
        proj.lastWorkedDate = todayKey();
        saveProjectsState();
        renderProjectsTab();
        updateProjectsSummaryCard();
      });
    }

    // Delete
    if (deleteBtn) {
      deleteBtn.addEventListener("click", () => {
        delete projectsState.projects[projectId];
        saveProjectsState();
        renderProjectsTab();
        updateProjectsSummaryCard();
      });
    }
  });
}

function updateProjectsSummaryCard() {
  const today = todayKey();
  const thisMonth = today.slice(0, 7);
  const list = Object.values(projectsState.projects);
  const score = computeProjectsScore();

  const activeCount = list.filter((p) => p.status === "Active").length;
  const doneMonth   = list.filter(
    (p) =>
      p.status === "Completed" &&
      p.lastWorkedDate &&
      p.lastWorkedDate.startsWith(thisMonth)
  ).length;

  // Most recent lastWorkedDate across all projects
  const lastDates = list
    .map((p) => p.lastWorkedDate)
    .filter(Boolean)
    .sort()
    .reverse();
  const lastWorked = lastDates.length ? lastDates[0] : "—";

  const activeCountEl = document.getElementById("projectsActiveCount");
  const doneMonthEl   = document.getElementById("projectsDoneMonth");
  const bar           = document.getElementById("projectsProgress");
  const lastWorkedEl  = document.getElementById("projectsLastWorked");

  if (activeCountEl) activeCountEl.textContent = activeCount;
  if (doneMonthEl)   doneMonthEl.textContent   = doneMonth;
  if (bar)           bar.style.width           = score + "%";
  if (lastWorkedEl)  lastWorkedEl.textContent  = lastWorked;

  // Must be last
  updateDailyScore();
}
// ===================== SKILLS =====================

function computeSkillLevel(xp) {
  return Math.floor((xp || 0) / 100) + 1;
}

function computeXpToNextLevel(xp) {
  const currentLevelXp = (computeSkillLevel(xp) - 1) * 100;
  const nextLevelXp    = computeSkillLevel(xp) * 100;
  return {
    progress:  (xp || 0) - currentLevelXp,
    needed:    nextLevelXp - currentLevelXp,
    pct:       Math.round(((xp || 0) - currentLevelXp) / (nextLevelXp - currentLevelXp) * 100)
  };
}

function isSkillNeglected(skill) {
  if (!skill.lastPracticedDate) return true;
  const last    = new Date(skill.lastPracticedDate);
  const now     = new Date();
  const diffMs  = now - last;
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  return diffDays >= 7;
}

function computeSkillsScore() {
  const today = todayKey();
  const list  = Object.values(skillsState.skills);

  const practicedToday = list.filter(
    (s) => s.lastPracticedDate === today
  ).length;

  let score = 0;
  if (practicedToday >= 3)      score = 100;
  else if (practicedToday >= 2) score = 80;
  else if (practicedToday >= 1) score = 50;
  else                          score = 0;

  if (score < 0)   score = 0;
  if (score > 100) score = 100;

  return score;
}

function initSkillsBlock() {
  renderSkillsTab();
  updateSkillsSummaryCard();
}

function renderSkillsTab() {
  const panel = document.getElementById("skillsPanel");
  if (!panel) return;

  const today  = todayKey();
  const list   = Object.values(skillsState.skills);
  const score  = computeSkillsScore();

  const practicedToday  = list.filter((s) => s.lastPracticedDate === today).length;
  const neglectedCount  = list.filter(isSkillNeglected).length;

  // Sort: practiced today first, then by level desc, then name
  const sorted = [...list].sort((a, b) => {
    const aTodaY = a.lastPracticedDate === today ? 1 : 0;
    const bToday = b.lastPracticedDate === today ? 1 : 0;
    if (bToday !== aTodaY) return bToday - aTodaY;
    return (b.level || 1) - (a.level || 1);
  });

  // Group categories for the summary line
  const categories = [...new Set(list.map((s) => s.category).filter(Boolean))];

  function buildSkillCardHtml(skill) {
    const neglected    = isSkillNeglected(skill);
    const practicedNow = skill.lastPracticedDate === today;
    const xp           = Number(skill.xp || 0);
    const level        = computeSkillLevel(xp);
    const lvlData      = computeXpToNextLevel(xp);
    const hours        = Number(skill.hoursInvested || 0);
    const streak       = Number(skill.streak || 0);

    const neglectedBadge = neglected
      ? `<span class="skill-badge skill-neglected">Neglected</span>`
      : "";
    const activeToday = practicedNow
      ? `<span class="skill-badge skill-active-today">✓ Practiced Today</span>`
      : "";

    return `
      <div class="skill-card ${neglected ? "skill-card-neglected" : ""} ${practicedNow ? "skill-card-active" : ""}"
           data-skill-id="${skill.id}">

        <div class="skill-card-top">
          <div class="skill-name-row">
            <input
              type="text"
              class="skill-name-input"
              value="${(skill.name || "").replace(/"/g, "&quot;")}"
              placeholder="Skill name"
            />
            <input
              type="text"
              class="skill-category-input"
              value="${(skill.category || "").replace(/"/g, "&quot;")}"
              placeholder="Category"
            />
          </div>
          <div class="skill-badges-row">
            ${neglectedBadge}
            ${activeToday}
          </div>
          <button class="skill-delete-btn" title="Delete skill">✕</button>
        </div>

        <div class="skill-level-row">
          <div class="skill-level-badge">Lvl ${level}</div>
          <div class="skill-xp-bar-wrap">
            <div class="progress-bar">
              <div class="progress-fill skill-xp-fill" style="width:${lvlData.pct}%;"></div>
            </div>
            <div class="skill-xp-label">
              ${lvlData.progress} / ${lvlData.needed} XP to Level ${level + 1}
              &nbsp;•&nbsp; Total XP: ${xp}
            </div>
          </div>
        </div>

        <div class="skill-stats-row">
          <div class="skill-stat">
            <span class="skill-stat-label">Hours</span>
            <span class="skill-stat-val">${hours.toFixed(1)}</span>
          </div>
          <div class="skill-stat">
            <span class="skill-stat-label">Streak</span>
            <span class="skill-stat-val">${streak} day(s)</span>
          </div>
          <div class="skill-stat">
            <span class="skill-stat-label">Last practiced</span>
            <span class="skill-stat-val">${skill.lastPracticedDate || "Never"}</span>
          </div>
          <div class="skill-stat">
            <span class="skill-stat-label">Level</span>
            <span class="skill-stat-val">${level}</span>
          </div>
        </div>

        <div class="skill-actions-row">
          <button class="skill-log-btn" data-skill-id="${skill.id}">
            + Log 1 Hour  (+10 XP)
          </button>
          <div class="skill-custom-hours">
            <input
              type="number"
              class="skill-hours-input"
              min="0.5"
              max="12"
              step="0.5"
              value="1"
              title="Custom hours to log"
            />
            <button class="skill-log-custom-btn" data-skill-id="${skill.id}">
              Log Custom
            </button>
          </div>
        </div>

      </div>
    `;
  }

  // Build top-level XP leaderboard line (top 3 skills by XP)
  const topSkills = [...list]
    .sort((a, b) => (b.xp || 0) - (a.xp || 0))
    .slice(0, 3);
  const leaderHtml = topSkills.length
    ? topSkills
        .map(
          (s, i) =>
            `<span class="skill-leader-item">${["🥇","🥈","🥉"][i]} ${s.name} <em>Lvl ${computeSkillLevel(s.xp)}</em></span>`
        )
        .join("")
    : "";

  panel.innerHTML = `
    <div class="skill-score-bar-wrap">
      <div class="progress-bar">
        <div class="progress-fill" id="skillsProgressMain" style="width:${score}%;"></div>
      </div>
      <div class="skill-score-label">
        Practice score: <strong>${score}</strong> / 100
        &nbsp;•&nbsp; Practiced today: <strong>${practicedToday}</strong>
        &nbsp;•&nbsp; Neglected: <strong>${neglectedCount}</strong>
        ${leaderHtml ? `&nbsp;•&nbsp; ${leaderHtml}` : ""}
      </div>
    </div>

    <!-- ADD SKILL FORM -->
    <div class="skill-add-form">
      <div class="skill-add-title">+ Add New Skill</div>
      <div class="skill-add-row">
        <input
          type="text"
          id="skillFormName"
          placeholder="Skill name *"
          class="skill-form-input skill-form-name"
        />
        <input
          type="text"
          id="skillFormCategory"
          placeholder="Category  (e.g. Coding, Combat, Writing)"
          class="skill-form-input"
        />
        <button id="skillAddBtn" class="skill-add-btn">Add Skill</button>
      </div>
    </div>

    <!-- SKILL CARDS -->
    <div id="skillCardList">
      ${
        sorted.length === 0
          ? '<p class="skill-empty">No skills yet. Add your first skill above.</p>'
          : sorted.map(buildSkillCardHtml).join("")
      }
    </div>
  `;

  // ---- Add Skill button ----
  const addBtn = document.getElementById("skillAddBtn");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      const nameInput = document.getElementById("skillFormName");
      const name      = (nameInput && nameInput.value.trim()) || "";
      if (!name) {
        if (nameInput) nameInput.focus();
        return;
      }

      const category = document.getElementById("skillFormCategory")?.value.trim() || "";
      const id       = "skill_" + Date.now();

      skillsState.skills[id] = {
        id,
        name,
        category,
        xp:                0,
        level:             1,
        hoursInvested:     0,
        lastPracticedDate: "",
        streak:            0
      };

      saveSkillsState();
      renderSkillsTab();
      updateSkillsSummaryCard();
    });
  }

  // ---- Per-card listeners ----
  panel.querySelectorAll(".skill-card").forEach((card) => {
    const skillId = card.dataset.skillId;
    if (!skillId || !skillsState.skills[skillId]) return;

    const skill             = skillsState.skills[skillId];
    const nameInput         = card.querySelector(".skill-name-input");
    const categoryInput     = card.querySelector(".skill-category-input");
    const logBtn            = card.querySelector(".skill-log-btn");
    const logCustomBtn      = card.querySelector(".skill-log-custom-btn");
    const customHoursInput  = card.querySelector(".skill-hours-input");
    const deleteBtn         = card.querySelector(".skill-delete-btn");

    // Shared log-hours logic
    function logHours(hours) {
      const h         = Math.max(0.5, Number(hours) || 1);
      const xpGained  = Math.round(h * 10);
      const today     = todayKey();

      skill.hoursInvested     = Number(skill.hoursInvested || 0) + h;
      skill.xp                = Number(skill.xp || 0) + xpGained;
      skill.level             = computeSkillLevel(skill.xp);

      // Streak logic
      if (skill.lastPracticedDate === today) {
        // Already logged today — streak unchanged, just add XP
      } else {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yKey = yesterday.toISOString().slice(0, 10);
        if (skill.lastPracticedDate === yKey) {
          skill.streak = Number(skill.streak || 0) + 1;
        } else {
          skill.streak = 1;
        }
      }

      skill.lastPracticedDate = today;

      saveSkillsState();
      renderSkillsTab();
      updateSkillsSummaryCard();
    }

    // Name edit
    if (nameInput) {
      nameInput.addEventListener("blur", () => {
        const val = nameInput.value.trim();
        if (!val) return;
        skill.name = val;
        saveSkillsState();
        updateSkillsSummaryCard();
      });
    }

    // Category edit
    if (categoryInput) {
      categoryInput.addEventListener("blur", () => {
        skill.category = categoryInput.value.trim();
        saveSkillsState();
        updateSkillsSummaryCard();
      });
    }

    // Log 1 hour
    if (logBtn) {
      logBtn.addEventListener("click", () => logHours(1));
    }

    // Log custom hours
    if (logCustomBtn) {
      logCustomBtn.addEventListener("click", () => {
        const h = Number(customHoursInput?.value || 1);
        logHours(h);
      });
    }

    // Delete
    if (deleteBtn) {
      deleteBtn.addEventListener("click", () => {
        delete skillsState.skills[skillId];
        saveSkillsState();
        renderSkillsTab();
        updateSkillsSummaryCard();
      });
    }
  });
}

function updateSkillsSummaryCard() {
  const today   = todayKey();
  const list    = Object.values(skillsState.skills);
  const score   = computeSkillsScore();

  const practicedToday  = list.filter((s) => s.lastPracticedDate === today).length;
  const neglectedCount  = list.filter(isSkillNeglected).length;
  const totalCount      = list.length;

  // Top skill by level
  const topSkill = [...list].sort((a, b) => (b.level || 1) - (a.level || 1))[0];
  const topLevelText = topSkill
    ? `${topSkill.name} (Lvl ${topSkill.level || 1})`
    : "—";

  const practicedEl    = document.getElementById("skillsPracticedToday");
  const totalEl        = document.getElementById("skillsTotalCount");
  const bar            = document.getElementById("skillsProgress");
  const neglectedEl    = document.getElementById("skillsNeglectedCount");
  const topLevelEl     = document.getElementById("skillsTopLevel");

  if (practicedEl)  practicedEl.textContent  = practicedToday;
  if (totalEl)      totalEl.textContent       = totalCount;
  if (bar)          bar.style.width           = score + "%";
  if (neglectedEl)  neglectedEl.textContent   = neglectedCount;
  if (topLevelEl)   topLevelEl.textContent    = topLevelText;

  // Must be last
  updateDailyScore();
}
// ===================== MONEY =====================

function computeMoneyMetrics() {
  const entries       = moneyState.entries;
  const thisMonth     = todayKey().slice(0, 7); // "YYYY-MM"

  let totalIncome     = 0;
  let totalExpenses   = 0;
  let monthIncome     = 0;
  let monthExpenses   = 0;

  entries.forEach((e) => {
    const amt = Number(e.amount || 0);
    if (e.type === "income") {
      totalIncome += amt;
      if ((e.date || "").startsWith(thisMonth)) monthIncome += amt;
    } else {
      totalExpenses += amt;
      if ((e.date || "").startsWith(thisMonth)) monthExpenses += amt;
    }
  });

  const balance = totalIncome - totalExpenses;

  // Burn rate: average monthly expenses across all months that have data
  const monthsWithExpenses = new Set(
    entries
      .filter((e) => e.type === "expense" && e.date)
      .map((e) => e.date.slice(0, 7))
  );
  const monthCount  = monthsWithExpenses.size || 1;
  const burnRate    = totalExpenses / monthCount;

  return {
    totalIncome,
    totalExpenses,
    balance,
    monthIncome,
    monthExpenses,
    burnRate,
    thisMonth
  };
}

function computeMoneyScore() {
  const m       = computeMoneyMetrics();
  const entries = moneyState.entries;

  let score = 0;

  // +50: positive monthly balance (month income > month expenses)
  if (m.monthIncome > m.monthExpenses && m.monthIncome > 0) score += 50;

  // +25: at least 1 income entry this month
  const hasMonthIncome = entries.some(
    (e) => e.type === "income" && (e.date || "").startsWith(m.thisMonth)
  );
  if (hasMonthIncome) score += 25;

  // +25: at least 3 expense entries this month (discipline tracking)
  const monthExpenseCount = entries.filter(
    (e) => e.type === "expense" && (e.date || "").startsWith(m.thisMonth)
  ).length;
  if (monthExpenseCount >= 3) score += 25;

  if (score < 0)   score = 0;
  if (score > 100) score = 100;

  return score;
}

function formatMoney(amount) {
  const abs = Math.abs(amount);
  if (abs >= 100000) return "₹" + (amount / 100000).toFixed(2) + "L";
  if (abs >= 1000)   return "₹" + (amount / 1000).toFixed(1) + "k";
  return "₹" + Math.round(amount);
}

function initMoneyBlock() {
  renderMoneyTab();
  updateMoneySummaryCard();
}

function renderMoneyTab() {
  const panel = document.getElementById("moneyPanel");
  if (!panel) return;

  const m       = computeMoneyMetrics();
  const score   = computeMoneyScore();
  const entries = [...moneyState.entries].reverse(); // newest first

  const balanceColor =
    m.balance > 0 ? "#22c55e" : m.balance < 0 ? "#ef4444" : "#9ca3af";
  const monthNetColor =
    m.monthIncome >= m.monthExpenses ? "#22c55e" : "#ef4444";

  // Categorise entries for the list
  const INCOME_CATEGORIES = [
    "Salary", "Freelance", "Business", "Investment", "Gift", "Refund", "Other Income"
  ];
  const EXPENSE_CATEGORIES = [
    "Food", "Transport", "Rent", "Utilities", "Health", "Education",
    "Shopping", "Entertainment", "Subscriptions", "Training", "Other Expense"
  ];

  function buildEntryRowHtml(entry) {
    const amt       = Number(entry.amount || 0);
    const isIncome  = entry.type === "income";
    const sign      = isIncome ? "+" : "−";
    const color     = isIncome ? "#22c55e" : "#ef4444";
    return `
      <div class="money-entry-row" data-entry-id="${entry.id}">
        <div class="money-entry-left">
          <span class="money-entry-type-dot" style="background:${color};"></span>
          <div class="money-entry-info">
            <span class="money-entry-category">${entry.category || "Uncategorised"}</span>
            <span class="money-entry-date">${entry.date || "—"}</span>
          </div>
        </div>
        <div class="money-entry-right">
          <span class="money-entry-amount" style="color:${color};">
            ${sign}${formatMoney(amt)}
          </span>
          <button class="money-delete-btn" title="Delete entry">✕</button>
        </div>
      </div>
    `;
  }

  // Separate income and expense entries
  const incomeEntries  = entries.filter((e) => e.type === "income");
  const expenseEntries = entries.filter((e) => e.type === "expense");

  function buildEntrySection(title, color, list) {
    if (!list.length) return "";
    return `
      <div class="money-entry-section">
        <div class="money-entry-section-title" style="color:${color};">${title}</div>
        ${list.map(buildEntryRowHtml).join("")}
      </div>
    `;
  }

  panel.innerHTML = `
    <!-- SCORE BAR -->
    <div class="money-score-bar-wrap">
      <div class="progress-bar">
        <div class="progress-fill" id="moneyProgressMain" style="width:${score}%;"></div>
      </div>
      <div class="money-score-label">
        Discipline score: <strong>${score}</strong> / 100
      </div>
    </div>

    <!-- FINANCIAL SUMMARY -->
    <div class="money-summary-grid">
      <div class="money-summary-card">
        <div class="money-summary-label">Total Balance</div>
        <div class="money-summary-value" style="color:${balanceColor};">
          ${formatMoney(m.balance)}
        </div>
      </div>
      <div class="money-summary-card">
        <div class="money-summary-label">Total Income</div>
        <div class="money-summary-value" style="color:#22c55e;">
          ${formatMoney(m.totalIncome)}
        </div>
      </div>
      <div class="money-summary-card">
        <div class="money-summary-label">Total Expenses</div>
        <div class="money-summary-value" style="color:#ef4444;">
          ${formatMoney(m.totalExpenses)}
        </div>
      </div>
      <div class="money-summary-card">
        <div class="money-summary-label">This Month Income</div>
        <div class="money-summary-value" style="color:#22c55e;">
          ${formatMoney(m.monthIncome)}
        </div>
      </div>
      <div class="money-summary-card">
        <div class="money-summary-label">This Month Expenses</div>
        <div class="money-summary-value" style="color:#ef4444;">
          ${formatMoney(m.monthExpenses)}
        </div>
      </div>
      <div class="money-summary-card">
        <div class="money-summary-label">Monthly Net</div>
        <div class="money-summary-value" style="color:${monthNetColor};">
          ${formatMoney(m.monthIncome - m.monthExpenses)}
        </div>
      </div>
      <div class="money-summary-card">
        <div class="money-summary-label">Avg Burn Rate / Month</div>
        <div class="money-summary-value" style="color:#f97316;">
          ${formatMoney(m.burnRate)}
        </div>
      </div>
    </div>

    <!-- ADD ENTRY FORM -->
    <div class="money-add-form">
      <div class="money-add-title">+ Add Entry</div>
      <div class="money-add-row">
        <select id="moneyFormType" class="money-form-select">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <select id="moneyFormCategory" class="money-form-select money-form-category">
          ${INCOME_CATEGORIES.map(
            (c) => `<option value="${c}">${c}</option>`
          ).join("")}
        </select>
        <input
          type="number"
          id="moneyFormAmount"
          placeholder="Amount (₹) *"
          min="0"
          step="1"
          class="money-form-input money-form-amount"
        />
        <input
          type="date"
          id="moneyFormDate"
          value="${todayKey()}"
          class="money-form-input money-form-date"
        />
        <button id="moneyAddBtn" class="money-add-btn">Add</button>
      </div>
    </div>

    <!-- ENTRIES LIST -->
    <div id="moneyEntryList">
      ${
        entries.length === 0
          ? '<p class="money-empty">No entries yet. Log your first income or expense above.</p>'
          : buildEntrySection("Income", "#22c55e", incomeEntries) +
            buildEntrySection("Expenses", "#ef4444", expenseEntries)
      }
    </div>
  `;

  // ---- Category switcher: swap options when type changes ----
  const typeSelect     = document.getElementById("moneyFormType");
  const categorySelect = document.getElementById("moneyFormCategory");

  function refreshCategoryOptions() {
    const cats = typeSelect.value === "income" ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;
    categorySelect.innerHTML = cats
      .map((c) => `<option value="${c}">${c}</option>`)
      .join("");
  }

  if (typeSelect) {
    typeSelect.addEventListener("change", refreshCategoryOptions);
  }

  // ---- Add entry button ----
  const addBtn = document.getElementById("moneyAddBtn");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      const amountInput = document.getElementById("moneyFormAmount");
      const amount      = Number(amountInput?.value || 0);

      if (!amount || amount <= 0) {
        if (amountInput) amountInput.focus();
        return;
      }

      const type     = document.getElementById("moneyFormType")?.value     || "expense";
      const category = document.getElementById("moneyFormCategory")?.value || "";
      const date     = document.getElementById("moneyFormDate")?.value     || todayKey();
      const id       = "money_" + Date.now();

      moneyState.entries.push({ id, type, category, amount, date });

      saveMoneyState();
      renderMoneyTab();
      updateMoneySummaryCard();
    });
  }

  // ---- Delete entry buttons ----
  panel.querySelectorAll(".money-delete-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const row     = btn.closest(".money-entry-row");
      const entryId = row?.dataset.entryId;
      if (!entryId) return;

      moneyState.entries = moneyState.entries.filter((e) => e.id !== entryId);
      saveMoneyState();
      renderMoneyTab();
      updateMoneySummaryCard();
    });
  });
}

function updateMoneySummaryCard() {
  const m     = computeMoneyMetrics();
  const score = computeMoneyScore();

  const balanceEl      = document.getElementById("moneyBalanceCard");
  const monthNetEl     = document.getElementById("moneyMonthNet");
  const monthIncomeEl  = document.getElementById("moneyMonthIncomeCard");
  const monthExpEl     = document.getElementById("moneyMonthExpenseCard");
  const bar            = document.getElementById("moneyProgress");

  if (balanceEl)     balanceEl.textContent     = formatMoney(m.balance);
  if (monthNetEl)    monthNetEl.textContent     = formatMoney(m.monthIncome - m.monthExpenses);
  if (monthIncomeEl) monthIncomeEl.textContent  = formatMoney(m.monthIncome);
  if (monthExpEl)    monthExpEl.textContent     = formatMoney(m.monthExpenses);
  if (bar)           bar.style.width            = score + "%";

  // Must be last
  updateDailyScore();
}
// ===================== NETWORK =====================

function isContactCold(contact) {
  if (!contact.lastContactDate) return true;
  const last    = new Date(contact.lastContactDate);
  const now     = new Date();
  const diffMs  = now - last;
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  return diffDays >= 30;
}

function getInteractionsForContact(contactId) {
  return networkState.interactions.filter((i) => i.contactId === contactId);
}

function getWeekStart() {
  const now  = new Date();
  const day  = now.getDay(); // 0 = Sun
  const diff = now.getDate() - day;
  const start = new Date(now.setDate(diff));
  return start.toISOString().slice(0, 10);
}

function computeNetworkScore() {
  const contacts     = Object.values(networkState.contacts);
  const interactions = networkState.interactions;
  const thisMonth    = todayKey().slice(0, 7);
  const weekStart    = getWeekStart();

  let score = 0;

  // +40: at least 1 interaction this week
  const interactedThisWeek = interactions.some(
    (i) => i.date && i.date >= weekStart
  );
  if (interactedThisWeek) score += 40;

  // +30: at least 1 contact added this month
  // We track by checking if any contact's id was created this month
  // (id uses Date.now() prefix "contact_TIMESTAMP" so we use lastContactDate as proxy)
  const newContactThisMonth = contacts.some(
    (c) => c.lastContactDate && c.lastContactDate.startsWith(thisMonth)
  );
  if (newContactThisMonth) score += 30;

  // +30: no cold contacts (all contacts touched within 30 days)
  const hasCold = contacts.some(isContactCold);
  if (contacts.length > 0 && !hasCold) score += 30;

  if (score < 0)   score = 0;
  if (score > 100) score = 100;

  return score;
}

function initNetworkBlock() {
  renderNetworkTab();
  updateNetworkSummaryCard();
}

function renderNetworkTab() {
  const panel = document.getElementById("networkPanel");
  if (!panel) return;

  const contacts      = Object.values(networkState.contacts);
  const interactions  = networkState.interactions;
  const opportunities = networkState.opportunities;
  const score         = computeNetworkScore();
  const today         = todayKey();
  const weekStart     = getWeekStart();
  const thisMonth     = today.slice(0, 7);

  const coldCount          = contacts.filter(isContactCold).length;
  const weekInteractions   = interactions.filter((i) => i.date && i.date >= weekStart).length;

  const STRENGTH_LABELS = { 1: "Acquaintance", 2: "Known", 3: "Friendly", 4: "Close", 5: "Core" };
  const STRENGTH_COLORS = { 1: "#6b7280", 2: "#60a5fa", 3: "#a78bfa", 4: "#f97316", 5: "#22c55e" };
  const OPP_STATUS_COLORS = {
    Warm:   "#f97316",
    Active: "#22c55e",
    Closed: "#a78bfa",
    Lost:   "#6b7280"
  };

  // Sort contacts: cold first, then by strength desc
  const sortedContacts = [...contacts].sort((a, b) => {
    const aCold = isContactCold(a) ? 1 : 0;
    const bCold = isContactCold(b) ? 1 : 0;
    if (bCold !== aCold) return bCold - aCold;
    return (b.strength || 1) - (a.strength || 1);
  });

  function buildStrengthStars(strength) {
    const n = Number(strength || 1);
    return "★".repeat(n) + "☆".repeat(5 - n);
  }

  function buildContactCardHtml(contact) {
    const cold          = isContactCold(contact);
    const contactIntxns = getInteractionsForContact(contact.id);
    const strength      = Number(contact.strength || 1);
    const color         = STRENGTH_COLORS[strength] || "#6b7280";
    const strengthLabel = STRENGTH_LABELS[strength] || "";

    const coldBadge = cold
      ? `<span class="net-badge net-cold">❄ Cold</span>`
      : `<span class="net-badge net-warm">Active</span>`;

    // Build strength options
    const strengthOptions = [1,2,3,4,5].map(
      (v) => `<option value="${v}" ${v === strength ? "selected" : ""}>${v} – ${STRENGTH_LABELS[v]}</option>`
    ).join("");

    return `
      <div class="net-contact-card ${cold ? "net-contact-cold" : ""}"
           data-contact-id="${contact.id}">
        <div class="net-contact-top">
          <div class="net-contact-name-row">
            <span class="net-strength-dot" style="background:${color};"></span>
            <input
              type="text"
              class="net-contact-name-input"
              value="${(contact.name || "").replace(/"/g, "&quot;")}"
              placeholder="Contact name"
            />
            <span class="net-strength-stars" style="color:${color};">
              ${buildStrengthStars(strength)}
            </span>
          </div>
          <div class="net-contact-badges">
            ${coldBadge}
          </div>
          <button class="net-delete-contact-btn" title="Delete contact">✕</button>
        </div>

        <div class="net-contact-meta">
          <div class="net-field-group">
            <label>Category</label>
            <input
              type="text"
              class="net-category-input"
              value="${(contact.category || "").replace(/"/g, "&quot;")}"
              placeholder="e.g. Professor, Founder, Gym"
            />
          </div>
          <div class="net-field-group">
            <label>Strength</label>
            <select class="net-strength-select">
              ${strengthOptions}
            </select>
          </div>
          <div class="net-field-group">
            <label>Last contact</label>
            <span class="net-last-date">${contact.lastContactDate || "Never"}</span>
          </div>
          <div class="net-field-group">
            <label>Interactions</label>
            <span class="net-intxn-count">${contactIntxns.length}</span>
          </div>
        </div>

        <div class="net-contact-notes-row">
          <label>Notes</label>
          <textarea
            class="net-contact-notes"
            rows="2"
            placeholder="What do they do? How do you know them? What can you offer?"
          >${contact.notes || ""}</textarea>
        </div>

        <div class="net-contact-interactions">
          ${contactIntxns.length
            ? contactIntxns
                .slice()
                .reverse()
                .slice(0, 3)
                .map(
                  (i) => `
                    <div class="net-intxn-row" data-intxn-id="${i.id}">
                      <span class="net-intxn-date">${i.date}</span>
                      <span class="net-intxn-note">${i.note || "—"}</span>
                      <button class="net-delete-intxn-btn" title="Delete interaction">✕</button>
                    </div>`
                )
                .join("")
            : `<p class="net-no-intxn">No interactions logged yet.</p>`
          }
        </div>

      </div>
    `;
  }

  function buildOpportunityRowHtml(opp) {
    const color   = OPP_STATUS_COLORS[opp.status] || "#9ca3af";
    const contact = opp.relatedContactId
      ? networkState.contacts[opp.relatedContactId]
      : null;
    const contactName = contact ? contact.name : "—";

    const statusOptions = ["Warm", "Active", "Closed", "Lost"]
      .map((s) => `<option value="${s}" ${s === opp.status ? "selected" : ""}>${s}</option>`)
      .join("");

    return `
      <div class="net-opp-row" data-opp-id="${opp.id}">
        <div class="net-opp-left">
          <span class="net-opp-dot" style="background:${color};"></span>
          <div class="net-opp-info">
            <input
              type="text"
              class="net-opp-title-input"
              value="${(opp.title || "").replace(/"/g, "&quot;")}"
              placeholder="Opportunity title"
            />
            <span class="net-opp-contact">via ${contactName}</span>
          </div>
        </div>
        <div class="net-opp-right">
          <select class="net-opp-status-select" style="border-color:${color}; color:${color};">
            ${statusOptions}
          </select>
          <button class="net-delete-opp-btn" title="Delete opportunity">✕</button>
        </div>
      </div>
    `;
  }

  // Contact select options for interaction form and opp form
  const contactOptions = contacts.length
    ? contacts
        .sort((a, b) => (a.name || "").localeCompare(b.name || ""))
        .map((c) => `<option value="${c.id}">${c.name}</option>`)
        .join("")
    : `<option value="">— Add a contact first —</option>`;

  panel.innerHTML = `
    <!-- SCORE BAR -->
    <div class="net-score-bar-wrap">
      <div class="progress-bar">
        <div class="progress-fill" id="networkProgressMain" style="width:${score}%;"></div>
      </div>
      <div class="net-score-label">
        Network score: <strong>${score}</strong> / 100
        &nbsp;•&nbsp; Contacts: <strong>${contacts.length}</strong>
        &nbsp;•&nbsp; Cold: <strong style="color:${coldCount > 0 ? "#f97316" : "#22c55e"};">${coldCount}</strong>
        &nbsp;•&nbsp; Interactions this week: <strong>${weekInteractions}</strong>
      </div>
    </div>

    <div class="net-main-grid">

      <!-- LEFT COLUMN: Add Contact + Add Interaction + Add Opportunity -->
      <div class="net-forms-col">

        <!-- ADD CONTACT -->
        <div class="net-form-card">
          <div class="net-form-title">+ Add Contact</div>
          <div class="net-form-row">
            <input
              type="text"
              id="netFormContactName"
              placeholder="Name *"
              class="net-form-input"
            />
            <input
              type="text"
              id="netFormContactCategory"
              placeholder="Category"
              class="net-form-input"
            />
            <select id="netFormContactStrength" class="net-form-select">
              <option value="1">1 – Acquaintance</option>
              <option value="2">2 – Known</option>
              <option value="3" selected>3 – Friendly</option>
              <option value="4">4 – Close</option>
              <option value="5">5 – Core</option>
            </select>
            <button id="netAddContactBtn" class="net-add-btn">Add Contact</button>
          </div>
        </div>

        <!-- ADD INTERACTION -->
        <div class="net-form-card">
          <div class="net-form-title">+ Log Interaction</div>
          <div class="net-form-row">
            <select id="netFormIntxnContact" class="net-form-select net-form-select-wide">
              ${contactOptions}
            </select>
            <input
              type="date"
              id="netFormIntxnDate"
              value="${today}"
              class="net-form-input net-form-date"
            />
            <input
              type="text"
              id="netFormIntxnNote"
              placeholder="What happened? (call, meet, DM…)"
              class="net-form-input net-form-note"
            />
            <button id="netLogIntxnBtn" class="net-add-btn">Log</button>
          </div>
        </div>

        <!-- ADD OPPORTUNITY -->
        <div class="net-form-card">
          <div class="net-form-title">+ Add Opportunity</div>
          <div class="net-form-row">
            <input
              type="text"
              id="netFormOppTitle"
              placeholder="Opportunity title *"
              class="net-form-input"
            />
            <select id="netFormOppContact" class="net-form-select">
              <option value="">No linked contact</option>
              ${contactOptions}
            </select>
            <select id="netFormOppStatus" class="net-form-select">
              <option value="Warm">Warm</option>
              <option value="Active">Active</option>
              <option value="Closed">Closed</option>
              <option value="Lost">Lost</option>
            </select>
            <button id="netAddOppBtn" class="net-add-btn">Add Opp</button>
          </div>
        </div>

      </div>

      <!-- RIGHT COLUMN: Opportunities list -->
      <div class="net-opps-col">
        <div class="net-section-title">Opportunities (${opportunities.length})</div>
        <div id="netOppList">
          ${
            opportunities.length === 0
              ? '<p class="net-empty">No opportunities yet.</p>'
              : opportunities
                  .slice()
                  .reverse()
                  .map(buildOpportunityRowHtml)
                  .join("")
          }
        </div>
      </div>

    </div>

    <!-- CONTACT LIST -->
    <div class="net-section-title" style="margin-top:16px;">
      Contacts (${contacts.length})
      ${coldCount > 0 ? `<span class="net-cold-warning">— ${coldCount} cold contact(s) need attention</span>` : ""}
    </div>
    <div id="netContactList">
      ${
        sortedContacts.length === 0
          ? '<p class="net-empty">No contacts yet. Add your first contact above.</p>'
          : sortedContacts.map(buildContactCardHtml).join("")
      }
    </div>
  `;

  // ---- Add Contact ----
  const addContactBtn = document.getElementById("netAddContactBtn");
  if (addContactBtn) {
    addContactBtn.addEventListener("click", () => {
      const nameInput = document.getElementById("netFormContactName");
      const name      = (nameInput?.value || "").trim();
      if (!name) { if (nameInput) nameInput.focus(); return; }

      const category = document.getElementById("netFormContactCategory")?.value.trim() || "";
      const strength = Number(document.getElementById("netFormContactStrength")?.value || 3);
      const id       = "contact_" + Date.now();

      networkState.contacts[id] = {
        id,
        name,
        category,
        strength,
        lastContactDate: today,
        notes: ""
      };

      saveNetworkState();
      renderNetworkTab();
      updateNetworkSummaryCard();
    });
  }

  // ---- Log Interaction ----
  const logIntxnBtn = document.getElementById("netLogIntxnBtn");
  if (logIntxnBtn) {
    logIntxnBtn.addEventListener("click", () => {
      const contactId = document.getElementById("netFormIntxnContact")?.value || "";
      if (!contactId || !networkState.contacts[contactId]) return;

      const date = document.getElementById("netFormIntxnDate")?.value || today;
      const note = document.getElementById("netFormIntxnNote")?.value.trim() || "";
      const id   = "intxn_" + Date.now();

      networkState.interactions.push({ id, contactId, date, note });

      // Update contact's lastContactDate if this is more recent
      const contact = networkState.contacts[contactId];
      if (!contact.lastContactDate || date > contact.lastContactDate) {
        contact.lastContactDate = date;
      }

      saveNetworkState();
      renderNetworkTab();
      updateNetworkSummaryCard();
    });
  }

  // ---- Add Opportunity ----
  const addOppBtn = document.getElementById("netAddOppBtn");
  if (addOppBtn) {
    addOppBtn.addEventListener("click", () => {
      const titleInput = document.getElementById("netFormOppTitle");
      const title      = (titleInput?.value || "").trim();
      if (!title) { if (titleInput) titleInput.focus(); return; }

      const relatedContactId = document.getElementById("netFormOppContact")?.value || "";
      const status           = document.getElementById("netFormOppStatus")?.value || "Warm";
      const id               = "opp_" + Date.now();

      networkState.opportunities.push({ id, title, status, relatedContactId, notes: "" });

      saveNetworkState();
      renderNetworkTab();
      updateNetworkSummaryCard();
    });
  }

  // ---- Per-contact card listeners ----
  panel.querySelectorAll(".net-contact-card").forEach((card) => {
    const contactId = card.dataset.contactId;
    if (!contactId || !networkState.contacts[contactId]) return;

    const contact      = networkState.contacts[contactId];
    const nameInput    = card.querySelector(".net-contact-name-input");
    const catInput     = card.querySelector(".net-category-input");
    const strSelect    = card.querySelector(".net-strength-select");
    const notesInput   = card.querySelector(".net-contact-notes");
    const deleteBtn    = card.querySelector(".net-delete-contact-btn");

    if (nameInput) {
      nameInput.addEventListener("blur", () => {
        const val = nameInput.value.trim();
        if (!val) return;
        contact.name = val;
        saveNetworkState();
        updateNetworkSummaryCard();
      });
    }

    if (catInput) {
      catInput.addEventListener("blur", () => {
        contact.category = catInput.value.trim();
        saveNetworkState();
        updateNetworkSummaryCard();
      });
    }

    if (strSelect) {
      strSelect.addEventListener("change", () => {
        contact.strength = Number(strSelect.value || 1);
        saveNetworkState();
        renderNetworkTab();
        updateNetworkSummaryCard();
      });
    }

    if (notesInput) {
      notesInput.addEventListener("blur", () => {
        contact.notes = notesInput.value;
        saveNetworkState();
      });
    }

    if (deleteBtn) {
      deleteBtn.addEventListener("click", () => {
        delete networkState.contacts[contactId];
        // Clean up orphaned interactions
        networkState.interactions = networkState.interactions.filter(
          (i) => i.contactId !== contactId
        );
        saveNetworkState();
        renderNetworkTab();
        updateNetworkSummaryCard();
      });
    }

    // Delete individual interaction rows
    card.querySelectorAll(".net-delete-intxn-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const row    = btn.closest(".net-intxn-row");
        const intxnId = row?.dataset.intxnId;
        if (!intxnId) return;
        networkState.interactions = networkState.interactions.filter(
          (i) => i.id !== intxnId
        );
        // Recompute lastContactDate for this contact from remaining interactions
        const remaining = getInteractionsForContact(contactId);
        if (remaining.length) {
          contact.lastContactDate = remaining
            .map((i) => i.date)
            .filter(Boolean)
            .sort()
            .reverse()[0];
        } else {
          contact.lastContactDate = "";
        }
        saveNetworkState();
        renderNetworkTab();
        updateNetworkSummaryCard();
      });
    });
  });

  // ---- Per-opportunity row listeners ----
  panel.querySelectorAll(".net-opp-row").forEach((row) => {
    const oppId = row.dataset.oppId;
    const opp   = networkState.opportunities.find((o) => o.id === oppId);
    if (!opp) return;

    const titleInput  = row.querySelector(".net-opp-title-input");
    const statusSelect = row.querySelector(".net-opp-status-select");
    const deleteBtn   = row.querySelector(".net-delete-opp-btn");

    if (titleInput) {
      titleInput.addEventListener("blur", () => {
        const val = titleInput.value.trim();
        if (!val) return;
        opp.title = val;
        saveNetworkState();
        updateNetworkSummaryCard();
      });
    }

    if (statusSelect) {
      statusSelect.addEventListener("change", () => {
        opp.status = statusSelect.value;
        saveNetworkState();
        renderNetworkTab();
        updateNetworkSummaryCard();
      });
    }

    if (deleteBtn) {
      deleteBtn.addEventListener("click", () => {
        networkState.opportunities = networkState.opportunities.filter(
          (o) => o.id !== oppId
        );
        saveNetworkState();
        renderNetworkTab();
        updateNetworkSummaryCard();
      });
    }
  });
}

function updateNetworkSummaryCard() {
  const contacts      = Object.values(networkState.contacts);
  const interactions  = networkState.interactions;
  const opportunities = networkState.opportunities;
  const score         = computeNetworkScore();
  const weekStart     = getWeekStart();

  const coldCount        = contacts.filter(isContactCold).length;
  const weekInteractions = interactions.filter(
    (i) => i.date && i.date >= weekStart
  ).length;
  const oppCount         = opportunities.length;

  const contactCountEl    = document.getElementById("networkContactCount");
  const coldCountEl       = document.getElementById("networkColdCount");
  const bar               = document.getElementById("networkProgress");
  const weekIntxnEl       = document.getElementById("networkWeekInteractions");
  const oppCountEl        = document.getElementById("networkOppCount");

  if (contactCountEl) contactCountEl.textContent = contacts.length;
  if (coldCountEl)    coldCountEl.textContent     = coldCount;
  if (bar)            bar.style.width             = score + "%";
  if (weekIntxnEl)    weekIntxnEl.textContent     = weekInteractions;
  if (oppCountEl)     oppCountEl.textContent      = oppCount;

  // Must be last
  updateDailyScore();
}
// ===================== ARM WRESTLING =====================

function computeAssociationScore() {
  const a     = armState.association;
  const year  = new Date().getFullYear().toString();
  let score   = 0;

  // +30: at least 1 tournament hosted
  if (Number(a.tournamentsHosted || 0) >= 1) score += 30;

  // +30: members > 50
  if (Number(a.members || 0) > 50) score += 30;

  // +20: at least 1 sponsor
  if (Number(a.sponsors || 0) > 0) score += 20;

  // +20: positive funds
  if (Number(a.funds || 0) > 0) score += 20;

  if (score < 0)   score = 0;
  if (score > 100) score = 100;
  return score;
}

function computeSelfScore() {
  const m       = armState.self.metrics;
  const r       = armState.self.recovery;
  const matches = armState.self.matches;
  const thisMonth = todayKey().slice(0, 7);

  let score = 0;

  // +40: all 5 strength metrics are filled (> 0)
  const metricsFilled =
    Number(m.pronationMax    || 0) > 0 &&
    Number(m.cuppingMax      || 0) > 0 &&
    Number(m.riserMax        || 0) > 0 &&
    Number(m.hookHoldSeconds || 0) > 0 &&
    Number(m.bodyWeight      || 0) > 0;
  if (metricsFilled) score += 40;

  // +30: recovery risk is NOT "High Risk" (no value > 7)
  const maxRecovery = Math.max(
    Number(r.elbowPain    || 1),
    Number(r.wristFatigue || 1),
    Number(r.gripFatigue  || 1)
  );
  if (maxRecovery <= 7) score += 30;

  // +30: at least 1 match logged this month
  const matchThisMonth = matches.some(
    (match) => match.date && match.date.startsWith(thisMonth)
  );
  if (matchThisMonth) score += 30;

  if (score < 0)   score = 0;
  if (score > 100) score = 100;
  return score;
}

function computeArmScore() {
  const selfScore  = computeSelfScore();
  const assocScore = computeAssociationScore();
  let final = (selfScore * 0.6) + (assocScore * 0.4);
  if (final < 0)   final = 0;
  if (final > 100) final = 100;
  return Math.round(final);
}

function getRecoveryRiskLabel(r) {
  const max = Math.max(
    Number(r.elbowPain    || 1),
    Number(r.wristFatigue || 1),
    Number(r.gripFatigue  || 1)
  );
  if (max > 7) return { label: "High Risk",  color: "#ef4444" };
  if (max > 3) return { label: "Moderate",   color: "#f97316" };
  return        { label: "Good",             color: "#22c55e" };
}

function initArmBlock() {
  renderArmTab();
  updateArmSummaryCard();
}

function renderArmTab() {
  const panel = document.getElementById("armPanel");
  if (!panel) return;

  const score      = computeArmScore();
  const selfScore  = computeSelfScore();
  const assocScore = computeAssociationScore();

  panel.innerHTML = `
    <!-- Score bar -->
    <div class="arm-score-bar-wrap">
      <div class="progress-bar">
        <div class="progress-fill" id="armProgressMain" style="width:${score}%;"></div>
      </div>
      <div class="arm-score-label">
        Overall score: <strong>${score}</strong> / 100
        &nbsp;•&nbsp; Self: <strong>${selfScore}</strong>
        &nbsp;•&nbsp; Association: <strong>${assocScore}</strong>
      </div>
    </div>

    <!-- Internal tab toggle -->
    <div class="arm-tab-row">
      <button
        class="arm-tab-btn ${armActiveSection === "self" ? "arm-tab-active" : ""}"
        id="armTabSelf">
        🏋 Self
      </button>
      <button
        class="arm-tab-btn ${armActiveSection === "association" ? "arm-tab-active" : ""}"
        id="armTabAssoc">
        🏛 Arm Association Andhra
      </button>
    </div>

    <!-- Subsection content -->
    <div id="armSubContent"></div>
  `;

  // Tab button listeners
  const selfBtn  = document.getElementById("armTabSelf");
  const assocBtn = document.getElementById("armTabAssoc");

  if (selfBtn) {
    selfBtn.addEventListener("click", () => {
      armActiveSection = "self";
      renderArmTab();
    });
  }
  if (assocBtn) {
    assocBtn.addEventListener("click", () => {
      armActiveSection = "association";
      renderArmTab();
    });
  }

  // Render the active subsection
  if (armActiveSection === "self") {
    renderSelfSection();
  } else {
    renderAssociationSection();
  }
}

function renderSelfSection() {
  const container = document.getElementById("armSubContent");
  if (!container) return;

  const m          = armState.self.metrics;
  const r          = armState.self.recovery;
  const matches    = armState.self.matches;
  const risk       = getRecoveryRiskLabel(r);
  const today      = todayKey();
  const thisMonth  = today.slice(0, 7);

  const winsTotal  = matches.filter((x) => x.result === "Win").length;
  const lossTotal  = matches.filter((x) => x.result === "Loss").length;

  container.innerHTML = `

    <!-- STRENGTH METRICS -->
    <div class="arm-section-card">
      <div class="arm-section-title">💪 Strength Metrics</div>
      <div class="arm-metrics-grid">

        <div class="arm-metric-item">
          <label>Pronation Max (kg)</label>
          <input type="number" id="armPronation" min="0" step="0.5"
                 value="${Number(m.pronationMax || 0)}" class="arm-metric-input" />
        </div>

        <div class="arm-metric-item">
          <label>Cupping Max (kg)</label>
          <input type="number" id="armCupping" min="0" step="0.5"
                 value="${Number(m.cuppingMax || 0)}" class="arm-metric-input" />
        </div>

        <div class="arm-metric-item">
          <label>Riser Max (kg)</label>
          <input type="number" id="armRiser" min="0" step="0.5"
                 value="${Number(m.riserMax || 0)}" class="arm-metric-input" />
        </div>

        <div class="arm-metric-item">
          <label>Hook Hold (seconds)</label>
          <input type="number" id="armHook" min="0" step="1"
                 value="${Number(m.hookHoldSeconds || 0)}" class="arm-metric-input" />
        </div>

        <div class="arm-metric-item">
          <label>Body Weight (kg)</label>
          <input type="number" id="armBodyWeight" min="0" step="0.1"
                 value="${Number(m.bodyWeight || 0)}" class="arm-metric-input" />
        </div>

      </div>
      <button id="armSaveMetricsBtn" class="arm-save-btn">Save Metrics</button>
    </div>

    <!-- RECOVERY MONITOR -->
    <div class="arm-section-card">
      <div class="arm-section-title">
        🩺 Recovery Monitor
        <span class="arm-risk-badge" style="border-color:${risk.color}; color:${risk.color};">
          ${risk.label}
        </span>
      </div>
      <div class="arm-recovery-grid">

        <div class="arm-recovery-item">
          <label>Elbow Pain (1–10)</label>
          <div class="arm-recovery-row">
            <input type="range" id="armElbow" min="1" max="10" step="1"
                   value="${Number(r.elbowPain || 1)}" class="arm-slider" />
            <span class="arm-slider-val" id="armElbowVal">${Number(r.elbowPain || 1)}</span>
          </div>
        </div>

        <div class="arm-recovery-item">
          <label>Wrist Fatigue (1–10)</label>
          <div class="arm-recovery-row">
            <input type="range" id="armWrist" min="1" max="10" step="1"
                   value="${Number(r.wristFatigue || 1)}" class="arm-slider" />
            <span class="arm-slider-val" id="armWristVal">${Number(r.wristFatigue || 1)}</span>
          </div>
        </div>

        <div class="arm-recovery-item">
          <label>Grip Fatigue (1–10)</label>
          <div class="arm-recovery-row">
            <input type="range" id="armGrip" min="1" max="10" step="1"
                   value="${Number(r.gripFatigue || 1)}" class="arm-slider" />
            <span class="arm-slider-val" id="armGripVal">${Number(r.gripFatigue || 1)}</span>
          </div>
        </div>

      </div>
      <button id="armSaveRecoveryBtn" class="arm-save-btn">Save Recovery</button>
    </div>

    <!-- MATCH LOG -->
    <div class="arm-section-card">
      <div class="arm-section-title">
        🥊 Match Log
        <span class="arm-record-pill">
          ${winsTotal}W – ${lossTotal}L
        </span>
      </div>

      <!-- Add match form -->
      <div class="arm-match-form">
        <div class="arm-match-form-row">
          <input type="text" id="armMatchOpponent"
                 placeholder="Opponent name *"
                 class="arm-form-input" />
          <select id="armMatchResult" class="arm-form-select">
            <option value="Win">Win</option>
            <option value="Loss">Loss</option>
          </select>
          <input type="text" id="armMatchTechnique"
                 placeholder="Technique (hook, top roll…)"
                 class="arm-form-input" />
          <input type="date" id="armMatchDate"
                 value="${today}"
                 class="arm-form-input arm-form-date" />
        </div>
        <div class="arm-match-form-row">
          <input type="text" id="armMatchNotes"
                 placeholder="Notes (conditions, observations…)"
                 class="arm-form-input arm-form-notes-input" />
          <button id="armAddMatchBtn" class="arm-add-btn">Log Match</button>
        </div>
      </div>

      <!-- Match history -->
      <div id="armMatchList">
        ${
          matches.length === 0
            ? '<p class="arm-empty">No matches logged yet.</p>'
            : matches
                .slice()
                .reverse()
                .map((match) => {
                  const isWin    = match.result === "Win";
                  const color    = isWin ? "#22c55e" : "#ef4444";
                  const isMonth  = match.date && match.date.startsWith(thisMonth);
                  return `
                    <div class="arm-match-row" data-match-id="${match.id}">
                      <div class="arm-match-left">
                        <span class="arm-match-result-dot" style="background:${color};"></span>
                        <div class="arm-match-info">
                          <span class="arm-match-opponent">${match.opponent || "Unknown"}</span>
                          <span class="arm-match-meta">
                            ${match.techniqueUsed || "—"} •
                            ${match.date || "—"}
                            ${isMonth ? '<span class="arm-this-month-badge">this month</span>' : ""}
                          </span>
                          ${match.notes ? `<span class="arm-match-notes">${match.notes}</span>` : ""}
                        </div>
                      </div>
                      <div class="arm-match-right">
                        <span class="arm-match-result-label" style="color:${color};">
                          ${match.result}
                        </span>
                        <button class="arm-delete-match-btn" title="Delete match">✕</button>
                      </div>
                    </div>
                  `;
                })
                .join("")
        }
      </div>
    </div>
  `;

  // ---- Metrics save ----
  const saveMetricsBtn = document.getElementById("armSaveMetricsBtn");
  if (saveMetricsBtn) {
    saveMetricsBtn.addEventListener("click", () => {
      armState.self.metrics.pronationMax    = Math.max(0, Number(document.getElementById("armPronation")?.value    || 0));
      armState.self.metrics.cuppingMax      = Math.max(0, Number(document.getElementById("armCupping")?.value      || 0));
      armState.self.metrics.riserMax        = Math.max(0, Number(document.getElementById("armRiser")?.value        || 0));
      armState.self.metrics.hookHoldSeconds = Math.max(0, Number(document.getElementById("armHook")?.value         || 0));
      armState.self.metrics.bodyWeight      = Math.max(0, Number(document.getElementById("armBodyWeight")?.value   || 0));
      saveArmState();
      renderArmTab();
      updateArmSummaryCard();
    });
  }

  // ---- Recovery sliders — live value display ----
  function wireSlider(sliderId, valId, stateKey) {
    const slider = document.getElementById(sliderId);
    const valEl  = document.getElementById(valId);
    if (!slider) return;
    slider.addEventListener("input", () => {
      if (valEl) valEl.textContent = slider.value;
    });
  }
  wireSlider("armElbow", "armElbowVal", "elbowPain");
  wireSlider("armWrist", "armWristVal", "wristFatigue");
  wireSlider("armGrip",  "armGripVal",  "gripFatigue");

  // ---- Recovery save ----
  const saveRecoveryBtn = document.getElementById("armSaveRecoveryBtn");
  if (saveRecoveryBtn) {
    saveRecoveryBtn.addEventListener("click", () => {
      armState.self.recovery.elbowPain    = Number(document.getElementById("armElbow")?.value  || 1);
      armState.self.recovery.wristFatigue = Number(document.getElementById("armWrist")?.value  || 1);
      armState.self.recovery.gripFatigue  = Number(document.getElementById("armGrip")?.value   || 1);
      saveArmState();
      renderArmTab();
      updateArmSummaryCard();
    });
  }

  // ---- Add match ----
  const addMatchBtn = document.getElementById("armAddMatchBtn");
  if (addMatchBtn) {
    addMatchBtn.addEventListener("click", () => {
      const opponentInput = document.getElementById("armMatchOpponent");
      const opponent      = (opponentInput?.value || "").trim();
      if (!opponent) { if (opponentInput) opponentInput.focus(); return; }

      const result        = document.getElementById("armMatchResult")?.value      || "Win";
      const techniqueUsed = document.getElementById("armMatchTechnique")?.value.trim() || "";
      const notes         = document.getElementById("armMatchNotes")?.value.trim()     || "";
      const date          = document.getElementById("armMatchDate")?.value              || todayKey();
      const id            = "match_" + Date.now();

      armState.self.matches.push({ id, opponent, result, techniqueUsed, notes, date });
      saveArmState();
      renderArmTab();
      updateArmSummaryCard();
    });
  }

  // ---- Delete match ----
  container.querySelectorAll(".arm-delete-match-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const row     = btn.closest(".arm-match-row");
      const matchId = row?.dataset.matchId;
      if (!matchId) return;
      armState.self.matches = armState.self.matches.filter((x) => x.id !== matchId);
      saveArmState();
      renderArmTab();
      updateArmSummaryCard();
    });
  });
}

function renderAssociationSection() {
  const container = document.getElementById("armSubContent");
  if (!container) return;

  const a     = armState.association;
  const score = computeAssociationScore();

  container.innerHTML = `
    <div class="arm-section-card">
      <div class="arm-section-title">
        🏛 Arm Association Andhra — Organisation Dashboard
        <span class="arm-risk-badge" style="border-color:#a78bfa; color:#a78bfa;">
          Growth Score: ${score} / 100
        </span>
      </div>

      <!-- Growth score bar -->
      <div class="arm-assoc-score-bar">
        <div class="progress-bar">
          <div class="progress-fill arm-assoc-fill" style="width:${score}%;"></div>
        </div>
        <div class="arm-assoc-score-hint">
          ${score >= 100
            ? "🏆 All growth conditions met."
            : `${100 - score}% remaining — ${
                Number(a.tournamentsHosted || 0) < 1 ? "host a tournament (+30%) " : ""
              }${Number(a.members || 0) <= 50 ? "grow to 50+ members (+30%) " : ""}${
                Number(a.sponsors || 0) < 1 ? "add a sponsor (+20%) " : ""
              }${Number(a.funds || 0) <= 0 ? "log positive funds (+20%)" : ""}`
          }
        </div>
      </div>

      <!-- Organisation fields -->
      <div class="arm-assoc-grid">

        <div class="arm-assoc-field">
          <label>Members</label>
          <input type="number" id="assocMembers" min="0" step="1"
                 value="${Number(a.members || 0)}" class="arm-assoc-input" />
          ${Number(a.members || 0) > 50
            ? `<span class="arm-assoc-check">✅ 50+ milestone</span>`
            : `<span class="arm-assoc-hint">${Math.max(0, 51 - Number(a.members || 0))} more to hit 50</span>`}
        </div>

        <div class="arm-assoc-field">
          <label>Tournaments Hosted</label>
          <input type="number" id="assocTournaments" min="0" step="1"
                 value="${Number(a.tournamentsHosted || 0)}" class="arm-assoc-input" />
          ${Number(a.tournamentsHosted || 0) >= 1
            ? `<span class="arm-assoc-check">✅ Condition met</span>`
            : `<span class="arm-assoc-hint">Need ≥ 1 to score</span>`}
        </div>

        <div class="arm-assoc-field">
          <label>Active Registrations</label>
          <input type="number" id="assocRegistrations" min="0" step="1"
                 value="${Number(a.activeRegistrations || 0)}" class="arm-assoc-input" />
        </div>

        <div class="arm-assoc-field">
          <label>Sponsors</label>
          <input type="number" id="assocSponsors" min="0" step="1"
                 value="${Number(a.sponsors || 0)}" class="arm-assoc-input" />
          ${Number(a.sponsors || 0) > 0
            ? `<span class="arm-assoc-check">✅ Sponsored</span>`
            : `<span class="arm-assoc-hint">0 = no sponsor score</span>`}
        </div>

        <div class="arm-assoc-field">
          <label>Funds (₹)</label>
          <input type="number" id="assocFunds" min="0" step="1"
                 value="${Number(a.funds || 0)}" class="arm-assoc-input" />
          ${Number(a.funds || 0) > 0
            ? `<span class="arm-assoc-check">✅ Positive funds</span>`
            : `<span class="arm-assoc-hint">₹0 = no funds score</span>`}
        </div>

      </div>

      <div class="arm-assoc-notes-row">
        <label>Association Notes</label>
        <textarea id="assocNotes" rows="3"
                  class="arm-assoc-notes"
                  placeholder="Upcoming events, sponsor leads, member issues, goals…"
        >${a.notes || ""}</textarea>
      </div>

      <button id="armSaveAssocBtn" class="arm-save-btn">Save Organisation Data</button>
    </div>
  `;

  // ---- Save association ----
  const saveAssocBtn = document.getElementById("armSaveAssocBtn");
  if (saveAssocBtn) {
    saveAssocBtn.addEventListener("click", () => {
      armState.association.members             = Math.max(0, Number(document.getElementById("assocMembers")?.value       || 0));
      armState.association.tournamentsHosted   = Math.max(0, Number(document.getElementById("assocTournaments")?.value   || 0));
      armState.association.activeRegistrations = Math.max(0, Number(document.getElementById("assocRegistrations")?.value || 0));
      armState.association.sponsors            = Math.max(0, Number(document.getElementById("assocSponsors")?.value      || 0));
      armState.association.funds               = Math.max(0, Number(document.getElementById("assocFunds")?.value         || 0));
      armState.association.notes               = document.getElementById("assocNotes")?.value || "";
      saveArmState();
      renderArmTab();
      updateArmSummaryCard();
    });
  }

  // ---- Notes auto-save on blur ----
  const notesEl = document.getElementById("assocNotes");
  if (notesEl) {
    notesEl.addEventListener("blur", () => {
      armState.association.notes = notesEl.value || "";
      saveArmState();
    });
  }
}

function updateArmSummaryCard() {
  const m         = armState.self.metrics;
  const r         = armState.self.recovery;
  const matches   = armState.self.matches;
  const score     = computeArmScore();
  const risk      = getRecoveryRiskLabel(r);

  const bodyWeightEl  = document.getElementById("armBodyWeightCard");
  const matchCountEl  = document.getElementById("armMatchCountCard");
  const bar           = document.getElementById("armProgress");
  const recoveryEl    = document.getElementById("armRecoveryCard");
  const membersEl     = document.getElementById("armMembersCard");

  if (bodyWeightEl) bodyWeightEl.textContent = Number(m.bodyWeight || 0) > 0
    ? Number(m.bodyWeight).toFixed(1)
    : "—";
  if (matchCountEl) matchCountEl.textContent = matches.length;
  if (bar)          bar.style.width          = score + "%";
  if (recoveryEl)   recoveryEl.textContent   = risk.label;
  if (membersEl)    membersEl.textContent    = Number(armState.association.members || 0);

  // Must be last
  updateDailyScore();
}
