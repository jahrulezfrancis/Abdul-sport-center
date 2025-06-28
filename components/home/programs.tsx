import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users, TrendingUp, Star } from "lucide-react"

const programs = [
  {
    title: "Strength Training",
    description: "Build muscle and increase strength with our comprehensive weight training programs.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "45-60 min",
    level: "All Levels",
    intensity: "High",
    features: ["Free Weights", "Machines", "Personal Guidance"],
    popular: false,
  },
  {
    title: "HIIT Classes",
    description: "High-intensity interval training for maximum calorie burn and cardiovascular fitness.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "30-45 min",
    level: "Intermediate",
    intensity: "Very High",
    features: ["Group Classes", "Cardio Focus", "Fat Burning"],
    popular: true,
  },
  {
    title: "Personal Training",
    description: "One-on-one sessions tailored to your specific goals and fitness level.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "60 min",
    level: "All Levels",
    intensity: "Customized",
    features: ["1-on-1 Coaching", "Custom Plans", "Progress Tracking"],
    popular: false,
  },
]

export default function Programs() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20 animate-fade-in-up">
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Our Programs</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-navy-900">Fitness Programs for Every Goal</h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're looking to build strength, lose weight, or improve overall fitness, we have the perfect
            program for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 stagger-children">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`card-premium rounded-3xl overflow-hidden hover-lift-subtle group relative ${
                program.popular ? "ring-2 ring-primary-200 scale-105" : ""
              }`}
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-accent-gradient text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg">
                    <Star className="h-4 w-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="relative overflow-hidden">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <h4 className="text-2xl font-serif font-bold text-navy-900 group-hover:text-primary-600 transition-colors">
                    {program.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">{program.description}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 border-t border-slate-100">
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-primary-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-navy-900">{program.duration}</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-5 w-5 text-primary-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-navy-900">{program.level}</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-5 w-5 text-primary-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-navy-900">{program.intensity}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-accent-gradient hover:shadow-lg text-white rounded-full py-3 group transition-all duration-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in-up">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary-200 text-primary-600 hover:bg-primary-50 hover:border-primary-300 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
          >
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  )
}
