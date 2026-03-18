import { Award, Users, Home, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-80 overflow-hidden">
        <img
          src="/morara-home-furniture.jpg"
          alt="Morara Home Furniture Store"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              About <span className="text-red-500">Us</span>
            </h1>
            <p className="text-gray-300 mt-3 max-w-lg mx-auto">
              Crafting beautiful living spaces since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Our Story</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Quality Furniture for Every Home
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Morara Home Furniture was founded with a simple mission: to provide high-quality, 
              beautifully designed furniture that makes every house feel like home. Based in Nairobi, 
              Kenya, we have grown from a small workshop to one of the leading furniture retailers in the region.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We believe that great furniture should be accessible to everyone. That's why we offer 
              a wide range of products at competitive prices without compromising on quality. Every piece 
              in our collection is carefully selected or crafted to ensure durability, comfort, and style.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of skilled craftsmen combines traditional techniques with modern design to 
              create furniture that stands the test of time. From classic wooden pieces to contemporary 
              designs, we have something for every taste and budget.
            </p>
          </div>
          <div className="bg-red-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow">
                  <Award className="text-red-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">15+</h3>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow">
                  <Users className="text-red-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow">
                  <Home className="text-red-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                <p className="text-sm text-gray-600">Products</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow">
                  <Heart className="text-red-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">98%</h3>
                <p className="text-sm text-gray-600">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use only the finest materials and craftsmanship in every piece of furniture we create or curate.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Love</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your satisfaction is our priority. We go above and beyond to ensure every customer is happy.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Home Focused</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every product is designed with real homes in mind, combining beauty with everyday practicality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
