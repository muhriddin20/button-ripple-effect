# Button Ripple Effect

Bu loyiha foydalanuvchi tugmani bosganda, tugma ustida **"Ripple Effect"** (to‘lqin effekti) hosil qilishni ta'minlaydi. Ushbu animatsiya tugma bosilgan joydan boshlanib, tashqariga tarqaladi va bir muddatdan so‘ng yo‘qoladi.

---

## Loyihada ishlatilgan texnologiyalar

- **HTML**:  
  - Tugmalar va sarlavhalarni joylashtirish uchun ishlatilgan.  
  - `<button>` elementi yordamida foydalanuvchi tugmani bosishi uchun interaktiv joy yaratilgan.

- **CSS**:  
  - Tugmalarga gradient fon berilgan va ularning yumaloq qirralari (`border-radius`) bilan zamonaviy ko‘rinish ta’minlangan.  
  - **`@keyframes ripple`** orqali ripple (to‘lqin) animatsiyasi uchun asosiy harakatlar belgilangan.  
  - `overflow: hidden` yordamida to‘lqin effekti tugma chegarasidan tashqariga chiqmasligi ta’minlangan.

- **JavaScript**:  
  - Foydalanuvchi tugmani bosgan joyning koordinatalarini aniqlash uchun ishlatilgan (`offsetX` va `offsetY`).  
  - Yangi `span` elementi yaratilib, tugma ichiga qo‘shiladi va to‘lqin effekti hosil qilinadi.  
  - Ripple (to‘lqin) effekti 500 ms ichida avtomatik ravishda olib tashlanadi (`remove`).
