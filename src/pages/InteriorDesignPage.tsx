import { Palette, Lightbulb, Sofa, Layers } from 'lucide-react';

export default function InteriorDesignPage() {
  return (
    <div>
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Interior Design <span className="text-red-200">Advice</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            Expert tips and inspiration to transform your living spaces.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {[
            { icon: Palette, title: 'Color Coordination', desc: 'Choose a cohesive color palette for your room. Neutral tones like beige, gray, and white create a timeless foundation. Add pops of color through accent pieces like cushions, rugs, and artwork.' },
            { icon: Lightbulb, title: 'Lighting Matters', desc: 'Layer your lighting with ambient, task, and accent lights. A well-lit room feels more spacious and inviting. Consider floor lamps, table lamps, and pendant lights for different moods.' },
            { icon: Sofa, title: 'Furniture Placement', desc: 'Create conversation areas by arranging seating to face each other. Leave enough walking space between pieces. Anchor your room with a statement piece like a large sofa or dining table.' },
            { icon: Layers, title: 'Texture & Materials', desc: 'Mix textures for visual interest — combine smooth leather with soft fabrics, warm wood with cool metal. This creates depth and makes your space feel curated and intentional.' },
          ].map((tip, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-8">
              <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <tip.icon className="text-red-600" size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
              <p className="text-gray-600 leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Need Personalized Design Help?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Our team of interior design consultants can help you create the perfect space. Book a free consultation today.</p>
          <a href="/contact" className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">Book a Consultation</a>
        </div>
      </section>
    </div>
  );
}
