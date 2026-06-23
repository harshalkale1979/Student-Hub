# Student Hub

A free, all-in-one dashboard for polytechnic and engineering students. Built as static HTML/CSS/JS — no build tools, no server, no signup required.


## Features

- **GPA Calculator** — enter subjects, credits, and grades to get your SGPA, and save semesters toward a running CGPA.
- **Attendance Tracker** — log attended vs. total classes per subject; see exactly how many classes you can miss while staying above your institute's minimum requirement.
- **Study Planner** — task list with subject tags, due dates, and priority levels, plus a live weekly completion ring.
- **Notes** — quick subject-tagged notes with search and filtering, saved automatically.
- **Timetable Generator** — build a weekly class grid from your lecture slots; printable.
- **Video Library** — one-click YouTube searches organized by subject and topic, for fast access to explainer videos.

All data is stored in the browser's `localStorage` — nothing is sent to any server.

## File structure

```
student-hub/
├── index.html                  → dashboard / home page
├── assets/
│   ├── css/theme.css            → all styling (colors, layout, components)
│   └── js/shell.js              → sidebar/mobile menu + shared storage helper
└── pages/
    ├── gpa-calculator.html
    ├── attendance-tracker.html
    ├── study-planner.html
    ├── notes.html
    ├── timetable-generator.html
    ├── resources.html           → video library
    └── about.html               → help + GitHub Pages setup guide
```


- **Grade scale:** edit the `gradePoints` object in `pages/gpa-calculator.html`.
- **Video topics:** edit the `subjects` array in `pages/resources.html`.

## License

Free to use, modify, and share for personal or educational purposes.
