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
		// $image = wp_get_attachment_image_url($attributes[bgMedia],'full');
		$bgMedia = (isset($attributes['bgMedia']['url'])) ? "background-image: url(".$attributes['bgMedia']['url'].");": "";
		$bgColor = (isset($attributes['bgColor'])) ? "--background-color: ".$attributes['bgColor'].";" : "";
		$opacity = (isset($attributes['opacity'])) ? "--opacity: ".$attributes['opacity'].";" : "";
		$type = isset($attributes['type'])? $attributes['type']: false;
		$styles = $bgColor;
		$styles .= ($type === 'image') ? $bgMedia : '';
		$styles .= ($type === 'image') ? $opacity : '';
		$class = 'gecko-section';
		$class .= (isset($attributes['className']))? ' gecko-section--'.$attributes['className'] : '';
		$class .= ($type)? ' gecko-section--'.$attributes['type'] : '';
		// $encoded = json_encode($attributes, JSON_HEX_APOS|JSON_HEX_QUOT);
		return sprintf('<div class="%s" style="%s">%s</div>',
		$class, $styles, $content);
	}

}