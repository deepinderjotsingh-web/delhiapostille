<?php
/**
 * Single post / service template.
 * @package Delhi_Apostille
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();
while ( have_posts() ) : the_post(); ?>
<section class="da-pagehero">
	<div class="da-container">
		<nav class="da-crumbs"><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a> &rsaquo; <span><?php the_title(); ?></span></nav>
		<span class="da-rule"></span>
		<h1><?php the_title(); ?></h1>
		<?php if ( 'post' === get_post_type() ) { echo '<p class="da-pagehero-meta">' . esc_html( get_the_date() ) . ' &middot; ' . esc_html( get_the_category_list( ', ' ) ) . '</p>'; } ?>
	</div>
</section>
<div class="da-section">
	<div class="da-container da-single">
		<article class="da-prose">
			<?php if ( has_post_thumbnail() ) { echo '<div class="da-prose-media">' . get_the_post_thumbnail( null, 'large' ) . '</div>'; } ?>
			<?php the_content(); ?>
			<div class="da-inline-cta">
				<div><h4>Need help with this process?</h4><p>Talk to our experts for a free quote today.</p></div>
				<a class="da-btn da-btn-gold" href="https://wa.me/<?php echo esc_attr( da_opt( 'da_whatsapp' ) ); ?>" target="_blank" rel="noopener">Chat on WhatsApp</a>
			</div>
		</article>
		<?php if ( 'post' === get_post_type() ) { get_sidebar(); } else {
			echo '<aside class="da-sidebar"><div class="da-widget"><h4 class="da-widget-title">Other Services</h4><ul class="da-footer-links">';
			$others = new WP_Query( array( 'post_type' => 'service', 'posts_per_page' => 5, 'post__not_in' => array( get_the_ID() ) ) );
			while ( $others->have_posts() ) { $others->the_post(); echo '<li><a href="' . esc_url( get_permalink() ) . '">' . esc_html( get_the_title() ) . '</a></li>'; }
			wp_reset_postdata();
			echo '</ul></div><div class="da-widget da-widget--cta"><h4 class="da-widget-title">Get a Free Quote</h4><p>Free doorstep pickup in Delhi NCR.</p><a class="da-btn da-btn-gold" href="' . esc_url( home_url( '/contact/' ) ) . '">Request Quote</a></div></aside>';
		} ?>
	</div>
</div>
<?php endwhile; get_footer(); ?>
