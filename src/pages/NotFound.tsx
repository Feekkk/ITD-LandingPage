import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
        style={{ color: '#0f2d5e' }}
      >
        <ArrowLeft size={16} />
        Back to home
      </Link>
      <h1 className="mt-8 text-3xl font-extrabold text-slate-900">Page not found</h1>
      <p className="mt-2 text-slate-500 text-sm">
        This route doesn’t exist. Try opening a system page like <span className="font-semibold">/systems/venuquip</span>.
      </p>
    </div>
  );
}

