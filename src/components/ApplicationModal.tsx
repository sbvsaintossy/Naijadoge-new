import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, MessageSquare, Loader2, AlertCircle } from 'lucide-react';
import { submitToFormspree, FORMSPREE_ENDPOINT } from '../services/formspree';

interface ApplicationModalProps {
  isOpen: boolean;
  type: 'host' | 'agent';
  defaultPlatform?: string;
  onClose: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  type,
  defaultPlatform,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    platform: defaultPlatform || 'Bigo Live',
    role: type === 'host' ? 'Host / Streamer' : 'Talent Agent / Sub-Agency',
    country: 'Nigeria',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (defaultPlatform) {
      setFormData((prev) => ({ ...prev, platform: defaultPlatform }));
    }
    setFormData((prev) => ({
      ...prev,
      role: type === 'host' ? 'Host / Streamer' : 'Talent Agent / Sub-Agency',
    }));
  }, [type, defaultPlatform, isOpen]);

  if (!isOpen) return null;

  const isHost = type === 'host';

  const validate = () => {
    if (!formData.name.trim()) return 'Please enter your full name.';
    if (!formData.email.trim() || !formData.email.includes('@')) return 'Please provide a valid email address.';
    if (!formData.phone.trim() || formData.phone.length < 7) return 'Please provide a valid phone/WhatsApp number.';
    if (!formData.platform) return 'Please select one of our 6 official platforms.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setErrorMessage(validationError);
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const result = await submitToFormspree({
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      platform: formData.platform,
      role: formData.role,
      country: formData.country,
      message: formData.message.trim() || `Applied as ${formData.role} on ${formData.platform}`,
    });

    if (result.ok) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Submission failed. Please connect with our VIP Desk on WhatsApp.');
    }
  };

  const directWhatsAppUrl = `https://wa.me/22897317115?text=${encodeURIComponent(
    `Hello Naijadoge VIP Desk, I submitted an application for ${formData.role} on ${formData.platform} (${formData.name}, ${formData.phone}). Please fast-track my verification under RC 9075257.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        id="application-modal-dialog"
        className="relative w-full max-w-lg bg-[#0B1728] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.15)] text-left text-white max-h-[92vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 text-[#B8C4D3] hover:text-white bg-[#11253E] rounded-full border border-white/10 cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {status === 'success' ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto animate-in zoom-in-75 duration-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] block">
                Official Agency Dispatch
              </span>
              <h3 className="text-2xl font-bold font-display text-white">Application Received</h3>
              <p className="text-xs sm:text-sm text-[#B8C4D3] max-w-sm mx-auto leading-relaxed">
                Your application for <strong className="text-white">{formData.platform}</strong> ({formData.role}) has been submitted via Formspree to Naijadoge Executive Desk.
              </p>
            </div>

            <div className="p-4 bg-[#07111F] rounded-xl border border-white/10 text-xs text-[#B8C4D3] text-left space-y-1.5">
              <div className="flex justify-between">
                <span>Applicant:</span>
                <span className="text-white font-semibold">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Target Platform:</span>
                <span className="text-[#D4AF37] font-semibold">{formData.platform}</span>
              </div>
              <div className="flex justify-between">
                <span>Contact Phone:</span>
                <span className="text-white font-mono">{formData.phone}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#D4AF37] hover:bg-[#E8D38A] text-[#07111F] font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp VIP Fast-Track</span>
              </a>
              <button
                onClick={onClose}
                className="px-5 py-3 bg-[#11253E] hover:bg-white/10 text-white font-medium rounded-xl text-xs uppercase tracking-wider border border-white/10"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-[11px] font-bold tracking-wide uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isHost ? 'Official Host Enrollment' : 'Certified Agent Partnership'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                {isHost ? 'Step Into The Global Spotlight' : 'Build A Million-Dollar Agency'}
              </h2>
              <p className="text-xs sm:text-sm text-[#B8C4D3] mt-1.5 leading-relaxed">
                Direct enrollment on our 6 authorized streaming platforms with guaranteed salary clearance, algorithmic FYP distribution, and wholesale coin backing.
              </p>
            </div>

            {status === 'error' && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl flex items-center gap-2.5 text-xs text-rose-300">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Amara Okafor"
                    className="w-full bg-[#11253E] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+234 801 234 5678"
                    className="w-full bg-[#11253E] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="creator@example.com"
                    className="w-full bg-[#11253E] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1">
                    Target Platform (Official 6) *
                  </label>
                  <select
                    name="platform"
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    className="w-full bg-[#11253E] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    <option value="Bigo Live">Bigo Live (Enterprise Agency)</option>
                    <option value="TikTok Live">TikTok Live (Global Tier)</option>
                    <option value="Olamet">Olamet (Direct Video Chats)</option>
                    <option value="Chamet">Chamet (Party Rooms & VIP Gifting)</option>
                    <option value="Tandoo">Tandoo (Rapid Growth Live)</option>
                    <option value="Emma">Emma (Curated VIP Talent)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1">
                    Desired Role *
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-[#11253E] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    <option value="Host / Streamer">Host / Streamer</option>
                    <option value="Talent Agent / Sub-Agency">Talent Agent / Sub-Agency Head</option>
                    <option value="Token & Coin Wholesaler">Token & Coin Reseller Desk</option>
                    <option value="Salary Program Applicant">Salary Clearance Agency</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1">
                    Country of Residence
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-[#11253E] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    <option value="Nigeria">Nigeria 🇳🇬</option>
                    <option value="Ghana">Ghana 🇬🇭</option>
                    <option value="Kenya">Kenya 🇰🇪</option>
                    <option value="South Africa">South Africa 🇿🇦</option>
                    <option value="Togo">Togo 🇹🇬</option>
                    <option value="Ivory Coast">Ivory Coast 🇨🇮</option>
                    <option value="Cameroon">Cameroon 🇨🇲</option>
                    <option value="Senegal">Senegal 🇸🇳</option>
                    <option value="Egypt">Egypt 🇪🇬</option>
                    <option value="Uganda">Uganda 🇺🇬</option>
                    <option value="Other African Country">Other African Nation 🌍</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1">
                  Message / Streaming Experience
                </label>
                <textarea
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your streaming handle, past hours, or why you'd like to join Naijadoge..."
                  className="w-full bg-[#11253E] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 px-4 bg-[#D4AF37] hover:bg-[#E8D38A] disabled:opacity-50 text-[#07111F] font-bold text-xs uppercase tracking-[0.15em] rounded-xl transition-all cursor-pointer shadow-[0_4px_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 active:scale-98"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-between text-[10px] text-[#B8C4D3]/70 px-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    RC 9075257 Licensed Agency
                  </span>
                  <span>Formspree Encrypted Transmission</span>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
