import { ContactForm } from "@/app/components/contact-form";
import {
  credentials,
  profile,
  projects,
  skillGroups,
} from "@/app/data/portfolio";

const navItems = [
  { label: "Giới thiệu", href: "#gioi-thieu" },
  { label: "Kỹ năng", href: "#ky-nang" },
  { label: "Dự án", href: "#du-an" },
  { label: "Kinh nghiệm", href: "#kinh-nghiem" },
  { label: "Chứng nhận", href: "#chung-nhan" },
];

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

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#noi-dung-chinh">
        Chuyển đến nội dung chính
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Về đầu trang">
            <span className="brand-mark" aria-hidden="true">
              {profile.initials}
            </span>
            <span className="brand-name">Thanh Ngân</span>
          </a>

          <nav className="desktop-nav" aria-label="Điều hướng chính">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="header-cta" href="#lien-he">
            Liên hệ <ArrowUpRight />
          </a>

          <details className="mobile-menu">
            <summary aria-label="Mở menu điều hướng">
              <span />
              <span />
            </summary>
            <nav aria-label="Điều hướng di động">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <a href="#lien-he">Liên hệ</a>
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
                Mình xây dựng các sản phẩm web và mobile rõ ràng, dễ dùng và đáng
                tin cậy — từ phân tích yêu cầu, phát triển tính năng đến kiểm thử
                và hoàn thiện trải nghiệm người dùng.
              </p>
              <div className="hero-actions reveal">
                <a className="button button--primary" href="#du-an">
                  Xem dự án <ArrowUpRight />
                </a>
                <a className="button button--secondary" href="#lien-he">
                  Liên hệ với tôi
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

            <aside className="capability-card reveal" aria-label="Hồ sơ năng lực">
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
              eyebrow="Giới thiệu"
              title="Tư duy sản phẩm đi cùng nền tảng kỹ thuật."
              description="Mình không chỉ tập trung vào việc tính năng chạy được, mà còn quan tâm cách sản phẩm được hiểu, được dùng và được hoàn thiện."
            />

            <div className="about-grid reveal">
              <div className="about-copy">
                <p>
                  Mình là <strong>Mai Thị Thanh Ngân</strong>, sinh viên năm cuối
                  ngành Kỹ thuật Phần mềm tại Đại học FPT. Với nền tảng full-stack
                  và mobile, mình đã tham gia xuyên suốt vòng đời sản phẩm: làm rõ
                  yêu cầu, thiết kế luồng người dùng, tích hợp API, kiểm thử giao
                  diện và sửa lỗi.
                </p>
                <p>
                  Mình hướng đến việc trở thành một Software Engineer có thể tạo ra
                  những sản phẩm chất lượng, lấy người dùng làm trung tâm.
                </p>
              </div>
              <dl className="stats-grid">
                <div>
                  <dt>GPA</dt>
                  <dd>3.7<span>/4.0</span></dd>
                </div>
                <div>
                  <dt>Dự kiến tốt nghiệp</dt>
                  <dd>01<span>/2027</span></dd>
                </div>
                <div>
                  <dt>Dự án tiêu biểu</dt>
                  <dd>03<span>full-stack &amp; mobile</span></dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section skills" id="ky-nang">
          <div className="container">
            <SectionHeading
              index="02"
              eyebrow="Kỹ năng"
              title="Bộ công cụ để đưa một ý tưởng thành sản phẩm."
              description="Từ giao diện, dữ liệu và tích hợp API đến kiểm thử, phản hồi và cải tiến trải nghiệm."
              light
            />
            <div className="skills-grid">
              {skillGroups.map((group) => (
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
              eyebrow="Dự án tiêu biểu"
              title="Sản phẩm được xây dựng từ bài toán thật."
              description="Ba dự án thể hiện khả năng dẫn dắt nhóm, phát triển đa nền tảng và theo sát chất lượng sản phẩm."
            />

            <div className="project-list">
              {projects.map((project) => (
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
                      <h4>Đóng góp chính</h4>
                      <ul>
                        {project.contributions.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <ul className="tag-list" aria-label="Công nghệ sử dụng">
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
              eyebrow="Kinh nghiệm"
              title="Học từ quy trình phát triển sản phẩm thực tế."
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
                <span>Dự án SOS Khu Phố Tăng Nhơn Phú</span>
              </div>
              <ul className="experience-points">
                <li>Phát triển tính năng cho hệ thống quản lý yêu cầu và SOS trên web.</li>
                <li>Hỗ trợ làm rõ yêu cầu, kiểm thử và xử lý lỗi.</li>
                <li>Phối hợp nhóm để cải thiện luồng sử dụng và chức năng hệ thống.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section credentials" id="chung-nhan">
          <div className="container">
            <SectionHeading
              index="05"
              eyebrow="Thành tích & chứng chỉ"
              title="Dấu mốc cho hành trình học tập liên tục."
              description="Các thẻ đã sẵn sàng để gắn file PDF hoặc liên kết chứng nhận khi được bổ sung."
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
                        Xem chứng nhận <ArrowUpRight />
                      </a>
                    ) : (
                      <span className="credential-disabled" aria-disabled="true">
                        Xem chứng nhận · Chưa khả dụng
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
              <p className="eyebrow eyebrow--light">06 · Liên hệ</p>
              <h2>Cùng tạo ra một sản phẩm có ích.</h2>
              <p>
                Mình luôn sẵn sàng học hỏi, hợp tác và đóng góp vào những sản phẩm
                có giá trị cho người dùng.
              </p>
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
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Mai Thị Thanh Ngân</p>
          <p>Designed &amp; built with care in Ho Chi Minh City.</p>
          <a href="#top">Lên đầu trang ↑</a>
        </div>
      </footer>
    </>
  );
}
