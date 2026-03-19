import { Droplets, Sun, Brush, Shield } from 'lucide-react';

export default function FurnitureCarePage() {
  return (
    <div>
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Furniture Care <span className="text-red-200">Guide</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            Keep your furniture looking beautiful for years with these care tips.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-4xl mx-auto px-4">
        <div className="space-y-8">
          {[
            { icon: Brush, title: 'Wood Furniture Care', tips: ['Dust regularly with a soft, dry cloth.', 'Use coasters to prevent water rings.', 'Apply furniture polish or wax every 3-6 months.', 'Avoid placing near direct heat sources or radiators.', 'Clean spills immediately to prevent staining.'] },
            { icon: Droplets, title: 'Upholstery & Fabric Care', tips: ['Vacuum upholstered furniture weekly.', 'Blot spills immediately — never rub.', 'Rotate cushions regularly for even wear.', 'Keep away from direct sunlight to prevent fading.', 'Professional deep clean recommended once a year.'] },
            { icon: Shield, title: 'Leather Furniture Care', tips: ['Wipe with a damp cloth weekly.', 'Apply leather conditioner every 6 months.', 'Keep away from direct sunlight and heat.', 'Clean spills immediately with a dry cloth.', 'Avoid sharp objects near leather surfaces.'] },
            { icon: Sun, title: 'Outdoor Furniture Care', tips: ['Store cushions indoors when not in use.', 'Clean metal frames with mild soap and water.', 'Apply rust-protective spray to metal furniture.', 'Cover furniture during rainy seasons.', 'Tighten screws and bolts periodically.'] },
          ].map((section, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-8">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <section.icon className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                  <ul className="text-gray-600 space-y-2 list-disc list-inside">
                    {section.tips.map((tip, j) => <li key={j}>{tip}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
