import Layout from './components/Layout.jsx'
import Header from './components/Header.jsx'
import Section from './components/Section.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import Footer from './components/Footer.jsx'

const projects = [
  {
    title: 'Northline Studio',
    description: 'Portfolio and booking flow for a small creative studio.',
    tags: ['UX', 'React', 'Tailwind'],
  },
  {
    title: 'Atlas Commerce',
    description: 'Ecommerce redesign focused on speed and clarity.',
    tags: ['UI', 'Vite', 'Stripe'],
  },
  {
    title: 'Signal Boards',
    description: 'Lightweight product updates hub for remote teams.',
    tags: ['Product', 'Dashboard', 'Motion'],
  },
  {
    title: 'Harbor Maps',
    description: 'Data visualization microsite for maritime routes.',
    tags: ['Data', 'D3', 'Storytelling'],
  },
]

const highlights = [
  { label: 'Location', value: 'Poland, PL' },
  { label: 'Focus', value: 'Fullstack Devloper + AI ' },
  { label: 'Availability', value: 'Open for projects/Jobs' },
]

const services = [
  'Design systems and UI kits',
  'Landing pages and marketing sites',
  'Product UX audits and flow redesigns',
]

const experience = [
  {
    role: 'Senior Product Designer',
    company: 'Linework Labs',
    time: '2022 - Now',
  },
  {
    role: 'UI Engineer',
    company: 'Byline Studio',
    time: '2019 - 2022',
  },
  {
    role: 'Design Lead',
    company: 'Northline',
    time: '2016 - 2019',
  },
]

function App() {
  return (
    <Layout>
      <Header />
      <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-16">
        <section className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-400">
              Portfolio 
            </p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              I design calm, confident product experiences for modern teams.
            </h1>
            <p className="text-lg text-zinc-300">
              I blend strategy, systems thinking, and clean UI to turn complex
              ideas into clear, high-converting experiences.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-zinc-900"
                href="#contact"
              >
                Book a project
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white/90"
                href="#projects"
              >
                View work
              </a>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Highlights
            </p>
            <div className="space-y-4">
              {highlights.map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                    {item.label}
                  </p>
                  <p className="text-base text-white">{item.value}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Stack
              </p>
              <p className="text-sm text-zinc-300">
                 React, Tailwind, 
              </p>
            </div>
          </div>
        </section>

        <div className="mt-20 space-y-20">
          <Section id="about" eyebrow="About" title="Designing for clarity">
            <p className="text-base text-zinc-300">
              I help founders and product teams craft focused experiences that
              feel thoughtful and effortless. My work blends research, narrative,
              and strong visual systems.
            </p>
            <p className="text-base text-zinc-300">
              From early product strategy to polish-ready UI, I build components
              and guidelines that teams can scale with confidence.
            </p>
          </Section>

          <Section
            id="projects"
            eyebrow="Selected work"
            title="Recent projects"
          >
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </Section>

          <Section id="experience" eyebrow="Experience" title="Where I have led">
            <div className="space-y-4">
              {experience.map((item) => (
                <div
                  key={item.role}
                  className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4"
                >
                  <div>
                    <p className="text-base font-semibold text-white">
                      {item.role}
                    </p>
                    <p className="text-sm text-zinc-400">{item.company}</p>
                  </div>
                  <p className="text-sm text-zinc-500">{item.time}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="services" eyebrow="Services" title="How I can help">
            <div className="grid gap-4 sm:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-zinc-200"
                >
                  {service}
                </div>
              ))}
            </div>
          </Section>

          <Section id="contact" eyebrow="Contact" title="Lets build together">
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-zinc-900"
                href="mailto:w.leszkowicz99@gmail.com"
              >
                w.leszkowicz99@gmail.com
              </a>
              <p className="text-sm text-zinc-400">
                Share a quick brief and timeline, and I will get back within 48
                hours.
              </p>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </Layout>
  )
}

export default App
