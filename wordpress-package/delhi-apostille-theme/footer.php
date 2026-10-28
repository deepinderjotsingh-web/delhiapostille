<?php
/**
 * Footer template.
 * @package Delhi_Apostille
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
?>
</main><!-- #da-main -->

<footer class="da-footer">
	<div class="da-container da-footer-grid">
		<div>
			<div class="da-brand da-brand--footer">
				<img src="<?php echo esc_url( da_img( 'logo.jpg' ) ); ?>" alt="<?php bloginfo( 'name' ); ?>" class="da-logo" />
				<span class="da-brand-name"><?php bloginfo( 'name' ); ?></span>
			</div>
			<p class="da-footer-about"><?php echo esc_html( get_bloginfo( 'description' ) ? get_bloginfo( 'description' ) : 'MEA-authorised apostille, attestation and embassy legalisation services from New Delhi.' ); ?></p>
			<div class="da-badges">
				<span>&#9733; ISO Certified</span>
				<span>&#128737; Govt. Recognised</span>
			</div>
		</div>

		<div>
			<h4>Our Services</h4>
			<ul class="da-footer-links">
				<?php
				$services = new WP_Query( array( 'post_type' => 'service', 'posts_per_page' => 6, 'orderby' => 'menu_order', 'order' => 'ASC' ) );
				if ( $services->have_posts() ) {
					while ( $services->have_posts() ) { $services->the_post();
						echo '<li><a href="' . esc_url( get_permalink() ) . '">' . esc_html( get_the_title() ) . '</a></li>';
					}
					wp_reset_postdata();
				} else {
					echo '<li><a href="#">MEA Apostille Services</a></li><li><a href="#">Certificate Attestation</a></li>';
				}
				?>
			</ul>
		</div>

		<div>
			<h4>Quick Links</h4>
			<?php
			if ( has_nav_menu( 'footer' ) ) {
				wp_nav_menu( array( 'theme_location' => 'footer', 'container' => false, 'menu_class' => 'da-footer-links', 'depth' => 1 ) );
			} else {
				echo '<ul class="da-footer-links">';
				wp_list_pages( array( 'title_li' => '', 'depth' => 1 ) );
				echo '</ul>';
			}
			?>
		</div>

		<div>
			<h4>Contact Us</h4>
			<ul class="da-footer-contact">
				<li>&#128205; <?php echo esc_html( da_opt( 'da_address' ) ); ?></li>
				<li>&#9742; <a href="tel:<?php echo esc_attr( da_opt( 'da_phone_raw' ) ); ?>"><?php echo esc_html( da_opt( 'da_phone' ) ); ?></a></li>
				<li>&#9993; <a href="mailto:<?php echo esc_attr( da_opt( 'da_email' ) ); ?>"><?php echo esc_html( da_opt( 'da_email' ) ); ?></a></li>
				<li>&#128340; <?php echo esc_html( da_opt( 'da_hours' ) ); ?></li>
			</ul>
		</div>
	</div>
	<div class="da-footer-bottom">
		<div class="da-container">
			<p>&copy; <?php echo esc_html( date( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?>. All rights reserved. &middot; MEA Reg. No. <?php echo esc_html( da_opt( 'da_reg_no' ) ); ?></p>
		</div>
	</div>
</footer>

<a class="da-whatsapp" href="https://wa.me/<?php echo esc_attr( da_opt( 'da_whatsapp' ) ); ?>?text=Hi%20Delhi%20Apostille" target="_blank" rel="noopener">&#128172; WhatsApp Us</a>

<?php wp_footer(); ?>
</body>
</html>
