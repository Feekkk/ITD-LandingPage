import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Network() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
        style={{ color: '#0f2d5e' }}
      >
        <ArrowLeft size={16} />
        Back to home
      </Link>
      <h1 className="mt-8 text-3xl font-extrabold text-slate-900 tracking-tight">Network & Wi‑Fi</h1>
      <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
        Placeholder page—replace this copy when content is ready.
      </p>
    </main>
  );
}
