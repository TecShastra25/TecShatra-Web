import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Features from "../components/Features";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingShape from "../components/kokonutui/FloatingShape";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import BlogPreview from "../components/BlogPreview";

export default function Layout({ children, pagetitle }) {
  return (
    <div className="relative overflow-auto transition-colors">
      {/* Set Dynamic Page Title */}
      <Head>
        <title>{pagetitle ? `${pagetitle} | TecShastra` : "TecShastra - Home"}</title>
      </Head>

      {/* Global Floating Shapes Covering Entire Website */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Top Floating Shapes */}
        <FloatingShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          color="bg-indigo-500/30"
          className="left-[-10%] md:left-[-5%] top-[5%] md:top-[10%]"
          scrollEffect
        />
        <FloatingShape
          delay={0.4}
          width={520}
          height={130}
          rotate={-10}
          color="bg-purple-500/30"
          className="right-[10%] top-[10%]"
          scrollEffect
        />
        <FloatingShape
          delay={0.5}
          width={480}
          height={110}
          rotate={12}
          color="bg-indigo-500/30"
          className="left-[15%] top-[20%]"
          scrollEffect
        />
        <FloatingShape
          delay={0.6}
          width={350}
          height={100}
          rotate={18}
          color="bg-cyan-500/30"
          className="right-[5%] top-[25%]"
          scrollEffect
        />

        {/* Middle Floating Shapes */}
        <FloatingShape
          delay={0.7}
          width={300}
          height={150}
          rotate={-15}
          color="bg-red-500/30"
          className="left-[5%] top-[50%]"
        />
        <FloatingShape
          delay={0.8}
          width={250}
          height={120}
          rotate={10}
          color="bg-green-500/30"
          className="right-[20%] top-[45%]"
        />
        <FloatingShape
          delay={0.9}
          width={270}
          height={110}
          rotate={-20}
          color="bg-orange-500/30"
          className="left-[45%] top-[55%]"
        />

        {/* Bottom Floating Shapes */}
        <FloatingShape
          delay={1.0}
          width={280}
          height={120}
          rotate={15}
          color="bg-blue-500/30"
          className="right-[10%] bottom-[20%]"
        />
        <FloatingShape
          delay={1.1}
          width={320}
          height={140}
          rotate={-12}
          color="bg-pink-500/30"
          className="left-[20%] bottom-[15%]"
        />
        <FloatingShape
          delay={1.2}
          width={350}
          height={160}
          rotate={18}
          color="bg-yellow-500/30"
          className="right-[25%] bottom-[5%]"
        />

        {/* Additional Floating Shapes for New Sections */}
        <FloatingShape
          delay={1.3}
          width={400}
          height={150}
          rotate={-15}
          color="bg-violet-500/30"
          className="left-[30%] top-[70%]"
        />
        <FloatingShape
          delay={1.4}
          width={380}
          height={140}
          rotate={20}
          color="bg-teal-500/30"
          className="right-[15%] top-[75%]"
        />
        <FloatingShape
          delay={1.5}
          width={420}
          height={160}
          rotate={-25}
          color="bg-rose-500/30"
          className="left-[10%] top-[85%]"
        />
        <FloatingShape
          delay={1.6}
          width={360}
          height={130}
          rotate={15}
          color="bg-amber-500/30"
          className="right-[35%] top-[90%]"
        />
      </div>

      {/* Blurred Floating Shapes for Extra Depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <FloatingShape
          delay={0.3}
          width={200}
          height={120}
          rotate={15}
          color="bg-red-500/20"
          className="left-[5%] top-[15%]"
          blur
        />
        <FloatingShape
          delay={0.7}
          width={270}
          height={105}
          rotate={-25}
          color="bg-green-500/20"
          className="right-[25%] bottom-[35%]"
          blur
        />
        <FloatingShape
          delay={0.9}
          width={310}
          height={125}
          rotate={8}
          color="bg-orange-500/20"
          className="left-[50%] top-[15%]"
          blur
        />
        <FloatingShape
          delay={1.0}
          width={280}
          height={120}
          rotate={-18}
          color="bg-blue-500/20"
          className="right-[20%] bottom-[10%]"
          blur
        />

        {/* Additional Blurred Shapes for New Sections */}
        <FloatingShape
          delay={1.1}
          width={290}
          height={115}
          rotate={-12}
          color="bg-violet-500/20"
          className="left-[40%] top-[80%]"
          blur
        />
        <FloatingShape
          delay={1.2}
          width={330}
          height={125}
          rotate={18}
          color="bg-teal-500/20"
          className="right-[30%] top-[85%]"
          blur
        />
        <FloatingShape
          delay={1.3}
          width={280}
          height={110}
          rotate={-20}
          color="bg-rose-500/20"
          className="left-[25%] top-[90%]"
          blur
        />
      </div>

      {/* Main Content */}
      <Header />
      <main>
        {/* Added z-index to keep text above floating shapes */}
        <div>
          <Hero />
          <Services />
          <Features />
          <Projects />
          <Testimonials />
          <Team />
          <BlogPreview />
          <Contact />
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
