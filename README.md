# Basketball Player stats tracker

## Project Description

This is a small full-stack web application built that tracks Huntington Women's basketball players statistics such as points per game, position, and jersey numbers.

The backend data is served as JSON (simulating a Raspberry Pi API), and the frontend uses JavaScript to fetch, display, and interact with that data. Users can sort players by performance and filter them by position.

The goal of this project is to demonstrate understanding of:
- Client-server data flow using JSON
- DOM manipulation with JavaScript
- User interaction (sorting and filtering)
- Test-driven development using console-based assertions
- Clean data modeling and separation of concerns

---

##  Mini API Schema

The application uses a JSON file (`players.json`) as a simulated API endpoint.

### Data Shape

```json
{
  "id": 1,
  "name": "string",
  "jerseyNumber": "number",
  "position": "string",
  "pointsPerGame": "number"
}
```


## Field Descriptions

- **id**: Internal unique identifier for every player
- **name**: Player full name
- **jerseyNumber**: Official team jersey number
- **position**: Player position (G, F, C)
- **pointsPerGame**: Average points scored per game

---

# Component Model

## Frontend Structure

- **index.html**
  - Main layout of the application
  - Contains buttons, dropdowns, and container for player cards

- **styles.css**
  - Basic styling for layout and player cards

- **script.js**
  - Handles data fetching, rendering, sorting, filtering, and testing logic

---

## Main Functions

- `fetch()` → Loads player data from JSON file
- `renderPlayers(data)` → Displays player cards in the UI
- Sorting function → Orders players by points per game
- Filtering function → Filters players by position
- `runTests()` → Executes console-based test suite

---

#  User Interactions

## 1. Sort Players
- Button: **“Sort by Points”**
- Sorts players in descending order by points per game

## 2. Filter Players
- Dropdown menu (Position)
- Filters players by:
  - Guard (G)
  - Forward (F)
  - Center (C)

---

# Console Assertions

The application includes **6 automated tests**:

## Test 1: Data Exists
Ensures player data is not empty.

## Test 2: Data Shape Validation
Checks that each player has a valid name.

## Test 3: Jersey Number Exists
Ensures each player includes a jersey number field.

## Test 4: UI Rendering Match
Confirms number of UI cards matches number of players.

## Test 5: Non-Mutation Test
Ensures rendering does not modify original data.

## Test 6: Edge Case Handling
Ensures the app displays a message when no players exist.

---

# LLM Collaboration

## Prompt 1 (Planning)

> I’m building a small web app for a university web scripting class. i want to be able to track players stats on my team I have a Raspberry Pi serving JSON from /api/data.json. JSON shape is not sure so you tell me . I want to their points, rebounds, assists, and other basketball stats. Help me break this into 6–10 implementation steps and propose simple JavaScript or React components for each step. Include specific, testable expectations for each step.

### What I used:
- Step breakdown
- Component structure
- Interaction ideas
- Data validation tests
- UI count matching tests
- Edge case idea

### What I changed:
- Simplified features (removed favorites)
- Focused on sorting and filtering only
- Converted console.assert into a custom test runner
- Removed unnecessary complexity

---

# Reflection

I chose to simplify the data model by separating `id` and `jerseyNumber` and removing unnecessary features like favorites to keep the project clean and easier to maintain. I used the LLM to help structure the project steps, design test cases, and organize the frontend architecture.

---

#  Summary

This project demonstrates:

- Frontend development with JavaScript
- Working with JSON data
- Interactive UI features (sorting & filtering)
- Basic software testing with console assertions
- Use of AI tools for planning and refinement
