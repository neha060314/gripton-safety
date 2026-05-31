import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CertificationsSection from '../components/CertificationsSection';
import AboutSection from '../components/AboutSection';
import ProductCategories from '../components/ProductCategories';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactCTA from '../components/ContactCTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductCategories />
      <CertificationsSection />
      <WhyChooseUs />
      <ContactCTA />
      <Footer />
    </div>
  );
}