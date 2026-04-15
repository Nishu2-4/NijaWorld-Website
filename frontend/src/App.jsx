import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './pages/About';
import AIPage from './pages/AIPage';
import DigitisationPage from './pages/DigitisationPage';
import AutomationPage from './pages/AutomationPage';
import InfrastructureIntelligencePage from './pages/InfrastructureIntelligencePage';
import TokenisationPage from './pages/TokenisationPage';
import AuditPage from './pages/AuditPage';
import SmartContractsPage from './pages/SmartContractsPage';
import IdentityPrimitivesPage from './pages/IdentityPrimitivesPage';
import ThreatDetectionPage from './pages/ThreatDetectionPage';
import IdentitySecurityPage from './pages/IdentitySecurityPage';
import PolicyCompliancePage from './pages/PolicyCompliancePage';
import IncidentResponsePage from './pages/IncidentResponsePage';
import BlockchainPage from './pages/BlockchainPage';
import CaseStudies from './pages/CaseStudies';
import CaseStudyPrivateCredit from './pages/CaseStudyPrivateCredit';
import CaseStudyRealEstate from './pages/CaseStudyRealEstate';
import CaseStudyDynamic from './pages/CaseStudyDynamic';
import DigitalAdvisoryPage from './pages/DigitalAdvisoryPage';
import Contact from './pages/Contact';
import CybersecurityPage from './pages/CybersecurityPage';
import EcosystemPage from './pages/EcosystemPage';
import NijaWalletPage from './pages/NijaWalletPage';
import NijaDiiAPage from './pages/NijaDiiAPage';
import SmaCGPage from './pages/SmaCGPage';
import TokeniZPage from './pages/TokeniZPage';
import DAVProPage from './pages/DAVProPage';
import Home from './pages/Home';
import IdentityPage from './pages/IdentityPage';
import Insights from './pages/Insights';
import Join from './pages/Join';
import LoyaltyPage from './pages/LoyaltyPage';
import Media from './pages/Media';
import Partners from './pages/Partners';
import RWALiquidityPage from './pages/RWALiquidityPage';
import Signup from './pages/Signup';
import SolutionsPage from './pages/SolutionsPage';
import SupplyChainPage from './pages/SupplyChainPage';
import Technologies from './pages/Technologies';
import AIDataCentresPage from './pages/AIDataCentresPage';
import AIDataCentresConsultingPage from './pages/AIDataCentresConsultingPage';
import AIDataCentresTurnkeyPage from './pages/AIDataCentresTurnkeyPage';
import WhitePapers from './pages/WhitePapers';
import WhitePaperAIDataCentre from './pages/WhitePaperAIDataCentre';
import Blogs from './pages/Blogs';

import BlogPost from './pages/BlogPost';
import Dashboard from './pages/Dashboard';
import AdminLogin from './pages/AdminLogin';
import ForgotPassword from './pages/ForgotPassword';
import { AuthProvider } from './context/AuthContext';
import InsightArticle from './pages/InsightArticle';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const location = useLocation();

  return (
    <AuthProvider>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/technologies' element={<Technologies />} />
          <Route path='/technologies/ai' element={<AIPage />} />
          <Route path='/technologies/ai/digitisation' element={<DigitisationPage />} />
          <Route path='/technologies/ai/automation' element={<AutomationPage />} />
          <Route path='/technologies/ai/infrastructure-intelligence' element={<InfrastructureIntelligencePage />} />
          <Route path='/technologies/blockchain' element={<BlockchainPage />} />
          <Route path='/technologies/blockchain/tokenisation' element={<TokenisationPage />} />
          <Route path='/technologies/blockchain/audit' element={<AuditPage />} />
          <Route path='/technologies/blockchain/smart-contracts' element={<SmartContractsPage />} />
          <Route path='/technologies/blockchain/identity' element={<IdentityPrimitivesPage />} />
          <Route path='/technologies/cybersecurity' element={<CybersecurityPage />} />
          <Route path='/technologies/cybersecurity/threat-detection' element={<ThreatDetectionPage />} />
          <Route path='/technologies/cybersecurity/identity-security' element={<IdentitySecurityPage />} />
          <Route path='/technologies/cybersecurity/policy-compliance' element={<PolicyCompliancePage />} />
          <Route path='/technologies/cybersecurity/incident-response' element={<IncidentResponsePage />} />
          <Route path='/technologies/ai-data-centres' element={<AIDataCentresPage />} />
          <Route path='/technologies/ai-data-centres/consulting' element={<AIDataCentresConsultingPage />} />
          <Route path='/technologies/ai-data-centres/consulting/turnkey-solutions' element={<AIDataCentresTurnkeyPage />} />
          <Route path='/white-papers' element={<WhitePapers />} />
          <Route path='/white-papers/ai-data-centres' element={<WhitePaperAIDataCentre />} />
          <Route path='/solutions' element={<SolutionsPage />} />
          <Route path='/solutions/tokenisation' element={<TokenisationPage />} />
          <Route path='/solutions/supply-chain' element={<SupplyChainPage />} />
          <Route path='/solutions/identity' element={<IdentityPage />} />
          <Route path='/solutions/loyalty' element={<LoyaltyPage />} />
          <Route path='/solutions/advisory' element={<DigitalAdvisoryPage />} />
          <Route path='/ecosystem' element={<EcosystemPage />} />
          <Route path='/ecosystem/nija-wallet' element={<NijaWalletPage />} />
          <Route path='/ecosystem/nija-diia' element={<NijaDiiAPage />} />
          <Route path='/ecosystem/smac-g' element={<SmaCGPage />} />
          <Route path='/ecosystem/tokeniz' element={<TokeniZPage />} />
          <Route path='/ecosystem/davpro' element={<DAVProPage />} />
          <Route path='/solutions/rwa-liquidity' element={<RWALiquidityPage />} />
          <Route path='/case-studies' element={<CaseStudies />} />
          <Route path='/case-studies/rwa-liquidity-private-credit-notes' element={<CaseStudyPrivateCredit />} />
          <Route path='/case-studies/rwa-liquidity-real-estate-cashflows' element={<CaseStudyRealEstate />} />
          <Route path='/case-studies/:slug' element={<CaseStudyDynamic />} />
          <Route path='/insights' element={<Insights />} />
          <Route path='/insights/:slug' element={<InsightArticle />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/join' element={<Join />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:slug' element={<BlogPost />} />
          <Route path='/admin-login' element={<AdminLogin />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/media' element={<Media />} />
          <Route path='/partners' element={<Partners />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </AuthProvider>
  );
}

export default App;
