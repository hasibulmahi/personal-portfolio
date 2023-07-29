import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, Typography } from "@mui/material";
import Layout from "@/components/layout";
import Hero from "@/components/hero/hero.component";
import Services from "@/components/services/services.component";
import Portfolios from "@/components/portfolios/portfolios.component";
import Blog from "@/components/blog/blog.component";
import Education from "@/components/education/education.component";
import LeftPositionedTimeline from "@/components/education/education-timeline";
import Contact from "@/components/contact/contact.component";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Portfolios />
      <Blog />
      <Education />
      <Contact />
    </Layout>
  );
}
