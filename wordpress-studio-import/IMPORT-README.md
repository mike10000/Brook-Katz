# Brook Katz WordPress Studio Import

## What's Included

- **sql/wordpress.sql** – Full WordPress database with:
  - 5 blog posts
  - 9 events (custom post type)
  - ACF meta (event_date, event_time, event_location)
  - Admin user: `admin` / `admin` (change after first login)

- **wp-content/plugins/brook-katz-events** – Registers the `events` post type for REST API

- **wp-content/themes/twentytwentyfour** – Minimal theme placeholder (consider replacing with full theme from WordPress.org)

- **wp-config.php** – WordPress config (Studio overrides DB credentials on import)

## How to Import

### Option 1: Full backup (.zip)

1. Use the pre-built **brook-katz-wordpress-studio.zip** in the project root
2. In WordPress Studio: **Add site** → **Import from a backup**
3. Select `brook-katz-wordpress-studio.zip`
4. Click **Add site**

### Option 2: Database only (.sql)

If you already have a WordPress site in Studio:

1. Open **Import / Export** tab
2. Select your site
3. Click **Import** and choose `sql/wordpress.sql`
4. The database will be merged with your existing site

## After Import

1. Set your site URL in Studio (e.g. `http://brookkatz.local`)
2. In this project's `.env`, set:
   ```
   NEXT_PUBLIC_WORDPRESS_URL=http://brookkatz.local
   ```
3. Run `npm run dev` to preview the Next.js frontend

## Default Login

- **Username:** admin
- **Password:** admin

Change the password after first login. If login fails, use Studio's CLI: `wp user update 1 --user_pass=yourpassword`
