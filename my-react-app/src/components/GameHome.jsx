function GameHome({ onPlay }) {
  return (
    <div className="game-home">
      <header className="top-bar">
        <button className="round-button">⚙️</button>
        <div className="resources">
          <div className="resource">
            <span className="resource-icon">❤️</span>
            <strong>5/5</strong>
            <button>+</button>
          </div>
          <div className="resource">
            <span className="resource-icon">🪙</span>
            <strong>100</strong>
            <button>+</button>
          </div>
        </div>
      </header>

      <aside className="left-options">
        <button className="side-option">
          <span className="option-icon ads">ADS</span>
          <small>Remove Ads</small>
        </button>
        <button className="side-option">
          <span className="option-icon">🏆</span>
          <small>Win Streak</small>
        </button>
      </aside>

      <aside className="right-options">
        <button className="side-option">
          <span className="option-icon">📋</span>
          <small>Daily Reward</small>
        </button>
        <button className="side-option">
          <span className="option-icon">🎁</span>
          <small>Daily Bonus</small>
        </button>
        <button className="side-option">
          <span className="option-icon">🎡</span>
          <small>Lucky Spin</small>
        </button>
      </aside>

      <main className="home-content">
        <div className="brain">🧠</div>

        <h1>
          <span>MEMORY</span>
          <span>BLAST</span>
        </h1>

        <p className="tagline">
          Test your memory. Match all 5 pairs before time runs out!
        </p>

        <div className="game-features">
          <div className="feature-card">
            <span>⏱️</span>
            <div><strong>50</strong><small>Seconds</small></div>
          </div>

          <div className="feature-card">
            <span>🃏</span>
            <div><strong>5</strong><small>Pairs</small></div>
          </div>

          <div className="feature-card">
            <span>💣</span>
            <div><strong>Watch</strong><small>Out!</small></div>
          </div>
        </div>

        <div className="levels">
          <div className="level locked"><span>5</span><b>🔒</b></div>
          <div className="level locked"><span>4</span><b>🔒</b></div>
          <div className="level locked"><span>3</span><b>🔒</b></div>
          <div className="level active"><span>2</span></div>
        </div>

        <button className="play-button" onClick={onPlay}>
          <span>▶</span> PLAY GAME
        </button>

        <div className="power-ups">
          <div>💣 <strong>Bomb: −10s</strong></div>
          <div className="divider"></div>
          <div>⏱️ <strong>Time: +10s</strong></div>
        </div>
      </main>

      <nav className="bottom-navigation">
        <button>🛒<span>Shop</span></button>
        <button className="selected">🏠<span>Home</span></button>
        <button>🔒<span>Levels</span></button>
      </nav>
    </div>
  );
}

export default GameHome;