import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Research Lead",
      bio: "PhD in Computer Vision with 8+ years in gesture recognition and deep learning research.",
      image: "👩‍💻",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Full-Stack Developer",
      bio: "Expert in real-time systems and accessibility technologies with passion for inclusive design.",
      image: "👨‍💻",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Dr. Emily Watson",
      role: "Accessibility Consultant",
      bio: "ASL interpreter and UX researcher specializing in assistive technology and inclusive interfaces.",
      image: "👩‍🎓",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "James Kim",
      role: "Machine Learning Engineer",
      bio: "Specialist in neural networks and real-time inference optimization for edge computing.",
      image: "👨‍🔬",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    }
  ]

  return (
    <section id="team" className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse group of researchers, developers, and accessibility experts united by the mission 
            to make communication accessible for everyone.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="hover-lift border-border/50 hover:border-primary/20 transition-smooth group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="text-6xl mb-4 group-hover:animate-float">
                  {member.image}
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {member.name}
                </h3>
                
                <p className="text-primary font-medium mb-4">
                  {member.role}
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-3">
                  <a 
                    href={member.social.github}
                    className="w-8 h-8 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-smooth"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a 
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-smooth"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a 
                    href={member.social.twitter}
                    className="w-8 h-8 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-smooth"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team