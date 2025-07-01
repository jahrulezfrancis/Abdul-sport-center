import { Button } from "@/components/ui/button"
import { Check, Star, Crown, Zap } from "lucide-react"

const plans = [
  {
    name: "Basic",
    icon: Zap,
    price: 49,
    period: "month",
    description: "Perfect for getting started with your fitness journey",
    features: [
      "Access to gym equipment",
      "Locker room facilities",
      "Basic fitness assessment",
      "Mobile app access",
      "Community support",
    ],
    popular: false,
    color: "warm",
  },
  {
    name: "Premium",
    icon: Star,
    price: 89,
    period: "month",
    description: "Our most popular plan with comprehensive features",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "Personal training session (1/month)",
      "Nutrition consultation",
      "Priority booking",
      "Guest passes (2/month)",
      "Towel service",
    ],
    popular: true,
    color: "primary",
  },
  {
    name: "Elite",
    icon: Crown,
    price: 149,
    period: "month",
    description: "Premium experience with exclusive benefits",
    features: [
      "Everything in Premium",
      "Unlimited personal training",
      "Massage therapy (2/month)",
      "VIP locker room access",
      "Meal planning service",
      "Recovery suite access",
      "Unlimited guest passes",
      "Concierge service",
    ],
    popular: false,
    color: "gold",
  },
]

const benefits = [
  "No joining fees or hidden costs",
  "30-day money-back guarantee",
  "Freeze membership option",
  "Cancel anytime with 30 days notice",
  "24/7 gym access",
  "Free parking",
  "Member events and workshops",
]

export default function MembershipPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Membership Plans</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Choose the perfect membership plan that fits your lifestyle and fitness goals. All plans include access to
            our premium facilities.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  plan.popular ? "ring-4 ring-primary-500 scale-105" : "hover:scale-105"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className={`p-8 ${plan.popular ? "pt-12" : ""}`}>
                  <div className="text-center space-y-4 mb-8">
                    <div
                      className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                        plan.color === "primary"
                          ? "bg-primary-100"
                          : plan.color === "gold"
                            ? "bg-gold-100"
                            : "bg-warm-100"
                      }`}
                    >
                      <plan.icon
                        className={`h-8 w-8 ${
                          plan.color === "primary"
                            ? "text-primary-600"
                            : plan.color === "gold"
                              ? "text-gold-600"
                              : "text-warm-600"
                        }`}
                      />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-warm-900">{plan.name}</h3>
                    <p className="text-warm-600">{plan.description}</p>
                    <div className="space-y-1">
                      <div className="text-4xl font-bold text-warm-900">
                        ${plan.price}
                        <span className="text-lg font-normal text-warm-600">/{plan.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check
                          className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                            plan.color === "primary"
                              ? "text-primary-600"
                              : plan.color === "gold"
                                ? "text-gold-600"
                                : "text-warm-600"
                          }`}
                        />
                        <span className="text-warm-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-primary-600 hover:bg-primary-700 text-white"
                        : "bg-warm-100 hover:bg-warm-200 text-warm-900"
                    }`}
                  >
                    Choose {plan.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-4xl font-bold text-warm-900">Membership Benefits</h2>
            <p className="text-lg text-warm-600">
              Every membership comes with these amazing benefits at no extra cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-warm-50 rounded-xl">
                <Check className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <span className="text-warm-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-4xl font-bold text-warm-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-warm-900 mb-2">Can I freeze my membership?</h3>
              <p className="text-warm-600">
                Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended travel.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-warm-900 mb-2">Is there a contract?</h3>
              <p className="text-warm-600">
                No long-term contracts required. You can cancel your membership anytime with 30 days written notice.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-warm-900 mb-2">Can I bring guests?</h3>
              <p className="text-warm-600">
                Premium and Elite members receive guest passes each month. Basic members can purchase day passes for
                guests.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-warm-900 mb-2">What if I'm not satisfied?</h3>
              <p className="text-warm-600">
                We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your membership
                fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Join Abdul Sport Center today and take the first step towards a healthier, stronger you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-full font-semibold"
            >
              Join Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-full font-semibold"
            >
              Schedule Tour
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
