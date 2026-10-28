<?php
/**
 * Delhi Apostille theme functions.
 *
 * @package Delhi_Apostille
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

define( 'DA_VERSION', '1.0.0' );

/* ------------------------------------------------------------------ *
 * Theme setup
 * ------------------------------------------------------------------ */
function da_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
	add_theme_support( 'custom-logo', array( 'height' => 80, 'width' => 80, 'flex-height' => true, 'flex-width' => true ) );

	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'delhi-apostille' ),
		'footer'  => __( 'Footer Menu', 'delhi-apostille' ),
	) );
}
add_action( 'after_setup_theme', 'da_setup' );

/* ------------------------------------------------------------------ *
 * Assets
 * ------------------------------------------------------------------ */
function da_assets() {
	wp_enqueue_style( 'da-fonts', 'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap', array(), null );
	wp_enqueue_style( 'da-theme', get_template_directory_uri() . '/assets/css/theme.css', array(), DA_VERSION );
	wp_enqueue_script( 'da-main', get_template_directory_uri() . '/assets/js/main.js', array(), DA_VERSION, true );
}
add_action( 'wp_enqueue_scripts', 'da_assets' );

/* ------------------------------------------------------------------ *
 * Services custom post type (dynamic services)
 * ------------------------------------------------------------------ */
function da_register_service_cpt() {
	$labels = array(
		'name'          => __( 'Services', 'delhi-apostille' ),
		'singular_name' => __( 'Service', 'delhi-apostille' ),
		'add_new_item'  => __( 'Add New Service', 'delhi-apostille' ),
		'edit_item'     => __( 'Edit Service', 'delhi-apostille' ),
		'menu_name'     => __( 'Services', 'delhi-apostille' ),
	);
	register_post_type( 'service', array(
		'labels'       => $labels,
		'public'       => true,
		'has_archive'  => true,
		'menu_icon'    => 'dashicons-awards',
		'rewrite'      => array( 'slug' => 'services' ),
		'supports'     => array( 'title', 'editor', 'excerpt', 'thumbnail', 'page-attributes' ),
		'show_in_rest' => true,
	) );
}
add_action( 'init', 'da_register_service_cpt' );

/* ------------------------------------------------------------------ *
 * Widget areas
 * ------------------------------------------------------------------ */
function da_widgets() {
	register_sidebar( array(
		'name'          => __( 'Blog Sidebar', 'delhi-apostille' ),
		'id'            => 'sidebar-1',
		'before_widget' => '<section class="da-widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h4 class="da-widget-title">',
		'after_title'   => '</h4>',
	) );
}
add_action( 'widgets_init', 'da_widgets' );

/* ------------------------------------------------------------------ *
 * Customizer: contact / company details (dynamic)
 * ------------------------------------------------------------------ */
function da_customize( $wp_customize ) {
	$wp_customize->add_section( 'da_contact', array( 'title' => __( 'Company & Contact Details', 'delhi-apostille' ), 'priority' => 30 ) );

	$fields = array(
		'da_phone'      => array( 'Phone Number', '+91 98100 00000' ),
		'da_phone_raw'  => array( 'Phone (digits only, for tel/wa link)', '919810000000' ),
		'da_whatsapp'   => array( 'WhatsApp Number (digits only)', '919810000000' ),
		'da_email'      => array( 'Email Address', 'info@delhi-apostille.in' ),
		'da_address'    => array( 'Office Address', '3rd Floor, Statesman House, Barakhamba Road, Connaught Place, New Delhi – 110001' ),
		'da_hours'      => array( 'Working Hours', 'Mon – Sat: 10:00 AM – 7:00 PM' ),
		'da_reg_no'     => array( 'MEA Registration No.', 'MEA/OSD/2024/DL-0098' ),
		'da_map'        => array( 'Google Maps Embed URL', 'https://www.google.com/maps?q=Connaught+Place+New+Delhi&output=embed' ),
		'da_hero_title' => array( 'Hero Title', 'Apostille & Attestation Services in Delhi' ),
		'da_hero_sub'   => array( 'Hero Subtitle', 'Get your educational, personal and commercial documents apostilled by the MEA and legalised at any embassy — with free doorstep pickup across Delhi NCR.' ),
	);

	foreach ( $fields as $id => $data ) {
		$wp_customize->add_setting( $id, array( 'default' => $data[1], 'sanitize_callback' => 'wp_kses_post' ) );
		$wp_customize->add_control( $id, array( 'label' => $data[0], 'section' => 'da_contact', 'type' => ( $id === 'da_address' ? 'textarea' : 'text' ) ) );
	}
}
add_action( 'customize_register', 'da_customize' );

function da_opt( $key, $fallback = '' ) {
	$val = get_theme_mod( $key, $fallback );
	return $val !== '' ? $val : $fallback;
}

/* Bundled image helper */
function da_img( $file ) {
	return get_template_directory_uri() . '/assets/images/' . $file;
}

/* ------------------------------------------------------------------ *
 * SEO: meta description, Open Graph & JSON-LD schema
 * ------------------------------------------------------------------ */
function da_seo_head() {
	$desc = '';
	if ( is_singular() ) {
		$desc = has_excerpt() ? get_the_excerpt() : wp_trim_words( wp_strip_all_tags( get_the_content() ), 30 );
	} else {
		$desc = get_bloginfo( 'description' );
	}
	$desc = esc_attr( wp_strip_all_tags( $desc ) );
	$title = wp_get_document_title();
	$img = has_post_thumbnail() ? get_the_post_thumbnail_url( null, 'large' ) : da_img( 'hero-apostille.jpg' );
	$url = is_singular() ? get_permalink() : home_url( add_query_arg( null, null ) );

	echo "\n<meta name=\"description\" content=\"{$desc}\" />\n";
	echo "<meta property=\"og:title\" content=\"" . esc_attr( $title ) . "\" />\n";
	echo "<meta property=\"og:description\" content=\"{$desc}\" />\n";
	echo "<meta property=\"og:type\" content=\"website\" />\n";
	echo "<meta property=\"og:image\" content=\"" . esc_url( $img ) . "\" />\n";
	echo "<meta property=\"og:url\" content=\"" . esc_url( $url ) . "\" />\n";
	echo "<meta name=\"twitter:card\" content=\"summary_large_image\" />\n";
	echo "<link rel=\"canonical\" href=\"" . esc_url( $url ) . "\" />\n";

	$schema = array(
		'@context'  => 'https://schema.org',
		'@type'     => 'LegalService',
		'name'      => get_bloginfo( 'name' ),
		'description' => get_bloginfo( 'description' ),
		'url'       => home_url( '/' ),
		'telephone' => da_opt( 'da_phone', '+91 98100 00000' ),
		'areaServed'=> 'IN',
		'address'   => array( '@type' => 'PostalAddress', 'streetAddress' => da_opt( 'da_address' ), 'addressLocality' => 'New Delhi', 'addressCountry' => 'IN' ),
	);
	echo '<script type="application/ld+json">' . wp_json_encode( $schema ) . "</script>\n";
}
add_action( 'wp_head', 'da_seo_head', 5 );

/* Excerpt length */
function da_excerpt_length() { return 24; }
add_filter( 'excerpt_length', 'da_excerpt_length' );
