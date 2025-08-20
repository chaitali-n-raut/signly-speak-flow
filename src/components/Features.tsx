import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, MessageSquare, Volume2, Zap, Shield, Globe } from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: Eye,
      title: "Live Gesture Detection",
      description: "Advanced AI recognizes ASL gestures in real-time with high accuracy, adapting to different signing styles and speeds."
    },
    {
      icon: MessageSquare,
      title: "Sentence Building",
      description: "Intelligent context-aware system builds complete sentences from individual signs, understanding grammar and flow."
    },
    {
      icon: Volume2,
      title: "Voice Output",
      description: "Natural text-to-speech conversion with customizable voices, making signed communication audible instantly."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast recognition with minimal latency, ensuring smooth and natural conversation flow."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "All processing happens locally on your device. Your gestures and conversations remain completely private."
    },
    {
      icon: Globe,
      title: "Accessible Design",
      description: "Built with accessibility standards in mind, featuring high contrast, screen reader support, and intuitive navigation."
    }
  ]

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Seamless Communication
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our advanced AI technology breaks down communication barriers with cutting-edge features 
            designed for accuracy, speed, and accessibility.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-lift border-border/50 hover:border-primary/20 transition-smooth group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features