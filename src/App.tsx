import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Announcements from './components/Announcements';
import SystemsGrid from './components/SystemsGrid';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header onSupportClick={() => setSupportOpen(true)} />
      <main>
        <Hero />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          <Announcements />
          <SystemsGrid />
          <FAQ />
        </section>
      </main>
      <Footer />

      {supportOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setSupportOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSupportOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors text-xl leading-none"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-1" style={{ color: '#0f2d5e' }}>
              IT Support
            </h2>
            <p className="text-slate-500 text-sm mb-6">Reach us through any of the channels below.</p>
            <div className="space-y-4">
              {[
                { label: 'Email', value: 'ithelpdesk@unikl.edu.my' },
                { label: 'Phone', value: '+603 2175 0000 ext. 4500' },
                { label: 'Hours', value: 'Mon–Fri, 8:00 AM – 5:00 PM' },
                { label: 'Location', value: 'IT Department, Level 3, Admin Block, UniKL RCMP' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="font-semibold text-sm w-20 shrink-0" style={{ color: '#1a56a0' }}>{label}</span>
                  <span className="text-slate-700 text-sm">{value}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setSupportOpen(false)}
              className="mt-8 w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: '#0f2d5e' }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
