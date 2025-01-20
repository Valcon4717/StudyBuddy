# Smart Grades

**Smart Grades** is a data-driven project designed to analyze the factors that contribute most to a student achieving an A in their academic performance. By examining variables such as hours studied, attendance, and access to resources, this project emphasizes the importance of habits beyond traditional studying.

## 📄 About the Project

Smart Grades uses various machine learning models to uncover relationships between student habits and academic success. The project supports **data-driven decision-making** by providing actionable insights into which behaviors are most impactful.

### Key Features

- **Data Analysis:** Explore the influence of various factors like study habits, attendance, and tutoring.
- **Machine Learning Models:**
  - **Linear Regression:** Primary model for predicting grades with interpretability and simplicity.
  - **Lasso Regression:** Enhances accuracy by reducing overfitting and selecting the most important features.
  - **Ridge Regression:** Effectively handles multicollinearity while retaining all features.
  - **Random Forest:** A non-linear model used for deeper insights into feature importance.
- **Actionable Insights:** Highlights which habits and resources contribute most significantly to student success.

## 👥 Authors

- **Valeria Contreras** (Development)
- **Gabriel Isaac Alonso** (Development)
- **Cristina Alarcon** (Presentation)

## 🚀 Getting Started

To explore and run the project, use the provided **Google Colab Notebook**:

- [Smart Grades Google Colab Notebook](https://colab.research.google.com/drive/1cvzzBiDxWgP2KxdkiRwtrCgo3BJ3zX4s?usp=sharing)

## 🛠️ How It Works

### Dataset Details

- **Size:** 6,607 rows × 20 columns
- **Target Variable:** Continuous real value (Final Grade)

The dataset analyzes various factors such as:
- **Hours Studied**
- **Attendance**
- **Access to Resources**
- **Tutoring Sessions**
- **Previous Scores**

### Models Used and Improvements

1. **Linear Regression**
   - Metrics: MSE = 5.50, MAE = 1.19, R² = 0.63
   - Simplicity and interpretability make it a strong choice for small datasets.
   - Scatter plot analysis shows features like **Hours Studied** and **Attendance** have the strongest positive impacts.

2. **Lasso Regression (L1 Regularization)**
   - Improves accuracy by shrinking coefficients of less important features to zero.
   - Effective for feature selection.
   - Metrics: MSE = 5.56, MAE = 1.20, R² = 0.63

3. **Ridge Regression (L2 Regularization)**
   - Applies penalties to shrink coefficients without removing features.
   - Handles multicollinearity and reduces overfitting.
   - Metrics: MSE = 5.50, MAE = 1.19, R² = 0.63

4. **Random Forest**
   - Ensemble method providing insights into feature importance through data splits.
   - Metrics: MSE = 6.83, R² = 0.55

5. **Neural Networks**
   - Not ideal for this problem due to overfitting and the dataset size.
   - Metrics: MSE = 6.75, MAE = 1.48, R² = 0.55

### Insights

- **Attendance** and **Hours Studied** significantly impact grades positively.
- **Previous Scores** showcase academic momentum.
- **Access to Resources** negatively impacts grades when over-relied upon.
- **Tutoring Sessions** offer consistent, albeit smaller, benefits.

## 🌟 Highlights

- Encourages educators and students to adopt a broader approach to academic success.
- Demonstrates the power of multiple machine learning models for small datasets.
- Provides practical recommendations for improving study habits and strategies.

---

This project highlights the importance of looking beyond traditional study habits and adopting data-driven strategies for academic improvement. The collaborative efforts of the team reflect their dedication to innovative problem-solving and impact.
