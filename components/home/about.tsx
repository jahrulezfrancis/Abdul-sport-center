import Image from "next/image"
import { Award, Users, Clock, Target } from "lucide-react"

const stats = [
  { icon: Award, label: "Years of Excellence", value: "10+" },
  { icon: Users, label: "Happy Members", value: "500+" },
  { icon: Clock, label: "Operating Hours", value: "24/7" },
  { icon: Target, label: "Success Rate", value: "95%" },
]

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-pattern-subtle opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider">About Us</h2>
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 leading-tight">
                Where Fitness Meets
                <span className="text-gradient-premium block">Excellence</span>
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                At Abdul Sport Center, we believe fitness is not just about physical transformation—it's about building
                confidence, discipline, and a lifestyle that empowers you to be your best self.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed">
                Founded with a vision to create a premium fitness experience, we combine state-of-the-art equipment with
                personalized training programs and a supportive community atmosphere.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Our expert trainers are dedicated to helping you achieve your goals, whether you're a beginner starting
                your fitness journey or an athlete looking to reach new heights.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 stagger-children">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="card-premium p-6 rounded-xl hover-lift-subtle border-elegant group text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-navy-900 group-hover:text-primary-600 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/placeholder.svg?height=300&width=250"
                  alt="Premium gym equipment"
                  width={250}
                  height={300}
                  className="rounded-2xl shadow-lg hover-lift-subtle"
                />
                <Image
                  src="/placeholder.svg?height=200&width=250"
                  alt="Personal training session"
                  width={250}
                  height={200}
                  className="rounded-2xl shadow-lg hover-lift-subtle"
                />
              </div>
              <div className="space-y-4 pt-8">
                <Image
                  src="/placeholder.svg?height=200&width=250"
                  alt="Group fitness class"
                  width={250}
                  height={200}
                  className="rounded-2xl shadow-lg hover-lift-subtle"
                />
                <Image
                  src="/placeholder.svg?height=300&width=250"
                  alt="Modern gym interior"
                  width={250}
                  height={300}
                  className="rounded-2xl shadow-lg hover-lift-subtle"
                />
              </div>
            </div>

            {/* Elegant Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl animate-float-gentle"></div>
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-navy-500/10 rounded-full blur-2xl animate-float-gentle"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
