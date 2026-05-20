export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For SRE &amp; DevOps Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Build Incident Response<br />
          <span className="text-[#58a6ff]">Muscle Memory</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          AI-generated realistic incident scenarios — database outages, API failures, security breaches — quiz your team on proper response procedures and track performance over time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Training — $25/mo
          </a>
          <span className="text-[#8b949e] text-sm">No credit card required for demo</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🚨</div>
            <h3 className="text-white font-semibold mb-1">Realistic Scenarios</h3>
            <p className="text-[#8b949e] text-sm">AI crafts dynamic incidents based on your stack — no two drills are the same.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="text-white font-semibold mb-1">Team Analytics</h3>
            <p className="text-[#8b949e] text-sm">Track response times, accuracy, and improvement trends across your entire on-call rotation.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🧠</div>
            <h3 className="text-white font-semibold mb-1">Guided Playbooks</h3>
            <p className="text-[#8b949e] text-sm">Reinforce best practices with step-by-step feedback after every scenario run.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <span className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest">Team Plan</span>
          <div className="mt-4 mb-2">
            <span className="text-5xl font-bold text-white">$25</span>
            <span className="text-[#8b949e] ml-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Up to 10 team members · Unlimited scenarios</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'AI-generated incident scenarios',
              'Database, API &amp; security breach drills',
              'Team performance dashboard',
              'Playbook feedback &amp; scoring',
              'Slack &amp; PagerDuty integrations',
              'Priority support'
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: f }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How are scenarios generated?</h3>
            <p className="text-[#8b949e] text-sm">We use AI to create realistic, context-aware incidents tailored to common infrastructure patterns. Each scenario includes symptoms, timelines, and expected response steps.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I customize scenarios for my stack?</h3>
            <p className="text-[#8b949e] text-sm">Yes. You can specify your tech stack, cloud provider, and common failure modes so the AI generates incidents that mirror your real environment.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Is there a free trial?</h3>
            <p className="text-[#8b949e] text-sm">We offer a demo mode with 3 free scenarios so your team can experience the training before committing to a subscription.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} Incident Response Trainer. All rights reserved.
      </footer>
    </main>
  )
}
