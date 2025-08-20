import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

const Hero = () => {
  const scrollToDemo = () => {
    const element = document.getElementById('demo')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-secondary">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Bridge Communication
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Through Sign Language
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Real-time American Sign Language recognition with live gesture detection, 
            sentence building, and voice output. Making communication accessible for everyone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg"
              onClick={scrollToDemo}
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-smooth px-8 py-4 text-lg"
            >
              Try Live Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 text-lg border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-smooth"
            >
              <Play className="mr-2 h-5 w-5" />
              How It Works
            </Button>
          </div>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-card/50 border border-border rounded-full text-muted-foreground">
              ✨ Real-time Recognition
            </span>
            <span className="px-4 py-2 bg-card/50 border border-border rounded-full text-muted-foreground">
              🎯 Live Gesture Detection
            </span>
            <span className="px-4 py-2 bg-card/50 border border-border rounded-full text-muted-foreground">
              🔊 Voice Output
            </span>
            <span className="px-4 py-2 bg-card/50 border border-border rounded-full text-muted-foreground">
              📱 Sentence Building
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero