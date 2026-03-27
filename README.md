# Brook Katz

BrookKatz.com — Healer, Teacher, Vegan Chef in South Florida. Next.js headless frontend powered by WordPress CMS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## WordPress Studio Setup

This frontend fetches posts and events from a WordPress backend via the REST API. To use **WordPress Studio** as your local CMS:

### 1. Import WordPress into Studio

A ready-to-import backup is included:

- **brook-katz-wordpress-studio.zip** – Full backup with 5 posts, 9 events, and the events plugin. In WordPress Studio → **Add site** → **Import from a backup** → select this file.

- **wordpress-studio-import/** – Source folder (sql, wp-config, themes, plugins). See `wordpress-studio-import/IMPORT-README.md` for details.

- **If you have another backup**: In WordPress Studio → **Import from a backup** → choose `.tar.gz`, `.zip`, or `.wpress`
- **If starting fresh**: Create a new site in Studio, then add:
  - Custom post type: `events`
  - ACF (Advanced Custom Fields): `event_date`, `event_time`, `event_location`

### 2. Connect This Frontend

1. Copy `.env.example` to `.env` (or use the existing `.env`)
2. Set your Studio site URL in `.env`:
   ```
   NEXT_PUBLIC_WORDPRESS_URL=http://brookkatz.local
   ```
   (Use the exact URL shown in WordPress Studio.)
3. Run `npm run dev` and open http://localhost:3000

### 3. Preview Sites (Optional)

From WordPress Studio, use **Previews** → **Create preview site** to get a temporary public URL (wp.build) for sharing. Updates sync and reset the 7-day expiration.

## MCP / Browser Preview

Use the **cursor-ide-browser** MCP to preview the site:

1. Run `npm run dev`
2. Use MCP tools to navigate to `http://localhost:3000`
3. Take snapshots, screenshots, or interact with the page

## Local Development

- **Next.js frontend**: Run `npm run dev` → http://localhost:3000
- **WordPress CMS**: WordPress Studio at http://localhost:8882 (path: `C:\Users\mtint\Studio\brook-katz`)

The frontend fetches posts and events from WordPress. Ensure WordPress Studio is running before starting the dev server.

## Deploy to Vercel

1. Push to GitHub and connect the repo in [Vercel](https://vercel.com).
2. **Environment variable** (Vercel → Project → Settings → Environment Variables):
   - `NEXT_PUBLIC_WORDPRESS_URL` = your production WordPress URL (e.g. `https://cms.yoursite.com`)
   - Or leave **empty** to use static fallback content (no live CMS in production).
3. Deploy. The build uses `npm run build` (already in `vercel.json`).

**Note:** For production, WordPress must be hosted and publicly accessible (e.g. WordPress.com, Pressable, or your own server). Local WordPress (localhost:8882) is only reachable during local development.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (localhost:3000) |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |

## Environment

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_WORDPRESS_URL` | WordPress REST API base URL. Local: `http://localhost:8882`. Production: your hosted WordPress URL, or empty for static fallback. |
