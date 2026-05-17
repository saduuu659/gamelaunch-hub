// -------------------------------
// GameLaunch Hub - Search System
// -------------------------------

// Central data source (you can expand this anytime)
const items = [
  {
    name: "GTA VI",
    type: "game",
    url: "game-detail.html",
    desc: "Upcoming open world action game"
  },
  {
    name: "Valorant Mobile",
    type: "game",
    url: "game-detail.html",
    desc: "Mobile FPS competitive game"
  },
  {
    name: "Call of Duty Next",
    type: "game",
    url: "game-detail.html",
    desc: "Next generation COD release"
  },
  {
    name: "AI Photo Editor",
    type: "app",
    url: "apps.html",
    desc: "AI powered photo editing app"
  },
  {
    name: "Chat App Pro",
    type: "app",
    url: "apps.html",
    desc: "Advanced messaging application"
  }
];

// -------------------------------
// Search logic
// -------------------------------

const searchInput = document.getElementById("search");
const gridContainer = document.querySelector(".grid");

if (searchInput) {
  searchInput.addEventListener("input", function () {
    const value = searchInput.value.toLowerCase().trim();

    // If empty search → show default content
    if (value === "") {
      renderDefault();
      return;
    }

    const results = items.filter(item =>
      item.name.toLowerCase().includes(value) ||
      item.type.toLowerCase().includes(value) ||
      item.desc.toLowerCase().includes(value)
    );

    renderResults(results);
  });
}

// -------------------------------
// Render functions
// -------------------------------

function renderResults(results) {
  if (!gridContainer) return;

  if (results.length === 0) {
    gridContainer.innerHTML = `
      <div class="card">
        <h3>No Results Found</h3>
        <p>Try searching for games or apps</p>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = results.map(item => `
    <div class="card">
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <p><b>Type:</b> ${item.type}</p>
      <a class="btn" href="${item.url}">Open</a>
    </div>
  `).join("");
}

// -------------------------------
// Default homepage content restore
// -------------------------------

function renderDefault() {
  if (!gridContainer) return;

  gridContainer.innerHTML = `
    <div class="card">
      <h3>GTA VI</h3>
      <p>Release: 2026</p>
      <a class="btn" href="game-detail.html">View</a>
    </div>

    <div class="card">
      <h3>Valorant Mobile</h3>
      <p>Release: Coming Soon</p>
      <a class="btn" href="game-detail.html">View</a>
    </div>
  `;
}
