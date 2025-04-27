"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { FaWhatsapp, FaCode, FaMobile, FaShoppingCart, FaSearch, FaBullhorn } from "react-icons/fa"
import { SiNextdotjs, SiReact, SiFlutter, SiWordpress, SiLaravel, SiPhp, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si"
import styles from "./page.module.css"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // الخدمات
  const services = [
    {
      icon: <FaCode />,
      title: "تصميم وبرمجة المواقع الإلكترونية",
      description: "تصميمات عصرية وجذابة تتماشى مع أحدث المعايير التقنية وتستجيب لجميع الأجهزة لتوفير تجربة مستخدم استثنائية ومميزة."
    },
    {
      icon: <FaMobile />,
      title: "تصميم وتطوير تطبيقات ذكية",
      description: "تطبيقات مخصصة لأنظمة Android وiOS تلائم احتياجات عملك. تطبيقات Android و iOS متوافقة مع احتياجات السوق والعملاء."
    },
    {
      icon: <FaCode />,
      title: "تطوير المواقع والمتاجر والتطبيقات",
      description: "إنشاء وتطوير مواقع ديناميكية وقابلة للتطوير باستخدام أحدث التقنيات البرمجية. حلول برمجية متقدمة لتطوير مواقع ديناميكية وقابلة للتخصيص."
    },
    {
      icon: <FaShoppingCart />,
      title: "تصميم وبرمجة المتاجر الإلكترونية",
      description: "إنشاء متاجر متكاملة تلبي احتياجاتك التجارية وتدعم التوسع والربح. متاجر إلكترونية مصممة لتحقق أعلى معدلات الأداء والربح."
    },
    {
      icon: <FaSearch />,
      title: "إدارة المحتوى وتحسين السيو SEO",
      description: "تحسين محركات البحث ورفع ترتيب الموقع في محرك البحث بحيث يتصدر الصفحة الاولى بمحرك البحث جوجل."
    },
    {
      icon: <FaBullhorn />,
      title: "التسويق الإلكتروني",
      description: "خطط تسويقية متكاملة لزيادة وصولك إلى جمهورك المستهدف وتعزيز علامتك التجارية."
    }
  ]

  // التقنيات
  const technologies = [
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <SiWordpress />, name: "WordPress" },
    { icon: <SiLaravel />, name: "Laravel" },
    { icon: <SiPhp />, name: "PHP" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiCss3 />, name: "CSS3" }
  ]

  return (
    <main className={styles.main}>
      {/* Header/Navigation */}
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/profile.jpg">
              <div className={styles.logoText}>
                <span className={styles.logoName}>محمد_</span>
              </div>
            </Link>
          </div>
          <nav className={styles.nav}>
            {[
              { name: "عني", href: "#about" },
              { name: "الخدمات", href: "#services" },
              { name: "أعمالي", href: "#portfolio" },
              { name: "آراء العملاء", href: "#testimonials" },
              { name: "تواصل معي", href: "#contact" },
            ].map((link) => (
              <Link key={link.name} href={link.href} className={styles.navLink}>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                مرحباً بك .. في الموقع
                <br />
                الرسمي للمهندس: <span className={styles.highlight}>محمد يحي عبه</span>
              </h1>
              <p className={styles.heroDescription}>
                مطور ويب وموبايل متخصص في Next.js وFlutter
                <br />
                تجاوزت 12 عام في إنشاء المواقع الإلكترونية وتطبيقات الجوال الاحترافية، مع سابقة أعمال متفرقة لمشاريع
                كبرى، والتي كان دور مشروعك
              </p>
              <button className={styles.contactButton}>تواصل معي الآن</button>
            </div>
            <div className={styles.profileContainer}>
              <div className={styles.profileWrapper}>
                <Image
                  src="/profile.jpg"
                  alt="محمد يحي عبه"
                  width={400}
                  height={400}
                  className={styles.profileImage}
                  priority
                />
              </div>
              <div className={styles.profileInfo}>
                <p className={styles.profileName}>- محمد يحي عبه -</p>
                <p className={styles.profileTitle}>استشاري تقني مصمم ومبرمج مواقع وتطبيقات</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>نبذة عني</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutImage}>
              <Image
                src="/profile.jpg"
                alt="صورة عن محمد يحي عبه"
                width={600}
                height={400}
                className={styles.aboutImg}
              />
            </div>
            <div className={styles.aboutText}>
              <h3 className={styles.aboutHeading}>محمد يحي عبه | لتصميم وبرمجة المواقع والتطبيقات</h3>
              <p className={styles.aboutDescription}>
                مرحبًا بكم في موقعنا الإلكتروني بوابتكم نحو تصميم مواقع احترافية وبرمجة متكاملة للمواقع الإلكترونية والتطبيقات الذكية. مع محمد يحي عبه، نضمن لك تجربة رقمية فريدة تعتمد على الابتكار والجودة لتلبية احتياجاتك الرقمية بأعلى المعايير.
              </p>
              <p className={styles.aboutDescription}>
                لدينا مصمم مواقع محترف في تصميم مواقع ويب وتطبيقات إحترافية نقدم خدماتتنا بجودة واحترافية تضمن لك تحقيق أهدافك الرقمية بسهولة وسرعة. هدفنا تقديم خدمات عالمية بايدي عربية
              </p>
              <div className={styles.quoteContainer}>
                <blockquote className={styles.quote}>
                  « ان الله يحب اذا عمل احدكم عملا ان يتقنه »
                </blockquote>
              </div>
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>+12</span>
                  <span className={styles.statLabel}>سنوات من الخبرة</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>+100</span>
                  <span className={styles.statLabel}>مشروع مكتمل</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>+50</span>
                  <span className={styles.statLabel}>عميل سعيد</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>+20</span>
                  <span className={styles.statLabel}>تقنية مستخدمة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>تقنيات أعمل بها</h2>
          <div className={styles.technologiesGrid}>
            {technologies.map((tech, index) => (
              <div key={index} className={styles.technologyCard}>
                <div className={styles.technologyIcon}>{tech.icon}</div>
                <div className={styles.technologyName}>{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className={styles.divider}>
        <div className={styles.dividerLine}></div>
      </div>

      {/* Services Section */}
      <section id="services" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>الخدمات التي أقدمها</h2>
          <p className={styles.servicesIntro}>
            نقوم بتقديم جميع الخدمات المتخصصة بتصميم وتطوير مواقع الانترنت بأعلى معايير الجودة .. فى حالة طلب خدمة غير موجودة بالاسفل يرجى استخدام نموذج الاتصال وارسال طلبك (تواصل معي)
          </p>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIconWrapper}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className={styles.divider}>
        <div className={styles.dividerLine}></div>
      </div>

      {/* Portfolio Section */}
      <section id="portfolio" className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>أعمالي</h2>
          <div className={styles.portfolioGrid}>
            {[
              {
                title: "تطبيق انرويد تجاري ",
                description: "مع طريقه عرض المتاجر على الخريطه ",
                image: "/logo.jpg",
                year: 2025,
              },
              {
                title: "لوحه تحكم Power bi",
                description: "لوحه تحكم لمتخذين القرارات ووسهله وتقارير دقيقه",
                image: "/powerbi.jpg",
                year: 2024,
              },
              /*
              {
                title: "تطبيق محادثات بسيط ",
                description: "تطبيق محادثات على الاندرويد وامن وسريع",
                image: "/profile.jpg",
                year: 2022,
              },*/
              {
                title: "API متكامل ",
                description: "تخصيص كامل متكامل للباك اند والتحكم الكامل بالسرفر بواسطه بايثون ",
                image: "/puthon.jpg",
                year: 2024,
              },
              {
                title: "Figma UI UX",
                description: "تصاميم ذات طابع ابداعي بواسطه فيقما مع البروتوتايب ",
                image: "/figma.png",
                year: 2024,
              },
              /*
              {
                title: "نظام إدارة المحتوى",
                description: "نظام متطور لإدارة المحتوى مع دعم للغات المتعددة والنشر التلقائي",
                image: "/profile.jpg",
                year: 2022,
              },
              */
            ].map((project, index) => (
              <div key={index} className={styles.portfolioCard}>
                <div className={styles.portfolioImageWrapper}>
                  <Image
                    src={project.image || "/profile.jpg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className={styles.portfolioImage}
                  />
                  <div className={styles.portfolioOverlay}>
                    <h3 className={styles.portfolioTitle}>{project.title}</h3>
                    <p className={styles.portfolioDescription}>{project.description}</p>
                    <button className={styles.portfolioButton}>عرض التفاصيل</button>
                  </div>
                </div>
                <div className={styles.portfolioInfo}>
                  <span className={styles.portfolioYear}>{project.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.sectionDark}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>تواصل معي</h2>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <h3 className={styles.contactTitle}>معلومات التواصل</h3>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>البريد الإلكتروني:</span>
                  <a href="mailto:musst92@gmail.com" className={styles.contactValue}>
                    musst92@gmail.com
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>رقم الهاتف:</span>
                  <a href="tel:+967780090882" className={styles.contactValue}>
                    +967 780 090 882
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>الموقع:</span>
                  <span className={styles.contactValue}>صنعاء، اليمن</span>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <h4 className={styles.socialTitle}>تابعني على</h4>
                <div className={styles.socialIcons}>
                  <a
                    href="https://linkedin.com/in/mohmmed-yahya-ali-abah-136a3033a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/Moh-abah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    GitHub
                  </a>
                  <a
                    href="https://t.me/M_U_VIP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    Telegram
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.contactForm}>
              <form>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>
                      الاسم
                    </label>
                    <input type="text" id="name" className={styles.formInput} />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>
                      البريد الإلكتروني
                    </label>
                    <input type="email" id="email" className={styles.formInput} />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.formLabel}>
                    الموضوع
                  </label>
                  <input type="text" id="subject" className={styles.formInput} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    الرسالة
                  </label>
                  <textarea id="message" rows={5} className={styles.formTextarea}></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} محمد يحي عبه. جميع الحقوق محفوظة</p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+967780090882"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
        aria-label="تواصل عبر واتساب"
      >
        <FaWhatsapp size={30} />
      </a>
    </main>
  )
}
