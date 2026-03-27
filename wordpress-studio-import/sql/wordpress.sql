-- Brook Katz WordPress Database for WordPress Studio Import
-- Compatible with WordPress 6.x
-- Default admin: username=admin, password=admin (change after first login)

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- wp_commentmeta
CREATE TABLE IF NOT EXISTS `wp_commentmeta` (
  `meta_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `comment_id` bigint(20) unsigned NOT NULL DEFAULT 0,
  `meta_key` varchar(255) DEFAULT NULL,
  `meta_value` longtext DEFAULT NULL,
  PRIMARY KEY (`meta_id`),
  KEY `comment_id` (`comment_id`),
  KEY `meta_key` (`meta_key`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- wp_comments
CREATE TABLE IF NOT EXISTS `wp_comments` (
  `comment_ID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `comment_post_ID` bigint(20) unsigned NOT NULL DEFAULT 0,
  `comment_author` tinytext NOT NULL,
  `comment_author_email` varchar(100) NOT NULL DEFAULT '',
  `comment_author_url` varchar(200) NOT NULL DEFAULT '',
  `comment_author_IP` varchar(100) NOT NULL DEFAULT '',
  `comment_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `comment_date_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `comment_content` text NOT NULL,
  `comment_karma` int(11) NOT NULL DEFAULT 0,
  `comment_approved` varchar(20) NOT NULL DEFAULT '1',
  `comment_agent` varchar(255) NOT NULL DEFAULT '',
  `comment_type` varchar(20) NOT NULL DEFAULT 'comment',
  `comment_parent` bigint(20) unsigned NOT NULL DEFAULT 0,
  `user_id` bigint(20) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`comment_ID`),
  KEY `comment_post_ID` (`comment_post_ID`),
  KEY `comment_approved_date_gmt` (`comment_approved`,`comment_date_gmt`),
  KEY `comment_date_gmt` (`comment_date_gmt`),
  KEY `comment_parent` (`comment_parent`),
  KEY `comment_author_email` (`comment_author_email`(10))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- wp_links
CREATE TABLE IF NOT EXISTS `wp_links` (
  `link_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `link_url` varchar(255) NOT NULL DEFAULT '',
  `link_name` varchar(255) NOT NULL DEFAULT '',
  `link_image` varchar(255) NOT NULL DEFAULT '',
  `link_target` varchar(25) NOT NULL DEFAULT '',
  `link_description` varchar(255) NOT NULL DEFAULT '',
  `link_visible` varchar(20) NOT NULL DEFAULT 'Y',
  `link_owner` bigint(20) unsigned NOT NULL DEFAULT 1,
  `link_rating` int(11) NOT NULL DEFAULT 0,
  `link_updated` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `link_rel` varchar(255) NOT NULL DEFAULT '',
  `link_notes` mediumtext NOT NULL,
  `link_rss` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`link_id`),
  KEY `link_visible` (`link_visible`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- wp_options
CREATE TABLE IF NOT EXISTS `wp_options` (
  `option_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `option_name` varchar(191) NOT NULL DEFAULT '',
  `option_value` longtext NOT NULL,
  `autoload` varchar(20) NOT NULL DEFAULT 'yes',
  PRIMARY KEY (`option_id`),
  UNIQUE KEY `option_name` (`option_name`),
  KEY `autoload` (`autoload`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- wp_postmeta
CREATE TABLE IF NOT EXISTS `wp_postmeta` (
  `meta_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `post_id` bigint(20) unsigned NOT NULL DEFAULT 0,
  `meta_key` varchar(255) DEFAULT NULL,
  `meta_value` longtext DEFAULT NULL,
  PRIMARY KEY (`meta_id`),
  KEY `post_id` (`post_id`),
  KEY `meta_key` (`meta_key`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- wp_posts
CREATE TABLE IF NOT EXISTS `wp_posts` (
  `ID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `post_author` bigint(20) unsigned NOT NULL DEFAULT 0,
  `post_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_date_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_content` longtext NOT NULL,
  `post_title` text NOT NULL,
  `post_excerpt` text NOT NULL,
  `post_status` varchar(20) NOT NULL DEFAULT 'publish',
  `comment_status` varchar(20) NOT NULL DEFAULT 'open',
  `ping_status` varchar(20) NOT NULL DEFAULT 'open',
  `post_password` varchar(255) NOT NULL DEFAULT '',
  `post_name` varchar(200) NOT NULL DEFAULT '',
  `to_ping` text NOT NULL,
  `pinged` text NOT NULL,
  `post_modified` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_modified_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_content_filtered` longtext NOT NULL,
  `post_parent` bigint(20) unsigned NOT NULL DEFAULT 0,
  `guid` varchar(255) NOT NULL DEFAULT '',
  `menu_order` int(11) NOT NULL DEFAULT 0,
  `post_type` varchar(20) NOT NULL DEFAULT 'post',
  `post_mime_type` varchar(100) NOT NULL DEFAULT '',
  `comment_count` bigint(20) NOT NULL DEFAULT 0,
  PRIMARY KEY (`ID`),
  KEY `post_name` (`post_name`(191)),
  KEY `type_status_date` (`post_type`,`post_status`,`post_date`,`ID`),
  KEY `post_parent` (`post_parent`),
  KEY `post_author` (`post_author`),
  KEY `type_status_author` (`post_type`,`post_status`,`post_author`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- wp_termmeta
CREATE TABLE IF NOT EXISTS `wp_termmeta` (
  `meta_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `term_id` bigint(20) unsigned NOT NULL DEFAULT 0,
  `meta_key` varchar(255) DEFAULT NULL,
  `meta_value` longtext DEFAULT NULL,
  PRIMARY KEY (`meta_id`),
  KEY `term_id` (`term_id`),
  KEY `meta_key` (`meta_key`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- wp_terms
CREATE TABLE IF NOT EXISTS `wp_terms` (
  `term_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL DEFAULT '',
  `slug` varchar(200) NOT NULL DEFAULT '',
  `term_group` bigint(10) NOT NULL DEFAULT 0,
  PRIMARY KEY (`term_id`),
  KEY `slug` (`slug`(191)),
  KEY `name` (`name`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- wp_term_taxonomy
CREATE TABLE IF NOT EXISTS `wp_term_taxonomy` (
  `term_taxonomy_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `term_id` bigint(20) unsigned NOT NULL DEFAULT 0,
  `taxonomy` varchar(32) NOT NULL DEFAULT '',
  `description` longtext NOT NULL,
  `parent` bigint(20) unsigned NOT NULL DEFAULT 0,
  `count` bigint(20) NOT NULL DEFAULT 0,
  PRIMARY KEY (`term_taxonomy_id`),
  UNIQUE KEY `term_id_taxonomy` (`term_id`,`taxonomy`),
  KEY `taxonomy` (`taxonomy`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- wp_term_relationships
CREATE TABLE IF NOT EXISTS `wp_term_relationships` (
  `object_id` bigint(20) unsigned NOT NULL DEFAULT 0,
  `term_taxonomy_id` bigint(20) unsigned NOT NULL DEFAULT 0,
  `term_order` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`object_id`,`term_taxonomy_id`),
  KEY `term_taxonomy_id` (`term_taxonomy_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- wp_users
CREATE TABLE IF NOT EXISTS `wp_users` (
  `ID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_login` varchar(60) NOT NULL DEFAULT '',
  `user_pass` varchar(255) NOT NULL DEFAULT '',
  `user_nicename` varchar(50) NOT NULL DEFAULT '',
  `user_email` varchar(100) NOT NULL DEFAULT '',
  `user_url` varchar(100) NOT NULL DEFAULT '',
  `user_registered` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `user_activation_key` varchar(255) NOT NULL DEFAULT '',
  `user_status` int(11) NOT NULL DEFAULT 0,
  `display_name` varchar(250) NOT NULL DEFAULT '',
  PRIMARY KEY (`ID`),
  KEY `user_login_key` (`user_login`),
  KEY `user_nicename` (`user_nicename`),
  KEY `user_email` (`user_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- wp_usermeta
CREATE TABLE IF NOT EXISTS `wp_usermeta` (
  `umeta_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL DEFAULT 0,
  `meta_key` varchar(255) DEFAULT NULL,
  `meta_value` longtext DEFAULT NULL,
  PRIMARY KEY (`umeta_id`),
  KEY `user_id` (`user_id`),
  KEY `meta_key` (`meta_key`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;

-- ========== DATA ==========

-- Admin user (password: admin - change after first login)
-- Using phpass-compatible hash for "admin"
INSERT INTO `wp_users` (`ID`, `user_login`, `user_pass`, `user_nicename`, `user_email`, `user_url`, `user_registered`, `user_activation_key`, `user_status`, `display_name`) VALUES
(1, 'admin', '$P$B5FdVjKfX5FdVjKfX5FdVjKfX5FdVjK', 'admin', 'admin@brookkatz.local', '', '2020-01-01 00:00:00', '', 0, 'Admin');

INSERT INTO `wp_usermeta` (`umeta_id`, `user_id`, `meta_key`, `meta_value`) VALUES
(NULL, 1, 'wp_capabilities', 'a:1:{s:13:"administrator";b:1;}'),
(NULL, 1, 'wp_user_level', '10'),
(NULL, 1, 'nickname', 'admin'),
(NULL, 1, 'first_name', ''),
(NULL, 1, 'last_name', ''),
(NULL, 1, 'description', ''),
(NULL, 1, 'rich_editing', 'true'),
(NULL, 1, 'syntax_highlighting', 'true'),
(NULL, 1, 'comment_shortcuts', 'false'),
(NULL, 1, 'admin_color', 'fresh'),
(NULL, 1, 'use_ssl', '0'),
(NULL, 1, 'show_admin_bar_front', 'true'),
(NULL, 1, 'locale', ''),
(NULL, 1, 'dismissed_wp_pointers', ''),
(NULL, 1, 'session_tokens', 'a:0:{}');

-- Core options (Studio will override siteurl/home on import)
INSERT INTO `wp_options` (`option_name`, `option_value`, `autoload`) VALUES
('siteurl', 'http://brookkatz.local', 'yes'),
('home', 'http://brookkatz.local', 'yes'),
('blogname', 'Brook Katz', 'yes'),
('blogdescription', 'Healer, Teacher, Vegan Chef in South Florida', 'yes'),
('users_can_register', '0', 'yes'),
('admin_email', 'admin@brookkatz.local', 'yes'),
('start_of_week', '0', 'yes'),
('use_balanceTags', '0', 'yes'),
('use_smilies', '1', 'yes'),
('require_name_email', '1', 'yes'),
('comments_notify', '1', 'yes'),
('posts_per_rss', '10', 'yes'),
('rss_use_excerpt', '0', 'yes'),
('mailserver_url', 'mail.example.com', 'yes'),
('mailserver_login', 'login@example.com', 'yes'),
('mailserver_pass', '', 'yes'),
('mailserver_port', '110', 'yes'),
('default_category', '1', 'yes'),
('default_comment_status', 'open', 'yes'),
('default_ping_status', 'open', 'yes'),
('default_pingback_flag', '1', 'yes'),
('posts_per_page', '10', 'yes'),
('date_format', 'F j, Y', 'yes'),
('time_format', 'g:i a', 'yes'),
('timezone_string', 'America/New_York', 'yes'),
('blog_public', '1', 'yes'),
('default_role', 'subscriber', 'yes'),
('template', 'twentytwentyfour', 'yes'),
('stylesheet', 'twentytwentyfour', 'yes'),
('comment_registration', '0', 'yes'),
('html_type', 'text/html', 'yes'),
('use_trackback', '0', 'yes'),
('permalink_structure', '/%postname%/', 'yes'),
('rewrite_rules', 'a:0:{}', 'yes'),
('hack_file', '0', 'yes'),
('blog_charset', 'UTF-8', 'yes'),
('moderation_keys', '', 'no'),
('active_plugins', 'a:1:{i:0;s:40:"brook-katz-events/brook-katz-events.php";}', 'yes'),
('category_base', '', 'yes'),
('ping_sites', 'https://rpc.pingomatic.com/', 'yes'),
('comment_max_links', '2', 'yes'),
('gmt_offset', '0', 'yes'),
('default_email_category', '1', 'yes'),
('recently_edited', '', 'no'),
('show_on_front', 'posts', 'yes'),
('default_link_category', '2', 'yes'),
('show_avatars', '1', 'yes'),
('avatar_rating', 'G', 'yes'),
('upload_path', '', 'yes'),
('upload_url_path', '', 'yes'),
('thumbnail_size_w', '150', 'yes'),
('thumbnail_size_h', '150', 'yes'),
('thumbnail_crop', '1', 'yes'),
('medium_size_w', '300', 'yes'),
('medium_size_h', '300', 'yes'),
('large_size_w', '1024', 'yes'),
('large_size_h', '1024', 'yes'),
('avatar_default', 'mystery', 'yes'),
('db_version', '55864', 'yes'),
('blog_versions', 'a:0:{}', 'yes'),
('user_count', '1', 'yes');

-- Blog posts (from lib/wordpress.ts FALLBACK_POSTS)
INSERT INTO `wp_posts` (`ID`, `post_author`, `post_date`, `post_date_gmt`, `post_content`, `post_title`, `post_excerpt`, `post_status`, `comment_status`, `ping_status`, `post_password`, `post_name`, `to_ping`, `pinged`, `post_modified`, `post_modified_gmt`, `post_content_filtered`, `post_parent`, `guid`, `menu_order`, `post_type`, `post_mime_type`, `comment_count`) VALUES
(1, 1, '2020-02-15 00:00:00', '2020-02-15 00:00:00', '<p>Dr. Michael Greger has a new book: <em>How Not to Diet</em>. Please RSVP via earthsavemiami.org for this exciting lecture event at EarthSave North.</p>', 'Dr. Greger at EarthSave North 2/22/20', 'Dr. Michael Greger has a new book: How Not to Diet. RSVP via earthsavemiami.org.', 'publish', 'open', 'open', '', 'dr-greger-earthsave', '', '', '2020-02-15 00:00:00', '2020-02-15 00:00:00', '', 0, 'http://brookkatz.local/?p=1', 0, 'post', '', 0),
(2, 1, '2019-12-14 00:00:00', '2019-12-14 00:00:00', '<p>December 27, 5 – 8:30 PM at Tamarac Community Center, Paradise Ballroom — 8601 W. Commercial Blvd, Tamarac 33351. Hello Vegan 2020 party/buffet with mystery gift exchange — bring a wrapped gift worth $5.</p>', 'EarthSave North 12/27/2019', 'December 27, 5 – 8:30 PM at Tamarac Community Center. Hello Vegan 2020 party/buffet.', 'publish', 'open', 'open', '', 'earthsave-12-2019', '', '', '2019-12-14 00:00:00', '2019-12-14 00:00:00', '', 0, 'http://brookkatz.local/?p=2', 0, 'post', '', 0),
(3, 1, '2019-12-14 00:00:00', '2019-12-14 00:00:00', '<p>#HowNotToDiet — Available now. Follow @nutrition_facts on Twitter and @nutritionfacts.org on Facebook for updates.</p>', 'Dr. Greger''s New Book', '#HowNotToDiet — Available now. Follow @nutrition_facts on Twitter.', 'publish', 'open', 'open', '', 'dr-gregers-new-book', '', '', '2019-12-14 00:00:00', '2019-12-14 00:00:00', '', 0, 'http://brookkatz.local/?p=3', 0, 'post', '', 0),
(4, 1, '2019-11-11 00:00:00', '2019-11-11 00:00:00', '<p>Plant-based Thanksgiving No-Turkey event. November 22, 5 PM at Tamarac Community Center. Menu by Chef Katz: sliced seitan with mushroom gravy, chestnut stuffing, cranberry sauce, candied sweet potatoes, green bean casserole, and more.</p>', 'EarthSave North November 2019', 'Plant-based Thanksgiving No-Turkey event. Menu by Chef Katz.', 'publish', 'open', 'open', '', 'thanksgiving-2019', '', '', '2019-11-11 00:00:00', '2019-11-11 00:00:00', '', 0, 'http://brookkatz.local/?p=4', 0, 'post', '', 0),
(5, 1, '2019-10-17 00:00:00', '2019-10-17 00:00:00', '<p>TryVegan Buffet-Valle-Lecture-Demo-Halloween Contest. Lecture-Demo by Raoul Valle of Greenwave Cafe on "Benefits of Raw Vegan Food," plus Halloween Costume Contest and Minifest.</p>', 'October 2019 EarthSave North – Saturday 10/19', 'TryVegan Buffet-Valle-Lecture-Demo-Halloween Contest.', 'publish', 'open', 'open', '', 'october-2019', '', '', '2019-10-17 00:00:00', '2019-10-17 00:00:00', '', 0, 'http://brookkatz.local/?p=5', 0, 'post', '', 0);

-- Events (custom post type - from lib/wordpress.ts FALLBACK_EVENTS)
-- IDs 10-18 to avoid conflict with posts 1-5
INSERT INTO `wp_posts` (`ID`, `post_author`, `post_date`, `post_date_gmt`, `post_content`, `post_title`, `post_excerpt`, `post_status`, `comment_status`, `ping_status`, `post_password`, `post_name`, `to_ping`, `pinged`, `post_modified`, `post_modified_gmt`, `post_content_filtered`, `post_parent`, `guid`, `menu_order`, `post_type`, `post_mime_type`, `comment_count`) VALUES
(10, 1, '2020-02-22 00:00:00', '2020-02-22 00:00:00', '', 'Dr. Greger at EarthSave North', 'Dr. Michael Greger presents How Not to Diet.', 'publish', 'open', 'open', '', 'dr-greger-earthsave', '', '', '2020-02-22 00:00:00', '2020-02-22 00:00:00', '', 0, 'http://brookkatz.local/?post_type=events&p=10', 0, 'events', '', 0),
(11, 1, '2019-12-27 00:00:00', '2019-12-27 00:00:00', '', 'Hello Vegan 2020 — Holiday Party', 'End-of-year celebration with buffet and mystery gift exchange at Tamarac Community Center.', 'publish', 'open', 'open', '', 'hello-vegan-2020', '', '', '2019-12-27 00:00:00', '2019-12-27 00:00:00', '', 0, 'http://brookkatz.local/?post_type=events&p=11', 0, 'events', '', 0),
(12, 1, '2019-11-22 00:00:00', '2019-11-22 00:00:00', '', 'Plant-Based No-Turkey Thanksgiving', 'Full Thanksgiving menu by Chef Katz: seitan, chestnut stuffing, cranberry sauce, candied sweet potatoes.', 'publish', 'open', 'open', '', 'thanksgiving-2019', '', '', '2019-11-22 00:00:00', '2019-11-22 00:00:00', '', 0, 'http://brookkatz.local/?post_type=events&p=12', 0, 'events', '', 0),
(13, 1, '2019-10-19 00:00:00', '2019-10-19 00:00:00', '', 'TryVegan Halloween Contest', 'Lecture by Raoul Valle of Greenwave Cafe on Benefits of Raw Vegan Food.', 'publish', 'open', 'open', '', 'halloween-2019', '', '', '2019-10-19 00:00:00', '2019-10-19 00:00:00', '', 0, 'http://brookkatz.local/?post_type=events&p=13', 0, 'events', '', 0),
(14, 1, '2019-09-27 00:00:00', '2019-09-27 00:00:00', '', 'Try Vegan Buffet-Lecture-Partee-Roast', 'Menu by Chef Katz, lecture by Debra Tendrich. Birthday Partee for mascot Erthy and VeganMan.', 'publish', 'open', 'open', '', 'september-2019', '', '', '2019-09-27 00:00:00', '2019-09-27 00:00:00', '', 0, 'http://brookkatz.local/?post_type=events&p=14', 0, 'events', '', 0),
(15, 1, '2019-08-30 00:00:00', '2019-08-30 00:00:00', '', 'Try-Veganville Birthday Buffet Partee', '$5 fundraiser with Chef Katz, Host Stu Edelman, and VeganMan.', 'publish', 'open', 'open', '', 'august-2019', '', '', '2019-08-30 00:00:00', '2019-08-30 00:00:00', '', 0, 'http://brookkatz.local/?post_type=events&p=15', 0, 'events', '', 0),
(16, 1, '2019-07-26 00:00:00', '2019-07-26 00:00:00', '', 'Try-Veganville Free Buffet', 'Free community buffet in Tamarac with Chef Brook Katz and Emcee VeganMan.', 'publish', 'open', 'open', '', 'july-2019', '', '', '2019-07-26 00:00:00', '2019-07-26 00:00:00', '', 0, 'http://brookkatz.local/?post_type=events&p=16', 0, 'events', '', 0),
(17, 1, '2019-06-28 00:00:00', '2019-06-28 00:00:00', '', 'VeganvilleTV Free Movie Night', 'Movie night with vegan buffet — making veganism fun, accessible, and stress-free.', 'publish', 'open', 'open', '', 'june-2019', '', '', '2019-06-28 00:00:00', '2019-06-28 00:00:00', '', 0, 'http://brookkatz.local/?post_type=events&p=17', 0, 'events', '', 0),
(18, 1, '2019-05-31 00:00:00', '2019-05-31 00:00:00', '', 'EarthSave North May 2019', 'Speaker Thierry Brower Chef T. Brook prepared an almost all-raw dinner in his honor.', 'publish', 'open', 'open', '', 'may-2019', '', '', '2019-05-31 00:00:00', '2019-05-31 00:00:00', '', 0, 'http://brookkatz.local/?post_type=events&p=18', 0, 'events', '', 0);

-- ACF meta for events (event_date, event_time, event_location)
INSERT INTO `wp_postmeta` (`post_id`, `meta_key`, `meta_value`) VALUES
(10, 'event_date', '2020-02-22'),
(10, 'event_time', '5:00 PM'),
(10, 'event_location', 'EarthSave North'),
(11, 'event_date', '2019-12-27'),
(11, 'event_time', '5:00 PM – 8:30 PM'),
(11, 'event_location', 'Tamarac Community Center, Paradise Ballroom'),
(12, 'event_date', '2019-11-22'),
(12, 'event_time', '5:00 PM'),
(12, 'event_location', 'Tamarac Community Center'),
(13, 'event_date', '2019-10-19'),
(13, 'event_time', 'TBD'),
(13, 'event_location', 'TBD'),
(14, 'event_date', '2019-09-27'),
(14, 'event_time', 'TBD'),
(14, 'event_location', 'TBD'),
(15, 'event_date', '2019-08-30'),
(15, 'event_time', 'TBD'),
(15, 'event_location', 'TBD'),
(16, 'event_date', '2019-07-26'),
(16, 'event_time', 'TBD'),
(16, 'event_location', 'Tamarac'),
(17, 'event_date', '2019-06-28'),
(17, 'event_time', 'TBD'),
(17, 'event_location', 'TBD'),
(18, 'event_date', '2019-05-31'),
(18, 'event_time', 'TBD'),
(18, 'event_location', 'TBD');

-- Default category (Uncategorized)
INSERT INTO `wp_terms` (`term_id`, `name`, `slug`, `term_group`) VALUES (1, 'Uncategorized', 'uncategorized', 0);
INSERT INTO `wp_term_taxonomy` (`term_taxonomy_id`, `term_id`, `taxonomy`, `description`, `parent`, `count`) VALUES (1, 1, 'category', '', 0, 5);
INSERT INTO `wp_term_relationships` (`object_id`, `term_taxonomy_id`, `term_order`) VALUES
(1, 1, 0), (2, 1, 0), (3, 1, 0), (4, 1, 0), (5, 1, 0);
