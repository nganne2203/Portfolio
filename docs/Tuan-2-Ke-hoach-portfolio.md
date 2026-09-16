# Kế hoạch xây dựng portfolio cá nhân Tuần 2

## 1. Mục tiêu và nội dung

Portfolio giới thiệu Mai Thị Thanh Ngân với định hướng Full-stack & Mobile Developer. Trang tập trung vào năng lực phát triển sản phẩm đầu-cuối, ba dự án tiêu biểu, kinh nghiệm thực tập, kỹ năng, thành tích và kênh liên hệ.

Các khu vực chính:

1. Header và điều hướng theo section.
2. Hero với tên, vai trò, thông điệp nghề nghiệp và CTA.
3. Giới thiệu cùng ba chỉ số nổi bật.
4. Kỹ năng theo nhóm Frontend, Backend, Quality, Tools và ngôn ngữ.
5. Ba dự án tiêu biểu có đóng góp, công nghệ và repository.
6. Kinh nghiệm thực tập.
7. Thành tích và chứng chỉ, sẵn sàng gắn PDF hoặc URL bên ngoài.
8. Liên hệ và footer.

## 2. Tham khảo bố cục

- [Samar](https://samar-azure.vercel.app/): tham khảo cách chia section rõ ràng, hero hai cột, nhịp chuyển giữa nội dung và các nhóm thẻ.
- [Bake](https://bake-five.vercel.app/): tham khảo điều hướng theo anchor, cách dùng lưới responsive và phân cấp heading mạnh.

Portfolio không sao chép giao diện mẫu. Các nguyên tắc phù hợp được chuyển thành bố cục riêng cho hồ sơ kỹ thuật: nội dung thật, khoảng trắng rộng, thẻ dự án lớn và điều hướng ngắn gọn.

## 3. Wireframe

```text
+-------------------------------------------------------+
| Logo MN | Giới thiệu Kỹ năng Dự án ... | Liên hệ     |
+-------------------------------------------------------+
| HERO: tên, vai trò, CTA        | Hồ sơ năng lực       |
| GitHub, email, địa điểm        | Web / Mobile / QA    |
+-------------------------------------------------------+
| GIỚI THIỆU                     | 3 chỉ số nổi bật      |
+-------------------------------------------------------+
| KỸ NĂNG: 5 nhóm thẻ trên nền navy                     |
+-------------------------------------------------------+
| DỰ ÁN 01: thumbnail thông tin  | mô tả + links        |
| DỰ ÁN 02: mô tả + links        | thumbnail thông tin  |
| DỰ ÁN 03: thumbnail thông tin  | mô tả + links        |
+-------------------------------------------------------+
| KINH NGHIỆM                    | timeline              |
+-------------------------------------------------------+
| THÀNH TÍCH & CHỨNG CHỈ: lưới card                     |
+-------------------------------------------------------+
| LIÊN HỆ: lời mời + email/GitHub | form ngắn           |
+-------------------------------------------------------+
| Footer                                                |
+-------------------------------------------------------+
```

Trên mobile, tất cả khối hai cột xếp thành một cột; menu chuyển thành nút mở; CTA và liên kết có vùng chạm đủ lớn.

## 4. Hệ thống hình ảnh

- Màu nền: trắng xanh `#f7f9fc`.
- Màu chữ chính: navy `#0b1830`.
- Màu nhấn: xanh dương `#176bdb` và cyan `#4cc9f0`.
- Màu viền: xanh xám nhạt `#dce4ef`.
- Font: Geist qua `next/font`, có hỗ trợ tốt tiếng Việt, tải cục bộ khi build.
- Phong cách: tối giản, tin cậy, hình khối gọn, bo góc vừa phải, chuyển động nhỏ và tôn trọng `prefers-reduced-motion`.

## 5. Công nghệ

- Next.js 16 App Router.
- React 19 và TypeScript strict.
- Tailwind CSS 4 kết hợp CSS toàn cục cho hệ thống giao diện.
- Server Component cho nội dung tĩnh; Client Component chỉ dùng cho form liên hệ.
- Dữ liệu dự án, kỹ năng và chứng chỉ đặt tại `app/data/portfolio.ts`.

## 6. Tiêu chí hoàn thành

- Semantic HTML, một `h1`, heading theo thứ bậc, có skip link.
- Responsive ở desktop, tablet và mobile; không tràn ngang.
- Liên kết GitHub, email và repository hoạt động.
- Form liên hệ kiểm tra trường bắt buộc và mở ứng dụng email với nội dung đã điền.
- Chứng chỉ chưa có link vẫn hiển thị nhưng nút ở trạng thái không khả dụng.
- Có metadata tiếng Việt, kiểm tra lint và production build.
