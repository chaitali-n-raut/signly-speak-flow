import { Button } from "@/components/ui/button"

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 transition-smooth">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">SL</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SignLink
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('demo')}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              Demo
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              Contact
            </button>
          </nav>
          
          <Button 
            onClick={() => scrollToSection('demo')}
            className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-smooth"
          >
            Try Demo
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header