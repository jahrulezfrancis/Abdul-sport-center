import { Dumbbell, Heart, Users, Clock, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    description: "State-of-the-art fitness equipment from leading brands, regularly maintained and updated.",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Certified personal trainers with years of experience to guide your fitness journey.",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Train on your schedule with round-the-clock access to our facilities.",
  },
  {
    icon: Heart,
    title: "Health Monitoring",
    description: "Advanced health tracking and monitoring to optimize your workout results.",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Clean, secure, and well-maintained facilities with strict safety protocols.",
  },
  {
    icon: Zap,
    title: "High Energy",
    description: "Motivating atmosphere with energizing music and supportive community.",
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20 animate-fade-in-up">
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Why Choose Us</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-navy-900">Premium Fitness Experience</h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover what makes Abdul Sport Center the premier destination for fitness enthusiasts who demand
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {features.map((feature, index) => (
            <div key={index} className="card-premium p-8 rounded-2xl hover-lift-subtle border-elegant group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-7 w-7 text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold text-navy-900 mb-3 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
