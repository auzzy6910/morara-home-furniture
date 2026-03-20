import { useState } from 'react';
import { Star, ThumbsUp, User } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  helpful: number;
}

const sampleReviews: Review[] = [
  { id: 1, name: 'Sarah M.', rating: 5, date: '2026-03-10', comment: 'Absolutely stunning piece! The quality is exceptional and it looks even better in person. Delivery was prompt and the assembly team was very professional.', helpful: 12 },
  { id: 2, name: 'James K.', rating: 4, date: '2026-03-05', comment: 'Great quality for the price. Very comfortable and well-made. Minor scuff on delivery but customer service resolved it quickly.', helpful: 8 },
  { id: 3, name: 'Wanjiku N.', rating: 5, date: '2026-02-28', comment: 'This transformed my living room completely! So many compliments from guests. Will definitely shop here again.', helpful: 15 },
  { id: 4, name: 'David O.', rating: 4, date: '2026-02-20', comment: 'Solid build quality and beautiful finish. Assembly was straightforward. Very happy with my purchase.', helpful: 6 },
];

interface CustomerReviewsProps {
  productId: number;
  productRating: number;
  reviewCount: number;
}

export default function CustomerReviews({ productRating, reviewCount }: CustomerReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>(sampleReviews);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });
  const [helpfulClicked, setHelpfulClicked] = useState<Set<number>>(new Set());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.comment.trim()) return;
    
    const review: Review = {
      id: Date.now(),
      name: newReview.name,
      rating: newReview.rating,
      date: new Date().toISOString().split('T')[0],
      comment: newReview.comment,
      helpful: 0,
    };
    setReviews(prev => [review, ...prev]);
    setNewReview({ name: '', rating: 5, comment: '' });
    setShowForm(false);
  };

  const handleHelpful = (reviewId: number) => {
    if (helpfulClicked.has(reviewId)) return;
    setHelpfulClicked(prev => new Set(prev).add(reviewId));
    setReviews(prev => prev.map(r => r.id === reviewId ? { ...r, helpful: r.helpful + 1 } : r));
  };

  const ratingDistribution = [5, 4, 3, 2, 1].map(stars => ({
    stars,
    count: reviews.filter(r => r.rating === stars).length,
    percentage: (reviews.filter(r => r.rating === stars).length / reviews.length) * 100,
  }));

  return (
    <section className="mt-16 border-t dark:border-gray-700 pt-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
        Customer Reviews
      </h2>

      {/* Rating Summary */}
      <div className="flex flex-col md:flex-row gap-8 mb-10">
        <div className="text-center md:text-left">
          <div className="text-5xl font-bold text-gray-900 dark:text-white">{productRating}</div>
          <div className="flex items-center justify-center md:justify-start gap-1 mt-2">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} size={18} className={i < Math.floor(productRating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
            ))}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Based on {reviewCount} reviews</p>
        </div>

        <div className="flex-1 space-y-2">
          {ratingDistribution.map(({ stars, count, percentage }) => (
            <div key={stars} className="flex items-center gap-3">
              <span className="text-sm text-gray-600 dark:text-gray-400 w-8">{stars} <Star size={12} className="inline fill-yellow-400 text-yellow-400" /></span>
              <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-400 rounded-full transition-all" style={{ width: `${percentage}%` }} />
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 w-8">{count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Write Review Button */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-8 bg-red-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-red-700 transition-colors"
      >
        {showForm ? 'Cancel' : 'Write a Review'}
      </button>

      {/* Review Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              value={newReview.name}
              onChange={e => setNewReview(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-2 border dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Rating</label>
            <div className="flex gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setNewReview(prev => ({ ...prev, rating: i + 1 }))}
                >
                  <Star size={24} className={i < newReview.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Review</label>
            <textarea
              value={newReview.comment}
              onChange={e => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
              rows={4}
              className="w-full px-4 py-2 border dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <button type="submit" className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-red-700 transition-colors">
            Submit Review
          </button>
        </form>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map(review => (
          <div key={review.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border dark:border-gray-700">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  <User size={18} className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{new Date(review.date).toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={14} className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
                ))}
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{review.comment}</p>
            <button
              onClick={() => handleHelpful(review.id)}
              className={`mt-3 flex items-center gap-1.5 text-xs transition-colors ${
                helpfulClicked.has(review.id) ? 'text-red-600' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
              }`}
            >
              <ThumbsUp size={12} />
              Helpful ({review.helpful})
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
