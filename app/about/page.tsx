import Image from "next/image"
import { Award, Target, Heart, Users } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from our equipment to our service.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Our passion for fitness drives us to help you achieve your personal best.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in building a supportive community that motivates and inspires.",
  },
  {
    icon: Award,
    title: "Results",
    description: "We are committed to helping you achieve real, lasting results.",
  },
]

const trainers = [
  {
    name: "Abdul Rahman",
    role: "Founder & Head Trainer",
    image: "/placeholder.svg?height=300&width=250",
    bio: "With over 15 years of experience in fitness and nutrition, Abdul founded the center with a vision to create a premium fitness experience.",
    certifications: ["NASM-CPT", "Nutrition Specialist", "Strength & Conditioning"],
  },
  {
    name: "Sarah Mitchell",
    role: "Personal Training Director",
    image: "/placeholder.svg?height=300&width=250",
    bio: "Sarah specializes in strength training and has helped hundreds of clients achieve their fitness goals through personalized programs.",
    certifications: ["ACSM-CPT", "Corrective Exercise", "Olympic Lifting"],
  },
  {
    name: "Marcus Johnson",
    role: "HIIT & Cardio Specialist",
    image: "/placeholder.svg?height=300&width=250",
    bio: "Marcus brings high energy and expertise to our group fitness classes, specializing in HIIT and cardiovascular training.",
    certifications: ["HIIT Certified", "Group Fitness", "Athletic Performance"],
  },
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-premium-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-subtle opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Award className="h-4 w-4 text-gold-400" />
              <span className="text-white/90 text-sm font-medium">Our Story</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">About Abdul Sport Center</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Founded on the belief that fitness should be accessible, enjoyable, and transformative for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="font-serif text-4xl font-bold text-navy-900">The Abdul Sport Center Journey</h2>
              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  What started as a dream to create the perfect fitness environment has grown into a thriving community
                  of fitness enthusiasts. Abdul Sport Center was founded in 2014 with a simple mission: to provide
                  world-class fitness facilities and expert guidance in a welcoming, supportive environment.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Our founder, Abdul Rahman, recognized that many people were intimidated by traditional gyms or
                  frustrated by the lack of personalized attention. He envisioned a space where everyone—from beginners
                  to advanced athletes—could feel comfortable, supported, and motivated to achieve their goals.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Today, we're proud to be the premier fitness destination in our community, with over 500 satisfied
                  members and a team of certified trainers who are passionate about helping you succeed.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Abdul Sport Center founder"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl hover-lift-subtle"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl animate-float-gentle"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative">
        <div className="absolute inset-0 bg-pattern-subtle opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-20 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900">Our Values</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              These core values guide everything we do and shape the experience we create for our members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-premium p-8 rounded-2xl hover-lift-subtle border-elegant group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900">Meet Our Expert Trainers</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our certified trainers are passionate professionals dedicated to helping you achieve your fitness goals
              safely and effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="card-premium rounded-3xl overflow-hidden hover-lift-subtle border-elegant group"
              >
                <Image
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  width={250}
                  height={300}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 group-hover:text-primary-600 transition-colors">
                      {trainer.name}
                    </h3>
                    <p className="text-primary-600 font-medium">{trainer.role}</p>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{trainer.bio}</p>
                  <div className="space-y-3">
                    <h4 className="font-medium text-navy-900">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.certifications.map((cert, certIndex) => (
                        <span
                          key={certIndex}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full border border-primary-200"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
