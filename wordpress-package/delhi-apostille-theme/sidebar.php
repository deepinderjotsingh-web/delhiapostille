<?php
/**
 * Blog sidebar.
 * @package Delhi_Apostille
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
?>
<aside class="da-sidebar">
	<?php if ( is_active_sidebar( 'sidebar-1' ) ) { dynamic_sidebar( 'sidebar-1' ); } else { ?>
		<div class="da-widget">
			<h4 class="da-widget-title">Search</h4>
			<?php get_search_form(); ?>
		</div>
		<div class="da-widget">
			<h4 class="da-widget-title">Recent Articles</h4>
			<ul class="da-footer-links">
				<?php
				$recent = new WP_Query( array( 'post_type' => 'post', 'posts_per_page' => 5 ) );
				while ( $recent->have_posts() ) { $recent->the_post(); echo '<li><a href="' . esc_url( get_permalink() ) . '">' . esc_html( get_the_title() ) . '</a></li>'; }
				wp_reset_postdata();
				?>
			</ul>
		</div>
		<div class="da-widget da-widget--cta">
			<h4 class="da-widget-title">Free Consultation</h4>
			<p>Get a free quote with doorstep pickup across Delhi NCR.</p>
			<a class="da-btn da-btn-gold" href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">Request Quote</a>
		</div>
	<?php } ?>
</aside>
