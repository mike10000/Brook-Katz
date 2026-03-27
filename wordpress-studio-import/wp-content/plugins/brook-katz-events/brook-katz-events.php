<?php
/**
 * Plugin Name: Brook Katz Events
 * Description: Registers the events custom post type for the Brook Katz headless frontend.
 * Version: 1.0.0
 * Author: Brook Katz
 */

add_action('init', function () {
    register_post_type('events', [
        'labels' => [
            'name' => 'Events',
            'singular_name' => 'Event',
            'add_new' => 'Add New',
            'add_new_item' => 'Add New Event',
            'edit_item' => 'Edit Event',
            'new_item' => 'New Event',
            'view_item' => 'View Event',
            'search_items' => 'Search Events',
            'not_found' => 'No events found',
            'not_found_in_trash' => 'No events found in trash',
        ],
        'public' => true,
        'has_archive' => true,
        'rewrite' => ['slug' => 'events'],
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'excerpt', 'thumbnail'],
        'menu_icon' => 'dashicons-calendar-alt',
    ]);
});

// Expose event meta (event_date, event_time, event_location) in REST API as acf object
add_action('rest_api_init', function () {
    register_post_meta('events', 'event_date', [
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
        'auth_callback' => '__return_true',
    ]);
    register_post_meta('events', 'event_time', [
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
        'auth_callback' => '__return_true',
    ]);
    register_post_meta('events', 'event_location', [
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
        'auth_callback' => '__return_true',
    ]);
});

// Map meta to acf object for frontend compatibility
add_filter('rest_prepare_events', function ($response, $post, $request) {
    $response->data['acf'] = [
        'event_date' => get_post_meta($post->ID, 'event_date', true),
        'event_time' => get_post_meta($post->ID, 'event_time', true),
        'event_location' => get_post_meta($post->ID, 'event_location', true),
    ];
    return $response;
}, 10, 3);
