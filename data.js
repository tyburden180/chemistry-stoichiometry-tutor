const TEST_QUESTION_COUNT = 30;
const PASSING_ACCURACY = 90;

const problemBank = [
  {
    id: "water-from-hydrogen",
    title: "Hydrogen gas forms water",
    type: "Mass to mass",
    focus: "mass-mass",
    level: "intro",
    difficulty: "Intro",
    equation: "2H₂ + O₂ → 2H₂O",
    prompt: "If 5.00 mol H₂ reacts with excess O₂, how many grams of H₂O are produced?",
    steps: [
      {
        skill: "Identify known and target",
        question: "What quantity are we starting with?",
        choices: ["5.00 mol H₂", "5.00 g H₂O", "2 mol O₂", "18.02 g H₂"],
        correct: 0,
        hint: "The starting amount is the number given in the problem before any conversion.",
        explanation: "The problem gives 5.00 mol H₂. That is the known amount we will convert into grams of H₂O.",
        work: "Known: 5.00 mol H₂"
      },
      {
        skill: "Choose mole ratio",
        question: "Which mole ratio converts from H₂ to H₂O?",
        choices: ["2 mol H₂O / 2 mol H₂", "1 mol O₂ / 2 mol H₂O", "2 mol H₂ / 1 mol O₂", "18.02 g H₂O / 1 mol H₂O"],
        correct: 0,
        hint: "Use coefficients from the balanced equation, with the target chemical on top.",
        explanation: "The balanced equation says 2 mol H₂ produce 2 mol H₂O, so the ratio is 2 mol H₂O / 2 mol H₂.",
        work: "5.00 mol H₂ × (2 mol H₂O / 2 mol H₂)"
      },
      {
        skill: "Calculate target moles",
        question: "How many moles of H₂O are produced?",
        choices: ["2.50 mol H₂O", "5.00 mol H₂O", "10.0 mol H₂O", "18.02 mol H₂O"],
        correct: 1,
        hint: "The coefficients are equal here, so the mole amount stays the same.",
        explanation: "Because the H₂:H₂O ratio is 2:2, 5.00 mol H₂ makes 5.00 mol H₂O.",
        work: "5.00 mol H₂O"
      },
      {
        skill: "Use molar mass",
        question: "Which molar mass should convert moles of H₂O to grams?",
        choices: ["2.016 g/mol", "16.00 g/mol", "18.02 g/mol", "32.00 g/mol"],
        correct: 2,
        hint: "Add two hydrogens and one oxygen.",
        explanation: "H₂O has a molar mass of about 18.02 g/mol.",
        work: "5.00 mol H₂O × (18.02 g H₂O / 1 mol H₂O)"
      },
      {
        skill: "Finish calculation",
        question: "What final mass of water should be reported?",
        choices: ["36.0 g H₂O", "45.1 g H₂O", "90.1 g H₂O", "180 g H₂O"],
        correct: 2,
        hint: "Multiply 5.00 by 18.02 and keep three significant figures.",
        explanation: "5.00 × 18.02 = 90.10, which rounds to 90.1 g H₂O.",
        work: "Final: 90.1 g H₂O"
      }
    ]
  },
  {
    id: "calcium-carbonate",
    title: "Calcium carbonate decomposes",
    type: "Mass to mass",
    focus: "mass-mass",
    level: "intro",
    difficulty: "Intro",
    equation: "CaCO₃ → CaO + CO₂",
    prompt: "When 25.0 g CaCO₃ decomposes completely, what mass of CO₂ is produced?",
    steps: [
      {
        skill: "Start with mass",
        question: "What must happen before using the mole ratio?",
        choices: ["Convert g CaCO₃ to mol CaCO₃", "Convert CO₂ to CaO", "Divide by Avogadro's number", "Use 22.4 L/mol immediately"],
        correct: 0,
        hint: "Balanced equation coefficients compare moles, not grams.",
        explanation: "Stoichiometric ratios work in moles, so grams of CaCO₃ must become moles of CaCO₃ first.",
        work: "25.0 g CaCO₃ × (1 mol CaCO₃ / 100.09 g CaCO₃)"
      },
      {
        skill: "Calculate moles",
        question: "How many moles of CaCO₃ are in 25.0 g?",
        choices: ["0.250 mol", "2.50 mol", "4.00 mol", "44.0 mol"],
        correct: 0,
        hint: "25.0 ÷ 100.09 is close to one quarter.",
        explanation: "25.0 g ÷ 100.09 g/mol = 0.2498 mol, which is 0.250 mol to three significant figures.",
        work: "0.250 mol CaCO₃"
      },
      {
        skill: "Choose mole ratio",
        question: "What is the CaCO₃ to CO₂ mole ratio?",
        choices: ["1 mol CO₂ / 1 mol CaCO₃", "1 mol CaCO₃ / 2 mol CO₂", "2 mol CO₂ / 1 mol CaCO₃", "44.01 g CO₂ / 1 mol CaCO₃"],
        correct: 0,
        hint: "Both coefficients are 1 in the balanced equation.",
        explanation: "One mole of CaCO₃ produces one mole of CO₂.",
        work: "0.250 mol CaCO₃ × (1 mol CO₂ / 1 mol CaCO₃)"
      },
      {
        skill: "Convert to grams",
        question: "Which molar mass finishes the CO₂ calculation?",
        choices: ["28.01 g/mol", "40.08 g/mol", "44.01 g/mol", "100.09 g/mol"],
        correct: 2,
        hint: "CO₂ contains one carbon and two oxygens.",
        explanation: "CO₂ has a molar mass of 44.01 g/mol.",
        work: "0.250 mol CO₂ × (44.01 g CO₂ / 1 mol CO₂)"
      },
      {
        skill: "Final answer",
        question: "What mass of CO₂ is produced?",
        choices: ["6.25 g CO₂", "11.0 g CO₂", "25.0 g CO₂", "44.0 g CO₂"],
        correct: 1,
        hint: "0.250 × 44.01 is about 11.",
        explanation: "0.250 mol × 44.01 g/mol = 11.0 g CO₂.",
        work: "Final: 11.0 g CO₂"
      }
    ]
  },
  {
    id: "ammonia-limiting",
    title: "Ammonia synthesis with a limiting reactant",
    type: "Limiting reactant",
    focus: "limiting",
    level: "college",
    difficulty: "College prep",
    equation: "N₂ + 3H₂ → 2NH₃",
    prompt: "If 4.00 mol N₂ and 9.00 mol H₂ react, which reactant limits the reaction and how many grams of NH₃ can form?",
    steps: [
      {
        skill: "Check each reactant",
        question: "Why do we test both starting chemicals?",
        choices: ["Either one could run out first", "Both have the same coefficient", "The product is a gas", "Molar mass decides the limiting reactant"],
        correct: 0,
        hint: "A limiting reactant problem gives amounts for more than one reactant.",
        explanation: "The reactant that produces less product is the limiting reactant, so both starting amounts must be compared.",
        work: "Compare product from 4.00 mol N₂ and 9.00 mol H₂"
      },
      {
        skill: "Product from nitrogen",
        question: "How many moles of NH₃ could 4.00 mol N₂ make?",
        choices: ["2.00 mol NH₃", "4.00 mol NH₃", "8.00 mol NH₃", "12.0 mol NH₃"],
        correct: 2,
        hint: "1 mol N₂ makes 2 mol NH₃.",
        explanation: "4.00 mol N₂ × (2 mol NH₃ / 1 mol N₂) = 8.00 mol NH₃.",
        work: "4.00 mol N₂ × (2 mol NH₃ / 1 mol N₂) = 8.00 mol NH₃"
      },
      {
        skill: "Product from hydrogen",
        question: "How many moles of NH₃ could 9.00 mol H₂ make?",
        choices: ["3.00 mol NH₃", "6.00 mol NH₃", "9.00 mol NH₃", "18.0 mol NH₃"],
        correct: 1,
        hint: "3 mol H₂ makes 2 mol NH₃.",
        explanation: "9.00 mol H₂ × (2 mol NH₃ / 3 mol H₂) = 6.00 mol NH₃.",
        work: "9.00 mol H₂ × (2 mol NH₃ / 3 mol H₂) = 6.00 mol NH₃"
      },
      {
        skill: "Identify limiting reactant",
        question: "Which reactant is limiting?",
        choices: ["N₂, because it makes more NH₃", "H₂, because it makes less NH₃", "NH₃, because it is the product", "Neither, because all coefficients are balanced"],
        correct: 1,
        hint: "The smaller possible amount of product wins.",
        explanation: "Hydrogen can make only 6.00 mol NH₃, so H₂ runs out first and limits the reaction.",
        work: "Limiting reactant: H₂"
      },
      {
        skill: "Convert product to mass",
        question: "What mass of NH₃ can form from 6.00 mol?",
        choices: ["17.0 g NH₃", "51.1 g NH₃", "102 g NH₃", "153 g NH₃"],
        correct: 2,
        hint: "Use NH₃ molar mass, 17.03 g/mol.",
        explanation: "6.00 mol × 17.03 g/mol = 102 g NH₃ to three significant figures.",
        work: "Final: 102 g NH₃"
      }
    ]
  },
  {
    id: "oxygen-stp",
    title: "Potassium chlorate releases oxygen",
    type: "Gas volume at STP",
    focus: "gas",
    level: "college",
    difficulty: "College prep",
    equation: "2KClO₃ → 2KCl + 3O₂",
    prompt: "If 10.0 g KClO₃ decomposes, what volume of O₂ forms at STP?",
    steps: [
      {
        skill: "Mass to moles",
        question: "What is the first conversion?",
        choices: ["g KClO₃ to mol KClO₃", "mol O₂ to L O₂", "g KCl to mol KCl", "L O₂ to mol O₂"],
        correct: 0,
        hint: "The starting amount is a mass of reactant.",
        explanation: "Start by converting 10.0 g KClO₃ into moles of KClO₃.",
        work: "10.0 g KClO₃ × (1 mol KClO₃ / 122.55 g KClO₃)"
      },
      {
        skill: "Calculate moles reactant",
        question: "How many moles of KClO₃ is 10.0 g?",
        choices: ["0.0816 mol", "0.122 mol", "1.23 mol", "12.3 mol"],
        correct: 0,
        hint: "10.0 divided by 122.55 is a little over 0.08.",
        explanation: "10.0 g ÷ 122.55 g/mol = 0.0816 mol KClO₃.",
        work: "0.0816 mol KClO₃"
      },
      {
        skill: "Mole ratio",
        question: "Which ratio converts KClO₃ to O₂?",
        choices: ["3 mol O₂ / 2 mol KClO₃", "2 mol O₂ / 3 mol KClO₃", "2 mol KCl / 2 mol KClO₃", "22.4 L O₂ / 1 mol KClO₃"],
        correct: 0,
        hint: "Use the coefficients in front of KClO₃ and O₂.",
        explanation: "The equation shows 2 mol KClO₃ produce 3 mol O₂.",
        work: "0.0816 mol KClO₃ × (3 mol O₂ / 2 mol KClO₃)"
      },
      {
        skill: "Moles oxygen",
        question: "How many moles of O₂ are produced?",
        choices: ["0.0544 mol O₂", "0.0816 mol O₂", "0.122 mol O₂", "0.245 mol O₂"],
        correct: 2,
        hint: "Multiply 0.0816 by 3/2.",
        explanation: "0.0816 × 1.5 = 0.122 mol O₂.",
        work: "0.122 mol O₂"
      },
      {
        skill: "STP gas volume",
        question: "What volume of O₂ forms at STP?",
        choices: ["1.83 L O₂", "2.74 L O₂", "5.46 L O₂", "22.4 L O₂"],
        correct: 1,
        hint: "At STP, 1 mol of gas occupies 22.4 L.",
        explanation: "0.122 mol O₂ × 22.4 L/mol = 2.74 L O₂.",
        work: "Final: 2.74 L O₂"
      }
    ]
  },
  {
    id: "propane-combustion-moles",
    title: "Propane combustion mole ratio",
    type: "Mole to mole",
    focus: "mole-mole",
    level: "intro",
    difficulty: "Intro",
    equation: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O",
    prompt: "How many moles of O₂ are required to burn 3.00 mol C₃H₈ completely?",
    steps: [
      {
        skill: "Identify target",
        question: "Which substance are we solving for?",
        choices: ["O₂", "C₃H₈", "CO₂", "H₂O"],
        correct: 0,
        hint: "Look for the substance asked for after the phrase 'how many moles'.",
        explanation: "The problem asks for moles of O₂ required.",
        work: "Target: mol O₂"
      },
      {
        skill: "Choose mole ratio",
        question: "Which ratio should convert C₃H₈ to O₂?",
        choices: ["5 mol O₂ / 1 mol C₃H₈", "1 mol C₃H₈ / 5 mol O₂", "3 mol CO₂ / 1 mol C₃H₈", "4 mol H₂O / 5 mol O₂"],
        correct: 0,
        hint: "Put the target substance on top.",
        explanation: "The balanced equation shows 1 mol C₃H₈ needs 5 mol O₂.",
        work: "3.00 mol C₃H₈ × (5 mol O₂ / 1 mol C₃H₈)"
      },
      {
        skill: "Calculate moles",
        question: "How many moles of O₂ are needed?",
        choices: ["0.600 mol O₂", "3.00 mol O₂", "8.00 mol O₂", "15.0 mol O₂"],
        correct: 3,
        hint: "Multiply 3.00 by 5.",
        explanation: "3.00 mol C₃H₈ × 5 = 15.0 mol O₂.",
        work: "Final: 15.0 mol O₂"
      }
    ]
  },
  {
    id: "aluminum-oxide-mass",
    title: "Aluminum forms aluminum oxide",
    type: "Mass to mass",
    focus: "mass-mass",
    level: "intro",
    difficulty: "Intro",
    equation: "4Al + 3O₂ → 2Al₂O₃",
    prompt: "If 13.5 g Al reacts with excess oxygen, what mass of Al₂O₃ forms?",
    steps: [
      {
        skill: "Convert aluminum to moles",
        question: "How many moles of Al are in 13.5 g?",
        choices: ["0.250 mol Al", "0.500 mol Al", "1.50 mol Al", "27.0 mol Al"],
        correct: 1,
        hint: "Use aluminum's molar mass, 26.98 g/mol.",
        explanation: "13.5 g ÷ 26.98 g/mol = 0.500 mol Al.",
        work: "13.5 g Al × (1 mol Al / 26.98 g Al) = 0.500 mol Al"
      },
      {
        skill: "Apply mole ratio",
        question: "Which ratio converts Al to Al₂O₃?",
        choices: ["2 mol Al₂O₃ / 4 mol Al", "4 mol Al / 2 mol Al₂O₃", "3 mol O₂ / 4 mol Al", "101.96 g Al₂O₃ / 1 mol Al₂O₃"],
        correct: 0,
        hint: "The target compound belongs on top.",
        explanation: "The equation gives 4 mol Al for every 2 mol Al₂O₃.",
        work: "0.500 mol Al × (2 mol Al₂O₃ / 4 mol Al)"
      },
      {
        skill: "Find product moles",
        question: "How many moles of Al₂O₃ are produced?",
        choices: ["0.125 mol Al₂O₃", "0.250 mol Al₂O₃", "0.500 mol Al₂O₃", "1.00 mol Al₂O₃"],
        correct: 1,
        hint: "The ratio is one half as many moles of product.",
        explanation: "0.500 × 2/4 = 0.250 mol Al₂O₃.",
        work: "0.250 mol Al₂O₃"
      },
      {
        skill: "Convert product to grams",
        question: "What mass of Al₂O₃ forms?",
        choices: ["13.5 g Al₂O₃", "25.5 g Al₂O₃", "51.0 g Al₂O₃", "102 g Al₂O₃"],
        correct: 1,
        hint: "Use 101.96 g/mol for Al₂O₃.",
        explanation: "0.250 mol × 101.96 g/mol = 25.5 g Al₂O₃.",
        work: "Final: 25.5 g Al₂O₃"
      }
    ]
  },
  {
    id: "zinc-hydrochloric-acid",
    title: "Zinc reacts with hydrochloric acid",
    type: "Limiting reactant",
    focus: "limiting",
    level: "college",
    difficulty: "College prep",
    equation: "Zn + 2HCl → ZnCl₂ + H₂",
    prompt: "If 0.300 mol Zn reacts with 0.500 mol HCl, which reactant limits the reaction?",
    steps: [
      {
        skill: "Compare requirements",
        question: "How many moles of HCl are needed for 0.300 mol Zn?",
        choices: ["0.150 mol HCl", "0.300 mol HCl", "0.500 mol HCl", "0.600 mol HCl"],
        correct: 3,
        hint: "The equation needs 2 mol HCl for every 1 mol Zn.",
        explanation: "0.300 mol Zn would require 0.600 mol HCl.",
        work: "0.300 mol Zn × (2 mol HCl / 1 mol Zn) = 0.600 mol HCl"
      },
      {
        skill: "Identify shortage",
        question: "What does the comparison show?",
        choices: ["There is not enough HCl", "There is too much Zn", "Both reactants are exactly used", "ZnCl₂ limits the reaction"],
        correct: 0,
        hint: "Available HCl is 0.500 mol, but 0.600 mol is needed.",
        explanation: "Only 0.500 mol HCl is available, so HCl runs out first.",
        work: "0.500 mol HCl available < 0.600 mol HCl needed"
      },
      {
        skill: "Product from limiting reactant",
        question: "How many moles of H₂ can form?",
        choices: ["0.125 mol H₂", "0.250 mol H₂", "0.500 mol H₂", "1.00 mol H₂"],
        correct: 1,
        hint: "2 mol HCl makes 1 mol H₂.",
        explanation: "0.500 mol HCl × (1 mol H₂ / 2 mol HCl) = 0.250 mol H₂.",
        work: "Final: 0.250 mol H₂"
      }
    ]
  },
  {
    id: "sodium-chloride-precipitate",
    title: "Silver nitrate makes a precipitate",
    type: "Mass to mass",
    focus: "mass-mass",
    level: "college",
    difficulty: "College prep",
    equation: "AgNO₃ + NaCl → AgCl + NaNO₃",
    prompt: "What mass of AgCl forms from 8.50 g AgNO₃ with excess NaCl?",
    steps: [
      {
        skill: "Convert reactant mass",
        question: "How many moles of AgNO₃ are in 8.50 g?",
        choices: ["0.0250 mol AgNO₃", "0.0500 mol AgNO₃", "0.100 mol AgNO₃", "0.169 mol AgNO₃"],
        correct: 1,
        hint: "AgNO₃ has a molar mass of about 169.87 g/mol.",
        explanation: "8.50 g ÷ 169.87 g/mol = 0.0500 mol AgNO₃.",
        work: "8.50 g AgNO₃ × (1 mol / 169.87 g) = 0.0500 mol AgNO₃"
      },
      {
        skill: "Use reaction ratio",
        question: "What mole ratio connects AgNO₃ and AgCl?",
        choices: ["1 mol AgCl / 1 mol AgNO₃", "1 mol NaNO₃ / 1 mol NaCl", "143.32 g AgCl / 1 mol AgCl", "1 mol AgNO₃ / 1 mol AgCl"],
        correct: 0,
        hint: "Both coefficients are 1.",
        explanation: "AgNO₃ and AgCl have a 1:1 mole ratio.",
        work: "0.0500 mol AgNO₃ × (1 mol AgCl / 1 mol AgNO₃)"
      },
      {
        skill: "Final mass",
        question: "What mass of AgCl is produced?",
        choices: ["2.87 g AgCl", "5.00 g AgCl", "7.17 g AgCl", "14.3 g AgCl"],
        correct: 2,
        hint: "AgCl is 143.32 g/mol.",
        explanation: "0.0500 mol × 143.32 g/mol = 7.17 g AgCl.",
        work: "Final: 7.17 g AgCl"
      }
    ]
  },
  {
    id: "carbon-dioxide-volume",
    title: "Carbon dioxide gas at STP",
    type: "Gas volume at STP",
    focus: "gas",
    level: "intro",
    difficulty: "Intro",
    equation: "CaCO₃ → CaO + CO₂",
    prompt: "If 0.750 mol CaCO₃ decomposes, what volume of CO₂ forms at STP?",
    steps: [
      {
        skill: "Use mole ratio",
        question: "How many moles of CO₂ form from 0.750 mol CaCO₃?",
        choices: ["0.375 mol CO₂", "0.750 mol CO₂", "1.50 mol CO₂", "22.4 mol CO₂"],
        correct: 1,
        hint: "The equation has a 1:1 ratio.",
        explanation: "0.750 mol CaCO₃ produces 0.750 mol CO₂.",
        work: "0.750 mol CaCO₃ × (1 mol CO₂ / 1 mol CaCO₃) = 0.750 mol CO₂"
      },
      {
        skill: "Convert moles to volume",
        question: "Which conversion factor applies at STP?",
        choices: ["1 mol gas / 22.4 L", "22.4 L gas / 1 mol gas", "44.01 g CO₂ / 1 mol CO₂", "1 L gas / 273 K"],
        correct: 1,
        hint: "At STP, one mole of gas occupies 22.4 L.",
        explanation: "Use 22.4 L for every 1 mol of gas.",
        work: "0.750 mol CO₂ × (22.4 L CO₂ / 1 mol CO₂)"
      },
      {
        skill: "Final volume",
        question: "What volume of CO₂ forms?",
        choices: ["8.40 L CO₂", "16.8 L CO₂", "22.4 L CO₂", "33.6 L CO₂"],
        correct: 1,
        hint: "Multiply 0.750 by 22.4.",
        explanation: "0.750 × 22.4 = 16.8 L CO₂.",
        work: "Final: 16.8 L CO₂"
      }
    ]
  },
  {
    id: "nitrogen-hydrogen-moles",
    title: "Hydrogen needed for ammonia",
    type: "Mole to mole",
    focus: "mole-mole",
    level: "intro",
    difficulty: "Intro",
    equation: "N₂ + 3H₂ → 2NH₃",
    prompt: "How many moles of H₂ are needed to react with 2.50 mol N₂?",
    steps: [
      {
        skill: "Find coefficients",
        question: "What coefficient belongs to H₂?",
        choices: ["1", "2", "3", "6"],
        correct: 2,
        hint: "Look directly in front of H₂.",
        explanation: "The coefficient of H₂ is 3.",
        work: "H₂ coefficient: 3"
      },
      {
        skill: "Set up ratio",
        question: "Which mole ratio converts N₂ to H₂?",
        choices: ["3 mol H₂ / 1 mol N₂", "1 mol N₂ / 3 mol H₂", "2 mol NH₃ / 1 mol N₂", "1 mol H₂ / 2 mol NH₃"],
        correct: 0,
        hint: "H₂ is the target, so H₂ goes on top.",
        explanation: "One mole of N₂ requires three moles of H₂.",
        work: "2.50 mol N₂ × (3 mol H₂ / 1 mol N₂)"
      },
      {
        skill: "Calculate target moles",
        question: "How many moles of H₂ are required?",
        choices: ["0.833 mol H₂", "2.50 mol H₂", "5.00 mol H₂", "7.50 mol H₂"],
        correct: 3,
        hint: "Multiply 2.50 by 3.",
        explanation: "2.50 mol N₂ × 3 = 7.50 mol H₂.",
        work: "Final: 7.50 mol H₂"
      }
    ]
  }
];

