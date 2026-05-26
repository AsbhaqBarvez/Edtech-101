import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { FeaturedCategories } from "@/components/sections/FeaturedCategories";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturedCourses } from "@/components/sections/FeaturedCourses";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { EducatorsCTA } from "@/components/sections/EducatorsCTA";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedCategories />
      <HowItWorks />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
      <EducatorsCTA />
      <FAQ />
      <FinalCTA />
    </>
  );
}
