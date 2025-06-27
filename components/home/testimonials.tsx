import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Executive",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Abdul Sport Center transformed my fitness journey completely. The trainers are incredibly knowledgeable and the facilities are top-notch. I've never felt stronger or more confident!",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The 24/7 access is perfect for my schedule. The equipment is always clean and well-maintained. The community here is so supportive and motivating.",
  },
  {
    name: "Emily Rodriguez",
    role: "Teacher",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "I love the variety of programs offered. From HIIT classes to personal training, there's something for everyone. The results speak for themselves!",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-slate-50 relative">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-400/5 rounded-full blur-2xl animate-float-gentle"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-navy-400/5 rounded-full blur-2xl animate-float-gentle"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-20 animate-fade-in-up">
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Testimonials</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-navy-900">What Our Members Say</h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from our amazing community of members who have transformed their
            lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-premium p-8 rounded-3xl hover-lift-subtle border-elegant group relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary-200 group-hover:text-primary-300 transition-colors" />

              <div className="space-y-6">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed italic text-lg">"{testimonial.text}"</p>

                <div className="flex items-center space-x-4 pt-4 border-t border-slate-100">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover ring-2 ring-primary-100"
                  />
                  <div>
                    <div className="font-semibold text-navy-900 group-hover:text-primary-600 transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
