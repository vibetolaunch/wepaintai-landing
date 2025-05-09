"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function InteractiveForm() {
  const [place, setPlace] = useState("")
  const [activity, setActivity] = useState("")
  const [vibe, setVibe] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - could navigate to results page or show results
    console.log({ place, activity, vibe })
    alert(`Finding your happy place: ${place} where you can ${activity} with ${vibe} vibes!`)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-[#ffd6e0] bg-opacity-80 rounded-xl p-6">
        <h2 className="text-[#4a2b7d] text-xl font-semibold mb-2">What kind of place makes you smile?</h2>
        <input
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          placeholder="e.g. beach, forest, mountain cabin"
          className="w-full bg-transparent text-[#4a2b7d] placeholder-[#4a2b7d] placeholder-opacity-70 focus:outline-none"
        />
      </div>

      <div className="bg-[#ffd6e0] bg-opacity-80 rounded-xl p-6">
        <h2 className="text-[#4a2b7d] text-xl font-semibold mb-2">What do you love doing there?</h2>
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="e.g. reading, swimming, dancing"
          className="w-full bg-transparent text-[#4a2b7d] placeholder-[#4a2b7d] placeholder-opacity-70 focus:outline-none"
        />
      </div>

      <div className="bg-[#ffd6e0] bg-opacity-80 rounded-xl p-6">
        <h2 className="text-[#4a2b7d] text-xl font-semibold mb-2">What are the vibes or feelings you want</h2>
        <input
          type="text"
          value={vibe}
          onChange={(e) => setVibe(e.target.value)}
          placeholder="e.g. cozy, wild, adventurous"
          className="w-full bg-transparent text-[#4a2b7d] placeholder-[#4a2b7d] placeholder-opacity-70 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#6c3db7] hover:bg-[#5c2da7] text-white font-bold py-4 px-6 rounded-full transition-all flex items-center justify-center text-xl"
      >
        Take Me There <ArrowRight className="ml-2" />
      </button>
    </form>
  )
}
