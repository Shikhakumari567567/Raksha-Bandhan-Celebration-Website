function Wishes() {
  const wishes = [
    "May your bond always remain strong ❤️",
    "Wishing you endless happiness and love 🌸",
    "May every Rakhi bring beautiful memories 🎁",
    "Celebrate the beautiful bond of siblings 🪷"
  ];

  return (
    <section className="wishes" id="wishes">
      <h2>Raksha Bandhan Wishes 💌</h2>

      <div className="wish-container">
        {wishes.map((wish, index) => (
          <div className="wish-card" key={index}>
            <span>🪷</span>
            <p>{wish}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Wishes;