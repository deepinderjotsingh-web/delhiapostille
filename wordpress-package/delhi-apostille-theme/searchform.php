<?php if ( ! defined( 'ABSPATH' ) ) { exit; } ?>
<form role="search" method="get" class="da-search" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<input type="search" name="s" placeholder="Search&hellip;" value="<?php echo get_search_query(); ?>" />
	<button type="submit">Search</button>
</form>
