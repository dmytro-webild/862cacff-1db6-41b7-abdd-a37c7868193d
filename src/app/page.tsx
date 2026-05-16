"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeLargeTitles"
        background="blurBottom"
        cardStyle="inset"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Products", id: "products" },
        { name: "Contact", id: "contact" }
      ]}
      brandName="Jubba Shop"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="The Best Electronics in Nairobi"
      description="Experience superior quality and authentic devices at Bihi Towers. We bring the latest tech to your doorstep with 18+ positive reviews."
      testimonials={[
        { name: "Sarah O.", handle: "@sarah_o", testimonial: "Excellent service and genuine phones at great prices.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-work_23-2149546182.jpg" },
        { name: "John K.", handle: "@john_k", testimonial: "Bought my laptop here, absolutely professional staff.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/lifestyle-portrait-happy-excited-young-man-sitting-coffee-shop-with-laptop-headphones_1258-245362.jpg" },
        { name: "Mercy A.", handle: "@mercy_a", testimonial: "Jubba Shop is my go-to for all my office electronics.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-woman-with-long-brown-hair-black-t-shirt-white-jacket_613910-8245.jpg" },
        { name: "David M.", handle: "@david_m", testimonial: "Trustworthy and reliable store. Fast support.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-male-student-carrying-bag-shoulder-books-hand-standing-against-red-wall_23-2148093325.jpg" },
        { name: "Faith B.", handle: "@faith_b", testimonial: "High quality gadgets, would highly recommend to everyone.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/beautiful-teenagers-enjoying-amusement-park_23-2148624855.jpg" }
      ]}
      buttons={[{ text: "Visit Store", href: "#products" }]}
      imageSrc="http://img.b2bpic.net/free-photo/girl-with-shopping-bags-holding-tablet-mock-up_23-2148286182.jpg?_wi=1"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/teleworker-home-office-editing-documents-his-personal-laptop_482257-125861.jpg", alt: "Teleworker at home office" },
        { src: "http://img.b2bpic.net/free-photo/happy-handsome-young-african-american-businessman-dressed-shirt_273609-9150.jpg", alt: "Businessman" },
        { src: "http://img.b2bpic.net/free-photo/happy-dark-skinned-male-freelancer-uses-modern-electronic-gadgets-remote-work-sits-against-cozy-coffee-shop-interior-drinks-aromatic-espresso_273609-3449.jpg", alt: "Freelancer" },
        { src: "http://img.b2bpic.net/free-photo/african-american-business-man-using-laptop-cafe_1303-15076.jpg", alt: "Businessman" },
        { src: "http://img.b2bpic.net/free-photo/family-car-salon-woman-buying-thecar-seat-little-african-girl-with-mther_1157-45043.jpg", alt: "Family in car" }
      ]}
      avatarText="Trusted by 500+ locals"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        { type: "text", content: "Your Trusted " },
        { type: "image", src: "http://img.b2bpic.net/free-photo/seller-man-mobile-phone-professional-consultant-tech-store-shop-hold-new-smartphone-hand_627829-4967.jpg", alt: "Jubba Shop" },
        { type: "text", content: " Electronics Partner in Kenya" }
      ]}
      buttons={[{ text: "Learn More", href: "#" }]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { tag: "Quality", title: "Authentic Products", subtitle: "Premium tech", description: "100% genuine products directly sourced.", imageSrc: "http://img.b2bpic.net/free-photo/many-different-smart-phones-displayed-dark-background-busy-office-scene_1372-28.jpg" },
        { tag: "Audio", title: "Premium Audio", subtitle: "Top brand gear", description: "Crystal clear sound with our latest range.", imageSrc: "http://img.b2bpic.net/free-photo/headphones-near-crop-amplifier_23-2147781796.jpg" },
        { tag: "Compute", title: "High Performance", subtitle: "Computing power", description: "Reliable laptops for work and school.", imageSrc: "http://img.b2bpic.net/free-photo/abstract-blur-shopping-mall_1203-7930.jpg" }
      ]}
      title="Why Choose Jubba Shop"
      description="We guarantee high standards, reliability, and the best tech solutions in Nairobi."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        { id: "p1", brand: "TechBrand", name: "Smartphone Pro", price: "KSh 45,000", rating: 5, reviewCount: "12", imageSrc: "http://img.b2bpic.net/free-photo/father-s-day-composition-with-mobile-phone-other-elements_23-2147632048.jpg" },
        { id: "p2", brand: "AudioTech", name: "Wireless Buds", price: "KSh 6,500", rating: 4, reviewCount: "8", imageSrc: "http://img.b2bpic.net/free-photo/performer-putting-forefinger-lips-gesturing-secrecy-sign-while-performing-electronic-music-studio-pink-background-musical-artist-playing-sounds-produce-melody-mixer-console_482257-60923.jpg" },
        { id: "p3", brand: "PadTech", name: "Tab Lite", price: "KSh 22,000", rating: 5, reviewCount: "15", imageSrc: "http://img.b2bpic.net/free-photo/chef-with-tablet_23-2148145647.jpg" },
        { id: "p4", brand: "WatchCo", name: "Smart Watch", price: "KSh 8,000", rating: 4, reviewCount: "5", imageSrc: "http://img.b2bpic.net/free-photo/afro-american-female-athlete-drinks-fresh-water-afterworkout-checks-heartbeat-smartwatch-listens-music-headphones-poses-city_273609-54954.jpg" },
        { id: "p5", brand: "ComputeCo", name: "Pro Laptop", price: "KSh 75,000", rating: 5, reviewCount: "20", imageSrc: "http://img.b2bpic.net/free-photo/high-end-company-office-with-computer-showing-detailed-data-insights-executive-business-meetings_482257-133111.jpg" },
        { id: "p6", brand: "AudioTech", name: "BT Speaker", price: "KSh 4,500", rating: 5, reviewCount: "10", imageSrc: "http://img.b2bpic.net/free-photo/woman-wearing-headphones-looking-christmas-lights_23-2148397182.jpg" }
      ]}
      title="Our Best-Selling Gadgets"
      description="Explore our curated collection of high-quality electronics."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "basic", title: "Essential Care", price: "KSh 1,500", period: "/year", features: ["Phone screen insurance", "1-year basic support"], button: { text: "Select Plan" }, imageSrc: "http://img.b2bpic.net/free-photo/background-with-printed-circuit-board-concept-modern-technologies_169016-61800.jpg" },
        { id: "pro", title: "Premium Protection", price: "KSh 3,000", period: "/year", features: ["Full accidental coverage", "2-year priority support", "Free battery check"], button: { text: "Select Plan" }, imageSrc: "http://img.b2bpic.net/free-photo/girl-with-shopping-bags-holding-tablet-mock-up_23-2148286182.jpg?_wi=2" },
        { id: "ultimate", title: "Ultimate Peace", price: "KSh 5,000", period: "/year", features: ["Everything in Premium", "Device replacement option", "24/7 expert remote help"], button: { text: "Select Plan" }, imageSrc: "http://img.b2bpic.net/free-photo/seller-man-mobile-phone-professional-consultant-tech-store-shop-hold-new-smartphone-hand_627829-4967.jpg" }
      ]}
      title="Tech Protection Plans"
      description="Keep your gadgets protected with our extra care services."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      animationType="slide-up"
      useInvertedBackground={true}
      metrics={[
        { id: "m1", value: "18+", description: "Verified Google Reviews" },
        { id: "m2", value: "4.8", description: "Average Rating Score" },
        { id: "m3", value: "500+", description: "Happy Customers Served" }
      ]}
      title="Why Jubba Shop Leads"
      description="Empowering our community with high-tech solutions."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Sarah O.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-successful-woman-with-blue-shirt_1098-3627.jpg" },
        { id: "t2", name: "John K.", imageSrc: "http://img.b2bpic.net/free-photo/entrepreneur-working-home-office-desk-laptop-writing-notebook_482257-114440.jpg" },
        { id: "t3", name: "Mercy A.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-male-florist-with-colorful-flowers-shop_23-2148075323.jpg" },
        { id: "t4", name: "David M.", imageSrc: "http://img.b2bpic.net/free-photo/indian-man-customer-buyer-mobile-phone-store-choose-his-new-smartphone-south-asian-peoples-technologies-concept-cellphone-shop_627829-1255.jpg" },
        { id: "t5", name: "Faith B.", imageSrc: "http://img.b2bpic.net/free-photo/photogenic-woman-smiling-with-heaphones-shopping-mall0_23-2148397231.jpg" }
      ]}
      cardTitle="Client Experiences"
      cardTag="Testimonials"
      cardAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{ variant: "sparkles-gradient" }}
      text="Visit us at Bihi Towers, 1st Floor Shop 8, Moi Avenue or call 0702 322233 for inquiries."
      buttons={[{ text: "Call Now", href: "tel:0702322233" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Jubba Shop"
      columns={[
        {
          title: "Store",          items: [{ label: "About Us", href: "#about" }, { label: "Products", href: "#products" }]
        },
        {
          title: "Support",          items: [{ label: "Contact", href: "#contact" }, { label: "Google Reviews", href: "#" }]
        },
        {
          title: "Legal",          items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }]
        }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
