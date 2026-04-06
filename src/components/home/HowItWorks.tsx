const STEPS = [
  {
    icon: '🔍',
    title: 'Browse vendors',
    description: 'Search and filter thousands of wedding vendors by category, location, and budget.',
  },
  {
    icon: '💌',
    title: 'Send an inquiry',
    description: 'Reach out directly to vendors with your wedding date and requirements.',
  },
  {
    icon: '💍',
    title: 'Book with confidence',
    description: 'Read real reviews from couples and book the perfect team for your day.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
          How Knotly works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-2xl bg-rose-100 flex items-center justify-center text-2xl mb-4">
                {step.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}