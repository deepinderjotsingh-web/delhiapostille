<?php
/**
 * Archive & blog index template (also used for service archive).
 * @package Delhi_Apostille
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();
$is_service = is_post_type_archive( 'service' );
?>
<section class="da-pagehero">
	<div class="da-container">
		<nav class="da-crumbs"><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a> &rsaquo; <span><?php echo $is_service ? 'Services' : esc_html( get_the_archive_title() ); ?></span></nav>
		<span class="da-rule"></span>
		<h1><?php echo $is_service ? 'Our Services' : esc_html( get_the_archive_title() ); ?></h1>
	</div>
</section>
<section class="da-section">
	<div class="da-container">
		<div class="da-cards">
			<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
				<a class="da-card" href="<?php the_permalink(); ?>">
					<div class="da-card-media"><?php echo has_post_thumbnail() ? get_the_post_thumbnail( null, 'medium_large' ) : '<img src="' . esc_url( da_img( 'apostille-stamp.jpg' ) ) . '" alt="" />'; ?></div>
					<div class="da-card-body">
						<?php if ( ! $is_service ) { echo '<span class="da-date">' . esc_html( get_the_date() ) . '</span>'; } ?>
						<h3><?php the_title(); ?></h3>
						<p><?php echo esc_html( get_the_excerpt() ); ?></p>
						<span class="da-readmore">Read More &rarr;</span>
					</div>
				</a>
			<?php endwhile; else : echo '<p class="da-note">No content found. Import the provided XML to populate services &amp; posts.</p>'; endif; ?>
		</div>
		<div class="da-pagination"><?php echo paginate_links(); ?></div>
	</div>
</section>
<?php get_footer(); ?>
