'use client';

import { useState } from 'react';
import { ValidationError, useForm } from '@formspree/react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BarChart3, BrainCircuit, ChevronDown, Cloud,
  Database, Github, Globe2, Layers3, Linkedin, LockKeyhole, Mail, Menu, MessageCircle,
  Network, Play, Send, Server, ShieldCheck, Sparkles, Terminal, Workflow, X, Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

const services = [
  { number: '01', icon: Workflow, title: 'Data Engineering', problem: 'Datos dispersos y pipelines frágiles.', action: 'Diseño y construcción de pipelines robustos y escalables.', result: 'Datos disponibles, trazables y listos para usar.' },
  { number: '02', icon: Cloud, title: 'Google Cloud & BigQuery', problem: 'Arquitecturas lentas o difíciles de controlar.', action: 'Diseño cloud, modelado y optimización orientada a rendimiento y costo.', result: 'Plataformas eficientes y preparadas para crecer.' },
  { number: '03', icon: ShieldCheck, title: 'Data Governance', problem: 'Poco contexto sobre ownership, calidad y acceso.', action: 'Clasificación, gobierno, seguridad, calidad y trazabilidad.', result: 'Datos confiables y controlados.' },
  { number: '04', icon: BarChart3, title: 'BI & Analytics', problem: 'Reportes que no responden al negocio.', action: 'Modelos analíticos e información accionable para decidir.', result: 'Una conversación de negocio basada en datos.' },
  { number: '05', icon: Server, title: 'Airflow / Cloud Composer', problem: 'Procesos manuales sin monitoreo.', action: 'Orquestación, automatización y operación de pipelines.', result: 'Procesos repetibles, observables y escalables.' },
  { number: '06', icon: Network, title: 'Oracle → GCP', problem: 'Lógica legacy que limita la evolución.', action: 'Assessment y modernización de datos y procesos Oracle.', result: 'Una ruta clara hacia BigQuery y cloud.' },
  { number: '07', icon: BrainCircuit, title: 'AI & Automation', problem: 'Tareas repetitivas y decisiones lentas.', action: 'Aplicación de IA y automatización a procesos de datos.', result: 'Más capacidad operativa y mejores flujos de trabajo.' },
  { number: '08', icon: LockKeyhole, title: 'IAM, Security & FinOps', problem: 'Accesos, consumo y operación sin suficiente control.', action: 'IAM, seguridad, observabilidad y optimización cloud.', result: 'Mayor control técnico y financiero.' },
];

const solutions = [
  { problem: 'BigQuery costoso', steps: ['PROBLEMA', 'ANÁLISIS', 'ARQUITECTURA', 'IMPLEMENTACIÓN', 'RESULTADO'], detail: 'Optimización de SQL, particionado y consultas para mejorar la eficiencia y el rendimiento.', tone: 'lime' },
  { problem: 'Procesos manuales', steps: ['PROBLEMA', 'ANÁLISIS', 'ARQUITECTURA', 'IMPLEMENTACIÓN', 'RESULTADO'], detail: 'Identificación de tareas repetitivas y automatización con Python, SQL y Airflow.', tone: 'cyan' },
  { problem: 'Oracle legacy', steps: ['PROBLEMA', 'ANÁLISIS', 'ARQUITECTURA', 'IMPLEMENTACIÓN', 'RESULTADO'], detail: 'Assessment y diseño de una ruta de modernización Oracle → GCP / BigQuery.', tone: 'lime' },
  { problem: 'Datos sin gobierno', steps: ['PROBLEMA', 'ANÁLISIS', 'ARQUITECTURA', 'IMPLEMENTACIÓN', 'RESULTADO'], detail: 'Ownership, políticas, IAM, calidad y linaje para datos confiables y controlados.', tone: 'cyan' },
];

const technologyGroups = [
  { title: 'Cloud', icon: Cloud, items: ['Google Cloud', 'BigQuery', 'Cloud Storage', 'Cloud Composer', 'IAM', 'Secret Manager'] },
  { title: 'Data', icon: Workflow, items: ['SQL', 'Python', 'BigQuery', 'Data Engineering', 'Data Governance'] },
  { title: 'Orchestration', icon: Workflow, items: ['Apache Airflow', 'Cloud Composer'] },
  { title: 'Database', icon: Database, items: ['Oracle', 'PL/SQL', 'BigQuery'] },
  { title: 'BI', icon: BarChart3, items: ['Looker Studio', 'Analytics'] },
  { title: 'Automation / AI', icon: Sparkles, items: ['Python', 'AI', 'Automation', 'APIs'] },
];

const projects = [
  { title: 'Modernización Oracle → GCP', label: 'CAPABILITY 01', text: 'Arquitectura y evolución de soluciones de datos empresariales.', icon: Network },
  { title: 'Data Governance', label: 'CAPABILITY 02', text: 'Ownership, calidad, acceso y trazabilidad para datos confiables.', icon: ShieldCheck },
  { title: 'Optimización BigQuery', label: 'CAPABILITY 03', text: 'Optimización orientada a rendimiento y eficiencia.', icon: Database },
  { title: 'Airflow / Composer', label: 'CAPABILITY 04', text: 'Automatización y observabilidad de procesos de datos.', icon: Workflow },
  { title: 'Data Quality & Observability', label: 'CAPABILITY 05', text: 'Controles para conocer la salud de tus datos y pipelines.', icon: BarChart3 },
  { title: 'APIs empresariales', label: 'CAPABILITY 06', text: 'Integración de fuentes y procesos para conectar ecosistemas.', icon: Network },
  { title: 'BI & Analytics', label: 'CAPABILITY 07', text: 'Modelos analíticos que acercan los datos a la decisión.', icon: BarChart3 },
];

const contactLinks = {
  email: 'vmirandd@icloud.com',
  phone: '+57 322 262 2663',
  whatsapp: '573222622663',
  linkedin: 'https://www.linkedin.com/in/vmirandd/',
  github: 'https://github.com/vmirandd',
};

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text?: string }) {
  return <div className="mb-12 max-w-3xl"><p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-[#d7fb5f]">{eyebrow}</p><h2 className="font-display text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-[#f3f5ef] md:text-6xl">{title}</h2>{text && <p className="mt-5 max-w-xl text-base leading-7 text-[#9ca9aa]">{text}</p>}</div>;
}

function AboutSection() {
  const whatsappUrl = `https://wa.me/${contactLinks.whatsapp}`;
  return <section id="sobre-mi" className="about-v5 scroll-mt-24 bg-[#d7fb5f] px-5 py-24 text-[#081014] lg:px-8 lg:py-32"><div className="mx-auto max-w-6xl"><p className="mb-5 font-mono text-xs tracking-[.25em]">08 / SOBRE MÍ</p><div className="border border-[#081014]/40 bg-[#0b1719] p-4 text-[#f3f5ef] shadow-[0_24px_70px_rgba(8,16,20,.2)] md:p-7"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div className="relative min-h-[22rem] overflow-hidden border border-[#8de7e1]/35 bg-[#132427] sm:min-h-[28rem]"><Image src="/images/fotovictor.jpeg" alt="Victor Miranda, Data Owner y Data Engineer" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-center" priority /><span className="absolute bottom-5 left-5 border border-[#d7fb5f]/60 bg-[#d7fb5f] px-3 py-2 font-mono text-[10px] font-medium tracking-[.16em] text-[#081014]">VICTOR MIRANDA</span><span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#8de7e1]/70 bg-[#0b1719]/70 font-display text-sm text-[#8de7e1]">VM</span></div><div><p className="font-mono text-xs tracking-[.22em] text-[#d7fb5f]">SOBRE MÍ</p><h2 className="mt-4 font-display text-4xl leading-none tracking-[-.05em] md:text-6xl">Victor Miranda</h2><p className="mt-5 font-mono text-xs tracking-[.16em] text-[#8de7e1]">DATA OWNER · DATA ENGINEER · BI & DATA</p><p className="mt-8 max-w-xl font-display text-2xl leading-tight tracking-[-.03em]">Transformo datos complejos en plataformas confiables, dashboards accionables y soluciones orientadas al negocio.</p><p className="mt-5 max-w-xl text-sm leading-7 text-[#9ca9aa]">Trabajo en la conexión entre negocio, tecnología y datos, con especial enfoque en Google Cloud, BigQuery, Data Engineering, Data Governance, Qlik Sense, BI y automatización.</p><div className="mt-8 grid grid-cols-2 gap-2 border-t border-white/10 pt-6 text-xs"><Specialty icon={Cloud} label="Google Cloud" /><Specialty icon={Database} label="BigQuery" /><Specialty icon={BarChart3} label="Qlik Sense" /><Specialty icon={Layers3} label="BI & Dashboards" /><Specialty icon={ShieldCheck} label="Data Governance" /><Specialty icon={Workflow} label="Automatización" /><Specialty icon={BrainCircuit} label="AI + Data" /><Specialty icon={Network} label="Oracle / PLSQL" /></div></div></div><div className="mt-10 grid gap-3 border-t border-white/15 pt-6 sm:grid-cols-2 lg:grid-cols-4"><ContactItem icon={Mail} label="EMAIL" value={contactLinks.email} href={`mailto:${contactLinks.email}`} action="Enviar email" /><ContactItem icon={MessageCircle} label="WHATSAPP" value={contactLinks.phone} href={whatsappUrl} action="Chatear por WhatsApp" external /><ContactItem icon={Linkedin} label="LINKEDIN" value="linkedin.com/in/vmirandd" href={contactLinks.linkedin} action="Ver perfil" external /><ContactItem icon={MessageCircle} label="TELÉFONO" value={contactLinks.phone} href={whatsappUrl} action="Comunicar por WhatsApp" external /></div></div></div></section>;
}

function Specialty({ icon: Icon, label }: { icon: LucideIcon; label: string }) { return <div className="flex items-center gap-2 text-[#c1cbca]"><Icon size={15} className="text-[#d7fb5f]" />{label}</div>; }
function ContactItem({ icon: Icon, label, value, href, action, external = false }: { icon: LucideIcon; label: string; value: string; href: string; action: string; external?: boolean }) { return <div className="border border-white/10 p-4"><div className="flex items-center gap-2 font-mono text-[10px] tracking-[.16em] text-[#d7fb5f]"><Icon size={14} />{label}</div><p className="mt-3 break-words text-xs text-[#f3f5ef]">{value}</p><a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="mt-3 inline-flex border border-[#d7fb5f]/60 px-2.5 py-2 font-mono text-[10px] text-[#d7fb5f] transition-colors hover:bg-[#d7fb5f] hover:text-[#081014]">{action}</a></div>; }

function DataEcosystemVisual() {
  const stages = [
    'DATA SOURCES',
    'INGESTION',
    'GOOGLE CLOUD',
    'DATA ENGINEERING',
    'GOVERNANCE',
    'ANALYTICS / AI',
    'BUSINESS VALUE',
  ];

  const positions = [5, 20, 35, 50, 65, 80, 95];

  return (
    <div className="relative mt-10 overflow-hidden border border-white/10 bg-[#050b0d] shadow-[0_30px_100px_rgba(0,0,0,.35)]">
      <div className="relative aspect-[16/9] w-full">
        <div className="absolute inset-0">
          <img
            src="/images/data-ecosystem.png"
            alt="VM Data & Cloud — From Data to Business Value"
            className="absolute inset-0 h-full w-full object-contain"
          />

          {/* Línea de flujo */}
          <div className="pointer-events-none absolute left-[5%] right-[5%] top-[48%] h-px bg-[#8de7e1]/20" />

          {/* Nodos */}
          {stages.map((stage, index) => (
            <motion.div
              key={stage}
              className="pointer-events-none absolute top-[48%] -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${positions[index]}%` }}
            >
              <motion.div
                className="h-2.5 w-2.5 rounded-full border border-[#d7fb5f] bg-[#d7fb5f] shadow-[0_0_14px_#d7fb5f]"
                animate={{
                  scale: [0.8, 1.25, 0.8],
                  opacity: [0.65, 1, 0.65],
                }}
                transition={{
                  duration: 2.8,
                  delay: index * 0.35,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <span className="absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap font-mono text-[8px] tracking-[.12em] text-[#8de7e1]/70">
                0{index + 1}
              </span>
            </motion.div>
          ))}

          {/* Partículas que recorren el proceso */}
          {[0, 1, 2].map((particle) => (
            <motion.div
              key={particle}
              className="pointer-events-none absolute top-[48%] h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#d7fb5f] shadow-[0_0_16px_#d7fb5f]"
              animate={{
                left: ['5%', '20%', '35%', '50%', '65%', '80%', '95%'],
                opacity: [0, 1, 1, 1, 1, 1, 0],
                scale: [0.6, 1, 1.2, 1, 1.2, 1, 0.6],
              }}
              transition={{
                duration: 9,
                delay: particle * 3,
                repeat: Infinity,
                ease: 'linear',
                times: [0, .16, .33, .5, .66, .83, 1],
              }}
            />
          ))}

          {/* Indicador de proceso */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-[8%] -translate-x-1/2 border border-[#8de7e1]/30 bg-[#081014]/80 px-4 py-2 backdrop-blur-md"
            animate={{ opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="font-mono text-[9px] tracking-[.2em] text-[#d7fb5f]">
              ● LIVE DATA FLOW
            </span>
          </motion.div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 bg-[#081014] px-5 py-3">
        <span className="font-mono text-[9px] tracking-[.18em] text-[#9ca9aa]">
          DATA → PLATFORM → GOVERNANCE → INSIGHTS → VALUE
        </span>
        <span className="hidden font-mono text-[9px] tracking-[.16em] text-[#d7fb5f] sm:block">
          CONTINUOUS FLOW
        </span>
      </div>
    </div>
  );
}

function DataFlowAnimation() {
  const stages = [
    { number: '01', label: 'DATA SOURCES', detail: 'ERP · APIs · DATABASES' },
    { number: '02', label: 'INGESTION', detail: 'PIPELINES · AIRFLOW' },
    { number: '03', label: 'GOOGLE CLOUD', detail: 'GCP · BIGQUERY · GCS' },
    { number: '04', label: 'DATA ENGINEERING', detail: 'SQL · PYTHON · MODELS' },
    { number: '05', label: 'GOVERNANCE', detail: 'IAM · QUALITY · LINEAGE' },
    { number: '06', label: 'ANALYTICS / AI', detail: 'BI · AI · INSIGHTS' },
    { number: '07', label: 'BUSINESS VALUE', detail: 'DECISIONS · IMPACT' },
  ];

  return (
    <div className="relative mt-12 overflow-hidden border border-white/10 bg-[#081014] p-5 md:p-8">
      <div className="absolute inset-0 grid-noise opacity-20" />

      <div className="relative">
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[.18em] text-[#9ca9aa]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#d7fb5f]" />
            SYSTEM / DATA PIPELINE
          </div>
          <span className="font-mono text-[9px] tracking-[.15em] text-[#8de7e1]">
            LIVE FLOW
          </span>
        </div>

        <div className="relative">
          <div className="hidden absolute left-[7%] right-[7%] top-[86px] h-px bg-white/10 md:block" />

          <motion.div
            className="hidden absolute left-[7%] top-[85px] h-[2px] bg-[#d7fb5f] shadow-[0_0_12px_#d7fb5f] md:block"
            initial={{ width: '0%' }}
            animate={{ width: '86%' }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />

          <motion.div
            className="hidden absolute top-[80px] h-3 w-3 rounded-full bg-[#d7fb5f] shadow-[0_0_18px_#d7fb5f] md:block"
            animate={{
              left: ['7%', '93%'],
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1, 1.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <div className="grid gap-3 md:grid-cols-7 md:gap-0">
            {stages.map((stage, index) => (
              <div key={stage.number} className="relative flex md:block">
                <div className="flex w-full items-center gap-4 md:block">
                  <motion.div
                    className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#8de7e1]/40 bg-[#081014] font-mono text-[10px] text-[#9ca9aa] md:mx-auto md:h-12 md:w-12"
                    animate={{
                      borderColor: [
                        'rgba(141,231,225,.25)',
                        'rgba(215,251,95,.9)',
                        'rgba(141,231,225,.25)',
                      ],
                      boxShadow: [
                        '0 0 0 rgba(215,251,95,0)',
                        '0 0 22px rgba(215,251,95,.22)',
                        '0 0 0 rgba(215,251,95,0)',
                      ],
                    }}
                    transition={{
                      duration: 3.5,
                      delay: index * 1.1,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    {stage.number}
                  </motion.div>

                  <div className="md:mt-5 md:text-center">
                    <p className="font-display text-sm font-medium leading-tight text-[#f3f5ef] md:px-1">
                      {stage.label}
                    </p>
                    <p className="mt-2 font-mono text-[8px] leading-4 tracking-[.08em] text-[#9ca9aa]">
                      {stage.detail}
                    </p>
                  </div>
                </div>

                {index < stages.length - 1 && (
                  <motion.div
                    className="absolute left-[22px] top-[48px] h-6 w-px bg-[#8de7e1]/30 md:hidden"
                    animate={{ opacity: [0.25, 1, 0.25] }}
                    transition={{
                      duration: 2,
                      delay: index * 0.7,
                      repeat: Infinity,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-3">
          <div className="border-l border-[#d7fb5f] pl-3">
            <p className="font-mono text-[9px] tracking-[.15em] text-[#d7fb5f]">FLOW</p>
            <p className="mt-1 text-xs text-[#9ca9aa]">Continuous data movement</p>
          </div>

          <div className="border-l border-[#8de7e1] pl-3">
            <p className="font-mono text-[9px] tracking-[.15em] text-[#8de7e1]">CONTROL</p>
            <p className="mt-1 text-xs text-[#9ca9aa]">Governance & observability</p>
          </div>

          <div className="border-l border-white/30 pl-3">
            <p className="font-mono text-[9px] tracking-[.15em] text-[#f3f5ef]">IMPACT</p>
            <p className="mt-1 text-xs text-[#9ca9aa]">Insights & business decisions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoStarted, setDemoStarted] = useState(false);
  const [state, handleSubmit] = useForm('xgaeppyr');
  const sent = state.succeeded;
  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute('href');

    if (href === '#sobre-mi') {
      event.preventDefault();
      document.getElementById('sobre-mi')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setMenuOpen(false);
    }
  };

  return <main className="overflow-hidden bg-[#081014] text-[#f3f5ef]">
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#081014]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}><span className="flex h-9 w-9 items-center justify-center bg-[#d7fb5f] font-display text-sm font-bold text-[#081014]">VM</span><span className="hidden font-mono text-xs font-medium tracking-[0.16em] text-[#f3f5ef] sm:block">VM DATA & CLOUD</span></a>
        <div className="hidden items-center gap-7 lg:flex">{[['Servicios', 'servicios'], ['Soluciones', 'soluciones'], ['Arquitectura', 'arquitectura'], ['Proyectos', 'proyectos'], ['Sobre mí', 'sobre-mi']].map(([label, href]) => <a key={href} href={`#${href}`} onClick={handleAnchorClick} className="text-xs text-[#9ca9aa] transition-colors hover:text-[#d7fb5f]">{label}</a>)}<a href="#contacto" className="group flex items-center gap-2 bg-[#d7fb5f] px-4 py-2.5 text-xs font-bold text-[#081014] transition-transform hover:-translate-y-0.5">Hablemos <ArrowUpRightIcon /></a></div>
        <button aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} className="text-[#f3f5ef] lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>{menuOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="border-t border-white/10 bg-[#081014] px-5 py-5 lg:hidden">{[['Servicios', 'servicios'], ['Soluciones', 'soluciones'], ['Arquitectura', 'arquitectura'], ['Proyectos', 'proyectos'], ['Sobre mí', 'sobre-mi'], ['Contacto', 'contacto']].map(([label, href]) => <a key={href} href={`#${href}`} onClick={(event) => { handleAnchorClick(event); setMenuOpen(false); }} className="block border-b border-white/10 py-3 font-mono text-sm text-[#f3f5ef]">{label}</a>)}</motion.div>}</AnimatePresence>
    </nav>

    <section id="inicio" className="relative flex min-h-screen items-center px-5 pb-20 pt-32 lg:px-8">
      <div className="absolute inset-0 grid-noise opacity-50" /><div className="absolute -right-40 top-36 h-96 w-96 rounded-full bg-[#d7fb5f]/10 blur-[120px]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div variants={stagger} initial="hidden" animate="show"><motion.div variants={fadeUp} className="mb-7 flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-[#d7fb5f]"><span className="h-px w-10 bg-[#d7fb5f]" /> DATA OWNER / ENGINEER</motion.div><motion.h1 variants={fadeUp} className="max-w-4xl font-display text-[clamp(3.5rem,9vw,8.5rem)] font-medium leading-[.87] tracking-[-0.08em]">Victor<br /><span className="text-[#8de7e1]">Miranda</span></motion.h1><motion.p variants={fadeUp} className="mt-8 max-w-xl text-lg leading-8 text-[#c1cbca]">Transformo datos complejos en decisiones y soluciones de negocio <span className="text-[#d7fb5f]">escalables, automatizadas y accionables.</span></motion.p><motion.p variants={fadeUp} className="mt-4 max-w-lg border-l border-[#8de7e1] pl-4 text-sm leading-6 text-[#c1cbca]">De datos dispersos y procesos manuales a plataformas confiables, gobernadas y escalables.</motion.p><motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4"><a href="#contacto" className="group flex items-center gap-3 bg-[#d7fb5f] px-5 py-3.5 text-sm font-bold text-[#081014]">Hablemos <ArrowUpRightIcon /></a><a href="#servicios" className="flex items-center gap-3 border border-white/20 px-5 py-3.5 text-sm font-medium transition-colors hover:border-[#8de7e1] hover:text-[#8de7e1]">Ver servicios <ArrowRight size={16} /></a></motion.div></motion.div>
        <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .25 }} className="relative mx-auto w-full max-w-[510px]"><div className="absolute -inset-5 rounded-full bg-[#8de7e1]/10 blur-[90px]" /><div className="soft-glow relative border border-white/15 bg-[#0c191c]/80 p-5 md:p-7"><div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4"><span className="font-mono text-[10px] tracking-[0.2em] text-[#9ca9aa]">SYSTEM / DATA FLOW</span><span className="flex items-center gap-2 font-mono text-[10px] text-[#d7fb5f]"><i className="h-1.5 w-1.5 rounded-full bg-[#d7fb5f]" /> ONLINE</span></div><div className="space-y-3 font-mono text-xs"><FlowNode icon={Database} label="BUSINESS DATA" value="01" active /><div className="ml-5 h-8 border-l border-dashed border-[#8de7e1]/40" /><FlowNode icon={Workflow} label="TRANSFORMATION" value="02" /><div className="ml-5 h-8 border-l border-dashed border-[#8de7e1]/40" /><FlowNode icon={Cloud} label="GOOGLE CLOUD" value="03" /><div className="ml-5 h-8 border-l border-dashed border-[#8de7e1]/40" /><FlowNode icon={Sparkles} label="BUSINESS INSIGHT" value="04" active /></div><div className="mt-8 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-center font-mono text-[9px] text-[#9ca9aa]"><div><div className="mb-1 text-base text-[#f3f5ef]">BI</div>ANALYTICS</div><div><div className="mb-1 text-base text-[#f3f5ef]">AI</div>INTELLIGENCE</div><div><div className="mb-1 text-base text-[#f3f5ef]">GCP</div>CLOUD</div></div></div><div className="absolute -bottom-5 -left-5 bg-[#d7fb5f] px-4 py-3 font-mono text-[10px] font-bold tracking-[0.18em] text-[#081014]">DATA → VALUE</div></motion.div>
      </div><a href="#servicios" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[10px] tracking-[.2em] text-[#9ca9aa] md:flex">SCROLL TO EXPLORE <ChevronDown size={14} /></a>
    </section>

    <section id="servicios" className="border-t border-white/10 px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="01 / Servicios" title={<>La complejidad de los datos,<br /><span className="text-[#8de7e1]">convertida en dirección.</span></>} text="No se trata solo de tecnología: se trata de resolver problemas de negocio con soluciones que puedan operar y crecer." /><motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">{services.map((service) => <motion.article variants={fadeUp} key={service.number} className="group relative bg-[#081014] p-6 transition-colors hover:bg-[#101f21] md:p-7"><div className="mb-8 flex items-start justify-between"><span className="font-mono text-xs text-[#d7fb5f]">{service.number}</span><service.icon size={22} strokeWidth={1.4} className="text-[#8de7e1] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" /></div><h3 className="font-display text-xl tracking-[-.03em]">{service.title}</h3><p className="mt-5 font-mono text-[10px] uppercase tracking-[.12em] text-[#d7fb5f]">Problema</p><p className="mt-1 text-sm leading-5 text-[#c1cbca]">{service.problem}</p><p className="mt-4 font-mono text-[10px] uppercase tracking-[.12em] text-[#8de7e1]">Qué hago</p><p className="mt-1 text-sm leading-5 text-[#9ca9aa]">{service.action}</p><p className="mt-4 font-mono text-[10px] uppercase tracking-[.12em] text-[#8de7e1]">Resultado esperado</p><p className="mt-1 text-sm leading-5 text-[#c1cbca]">{service.result}</p><ArrowDownRight size={19} className="mt-7 text-white/30 transition-colors group-hover:text-[#d7fb5f]" /></motion.article>)}</motion.div></div></section>

    <section id="soluciones" className="relative overflow-hidden border-y border-white/10 bg-[#0b1719] px-5 py-24 lg:px-8 lg:py-32"><div className="absolute inset-0 grid-noise opacity-40" /><div className="absolute -right-32 top-24 h-80 w-80 rounded-full bg-[#8de7e1]/[.07] blur-[110px]" /><div className="relative mx-auto max-w-7xl"><div className="mb-12 max-w-3xl"><p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-[#d7fb5f]">02 / Del problema a la solución</p><h2 className="font-display text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-[#f3f5ef] md:text-6xl">¿Dónde está el problema?<br /><span className="text-[#8de7e1]">Ahí empieza el trabajo.</span></h2><p className="mt-5 max-w-xl text-base leading-7 text-[#c1cbca]">Cada reto merece un camino claro: diagnóstico, diseño, ejecución y evidencia para decidir mejor.</p></div><div className="grid gap-4 lg:grid-cols-2">{solutions.map((solution, index) => <motion.article key={solution.problem} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * .08 }} viewport={{ once: true }} className="group border border-white/15 bg-[#101f21] p-6 transition-colors hover:border-[#d7fb5f]/60 md:p-8"><div className="mb-7 flex items-center justify-between"><span className="font-mono text-[10px] tracking-[.2em] text-[#d7fb5f]">0{index + 1} / WORKFLOW</span><ArrowDownRight size={19} className="text-[#8de7e1] transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></div><h3 className="font-display text-2xl tracking-[-.04em] text-[#f3f5ef] md:text-3xl">{solution.problem}</h3><p className="mt-3 max-w-lg text-sm leading-6 text-[#c1cbca]">{solution.detail}</p><div className="mt-8 flex flex-wrap items-center gap-2">{solution.steps.map((step, stepIndex) => <div key={step} className="flex items-center gap-2"><span className={`border px-2.5 py-2 font-mono text-[10px] font-medium tracking-[.12em] ${solution.tone === 'lime' ? 'border-[#d7fb5f]/50 text-[#d7fb5f]' : 'border-[#8de7e1]/50 text-[#8de7e1]'}`}>{step}</span>{stepIndex < solution.steps.length - 1 && <ArrowRight size={13} className="text-[#c1cbca]" />}</div>)}</div></motion.article>)}</div></div></section>

    <section id="arquitectura" className="relative overflow-hidden border-b border-white/10 px-5 py-24 lg:px-8 lg:py-32">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-[#d7fb5f]/[.03]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="03 / Data Architecture"
          title={<>From data to<br /><span className="text-[#d7fb5f]">business value.</span></>}
          text="Un ecosistema de datos moderno que conecta fuentes, ingeniería, gobierno, analítica e inteligencia artificial para convertir información en decisiones."
        />

        <DataEcosystemVisual />

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[9px] tracking-[.14em] text-[#9ca9aa]">
            <span>SCALABILITY</span>
            <span>GOVERNANCE</span>
            <span>SECURITY</span>
            <span>OBSERVABILITY</span>
            <span>FINOPS</span>
          </div>

          <span className="font-mono text-[9px] tracking-[.16em] text-[#d7fb5f]">
            DATA → DECISIONS
          </span>
        </div>
      </div>
    </section>
    <section className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-[.8fr_1.2fr]"><div><SectionHeading eyebrow="04 / AI + Data Engineering" title={<>Preguntas de negocio,<br /><span className="text-[#8de7e1]">respuestas con contexto.</span></>} text="La inteligencia artificial es más útil cuando entiende tus datos, tus procesos y tus decisiones." /><div className="flex items-center gap-3 font-mono text-[10px] text-[#9ca9aa]"><span className="h-px w-10 bg-[#d7fb5f]" /> DEMO VISUAL · SIN DATOS REALES</div></div><div className="soft-glow border border-white/15 bg-[#0c191c] p-5 md:p-7"><div className="flex items-center justify-between border-b border-white/10 pb-4"><div className="flex items-center gap-2 font-mono text-xs text-[#9ca9aa]"><Terminal size={15} className="text-[#d7fb5f]" /> ask-data</div><button onClick={() => setDemoStarted(true)} className="flex items-center gap-2 border border-[#d7fb5f]/40 px-3 py-2 font-mono text-[10px] text-[#d7fb5f] transition-colors hover:bg-[#d7fb5f] hover:text-[#081014]"><Play size={12} fill="currentColor" /> {demoStarted ? 'RUNNING' : 'RUN DEMO'}</button></div><div className="min-h-64 pt-6 font-mono text-xs leading-7"><p className="text-[#d7fb5f]">$ ask-data</p><p className="text-[#f3f5ef]">&gt; ¿Cuál es la categoría con mayor crecimiento?</p><AnimatePresence>{demoStarted ? <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 space-y-3"><p className="text-[#9ca9aa]">Analyzing data...</p><div className="h-2 w-full bg-white/10"><motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.2 }} className="h-full bg-[#d7fb5f]" /></div><p className="text-[#8de7e1]">Business insight generated.</p><p className="border-l border-[#d7fb5f] pl-3 text-[#f3f5ef]">Demo visual: conecta tus fuentes para obtener insights reales.</p></motion.div> : <p className="mt-6 text-[#9ca9aa]">Ready when your data is.</p>}</AnimatePresence></div></div></div></section>

    <section id="tecnologias" className="border-t border-white/10 bg-[#0c191c] px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="05 / Tecnologías" title={<>Las herramientas son el medio.<br /><span className="text-[#d7fb5f]">El criterio, la diferencia.</span></>} /><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{technologyGroups.map((group, index) => <motion.div key={group.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * .06 }} viewport={{ once: true }} className={`border border-white/10 p-6 ${index === 0 ? 'lg:col-span-2' : ''}`}><div className="mb-6 flex items-center gap-3"><group.icon size={19} className="text-[#d7fb5f]" /><h3 className="font-display text-xl">{group.title}</h3></div><div className="flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="border border-white/15 px-3 py-2 font-mono text-[10px] text-[#c1cbca] transition-colors hover:border-[#8de7e1] hover:text-[#8de7e1]">{item}</span>)}</div></motion.div>)}</div></div></section>

    <section id="proyectos" className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="06 / Capacidades representativas" title={<>Un buen proyecto empieza<br /><span className="text-[#8de7e1]">por la pregunta correcta.</span></>} text="Áreas preparadas para incorporar casos reales, con problema, solución, tecnologías y resultados verificables." /><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">{projects.map((project) => <article key={project.title} className="group flex min-h-64 flex-col justify-between border border-white/10 p-5 transition-colors hover:border-[#d7fb5f]/60 hover:bg-[#0c191c]"><div><div className="mb-10 flex items-center justify-between"><project.icon size={21} className="text-[#8de7e1]" /><span className="font-mono text-[9px] text-[#9ca9aa]">{project.label}</span></div><h3 className="font-display text-xl">{project.title}</h3><p className="mt-3 text-sm leading-6 text-[#9ca9aa]">{project.text}</p></div><span className="mt-7 flex items-center gap-2 font-mono text-[10px] tracking-[.12em] text-[#d7fb5f]">CAPACIDAD <ArrowUpRightIcon /></span></article>)}</div></div></section>

    <section id="metodologia" className="border-y border-white/10 bg-[#0c191c] px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="07 / Cómo trabajo" title={<>Método para avanzar<br /><span className="text-[#d7fb5f]">con claridad.</span></>} text="Una metodología que mantiene alineados el problema de negocio, la arquitectura y la operación." /><div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-5">{[['01', 'ENTENDER', 'Comprender el problema de negocio y los datos disponibles.'], ['02', 'DISEÑAR', 'Definir arquitectura, seguridad, gobierno y estrategia.'], ['03', 'CONSTRUIR', 'Implementar pipelines, modelos, automatizaciones y soluciones.'], ['04', 'OPTIMIZAR', 'Mejorar rendimiento, costos, calidad y operación.'], ['05', 'MEDIR', 'Implementar observabilidad y seguimiento.']].map(([number, title, text]) => <motion.article key={number} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#0c191c] p-6"><span className="font-mono text-xs text-[#d7fb5f]">{number}</span><h3 className="mt-12 font-display text-xl">{title}</h3><p className="mt-3 text-sm leading-6 text-[#9ca9aa]">{text}</p></motion.article>)}</div></div></section>

    <AboutSection />
    <section id="data-flow" className="relative overflow-hidden border-y border-white/10 bg-[#050b0d] px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="09 / Data Flow"
          title={<>From data to<br /><span className="text-[#d7fb5f]">business value.</span></>}
          text="Un flujo visual de cómo los datos atraviesan la plataforma, son gobernados y se convierten en información accionable."
        />
        <DataFlowAnimation />
      </div>
    </section>
<section id="contacto" className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><SectionHeading eyebrow="08 / Contacto" title={<>¿Tienes un reto<br /><span className="text-[#d7fb5f]">de datos?</span></>} text="Conversemos sobre cómo convertirlo en una solución tecnológica." /><div className="space-y-4 font-mono text-xs text-[#9ca9aa]"><a href={`mailto:${contactLinks.email}`} className="flex items-center gap-3 transition-colors hover:text-[#d7fb5f]"><Mail size={16} />{contactLinks.email}</a><a href={`https://wa.me/${contactLinks.whatsapp}`} className="flex items-center gap-3 transition-colors hover:text-[#d7fb5f]"><MessageCircle size={16} /> {contactLinks.phone}</a><a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-[#d7fb5f]"><Linkedin size={16} /> LinkedIn</a></div></div><form onSubmit={handleSubmit} className="border border-white/15 bg-[#0c191c] p-6 md:p-8"><div className="grid gap-5 md:grid-cols-2"><div><Field label="Nombre" name="name" required /><ValidationError prefix="Nombre" field="name" errors={state.errors} /></div><div><Field label="Email" name="email" type="email" required /><ValidationError prefix="Email" field="email" errors={state.errors} /></div><div><Field label="Empresa" name="company" /><ValidationError prefix="Empresa" field="company" errors={state.errors} /></div><div className="md:col-span-2"><label className="font-mono text-[10px] uppercase tracking-[.16em] text-[#9ca9aa]">Mensaje *</label><textarea required name="message" rows={5} className="mt-2 w-full resize-none border border-white/15 bg-transparent p-3 text-sm outline-none transition-colors focus:border-[#d7fb5f]" placeholder="Cuéntame brevemente sobre tu reto..." /><ValidationError prefix="Mensaje" field="message" errors={state.errors} /></div></div>{sent && <p className="mt-4 font-mono text-[10px] text-[#d7fb5f]">Mensaje enviado correctamente. Gracias por contactarme.</p>}{state.errors && <p className="mt-4 font-mono text-[10px] text-[#f3f5ef]">No pudimos enviar el mensaje. Inténtalo nuevamente.</p>}<div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><button type="submit" disabled={state.submitting} className="flex items-center justify-center gap-3 bg-[#d7fb5f] px-5 py-3.5 text-sm font-bold text-[#081014] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60">{state.submitting ? <>Enviando... <Send size={16} /></> : sent ? <>Mensaje enviado <Send size={16} /></> : <>Preparar mensaje <Send size={16} /></>}</button><span className="font-mono text-[10px] text-[#9ca9aa]">{state.submitting ? 'ENVIANDO MENSAJE...' : sent ? 'MENSAJE ENVIADO' : 'FORMULARIO DE CONTACTO'}</span></div></form></div></section>

    <footer className="border-t border-white/10 px-5 py-8 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-center md:justify-between"><div><p className="font-mono text-xs tracking-[.16em]">VM DATA & CLOUD</p><p className="mt-2 text-xs text-[#9ca9aa]">Victor Miranda · Data Engineering · GCP · BI · AI</p></div><div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] text-[#9ca9aa]"><a href="#servicios" className="hover:text-[#d7fb5f]">Servicios</a><a href="#proyectos" className="hover:text-[#d7fb5f]">Proyectos</a><a href="#tecnologias" className="hover:text-[#d7fb5f]">Tecnologías</a><a href="#sobre-mi" className="hover:text-[#d7fb5f]">Sobre mí</a><a href="#contacto" className="hover:text-[#d7fb5f]">Contacto</a></div><p className="font-mono text-[10px] text-[#9ca9aa]">© {new Date().getFullYear()} Victor Miranda</p></div></footer>
  </main>;
}

function ArrowUpRightIcon() { return <ArrowUpRight size={15} />; }
function FlowNode({ icon: Icon, label, value, active = false }: { icon: LucideIcon; label: string; value: string; active?: boolean }) { return <div className={`flex items-center justify-between border p-3 ${active ? 'border-[#d7fb5f]/50 bg-[#d7fb5f]/[.06]' : 'border-white/10'}`}><div className="flex items-center gap-3"><Icon size={17} className={active ? 'text-[#d7fb5f]' : 'text-[#8de7e1]'} /><span className="tracking-[.13em] text-[#c1cbca]">{label}</span></div><span className="text-[#9ca9aa]">{value}</span></div>; }
function Field({ label, name, type = 'text', required = false }: { label: string; name: string; type?: string; required?: boolean }) { return <label className="block"><span className="font-mono text-[10px] uppercase tracking-[.16em] text-[#9ca9aa]">{label}{required && ' *'}</span><input required={required} name={name} type={type} className="mt-2 w-full border border-white/15 bg-transparent px-3 py-3 text-sm outline-none transition-colors focus:border-[#d7fb5f]" /></label>; }



















