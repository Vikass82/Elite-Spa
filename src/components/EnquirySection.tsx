import React, { useState } from 'react';
import { MessageCircle, Phone, Clock, Calendar, CheckCircle2, AlertCircle, Sparkles, Send } from 'lucide-react';
import { SPA_CONFIG, buildWhatsAppLink, getCallNowLink } from '../config/spaConfig';
import { AppointmentEnquiry } from '../types';

interface EnquirySectionProps {
  initialService?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<AppointmentEnquiry>({
    name: '',
    phone: '',
    service: initialService || 'Full Body Massage',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<AppointmentEnquiry | null>(null);

  // Form input validation
  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Submit via Web Enquiry Flow
  const handleSubmitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const enquiryRecord: AppointmentEnquiry = {
      ...formData,
      id: `enq_${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'Pending',
    };

    setSubmittedEnquiry(enquiryRecord);
    setSubmitted(true);
  };

  // Direct WhatsApp Forward with all enquiry details
  const handleOpenWhatsAppWithDetails = () => {
    const details = [
      'Hello, I would like to request an appointment/enquiry at Elite DayNight OutCall Spa.',
      formData.name ? `Name: ${formData.name}` : '',
      formData.phone ? `Phone: ${formData.phone}` : '',
      formData.service ? `Service: ${formData.service}` : '',
      formData.preferredDate ? `Preferred Date: ${formData.preferredDate}` : '',
      formData.preferredTime ? `Preferred Time: ${formData.preferredTime}` : '',
      formData.message ? `Notes: ${formData.message}` : '',
      'Please let me know current pricing, duration and availability.',
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${SPA_CONFIG.whatsappInternational}?text=${encodeURIComponent(details)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#101215] border-t border-[#1e232b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181b22] border border-[#2a313e] text-xs text-[#d4af37] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect & Request</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#f4efe6] tracking-tight">
            Request an Appointment / Send an Enquiry
          </h2>
          <p className="text-base text-[#b0a89a] mt-4 font-light leading-relaxed">
            Our reception team is available 24 hours. Fill out the request form below or connect directly on WhatsApp.
            Please note that appointments are verified directly by our reception staff to ensure availability.
          </p>
        </div>

        {/* Quick Instant WhatsApp Enquiries Ribbon */}
        <div className="max-w-5xl mx-auto mb-12">
          <span className="block text-xs font-semibold text-[#8f887b] uppercase tracking-wider text-center mb-3">
            Instant One-Click Inquiries via WhatsApp
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              id="quick-whatsapp-general"
              href={buildWhatsAppLink('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#14161c] border border-[#242934] hover:border-[#d4af37]/60 flex items-center gap-3 transition-colors text-left"
            >
              <div className="w-9 h-9 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <MessageCircle className="w-4 h-4 fill-current" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#f4efe6] block">General Spa Enquiry</span>
                <span className="text-[11px] text-[#9a9385]">Ask about services & hours</span>
              </div>
            </a>

            <a
              id="quick-whatsapp-fullbody"
              href={buildWhatsAppLink('service', { serviceName: 'Full Body Massage' })}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#14161c] border border-[#242934] hover:border-[#d4af37]/60 flex items-center gap-3 transition-colors text-left"
            >
              <div className="w-9 h-9 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37] flex-shrink-0">
                <MessageCircle className="w-4 h-4 fill-current" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#f4efe6] block">Full Body Massage</span>
                <span className="text-[11px] text-[#9a9385]">Enquire price & availability</span>
              </div>
            </a>

            <a
              id="quick-whatsapp-thai"
              href={buildWhatsAppLink('service', { serviceName: 'Thai Massage' })}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#14161c] border border-[#242934] hover:border-[#d4af37]/60 flex items-center gap-3 transition-colors text-left"
            >
              <div className="w-9 h-9 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37] flex-shrink-0">
                <MessageCircle className="w-4 h-4 fill-current" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#f4efe6] block">Thai Massage Enquiry</span>
                <span className="text-[11px] text-[#9a9385]">Enquire price & availability</span>
              </div>
            </a>
          </div>
        </div>

        {/* Main Form & Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          {/* Left Column: Direct Contact Info & Verification Notice */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#14161b] border border-[#242933] p-6 shadow-xl">
              <h3 className="font-serif-luxury text-2xl font-bold text-[#f4efe6] mb-3">
                Direct Contact
              </h3>
              <p className="text-xs text-[#a49d90] leading-relaxed mb-6 font-light">
                Prefer immediate confirmation? Reach our desk directly by telephone or WhatsApp.
              </p>

              <div className="space-y-4">
                <a
                  id="contact-box-call-now"
                  href={getCallNowLink()}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#191d24] border border-[#29303d] hover:border-[#d4af37]/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#8e877a] uppercase font-medium block">
                        Telephone Call
                      </span>
                      <span className="text-sm font-semibold text-[#f4efe6]">
                        {SPA_CONFIG.phoneDisplay}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[#d4af37] font-medium">Dial Now →</span>
                </a>

                <a
                  id="contact-box-whatsapp-now"
                  href={buildWhatsAppLink('appointment')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#191d24] border border-[#29303d] hover:border-[#d4af37]/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                      <MessageCircle className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#8e877a] uppercase font-medium block">
                        WhatsApp Line
                      </span>
                      <span className="text-sm font-semibold text-[#f4efe6]">
                        {SPA_CONFIG.whatsappNumber}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-400 font-medium">Chat Now →</span>
                </a>
              </div>

              {/* Operating status reminder */}
              <div className="mt-6 pt-5 border-t border-[#212631] flex items-center gap-3 text-xs text-[#b8b0a2]">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  Reception operates <strong className="text-[#f4efe6]">24 Hours</strong>. Direct inquiries are answered round the clock.
                </span>
              </div>
            </div>

            {/* Factual Transparency Card */}
            <div className="rounded-xl bg-[#121418] border border-[#212630] p-4 text-xs text-[#8f887b] leading-relaxed">
              <span className="font-semibold text-[#cfc7b9] block mb-1">
                Transparent Booking Policy
              </span>
              In accordance with authentic booking standards, this form submits an appointment request.
              An appointment is confirmed only once our reception staff verifies slot availability with you.
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#14161b] border border-[#262c37] p-6 sm:p-8 shadow-xl">
              {submitted ? (
                /* Success Screen fulfilling required exact text */
                <div id="enquiry-success-message" className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f4efe6] mb-3">
                    Thank you. Your enquiry has been received.
                  </h3>

                  <p className="text-sm text-[#d4af37] font-medium mb-4 max-w-md mx-auto">
                    The spa will confirm availability with you.
                  </p>

                  <div className="bg-[#101216] border border-[#232833] rounded-xl p-4 text-xs text-[#a59d90] max-w-md mx-auto text-left mb-6 space-y-1">
                    <p>
                      <strong className="text-[#e2dbce]">Guest Name:</strong> {submittedEnquiry?.name}
                    </p>
                    <p>
                      <strong className="text-[#e2dbce]">Phone Number:</strong> {submittedEnquiry?.phone}
                    </p>
                    <p>
                      <strong className="text-[#e2dbce]">Service:</strong> {submittedEnquiry?.service}
                    </p>
                    {submittedEnquiry?.preferredDate && (
                      <p>
                        <strong className="text-[#e2dbce]">Preferred Date:</strong>{' '}
                        {submittedEnquiry?.preferredDate}
                      </p>
                    )}
                    {submittedEnquiry?.preferredTime && (
                      <p>
                        <strong className="text-[#e2dbce]">Preferred Time:</strong>{' '}
                        {submittedEnquiry?.preferredTime}
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-[#8e877b] mb-6">
                    Would you like to expedite confirmation immediately on WhatsApp or Phone?
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      id="success-send-whatsapp"
                      type="button"
                      onClick={handleOpenWhatsAppWithDetails}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-[#0c0d0e] bg-gradient-to-r from-[#d4af37] to-[#e4c465] hover:brightness-110 shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Forward Details to WhatsApp</span>
                    </button>

                    <a
                      id="success-call-now"
                      href={getCallNowLink()}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-medium text-[#f4efe6] bg-[#1a1e26] border border-[#2e3544] hover:bg-[#222834]"
                    >
                      <Phone className="w-4 h-4 text-[#d4af37]" />
                      <span>Call Reception Now</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setSubmittedEnquiry(null);
                    }}
                    className="mt-6 text-xs text-[#a29b8f] hover:text-[#f4efe6] underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                /* The Enquiry Form */
                <form id="appointment-enquiry-form" onSubmit={handleSubmitEnquiry} noValidate>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#f4efe6] mb-1">
                    Enquiry Details
                  </h3>
                  <p className="text-xs text-[#9c9487] mb-6 font-light">
                    Fields marked with an asterisk (*) are required.
                  </p>

                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="enquiry-name" className="block text-xs font-medium text-[#cfc7ba] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="enquiry-name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0e1014] border ${
                          errors.name ? 'border-rose-500' : 'border-[#262c37]'
                        } text-[#f4efe6] text-sm focus:outline-none focus:border-[#d4af37] transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="enquiry-phone" className="block text-xs font-medium text-[#cfc7ba] mb-1.5">
                        Contact Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="enquiry-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 09967461876 or 9820012345"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0e1014] border ${
                          errors.phone ? 'border-rose-500' : 'border-[#262c37]'
                        } text-[#f4efe6] text-sm focus:outline-none focus:border-[#d4af37] transition-colors`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label htmlFor="enquiry-service" className="block text-xs font-medium text-[#cfc7ba] mb-1.5">
                        Service Interested In *
                      </label>
                      <select
                        id="enquiry-service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0e1014] border border-[#262c37] text-[#f4efe6] text-sm focus:outline-none focus:border-[#d4af37] transition-colors cursor-pointer"
                      >
                        <option value="Full Body Massage">Full Body Massage (Confirmed)</option>
                        <option value="Thai Massage">Thai Massage (Confirmed)</option>
                        <option value="OutCall Massage Enquiry">OutCall Massage Service Enquiry</option>
                        <option value="General Wellness Enquiry">General Wellness / Custom Consultation</option>
                      </select>
                    </div>

                    {/* Preferred Date & Time (Optional) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="enquiry-date"
                          className="block text-xs font-medium text-[#cfc7ba] mb-1.5 flex items-center gap-1"
                        >
                          <Calendar className="w-3 h-3 text-[#d4af37]" />
                          Preferred Date (Optional)
                        </label>
                        <input
                          type="date"
                          id="enquiry-date"
                          name="preferredDate"
                          min={new Date().toISOString().split('T')[0]}
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#0e1014] border border-[#262c37] text-[#f4efe6] text-xs focus:outline-none focus:border-[#d4af37] transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="enquiry-time"
                          className="block text-xs font-medium text-[#cfc7ba] mb-1.5 flex items-center gap-1"
                        >
                          <Clock className="w-3 h-3 text-emerald-400" />
                          Preferred Time (Optional)
                        </label>
                        <select
                          id="enquiry-time"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#0e1014] border border-[#262c37] text-[#f4efe6] text-xs focus:outline-none focus:border-[#d4af37] transition-colors cursor-pointer"
                        >
                          <option value="">Any Time (24 Hours Open)</option>
                          <option value="Morning (08:00 - 12:00)">Morning (08:00 - 12:00)</option>
                          <option value="Afternoon (12:00 - 17:00)">Afternoon (12:00 - 17:00)</option>
                          <option value="Evening (17:00 - 22:00)">Evening (17:00 - 22:00)</option>
                          <option value="Late Night (22:00 - 04:00)">Late Night (22:00 - 04:00)</option>
                          <option value="Early Morning (04:00 - 08:00)">Early Morning (04:00 - 08:00)</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="enquiry-message" className="block text-xs font-medium text-[#cfc7ba] mb-1.5">
                        Special Notes or Inquiries (Optional)
                      </label>
                      <textarea
                        id="enquiry-message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Share any specific requirements or ask about outcall scheduling..."
                        className="w-full px-4 py-3 rounded-xl bg-[#0e1014] border border-[#262c37] text-[#f4efe6] text-sm focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                      />
                    </div>

                    {/* Submission Buttons */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="submit"
                        id="submit-enquiry-button"
                        className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-[#0c0d0e] bg-gradient-to-r from-[#d4af37] to-[#e4c465] hover:brightness-110 shadow-md shadow-[#d4af37]/20 transition-all font-sans cursor-pointer min-h-[48px]"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Request</span>
                      </button>

                      <button
                        type="button"
                        id="whatsapp-direct-submit-button"
                        onClick={handleOpenWhatsAppWithDetails}
                        className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-[#f4efe6] bg-[#1a1e26] border border-[#2f3544] hover:bg-[#222834] transition-all cursor-pointer min-h-[48px]"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
                        <span>Send on WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
