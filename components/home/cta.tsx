import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Award } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-24 bg-premium-gradient relative overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern-subtle opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Award className="h-4 w-4 text-gold-400" />
              <span className="text-white/90 text-sm font-medium">Award-Winning Fitness Center</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Transform
              <span className="text-gradient-premium block">Your Life?</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Join Abdul Sport Center today and start your journey towards a stronger, healthier, and more confident
              you. Your transformation begins with a single step.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center stagger-children">
            <Button
              size="lg"
              className="bg-white text-navy-900 hover:bg-slate-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 group shadow-lg"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 group backdrop-blur-sm"
            >
              <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Call Now
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20 stagger-children">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Free</div>
              <div className="text-slate-400">Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">No</div>
              <div className="text-slate-400">Joining Fee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">30-Day</div>
              <div className="text-slate-400">Money Back</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
