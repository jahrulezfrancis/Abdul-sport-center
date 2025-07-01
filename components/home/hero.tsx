import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Award, Users, Clock } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-premium-gradient">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-pattern-subtle opacity-30" />

      {/* Elegant Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-800/90 to-navy-700/85" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              {/* Premium Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Award className="h-4 w-4 text-gold-400" />
                <span className="text-white/90 text-sm font-medium">Premium Fitness Experience</span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Transform Your
                <span className="text-gradient-premium block">Fitness Journey</span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                Experience premium fitness at Abdul Sport Center. State-of-the-art equipment, expert trainers, and a
                community that motivates you to achieve your goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent-gradient hover:shadow-lg text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 animate-glow-subtle group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 group backdrop-blur-sm"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Tour
              </Button>
            </div>

            <div className="flex items-center space-x-12 pt-8 stagger-children">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-slate-400 text-sm">Happy Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-slate-400 text-sm">Expert Trainers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-slate-400 text-sm">Access</div>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden animate-fade-in">
            <div className="relative animate-float-gentle">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-gold-500/20 rounded-3xl blur-2xl"></div>
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Premium fitness facility"
                width={500}
                height={600}
                className="relative rounded-3xl shadow-2xl"
              />

              {/* Floating Stats */}
              <div className="absolute -top-6 -left-6 card-premium rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-gradient rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-navy-900">95%</div>
                    <div className="text-xs text-slate-600">Success Rate</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 card-premium rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-navy-600 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-navy-900">24/7</div>
                    <div className="text-xs text-slate-600">Premium Access</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
