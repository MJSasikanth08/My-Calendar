# 📅 React Calendar App

A responsive and interactive calendar application built using React. It supports monthly navigation, a sidebar view of all events, and lets users add new events using a modal form.

## ✨ Features

- 📆 Month grid with fixed-size day cells
- 🗂 Sidebar listing all scheduled events
- ➕ Modal for adding new events
- 🖍 Color-coded overlapping events
- ⏪⏩ Navigate to previous/next months
- 💾 Events loaded from a static JSON file (`public/events.json`)


## 📁 Directory Structure

```

react-calendar-app/
├── public/
│   └── events.json           # JSON file with initial events
├── src/
│   ├── components/
│   │   ├── Calendar.jsx      # Main calendar component
│   │   ├── Calendar.css      # Styles for the calendar
│   │   ├── Sidebar.jsx       # Sidebar for displaying all events
│   │   └── AddEventModal.jsx # Modal for adding new events
│   └── App.js                # Root app component
├── package.json
└── README.md

````

## 🚀 Getting Started

### 1. Clone the Repository

```
git clone https://github.com/your-username/react-calendar-app.git
cd react-calendar-app
````

### 2. Install Dependencies

```
npm install
```

### 3. Start the App

```
npm start
```

This will launch the app in your browser at `http://localhost:3000`.

### 4. Add Events

Modify `public/events.json` to pre-load events:

```json
[
  {
    "title": "Team Meeting",
    "date": "2025-05-15T10:00:00"
  },
  {
    "title": "Product Review",
    "date": "2025-05-16T14:00:00"
  }
]
```


## 🧰 Tech Stack

* **React** for UI components
* **Day.js** for date management
* **CSS** for layout and styling
