---
title: Final Graduation Project
publishDate: 2022-10-31 00:00:00
img: /Portfolio/assets/decay_segmentation/decay_cover.png
img_alt: Final Year Graduation Project
description: |
  This project automates tooth decay detection and segmentation in panoramic X-rays using AI techniques. By employing preprocessing, data augmentation, and a Mask R-CNN model, it enhances diagnostic accuracy and promotes AI integration in dental care.
tags:
  - CRISP-DM
  - Deep Learning
  - Computer Vision
  - Mask R-CNN
---

## Decay Segmentation and Detection Using Panoramic X-Rays 🎓
[Presentation Link](https://docs.google.com/presentation/d/e/2PACX-1vR-tgk9MZQ1UwSPiyQJO9mp2HmT77qdUiAVKzI0k_ClIx6znv-Hr08B1fXRYv9sW1T5mWLexdpxE6HR/pub?start=true&loop=true&delayms=3000)
### Project Overview
This project automates the segmentation and detection of tooth decay in panoramic dental X-rays using advanced AI techniques. It was undertaken as part of my final graduation internship at **AI Diagnosis Vision (AIDV)**, a company specializing in intelligent healthcare solutions. The results were presented and approved during my graduation defense.

Tooth decay, also known as dental caries, affects a significant percentage of the global population. Early detection is essential for preventing serious oral health issues. Unlike prior projects that focused solely on decay detection, this initiative integrates decay segmentation to enhance future analysis and classification.

---

### Objectives 🎯
- Accurately segment each decayed region in panoramic X-rays.
- Detect decay areas with high precision.
- Address limitations of previous research through improved preprocessing and model training techniques.

---

### Approach and Methodology

#### 1. Exploration & Preprocessing 🧪
- **Dataset**: 237 annotated grayscale PNG images (600x600 resolution), sourced from hospitals and private institutions.
- **Challenges**: Noise, low contrast, and artifacts caused by auxiliary elements such as spinal columns and nasal cavities.
- **Enhancements**:
  - Cropped images to eliminate auxiliary elements (dimensions reduced to 188x374 pixels).
  - Applied adaptive histogram equalization and median filtering to improve contrast without compromising tooth structures.

#### 2. Data Augmentation 🔄
- Used the **Albumentations Library** to expand the dataset to 1,209 images, applying rotation, scaling, and flipping to increase diversity and model robustness.

#### 3. Segmentation & Detection 🔍
- Segmented images into regions by detecting rows with minimal pixel intensity.
- Utilized polynomial splines and Gaussian filters to identify tooth boundaries.
- Applied **findContours** to delineate decay regions precisely.

#### 4. Model Development 🤖
- **Model Architecture**: Detectron2 Mask R-CNN with:
  - **Backbone Network**: ResNet combined with a Feature Pyramid Network (FPN).
  - **Region Proposal Network (RPN)**: Generated bounding box proposals for decay regions.
  - **ROI Heads**: Classified and refined detected regions.
- **Training Process**:
  - Dataset split into 70% training, 20% validation, and 10% testing.
  - Configured hyperparameters (learning rate, batch size) for optimal results.
  - Trained using Google Colab Pro with early stopping to avoid overfitting.

#### 5. Results 🏆
- Predicted decay segmentations closely aligned with ground truth annotations.
- Improved accuracy for segmentation, though further refinement is needed for production-level deployment.

---

### Outcomes 🚀
- Developed an automated AI solution for detecting and segmenting tooth decay.
- Expanded the dataset with diverse augmentations.
- Trained and evaluated a robust model using advanced AI techniques.
- Highlighted areas for further optimization to ensure better generalization and usability.

---

### Future Directions 🔮
- Incorporate higher-quality radiographs to enhance input data.
- Further expand the dataset for improved model generalization.
- Apply region-specific preprocessing to minimize artifacts from non-relevant areas.
- Upgrade model architecture to improve segmentation performance.
- Integrate AI-based predictions into clinical workflows for early decay diagnosis and treatment planning.

---

### Visual Examples 📸
#### **1. Preprocessed Images**
![Preprocessed X-Ray](/Portfolio/assets/decay_segmentation/Processing_results.png)
- Comparison of raw and preprocessed images highlighting enhanced contrast and cropped dimensions.

#### **2. Decay Segmentation Results**
![Segmentation Results](/Portfolio/assets/decay_segmentation/Segmentation_results.png)
- Visual comparison of ground truth and predicted segmentations, showcasing model precision.

#### **3. Training Metrics**
![Training Metrics](/Portfolio/assets/decay_segmentation/Training.png)
- Loss curves and evaluation metrics demonstrating model performance during training and validation.
![Training Metrics](/Portfolio/assets/decay_segmentation/Training_results.png)

---

### Summary ✨
This project demonstrates my expertise in leveraging cutting-edge AI technologies to solve real-world challenges. It highlights my ability to tackle complex problems in healthcare using innovative approaches, setting the stage for future advancements in AI-driven dental diagnostics.
