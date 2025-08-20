import { Card, CardContent } from "@/components/ui/card"
import { Camera, Brain, MessageCircle, Volume2 } from "lucide-react"

const HowItWorks = () => {
  const steps = [
    {
      icon: Camera,
      title: "Capture Gestures",
      description: "Your camera captures ASL gestures in real-time with advanced computer vision technology."
    },
    {
      icon: Brain,
      title: "AI Recognition",
      description: "Our trained neural network processes and recognizes individual signs with high accuracy."
    },
    {
      icon: MessageCircle,
      title: "Build Sentences",
      description: "Intelligent algorithms combine recognized signs into coherent sentences with proper grammar."
    },
    {
      icon: Volume2,
      title: "Voice Output",
      description: "Text-to-speech technology converts the built sentences into natural-sounding audio."
    }
  ]

  return (
    <section id="how-it-works" className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our four-step process transforms sign language into spoken words seamlessly, 
            bridging the communication gap with cutting-edge technology.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="hover-lift border-border/50 hover:border-primary/20 transition-smooth group h-full">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:shadow-glow transition-smooth">
                        <step.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-smooth">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Connecting Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-gradient-primary"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks