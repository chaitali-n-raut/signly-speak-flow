import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Camera, Mic, Square, Volume2 } from "lucide-react"
import { useState } from "react"

const LiveDemo = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [detectedText, setDetectedText] = useState("")
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    if (!isRecording) {
      // Simulate detection
      setTimeout(() => {
        setDetectedText("Hello, how are you today?")
      }, 2000)
    } else {
      setDetectedText("")
    }
  }

  const playAudio = () => {
    setIsPlaying(true)
    // Simulate audio playback
    setTimeout(() => setIsPlaying(false), 3000)
  }

  return (
    <section id="demo" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              SignLink Live
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Try our real-time ASL recognition system. Start signing and watch as your gestures 
            are converted to text and speech instantly.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Camera Feed */}
            <Card className="hover-lift border-border/50 transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Camera className="h-5 w-5 text-primary" />
                  Camera Feed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-secondary rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
                  {isRecording ? (
                    <div className="text-center z-10">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 animate-pulse">
                        <div className="w-4 h-4 bg-primary-foreground rounded-full"></div>
                      </div>
                      <p className="text-primary font-semibold">Recording...</p>
                      <p className="text-sm text-muted-foreground mt-2">Start signing to see recognition</p>
                    </div>
                  ) : (
                    <div className="text-center z-10">
                      <Camera className="h-16 w-16 text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">Camera ready</p>
                      <p className="text-sm text-muted-foreground mt-2">Click Start to begin</p>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 text-center">
                  <Button
                    onClick={toggleRecording}
                    size="lg"
                    className={`${
                      isRecording 
                        ? 'bg-destructive text-destructive-foreground hover:bg-destructive/90' 
                        : 'bg-gradient-primary text-primary-foreground hover:shadow-glow'
                    } transition-smooth px-8`}
                  >
                    {isRecording ? (
                      <>
                        <Square className="mr-2 h-5 w-5" />
                        Stop Recording
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-5 w-5" />
                        Start Demo
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Output */}
            <Card className="hover-lift border-border/50 transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mic className="h-5 w-5 text-primary" />
                  Recognition Output
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-card border border-border/50 rounded-lg p-6 flex flex-col">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-4 text-muted-foreground">Detected Text:</h4>
                    <div className="min-h-[100px] p-4 bg-gradient-secondary rounded-lg border border-border/30">
                      {detectedText ? (
                        <p className="text-lg animate-fade-up">{detectedText}</p>
                      ) : (
                        <p className="text-muted-foreground italic">
                          Recognized text will appear here...
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button
                      onClick={playAudio}
                      disabled={!detectedText || isPlaying}
                      variant="outline"
                      className="w-full border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-smooth"
                    >
                      <Volume2 className="mr-2 h-4 w-4" />
                      {isPlaying ? 'Playing...' : 'Play Audio'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              This is a demonstration interface. The full application includes advanced gesture recognition,
              real-time processing, and high-quality text-to-speech conversion.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiveDemo