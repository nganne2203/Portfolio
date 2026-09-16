"use client";

import { FormEvent, useState } from "react";

const CONTACT_EMAIL = "thanhngan.pt2004@gmail.com";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Lời nhắn portfolio từ ${name}`);
    const body = encodeURIComponent(
      `Xin chào Ngân,\n\n${message}\n\nNgười gửi: ${name}\nEmail: ${email}`,
    );

    setStatus("Ứng dụng email đang được mở để bạn kiểm tra và gửi lời nhắn.");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-grid">
        <label className="field">
          <span>Họ và tên</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Tên của bạn"
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
        <span>Nội dung</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Bạn muốn cùng mình xây dựng điều gì?"
          required
        />
      </label>
      <div className="form-footer">
        <button className="button button--light" type="submit">
          Gửi lời nhắn <span aria-hidden="true">↗</span>
        </button>
        <p className="form-status" aria-live="polite">
          {status}
        </p>
      </div>
    </form>
  );
}
