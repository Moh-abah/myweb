import Image from "next/image";
import styles from "./page.module.css";
import { FiLinkedin, FiGithub, FiMail, FiArrowUpRight, FiSend } from "react-icons/fi";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import { Metadata } from 'next'

export const metadata = {
  title: "محمد يحيى عبه | مطور Full-Stack",
  description: "مطور ويب وموبايل متخصص في Next.js وFlutter. بناء حلول تقنية بتجارب مستخدم مميزة.",
  keywords: ["محمد يحيى عبه", "مطور Flutter", "Next.js", "تطوير ويب", "مطور يمني", "بناء تطبيقات الموبايل", " تصميم مدونه شخصيه", "بناء backend", " مبرمج مواقع الويب", "عبه ", " محمد عبه", " تطوير api", "تطبيقات الاندرويد ", "باور بي اي ", "power bi"],
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
    "@type": "Person",
    name: "محمد يحي عبه",
    jobTitle: "مطور Full Stack",
    url: "https://mohammed-abah.com",
    sameAs: [
      "https://linkedin.com/in/mohmmed-yahya-ali-abah-136a3033a",
      "https://github.com/Moh-abah",
      "https://t.me/M_U_VIP"
    ],
    image: "https://mohammed-abah.com/profile.jpg",
    email: "musst92@gmail.com",
    description: "مطور ويب وموبايل بخبرة في React، Next.js، و Flutter.",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "جامعة صنعاء"
    }
  };

  const projects = [
    {
      title: "نظام تجاري إلكتروني",
      description: "منصة وسيطة لتوصيل التجار مع العملاء مع نظام دفع إلكتروني",
      tech: ["Flutter", "Dart", "PostgreSQL", "Firebase", "Node.js"],
      link: "#"
    },
    {
      title: "منصة تعليم تفاعلية",
      description: "نظام تعليم عن بعد مع غرف افتراضية وبث مباشر",
      tech: ["Next.js", "WebRTC", "Firebase", "TypeScript"],
      link: "#"
    }
  ];

  return (
    <div className={styles.page}>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <main className={styles.main}>
        <header className={styles.profileHeader}>
          <div className={styles.imageWrapper}>
            <Image
              src="/profile.jpg"
              alt="صورة محمد يحي عبه الشخصية"
              width={200}
              height={200}
              quality={90}
              priority
              className={styles.profileImage}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,..."
            />
            <div className={styles.imageHoverEffect} aria-hidden="true" />
          </div>
        </header>

        <article className={styles.profileInfo}>
          <h1 className={styles.name}>
            محمد يحي عبه
            <span className={styles.nameDecorator} aria-hidden="true" />
          </h1>
          <h2 className={styles.title}>
            مطور Backend & Frontend
            <span className={styles.titleUnderline} aria-hidden="true" />
          </h2>
          <p className={styles.bio}>
            مطور واجهات أمامية وخلفية بخبرة 1+ سنة، متخصص في:
            <br />
            <strong>تطبيقات الويب:</strong> React, Next.js, Node.js
            <br />
            <strong>تطبيقات الموبايل:</strong> Flutter, Dart
            <br />
            أهتم ببناء تجارب مستخدم استثنائية مع الحفاظ على أفضل الممارسات البرمجية.
          </p>
        </article>

        <nav className={styles.socialLinks} aria-label="روابط التواصل">
          <a
            href="https://linkedin.com/in/mohmmed-yahya-ali-abah-136a3033a"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="حساب لينكد إن"
          >
            <FiLinkedin className={styles.socialIcon} />
            <span>LinkedIn</span>
            <FiArrowUpRight className={styles.linkArrow} />
          </a>

          <a
            href="https://github.com/Moh-abah"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="حساب جيت هاب"
          >
            <FiGithub className={styles.socialIcon} />
            <span>GitHub</span>
            <FiArrowUpRight className={styles.linkArrow} />
          </a>

          <a
            href="https://wa.me/967780090882"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="التواصل عبر واتساب"
          >
            <FaWhatsapp className={styles.socialIcon} />
            <span>واتساب</span>
            <FiArrowUpRight className={styles.linkArrow} />
          </a>

          <a
            href="https://t.me/M_U_VIP"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="قناة تلجرام"
          >
            <FaTelegram className={styles.socialIcon} />
            <span>تلجرام</span>
            <FiArrowUpRight className={styles.linkArrow} />
          </a>
        </nav>

        <section className={styles.projectsSection}>
          <h2 className={styles.sectionTitle}>
            أبرز المشاريع
            <span className={styles.sectionTitleLine} aria-hidden="true" />
          </h2>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <article
                key={index}
                className={styles.projectCard}
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectContent}
                >
                  <h3 itemProp="name" className={styles.projectTitle}>
                    {project.title}
                    <FiArrowUpRight className={styles.projectArrow} />
                  </h3>
                  <p itemProp="description" className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <div className={styles.techStack}>
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={styles.techPill}
                        itemProp="keywords"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.contactSection}>
          <a
            href="mailto:musst92@gmail.com"
            className={styles.contactButton}
            aria-label="إرسال بريد إلكتروني"
          >
            <FiMail className={styles.mailIcon} />
            تواصل معي
            <div className={styles.buttonHoverEffect} aria-hidden="true" />
          </a>
        </section>
      </main>
    </div>
  );
}