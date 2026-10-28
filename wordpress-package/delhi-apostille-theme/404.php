<?php
/**
 * 404 template.
 * @package Delhi_Apostille
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header(); ?>
<section class="da-pagehero">
	<div class="da-container">
		<span class="da-rule"></span>
		<h1>404 &mdash; Page Not Found</h1>
	</div>
</section>
<section class="da-section">
	<div class="da-container da-prose" style="text-align:center">
		<p>The page you are looking for could not be found. It may have been moved or removed.</p>
		<p><a class="da-btn da-btn-gold" href="<?php echo esc_url( home_url( '/' ) ); ?>">Back to Home</a></p>
		<?php get_search_form(); ?>
	</div>
</section>
<?php get_footer(); ?>
