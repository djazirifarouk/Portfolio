---
title: Cost and Freight Project (C&F)
publishDate: 2024-08-31 00:00:00
img: /Portfolio/assets/cnf/cnf_cover.jpeg
img_alt: C&F Data Preparation and Dashboard
description: |
  This project consolidates pricing and freight data to enable global price comparisons across origins and incoterms, addressing currency conversion, standardization, and security challenges through Power BI.
tags:
  - CTEs
  - Scraping
  - Power BI
  - Airflow
  - RLS
#   - Data understanding
---

## C&F Data Preparation and Dashboard

### Project Overview 📌
This project involved collecting and consolidating futures data, client price data, and freight data into a unified format for effective price comparison across different origin locations. The primary goal was to provide insights into global product pricing from Free On Board (FOB) to Cost and Freight (CNF) while addressing multiple challenges related to data consistency, currency conversion, and access control.

---
### Project Objectives 🎯
- Provide actionable insights on global product pricing across multiple origins and incoterms.
- Enable clients to compare prices from FOB to CNF seamlessly.
- Maintain compliance with legal and copyright constraints while delivering a reliable data-driven solution.
---
### Challenges Faced 🚧
- **Data Consistency**: Consolidating diverse datasets into a single, analyzable format.
- **Currency Discrepancies**: Maintaining real-time accuracy in currency conversion.
- **Compliance with Copyright**: Avoiding direct usage of futures prices while deriving basis equivalents.
- **Security Implementation**: Ensuring robust RLS to control access at a granular level.
---

#### Data Collection 📊
- Gathered diverse data from multiple sources, including:
  - Futures market data.
  - Client-provided price lists.
  - Freight cost data for various routes and origins.
- Unified this data into a common structure for effective comparison and analysis.

#### Currency Conversion 💱
- Addressed discrepancies in currency usage by:
  - Collecting daily euro-to-dollar exchange rates.
  - Accurately converting euro-denominated prices to dollars to maintain uniformity.

#### Price Standardization ⚖️
- Tackled the challenge of inconsistent price formats:
  - Transformed flat prices (inclusive of futures values) into basis prices for compliance.
  - Ensured standardization to allow for valid comparisons while respecting copyrights on futures data.

#### Access Control 🔒
- Implemented advanced security measures:
  - Designed Row-Level Security (RLS) in Power BI.
  - Restricted access to flat prices, ensuring only authorized clients could view sensitive data.

### Dashboard Insights 📈
The Power BI dashboard visualizes consolidated price data and trends, highlighting:
- Comparative pricing from different origins.
- Variations between incoterms such as FOB and CNF.
- Freight cost impacts on total pricing.

![Example 1: CNF Dashboard](/Portfolio/assets/cnf/cnf_example.png)
*An interactive dashboard where clients can check the global agriculture prices from different origins*

**⚠️ Note**: Due to copyright restrictions, specific numerical values cannot be shared in the visualizations.

---

### Future Work 🚀
- Extend the dashboard to incorporate destination-specific taxes.
- Enhance client segmentation to offer tailored views and insights.
- Automate updates for currency conversion rates to further streamline data preparation.
