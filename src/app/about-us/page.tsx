import PageContainer from '@/components/PageContainer';
import LogoHeader from '@/components/LogoHeader';

export default function AboutUs() {
  return (
    <PageContainer>
      <LogoHeader showLogo={true} showTitle={true} showSubtitle={true} />
      <div className="mt-8">
        <h1 className="text-3xl font-higuen font-bold mb-4 uppercase tracking-[2px]">About Us</h1>
        <h2 className="text-lg font-brandon mb-4">A modern haven for hookah and tea lovers</h2>
        <p className="text-base font-brandon leading-relaxed mb-6">
          Paradiz Teahouse &amp; Hookah Lounge is a contemporary retreat where tradition meets modern comfort. We offer a unique blend of authentic hookah experiences and premium tea selections in a luxurious setting.<br /><br />
          Our mission is to create a welcoming space where guests can relax, socialize, and enjoy the finest flavors in an elegant atmosphere.
        </p>
      </div>
    </PageContainer>
  );
} 