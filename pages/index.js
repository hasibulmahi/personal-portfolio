import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, Typography } from "@mui/material";
import Layout from "@/components/layout";
import Hero from "@/components/hero/hero.component";
import Services from "@/components/services/services.component";
import Portfolios from "@/components/portfolios/portfolios.component";
import Education from "@/components/education/education.component";
import Contact from "@/components/contact/contact.component";
import Testimonial from "@/components/testimonials/testimonial.component";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Portfolios />
      <Testimonial />
      <Education />
      <Contact />
    </Layout>
  );
}
