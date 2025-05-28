---
title: U.S. Agricultural Supply & Demand Analysis
publishDate: 2023-10-01 00:00:00
img: /Portfolio/assets/snd_usa/snd_usa_cover.webp
img_alt: Supply and Demand Outlook Technical Project
description: |
  A multi-source, data-intensive project integrating historical and forecasted agricultural data from U.S. publications. Built an automated pipeline and Power BI dashboard for statistical analysis, trend tracking, and inter-source comparison.
tags:
  - Mapping
  - Trend Analysis
  - Advanced DAX
---

## U.S. Agricultural Supply & Demand Analysis

### Project Scope 📌
Developed an end-to-end analytical solution for comparing **historical and forecasted supply-demand metrics** for U.S. agricultural products. This includes time-series extraction, source mapping, correlation studies, and Power BI integration.

---

### Data Extraction & Standardization 📥
- **Automated scraping** from structured and unstructured PDF reports.
- Parsed textual data into structured formats using Python.
- Managed temporal variations in published formats across years and sources.
- Consolidated data into a master DataFrame for longitudinal analysis.

---

### Mapping and Harmonization 🔗
- Built a **mapping schema** to align naming conventions and units across three major sources.
- Merged datasets into a consistent model using item-wise and source-wise harmonization logic.
- Created data dictionaries for historical and forecasted item alignment.

---

### Analytical Processing & Correlation Analysis 📉
- Compared:
  - Forecasted vs. actual data from the same source.
  - Forecasts from multiple sources published in the same and different years.
- Applied statistical modeling:
  - Generated **scatter plots** and **R² scores** to quantify prediction accuracy.
  - Explored relationships between items like yield, exports, and carry-out stocks.

---

### Power BI Dashboard Engineering 📊
- Designed an interactive dashboard to:
  - Filter by source, item, year, and data type (forecast/historical).
  - Visualize correlations and deviations between multiple forecasts.
  - Enable historical trend analysis using custom DAX logic.
- Integrated R² logic and slicers for comparative insight generation.

![Example SND 1](/Portfolio/assets/snd_usa/1_Scatter_Plot_PowerBI.png)
*Scatter plot of item correlation across publishing years.*

![Example SND 2](/Portfolio/assets/snd_usa/2_PowerBI.png)
*Year-over-year forecast comparisons within the same source.*

---

### Technical Challenges ⚡
- **Multi-format scraping**: Extracting structured information from evolving PDF formats.
- **Cross-source inconsistency**: Handling overlapping item names with different definitions.
- **Forecast tracking**: Matching forecasted values over years with observed outcomes for validation.

---

### Stack and Techniques 🛠️
- **Python**: PDF scraping, data structuring, and merging workflows.
- **Pandas & NumPy**: Data preprocessing and manipulation.
- **Power BI & DAX**: Dashboard logic, custom metrics (e.g., R²), dynamic filtering.
- **Statistical Methods**: Correlation coefficients, scatter plot regression.

---

### Deliverables 🎯
- Engineered a unified dataset combining multiple sources over several years.
- Created a fully interactive Power BI dashboard enabling:
  - Historical vs. forecasted data analysis.
  - Inter-source and intra-source forecast evaluation.
  - Trend and anomaly detection through visual analytics.

> ⚠️ All visual outputs are shown without data values to respect content usage constraints.
