let players = [];

// Fetch from API-style path
fetch("./api/players.json")
  .then(res => res.json())
  .then(data => {
    players = data;
    renderPlayers(players);
  })
  .catch(err => console.error("Error loading data:", err));

// Render players (with safe fallbacks)
function renderPlayers(data) {
  const container = document.getElementById("players-container");
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "<p>No players available</p>";
    return;
  }

  data.forEach(player => {
    const div = document.createElement("div");
    div.className = "player-card";

    const name = player.name || "Unknown Player";
    const position = player.position || "N/A";
    const ppg = player.pointsPerGame ?? "0";

    div.innerHTML = `
      <h3>#${player.jerseyNumber} ${name}</h3>
      <p>Position: ${position}</p>
      <p>PPG: ${ppg}</p>
    `;

    container.appendChild(div);
  });
}

// Sort by points
document.getElementById("sortBtn").addEventListener("click", () => {
  const sorted = [...players].sort((a, b) => b.pointsPerGame - a.pointsPerGame);
  renderPlayers(sorted);
});

// Filter by position
document.getElementById("filterPosition").addEventListener("change", (e) => {
  const value = e.target.value;

  if (value === "all") {
    renderPlayers(players);
  } else {
    const filtered = players.filter(
      p => p.position === value || p.position.includes(value)
    );
    renderPlayers(filtered);
  }
});

// TEST SYSTEM
function runTests() {
  let passed = 0;
  let total = 0;

  function test(condition, message) {
    total++;
    if (condition) {
      passed++;
    } else {
      console.error("Failed:", message);
    }
  }

  // Data tests
  test(players.length > 0, "Players should not be empty");
  test(players[0].name !== undefined, "Player must have name");
  test(players[0].jerseyNumber !== undefined, "Player must have jersey number");

  // UI test
  renderPlayers(players);
  const cards = document.querySelectorAll(".player-card");
  test(cards.length === players.length, "UI should match data length");

  // Non-mutation test
  const before = JSON.stringify(players);
  renderPlayers(players);
  test(JSON.stringify(players) === before, "Render should not mutate data");

  // Edge case: empty array
  renderPlayers([]);
  test(
    document.body.innerText.includes("No players"),
    "Should show empty message"
  );

  // Extra edge: sorting correctness
  const sorted = [...players].sort((a,b)=>b.pointsPerGame - a.pointsPerGame);
  test(
    sorted[0].pointsPerGame >= sorted[1].pointsPerGame,
    "Sorting should be descending"
  );

  document.getElementById("test-results").innerText =
    `Passed ${passed}/${total} tests`;
}

document.getElementById("runTests").addEventListener("click", runTests);
