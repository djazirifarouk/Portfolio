---
title: Cost and Freight Project
publishDate: 2024-08-31 00:00:00
img: /Portfolio/assets/cnf/cnf_cover.jpeg
img_alt: Data Aggregation and Dashboard
description: |
  A technical project for consolidating heterogeneous pricing and logistics datasets using Power BI and Airflow, with robust access controls and real-time currency standardization.
tags:
  - CTEs
  - Scraping
  - Power BI
  - Airflow
  - RLS
---

## Data Aggregation and Dashboard

### Project Overview 📌
This project focuses on the technical process of collecting, transforming, and securing multiple datasets related to pricing and logistics. The goal was to enable comparative analysis using consistent data formats, with automated workflows and secure data access through Power BI.

---

### Technical Objectives 🎯
- Automate the integration of heterogeneous data from multiple sources.
- Enable dynamic data transformation pipelines for comparative visualization.
- Implement secure access control to protect sensitive metrics.
---

### Key Technical Challenges 🚧
- **Data Format Inconsistencies**: Standardizing data structures from diverse inputs.
- **Currency Normalization**: Ensuring consistent conversions using daily exchange rates.
- **Security Controls**: Enforcing role-based access using Power BI Row-Level Security (RLS).
---

#### Data Pipeline & Collection 📊
- Ingested raw data from multiple structured and semi-structured sources.
- Built ETL pipelines using SQL CTEs and Python scripts for unification.
- Deployed scheduled workflows using Apache Airflow for automation.

#### Currency Normalization 💱
- Integrated exchange rate APIs for EUR/USD.
- Applied daily conversion logic within the transformation layer to standardize all monetary data.

#### Price Format Transformation ⚖️
- Converted all pricing into a normalized format to enable consistent metric comparison.
- Handled derived fields and calculated equivalents to bypass proprietary data limitations.

#### Secure Access Controls 🔒
- Configured Power BI RLS filters for scoped visibility.
- Designed permission rules for user-specific access based on data ownership.

---

### Dashboard Features 📈
The Power BI dashboard provides:
- Multi-source data aggregation.
- Origin-based and delivery-term-based comparison.
- Freight cost integration for adjusted pricing insights.

![Dashboard Example](/Portfolio/assets/cnf/cnf_example.png)
*An interactive dashboard illustrating global price variations from unified sources.*

> **Note**: Numerical data values have been abstracted in compliance with licensing constraints.

---

### Future Enhancements 🚀
- Integrate additional normalization logic for taxation or tariff modules.
- Improve segmentation logic for tailored data access.
- Enhance pipeline robustness for real-time currency updates.