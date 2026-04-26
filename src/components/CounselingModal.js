import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];

export default function CounselingModal({ onClose, prefilledCareer }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    class: '', stream: prefilledCareer || '', slot: '', date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const { locale, t } = useLanguage();

  const subjects = locale === 'hi'
    ? ['इंजीनियरिंग / टेक्नोलॉजी', 'मेडिकल / MBBS', 'फार्मेसी', 'कॉमर्स / CA / फाइनेंस', 'लॉ', 'डिज़ाइन / फैशन', 'सिविल सर्विसेज (IAS/IPS)', 'होटल मैनेजमेंट', 'अन्य']
    : ['Engineering / Technology', 'Medical / MBBS', 'Pharmacy', 'Commerce / CA / Finance', 'Law', 'Design / Fashion', 'Civil Services (IAS/IPS)', 'Hotel Management', 'Other'];

  const handleChange = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Calculate min date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-fade-in-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 to-indigo-700 p-6 rounded-t-2xl text-white">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white text-xl">✕</button>
          <div className="text-3xl mb-2">🎓</div>
          <h2 className="text-xl font-bold">{t('counselingModal.title')}</h2>
          <p className="text-violet-200 text-sm mt-1">{t('counselingModal.subtitle')}</p>

          {/* Step indicators */}
          {!submitted && (
            <div className="flex items-center gap-2 mt-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    s === step ? 'bg-white text-violet-700 shadow' : s < step ? 'bg-white/40 text-white' : 'bg-white/20 text-white/60'
                  }`}>
                    {s < step ? '✓' : s}
                  </div>
                  {s < 3 && <div className={`h-0.5 w-8 ${s < step ? 'bg-white/60' : 'bg-white/20'}`} />}
                </div>
              ))}
              <span className="text-white/60 text-xs ml-2">
                {step === 1 ? t('counselingModal.step1Label') : step === 2 ? t('counselingModal.step2Label') : t('counselingModal.step3Label')}
              </span>
            </div>
          )}
        </div>

        {submitted ? (
          /* Success Screen */
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 animate-bounce-slow">
              ✅
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('counselingModal.successTitle')}</h3>
            <p className="text-gray-600 text-sm mb-6">
              {t('counselingModal.successBodyPrefix')} <strong>{form.name}</strong>! {t('counselingModal.successBodyMid')} <strong>{form.date}</strong> at <strong>{form.slot}</strong>.
              {` ${t('counselingModal.successBodyEnd')} `}<strong>{form.phone}</strong>.
            </p>
            <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 mb-6 text-left">
              <p className="text-violet-800 font-semibold text-sm mb-2">{t('counselingModal.whatToExpect')}</p>
              <ul className="text-violet-700 text-sm space-y-1">
                <li>• 30–45 minute 1-on-1 video call</li>
                <li>• Personalised roadmap for your chosen career</li>
                <li>• College recommendations & exam strategy</li>
                <li>• Q&A with career expert</li>
              </ul>
            </div>
            <button onClick={onClose} className="w-full py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold rounded-xl">
              {t('counselingModal.done')}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Step 1 — Personal Details */}
            {step === 1 && (
              <div className="space-y-4 animate-fade-in-up">
                <h3 className="font-bold text-gray-900">{t('counselingModal.stepDetails')}</h3>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('counselingModal.fullName')}</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder={t('counselingModal.fullNamePlaceholder')}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('counselingModal.phone')}</label>
                  <div className="flex gap-2">
                    <span className="px-3 py-3 bg-gray-100 border border-gray-200 rounded-xl text-sm text-gray-600">+91</span>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder={t('counselingModal.phonePlaceholder')}
                      maxLength={10}
                      pattern="[0-9]{10}"
                      className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('counselingModal.email')}</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder={t('counselingModal.emailPlaceholder')}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('counselingModal.currentClass')}</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['10th', '11th', '12th', '12th Pass', 'Graduation', 'Other'].map((c) => (
                      <button
                        key={c} type="button"
                        onClick={() => handleChange('class', c)}
                        className={`py-2.5 rounded-xl text-sm font-medium transition-all border ${
                          form.class === c
                            ? 'bg-violet-600 text-white border-violet-600'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-violet-300'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  disabled={!form.name || !form.phone || !form.class}
                  onClick={() => setStep(2)}
                  className="w-full py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold rounded-xl disabled:opacity-40 transition-all hover:opacity-90"
                >
                  {t('counselingModal.next')}
                </button>
              </div>
            )}

            {/* Step 2 — Subject / Career */}
            {step === 2 && (
              <div className="space-y-4 animate-fade-in-up">
                <h3 className="font-bold text-gray-900">{t('counselingModal.stepSubject')}</h3>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('counselingModal.careerInterest')}</label>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {subjects.map((s) => (
                      <button
                        key={s} type="button"
                        onClick={() => handleChange('stream', s)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all border ${
                          form.stream === s
                            ? 'bg-violet-50 border-violet-400 text-violet-700'
                            : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-violet-300'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('counselingModal.question')}</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={3}
                    placeholder={t('counselingModal.questionPlaceholder')}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
                  />
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)} className="flex-1 py-3 border border-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-50">
                    {t('counselingModal.back')}
                  </button>
                  <button
                    type="button"
                    disabled={!form.stream}
                    onClick={() => setStep(3)}
                    className="flex-1 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold rounded-xl disabled:opacity-40"
                  >
                    {t('counselingModal.next')}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 — Pick Time */}
            {step === 3 && (
              <div className="space-y-4 animate-fade-in-up">
                <h3 className="font-bold text-gray-900">{t('counselingModal.stepTime')}</h3>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('counselingModal.preferredDate')}</label>
                  <input
                    type="date"
                    required
                    min={minDate}
                    value={form.date}
                    onChange={(e) => handleChange('date', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('counselingModal.preferredTime')}</label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot} type="button"
                        onClick={() => handleChange('slot', slot)}
                        className={`py-2.5 rounded-xl text-sm font-medium transition-all border ${
                          form.slot === slot
                            ? 'bg-violet-600 text-white border-violet-600'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-violet-300'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Summary */}
                {form.date && form.slot && (
                  <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 text-sm">
                    <p className="font-semibold text-violet-800 mb-2">{t('counselingModal.bookingSummary')}</p>
                    <p className="text-violet-700">👤 {form.name} | 📱 +91 {form.phone}</p>
                    <p className="text-violet-700">📅 {form.date} at {form.slot}</p>
                    <p className="text-violet-700">🎯 {form.stream}</p>
                  </div>
                )}

                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(2)} className="flex-1 py-3 border border-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-50">
                    {t('counselingModal.back')}
                  </button>
                  <button
                    type="submit"
                    disabled={!form.date || !form.slot}
                    className="flex-1 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold rounded-xl disabled:opacity-40 hover:opacity-90"
                  >
                    {t('counselingModal.confirm')}
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
