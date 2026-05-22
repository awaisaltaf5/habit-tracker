# ANSWERS

---

## 1. How to run

### Local Run

Download the project folder and open:

index.html

in a browser.

You can also use the VS Code Live Server extension.

No additional installations or dependencies are required.

### Deployed Version

Live URL:
https://habit-tracker11.netlify.app/

---

## 2. Stack & design choices

I chose vanilla HTML, CSS, and JavaScript because the assessment requirements could be fully implemented without a frontend framework. Using plain JavaScript keeps the application lightweight, fast, and easy to run on any browser without setup complexity.

### Design Decision 1

I highlighted today's column using a soft purple background so users can immediately identify the current day while scanning the weekly grid. This improves orientation without distracting from the completion states.

### Design Decision 2

I used a horizontally scrollable grid layout on smaller screens instead of shrinking the cells excessively. This keeps the habit names readable and preserves tap targets for mobile usability.

### Week Start Choice

The week starts on Monday because it aligns better with productivity-focused workflows and common calendar conventions.

### Streak Logic Choice

The streak counts consecutive completed days up to today. If today's task is not completed, the streak immediately stops because it reflects the user's active current consistency.

---

## 3. Responsive & accessibility

### Responsive Behavior

On a 360px-wide mobile screen:

- The layout stacks vertically
- The habit grid becomes horizontally scrollable
- Buttons remain large enough for touch interaction

On a 1440px laptop screen:

- The layout expands into a spacious dashboard
- Grid spacing increases naturally
- Visual hierarchy becomes clearer with more whitespace

### Accessibility handled

- Semantic buttons are used for all actions
- Interactive elements have hover feedback
- Large tap targets improve mobile usability
- Color contrast remains readable against backgrounds

### Accessibility skipped

I did not implement advanced screen reader announcements for completion updates due to time limitations.

---

## 4. AI usage

I used ChatGPT during development for:

- Planning the project structure
- Designing the streak calculation logic
- Improving responsive layout behavior
- Refining UI hierarchy and spacing ideas

One AI-generated solution initially used fixed-width columns for all screen sizes. I changed this to a horizontally scrollable layout on mobile devices because fixed columns caused usability issues on narrow screens.

I also modified the original streak calculation approach to better reflect consecutive-day consistency up to the current date.

---

## 5. Honest gap

The rename interaction currently uses the browser's built-in prompt dialog, which works functionally but does not provide the best user experience.

With additional time, I would replace it with an inline editable input field, smoother transitions, and validation feedback for a more polished interaction.