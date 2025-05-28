---
title: Tax Impact Analysis in North Africa
publishDate: 2024-06-15 00:00:00
img: /Portfolio/assets/taxes/taxes_cover.avif
img_alt: North Africa Tax Analysis Project
description: |
  Analyzed multi-country taxation data in North Africa to calculate post-customs import prices and compare them with local prices. Built data pipelines, scenarios, and price models to uncover cost disparities.
tags:
  - Data Analysis
  - Reporting
  - SQL
  - BeautifulSoup
---

## North Africa Taxation Analysis

### Project Scope 📌
Collected and analyzed **import tax structures** for North African countries to quantify their impact on **Cost and Freight (CNF)** values and evaluate **price competitiveness** between imported and local products.

---

### Data Collection & Parsing 🌐
- Targeted countries: **Tunisia, Egypt, Morocco, Algeria**.
- Scraped and parsed publicly available tax data by **product category** and **country of origin**.
- Utilized `BeautifulSoup` to extract structured tables from HTML sources and convert them into usable datasets.

---

### Analytical Framework 💡
- **Taxation logic** modeled by product type and country.
- Built **price calculation formulas** to estimate total cost after customs clearance.
- Designed **comparative scenarios** to simulate pricing differences across sources and destinations.

---

### SQL & Reporting Integration 🧮
- Normalized data and built **SQL queries** for region-wise and product-wise aggregation.
- Created views to support **side-by-side price comparisons** between imported and local products.
- Enabled **scenario-based filtering** to evaluate taxation sensitivity.

---

### Challenges & Mitigations ⚠️
- **No historical data** availability: Only current-year tax rates were accessible.
  - Contacted government sources without success.
  - Continued analysis using static taxation snapshots.

---

### Tools & Techniques 🛠️
- **Python (BeautifulSoup)**: Tax data extraction from web sources.
- **SQL**: Data transformation and comparative aggregation.
- **Data Modeling**: Tax logic and pricing scenarios.
- **Cross-country Harmonization**: Unified taxonomy for North African regulations.

---

### Results 🎯
Delivered an integrated dataset and analysis model comparing **post-tax import prices** with **local prices** across North Africa. This project revealed key differences in **taxation impact by country and origin**, equipping stakeholders with data to inform procurement, pricing, and sourcing decisions.
