import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export default function TokenisedLoyaltyArticle() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className='min-h-screen relative bg-white dark:bg-baseDark'
        >
            <AnimatedPageBackground />
            <Navbar />

            {/* Article Header */}
            <article className="pt-32 pb-16 relative z-10">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Back button */}
                    <Link
                        to="/insights"
                        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-nijaGreen transition-colors duration-150 mb-8"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Insights
                    </Link>

                    {/* Metadata */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mb-8"
                    >
                        <div className="flex flex-wrap gap-3 mb-6">
                            {['Loyalty', 'Tokenisation', 'Analytics'].map((tag) => (
                                <span
                                    key={tag}
                                    className="text-sm font-medium px-4 py-1.5 rounded-full bg-nijaGreen/10 text-nijaGreen"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <span>5–7 minutes read</span>
                            <span>•</span>
                            <span>January 2026</span>
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white font-heading leading-tight"
                    >
                        Tokenised Loyalty Programs: Engagement Gains Without Losing Governance
                    </motion.h1>

                    {/* Article Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="prose prose-lg dark:prose-invert max-w-none"
                    >
                        {/* Introduction */}
                        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                            Most loyalty programs begin with clear intent: reward customers, drive repeat purchases, build emotional connection. Yet within months, they become operational nightmares—spreadsheets tracking manual adjustments, finance teams chasing unexplained reward liabilities, marketing unable to explain why certain campaigns performed poorly. The problem isn't the concept of loyalty. It's that traditional systems lack the structural discipline to operate at scale without chaos.
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
                            Tokenisation offers a solution, but only when paired with genuine governance. Without policy enforcement, audit trails, and cross-functional accountability, tokenised loyalty becomes another source of technical debt. The real opportunity lies in turning loyalty into a controlled, measurable, auditable operational asset.
                        </p>

                        {/* Section: The Loyalty Problem */}
                        <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">
                            The Loyalty Problem Is Operational, Not Conceptual
                        </h2>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            The challenges plaguing enterprise loyalty programs are rarely strategic. They emerge from execution gaps:
                        </p>

                        <div className="my-8 space-y-6">
                            <div className="border-l-4 border-nijaGreen pl-6 py-2">
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <strong>Manual adjustments erode trust and control.</strong> Customer service representatives override reward balances without documentation. Marketing teams issue promotional credits that bypass approval workflows. Finance discovers unexplained liabilities only during quarterly close. Each exception chips away at system integrity.
                                </p>
                            </div>

                            <div className="border-l-4 border-nijaPurple pl-6 py-2">
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <strong>Inconsistent rules across channels create customer friction.</strong> A customer earns points online but cannot redeem them in-store because the systems don't synchronise. Tier benefits available through the mobile app aren't honoured by call centre agents. Rule fragmentation turns loyalty into a source of dissatisfaction.
                                </p>
                            </div>

                            <div className="border-l-4 border-nijaGreen pl-6 py-2">
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <strong>Disconnected reporting obscures performance.</strong> Marketing measures engagement through redemption rates. Finance tracks outstanding liability. Operations monitor fraud signals. But these metrics live in separate systems, making it impossible to answer basic questions: What is the true ROI of our loyalty program? Where is breakage occurring? Which customer segments drive profitable behaviour?
                                </p>
                            </div>

                            <div className="border-l-4 border-nijaPurple pl-6 py-2">
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <strong>Fraud and abuse signals arrive too late.</strong> By the time someone notices unusual redemption patterns—account takeovers, collusion rings, promotional abuse—significant value has leaked. Post-incident detection becomes an expensive game of containment rather than prevention.
                                </p>
                            </div>
                        </div>

                        <blockquote className="border-l-4 border-nijaPurple bg-purple-50 dark:bg-purple-900/20 px-6 py-4 my-8 italic text-lg text-gray-800 dark:text-gray-200">
                            Tokenisation can address these issues, but only if it's governed from day one. A tokenised loyalty program without policy controls is simply a faster way to create the same operational mess.
                        </blockquote>

                        {/* Section: What a Governed System Looks Like */}
                        <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">
                            What a Governed Tokenised Loyalty System Looks Like
                        </h2>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            Effective tokenised loyalty systems are built on five operational pillars:
                        </p>

                        <div className="my-8 space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-nijaGreen">
                                    1. Reward Issuance Rules
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Every point or token issued must follow defined logic: Who is eligible? Under what conditions? What are the caps? Who must approve exceptions? Issuance rules should be codified, version-controlled, and auditable. When a promotional campaign grants bonus rewards, the system should enforce eligibility criteria automatically and log every decision.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-nijaPurple">
                                    2. Redemption Logic with Clear Constraints
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Redemption should be consistent across all channels—web, mobile, in-store, partner networks. Constraints must be explicit: minimum redemption thresholds, product exclusions, expiration policies, tier-based benefits. When a customer attempts to redeem, the system evaluates rules in real time and provides transparent feedback. No ambiguity. No channel-specific exceptions.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-nijaGreen">
                                    3. Comprehensive Audit Logs
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Every issuance, redemption, adjustment, and policy change should generate an immutable audit trail. Who issued the reward? When? Under which campaign? Who redeemed it? Was it overridden? Why? Audit logs aren't just compliance hygiene—they're the foundation for operational learning. When you can trace every action, you can identify patterns, detect anomalies, and refine rules.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-nijaPurple">
                                    4. Reconciliation Exports for Finance
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    Finance needs to reconcile reward liabilities against actual redemptions. This requires clean, timestamped data: total rewards issued, outstanding balances, redemptions by period, breakage estimates. Tokenised systems should export this data in formats that integrate seamlessly with enterprise financial systems—no manual spreadsheet wrangling required.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-nijaGreen">
                                    5. Analytics Dashboard for Operational Intelligence
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    Marketing, finance, and operations need shared visibility. Dashboards should surface:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                                    <li><strong>Engagement metrics:</strong> Redemption rates, repeat purchase behaviour, tier progression</li>
                                    <li><strong>Financial metrics:</strong> Outstanding liability, breakage trends, cost per engagement</li>
                                    <li><strong>Operational metrics:</strong> Manual adjustment frequency, fraud exceptions, campaign iteration speed</li>
                                    <li><strong>Customer segmentation:</strong> Which cohorts drive value? Which are dormant?</li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                            When these pillars exist, loyalty becomes controllable, measurable, and easier to operate. The system enforces consistency while providing the transparency needed for continuous improvement.
                        </p>

                        {/* Section: Where Tokenisation Adds Value */}
                        <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">
                            Where Tokenisation Adds Value (Practically)
                        </h2>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            Tokenisation isn't magic. It's infrastructure. The value emerges from structural advantages:
                        </p>

                        <div className="my-8 space-y-6">
                            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                                    Transparent reward accounting reduces reconciliation friction
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Traditional loyalty systems require constant manual reconciliation between marketing platforms, CRM databases, and financial ledgers. Tokenised systems create a single source of truth: every reward issued and redeemed is logged on an immutable ledger. Finance gains real-time visibility into liabilities. Marketing can validate campaign performance without waiting for month-end reports.
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                                    Partner programs become operationally feasible
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Cross-brand loyalty (airline miles usable for hotel stays, retail points redeemable at restaurants) requires complex settlement logic. Who owes whom? At what exchange rate? Tokenisation enables defined, automated settlement rules. Partners can participate without building custom integrations, and disputes can be resolved by referencing auditable transaction logs.
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                                    Consistent reward behaviour across online and offline channels
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Tokenised rewards exist independently of the channel through which they're earned or redeemed. A customer earning tokens in-store can redeem them online without synchronisation delays. Call centre agents, mobile apps, and point-of-sale systems all interact with the same authoritative ledger.
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                                    Audit-ready evidence for adjustments and approvals
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    When exceptions occur—goodwill credits, dispute resolutions, promotional corrections—the system logs the adjustment, the approver, and the rationale. If regulators, auditors, or internal stakeholders request evidence, it's retrievable instantly.
                                </p>
                            </div>
                        </div>

                        {/* Section: What to Measure */}
                        <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">
                            What to Measure
                        </h2>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            Governance without measurement is theatre. To validate whether tokenised loyalty delivers value, track:
                        </p>

                        <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 ml-4 mb-8">
                            <li><strong>Engagement uplift:</strong> Are redemption rates increasing? Are customers making repeat purchases faster? Are higher-tier members behaving differently?</li>
                            <li><strong>Manual adjustment reduction:</strong> How many fewer customer service overrides are required? Has the need for ad hoc corrections declined?</li>
                            <li><strong>Reconciliation time reduction:</strong> How long does finance spend reconciling loyalty liabilities? Has it decreased measurably?</li>
                            <li><strong>Fraud and abuse exceptions reduced:</strong> Are anomaly detection systems catching issues earlier? Has the volume of fraud-related chargebacks or write-offs declined?</li>
                            <li><strong>Campaign iteration speed with governance maintained:</strong> Can marketing launch new campaigns faster without compromising policy compliance? Are approval cycles shorter?</li>
                        </ul>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                            These metrics tell you whether the system is delivering operational leverage, not just technical novelty.
                        </p>

                        {/* Section: Mistakes to Avoid */}
                        <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">
                            Mistakes to Avoid
                        </h2>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            Even well-intentioned tokenised loyalty programs fail when organisations make predictable errors:
                        </p>

                        <div className="my-8 space-y-6">
                            <div className="border-l-4 border-nijaGreen pl-6 py-2">
                                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                                    Treating it as a marketing-only system
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Loyalty touches finance (liability management), operations (fraud prevention), legal (terms enforcement), and customer service (exception handling). If marketing owns the system in isolation, governance gaps emerge. Cross-functional ownership is non-negotiable.
                                </p>
                            </div>

                            <div className="border-l-4 border-nijaPurple pl-6 py-2">
                                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                                    Launching without a policy engine
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Promotions, tier benefits, and redemption rules will change. If policy updates require engineering sprints, the system becomes too rigid to operate. A proper policy engine allows controlled, auditable changes to rules without redeploying code.
                                </p>
                            </div>

                            <div className="border-l-4 border-nijaGreen pl-6 py-2">
                                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                                    Neglecting reporting infrastructure
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    If stakeholders can't answer basic questions—What is our current liability? Which campaigns drove the most engagement?—the system becomes a black box. Reporting isn't optional; it's the feedback loop that enables improvement.
                                </p>
                            </div>
                        </div>

                        {/* Closing */}
                        <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">
                            Closing: Governance Turns Loyalty Into an Operational Asset
                        </h2>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            The enterprise value of tokenised loyalty isn't in the novelty of blockchain or the elegance of cryptographic proofs. It's in control plus insight. When loyalty programs operate with transparent issuance rules, consistent redemption logic, comprehensive audit trails, and real-time analytics, they stop being cost centres plagued by exceptions and start becoming strategic assets that drive measurable customer value.
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
                            Tokenisation is the infrastructure. Governance is what makes it work.
                        </p>

                        <div className="bg-nijaGreen/5 border-l-4 border-nijaGreen px-6 py-4 my-8">
                            <p className="text-gray-800 dark:text-gray-200 leading-relaxed italic">
                                If your loyalty program can't answer "Who issued this reward and why?" or "What is our actual liability right now?" within seconds, you don't have a technology problem. You have a governance problem. And tokenisation alone won't fix it.
                            </p>
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-12">
                            <strong>About this series:</strong> This article is part of our exploration of tokenisation's practical applications in enterprise operations. Future pieces will examine asset tokenisation, supply chain transparency, and programmable compliance infrastructure.
                        </p>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800"
                    >
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/solutions"
                                className="px-6 py-3 bg-nijaGreen hover:bg-green-500 text-white rounded-lg font-medium transition duration-150"
                            >
                                Explore Loyalty Solution
                            </Link>
                            <Link
                                to="/contact"
                                className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:border-nijaGreen dark:hover:border-nijaGreen rounded-lg font-medium transition duration-150"
                            >
                                Download Overview
                            </Link>
                            <Link
                                to="/contact"
                                className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:border-nijaGreen dark:hover:border-nijaGreen rounded-lg font-medium transition duration-150"
                            >
                                Request a Demo
                            </Link>
                        </div>
                    </motion.div>

                    {/* Back to insights */}
                    <div className="mt-12 text-center">
                        <Link
                            to="/insights"
                            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-nijaGreen transition-colors duration-150"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to all insights
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </motion.div>
    );
}
