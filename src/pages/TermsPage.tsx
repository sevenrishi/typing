import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../providers/ThemeProvider';
import { FileText } from 'lucide-react';

const lastUpdated = 'July 06, 2026';

const sections = [
  {
    title: '1. Acceptance of These Terms',
    body: [
      'By accessing or using TypingAI, you agree to these Terms of Service. If you do not agree, you should not use the website.',
      'These terms apply to public visitors, registered users, and anyone who uses TypingAI features, including typing tests, learning tools, AI-assisted practice, and multiplayer sessions.',
      'By creating an account, starting a practice session, joining a live room, or continuing to browse the platform, you confirm that you have read and accepted these terms.',
      'If you do not accept these terms, you must stop using TypingAI and any related services immediately.',
      'Continued use of the service after updates are published confirms acceptance of the revised terms, unless otherwise required by applicable law.',
    ],
  },
  {
    title: '2. Eligibility and Accounts',
    body: [
      'You are responsible for ensuring your use of TypingAI is permitted under applicable laws in your location.',
      'If you create an account, you must provide accurate information and keep login credentials secure.',
      'You are responsible for activity that occurs through your account, including profile actions and submitted content.',
      'If you believe your account has been accessed without permission, you should update credentials and contact support as soon as possible.',
      'TypingAI may require email verification, activation, or third-party sign-in for certain features and may limit functionality for unverified accounts.',
    ],
  },
  {
    title: '3. What TypingAI Provides',
    body: [
      'TypingAI provides typing tests, AI-assisted practice material, learning features, result tracking, and multiplayer race experiences.',
      'Some content may be generated dynamically through AI systems or service logic and may vary over time.',
      'Features may include performance analytics, session history, profile insights, certificates, and other improvement-oriented tools where available.',
      'Service functionality may differ by region, account status, product version, or temporary operational constraints.',
    ],
  },
  {
    title: '4. Acceptable Use',
    body: [
      'You agree not to misuse TypingAI, interfere with normal operation, bypass protections, or attempt unauthorized access to systems or accounts.',
      'You must not use the platform to harass others, impersonate users, submit unlawful content, or disrupt multiplayer sessions and scoring.',
      'Automated abuse, scraping that harms availability, and behavior that degrades service quality are prohibited.',
      'You also agree not to reverse engineer restricted service components, distribute malware, or perform actions designed to compromise security or fairness.',
      'Violations may result in warnings, feature restrictions, temporary suspension, or permanent removal of access depending on severity and recurrence.',
    ],
  },
  {
    title: '5. AI-Generated and User-Submitted Content',
    body: [
      'TypingAI may generate passages and related text automatically. AI output can be imperfect, repetitive, or unsuitable in certain contexts.',
      'You are responsible for prompts, names, text, and other information submitted through your account or devices.',
      'You represent that submitted content does not violate applicable law or third-party rights.',
      'TypingAI does not guarantee that generated responses are complete, accurate, or fit for legal, academic, professional, or safety-critical use without independent review.',
      'By submitting content, you confirm that you have the rights needed to submit it and that its use within the service does not infringe rights of others.',
    ],
  },
  {
    title: '6. Intellectual Property',
    body: [
      'TypingAI interface, branding, design, software, and original platform content are owned by or licensed to the service operator and protected by law.',
      'These terms grant a limited, non-exclusive, revocable right to use the service for intended personal or internal purposes.',
      'No ownership rights in the platform or underlying technology are transferred to users.',
      'Except where expressly permitted, users may not copy, resell, redistribute, or create derivative works from protected platform assets.',
      'All trademarks, logos, and service marks displayed on TypingAI remain the property of their respective owners.',
    ],
  },
  {
    title: '7. Multiplayer, Community, and Fair Competition',
    body: [
      'Users in battleground and live features must compete fairly and must not manipulate race outcomes, exploit bugs, or falsify performance.',
      'TypingAI may reset sessions, restrict participation, or remove access where abuse, cheating, or disruption is reasonably suspected.',
      'Community spaces should be used respectfully, and users are expected to avoid harassment, hate speech, intimidation, and disruptive behavior.',
      'Moderation actions may be applied with or without prior notice when required to protect users, preserve fairness, or maintain platform integrity.',
    ],
  },
  {
    title: '8. Suspension and Termination',
    body: [
      'TypingAI may suspend, restrict, or terminate access to some or all features if terms are violated or misuse creates risk to users or the service.',
      'We may also modify, pause, or discontinue features temporarily or permanently based on technical, legal, or operational needs.',
      'Where practical, we may provide notice before major access changes, but immediate action may be taken in security, abuse, or compliance situations.',
      'After suspension or termination, certain data may remain subject to retention obligations, legal requirements, fraud prevention, and audit controls.',
    ],
  },
  {
    title: '9. Disclaimers',
    body: [
      'TypingAI is provided on an "as is" and "as available" basis without guarantees of uninterrupted uptime, error-free operation, or perfect scoring accuracy.',
      'To the maximum extent permitted by law, implied warranties, including merchantability, fitness for a particular purpose, and non-infringement, are disclaimed.',
      'We do not warrant that the service will always be free from delays, outages, security incidents, or compatibility limitations on all devices and networks.',
      'Any reliance on outputs, scores, recommendations, or generated content is at your own discretion and risk.',
    ],
  },
  {
    title: '10. Limitation of Liability',
    body: [
      'To the extent permitted by law, TypingAI and its operators will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages arising out of or related to your use of the service.',
      'This includes damages tied to data loss, loss of access, interruption, competitive outcomes, business impact, or reliance on generated content.',
      'Where liability cannot be excluded by law, it is limited to the minimum extent permitted.',
      'These limitations apply even if we were advised of the possibility of such damages and regardless of the legal theory asserted.',
      'Nothing in these terms excludes liability that cannot be excluded under applicable law.',
    ],
  },
  {
    title: '11. Changes to the Service or These Terms',
    body: [
      'We may update TypingAI and revise these terms from time to time. When we make material changes, we may update the effective date on this page and publish the revised version on the website.',
      'Continued use of TypingAI after updated terms become effective means you accept the revised terms.',
      'Service updates may include interface changes, feature additions, feature removals, policy adjustments, or revised account requirements.',
      'If you do not agree with a revised version of these terms, your remedy is to stop using the service.',
    ],
  },
  {
    title: '12. Contact',
    body: [
      'If you have questions about these Terms of Service, contact us at support@typingai.live.',
      'For information on personal data handling and privacy practices, please review the Privacy Policy.',
      'When contacting support, include relevant account or session details so issues can be reviewed and resolved more efficiently.',
      'Official notices related to terms may be provided through the website, account notifications, or other valid communication channels.',
    ],
  },
];

export default function TermsPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const supportEmail = 'support@typingai.live';
  const supportMailtoHref = `mailto:${supportEmail}`;
  const supportWebComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(supportEmail)}`;

  const surface = isDark
    ? 'bg-slate-900/70 border-slate-700/60 text-slate-100 backdrop-blur-xl'
    : 'bg-white/80 border-slate-200 text-slate-900 backdrop-blur-xl';
  const mutedText = isDark ? 'text-slate-300' : 'text-slate-600';

  const renderParagraph = (paragraph: string) => {
    if (!paragraph.includes(supportEmail)) {
      return paragraph;
    }

    const [before, after] = paragraph.split(supportEmail);
    return (
      <>
        {before}
        <a
          href={supportMailtoHref}
          className={isDark ? 'font-semibold text-cyan-300 hover:text-cyan-200' : 'font-semibold text-sky-700 hover:text-sky-600'}
        >
          {supportEmail}
        </a>
        {after}
      </>
    );
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6 pb-10">
      <section
        className={`relative overflow-hidden rounded-[30px] border px-6 py-7 md:px-8 md:py-9 ${
          isDark ? 'bg-slate-950/90 border-slate-800' : 'bg-white border-slate-200'
        }`}
      >
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${isDark ? 'hero-grid-dark' : 'hero-grid-light'}`} />
          <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-20 right-20 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        </div>
        <div className="relative z-10 space-y-4">
          <div className="space-y-4">
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] ${
                isDark ? 'border-cyan-500/40 text-cyan-200 bg-slate-900/60' : 'border-sky-200 text-sky-700 bg-sky-50'
              }`}
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <FileText className="h-3.5 w-3.5" />
              Terms of service
            </div>
            <h1
              className="text-3xl font-bold leading-tight md:text-5xl"
              style={{ fontFamily: "'Space Grotesk', 'Segoe UI', sans-serif" }}
            >
              Terms for using TypingAI
            </h1>
            <p className={`max-w-3xl text-lg ${mutedText}`}>
              These Terms of Service explain your rights, responsibilities, and the rules for using TypingAI.
            </p>
            <p className={`text-sm ${mutedText}`}>
              Last updated: <span className="font-semibold">{lastUpdated}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        {sections.map((section) => (
          <section key={section.title} className={`rounded-3xl border p-6 ${surface}`}>
            <h2 className="text-xl font-semibold" style={{ fontFamily: "'Space Grotesk', 'Segoe UI', sans-serif" }}>
              {section.title}
            </h2>
            <div className={`mt-3 space-y-2 text-sm leading-7 ${mutedText}`}>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{renderParagraph(paragraph)}</p>
              ))}
            </div>
          </section>
        ))}
      </section>

      <section className={`rounded-3xl border p-6 ${surface}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold" style={{ fontFamily: "'Space Grotesk', 'Segoe UI', sans-serif" }}>
              Help and legal links
            </h2>
            <p className={`mt-2 text-sm ${mutedText}`}>
              For more details, review the privacy page or contact support.
            </p>
          </div>
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          <Link
            to="/privacy"
            className={`inline-flex items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
              isDark
                ? 'border-slate-700 bg-slate-900/60 text-slate-200 hover:border-cyan-400/60 hover:text-cyan-200'
                : 'border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:text-sky-700'
            }`}
          >
            Read privacy policy
          </Link>
          <Link
            to="/help"
            className={`inline-flex items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
              isDark
                ? 'border-slate-700 bg-slate-900/60 text-slate-200 hover:border-cyan-400/60 hover:text-cyan-200'
                : 'border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:text-sky-700'
            }`}
          >
            Open help center
          </Link>
          <a
            href={supportWebComposeHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open email compose for support@typingai.live"
            className={`inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
              isDark
                ? 'bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 text-slate-900 shadow-[0_18px_40px_rgba(34,211,238,0.35)]'
                : 'bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 text-white shadow-[0_18px_40px_rgba(14,165,233,0.25)]'
            }`}
            title="Open compose for support@typingai.live"
          >
            Email support
          </a>
        </div>
      </section>
    </div>
  );
}
