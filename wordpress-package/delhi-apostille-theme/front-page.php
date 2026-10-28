<?php
/**
 * Front page template.
 * @package Delhi_Apostille
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();
?>

<!-- HERO -->
<section class="da-hero">
	<div class="da-container da-hero-grid">
		<div class="da-hero-copy">
			<span class="da-pill">&#127963; Ministry of External Affairs Authorised</span>
			<h1 class="da-hero-title"><?php echo wp_kses_post( da_opt( 'da_hero_title' ) ); ?></h1>
			<p class="da-hero-sub"><?php echo wp_kses_post( da_opt( 'da_hero_sub' ) ); ?></p>
			<div class="da-hero-actions">
				<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="da-btn da-btn-gold">Get Free Quote &rarr;</a>
				<a href="<?php echo esc_url( get_post_type_archive_link( 'service' ) ); ?>" class="da-btn da-btn-outline">Explore Services</a>
			</div>
			<div class="da-trust-grid">
				<?php
				$trust = array( 'MEA Authorised Document Processing', 'ISO Certified &amp; Government Recognised', '50,000+ Documents Attested', 'Free Pickup &amp; Delivery in Delhi NCR' );
				foreach ( $trust as $t ) { echo '<div class="da-trust"><span>&#10003;</span>' . $t . '</div>'; }
				?>
			</div>
		</div>
		<div class="da-hero-media">
			<div class="da-hero-img"><img src="<?php echo esc_url( da_img( 'hero-apostille.jpg' ) ); ?>" alt="Official apostille certificate with gold seal" /><span class="da-hero-tag">&#128274; 100% Genuine MEA Apostille</span></div>
		</div>
	</div>
</section>

<!-- SERVICES -->
<section class="da-section">
	<div class="da-container">
		<div class="da-head da-head--center">
			<span class="da-eyebrow">Unlocking Global Legalisation</span>
			<h2>Our Apostille &amp; Attestation Services</h2>
			<span class="da-rule"></span>
		</div>
		<div class="da-cards">
			<?php
			$q = new WP_Query( array( 'post_type' => 'service', 'posts_per_page' => 6, 'orderby' => 'menu_order', 'order' => 'ASC' ) );
			if ( $q->have_posts() ) :
				while ( $q->have_posts() ) : $q->the_post(); ?>
					<a class="da-card" href="<?php the_permalink(); ?>">
						<div class="da-card-media"><?php echo has_post_thumbnail() ? get_the_post_thumbnail( null, 'medium_large' ) : '<img src="' . esc_url( da_img( 'apostille-stamp.jpg' ) ) . '" alt="" />'; ?></div>
						<div class="da-card-body">
							<h3><?php the_title(); ?></h3>
							<p><?php echo esc_html( get_the_excerpt() ); ?></p>
							<span class="da-readmore">Read More &rarr;</span>
						</div>
					</a>
				<?php endwhile; wp_reset_postdata();
			else :
				echo '<p class="da-note">Add Services from the WordPress admin (Services &rarr; Add New) or import the provided XML file.</p>';
			endif; ?>
		</div>
	</div>
</section>

<!-- PROCESS -->
<section class="da-section da-section--navy">
	<div class="da-container">
		<div class="da-head da-head--center da-head--light">
			<span class="da-eyebrow">How It Works</span>
			<h2>A Simple 4-Step Process</h2>
			<span class="da-rule"></span>
		</div>
		<div class="da-steps">
			<?php
			$steps = array(
				array( '01', 'Submit Documents', 'Share a digital scan or request free doorstep courier pickup anywhere in Delhi NCR.' ),
				array( '02', 'State &amp; Dept. Verification', 'Verification from SDM, HRD or Home Department as required by jurisdiction.' ),
				array( '03', 'MEA Apostille / Embassy Stamp', 'Official apostille sticker or embassy legalisation affixed by our MEA team.' ),
				array( '04', 'Secure Express Delivery', 'Tracked air delivery of your verified original documents back to your address.' ),
			);
			foreach ( $steps as $s ) {
				echo '<div class="da-step"><span class="da-step-num">' . $s[0] . '</span><h3>' . $s[1] . '</h3><p>' . $s[2] . '</p></div>';
			}
			?>
		</div>
	</div>
</section>

<!-- DEPARTMENTS -->
<section class="da-section">
	<div class="da-container">
		<div class="da-head da-head--center">
			<span class="da-eyebrow">Working Process</span>
			<h2>Departments We Work With</h2>
			<span class="da-rule"></span>
		</div>
		<div class="da-depts">
			<?php
			$depts = array(
				array( 'MEA India', 'Final apostille &amp; attestation authority of the Government of India.' ),
				array( 'SDM Delhi', 'State-level authentication of personal &amp; educational documents.' ),
				array( 'HRD', 'State education department verification for academic certificates.' ),
				array( 'Home Dept.', 'State Home / GAD attestation for personal certificates.' ),
				array( 'Chamber of Commerce', 'Certification of commercial &amp; trade documents.' ),
				array( 'Embassies', 'Embassy legalisation for non-Hague countries.' ),
			);
			foreach ( $depts as $d ) {
				echo '<div class="da-dept"><span class="da-dept-icon">&#127963;</span><h3>' . $d[0] . '</h3><p>' . $d[1] . '</p></div>';
			}
			?>
		</div>
	</div>
</section>

<!-- STATS -->
<section class="da-stats">
	<div class="da-container da-stats-grid">
		<?php
		$stats = array( array( '100+', 'Countries Served' ), array( '25+', 'Collection Centres' ), array( '50,000+', 'Happy Customers' ), array( '1,20,000+', 'Certificates Attested' ) );
		foreach ( $stats as $st ) { echo '<div class="da-stat"><div class="da-stat-num">' . $st[0] . '</div><div class="da-stat-label">' . $st[1] . '</div></div>'; }
		?>
	</div>
</section>

<!-- WHY CHOOSE -->
<section class="da-section">
	<div class="da-container da-why">
		<div class="da-why-media"><img src="<?php echo esc_url( da_img( 'hero-apostille.jpg' ) ); ?>" alt="Professional consultation" /></div>
		<div class="da-why-copy">
			<span class="da-eyebrow">Why Choose Us</span>
			<h2>The Delhi Apostille Advantage</h2>
			<span class="da-rule"></span>
			<div class="da-why-grid">
				<?php
				$why = array(
					array( 'Real-Time Tracking', 'Track every stage of your apostille journey with live updates.' ),
					array( 'Free Pickup &amp; Delivery', 'Complimentary doorstep collection across Delhi NCR.' ),
					array( '100% Genuine', 'Every apostille &amp; stamp is government-issued and verifiable.' ),
					array( 'Express Processing', 'Fast-track processing with the shortest turnaround times.' ),
					array( 'Dedicated Support', 'A dedicated case manager for every client, six days a week.' ),
					array( 'Confidential &amp; Insured', 'Originals handled securely and fully insured in transit.' ),
				);
				foreach ( $why as $w ) { echo '<div class="da-why-item"><span>&#10003;</span><div><h3>' . $w[0] . '</h3><p>' . $w[1] . '</p></div></div>'; }
				?>
			</div>
		</div>
	</div>
</section>

<!-- COUNTRIES -->
<section class="da-section da-section--navy da-countries">
	<div class="da-container">
		<div class="da-head da-head--center da-head--light">
			<span class="da-eyebrow">Global Reach</span>
			<h2>Popular Countries We Serve</h2>
			<span class="da-rule"></span>
		</div>
		<div class="da-chips">
			<?php
			$countries = array( 'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'China', 'United States', 'United Kingdom', 'Germany', 'Italy', 'Netherlands', 'Australia' );
			foreach ( $countries as $c ) { echo '<span class="da-chip">&#127758; ' . esc_html( $c ) . '</span>'; }
			?>
		</div>
	</div>
</section>

<!-- BLOG -->
<section class="da-section">
	<div class="da-container">
		<div class="da-head da-head--between">
			<div>
				<span class="da-eyebrow">Our Blog &amp; News</span>
				<h2>Latest Articles &amp; Guides</h2>
				<span class="da-rule"></span>
			</div>
			<a href="<?php echo esc_url( get_permalink( get_option( 'page_for_posts' ) ) ); ?>" class="da-btn da-btn-outline">View All &rarr;</a>
		</div>
		<div class="da-cards">
			<?php
			$posts = new WP_Query( array( 'post_type' => 'post', 'posts_per_page' => 3 ) );
			if ( $posts->have_posts() ) :
				while ( $posts->have_posts() ) : $posts->the_post(); ?>
					<a class="da-card" href="<?php the_permalink(); ?>">
						<div class="da-card-media"><?php echo has_post_thumbnail() ? get_the_post_thumbnail( null, 'medium_large' ) : '<img src="' . esc_url( da_img( 'degree.jpg' ) ) . '" alt="" />'; ?></div>
						<div class="da-card-body">
							<span class="da-date"><?php echo esc_html( get_the_date() ); ?></span>
							<h3><?php the_title(); ?></h3>
							<p><?php echo esc_html( get_the_excerpt() ); ?></p>
						</div>
					</a>
				<?php endwhile; wp_reset_postdata();
			else : echo '<p class="da-note">Publish blog posts or import the provided XML to populate this section.</p>'; endif; ?>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="da-cta">
	<div class="da-container da-cta-inner">
		<h2>Ready to Get Your Documents Apostilled?</h2>
		<p>Speak to our MEA-authorised experts for a free consultation and transparent quote.</p>
		<div class="da-cta-actions">
			<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="da-btn da-btn-gold">Get a Free Quote</a>
			<a href="tel:<?php echo esc_attr( da_opt( 'da_phone_raw' ) ); ?>" class="da-btn da-btn-ghost">&#9742; <?php echo esc_html( da_opt( 'da_phone' ) ); ?></a>
		</div>
	</div>
</section>

<?php get_footer(); ?>
