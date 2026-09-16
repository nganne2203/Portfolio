"use client";

import { FormEvent, useState } from "react";

const CONTACT_EMAIL = "thanhngan.pt2004@gmail.com";

export function ContactForm({ locale = "vi" }: { locale?: "vi" | "en" }) {
  const [status, setStatus] = useState("");
  const isEnglish = locale === "en";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      isEnglish ? `Portfolio message from ${name}` : `Lời nhắn portfolio từ ${name}`,
    );
    const body = encodeURIComponent(
      isEnglish
        ? `Hi Ngan,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
        : `Xin chào Ngân,\n\n${message}\n\nNgười gửi: ${name}\nEmail: ${email}`,
    );

    setStatus(
      isEnglish
        ? "Your email app is opening so you can review and send the message."
        : "Ứng dụng email đang được mở để bạn kiểm tra và gửi lời nhắn.",
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-grid">
        <label className="field">
          <span>{isEnglish ? "Full name" : "Họ và tên"}</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder={isEnglish ? "Your name" : "Tên của bạn"}
            required
          />
        </label>
        <label className="field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
        </label>
      </div>
      <label className="field">
        <span>{isEnglish ? "Message" : "Nội dung"}</span>
        <textarea
          name="message"
          rows={5}
          placeholder={
            isEnglish
              ? "What would you like us to build together?"
              : "Bạn muốn cùng mình xây dựng điều gì?"
          }
          required
        />
      </label>
      <div className="form-footer">
        <button className="button button--light" type="submit">
          {isEnglish ? "Send message" : "Gửi lời nhắn"}{" "}
          <span aria-hidden="true">↗</span>
        </button>
        <p className="form-status" aria-live="polite">
          {status}
        </p>
      </div>
    </form>
  );
}
