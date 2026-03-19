import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, Users, Heart, TrendingUp } from 'lucide-react';

export default function CareersPage() {
  const openings = [
    {
      title: 'Sales Associate',
      location: 'Nairobi Showroom',
      type: 'Full-Time',
      description: 'Help customers find the perfect furniture for their homes. Strong communication and customer service skills required.',
    },
    {
      title: 'Furniture Craftsman',
      location: 'Nairobi Workshop',
      type: 'Full-Time',
      description: 'Join our skilled workshop team to build and finish premium quality furniture pieces. Experience in woodworking preferred.',
    },
    {
      title: 'Delivery Driver',
      location: 'Nairobi and Surrounding Areas',
      type: 'Full-Time',
      description: 'Safely deliver and assemble furniture at customer locations. Valid driving license and good physical fitness required.',
    },
    {
      title: 'Interior Design Consultant',
      location: 'Nairobi Showroom',
      type: 'Full-Time',
      description: 'Provide expert design advice to customers. Degree in interior design or related field preferred.',
    },
    {
      title: 'Digital Marketing Specialist',
      location: 'Remote / Nairobi',
      type: 'Full-Time',
      description: 'Manage our social media presence and digital campaigns. Experience with e-commerce marketing is a plus.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-80 overflow-hidden">
        <img
          src="/morara-home-furniture.jpg"
          alt="Morara Home Furniture Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Join Our <span className="text-red-500">Team</span>
            </h1>
            <p className="text-gray-300 mt-3 max-w-lg mx-auto">
              Build your career with Kenya's leading furniture company
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Why Morara</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Work With Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Opportunities</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We invest in our people. Enjoy training programs, mentorship, and clear career advancement paths.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Great Team Culture</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Join a collaborative and supportive team that values creativity, respect, and hard work.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Employee Benefits</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Competitive salaries, health insurance, staff discounts, and a positive work-life balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Opportunities</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Open Positions
            </h2>
          </div>

          <div className="space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="bg-white rounded-xl p-6 shadow border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <Briefcase className="text-red-600" size={18} />
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{job.description}</p>
                    <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="shrink-0 bg-red-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-red-700 transition-colors text-center"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-red-50 rounded-xl p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Don't see a role that fits?</h3>
            <p className="text-sm text-gray-600 mb-4">
              We're always looking for talented people. Send us your CV and we'll keep you in mind for future openings.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Send Your CV
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
