import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);
  const [calendarCode, setCalendarCode] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/process-pdf", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setCalendarCode(data.calendarCode);
  };

  return (
    <div>
      <h1>Class Schedule to Google Calendar</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
        />
        <button type="submit">Process PDF</button>
      </form>
      {calendarCode && (
        <div>
          <h2>Your Google Calendar Code:</h2>
          <textarea readOnly value={calendarCode} rows={10} cols={50} />
        </div>
      )}
    </div>
  );
}
