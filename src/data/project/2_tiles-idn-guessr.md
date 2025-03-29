---
title: "TILES IDN GUESSR"
cover: "./assets/no-img.png"
coverAlt: "Thrid service api for providing tile service of vector spatial data"
slug: "tiles-idn-guessr"
created: "December, 2024"
createdDate: "12-25-2024"
tags: ['Personal Project', 'GIS', 'Ongoing', 'Third Service']
techs: ['PostgreSQL', 'Docker', 'Martin', 'Rust', 'Cron Job', 'PostGIS']
---

<div class="text-2xl font-semibold mb-2">Description</div>

**TILES IDN GUESSR** is a third-party service API dedicated to providing tile services for vector spatial data. This project serves as a crucial component for **IDN GUESSR**, enabling efficient rendering and **distribution of geospatial information**. This ongoing project is designed to seamlessly integrate with **IDN GUESSR**, ensuring smooth geospatial data visualization and accessibility.

Utilizing **Martin**, a Rust-based tile server powered by **PostGIS**, this service ensures high-performance vector tile generation. The infrastructure is containerized with **Docker**, and scheduled maintenance tasks are handled via **Cron Jobs** to maintain data accuracy and optimize performance. The application is deployed in **Docker** using a **VPS** and is accessible at <span class="underline underline-offset-1 font-semibold">[https://tiles.idn-guessr.com/catalog](https://tiles.idn-guessr.com/catalog)</span>.

<br/>
<div class="text-2xl font-semibold mb-2">Key Features: </div>

<div>
1) Vector Tile Service – Provides efficient tile generation using Martin and PostGIS for optimized geospatial data visualization. <br/>
2) High-Performance Rendering – Ensures fast and scalable tile delivery with caching mechanisms for enhanced performance. <br/>
3) Multiple Spatial Data Layers – Supports serving different geospatial datasets with flexible configuration options. <br/>
4) Automated Data Updates – Uses Cron Jobs to schedule updates and maintain data accuracy. <br/>
5) Seamless IDN GUESSR Integration – Designed to work effortlessly with IDN GUESSR, ensuring smooth interoperability. <br/>
</div>


