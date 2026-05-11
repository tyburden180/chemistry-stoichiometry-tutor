let state = {
  test: createTestFromPool(problemBank, TEST_QUESTION_COUNT),
  problemIndex: 0,
  stepIndex: 0,
  answers: {},
  attempts: 0,
  correct: 0
};

const $ = (id) => document.getElementById(id);

const periodicElements = [
  { number: 1, symbol: "H", name: "Hydrogen", mass: "1.008", charge: "+1", type: "nonmetal", row: 1, col: 1 },
  { number: 2, symbol: "He", name: "Helium", mass: "4.003", charge: "0", type: "gas", row: 1, col: 18 },
  { number: 3, symbol: "Li", name: "Lithium", mass: "6.94", charge: "+1", type: "metal", row: 2, col: 1 },
  { number: 4, symbol: "Be", name: "Beryllium", mass: "9.012", charge: "+2", type: "metal", row: 2, col: 2 },
  { number: 5, symbol: "B", name: "Boron", mass: "10.81", charge: "+3", type: "metalloid", row: 2, col: 13 },
  { number: 6, symbol: "C", name: "Carbon", mass: "12.01", charge: "±4", type: "nonmetal", row: 2, col: 14 },
  { number: 7, symbol: "N", name: "Nitrogen", mass: "14.01", charge: "-3", type: "nonmetal", row: 2, col: 15 },
  { number: 8, symbol: "O", name: "Oxygen", mass: "16.00", charge: "-2", type: "nonmetal", row: 2, col: 16 },
  { number: 9, symbol: "F", name: "Fluorine", mass: "19.00", charge: "-1", type: "nonmetal", row: 2, col: 17 },
  { number: 10, symbol: "Ne", name: "Neon", mass: "20.18", charge: "0", type: "gas", row: 2, col: 18 },
  { number: 11, symbol: "Na", name: "Sodium", mass: "22.99", charge: "+1", type: "metal", row: 3, col: 1 },
  { number: 12, symbol: "Mg", name: "Magnesium", mass: "24.31", charge: "+2", type: "metal", row: 3, col: 2 },
  { number: 13, symbol: "Al", name: "Aluminum", mass: "26.98", charge: "+3", type: "metal", row: 3, col: 13 },
  { number: 14, symbol: "Si", name: "Silicon", mass: "28.09", charge: "±4", type: "metalloid", row: 3, col: 14 },
  { number: 15, symbol: "P", name: "Phosphorus", mass: "30.97", charge: "-3", type: "nonmetal", row: 3, col: 15 },
  { number: 16, symbol: "S", name: "Sulfur", mass: "32.06", charge: "-2", type: "nonmetal", row: 3, col: 16 },
  { number: 17, symbol: "Cl", name: "Chlorine", mass: "35.45", charge: "-1", type: "nonmetal", row: 3, col: 17 },
  { number: 18, symbol: "Ar", name: "Argon", mass: "39.95", charge: "0", type: "gas", row: 3, col: 18 },
  { number: 19, symbol: "K", name: "Potassium", mass: "39.10", charge: "+1", type: "metal", row: 4, col: 1 },
  { number: 20, symbol: "Ca", name: "Calcium", mass: "40.08", charge: "+2", type: "metal", row: 4, col: 2 },
  { number: 21, symbol: "Sc", name: "Scandium", mass: "44.96", charge: "+3", type: "transition", row: 4, col: 3 },
  { number: 22, symbol: "Ti", name: "Titanium", mass: "47.87", charge: "+4, +3", type: "transition", row: 4, col: 4 },
  { number: 23, symbol: "V", name: "Vanadium", mass: "50.94", charge: "+5, +4", type: "transition", row: 4, col: 5 },
  { number: 24, symbol: "Cr", name: "Chromium", mass: "52.00", charge: "+3, +6", type: "transition", row: 4, col: 6 },
  { number: 25, symbol: "Mn", name: "Manganese", mass: "54.94", charge: "+2, +4", type: "transition", row: 4, col: 7 },
  { number: 26, symbol: "Fe", name: "Iron", mass: "55.85", charge: "+2, +3", type: "transition", row: 4, col: 8 },
  { number: 27, symbol: "Co", name: "Cobalt", mass: "58.93", charge: "+2, +3", type: "transition", row: 4, col: 9 },
  { number: 28, symbol: "Ni", name: "Nickel", mass: "58.69", charge: "+2", type: "transition", row: 4, col: 10 },
  { number: 29, symbol: "Cu", name: "Copper", mass: "63.55", charge: "+1, +2", type: "transition", row: 4, col: 11 },
  { number: 30, symbol: "Zn", name: "Zinc", mass: "65.38", charge: "+2", type: "transition", row: 4, col: 12 },
  { number: 31, symbol: "Ga", name: "Gallium", mass: "69.72", charge: "+3", type: "metal", row: 4, col: 13 },
  { number: 32, symbol: "Ge", name: "Germanium", mass: "72.63", charge: "+4", type: "metalloid", row: 4, col: 14 },
  { number: 33, symbol: "As", name: "Arsenic", mass: "74.92", charge: "-3", type: "metalloid", row: 4, col: 15 },
  { number: 34, symbol: "Se", name: "Selenium", mass: "78.97", charge: "-2", type: "nonmetal", row: 4, col: 16 },
  { number: 35, symbol: "Br", name: "Bromine", mass: "79.90", charge: "-1", type: "nonmetal", row: 4, col: 17 },
  { number: 36, symbol: "Kr", name: "Krypton", mass: "83.80", charge: "0", type: "gas", row: 4, col: 18 },
  { number: 47, symbol: "Ag", name: "Silver", mass: "107.87", charge: "+1", type: "transition", row: 5, col: 11 },
  { number: 50, symbol: "Sn", name: "Tin", mass: "118.71", charge: "+2, +4", type: "metal", row: 5, col: 14 },
  { number: 53, symbol: "I", name: "Iodine", mass: "126.90", charge: "-1", type: "nonmetal", row: 5, col: 17 },
  { number: 56, symbol: "Ba", name: "Barium", mass: "137.33", charge: "+2", type: "metal", row: 6, col: 2 },
  { number: 80, symbol: "Hg", name: "Mercury", mass: "200.59", charge: "+1, +2", type: "transition", row: 6, col: 12 },
  { number: 82, symbol: "Pb", name: "Lead", mass: "207.2", charge: "+2, +4", type: "metal", row: 6, col: 14 }
];

const commonIons = [
  { formula: "NH₄⁺", name: "Ammonium", charge: "+1" },
  { formula: "OH⁻", name: "Hydroxide", charge: "-1" },
  { formula: "NO₃⁻", name: "Nitrate", charge: "-1" },
  { formula: "NO₂⁻", name: "Nitrite", charge: "-1" },
  { formula: "ClO₃⁻", name: "Chlorate", charge: "-1" },
  { formula: "ClO₄⁻", name: "Perchlorate", charge: "-1" },
  { formula: "C₂H₃O₂⁻", name: "Acetate", charge: "-1" },
  { formula: "HCO₃⁻", name: "Hydrogen carbonate", charge: "-1" },
  { formula: "CO₃²⁻", name: "Carbonate", charge: "-2" },
  { formula: "SO₄²⁻", name: "Sulfate", charge: "-2" },
  { formula: "SO₃²⁻", name: "Sulfite", charge: "-2" },
  { formula: "CrO₄²⁻", name: "Chromate", charge: "-2" },
  { formula: "Cr₂O₇²⁻", name: "Dichromate", charge: "-2" },
  { formula: "PO₄³⁻", name: "Phosphate", charge: "-3" }
];

const elements = {
  levelSelect: $("levelSelect"),
  focusSelect: $("focusSelect"),
  countInput: $("countInput"),
  studentNameInput: $("studentNameInput"),
  teacherEmailInput: $("teacherEmailInput"),
  buildButton: $("buildButton"),
  resetButton: $("resetButton"),
  problemNumber: $("problemNumber"),
  problemTotal: $("problemTotal"),
  stepNumber: $("stepNumber"),
  stepTotal: $("stepTotal"),
  accuracyValue: $("accuracyValue"),
  problemType: $("problemType"),
  problemTitle: $("problemTitle"),
  difficultyBadge: $("difficultyBadge"),
  equationText: $("equationText"),
  problemPrompt: $("problemPrompt"),
  stepMap: $("stepMap"),
  stepSkill: $("stepSkill"),
  stepQuestion: $("stepQuestion"),
  choices: $("choices"),
  feedback: $("feedback"),
  nextButton: $("nextButton"),
  previousButton: $("previousButton"),
  hintButton: $("hintButton"),
  periodicButton: $("periodicButton"),
  calculatorButton: $("calculatorButton"),
  toolOverlay: $("toolOverlay"),
  periodicDrawer: $("periodicDrawer"),
  calculatorDrawer: $("calculatorDrawer"),
  closePeriodicButton: $("closePeriodicButton"),
  closeCalculatorButton: $("closeCalculatorButton"),
  periodicGrid: $("periodicGrid"),
  ionGrid: $("ionGrid"),
  calculatorInput: $("calculatorInput"),
  calculatorResult: $("calculatorResult"),
  pathStack: $("pathStack"),
  resultsList: $("resultsList"),
  finalStatus: $("finalStatus"),
  emailPassButton: $("emailPassButton"),
  retakeButton: $("retakeButton"),
  workTab: $("workTab"),
  summaryTab: $("summaryTab"),
  workView: $("workView"),
  summaryView: $("summaryView")
};

function currentProblem() {
  return state.test[state.problemIndex];
}

function currentStep() {
  return currentProblem().steps[state.stepIndex];
}

function answerKey(problemIndex = state.problemIndex, stepIndex = state.stepIndex) {
  return `${problemIndex}:${stepIndex}`;
}

function createTestFromPool(pool, count) {
  return Array.from({ length: count }, (_, index) => {
    const source = pool[index % pool.length];
    const cycle = Math.floor(index / pool.length) + 1;
    return {
      ...source,
      instanceId: `${source.id}-${index}`,
      title: count > pool.length ? `${source.title} ${cycle}` : source.title,
      steps: source.steps.map((step, stepIndex) => prepareStepChoices(step, index, stepIndex))
    };
  });
}

function prepareStepChoices(step, problemIndex, stepIndex) {
  const choices = [...step.choices];
  const correctText = choices[step.correct];
  const longestLength = Math.max(...choices.map((choice) => choice.length));

  if (correctText.length === longestLength) {
    const targetIndex = choices.findIndex((_, index) => index !== step.correct);
    choices[targetIndex] = `${choices[targetIndex]} after the extra conversion`;
  }

  const rotation = (problemIndex + stepIndex) % choices.length;
  const rotatedChoices = choices.map((_, index) => choices[(index + rotation) % choices.length]);
  const rotatedCorrect = (step.correct - rotation + choices.length) % choices.length;

  return {
    ...step,
    choices: rotatedChoices,
    correct: rotatedCorrect
  };
}

function buildTest() {
  const level = elements.levelSelect.value;
  const focus = elements.focusSelect.value;
  let pool = problemBank.filter((problem) => {
    const levelMatch = level === "all" || problem.level === level;
    const focusMatch = focus === "all" || problem.focus === focus;
    return levelMatch && focusMatch;
  });

  if (pool.length === 0) {
    pool = problemBank.slice();
  }

  state = {
    test: createTestFromPool(pool, TEST_QUESTION_COUNT),
    problemIndex: 0,
    stepIndex: 0,
    answers: {},
    attempts: 0,
    correct: 0
  };
  elements.countInput.value = TEST_QUESTION_COUNT;
  showWork();
  render();
}

function retakeCurrentTest() {
  state = {
    ...state,
    problemIndex: 0,
    stepIndex: 0,
    answers: {},
    attempts: 0,
    correct: 0
  };
  showWork();
  render();
}

function render() {
  const problem = currentProblem();
  const step = currentStep();
  const saved = state.answers[answerKey()];

  elements.problemNumber.textContent = state.problemIndex + 1;
  elements.problemTotal.textContent = state.test.length;
  elements.stepNumber.textContent = state.stepIndex + 1;
  elements.stepTotal.textContent = problem.steps.length;
  elements.accuracyValue.textContent = state.attempts ? `${Math.round((state.correct / state.attempts) * 100)}%` : "100%";

  elements.problemType.textContent = problem.type;
  elements.problemTitle.textContent = problem.title;
  elements.difficultyBadge.textContent = problem.difficulty;
  elements.equationText.textContent = problem.equation;
  elements.problemPrompt.textContent = problem.prompt;
  elements.stepSkill.textContent = step.skill;
  elements.stepQuestion.textContent = step.question;

  renderStepMap(problem);
  renderChoices(step, saved);
  renderFeedback(step, saved);
  renderPath(problem);
  renderResults();

  elements.previousButton.disabled = state.problemIndex === 0 && state.stepIndex === 0;
  elements.nextButton.disabled = !saved;
  elements.nextButton.textContent = getNextLabel(problem);
}

function renderStepMap(problem) {
  elements.stepMap.innerHTML = "";
  problem.steps.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className = "step-dot";
    if (index < state.stepIndex) dot.classList.add("done");
    if (index === state.stepIndex) dot.classList.add("current");
    elements.stepMap.appendChild(dot);
  });
}

function renderChoices(step, saved) {
  elements.choices.innerHTML = "";
  step.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.innerHTML = `<span class="choice-marker">${String.fromCharCode(65 + index)}</span><span>${choice}</span>`;

    if (saved) {
      if (index === step.correct) button.classList.add("correct");
      if (index === saved.selected && !saved.isCorrect) button.classList.add("incorrect");
      button.disabled = true;
      button.setAttribute("aria-disabled", "true");
    } else {
      button.addEventListener("click", () => chooseAnswer(index), { once: true });
    }

    elements.choices.appendChild(button);
  });
}

function renderFeedback(step, saved) {
  if (!saved) {
    elements.feedback.innerHTML = "<p>Select an answer to check this step.</p>";
    return;
  }

  if (saved.isCorrect) {
    elements.feedback.innerHTML = `<p><strong>Correct.</strong> ${step.explanation}</p>`;
  } else {
    elements.feedback.innerHTML = `<p><strong>Incorrect.</strong> ${saved.reason} The correct answer is <strong>${step.choices[step.correct]}</strong>. ${step.explanation}</p>`;
  }
}

function renderPath(problem) {
  elements.pathStack.innerHTML = "";
  problem.steps.forEach((step, index) => {
    const card = document.createElement("div");
    card.className = "path-card";
    const answer = state.answers[answerKey(state.problemIndex, index)];
    const status = answer ? answer.isCorrect ? "Completed" : "Reviewed" : index === state.stepIndex ? "Current step" : "Waiting";
    card.innerHTML = `<strong>${index + 1}. ${step.skill}</strong><p>${status}</p><div class="formula">${answer ? step.work : ""}</div>`;
    elements.pathStack.appendChild(card);
  });
}

function renderResults() {
  elements.resultsList.innerHTML = "";
  const accuracy = state.attempts ? Math.round((state.correct / state.attempts) * 100) : 100;
  const isComplete = isTestComplete();
  const passed = isComplete && accuracy >= PASSING_ACCURACY;

  elements.finalStatus.className = `final-status ${isComplete ? (passed ? "pass" : "retake") : ""}`;
  elements.finalStatus.innerHTML = isComplete
    ? `<strong>${passed ? "Pass with a grade of A" : "Retake"}</strong><p>Final accuracy: ${accuracy}%</p>`
    : `<strong>In progress</strong><p>Complete all 30 questions to receive your result.</p>`;
  elements.emailPassButton.hidden = !passed;
  elements.retakeButton.hidden = !isComplete || passed;

  state.test.forEach((problem, problemIndex) => {
    const completed = problem.steps.filter((_, stepIndex) => state.answers[answerKey(problemIndex, stepIndex)]).length;
    const card = document.createElement("div");
    card.className = "result-card";
    card.innerHTML = `<strong>${problem.title}</strong><p>${completed}/${problem.steps.length} guided steps complete</p>`;
    elements.resultsList.appendChild(card);
  });
}

function emailPassingResult() {
  const teacherEmail = elements.teacherEmailInput.value.trim();
  const studentName = elements.studentNameInput.value.trim() || "A student";
  const accuracy = state.attempts ? Math.round((state.correct / state.attempts) * 100) : 100;

  if (!teacherEmail) {
    elements.finalStatus.innerHTML = "<strong>Teacher email needed</strong><p>Enter your teacher email on the left, then send the passing result.</p>";
    elements.finalStatus.className = "final-status retake";
    return;
  }

  const subject = `Stoichiometry Test Passed - ${studentName}`;
  const body = [
    `${studentName} passed the Chemistry 1 Stoichiometry Test.`,
    "",
    `Result: Pass with a grade of A`,
    `Accuracy: ${accuracy}%`,
    `Questions: ${state.test.length}`,
    `Guided steps answered correctly: ${state.correct}`,
    `Total attempts: ${state.attempts}`,
    `Completed: ${new Date().toLocaleString()}`
  ].join("\n");

  window.location.href = `mailto:${encodeURIComponent(teacherEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function isTestComplete() {
  return state.test.every((problem, problemIndex) =>
    problem.steps.every((_, stepIndex) => state.answers[answerKey(problemIndex, stepIndex)])
  );
}

function chooseAnswer(index) {
  const step = currentStep();
  const key = answerKey();
  if (state.answers[key]) return;

  const isCorrect = index === step.correct;

  state.attempts += 1;
  if (isCorrect) {
    state.correct += 1;
  }

  state.answers[key] = {
    selected: index,
    isCorrect,
    reason: getReason(step, index)
  };

  render();
}

function getReason(step, selected) {
  const selectedText = step.choices[selected];
  if (selectedText.includes("g/mol") || selectedText.includes("g ")) {
    return "Check whether this step needs moles, grams, a mole ratio, or the final unit before choosing.";
  }
  if (selectedText.includes("22.4")) {
    return "The 22.4 L/mol conversion only applies after you have moles of a gas at STP.";
  }
  return "Look back at the balanced equation and keep the unit you want on top of the conversion factor.";
}

function showHint() {
  const step = currentStep();
  elements.feedback.innerHTML = `<p><strong>Hint.</strong> ${step.hint}</p>`;
}

function getNextLabel(problem) {
  const isLastStep = state.stepIndex === problem.steps.length - 1;
  const isLastProblem = state.problemIndex === state.test.length - 1;
  if (isLastStep && isLastProblem) return "See Results";
  if (isLastStep) return "Next Question";
  return "Next Step";
}

function nextStep() {
  const problem = currentProblem();
  if (state.stepIndex < problem.steps.length - 1) {
    state.stepIndex += 1;
  } else if (state.problemIndex < state.test.length - 1) {
    state.problemIndex += 1;
    state.stepIndex = 0;
  } else {
    showSummary();
  }
  render();
}

function previousStep() {
  if (state.stepIndex > 0) {
    state.stepIndex -= 1;
  } else if (state.problemIndex > 0) {
    state.problemIndex -= 1;
    state.stepIndex = currentProblem().steps.length - 1;
  }
  render();
}

function showWork() {
  elements.workTab.classList.add("active");
  elements.summaryTab.classList.remove("active");
  elements.workView.hidden = false;
  elements.summaryView.hidden = true;
}

function showSummary() {
  elements.summaryTab.classList.add("active");
  elements.workTab.classList.remove("active");
  elements.summaryView.hidden = false;
  elements.workView.hidden = true;
}

function renderPeriodicChart() {
  elements.periodicGrid.innerHTML = "";
  periodicElements.forEach((element) => {
    const tile = document.createElement("div");
    tile.className = `element-tile ${element.type}`;
    tile.style.gridColumn = element.col;
    tile.style.gridRow = element.row;
    tile.innerHTML = `
      <div class="element-top"><span>${element.number}</span><span>${element.charge}</span></div>
      <div class="element-symbol">${element.symbol}</div>
      <p class="element-name">${element.name}</p>
      <p class="element-mass">${element.mass} g/mol</p>
    `;
    elements.periodicGrid.appendChild(tile);
  });

  elements.ionGrid.innerHTML = "";
  commonIons.forEach((ion) => {
    const card = document.createElement("div");
    card.className = "ion-card";
    card.innerHTML = `
      <strong>${ion.formula}</strong>
      <span>${ion.charge}</span>
      <p>${ion.name}</p>
    `;
    elements.ionGrid.appendChild(card);
  });
}

function openTool(toolName) {
  elements.toolOverlay.hidden = false;
  elements.periodicDrawer.hidden = toolName !== "periodic";
  elements.calculatorDrawer.hidden = toolName !== "calculator";

  if (toolName === "calculator") {
    elements.calculatorInput.focus();
  }
}

function closeTools() {
  elements.toolOverlay.hidden = true;
  elements.periodicDrawer.hidden = true;
  elements.calculatorDrawer.hidden = true;
}

function calculateExpression() {
  const expression = elements.calculatorInput.value.trim();
  if (!expression) {
    elements.calculatorResult.classList.remove("error");
    elements.calculatorResult.textContent = "Enter a calculation.";
    return;
  }

  if (!/^[\d+\-*/().\s]+$/.test(expression)) {
    elements.calculatorResult.classList.add("error");
    elements.calculatorResult.textContent = "Use numbers and arithmetic symbols only.";
    return;
  }

  try {
    const result = Function(`"use strict"; return (${expression});`)();
    if (!Number.isFinite(result)) {
      throw new Error("Invalid result");
    }
    elements.calculatorResult.classList.remove("error");
    elements.calculatorResult.textContent = Number.parseFloat(result.toPrecision(8)).toString();
  } catch {
    elements.calculatorResult.classList.add("error");
    elements.calculatorResult.textContent = "Check the expression.";
  }
}

function handleCalculatorKey(event) {
  const button = event.target.closest("button");
  if (!button) return;

  const action = button.dataset.action;
  if (action === "clear") {
    elements.calculatorInput.value = "";
    calculateExpression();
    elements.calculatorInput.focus();
    return;
  }

  if (action === "backspace") {
    elements.calculatorInput.value = elements.calculatorInput.value.slice(0, -1);
    calculateExpression();
    elements.calculatorInput.focus();
    return;
  }

  if (action === "equals") {
    calculateExpression();
    elements.calculatorInput.focus();
    return;
  }

  elements.calculatorInput.value += button.textContent;
  calculateExpression();
  elements.calculatorInput.focus();
}

elements.buildButton.addEventListener("click", buildTest);
elements.resetButton.addEventListener("click", buildTest);
elements.retakeButton.addEventListener("click", retakeCurrentTest);
elements.emailPassButton.addEventListener("click", emailPassingResult);
elements.hintButton.addEventListener("click", showHint);
elements.periodicButton.addEventListener("click", () => openTool("periodic"));
elements.calculatorButton.addEventListener("click", () => openTool("calculator"));
elements.closePeriodicButton.addEventListener("click", closeTools);
elements.closeCalculatorButton.addEventListener("click", closeTools);
elements.toolOverlay.addEventListener("click", (event) => {
  if (event.target === elements.toolOverlay) closeTools();
});
elements.calculatorInput.addEventListener("input", calculateExpression);
document.querySelector(".calculator-keys").addEventListener("click", handleCalculatorKey);
elements.nextButton.addEventListener("click", nextStep);
elements.previousButton.addEventListener("click", previousStep);
elements.workTab.addEventListener("click", showWork);
elements.summaryTab.addEventListener("click", showSummary);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !elements.toolOverlay.hidden) {
    closeTools();
  }
});

renderPeriodicChart();
render();
