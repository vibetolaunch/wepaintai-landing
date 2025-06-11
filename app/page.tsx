"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { submitEmail } from "@/app/actions"
import { useToast } from "@/hooks/use-toast"

export default function WaitlistPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await submitEmail(email)
      setSubmitted(true)
      toast({
        title: "Success!",
        description: "You've been added to the waitlist.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to join waitlist. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/background.jpg")' }}
    >
      <div className="w-full max-w-lg bg-white/5 dark:bg-gray-900/5 rounded-lg shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden">
        {/* Chrome Window Header */}
        <div className="bg-white/3 dark:bg-gray-800/3 backdrop-blur-xl border-b border-white/10 dark:border-gray-700/10">
          {/* Window Controls */}
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500/80 backdrop-blur-sm"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 backdrop-blur-sm"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80 backdrop-blur-sm"></div>
              </div>
            </div>
            <div className="flex-1 mx-4">
              {/* Address Bar */}
              <div className="bg-white/5 dark:bg-gray-700/5 backdrop-blur-xl rounded-full px-4 py-1 text-sm text-white/90 dark:text-gray-200/90 border border-white/20 dark:border-gray-600/20">
                🔒 wepaint.ai
              </div>
            </div>
            <div className="w-16"></div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-8 space-y-6 bg-white/3 dark:bg-gray-900/3 backdrop-blur-xl">
          <div className="text-center space-y-3">
            <h1 className="text-3xl font-bold text-white/95 dark:text-white/95">wepaint.ai</h1>
            <p className="text-lg text-white/80 dark:text-gray-200/80">Coming Soon</p>
            <p className="text-sm text-white/70 dark:text-gray-300/70">
              Join our waitlist to be notified when we launch
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-2 bg-white/5 dark:bg-gray-800/5 backdrop-blur-xl border border-white/20 dark:border-gray-600/20 rounded-md focus:ring-2 focus:ring-blue-400/50 focus:border-white/30 text-white/90 placeholder:text-white/50 dark:placeholder:text-gray-300/50"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-blue-500/80 hover:bg-blue-600/80 backdrop-blur-xl text-white rounded-md transition-all duration-200 disabled:opacity-50 border border-blue-400/30 shadow-lg"
                >
                  {isSubmitting ? "..." : "Join"}
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center space-y-3">
              <div className="text-green-400/90 dark:text-green-400/90 text-4xl">✓</div>
              <div>
                <h3 className="text-lg font-semibold text-white/95 dark:text-white/95">Thanks!</h3>
                <p className="text-white/80 dark:text-gray-200/80">You're on the waitlist.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
