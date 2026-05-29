# MAISON VŒID — Vol. 06 / Penumbra

Landing page ของแบรนด์ streetwear สมมุติสัญชาติปารีส ออกแบบในโทน **editorial / atelier**
ที่ให้ความรู้สึก *modern* และ *premium* ผ่านการวางเลเอาต์แบบนิตยสาร ระบบสีกระดาษ–หมึก
และตัวพิมพ์น้ำหนักหนัก งานชิ้นนี้โฟกัสที่ "ภาษาการออกแบบ" มากกว่าฟีเจอร์ — ทุกหน้าจอ
ถูกจัดวางเหมือนหน้ากระดาษของ lookbook ที่มีเลขกำกับ

```
React 19 · TypeScript · Vite · Tailwind CSS v4 · Motion · Lenis
```

```bash
npm install
npm run dev      # เปิด dev server (Vite)
npm run build    # type-check + production build
```

---

## 1. สไตล์การออกแบบ UI (Design Language)

ทั้งไซต์เดินตามแนวคิดเดียว: **"หน้ากระดาษของทะเบียนสินค้า" (the register)**
ไม่ใช่หน้าร้านอีคอมเมิร์ซทั่วไป แต่เป็นเอกสารสะสมที่มีเลขเล่ม เลขชิ้น และลำดับมาตรา

- **Editorial-first** — เนื้อหาถูกจัดเป็นมาตรา `§ 01 … § 06` มีเลขชิ้น `N° 014`, เลขเล่ม `Vol. 06`
  ทำให้ผู้ใช้รู้สึกว่ากำลังอ่านสิ่งพิมพ์ ไม่ใช่ feed
- **Paper × Noir** — พื้นหลังสีกระดาษอุ่น ตัดกับการ์ดสีดำสนิท (`noir-card`) เป็นจังหวะสว่าง–มืด
  สลับกันทั้งหน้า สร้าง rhythm แบบนิตยสารแฟชั่น
- **Soft-brutalist** — ตัวพิมพ์ใหญ่หนาเต็มความกว้าง ขอบการ์ดมนใหญ่ (`28px`) ผสมความดิบของ
  monospace labels ความตึงระหว่าง "หนา/ดิบ" กับ "ละเอียด/ประณีต" คือหัวใจของลุค premium

> ดีเทลภาษา: ใช้ตัวเอียง serif (`Instrument Serif`) แทรกในหัวข้อตัวหนาเสมอ เช่น
> *Community-Driven* **Culture.** — คำเน้นที่เป็น serif สีส้ม ember คือ "ลายเซ็น" ของแบรนด์
> ที่ปรากฏซ้ำในทุก section เพื่อความเป็นเอกภาพ

---

## 2. การจัด Layout

### Grid 12 คอลัมน์ + คอนเทนเนอร์กว้าง

ทุก section อยู่ในกรอบ `max-w-[1600px]` จัดกึ่งกลาง พร้อม padding ที่ขยายตามจอ
(`px-4 → md:px-6 → md:px-10`) ใช้ระบบ 12 คอลัมน์เป็นโครงหลัก

### Asymmetric / Editorial grid

หัวใจของความ "ไม่ใช่ template" คือการ์ดที่ **ขนาดไม่เท่ากันโดยตั้งใจ**:

```
Collection grid (12-col, asymmetric)
┌──────────────────────┬───────────────┐
│                      │   N° 022      │  ← ชิ้นเด่นกินพื้นที่ 7/12
│   N° 014 (7×2 rows)  ├───────────────┤     สองชิ้นรองวางขวา
│   aspect 4/5         │   N° 031      │
│                      ├───────────────┤
└──────────────────────┴───────────────┘
```

- ชิ้นแรกกินพื้นที่ `col-span-7 row-span-2` + อัตราส่วน `4/5` (แนวตั้ง เด่น)
- ชิ้นอื่นสลับ `5/12` กับ `7/12` + อัตราส่วน `5/4` (แนวนอน) → สายตาเต้นเป็นจังหวะ ไม่จำเจ

### จังหวะการหายใจ (vertical rhythm)

ระยะห่างระหว่าง section ตั้งใจให้ "เยอะ" (`py-24 md:py-32`, marquee `my-24`)
ช่องว่างคือ luxury — ปล่อยให้แต่ละบล็อกมีพื้นที่หายใจเหมือนหน้ากระดาษเปล่าในนิตยสารหรู

### โครงหน้า (จากบนลงล่าง)

`AnnouncementBar → Nav (sticky) → Hero → Categories → Marquee → Manifesto → Collection → Bestsellers → Editorial → Newsletter → Footer`

---

## 3. การเลือกสี (Color System)

ระบบสีถูกนิยามเป็น design tokens ใน [src/index.css](src/index.css#L3-L23) ทั้งหมด —
สีน้อย ควบคุมแน่น เป็นกุญแจของความ premium

| กลุ่ม | Token | ค่า | บทบาท |
|------|-------|-----|-------|
| **Paper** | `paper` / `bone` / `cream` | `#ece8df` · `#f6f2e8` · `#f0ebde` | พื้นหลังกระดาษอุ่น แทนสีขาวจัด (กันความ "ดิจิทัล") |
| **Noir** | `noir` / `ink` | `#0c0c0b` · `#131312` | การ์ดดำ + ตัวอักษรหลัก เป็นดำอมเขียว ไม่ใช่ `#000` |
| **Neutral** | `smoke` / `ash` / `line` | `#6a655c` · `#8a8479` · `#d4cdbb` | ตัวรอง เส้นคั่น โทนสงบ |
| **Accent** | `ember` / `ember-hot` | `#c2410c` · `#ea580c` | ส้มอิฐ — สีเน้น *ชิ้นเดียว* ของทั้งแบรนด์ |

**หลักการ:**

- **ไม่มีขาว/ดำบริสุทธิ์** — กระดาษอุ่น + หมึกอมเขียว ลดความแข็งกระด้าง ได้ความ analog/premium
- **Accent ใช้แบบขี้เหนียว** — ส้ม ember ปรากฏเฉพาะจุดสำคัญ: คำเน้นใน headline, จุดวงกลมนำมาตรา,
  hover state ของปุ่ม ความ "หายาก" ของสีเน้นคือสิ่งที่ทำให้มันทรงพลัง
- **คอนทราสต์เป็นโครงสร้าง** — สลับ section สว่าง (paper) กับการ์ดมืด (noir) เพื่อนำสายตา
  ไม่ใช่แค่ตกแต่ง

---

## 4. Typography

ระบบตัวพิมพ์ 4 ตระกูล แต่ละตัวมี "หน้าที่" ชัดเจน — ไม่ปนกันมั่ว

| Font | ตระกูล | ใช้กับ |
|------|--------|--------|
| **Archivo Black** | `--font-display` | หัวข้อใหญ่ทั้งหมด — uppercase, weight 900, tracking ติด |
| **Instrument Serif** *(italic)* | `--font-italic` | คำเน้น/ลายเซ็นในหัวข้อ สีส้ม ember |
| **Inter** | `--font-sans` | body text น้ำหนักบาง (`font-light`) อ่านสบาย |
| **JetBrains Mono** | `--font-mono` | ป้ายกำกับ เลขมาตรา ราคา — สร้างมิติ "เอกสาร/ทะเบียน" |

**รายละเอียดที่ตั้งใจ:**

- **หัวข้ออัด tracking ติดลบ** (`-0.025em` ถึง `-0.04em`) + `line-height: 0.92`
  ให้ตัวอักษรเกาะกันแน่นแบบ display type ระดับ editorial
- **Fluid type ด้วย `vw`** — headline สเกลตามจอจริง เช่น `text-[14vw]` บนมือถือ → `md:text-[7.5vw]`
  ทำให้พาดหัวเต็มความกว้างเสมอ ไม่ว่าจอเล็กหรือใหญ่
- **คู่ตรงข้ามที่จงใจ** — display ตัวหนา UPPERCASE ปะทะ serif เอียงตัวบาง ตัวพิมพ์เล็ก
  → ความตึงนี้คือเสน่ห์
- **Mono labels** ระยะห่างตัวอักษรกว้าง (`tracking-[0.22em]–[0.28em]`) ขนาดเล็ก `10px`
  ให้ความรู้สึกเทคนิค/ทางการ เหมือนเลขทะเบียนสินค้าจริง

---

## 5. Sense ของ Modern & Premium

ความรู้สึกหรูไม่ได้มาจากการใส่เยอะ แต่มาจาก **การควบคุม**:

- **Negative space เยอะ** — ระยะห่างคือสัญญะของความหรู ไม่อัดเนื้อหาแน่น
- **Motion ที่สุขุม** — ใช้ [Motion](https://motion.dev) กับ easing `cubic-bezier(0.2, 0.85, 0.2, 1)`
  เคลื่อนช้า นุ่ม มี stagger ทีละ ~80ms ไม่มีอะไรเด้งหรือกระตุก
- **Smooth scroll** — [Lenis](src/lib/useLenis.ts) ทำ inertia scroll + ดัก anchor link
  ให้เลื่อนนุ่มทั้งหน้า (`duration: 1.2`) สัมผัสแบบเว็บ flagship แบรนด์หรู
- **กระดาษมีเนื้อ** — พื้นหลังซ้อน SVG noise (`feTurbulence`) แบบ `fixed` ทำให้สีกระดาษ
  ไม่เรียบเป็นพลาสติก แต่มี "grain" เหมือนกระดาษพิมพ์จริง
- **การ์ดมืดมีมิติ** — `noir-card` ใช้ gradient + `inset` highlight + เงาทุ้มลึก
  (`0 30px 60px -30px`) ให้รู้สึกลอยและมีน้ำหนักวัสดุ
- **ภาพถูกเกรด** — ฟิลเตอร์ `img-mood` / `img-dark` ปรับ contrast/saturation ทุกภาพ
  ให้โทนเป็นชุดเดียวกัน เหมือนผ่าน art direction ของ lookbook

---

## 6. การจัดลำดับข้อมูล (Information Hierarchy)

แต่ละบล็อกเล่าเรื่องตามลำดับ "ดึงดูด → พิสูจน์ → ชวนผูกพัน":

```
Hero        พาดหัวใหญ่สุด + CTA หลัก + index 5 จุด (คำมั่นของแบรนด์)
Categories  § 01 · ดรอปล่าสุด — โชว์สินค้าใหม่
Marquee     แถบวิ่งคั่นจังหวะ ย้ำ key messages
Manifesto   § 02 · ปรัชญาแบรนด์ (สร้างความเชื่อ)
Collection  § 03 · ทะเบียนเต็ม — asymmetric grid
Editorial   § 04 · เบื้องหลัง atelier + quote (อารมณ์)
Bestsellers § 05 · ตัวเลือกยอดนิยม (social proof)
Newsletter  § 06 · ชวนสมัครจดหมาย (conversion ปลายทาง)
```

**กลไกลำดับชั้นในระดับองค์ประกอบ:**

- **เลขมาตรา `§` กำกับทุก section** — ผู้ใช้รู้เสมอว่าอยู่ตรงไหนของ "เอกสาร"
- **eyebrow → headline → body** — ทุกหัวบล็อกมีจุดส้ม + label เล็ก นำหัวข้อใหญ่ ตามด้วยคำอธิบายบาง
  เป็นสูตรเดียวกันทั้งหน้า ทำให้สแกนง่าย
- **บัตรสินค้าลำดับชัด** — ชื่อ (display) > วัสดุ/สี (sans บาง) > ราคา (mono) ราคาเก่าขีดฆ่า (`.strike`)
  ดึงสายตาไปที่ของก่อนเสมอ
- **CTA หลักเด่นชิ้นเดียวต่อบล็อก** — ปุ่มทึบ (paper/ink) คือ action หลัก, ปุ่มขอบโปร่งคือรอง

---

## 7. Responsive Design

ออกแบบ **mobile-first** ด้วย breakpoints มาตรฐานของ Tailwind (`sm 640 · md 768 · lg 1024 · xl 1280`):

- **Fluid typography** — headline ใช้หน่วย `vw` จึงสเกลลื่นไม่มีสะดุด ไม่ต้องตั้งขนาดทีละ breakpoint
- **Grid ยุบตัวอย่างมีเหตุผล** — `grid-cols-1 → sm:grid-cols-2 → lg:grid-cols-3`;
  asymmetric grid กลายเป็น stack เต็มความกว้างบนมือถือ (`col-span-12`)
- **เปิด/ปิดองค์ประกอบตามจอ** — เมนูกลาง, ปุ่ม search/account, social links ซ่อนบนมือถือ
  (`hidden lg:flex`) เหลือเฉพาะสิ่งจำเป็น ลด clutter
- **Spacing ปรับตามจอ** — padding และระยะ section เพิ่มขึ้นบนจอใหญ่ (`py-24 md:py-32`, `p-6 md:p-10`)
- **Carousel แตะลื่น** — Bestsellers ใช้ scroll-snap แนวนอน การ์ดกว้างตามจอ
  (`w-[78vw] sm:w-[44vw] md:w-[32vw] lg:w-[24vw]`) เลื่อนนิ้วได้บนมือถือ มีปุ่มลูกศรบน desktop

---

## 8. Attention to Detail

ดีเทลเล็ก ๆ ที่รวมกันแล้วทำให้รู้สึก "ทำมาดี":

- **Link underline** — เส้นใต้ลิงก์ค่อย ๆ ลากจากซ้ายตอน hover และหดกลับทางขวาตอนนำเมาส์ออก
  (`transform-origin` สลับด้าน) — ดีเทลที่ส่วนใหญ่มองข้าม
- **Text reveal** — พาดหัว Hero ใช้ `clip-rise` ตัวอักษรไหลขึ้นจากกรอบที่ถูก clip ทีละบรรทัด
- **Quick-add ที่ซ่อนไว้** — แถบ "+ Reserve / Add to bag" เลื่อนขึ้น + fade เข้าตอน hover การ์ด
  สะอาดตอนพัก เผยฟังก์ชันตอนสนใจ
- **ราคาขีดฆ่าเอียง** — `.strike` ขีดทับราคาเก่าด้วยเส้นเอียง `-6deg` (ดีเทลแบบงานพิมพ์ ไม่ใช่ขีดตรง)
- **Marquee คู่ความเร็ว** — `44s` กับ `80s` สำหรับแถบต่างขนาด ให้สมดุลของการเคลื่อนไหว
- **Caption legibility** — caption บนภาพใช้ `mix-blend-difference` ให้อ่านออกบนพื้นภาพทุกโทน
- **Sticky nav ที่รู้ตัว** — โปร่งใสตอนบนสุด เปลี่ยนเป็น `backdrop-blur` + เส้นคั่นเมื่อเลื่อนเกิน 40px
- **A11y** — มี `aria-label` ทุกปุ่มไอคอน, `aria-hidden` กับ element ตกแต่ง, `::selection`
  ปรับสีให้เข้าธีม, ใช้ `<article>` / `<figure>` / `<blockquote>` ตามความหมาย
- **`overflow-x: hidden` ระดับ body** — กัน element ที่ล้น (vw type, marquee) ไม่ให้เกิด scroll แนวนอน

---

## โครงสร้างโปรเจกต์

```
src/
├── App.tsx              ประกอบลำดับ section ทั้งหมด
├── index.css            design tokens (สี/ฟอนต์) + utilities (การ์ด/แอนิเมชัน)
├── lib/
│   ├── data.ts          ข้อมูลสินค้า/มาตรา/ลิงก์ (แยกออกจาก UI)
│   └── useLenis.ts       smooth scroll + ดัก anchor link
└── components/          หนึ่งไฟล์ต่อหนึ่ง section
    ├── AnnouncementBar · Nav · Hero · Categories · Marquee
    └── Manifesto · Collection · Bestsellers · Editorial · Newsletter · Footer
```

ข้อมูลทั้งหมดแยกอยู่ใน [src/lib/data.ts](src/lib/data.ts) — คอมโพเนนต์ทำหน้าที่ "นำเสนอ" อย่างเดียว
ปรับสินค้า/ข้อความได้โดยไม่ต้องแตะ markup
