import { X, ShoppingCart, Info, AlertCircle } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-20 right-4 z-[100] space-y-2 max-w-sm">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border animate-slide-in ${
            toast.type === 'success'
              ? 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700 text-green-800 dark:text-green-200'
              : toast.type === 'error'
              ? 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-700 text-red-800 dark:text-red-200'
              : 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700 text-blue-800 dark:text-blue-200'
          }`}
        >
          {toast.type === 'success' ? (
            <ShoppingCart size={18} className="shrink-0" />
          ) : toast.type === 'error' ? (
            <AlertCircle size={18} className="shrink-0" />
          ) : (
            <Info size={18} className="shrink-0" />
          )}
          <span className="text-sm font-medium flex-1">{toast.message}</span>
          <button
            onClick={() => removeToast(toast.id)}
            className="shrink-0 hover:opacity-70 transition-opacity"
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}
