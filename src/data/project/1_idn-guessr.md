---
title: "IDN GUESSR"
cover: "./assets/idn-guessr.png"
coverAlt: "Fullstack app for survey spatial data management"
slug: "idn-guessr"
created: "December, 2024"
createdDate: "12-20-2024"
tags: ['Personal Project', 'GIS', 'Ongoing', 'Fullstack']
techs: ['Django', 'HTMX', 'PostgreSQL', 'Docker', 'Redis', 'Python', 'Alpin.js', 'PostGIS']
---

<div class="text-2xl font-semibold mb-2">Description</div>

**IDN GUESSR** is a full-stack application designed for managing spatial databases and survey data. It provides a comprehensive solution for handling master data while integrating seamlessly with external services. In this case, the project connects with **Martin**, a high-performance tile server built with **Rust** and powered by **PostGIS**, ensuring efficient geospatial data visualization and processing. This ongoing project aims to streamline spatial data management, making it more accessible and efficient for various GIS-related workflows.

Built using **Django**, **HTMX**, and **PostgreSQL**, the system leverages modern web technologies to deliver a responsive and scalable experience. **Docker** is used for containerization, ensuring smooth deployment and portability, while **Alpine.js** enhances frontend interactivity. The application is deployed in **Docker** using a **VPS** and is accessible at <span class="underline underline-offset-1 font-semibold">[https://idn-guessr.com/](https://idn-guessr.com/)</span>.

<br/>
<div class="text-2xl font-semibold mb-2">Key Features: </div>

<div>
1) Upload and Record Shapefiles – Supports polygon, polyline (including tracking), and point data with survey records. <br/>
2) Master Data Administration – Enables structured management of spatial and survey data.<br/>
3) Project Integration – Combines all uploaded or recorded data for comprehensive analysis and visualization.<br/>
</div>


<!-- ```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

<div class="p-4 bg-code">

```js
const baseClasses =
  'rounded-md font-medium transition-all duration-200 ease-in-out';
const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};
const variantClasses: Record<string, string> = {
  primary: 'bg-primary text-secondary-content',
  secondary: 'bg-secondary text-primary-content',
  danger: 'bg-red-500 text-white',
  outline: 'border border-gray-500 text-gray-500',
};
```
</div>

<div class="p-4 bg-code">

```py
techStack = ['Django', 'HTMX', 'PostgreSQL', 'Docker', 'Python', 'Alpin.js']
```
</div> -->
