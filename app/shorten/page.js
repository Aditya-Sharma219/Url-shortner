"use client";
import React, { useState } from "react";
import Link from "next/link";
const Page = () => {
  const [url, seturl] = useState("");
  const [shorten, setshorten] = useState("");
  const [generated, setgenerated] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url || !shorten) {
      alert("Please fill in both fields before generating a URL.");
      return;
    }

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl: shorten }),
      });

      if (!res.ok) throw new Error("Failed to generate the URL");

      const data = await res.json();
      console.log(data);
      setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorten}`);
      alert(data.message);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      seturl("");
      setshorten("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-purple-100 p-6">
      <h1 className="text-3xl text-center font-bold">Generate Shortened URLs</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center items-center m-4">
        <input
          className="border-2 border-gray-300 rounded-lg px-4 py-2"
          value={url}
          type="text"
          placeholder="Enter your URL"
          onChange={(e) => seturl(e.target.value)}
        />
        <input
          className="border-2 border-gray-300 rounded-lg px-4 py-2"
          value={shorten}
          type="text"
          placeholder="Enter your preferred Shortened URL text"
          onChange={(e) => setshorten(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-purple-700 rounded-lg px-6 py-2 font-bold hover:bg-purple-800"
        >
          Generate
        </button>
      </form>
      {generated && (
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="text-lg font-bold">Your Shortened URL:</h1>
          <a
            href={generated}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            <Link target="_blank" href={generated} >{generated}</Link>
          </a>
        </div>
      )}
    </div>
  );
};

export default Page;
