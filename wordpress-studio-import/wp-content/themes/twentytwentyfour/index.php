<?php
/**
 * Minimal theme placeholder for Brook Katz WordPress Studio import.
 * Replace with full Twenty Twenty-Four from https://wordpress.org/themes/twentytwentyfour/
 */
get_header();
if (have_posts()) {
    while (have_posts()) {
        the_post();
        the_title('<h1>', '</h1>');
        the_content();
    }
}
get_footer();
