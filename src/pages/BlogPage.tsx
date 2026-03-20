import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '10 Tips for Choosing the Perfect Sofa',
    excerpt: 'Finding the right sofa can transform your living room. Here are our top tips for selecting a sofa that combines comfort, style, and durability for your home.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop',
    category: 'Buying Guide',
    date: '2026-03-15',
    readTime: '5 min read',
    content: 'Your sofa is often the centerpiece of your living room. Consider the size of your space, the number of people who will use it regularly, and your lifestyle. Look for high-density foam cushions, kiln-dried hardwood frames, and durable upholstery fabrics. Test the seat depth and height to ensure comfort for your body type.',
  },
  {
    id: 2,
    title: 'Small Space Living: Furniture Solutions for Apartments',
    excerpt: 'Maximize your apartment space with clever furniture choices. From multi-functional pieces to space-saving designs, discover how to make every square foot count.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
    category: 'Interior Design',
    date: '2026-03-10',
    readTime: '7 min read',
    content: 'Living in a small apartment doesn\'t mean sacrificing style or comfort. Choose furniture that serves multiple purposes, like storage ottomans, extendable dining tables, and sofa beds. Use vertical space with tall bookshelves and wall-mounted storage. Light colors and mirrors can make spaces feel larger.',
  },
  {
    id: 3,
    title: 'How to Care for Wooden Furniture',
    excerpt: 'Protect your investment with proper wood furniture care. Learn the best practices for cleaning, polishing, and maintaining your wooden pieces for years to come.',
    image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=600&h=400&fit=crop',
    category: 'Furniture Care',
    date: '2026-03-05',
    readTime: '4 min read',
    content: 'Wooden furniture adds warmth and character to any room. To keep it looking its best, dust regularly with a soft cloth, avoid direct sunlight exposure, and use coasters under drinks. Apply furniture polish or wax every few months to maintain the finish. Address scratches promptly with touch-up markers or wax sticks.',
  },
  {
    id: 4,
    title: 'Color Trends for 2026: What\'s Hot in Home Decor',
    excerpt: 'Stay ahead of the curve with this year\'s biggest color trends. From earthy tones to bold accents, find out what colors are dominating interior design.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=400&fit=crop',
    category: 'Trends',
    date: '2026-02-28',
    readTime: '6 min read',
    content: '2026 is all about bringing nature indoors. Earthy tones like terracotta, sage green, and warm beige are dominating. Bold accent colors like deep navy and burnt orange add personality. The key is creating harmonious palettes that feel both contemporary and timeless.',
  },
  {
    id: 5,
    title: 'Setting Up the Perfect Home Office',
    excerpt: 'Create a productive workspace at home with the right furniture. Ergonomic chairs, spacious desks, and smart storage solutions for your work-from-home setup.',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=400&fit=crop',
    category: 'Buying Guide',
    date: '2026-02-20',
    readTime: '8 min read',
    content: 'A well-designed home office boosts productivity and reduces fatigue. Invest in an ergonomic chair with lumbar support and adjustable height. Choose a desk with ample surface area and cable management. Ensure proper lighting to reduce eye strain. Add personal touches like plants and artwork to make the space inviting.',
  },
  {
    id: 6,
    title: 'Outdoor Living: Creating Your Dream Patio',
    excerpt: 'Transform your outdoor space into an extension of your home. Weather-resistant furniture, lighting ideas, and decor tips for the perfect patio setup.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop',
    category: 'Interior Design',
    date: '2026-02-15',
    readTime: '6 min read',
    content: 'Your patio should be as comfortable and stylish as your indoor spaces. Choose weather-resistant materials like teak, aluminum, or synthetic wicker. Add comfortable cushions with outdoor-rated fabrics. String lights and lanterns create ambiance for evening entertaining. Don\'t forget shade solutions like umbrellas or pergolas.',
  },
];

const categories = ['All', 'Buying Guide', 'Interior Design', 'Furniture Care', 'Trends'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filtered = selectedCategory === 'All' ? blogPosts : blogPosts.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Our Blog</span>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          Furniture Tips & <span className="text-red-600">Inspiration</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
          Expert advice on interior design, furniture care, and creating beautiful living spaces.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === cat
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(post => (
          <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="relative overflow-hidden h-48">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded flex items-center gap-1">
                <Tag size={10} /> {post.category}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(post.date).toLocaleDateString('en-KE', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
              </div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-1 text-red-600 text-sm font-semibold hover:text-red-700 transition-colors">
                Read More <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
