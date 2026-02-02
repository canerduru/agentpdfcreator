# RealShow AI Lite

A streamlined, single-file real estate presentation generator built with React and Tailwind CSS.

![RealShow AI Lite Preview](https://placehold.co/800x400/e2e8f0/1e293b?text=RealShow+AI+Lite)

## Features

*   **Single File Portability**: Entire application runs from a single `index.html` file. No build step required.
*   **Real-time Preview**: Instantly see changes as you type property details.
*   **Multiple Templates**:
    *   **Modernist**: Bold typography, clean lines.
    *   **Luxury**: Elegant dark theme with gold accents and serif fonts.
    *   **Minimalist**: Clean whitespace and grid-based layouts.
*   **Image Management**: Drag-and-drop support for up to 5 property photos.
*   **PDF Export**: Generate high-quality PDFs of your presentation client-side.

## Tech Stack

*   **React 18** (via CDN)
*   **Tailwind CSS** (via CDN)
*   **Lucide React** (Icons)
*   **html2canvas & jsPDF** (PDF Generation)
*   **Google Fonts** (Inter & Playfair Display)

## How to Use

1.  Open `index.html` in any modern web browser.
2.  Use the sidebar to enter property details (Title, Price, Address, Specs, Features).
3.  Upload photos by dragging them onto the drop zone or clicking to select.
4.  Switch between templates using the buttons in the sidebar.
5.  Click **Export PDF** to save your presentation.

## Deployment / Upload to GitHub

Since this is a single-file application, you can easily host it on **GitHub Pages**.

### 1. Initialize Git (if not already done)
Open your terminal in the project folder:
```bash
git init
git add index.html README.md
git commit -m "Initial commit of RealShow AI Lite"
```

### 2. Create a Repository on GitHub
1.  Go to [github.com/new](https://github.com/new).
2.  Name your repository (e.g., `realshow-ai-lite`).
3.  Click **Create repository**.

### 3. Push to GitHub
Follow the instructions provided by GitHub after creating the repo. It will look like this (replace `YOUR_USERNAME` with your actual username):

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/realshow-ai-lite.git
git push -u origin main
```

### 4. Enable GitHub Pages (Optional)
1.  Go to your repository **Settings**.
2.  Click **Pages** in the left sidebar.
3.  Under **Branch**, select `main` and click **Save**.
4.  Your site will be live at `https://YOUR_USERNAME.github.io/realshow-ai-lite/`.
