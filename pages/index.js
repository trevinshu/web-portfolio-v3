import Head from 'next/head';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trevin Shu | Web Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="bg-slate-50 flex flex-col min-h-screen p-5 gap-12 md:px-16 md:py-12">
        <Header />
        <AboutMe />
        <Skills />
        <Timeline />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
