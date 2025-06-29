Data Alchemist - AI-Powered Resource Allocation Configurator
Data Alchemist is a smart, AI-powered CSV/XLSX data processing tool built to streamline resource allocation through intelligent validation, rule generation, and natural language search. Designed to handle complex datasets involving clients, workers, and tasks, this tool empowers users to transform unstructured spreadsheets into clean, validated, and well-prioritized data.

"Transform messy spreadsheets into structured insights with AI-powered validation and intelligent rule creation."

📌 Key Features
⚙️ AI-Powered Data Processing
Smart column mapping and automatic type detection

12+ validation checks for data quality

AI-driven data correction with actionable suggestions

Natural language queries for intuitive data access

🧠 Business Rules Engine
Six distinct rule types (co-run, slot restrictions, load limit, phase window, pattern match, precedence)

AI-assisted rule generation from natural language

Visual interface for rule management

🧪 Advanced Validation System
Validation for required fields, malformed data, ID duplication, JSON structures, cross-entity references, and more

Skill coverage and capacity balancing for worker-task mapping

Pattern recognition to detect anomalies and trends

🎯 Prioritization and Export
Configure client/task priorities with adjustable weights

Preset profile templates for quick configuration

Export clean datasets and structured business rule configurations

✅ Assignment Milestones
Milestone 1 - Completed
Data upload system for clients, workers, and tasks (CSV/XLSX)

AI-assisted parsing with smart column mapping

Real-time validation with instant feedback

AI-powered natural language search

Milestone 2 - Completed
Comprehensive rule builder with six rule types

Rule generation using natural language prompts

Dynamic priority configuration system

Export functionality for clean data and rule sets

Milestone 3 - Completed (Stretch Goals)
AI-based error detection and correction

Pattern-based rule recommendations

Advanced validation with AI-driven suggestions

🚀 Getting Started
Prerequisites
Node.js 18+

npm or yarn

Installation
bash
Copy
Edit
git clone [your-repository-url]
cd data-alchemist
npm install
npm run dev
Navigate to http://localhost:3000 to use the application.

💡 Usage Guide
Upload Data via the "Data Upload" tab (clients, workers, tasks)

View/Edit Data in the interactive "Data Grid"

Create Rules in the "Rules" tab (manually or via AI)

Set Priorities using the slider-based configuration

Export clean data and configuration packages

📁 Sample Data
Located in the /samples/ directory:

clients.csv: Client data including priority settings

workers.csv: Worker profiles with skillsets

tasks.csv: Task definitions and requirements

🛠 Tech Stack
Frontend: Next.js 14, TypeScript, Tailwind CSS

Components: shadcn/ui library

State Management: React Context + useReducer

Data Parsing: Custom CSV/XLSX processors

AI Features: Simulated NLP-based workflows for suggestions and automation

🧪 Testing Guide
Full Workflow Test
Upload data → Validate → Edit → Search → Create Rules → Set Priorities → Export

AI Features Test
Run AI correction on data issues

Perform natural language searches like "List high priority clients"

Auto-generate rules from plain English statements

Observe contextual error messages and suggested fixes
