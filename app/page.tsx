"use client"

import { useEffect, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Github, MessageCircle, Youtube, Menu, X, Sparkles, Palette, Zap } from 'lucide-react'

export default function WaitlistPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const video = videoRef.current;
    if (video) {
      // Set playback rate
      video.playbackRate = 0.5;
      
      // Try to play video
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Video playing");
          })
          .catch((error) => {
            console.error("Video play error:", error);
          });
      }
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Video overlay */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/demo-vid-landing.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Header */}
      <header className="relative z-20 w-full">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">wepaint.ai</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Button 
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <a href="https://app.wepaint.ai">Try Beta</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-t border-white/10">
            <div className="flex flex-col space-y-4 p-6">
              <Button 
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl w-fit"
              >
                <a href="https://app.wepaint.ai">Try Beta</a>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6 text-center">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm text-white">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Creative Suite</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Paint & Image Editor
            </span>
            <br />
            <span className="text-white">That's Easy</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Create stunning artwork and edit images with the power of AI. 
            No complex tools, just pure creativity unleashed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
            >
              <a href="https://app.wepaint.ai" className="flex items-center space-x-2">
                <span>Try Beta Now</span>
                <span className="text-2xl">🎨</span>
              </a>
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm text-white">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm text-white">
              <Palette className="w-4 h-4 text-pink-400" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm text-white">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Easy to Use</span>
            </div>
          </div>
        </div>
      </main>

      {/* Social Links - Bottom Right */}
      <div className="fixed bottom-8 right-8 z-20 flex flex-col gap-3">
        <a 
          href="https://github.com/wepaintai/wepaintai" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110"
          title="GitHub"
        >
          <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
        
        <a 
          href="https://discord.gg/RMdcAw3T7Q" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110"
          title="Discord"
        >
          <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
        
        <a 
          href="#" 
          className="group flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110"
          title="YouTube"
        >
          <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-40 animation-delay-1000" />
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-80 animation-delay-2000" />
      </div>
    </div>
  )
}
