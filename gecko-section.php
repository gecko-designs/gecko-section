<?php
/**
 * Plugin Name: Gecko Section
 * Description: Grid Section block for creating layouts in gutenberg.
 * Version: 1.0.0
 * Author: Gecko Designs
 * Author URI: https://geckodesigns.com
 * Text Domain: gecko-section
 * License: GPLv2 or later
 */

defined("ABSPATH") || exit;

add_action( "plugins_loaded", function(){
	new GeckoSection();
} );


class GeckoSection {
	public function __construct() {
		add_action("init", [$this, "register_block_type"]);
	}

	public function register_block_type() {
		wp_register_script(
			"gecko-section-editor",
			plugins_url("/dist/editor.bundle.js", __FILE__),
			[
				'jquery',
				'wp-blocks',
				'wp-editor',
				'wp-element',
				'wp-i18n'
			],
			filemtime( plugin_dir_path(__FILE__) . "dist/editor.bundle.js" )
		);
		wp_register_style(
			"gecko-section-editor",
			plugins_url("/dist/editor-styles.css", __FILE__),
			[],
			filemtime( plugin_dir_path(__FILE__) . "dist/editor-styles.css" )
		);
		wp_register_style(
			"gecko-section",
			plugins_url("/dist/style.css", __FILE__),
			[],
			filemtime( plugin_dir_path(__FILE__) . "dist/style.css" )
		);
		// Initialize custom blocks
		// Dynamically import blocks in blocks folder
		register_block_type(
			"gecko/section",
			[
				"render_callback" => [$this, "render_callback"],
				"style" => "gecko-section",
				"script" => "",
				"editor_style" => "gecko-section-editor",
				"editor_script" => "gecko-section-editor",
			]);
	}

	/**
	 * If the block is dynamic you would render the template here.
	 */
	public function render_callback( $attributes, $content ) {
		// Sort of a hack at the moment.
		$columns = (isset($attributes['columns'])) ? "grid-template-columns: repeat(".$attributes['columns'].", minmax(100px, 1fr));" : "";
		$rows = (isset($attributes['columns'])) ? "grid-auto-rows: minmax(calc(100vw/".$attributes['columns']."), auto);" : "";
		$gap = (isset($attributes['gap'])) ? "grid-gap:".$attributes['gap']."rem;" : "";
		$styles = 'style="'.$columns.$rows.'"';
		$class = '"wp-block-gecko-section"';
		$index = strpos( $content, $class);
		if($index === false) {
			return  $content;
		}
		return substr_replace($content, $class.$styles, $index, strlen($class));
	}

}