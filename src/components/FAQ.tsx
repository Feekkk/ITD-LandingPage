import { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How do I reset my student/staff portal password?',
    a: 'Visit the Student or Staff Portal login page and click "Forgot Password." A reset link will be sent to your registered institutional email. If you do not receive the email within 10 minutes, contact the IT Helpdesk at ithelpdesk@unikl.edu.my.',
  },
  {
    q: 'How do I connect to the campus Wi-Fi network?',
    a: 'Select "UniKL-RCMP" from your device\'s Wi-Fi list. First-time users must register their device via the Network Portal using their student or staff ID. Detailed instructions are available on the Network Portal documentation page.',
  },
  {
    q: 'What is the process for submitting an IT support ticket?',
    a: 'Log in to the IT Helpdesk portal and click "New Ticket." Select the appropriate category, provide a clear description of the issue, and attach any relevant screenshots. You will receive an acknowledgment email with a ticket reference number. Our team targets a response within 4 business hours.',
  },
  {
    q: 'How do I access Microsoft 365 (Office, Teams, OneDrive)?',
    a: 'Navigate to the Webmail (M365) system listed above and sign in with your institutional credentials (studentID@student.unikl.edu.my or staffID@unikl.edu.my). All enrolled students and active staff are entitled to the full Microsoft 365 suite at no charge.',
  },
  {
    q: 'Can I install software on campus lab computers?',
    a: 'Lab computers are managed by the IT Department and do not permit user-level software installation. If your course requires specific software, submit a request through the IT Helpdesk with your lecturer\'s endorsement and we will evaluate the deployment.',
  },
  {
    q: 'What should I do if I suspect a phishing or suspicious email?',
    a: 'Do not click any links or download attachments. Forward the email as an attachment to itsecurity@unikl.edu.my and then delete it from your inbox. The IT Security team will investigate and notify users if broader action is needed.',
  },
  {
    q: 'How do I book a computer lab or smart classroom?',
    a: 'Use the Room Booking system listed in the Internal Systems section. Select your preferred date, time, and room, then submit your request. Approval notifications are sent to your institutional email within one business day.',
  },
  {
    q: 'What are the IT Department\'s office hours?',
    a: 'Our walk-in helpdesk operates Monday to Friday, 8:00 AM – 5:00 PM (closed on public holidays). For urgent after-hours issues, submit a ticket marked "High Priority" and our on-call team will respond within 2 hours.',
  },
];

interface FAQItemProps {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ q, a, open, onToggle, index }: FAQItemProps) {
  return (
    <div
      className={`border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-300 ${
        open ? 'shadow-md' : 'shadow-sm hover:shadow-md'
      }`}
      style={{ background: open ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.85)' }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 p-5 sm:p-6 text-left group"
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors"
          style={{
            background: open ? '#0f2d5e' : '#e8f0fb',
            color: open ? '#ffffff' : '#0f2d5e',
          }}
        >
          {index + 1}
        </span>
        <span
          className="flex-1 font-semibold text-sm sm:text-base leading-snug transition-colors"
          style={{ color: open ? '#0f2d5e' : '#1e293b' }}
        >
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 mt-0.5 transition-transform duration-300 text-slate-400 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out`}
        style={{ maxHeight: open ? '300px' : '0px' }}
      >
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
          <div className="ml-11 pl-0">
            <p className="text-slate-600 text-sm leading-relaxed border-l-2 border-blue-200 pl-4">{a}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div id="faq">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
            style={{ background: '#0f2d5e' }}
          >
            <HelpCircle size={18} className="text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold" style={{ color: '#0f2d5e' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-slate-500">Quick answers to common IT queries</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {faqs.map((item, idx) => (
          <FAQItem
            key={idx}
            q={item.q}
            a={item.a}
            open={openIndex === idx}
            onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
}
