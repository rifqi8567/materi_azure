<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/150px-Microsoft_Azure.svg.png" alt="Azure Logo" width="80"/>
</p>

<h1 align="center">Azure AI Solutions — Comprehensive Study Guide</h1>

<p align="center">
  <strong>An interactive web-based presentation covering the full lifecycle of AI development on Microsoft Azure</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Microsoft%20Azure-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white" alt="Azure"/>
  <img src="https://img.shields.io/badge/AI-Azure%20AI%20Foundry-3ccbf4?style=for-the-badge&logo=microsoftazure&logoColor=white" alt="AI Foundry"/>
  <img src="https://img.shields.io/badge/Type-Interactive%20Presentation-7856ff?style=for-the-badge" alt="Presentation"/>
  <img src="https://img.shields.io/badge/Status-Complete-27ae60?style=for-the-badge" alt="Complete"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="MIT License"/>
</p>

---

## 📋 Overview

This project is an **interactive web-based presentation** (WebPPT) that provides a comprehensive summary of Azure AI development — from architectural design decisions and model deployment strategies, through SDK integration and RAG implementation, to fine-tuning, responsible AI governance, and performance evaluation.

Built with a premium dark-themed UI featuring glassmorphism design, smooth animations, and full keyboard/touch navigation — designed for both learning and professional presentation use.

> **8 Modules** · **50+ Key Concepts** · **Zero Dependencies** · **Works Offline**

---

## 🎯 Modules Covered

| #      | Module                                    | Key Topics                                                                                                                        |
| ------ | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **01** | **Merancang & Mempersiapkan AI Solution** | Azure AI Services ecosystem, region availability, cost planning, 6 Responsible AI principles                                      |
| **02** | **Memilih & Deploy Language Model**       | Model Catalog (11,000+ models), GPT-4o/Phi-3/Llama, 5 deployment types, Transformer architecture, prompt engineering patterns     |
| **03** | **Azure AI Foundry SDK**                  | `AIProjectClient`, connections management, chat client integration, agent management, dataset & search index operations           |
| **04** | **Prompt Flow**                           | LLM development lifecycle, DAG/Standard/Chat/Evaluation flows, built-in tools, prompt variants, conditional control               |
| **05** | **Aplikasi RAG**                          | Retrieval Augmented Generation, Azure AI Search, hybrid search + RRF, chunking strategies, embedding models, Agentic Retrieval    |
| **06** | **Fine-tuning Model**                     | RAG vs Fine-tuning comparison, JSONL data preparation, LoRA/SFT/RFT techniques, hyperparameter tuning, evaluation pipeline        |
| **07** | **Responsible Generative AI**             | 4M Framework (Map/Measure/Mitigate/Manage), Prompt Shields, Groundedness Detection, content filters, 4-layer mitigation           |
| **08** | **Evaluasi Performa**                     | AI-assisted metrics, NLP metrics (BLEU/ROUGE/METEOR), safety evaluation, manual vs automated evaluation, Model Safety Leaderboard |

---

## 🚀 Quick Start

### Option 1: Direct Open

Simply double-click `index.html` in your browser — no server or build step required.

### Option 2: Live Server (VS Code)

```bash
# Install Live Server extension, then right-click index.html → "Open with Live Server"
```

### Option 3: Static Server

```bash
npx serve . -l 3000
# Open http://localhost:3000
```

---

## ⌨️ Navigation

| Action              | Control                          |
| ------------------- | -------------------------------- |
| Next Slide          | `→` / `Space` / Click `>` button |
| Previous Slide      | `←` / Click `<` button           |
| Jump to Module      | Click sidebar navigation         |
| Mobile              | Swipe left/right                 |
| Close Menu (Mobile) | `Esc` / Tap outside              |

---

## 🏗️ Project Structure

```
Azure/
├── index.html          # Main presentation (9 slides, Azure SVG favicon)
├── style.css           # Design system (dark theme, glassmorphism, responsive)
├── script.js           # Navigation engine (keyboard, touch, animations)
└── README.md           # Documentation
```

---

## ✨ Design Features

- **🌙 Premium Dark Theme** — Carefully crafted color palette with Azure-branded gradients
- **🪟 Glassmorphism Cards** — Frosted glass effect with backdrop blur
- **🎨 Azure Branding** — Official Azure SVG logo as favicon and decorative elements
- **🎬 Smooth Animations** — Particle effects, slide transitions, hover micro-interactions
- **📱 Fully Responsive** — Desktop sidebar, mobile hamburger menu, touch-friendly
- **⚡ Zero Dependencies** — Pure HTML/CSS/JS, works offline, instant load
- **♿ Accessible** — Keyboard navigable, semantic HTML, proper ARIA labels

---

## 📚 References & Sources

- [Microsoft Azure AI Services Documentation](https://learn.microsoft.com/en-us/azure/ai-services/)
- [Azure AI Foundry Documentation](https://learn.microsoft.com/en-us/azure/ai-studio/)
- [Azure OpenAI Service](https://learn.microsoft.com/en-us/azure/ai-services/openai/)
- [Azure AI Search — RAG Patterns](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview)
- [Responsible AI Principles — Microsoft](https://www.microsoft.com/en-us/ai/responsible-ai)
- [Azure AI Foundry SDK (Python)](https://learn.microsoft.com/en-us/python/api/overview/azure/ai-projects-readme)
- [Prompt Flow Documentation](https://learn.microsoft.com/en-us/azure/ai-studio/how-to/prompt-flow)
- Vaswani, A., et al. (2017). _"Attention Is All You Need"_ — [arXiv:1706.03762](https://arxiv.org/abs/1706.03762)

---

## 🛠️ Tech Stack

| Technology            | Purpose                                                                   |
| --------------------- | ------------------------------------------------------------------------- |
| **HTML5**             | Semantic structure, SEO-optimized markup                                  |
| **CSS3**              | Custom properties, glassmorphism, grid/flexbox layouts, responsive design |
| **JavaScript (ES6+)** | Slide engine, keyboard/touch navigation, IntersectionObserver animations  |
| **Google Fonts**      | Inter typeface for modern, clean typography                               |
| **SVG**               | Azure logo rendered as inline SVG for crisp scaling                       |

---

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

<p align="center">
  <sub>Built with ☁️ and passion for cloud AI — Powered by <strong>Microsoft Azure</strong></sub>
</p>
