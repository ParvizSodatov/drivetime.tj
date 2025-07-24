📝 Техническое Задание (ТЗ) для проекта drivetime.tj
📌 Название проекта:
drivetime.tj — онлайн платформа автосалона для покупки, просмотра и сравнения автомобилей.

🎯 Цель проекта:
Создать удобный веб-сайт, где пользователи могут:

просматривать каталог автомобилей,

фильтровать машины по параметрам,

смотреть подробную информацию о каждом авто,

оставлять заявки на покупку или связываться с автосалоном.

🧱 Технологии:
Next.js + TypeScript

TailwindCSS или MUI (по выбору)

Zustand или Redux для управления состоянием

Axios для API-запросов

JSON Server для имитации backend на этапе разработки

GitHub для совместной работы

📁 Структура проекта:
css
Копировать
Редактировать
app/
├─ layout.tsx
├─ page.tsx
├─ cars/
│  └─ page.tsx
├─ car/[id]/
│  └─ page.tsx
├─ contact/
│  └─ page.tsx
components/
├─ CarCard.tsx
├─ Navbar.tsx
├─ Footer.tsx
store/
├─ useCarStore.ts
services/
├─ api.ts
public/
├─ images/
