import { ContactForm } from "@/app/components/contact-form";
import Link from "next/link";
import {
  credentials,
  profile,
  projects,
  skillGroups,
} from "@/app/data/portfolio";
import { projectsEn, skillGroupsEn } from "@/app/data/portfolio-en";

export type PortfolioLocale = "vi" | "en";

const pageCopy = {
  vi: {
    skip: "Chuyển đến nội dung chính",
    homeLabel: "Về đầu trang",
    navLabel: "Điều hướng chính",
    mobileNavLabel: "Điều hướng di động",
    mobileMenuLabel: "Mở menu điều hướng",
    navItems: [
      { label: "Giới thiệu", href: "#gioi-thieu" },
      { label: "Kỹ năng", href: "#ky-nang" },
      { label: "Dự án", href: "#du-an" },
      { label: "Kinh nghiệm", href: "#kinh-nghiem" },
      { label: "Chứng nhận", href: "#chung-nhan" },
    ],
    contact: "Liên hệ",
    heroIntro:
      "Mình xây dựng các sản phẩm web và mobile rõ ràng, dễ dùng và đáng tin cậy — từ phân tích yêu cầu, phát triển tính năng đến kiểm thử và hoàn thiện trải nghiệm người dùng.",
    viewProjects: "Xem dự án",
    contactMe: "Liên hệ với tôi",
    capabilityLabel: "Hồ sơ năng lực",
    about: {
      eyebrow: "Giới thiệu",
      title: "Tư duy sản phẩm đi cùng nền tảng kỹ thuật.",
      description:
        "Mình không chỉ tập trung vào việc tính năng chạy được, mà còn quan tâm cách sản phẩm được hiểu, được dùng và được hoàn thiện.",
      leadBefore: "Mình là ",
      leadAfter:
        ", sinh viên năm cuối ngành Kỹ thuật Phần mềm tại Đại học FPT. Với nền tảng full-stack và mobile, mình đã tham gia xuyên suốt vòng đời sản phẩm: làm rõ yêu cầu, thiết kế luồng người dùng, tích hợp API, kiểm thử giao diện và sửa lỗi.",
      direction:
        "Mình hướng đến việc trở thành một Software Engineer có thể tạo ra những sản phẩm chất lượng, lấy người dùng làm trung tâm.",
    },
    stats: [
      { label: "GPA", value: "3.7", suffix: "/ 4.0" },
      { label: "Dự kiến tốt nghiệp", value: "01", suffix: "/ 2027" },
      { label: "Dự án tiêu biểu", value: "03", suffix: "dự án" },
    ],
    skills: {
      eyebrow: "Kỹ năng",
      title: "Bộ công cụ để đưa một ý tưởng thành sản phẩm.",
      description:
        "Từ giao diện, dữ liệu và tích hợp API đến kiểm thử, phản hồi và cải tiến trải nghiệm.",
    },
    projects: {
      eyebrow: "Dự án tiêu biểu",
      title: "Sản phẩm được xây dựng từ bài toán thật.",
      description:
        "Ba dự án thể hiện khả năng dẫn dắt nhóm, phát triển đa nền tảng và theo sát chất lượng sản phẩm.",
      contributions: "Đóng góp chính",
      technologiesLabel: "Công nghệ sử dụng",
    },
    experience: {
      eyebrow: "Kinh nghiệm",
      title: "Học từ quy trình phát triển sản phẩm thực tế.",
      project: "Dự án SOS Khu Phố Tăng Nhơn Phú",
      points: [
        "Phát triển tính năng cho hệ thống quản lý yêu cầu và SOS trên web.",
        "Hỗ trợ làm rõ yêu cầu, kiểm thử và xử lý lỗi.",
        "Phối hợp nhóm để cải thiện luồng sử dụng và chức năng hệ thống.",
      ],
    },
    credentials: {
      eyebrow: "Thành tích & chứng chỉ",
      title: "Dấu mốc cho hành trình học tập liên tục.",
      description:
        "Các thẻ đã sẵn sàng để gắn file PDF hoặc liên kết chứng nhận khi được bổ sung.",
      view: "Xem chứng nhận",
      unavailable: "Xem chứng nhận · Chưa khả dụng",
    },
    contactSection: {
      eyebrow: "Liên hệ",
      title: "Cùng tạo ra một sản phẩm có ích.",
      description:
        "Mình luôn sẵn sàng học hỏi, hợp tác và đóng góp vào những sản phẩm có giá trị cho người dùng.",
    },
    footer: "Được thiết kế và xây dựng chỉn chu tại TP. Hồ Chí Minh.",
    backToTop: "Lên đầu trang ↑",
  },
  en: {
    skip: "Skip to main content",
    homeLabel: "Back to top",
    navLabel: "Main navigation",
    mobileNavLabel: "Mobile navigation",
    mobileMenuLabel: "Open navigation menu",
    navItems: [
      { label: "About", href: "#gioi-thieu" },
      { label: "Skills", href: "#ky-nang" },
      { label: "Projects", href: "#du-an" },
      { label: "Experience", href: "#kinh-nghiem" },
      { label: "Credentials", href: "#chung-nhan" },
    ],
    contact: "Contact",
    heroIntro:
      "I build clear, usable, and reliable web and mobile products — from requirement analysis and feature development to testing and refining the user experience.",
    viewProjects: "View projects",
    contactMe: "Contact me",
    capabilityLabel: "Capability profile",
    about: {
      eyebrow: "About",
      title: "Product thinking grounded in engineering.",
      description:
        "I care not only about whether a feature works, but also about how the product is understood, used, and improved.",
      leadBefore: "I am ",
      leadAfter:
        ", a final-year Software Engineering student at FPT University. With a full-stack and mobile foundation, I have contributed throughout the product lifecycle: clarifying requirements, designing user flows, integrating APIs, testing interfaces, and fixing issues.",
      direction:
        "I am working toward becoming a Software Engineer who builds high-quality, user-centered products.",
    },
    stats: [
      { label: "GPA", value: "3.7", suffix: "/ 4.0" },
      { label: "Expected graduation", value: "01", suffix: "/ 2027" },
      { label: "Featured projects", value: "03", suffix: "projects" },
    ],
    skills: {
      eyebrow: "Skills",
      title: "The toolkit to turn an idea into a product.",
      description:
        "From interfaces, data, and API integration to testing, feedback, and experience refinement.",
    },
    projects: {
      eyebrow: "Featured projects",
      title: "Products built around real-world problems.",
      description:
        "Three projects that demonstrate team leadership, cross-platform development, and attention to product quality.",
      contributions: "Key contributions",
      technologiesLabel: "Technologies used",
    },
    experience: {
      eyebrow: "Experience",
      title: "Learning through a real product development process.",
      project: "Tan Nhon Phu Neighborhood SOS Project",
      points: [
        "Developed features for a web-based request and SOS management system.",
        "Supported requirement clarification, testing, and issue resolution.",
        "Collaborated with the team to improve user flows and system functionality.",
      ],
    },
    credentials: {
      eyebrow: "Awards & credentials",
      title: "Milestones in a continuous learning journey.",
      description:
        "Each card is ready for a PDF file or an external credential link when available.",
      view: "View credential",
      unavailable: "View credential · Not available yet",
    },
    contactSection: {
      eyebrow: "Contact",
      title: "Let’s build something useful.",
      description:
        "I am always ready to learn, collaborate, and contribute to products that create meaningful value for users.",
    },
    footer: "Designed and built with care in Ho Chi Minh City.",
    backToTop: "Back to top ↑",
  },
} as const;

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>;
}

function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  light = false,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <header className={`section-heading${light ? " section-heading--light" : ""}`}>
      <div className="section-kicker">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-heading__copy">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </header>
  );
}

export function PortfolioPage({ locale }: { locale: PortfolioLocale }) {
  const t = pageCopy[locale];
  const localizedProjects = locale === "en" ? projectsEn : projects;
  const localizedSkills = locale === "en" ? skillGroupsEn : skillGroups;

  return (
    <div className="page-shell" lang={locale}>
      <a className="skip-link" href="#noi-dung-chinh">
        {t.skip}
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label={t.homeLabel}>
            <span className="brand-mark" aria-hidden="true">
              {profile.initials}
            </span>
            <span className="brand-name">Thanh Ngân</span>
          </a>

          <nav className="desktop-nav" aria-label={t.navLabel}>
            {t.navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <nav className="language-switcher" aria-label="Language selection">
            <Link
              className={locale === "vi" ? "is-active" : ""}
              href="/"
              aria-current={locale === "vi" ? "page" : undefined}
            >
              VI
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              className={locale === "en" ? "is-active" : ""}
              href="/en"
              aria-current={locale === "en" ? "page" : undefined}
            >
              EN
            </Link>
          </nav>

          <a className="header-cta" href="#lien-he">
            {t.contact} <ArrowUpRight />
          </a>

          <details className="mobile-menu">
            <summary aria-label={t.mobileMenuLabel}>
              <span />
              <span />
            </summary>
            <nav aria-label={t.mobileNavLabel}>
              {t.navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <a href="#lien-he">{t.contact}</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="noi-dung-chinh">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow reveal">Portfolio · 2026</p>
              <h1 className="reveal">Mai Thị Thanh Ngân</h1>
              <p className="hero-role reveal">
                Software Engineering Student
                <span>Full-stack &amp; Mobile Developer</span>
              </p>
              <p className="hero-intro reveal">
                {t.heroIntro}
              </p>
              <div className="hero-actions reveal">
                <a className="button button--primary" href="#du-an">
                  {t.viewProjects} <ArrowUpRight />
                </a>
                <a className="button button--secondary" href="#lien-he">
                  {t.contactMe}
                </a>
              </div>
              <div className="hero-meta reveal">
                <span>{profile.location}</span>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight />
                </a>
                <a href={`mailto:${profile.email}`}>Email <ArrowUpRight /></a>
              </div>
            </div>

            <aside className="capability-card reveal" aria-label={t.capabilityLabel}>
              <div className="capability-card__top">
                <span className="status-dot" />
                <span>Open to opportunities</span>
                <span className="capability-card__year">2026</span>
              </div>
              <div className="capability-card__identity">
                <span className="monogram" aria-hidden="true">MN</span>
                <div>
                  <strong>Software Engineer</strong>
                  <span>FPT University · Final year</span>
                </div>
              </div>
              <div className="capability-list">
                <div>
                  <span>01</span>
                  <p>
                    <strong>Web experiences</strong>
                    React · TypeScript · Node.js
                  </p>
                </div>
                <div>
                  <span>02</span>
                  <p>
                    <strong>Mobile products</strong>
                    React Native · Flutter
                  </p>
                </div>
                <div>
                  <span>03</span>
                  <p>
                    <strong>Product quality</strong>
                    Testing · Validation · UX
                  </p>
                </div>
              </div>
              <div className="capability-card__footer">
                <span>Based in Ho Chi Minh City</span>
                <span aria-hidden="true">⌁</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="section about" id="gioi-thieu">
          <div className="container">
            <SectionHeading
              index="01"
              eyebrow={t.about.eyebrow}
              title={t.about.title}
              description={t.about.description}
            />

            <div className="about-grid reveal">
              <div className="about-copy">
                <p>
                  {t.about.leadBefore}
                  <strong>Mai Thị Thanh Ngân</strong>
                  {t.about.leadAfter}
                </p>
                <p>{t.about.direction}</p>
              </div>
              <dl className="stats-grid">
                {t.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt>{stat.label}</dt>
                    <dd>
                      <strong>{stat.value}</strong>
                      <span>{stat.suffix}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="section skills" id="ky-nang">
          <div className="container">
            <SectionHeading
              index="02"
              eyebrow={t.skills.eyebrow}
              title={t.skills.title}
              description={t.skills.description}
              light
            />
            <div className="skills-grid">
              {localizedSkills.map((group) => (
                <article className="skill-card reveal" key={group.title}>
                  <div className="skill-card__heading">
                    <span>{group.code}</span>
                    <h3>{group.title}</h3>
                  </div>
                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects" id="du-an">
          <div className="container">
            <SectionHeading
              index="03"
              eyebrow={t.projects.eyebrow}
              title={t.projects.title}
              description={t.projects.description}
            />

            <div className="project-list">
              {localizedProjects.map((project) => (
                <article className="project reveal" key={project.id}>
                  <div className={`project-visual project-visual--${project.accent}`}>
                    <div className="project-visual__header">
                      <span>Case study</span>
                      <span>{project.number} / 03</span>
                    </div>
                    <div className="project-visual__body">
                      <span className="project-number">{project.number}</span>
                      <p>{project.shortTitle}</p>
                    </div>
                    <div className="project-visual__footer">
                      <span>Product engineering</span>
                      <span className="visual-arrow" aria-hidden="true">↗</span>
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-meta">
                      <span>{project.role}</span>
                      <span>{project.period}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="contribution-block">
                      <h4>{t.projects.contributions}</h4>
                      <ul>
                        {project.contributions.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <ul className="tag-list" aria-label={t.projects.technologiesLabel}>
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                          {link.label} <ArrowUpRight />
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience" id="kinh-nghiem">
          <div className="container">
            <SectionHeading
              index="04"
              eyebrow={t.experience.eyebrow}
              title={t.experience.title}
            />

            <article className="experience-row reveal">
              <div className="experience-period">
                <span>09/2025</span>
                <span className="period-line" />
                <span>12/2025</span>
              </div>
              <div className="experience-title">
                <p>Amazing Tech</p>
                <h3>Frontend Developer Intern</h3>
                <span>{t.experience.project}</span>
              </div>
              <ul className="experience-points">
                {t.experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section credentials" id="chung-nhan">
          <div className="container">
            <SectionHeading
              index="05"
              eyebrow={t.credentials.eyebrow}
              title={t.credentials.title}
              description={t.credentials.description}
            />

            <div className="credential-grid">
              {credentials.map((credential, index) => (
                <article className="credential-card reveal" key={credential.title}>
                  <div
                    className={`credential-preview${
                      credential.thumbnail ? " credential-preview--image" : ""
                    }`}
                    style={
                      credential.thumbnail
                        ? { backgroundImage: `url(${credential.thumbnail})` }
                        : undefined
                    }
                    aria-hidden="true"
                  >
                    <span>{credential.type === "award" ? "Award" : "Certificate"}</span>
                    <strong>{String(index + 1).padStart(2, "0")}</strong>
                    <i>{credential.issuer}</i>
                  </div>
                  <div className="credential-content">
                    <div className="credential-meta">
                      <span>{credential.issuer}</span>
                      <span>{credential.date}</span>
                    </div>
                    <h3>{credential.title}</h3>
                    {credential.credentialUrl ? (
                      <a href={credential.credentialUrl} target="_blank" rel="noreferrer">
                        {t.credentials.view} <ArrowUpRight />
                      </a>
                    ) : (
                      <span className="credential-disabled" aria-disabled="true">
                        {t.credentials.unavailable}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="lien-he">
          <div className="container contact-grid">
            <div className="contact-copy reveal">
              <p className="eyebrow eyebrow--light">06 · {t.contactSection.eyebrow}</p>
              <h2>{t.contactSection.title}</h2>
              <p>{t.contactSection.description}</p>
              <div className="contact-links">
                <a href={`mailto:${profile.email}`}>
                  {profile.email} <ArrowUpRight />
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  github.com/nganne2203 <ArrowUpRight />
                </a>
              </div>
            </div>
            <div className="reveal">
              <ContactForm locale={locale} />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Mai Thị Thanh Ngân</p>
          <p>{t.footer}</p>
          <a href="#top">{t.backToTop}</a>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return <PortfolioPage locale="vi" />;
}
