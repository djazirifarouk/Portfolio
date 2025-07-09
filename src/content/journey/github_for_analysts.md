---
title: Github For Data Analysts
publishDate: 2025-07-08 00:00:00
img: /Portfolio/assets/Farouk%20Jaziri%20Presenting%20Wide.jpg
img_alt: Github Presentation
description: |
  A GitHub-based workflow tailored for data analysts, inspired by GitFlow principles. This approach introduces structured branching, optimized folder setups, sparse checkout for efficient storage, and a shared config environment to streamline collaboration, onboarding, and handover, all supported by clear, step-by-step documentation.
tags:
  - Github
  - Project Management
  - Optimization
---

## Docker, Power BI and Python for Analysts

### 📅 Introduction

Recently, I had the opportunity to conduct a training session focused on equipping data analysts with the right tools and strategies to use GitHub more effectively in collaborative projects. In this session, I introduced a tailored workflow, inspired by **GitFlow principles**, that enhances project organization, storage optimization, and onboarding.

---

### 🧠 Why GitHub for Data Analysts?

While GitHub is widely adopted by developers, data analysts can also leverage it for:
- **Version control** of SQL scripts, Python notebooks, even Power BI dashboards.
- **Collaboration** across multi-functional teams.
- **Tracking changes** in data pipeline logic or dashboard definitions.
- **Documentation and reproducibility** of analyses.

---

### 🔄 A GitFlow-Inspired Workflow for Data Projects

Inspired by GitFlow, I introduced an **adjustable and structured Git workflow** suited for data teams:

#### ✅ Key Concepts Introduced:
- **Main Branches**:
  - `main`: Shared-ready work.
- **Task branches** per project:  
  - `task/type_source_category`
  - `bug/type_source_category`
- **Team project folder setup**:
  - Each team or subgroup gets a dedicated folder inside the repo, e.g.,:
    ```
    /team_project/
      ├── data/
      ├── scripts/
      ├── dashboards/
      ├── quality/
      └── documentation/
    ```
![Farouk Presenting](/Portfolio/assets/Farouk%20Jaziri%20Presenting%20Closeup.webp)  

#### 🎯 Advantages:
- Easier **parallel development** without conflicts.
- Clean and **modular organization**.
- Facilitates **code reviews** and traceability.
- Smooth **handover and onboarding**.

---

### 💡 Storage Optimization with Sparse Checkout

One key highlight of the session was demonstrating the use of **Git Sparse Checkout**.  
This allows each analyst to clone **only the folders they need**, saving local disk space and improving load time.

#### How It Helps:
- Avoids unnecessary bloat from unrelated teams' files.
- Improves performance for large repositories.
- Simplifies focus by isolating relevant project areas.

---

### ⚙️ `config/` Folder for Environment Setup

To streamline collaboration and minimize environment mismatch issues, I introduced a **`config/` folder**, which contains:

- `Dockerfile` and `docker-compose` files for image definition and container built.
- `requirements.txt` file for Python libraries.

This makes it much easier to:
- Onboard **new team members**.
- Maintain consistent development environments.
- Simplify **handover between analysts**.

---

### 📘 Structured Documentation

Finally, I added a comprehensive **step-by-step documentation** within the repo:

- 🚧 How to set up the repo and install dependencies.
- 🌿 How to create branches, name them and push changes.
- 🧪 How to test and review changes.
- 🧵 How to contribute and request code reviews.
- 👥 Best practices for collaboration.

This ensures:
- Clarity for every contributor.
- A reduced learning curve.
- Improved team autonomy.  

![Farouk Presenting](/Portfolio/assets/Farouk%20Jaziri%20Presenting.webp)  

---

### 🙌 Final Thoughts

By adopting a structured GitHub workflow tailored to data analysts, we empower teams to work **faster**, **cleaner**, and **together**. This system not only improves productivity but also builds the foundation for **scalable and sustainable collaboration**.

If you're a data analyst or team lead looking to level up your workflow, consider integrating this workflow. The benefits are immediate and long-term.

---
