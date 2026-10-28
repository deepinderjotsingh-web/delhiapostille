<?php
/**
 * Header template.
 * @package Delhi_Apostille
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="da-header">
	<div class="da-topbar">
		<div class="da-container da-topbar-inner">
			<div class="da-topbar-left">
				<a href="tel:<?php echo esc_attr( da_opt( 'da_phone_raw', '919810000000' ) ); ?>">&#9742; <?php echo esc_html( da_opt( 'da_phone', '+91 98100 00000' ) ); ?></a>
				<a href="mailto:<?php echo esc_attr( da_opt( 'da_email', 'info@delhi-apostille.in' ) ); ?>">&#9993; <?php echo esc_html( da_opt( 'da_email', 'info@delhi-apostille.in' ) ); ?></a>
			</div>
			<div class="da-topbar-right">&#10003; MEA Reg. No. <?php echo esc_html( da_opt( 'da_reg_no', 'MEA/OSD/2024/DL-0098' ) ); ?></div>
		</div>
	</div>

	<div class="da-navbar">
		<div class="da-container da-navbar-inner">
			<div class="da-brand">
				<?php if ( has_custom_logo() ) { the_custom_logo(); } else { ?>
					<img src="<?php echo esc_url( da_img( 'logo.jpg' ) ); ?>" alt="<?php bloginfo( 'name' ); ?>" class="da-logo" />
				<?php } ?>
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="da-brand-text">
					<span class="da-brand-name"><?php bloginfo( 'name' ); ?></span>
					<span class="da-brand-tag">Attestation &amp; Legalisation</span>
				</a>
			</div>

			<nav class="da-nav" aria-label="Primary">
				<?php
				if ( has_nav_menu( 'primary' ) ) {
					wp_nav_menu( array( 'theme_location' => 'primary', 'container' => false, 'menu_class' => 'da-menu', 'depth' => 2 ) );
				} else {
					echo '<ul class="da-menu">';
					echo '<li><a href="' . esc_url( home_url( '/' ) ) . '">Home</a></li>';
					wp_list_pages( array( 'title_li' => '', 'depth' => 1 ) );
					echo '</ul>';
				}
				?>
			</nav>

			<div class="da-nav-cta">
				<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="da-btn da-btn-gold">Get Free Quote</a>
				<button class="da-burger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
			</div>
		</div>
	</div>
</header>
<main id="da-main">
