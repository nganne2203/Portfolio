# Mai Thị Thanh Ngân Portfolio

Landing page portfolio cá nhân được xây dựng bằng Next.js 16, React 19 và TypeScript. Trang giới thiệu định hướng Full-stack & Mobile Developer, kỹ năng, dự án, kinh nghiệm, thành tích và thông tin liên hệ.

## Chạy dự án

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Kiểm tra trước khi deploy

```bash
npm run lint
npm run build -- --webpack
```

Webpack được dùng cho bước build cục bộ để tránh giới hạn mở cổng nội bộ của Turbopack trong một số môi trường sandbox. Vercel vẫn có thể chạy lệnh build mặc định của Next.js.

## Cập nhật nội dung

- Nội dung hiển thị chính: `app/page.tsx`
- Dự án, kỹ năng, chứng chỉ và thông tin cá nhân: `app/data/portfolio.ts`
- Hệ thống màu, responsive và hiệu ứng: `app/globals.css`
- Form liên hệ: `app/components/contact-form.tsx`

Để thêm chứng chỉ, cập nhật một phần tử trong mảng `credentials`:

```ts
{
  title: "Tên chứng chỉ",
  issuer: "Đơn vị cấp",
  date: "MM/YYYY",
  type: "certificate",
  thumbnail: "/certificates/thumbnail.jpg",
  credentialUrl: "/certificates/certificate.pdf",
}
```

`credentialUrl` hỗ trợ file trong thư mục `public` hoặc URL ngoài như Google Drive, LinkedIn và Credly. Khi chưa có URL, thẻ vẫn hiển thị với trạng thái chưa khả dụng.

## Deploy Vercel

1. Đẩy repository lên GitHub.
2. Import repository trong Vercel.
3. Giữ framework preset là Next.js và lệnh build mặc định.
4. Deploy, sau đó kiểm tra điều hướng, repository links và responsive trên URL thật.
