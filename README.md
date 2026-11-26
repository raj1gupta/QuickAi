# Quick.ai

A full-stack AI-powered SaaS platform bringing together AI content generation, image editing, resume analysis, and a community showcase in a single workspace.

## Features

- **AI Article Writer** – Generate structured, full-length articles by topic and word count
- **Blog Title Generator** – Generate SEO-friendly blog title ideas across categories
- **AI Image Generation** – Create images from text prompts with selectable visual styles
- **Background Removal** – Remove image backgrounds cleanly using Cloudinary AI
- **Object Removal** – Erase unwanted objects from uploaded images
- **Resume Review** – Upload a PDF resume for AI-powered feedback and improvement tips
- **Community Feed** – Explore and like publicly shared AI-generated images
- **Authentication & Plans** – Powered by Clerk with Free and Premium tier gating

## Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS v4, React Router v7, Clerk React, Axios, Lucide React, React Markdown, React Hot Toast
- **Backend:** Node.js, Express 5, Clerk Express, Neon Serverless Postgres, OpenAI SDK, Cloudinary, Multer, pdf-parse

## Getting Started

### 1. Backend (`/server`)

```bash
cd server
npm install
cp .env.example .env
npm run server
```

### 2. Frontend (`/client`)

```bash
cd client
npm install
cp .env.example .env
npm run dev
```
