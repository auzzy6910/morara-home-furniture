import { Sparkles, Droplets, Sun, Wind, ShieldCheck, AlertTriangle } from 'lucide-react';

export default function FurnitureCarePage() {
  const careGuides = [
    {
      icon: Sparkles,
      title: 'Wood Furniture',
      tips: [
        'Dust regularly with a soft, lint-free cloth.',
        'Use coasters and placemats to prevent rings and scratches.',
        'Apply furniture polish or wax every 3-6 months to maintain the finish.',
        'Wipe spills immediately with a dry cloth to prevent staining.',
        'Avoid placing wood furniture in direct sunlight to prevent fading.',
      ],
    },
    {
      icon: Droplets,
      title: 'Upholstered Furniture',
      tips: [
        'Vacuum upholstery weekly to remove dust and debris.',
        'Rotate and flip cushions regularly for even wear.',
        'Blot spills immediately — never rub, as this can spread the stain.',
        'Use fabric protector spray for added stain resistance.',
        'Have professional cleaning done once a year for deep cleaning.',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Leather Furniture',
      tips: [
        'Wipe down with a damp cloth weekly to remove dust.',
        'Apply leather conditioner every 6-12 months to keep it supple.',
        'Keep away from heat sources and direct sunlight.',
        'Clean spills immediately with a soft, absorbent cloth.',
        'Avoid using harsh chemicals or household cleaners on leather.',
      ],
    },
    {
      icon: Wind,
      title: 'Metal and Glass Furniture',
      tips: [
        'Clean glass surfaces with a glass cleaner and soft cloth.',
        'Wipe metal frames with a damp cloth and dry thoroughly.',
        'Use felt pads under decorative items to prevent scratches on glass.',
        'Check and tighten bolts and screws periodically.',
        'Apply metal polish to chrome or brass fittings as needed.',
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Furniture <span className="text-red-200">Care</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            Keep your furniture looking beautiful for years to come with our expert care tips.
          </p>
        </div>
      </section>

      {/* Care Guides */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Care Guides</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Tips by Material
            </h2>
          </div>

          <div className="space-y-8">
            {careGuides.map((guide) => (
              <div key={guide.title} className="bg-white rounded-xl p-8 shadow border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg shrink-0">
                    <guide.icon className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{guide.title}</h3>
                    <ul className="space-y-3">
                      {guide.tips.map((tip) => (
                        <li key={tip} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-red-600 font-bold mt-0.5">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Tips */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">General Tips</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Protect Your Investment
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Sun className="text-yellow-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Avoid Direct Sunlight</h4>
                  <p className="text-sm text-gray-600">Prolonged sun exposure can cause fading and drying. Position furniture away from windows or use curtains.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Droplets className="text-blue-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Control Humidity</h4>
                  <p className="text-sm text-gray-600">Extreme humidity can damage wood and upholstery. Maintain a consistent indoor climate.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-green-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Use Protectors</h4>
                  <p className="text-sm text-gray-600">Use coasters, placemats, and felt pads to protect surfaces from scratches and stains.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-orange-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Act on Spills Quickly</h4>
                  <p className="text-sm text-gray-600">Blot spills immediately with a clean, dry cloth. Avoid rubbing which can push the stain deeper.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
