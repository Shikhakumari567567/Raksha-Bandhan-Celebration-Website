import { useState } from "react";

function RakhiForm() {
  const [brotherName, setBrotherName] = useState("");
  const [sisterName, setSisterName] = useState("");
  const [message, setMessage] = useState("");

  function celebrate() {
    if (!brotherName || !sisterName) {
      setMessage("Please enter both names ❤️");
      return;
    }

    setMessage(
      `Happy Raksha Bandhan ${brotherName}! 
      Lots of love and happiness from ${sisterName} ❤️`
    );
  }

  return (
    <section className="celebrate" id="celebrate">
      <h2>Create Your Rakhi Wish 🪷</h2>

      <div className="form-box">

        <input
          type="text"
          placeholder="Brother's Name"
          value={brotherName}
          onChange={(e) => setBrotherName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Sister's Name"
          value={sisterName}
          onChange={(e) => setSisterName(e.target.value)}
        />

        <button onClick={celebrate}>
          Generate Wish 🎁
        </button>

        {message && (
          <div className="message">
            <h3>💌 Your Rakhi Message</h3>
            <p>{message}</p>
          </div>
        )}

      </div>
    </section>
  );
}

export default RakhiForm;