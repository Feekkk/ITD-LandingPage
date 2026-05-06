import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FAQSection from '../components/FAQSection';

const BELOW_FIXED_HEADER = 'pt-20';

export default function FAQPage() {
  return (
    <main className={`min-h-[calc(100vh-5rem)] bg-slate-50 ${BELOW_FIXED_HEADER} pb-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 min-h-[44px]"
          style={{ color: '#0f2d5e' }}
        >
          <ArrowLeft size={16} aria-hidden />
          Home
        </Link>

        <div className="mt-6">
          <FAQSection />
        </div>
      </div>
    </main>
  );
}
