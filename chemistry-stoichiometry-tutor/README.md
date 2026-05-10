# Stoichiometry Test Studio

An interactive Chemistry 1 practice app focused on teaching stoichiometry through guided multiple-choice steps.

## Open the app

Open `index.html` in a browser on your Mac.

## What it does now

- Builds a 30-question stoichiometry test by level and focus area.
- Walks students through each problem one step at a time.
- Gives multiple-choice checks for setup, mole ratios, limiting reactants, molar mass, and final answers.
- Shows hints, explanations, progress, accuracy, and a dimensional-analysis path.
- Provides a standard-layout periodic chart with common ion charges, a polyatomic ion reference, and a calculator from every guided question.
- Shows "Pass with a grade of A" at 90% accuracy or higher; otherwise it prompts a retake of the same test.
- Opens a prefilled completion email to the teacher when a student passes.

## Sending to students

Email clients will not reliably run an interactive HTML app as an attachment. Put the folder on a simple web host, then email students the web link.

Good starter options:

- GitHub Pages
- Netlify
- Google Drive shared folder set to download/open the HTML file

For fully automatic pass emails without the student clicking a mail button, add a small backend or service such as Google Apps Script, Firebase, Netlify Forms, or Formspree.

## Current problem types

- Mole-to-mass stoichiometry
- Mass-to-mass stoichiometry
- Limiting reactant
- Gas volume at STP

## Good next additions

- Add a larger editable question bank.
- Add student profiles and saved progress.
- Add teacher mode for exporting generated tests.
- Wrap the app with Tauri, Electron, or SwiftUI WebView for a native macOS application.
