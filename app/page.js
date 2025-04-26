import Image from "next/image";
import styles from "./page.module.css";

import { FiArrowUpRight, FiLinkedin, FiGithub, FiMail, FiCode, FiDatabase } from 'react-icons/fi';
import { FaWhatsapp, FaTelegram, FaCodeBranch } from 'react-icons/fa';

//import { FiLinkedin, FiGithub, FiMail, FiArrowUpRight, FiSend } from "react-icons/fi";
//import { FaWhatsapp, FaTelegram, FaCodeBranch } from "react-icons/fa";
import { Metadata } from 'next'
import { TbBrandNextjs, TbBrandFlutter } from 'react-icons/tb';
export const metadata = {
  title: "محمد يحيى عبه | مطور Full-Stack",
  description: "مطور ويب وموبايل متخصص في Next.js وFlutter. بناء حلول تقنية بتجارب مستخدم مميزة.",
  keywords: ["محمد يحيى عبه", "مطور Flutter", "Next.js", "تطوير ويب", "مطور يمني", "بناء تطبيقات الموبايل", " تصميم مدونه شخصيه", "بناء backend", " مبرمج مواقع الويب", "عبه ", " محمد عبه", " تطوير api", "تطبيقات الاندرويد ", "باور بي اي ", "power bi", "محمد يحي عبه"],
  openGraph: {
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "محمد يحيى عبه - مطور Full-Stack",
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};




export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Person", "Portfolio"],
    name: "محمد يحي عبه",
    jobTitle: "مطور Full Stack متخصص",
    url: "https://mohammed-abah.com",
    sameAs: [
      "https://linkedin.com/in/mohmmed-yahya-ali-abah-136a3033a",
      "https://github.com/Moh-abah",
      "https://t.me/M_U_VIP"
    ],
    image: "https://mohammed-abah.com/profile.jpg",
    email: "musst92@gmail.com",
    description: "مطور حلول رقمية مبتكرة بخبرة في أنظمة المؤسسات والتطبيقات المعقدة",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "جامعة صنعاء",
      startDate: "2017",
      endDate: "2021"
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "اليمن",
      addressRegion: "صنعاء"
    },
    knowsAbout: [
      "تطوير الويب الحديث",
      "هندسة البرمجيات القابلة للتطوير",
      "أنظمة قواعد البيانات المتقدمة",
      "تصميم واجهات المستخدم التفاعلية"
    ]
  };

  const projects = [
    {
      title: "نظام تجاري متكامل",
      description: "منصة B2B/B2C مع نظام توصيل ذكي وإدارة مخازن متعددة",
      tech: ["Flutter", "Node.js", "PostgreSQL", "Redis", "GraphQL"],
      link: "#",
      image: "/project1.jpg",
      year: 2023,
      client: "شركة تجارية كبيرة"
    },
    {
      title: "منصة تعليمية ذكية",
      description: "نظام تعليم عن بعد مع محرك توصية تعلم آلي وواقع معزز",
      tech: ["Next.js 14", "Python", "TensorFlow", "WebRTC", "WebSockets"],
      link: "#",
      image: "/project2.jpg",
      year: 2024,
      client: "جهة حكومية"
    },
    {
      title: "نظام إدارة المستشفيات",
      description: "حل متكامل لإدارة العمليات الطبية مع تكامل أنظمة التصوير الطبي",
      tech: ["Flutter", "Django", "DICOM", "Docker", "AWS"],
      link: "#",
      image: "/project3.jpg",
      year: 2022,
      client: "مجموعة مستشفيات خاصة"
    }
  ];

  const stats = [
    { value: "15K+", label: "سطر برمجي" },
    { value: "98%", label: "رضا العملاء" },
    { value: "200+", label: "التزام بالمواعيد" },
    { value: "50+", label: "مكتبة معادة الاستخدام" }
  ];

  return (
    <div className={styles.page}>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <main className={styles.main}>
        {/* القسم البطاقي مع تأثيرات متقدمة */}
        <section className={styles.heroSection}>
          <div className={styles.profileSphere}>
            <div className={styles.holographicEffect}>
              <Image
                src="/profile.jpg"
                alt="صورة محمد يحي عبه الشخصية"
                width={400}
                height={400}
                quality={100}
                priority
                className={styles.holographicImage}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,..."
              />
            </div>
            <div className={styles.techOrbit}>
              <TbBrandNextjs className={styles.orbitIcon} />
              <TbBrandFlutter className={styles.orbitIcon} />
              <FiDatabase className={styles.orbitIcon} />
              <FaCodeBranch className={styles.orbitIcon} />
            </div>
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.name}>
              <span className={styles.nameGradient}>محمد يحي عبه</span>
              <span className={styles.nameBadge}>Senior Developer</span>
            </h1>

            <div className={styles.expertiseTabs}>
              <span className={styles.expertisePill}>Full-Stack Architecture</span>
              <span className={styles.expertisePill}>Cloud Solutions</span>
              <span className={styles.expertisePill}>AI Integration</span>
            </div>

            <p className={styles.heroBio}>
              أختص ببناء أنظمة المؤسسات المعقدة وتصميم حلول تقنية قابلة للتطوير،
              مع التركيز على الجودة البرمجية وأفضل ممارسات هندسة البرمجيات.
            </p>
          </div>
        </section>

        {/* إحصائيات تفاعلية */}
        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statProgressBar}>
                  <div
                    className={styles.statProgressFill}
                    style={{ width: `${Math.random() * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* مشاريع بتصميم حديث */}
        <section className={styles.projectsSection}>
          <h2 className={styles.sectionTitle}>
            <FiCode className={styles.sectionIcon} />
            مشاريع مميزة
            <span className={styles.sectionTitleGlow} />
          </h2>

          <div className={styles.projectsMasonry}>
            {projects.map((project, index) => (
              <article
                key={index}
                className={`${styles.projectCard} ${styles[`projectLayer${index % 3}`]}`}
              >
                <div className={styles.projectMedia}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className={styles.projectImage}
                  />
                  <div className={styles.projectOverlay}>
                    <div className={styles.projectMeta}>
                      <span className={styles.projectYear}>{project.year}</span>
                      <span className={styles.projectClient}>{project.client}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>
                    {project.title}
                    <FiArrowUpRight className={styles.projectArrow} />
                  </h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.techStack}>
                    {project.tech.map((tech, i) => (
                      <span key={i} className={styles.techPill}>
                        {tech}
                        <span className={styles.techPillIcon}>
                          {i % 2 === 0 ? <FiCode /> : <FiDatabase />}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* شبكة التواصل المحسنة */}
        <section className={styles.connectSection}>
          <div className={styles.connectGrid}>
            <a
              href="https://linkedin.com/in/mohmmed-yahya-ali-abah-136a3033a"
              className={`${styles.connectCard} ${styles.linkedinCard}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className={styles.connectIcon} />
              <span className={styles.connectLabel}>LinkedIn Profile</span>
              <span className={styles.connectStats}>500+ اتصال مهني</span>
            </a>

            <a
              href="https://github.com/Moh-abah"
              className={`${styles.connectCard} ${styles.githubCard}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className={styles.connectIcon} />
              <span className={styles.connectLabel}>GitHub Portfolio</span>
              <span className={styles.connectStats}>30+ مستودع نشط</span>
            </a>

            <div className={`${styles.connectCard} ${styles.contactCard}`}>
              <div className={styles.contactInfo}>
                <FiMail className={styles.connectIcon} />
                <span className={styles.connectLabel}>الاتصال المباشر</span>
                <address className={styles.connectAddress}>
                  musst92@gmail.com<br />
                  +967 780 090 882
                </address>
              </div>
              <div className={styles.contactQR}>
                <Image
                  src="/contact-qr.png"
                  alt="QR Code للاتصال"
                  width={120}
                  height={120}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}