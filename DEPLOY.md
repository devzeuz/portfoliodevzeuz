# Deploying to Render

This project is fully configured for zero-friction deployment on [Render](https://render.com) as a **Static Site** (Free tier with global CDN and automated SSL).

---

## Option 1: Automatic Blueprint (Recommended — 1 Click)

Because [`render.yaml`](./render.yaml) is included in the root directory:

1. Push your repository to GitHub.
2. In the Render Dashboard, click **New +** and select **Blueprint**.
3. Select your repository `portfoliodevzeuz`.
4. Click **Apply**.
5. Render will automatically read `render.yaml`, configure the build command, publish directory, and redirect rules. Your site will be live immediately!

---

## Option 2: Manual Static Site Setup

If you prefer to create the service manually in the Render Dashboard:

1. Click **New +** > **Static Site**.
2. Connect your GitHub repository.
3. Configure the following settings:
   - **Name**: `devzeuz-portfolio` (or your preferred name)
   - **Branch**: `main` (or `master`)
   - **Root Directory**: *(leave blank)*
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `.`
4. Under **Redirects/Rewrites** (optional, handled automatically by root `index.html`):
   - **Source**: `/`
   - **Destination**: `/dist/index.html`
   - **Action**: `Redirect`
5. Click **Create Static Site**.

---

## Local Development & Testing

- **Watch styles during development**:
  ```bash
  npm run dev
  ```

- **Production build test**:
  ```bash
  npm run build
  ```

- **Run local server**:
  ```bash
  npm run serve
  # Opens at http://localhost:5050
  ```
