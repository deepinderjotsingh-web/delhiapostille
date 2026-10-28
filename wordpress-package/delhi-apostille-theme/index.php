<?php
/**
 * Fallback index / blog listing template.
 * @package Delhi_Apostille
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();
$title = is_home() ? ( get_the_title( get_option( 'page_for_posts' ) ) ? get_the_title( get_option( 'page_for_posts' ) ) : 'Blog & News' ) : 'Blog';
?>
<section class="da-pagehero">
	<div class="da-container">
		<nav class="da-crumbs"><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a> &rsaquo; <span><?php echo esc_html( $title ); ?></span></nav>
		<span class="da-rule"></span>
		<h1><?php echo esc_html( $title ); ?></h1>
	</div>
</section>
<section class="da-section">
	<div class="da-container">
		<div class="da-cards">
			<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
				<a class="da-card" href="<?php the_permalink(); ?>">
					<div class="da-card-media"><?php echo has_post_thumbnail() ? get_the_post_thumbnail( null, 'medium_large' ) : '<img src="' . esc_url( da_img( 'degree.jpg' ) ) . '" alt="" />'; ?></div>
					<div class="da-card-body">
						<span class="da-date"><?php echo esc_html( get_the_date() ); ?></span>
						<h3><?php the_title(); ?></h3>
						<p><?php echo esc_html( get_the_excerpt() ); ?></p>
						<span class="da-readmore">Read Article &rarr;</span>
					</div>
				</a>
			<?php endwhile; else : echo '<p class="da-note">No posts yet. Import the provided XML to populate the blog.</p>'; endif; ?>
		</div>
		<div class="da-pagination"><?php echo paginate_links(); ?></div>
	</div>
</section>
<?php get_footer(); ?>
