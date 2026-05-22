# ANSWERS

## 1. How to run

Download the project folder and open `index.html` in a browser.

You can also use the VS Code Live Server extension.

No additional installations are required.

---

## 2. Stack & design choices

I chose vanilla HTML, CSS, and JavaScript because the assessment requirements are fully achievable without frameworks, and using plain JavaScript keeps the project lightweight and easy to run on any browser.

### Design Decision 1

I highlighted today's column using a soft purple background so users can immediately orient themselves inside the weekly grid without overwhelming the rest of the UI.

### Design Decision 2

I used a horizontal-scroll grid layout on smaller screens so habit names remain visible while still allowing all seven days to fit naturally on mobile devices.

The week starts on Monday because it aligns better with productivity workflows and calendar standards used in many digital tools.

The streak counts consecutive completed days up to today. If today's habit is unchecked, the streak stops immediately because it reflects the user's current active consistency.

---

## 3. Responsive & accessibility

On a 360px mobile screen, the layout becomes vertically stacked and the grid can scroll horizontally for better usability.

On a 1440px laptop screen, the app expands into a spacious dashboard layout with clear visual hierarchy and larger spacing.

### Accessibility handled

- Semantic buttons were used for all interactive actions.
- Hover and focus states are visually clear.
- Large click/tap targets improve usability.

### Accessibility skipped

I did not implement advanced screen reader announcements for habit completion updates due to time constraints.

---

## 4. AI usage

I used ChatGPT for:

- Planning the folder structure
- Designing the streak calculation logic
- Improving responsive grid behavior
- Refining visual hierarchy ideas

One AI-generated solution used fixed-width columns for all screen sizes. I changed this to a horizontally scrollable responsive grid because fixed columns became unusable on narrow mobile screens.

---

## 5. Honest gap

The rename interaction currently uses a browser prompt, which is functional but not polished.

With another day, I would replace it with an inline editable input field and add smoother animations and validation feedback.