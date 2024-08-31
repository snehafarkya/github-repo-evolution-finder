import React, { useState } from "react";
import Timeline from "./Timeline";

function Display() {
  const [username, setUsername] = useState("");
  const [repo, setRepo] = useState("");
  const [showTimeline, setShowTimeline] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTimeline(true);
  };

  return (
    <div className="md:w-[1000px] mx-auto">
      <h1 className="text-3xl text-center text-blue-950 font-bold uppercase">GitHub Repository Evolution Timeline</h1>
      <form onSubmit={handleSubmit} className="mb-4 flex justify-center items-center flex-col gap-4  md:mt-8">
        <div className="mb-2">
          <label htmlFor="username">GitHub Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border-2 p-2 ml-2 rounded-md border-gray-400"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="repo">Repository Name:</label>
          <input
            type="text"
            id="repo"
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
            required
            className="border-2 p-2 ml-2 rounded-md border-gray-400"
          />
        </div>
        <button type="submit" className="bg-blue-900 rounded-md hover:bg-blue-700 w-fit self-center  text-white p-2 mt-2">Generate Timeline</button>
      </form>
      {showTimeline && <Timeline  username={username} repo={repo} />}
    </div>
  );
}

export default Display;
