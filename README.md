# Next.js 15 + Payload CMS 3.0 + Tailwind CSS 4.0 Practice Project

This repository is a practice project to explore **Next.js 15**, **Payload CMS 3.0**, and **Tailwind CSS 4.0**. It
demonstrates how to integrate a headless CMS (Payload) with Next.js for SSR/SSG, and style everything using Tailwind’s
utility-first approach.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Environment Variables](#environment-variables)
    - [Development Server](#development-server)
- [License](#license)

---

## Overview

This project showcases how to:

- Set up a Next.js application (version 15) for both server-side rendering and static site generation.
- Integrate Payload CMS (version 3.0) as a headless CMS to create, update, and manage content.
- Leverage Tailwind CSS (version 4.0) for a utility-first approach to styling and layout.
- Provide a seamless developer experience by combining a modern front-end framework, a flexible CMS, and a powerful CSS
  framework.

---

## Features

1. **Modern Front-End**
    - Next.js 15: Enjoy the latest features, performance optimizations, and built-in routing.

2. **Headless CMS**
    - Payload CMS 3.0: Store and retrieve content using an API-based CMS with robust access control and custom fields.

3. **Utility-First CSS**
    - Tailwind CSS 4.0: Quickly build custom designs without leaving your HTML by using utility classes.

4. **SEO & Performance**
    - Server-side rendering (SSR) and static site generation (SSG) out of the box with Next.js.

5. **Scalable Architecture**
    - A clean folder structure, making it easy to extend or refactor as your project grows.

---

## Tech Stack

- **Next.js**: [https://nextjs.org/](https://nextjs.org/)
- **Payload CMS**: [https://payloadcms.com/](https://payloadcms.com/)
- **Tailwind CSS**: [https://tailwindcss.com/](https://tailwindcss.com/)
- **Node.js**: [https://nodejs.org/](https://nodejs.org/)
- **pnpm**: For dependency management

---

## Getting Started

### Prerequisites

- **PostgresSQL**
- **Node.js** (v20.9.0 or above)
- **pnpm**
- **Git** (to clone the repository)
- An environment to host or run the CMS (local or remote database, depending on how you plan to store data)

### Installation

1. **Clone the Repository**
    ```shell
    git clone https://github.com/kerron-hutton/payload-cms-with-blog.git
    cd payload-cms-with-blog
    ```
2. **Install Dependencies**
    ```shell
    pnpm install
    ```
   
### Environment Variables
Create a .env.local file in the root of the project. Below is an example of what your file might include:
```dotenv
DATABASE_URI=YOUR_POSTGRES_CONNECTION_STRING
PAYLOAD_SECRET=YOUR_SECRET_HERE
```

### Development Server
```shell
pnpm run dev
```
Open http://localhost:3000 to view your Next.js site.

## License

This project is licensed under the MIT License. Feel free to use and adapt it for your own projects.
