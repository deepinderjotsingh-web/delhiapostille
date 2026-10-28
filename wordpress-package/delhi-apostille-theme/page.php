<?php
/**
 * Single page template.
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
	</div>
</section>
<article class="da-section">
	<div class="da-container da-prose">
		<?php if ( has_post_thumbnail() ) { echo '<div class="da-prose-media">' . get_the_post_thumbnail( null, 'large' ) . '</div>'; } ?>
		<?php the_content(); ?>
	</div>
</article>
<?php endwhile; get_footer(); ?>
