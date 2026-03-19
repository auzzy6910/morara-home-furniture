import { Briefcase, Users, Heart, TrendingUp } from 'lucide-react';

const openings = [
  { title: 'Sales Associate', location: 'Nairobi', type: 'Full-time', desc: 'Help customers find the perfect furniture for their homes.' },
  { title: 'Interior Design Consultant', location: 'Nairobi', type: 'Full-time', desc: 'Provide expert design advice and create custom furniture solutions.' },
  { title: 'Delivery Driver', location: 'Nairobi, Mombasa', type: 'Full-time', desc: 'Ensure safe and timely delivery of furniture to our customers.' },
  { title: 'Warehouse Associate', location: 'Nairobi', type: 'Full-time', desc: 'Manage inventory and ensure quality control of furniture items.' },
  { title: 'Digital Marketing Specialist', location: 'Remote', type: 'Full-time', desc: 'Drive online presence and manage social media campaigns.' },
  { title: 'Customer Service Representative', location: 'Nairobi', type: 'Full-time', desc: 'Provide exceptional support to customers via phone, email, and chat.' },
];

export default function CareersPage() {
  return (
    <div>
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Morara <span className="text-red-200">Careers</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            Join our team and help us furnish homes across Kenya.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Briefcase, title: 'Growth', desc: 'Career development and promotion opportunities.' },
            { icon: Users, title: 'Team Culture', desc: 'Collaborative and supportive work environment.' },
            { icon: Heart, title: 'Benefits', desc: 'Competitive salary, health insurance, and staff discounts.' },
            { icon: TrendingUp, title: 'Impact', desc: 'Help families create beautiful living spaces.' },
          ].map((perk, i) => (
            <div key={i} className="text-center bg-white rounded-xl shadow p-6">
              <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                <perk.icon className="text-red-600" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">{perk.title}</h4>
              <p className="text-sm text-gray-600">{perk.desc}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Open Positions</h2>
        <div className="space-y-4">
          {openings.map((job, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{job.desc}</p>
                <div className="flex gap-3 mt-2">
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">{job.location}</span>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{job.type}</span>
                </div>
              </div>
              <a href="mailto:careers@morarahome.co.ke" className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center whitespace-nowrap">
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
