# Satyanetra
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/TarunGoel93/Satyanetra)

Satyanetra is an AI-powered sentiment intelligence platform designed to analyze stakeholder feedback, particularly from the eConsultation module. It delivers comprehensive insights, automated summaries, and rich data visualizations to support informed decision-making.

The platform is built on the **VISTA** (Voice, Interpretation, Storyline, Trajectory, and Alignment) framework, providing a multi-dimensional view of public and stakeholder sentiment.

## Key Features

- **End-to-End Analysis Workflow:** A guided process from platform selection and data input to a comprehensive analysis dashboard.
- **VISTA Framework:** A multi-dimensional analysis approach:
    - **Voice:** Understand who is speaking, their influence, and from where.
    - **Interpretation:** Analyze sentiment, emotion, and topical frames.
    - **Storyline:** Discover and track narrative clusters and themes.
    - **Trajectory:** Monitor trends, forecast sentiment, and detect key events.
    - **Alignment:** Measure the alignment of public sentiment with policy goals.
- **Interactive Dashboard:** A feature-rich dashboard with multiple tabs for in-depth exploration of analytics, including overview KPIs, sentiment evolution, narrative clusters, and policy alignment scoring.
- **Configurable Data Input:** Analyze data by providing URLs, keywords, hashtags, or user handles, with advanced options for time range and analysis depth.
- **Data Export:** Easily export enriched datasets as CSV files or generate comprehensive PDF reports and dashboard snapshots.

## Technology Stack

- **Framework:** Next.js, React
- **Language:** TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **Charting:** Recharts
- **Forms:** React Hook Form
- **Routing:** Next.js App Router

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js
- pnpm (or your preferred package manager)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/tarungoel93/satyanetra.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd satyanetra
    ```

3.  **Install dependencies:**
    ```sh
    pnpm install
    ```

4.  **Run the development server:**
    ```sh
    pnpm dev
    ```

Open [SATYANETRA.in](https://satyanetra-cgde.vercel.app/) with your browser to see the result.


## Usage Workflow

The application guides users through a simple three-step process to generate and view sentiment analysis:

1.  **Platform Selection (`/platforms`):** Choose the modules and platforms you wish to analyze.
2.  **Input Configuration (`/input`):** Provide the data sources for the analysis. You can input data using:
    - URLs & Links
    - Keywords & Hashtags
    - User Handles & IDs
3.  **Analysis Dashboard (`/dashboard`):** After configuration, the analysis is processed, and the results are displayed on the comprehensive dashboard. The dashboard features dedicated tabs for each dimension of the VISTA framework.

## Dashboard Overview

The Satyanetra dashboard provides a granular view of the analyzed data through the following sections:

- **Overview:** High-level KPIs, key insights, and a sentiment/volume trend snapshot.
- **Voice:** Share of voice by platform, influencer leaderboards, and geographic distribution.
- **Interpretation:** Detailed breakdown of sentiment, emotions, keyword analysis, and detected frames.
- **Storyline:** Visualization of narrative clusters, storyline cards, and platform divergence.
- **Trajectory:** Time-series analysis, event detection, and sentiment forecasting.
- **Alignment:** Policy alignment scoring, theme-to-pillar mapping, and gap analysis.
- **Meta:** Cross-cutting insights, such as relevance vs. resonance and international benchmarking.
- **Methods:** A transparent look at the models and techniques used in the VISTA framework.
- **Export:** Configuration and download options for reports and datasets.
