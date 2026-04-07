import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export default function VerifiableIdentityArticle() {
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
                            {['Identity', 'Security', 'Enterprise Controls'].map((tag) => (
                                <span
                                    key={tag}
                                    className="text-sm font-medium px-4 py-1.5 rounded-full bg-nijaGreen/10 text-nijaGreen"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <span>6–8 minutes read</span>
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
                        Verifiable Identity for Partner Ecosystems: Access Control That Scales with Governance
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
                            When an enterprise operates alone, identity management is complicated but contained. Add a network of contractors, channel partners, vendors, and distributed operators, and identity becomes an existential governance problem. Who has access to what? On whose authority? For how long? When circumstances change—an employee leaves, a partnership ends, a security incident occurs—can you revoke access quickly and completely?
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                            Traditional identity and access management (IAM) systems weren't designed for the complexity of modern partner ecosystems. They handle authentication adequately but struggle with lifecycle governance: the ongoing challenge of managing credential issuance, verification, modification, and revocation across organisational boundaries. The result is predictable: zombie accounts, orphaned permissions, delayed revocations, and audit trails that explain nothing.
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
                            Verifiable identity workflows change this by treating credentials not as static entries in a directory but as governed artifacts with explicit lifecycle states. The enterprise benefit isn't cryptographic sophistication—it's the ability to answer critical governance questions with evidence, at speed.
                        </p>

                        {/* Section: The Enterprise Identity Problem */}
                        <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">
                            The Enterprise Identity Problem in Partner Ecosystems
                        </h2>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            Within a single organisation, IAM and single sign-on (SSO) function reasonably well. Centralised directories, unified policy enforcement, and clear reporting lines create manageable control surfaces. But partner ecosystems introduce structural fragmentation:
                        </p>

                        <div className="my-8 space-y-6">
                            <div className="border-l-4 border-nijaGreen pl-6 py-2">
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <strong>Contractors operate under different employment terms.</strong> They may work for multiple clients simultaneously. Their tenure is unpredictable. Their access needs change project by project. Yet they often receive the same credential types as full-time employees, creating confusion about entitlements and liabilities.
                                </p>
                            </div>

                            <div className="border-l-4 border-nijaPurple pl-6 py-2">
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <strong>Channel partners require selective access.</strong> A distribution partner needs visibility into inventory and order status but shouldn't access pricing strategy documents. A reseller needs technical support resources but shouldn't modify customer data. Defining and enforcing these boundaries across dozens or hundreds of partners is operationally taxing.
                                </p>
                            </div>

                            <div className="border-l-4 border-nijaGreen pl-6 py-2">
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <strong>Vendors need temporary, scoped access.</strong> A software vendor troubleshooting an integration requires elevated privileges—but only for the duration of the incident. A facilities contractor needs building access during a specific project window. Traditional IAM systems grant access easily but lack mechanisms to enforce time-limited, context-specific entitlements without manual intervention.
                                </p>
                            </div>

                            <div className="border-l-4 border-nijaPurple pl-6 py-2">
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <strong>Distributed operators work across legal entities.</strong> In franchise models, joint ventures, or decentralised operations, individuals may hold roles in multiple organisations. Their access should reflect their current, legitimate scope—not accumulate indefinitely as relationships evolve.
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                            The risks aren't primarily authentication failures (phishing, credential theft, brute force). Those are known problems with known mitigations. The deeper risks are uncontrolled privilege changes and slow, incomplete revocations. When a contractor's engagement ends, does their access disappear instantly across all systems? When a partner relationship deteriorates, can you revoke credentials without manually auditing every integrated platform? When a security incident requires freezing access for an entire partner organisation, do you have a tested mechanism to do so?
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                            Traditional IAM struggles to answer these questions because it treats identity as a point-in-time authentication decision rather than a governed lifecycle.
                        </p>

                        {/* Section: What Verifiable Identity Changes */}
                        <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">
                            What "Verifiable Identity" Changes
                        </h2>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            Verifiable identity approaches reframe credentials as governed artifacts with explicit lifecycle states:
                        </p>

                        <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 ml-4 mb-8">
                            <li><strong>Issued:</strong> The credential is created by an authorised issuer (HR system, partner management platform, security team).</li>
                            <li><strong>Verified:</strong> The credential holder's identity and entitlements are validated against defined criteria (background checks, business justification, role mapping).</li>
                            <li><strong>Active:</strong> The credential grants access according to policy-defined permissions.</li>
                            <li><strong>Suspended:</strong> Access is temporarily revoked pending investigation, contract renewal, or policy review.</li>
                            <li><strong>Revoked:</strong> The credential is permanently invalidated and can no longer be used.</li>
                            <li><strong>Renewed:</strong> Upon revalidation, the credential is reissued with updated entitlements.</li>
                        </ul>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            Each state transition is logged, auditable, and policy-enforced. The system doesn't just record who logged in—it records who authorised the credential, under what conditions, and why it was modified or revoked.
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            This creates strong, evidence-backed answers to the questions that matter during audits, security incidents, and operational reviews:
                        </p>

                        <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 ml-4 mb-8">
                            <li>"Who had access to this system on this date?" The audit log shows active credentials at any point in time.</li>
                            <li>"Why did this contractor have admin privileges?" The issuance record shows the approval workflow and business justification.</li>
                            <li>"When was this partner's access revoked after the contract ended?" The lifecycle log shows the exact revocation timestamp and initiator.</li>
                            <li>"How long did it take to remove access after the security incident?" The suspension and revocation events provide precise timing.</li>
                        </ul>

                        <blockquote className="border-l-4 border-nijaPurple bg-purple-50 dark:bg-purple-900/20 px-6 py-4 my-8 italic text-lg text-gray-800 dark:text-gray-200">
                            Verifiable identity transforms access control from an operational task into a governed process with built-in accountability.
                        </blockquote>

                        {/* Section: Practical Identity Governance Blueprint */}
                        <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">
                            Practical Identity Governance Blueprint
                        </h2>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            Implementing verifiable identity in partner ecosystems requires more than new technology—it requires process discipline. A scalable enterprise pattern includes five core components:
                        </p>

                        <div className="my-8 space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-nijaGreen">
                                    1. Role-Based Access Control (RBAC) Mapped to Business Roles
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    Ad-hoc permission assignment is the enemy of governance. Every access entitlement should map to a defined business role with documented responsibilities. "Contractor – Project Alpha – Read Access" is a role. "Admin – Financial Systems – Vendor Support" is a role. Arbitrary permission bundles assigned manually by IT support are not.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    Roles should be:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                                    <li><strong>Documented:</strong> What does this role allow? What business function does it serve?</li>
                                    <li><strong>Scoped:</strong> Time-limited where appropriate (project-based roles expire with the project).</li>
                                    <li><strong>Reviewed:</strong> Periodically validated to ensure they remain aligned with business needs.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-nijaPurple">
                                    2. Approval Workflows for High-Risk Actions
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    Certain identity operations carry significant risk: privilege escalation, admin access, cross-organisational permissions. These should never be granted unilaterally. Approval workflows create accountability:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                                    <li><strong>Multi-party approval:</strong> High-risk credentials require sign-off from both the requesting manager and a security owner.</li>
                                    <li><strong>Time-bound approvals:</strong> Elevated access granted for troubleshooting expires automatically after 24 hours unless explicitly renewed.</li>
                                    <li><strong>Context-aware approvals:</strong> Requests include business justification, which is logged for audit purposes.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-nijaGreen">
                                    3. Attestation Cycles
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    Access entitlements decay in relevance. A partner who needed financial data six months ago may no longer require it. Periodic attestation forces managers and security teams to review and revalidate access:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                                    <li>Quarterly reviews for high-risk roles.</li>
                                    <li>Annual reviews for standard partner access.</li>
                                    <li>Event-driven reviews when partnerships change or contracts expire.</li>
                                </ul>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                                    Attestation isn't busywork—it's the mechanism that prevents permission creep and orphaned access.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-nijaPurple">
                                    4. Comprehensive Audit Trails
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    Every identity event should generate a tamper-evident log entry:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
                                    <li>Who issued the credential?</li>
                                    <li>What entitlements does it grant?</li>
                                    <li>Who approved it?</li>
                                    <li>When was it activated, suspended, or revoked?</li>
                                    <li>Why was it modified?</li>
                                </ul>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    Audit trails must be:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                                    <li><strong>Immutable:</strong> Historical records cannot be altered retroactively.</li>
                                    <li><strong>Queryable:</strong> Security teams and auditors can retrieve evidence quickly.</li>
                                    <li><strong>Exportable:</strong> Logs integrate with SIEM platforms and compliance reporting tools.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-nijaGreen">
                                    5. Integration with Existing IAM/SSO
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    Verifiable identity shouldn't replace functional IAM infrastructure—it should enhance governance around it. Integration strategies include:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                                    <li><strong>Federated identity bridges:</strong> Verifiable credentials map to existing SSO identities.</li>
                                    <li><strong>Policy enforcement layers:</strong> Access decisions consult both traditional IAM rules and verifiable credential states.</li>
                                    <li><strong>Audit augmentation:</strong> Verifiable identity logs provide governance context for existing authentication logs.</li>
                                </ul>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                                    This minimises disruption while closing governance gaps.
                                </p>
                            </div>
                        </div>

                        {/* Section: What to Measure */}
                        <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">
                            What to Measure
                        </h2>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            Verifiable identity delivers value only if it improves operational outcomes. Track these metrics to validate effectiveness:
                        </p>

                        <div className="my-8 space-y-6">
                            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                                    Onboarding cycle time
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    How long does it take to provision a new partner or contractor with appropriate access? Has the process accelerated while maintaining governance?
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                                    Revocation response time
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    When a relationship ends or a security incident occurs, how quickly can access be revoked across all systems? Measure time-to-revocation as a critical security metric.
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                                    Policy exceptions per month
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    How often do access decisions bypass approval workflows? A high exception rate indicates either poorly designed roles or insufficient enforcement.
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                                    Audit effort reduction
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    How long does it take to collect evidence for compliance audits or security investigations? Reduced evidence collection time demonstrates improved auditability.
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                                    Access review completion rate
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Are attestation cycles being completed on time? Incomplete reviews signal process breakdown.
                                </p>
                            </div>
                        </div>

                        {/* Section: Common Implementation Mistakes */}
                        <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">
                            Common Implementation Mistakes
                        </h2>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            Even well-resourced organisations make predictable errors when implementing verifiable identity:
                        </p>

                        <div className="my-8 space-y-6">
                            <div className="border-l-4 border-nijaPurple pl-6 py-2">
                                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                                    Over-issuing credentials at launch
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Starting with broad permissions and planning to narrow them later rarely works. Begin with least privilege and expand based on demonstrated need and policy approval. It's easier to grant access than to revoke it after the fact.
                                </p>
                            </div>

                            <div className="border-l-4 border-nijaPurple pl-6 py-2">
                                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                                    No separation of duties
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Admin actions—privilege escalation, policy changes, access revocations—should never be executed by a single individual without oversight. Require approval or co-signing for high-impact operations.
                                </p>
                            </div>

                            <div className="border-l-4 border-nijaPurple pl-6 py-2">
                                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                                    No tested revocation pathway
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Revocation is often treated as an afterthought. It must be fast, reliable, and monitored. Conduct regular drills: Can you revoke access for an entire partner organisation within 15 minutes? If not, your governance framework has a critical gap.
                                </p>
                            </div>

                            <div className="border-l-4 border-nijaPurple pl-6 py-2">
                                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                                    No evidence export capability
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    If auditors or security teams must manually reconstruct access histories, the system has failed. Reporting should be a first-class feature, not a spreadsheet exercise.
                                </p>
                            </div>
                        </div>

                        {/* Section: When Verifiable Identity Is a Fit */}
                        <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">
                            When Verifiable Identity Is a Fit
                        </h2>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            Verifiable identity isn't universally necessary. It delivers disproportionate value in specific contexts:
                        </p>

                        <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 ml-4 mb-8">
                            <li><strong>Partner-heavy operating models.</strong> Franchises, channel partners, vendor networks, joint ventures—any model where external parties require ongoing, evolving access.</li>
                            <li><strong>Regulated workflows needing access evidence.</strong> Financial services, healthcare, defence, critical infrastructure—sectors where auditors demand precise answers to "Who had access and why?"</li>
                            <li><strong>High-value assets or sensitive operations.</strong> Intellectual property repositories, financial systems, production control environments—contexts where unauthorised access carries severe consequences.</li>
                            <li><strong>Security teams needing tighter identity governance.</strong> Organisations facing sophisticated threats or recovering from incidents where compromised partner credentials played a role.</li>
                        </ul>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                            If your organisation struggles to answer "Who currently has access to X?" or "How quickly can we revoke access for partner Y?"—verifiable identity solves that problem.
                        </p>

                        {/* Closing */}
                        <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">
                            Closing: Identity Is the Foundation of Trust
                        </h2>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            The allure of verifiable credentials often centres on technological novelty: cryptographic proofs, decentralised identifiers, blockchain-based registries. But the enterprise win has nothing to do with cryptographic elegance.
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            The win is governance that stands up under scrutiny. When a regulator asks, "How did this contractor gain admin access?" you can provide a timestamped, immutable approval record. When a security incident requires immediate partner access revocation, you execute it in minutes, not days. When auditors request evidence of periodic access reviews, you export the data instantly.
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
                            Identity is the foundation of trust in partner ecosystems. Verifiable identity makes that trust auditable, enforceable, and operationally manageable. Without it, access control scales poorly and governance becomes a liability. With it, access control becomes a strategic capability.
                        </p>

                        <div className="bg-nijaGreen/5 border-l-4 border-nijaGreen px-6 py-4 my-8">
                            <p className="text-gray-800 dark:text-gray-200 leading-relaxed italic">
                                If your organisation can't revoke a partner's access across all systems within an hour, or can't explain why a contractor had elevated privileges six months ago, you don't have an identity technology problem. You have a governance problem. And no amount of SSO or IAM investment will fix it without lifecycle visibility and policy enforcement.
                            </p>
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-12">
                            <strong>About this series:</strong> This article is part of our exploration of tokenisation's practical applications in enterprise operations. Future pieces will examine fractional asset ownership, supply chain transparency, and programmable compliance infrastructure.
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
                                Explore Identity Management
                            </Link>
                            <Link
                                to="/contact"
                                className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:border-nijaGreen dark:hover:border-nijaGreen rounded-lg font-medium transition duration-150"
                            >
                                Request a Security Brief
                            </Link>
                            <Link
                                to="/contact"
                                className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:border-nijaGreen dark:hover:border-nijaGreen rounded-lg font-medium transition duration-150"
                            >
                                Talk to a Solutions Architect
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
