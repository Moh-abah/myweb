import Image from "next/image";
import styles from "./page.module.css";
import { FiLinkedin, FiGithub, FiTwitter, FiMail, FiArrowUpRight,FiSend  } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { Metadata } from 'next'

export const metadata = {
  title: "محمد يحيى | مطور Full-Stack",
  description: "مطور ويب وموبايل متخصص في Next.js وFlutter. بناء حلول تقنية بتجارب مستخدم مميزة.",
  keywords: ["محمد يحيى", "مطور Flutter", "Next.js", "تطوير ويب"],
  openGraph: {
    images: [{ url: "/og-image.jpg" }],
  },
};


export default function Home() {
  const projects = [
    {
      title: "تظام تجاري",
      description: "نظام وسيط بين التجار والعملاء",
      tech: ["flutter", "Dart", "Postgress", "FireBase", "Render"],
      link: "#"
    },
    {
      title: "منصة تعليمية",
      description: "فصول افتراضية مع تقنيات بث مباشر",
      tech: ["Next.js", "WebRTC", "Firebase"],
      link: "#"
    }
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* قسم الصورة الشخصية مع تأثيرات متقدمة */}
        <div className={styles.profileHeader}>
          <div className={styles.imageWrapper}>
            <Image
              src="/profile.jpg"
              alt="صورة محمد عبه"
              width={200}
              height={200}
              quality={90}
              priority
              className={styles.profileImage}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,..."
            />
            <div className={styles.imageHoverEffect} />
          </div>
        </div>

        {/* المعلومات الشخصية مع تفاصيل إضافية */}
        <section className={styles.profileInfo}>
          <h1 className={styles.name}>
            محمد يحي عبه
            <span className={styles.nameDecorator} />
          </h1>
          <h2 className={styles.title}>
            مطور Bake-end & Front-end
            <span className={styles.titleUnderline} />
          </h2>
          <p className={styles.bio}>
            مطور واجهات أمامية وخلفيه بخبرة 1+ سنه، متخصص في بناء تطبيقات ويب 
            <strong> React</strong> و<strong>Next.js</strong>. وتطبيقات الموبايل <strong> flutter</strong>.
            أهتم ببناء تجارب مستخدم استثنائية .
          </p>
        </section>

        {/* روابط التواصل مع أيقونات متحركة */}
        <nav className={styles.socialLinks}>
          <a
            href="https://linkedin.com/in/mohmmed-yahya-ali-abah-136a3033a
"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
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
          >
            <FiGithub className={styles.socialIcon} />
            <span>GitHub</span>
            <FiArrowUpRight className={styles.linkArrow} />
          </a>
          

          <a
            href="https://wa.me/967780090882" // استبدل بالرقم الدولي
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaWhatsapp className={styles.socialIcon} />
            <span>Whatsapp</span>
            <FiArrowUpRight className={styles.linkArrow} />
          </a>
          <a
            href="https://t.me/@M_U_VIP"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FiSend className={styles.socialIcon} /> {/* أيقونة Telegram */}
            <span>Telegram</span>
            <FiArrowUpRight className={styles.linkArrow} />
          </a>
        </nav>

        {/* قسم المشاريع مع بطاقات تفاعلية */}
        <section className={styles.projectsSection}>
          <h3 className={styles.sectionTitle}>
            المشاريع الحديثة
            <span className={styles.sectionTitleLine} />
          </h3>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                className={styles.projectCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.projectContent}>
                  <h4 className={styles.projectTitle}>
                    {project.title}
                    <FiArrowUpRight className={styles.projectArrow} />
                  </h4>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.techStack}>
                    {project.tech.map((tech, i) => (
                      <span key={i} className={styles.techPill}>{tech}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* زر الاتصال مع تأثيرات متقدمة */}
        <div className={styles.contactSection}>
          <a
            href="mailto:musst92@gmail.com"
            className={styles.contactButton}


          >

            
            <FiMail className={styles.mailIcon} />
            تواصل معي
            <div className={styles.buttonHoverEffect} />


          </a>


        </div>
      </main>
    </div>
  );
}