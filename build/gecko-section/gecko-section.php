<?php
/**
 * Plugin Name: Gecko Section
 * Plugin URI:  https://github.com/gecko-designs/gecko-section
 * Description: Section block for full row layouts in themes that support gutenberg full-width blocks.
 * Version: 1.0.1
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
		// If Post has block then enqueue script
		add_action( 'the_post', function($post){
			if(has_block( 'gecko/section', $post )){
				wp_enqueue_style('gecko-section');
			}
		} );
		// Initialize custom blocks
		// Dynamically import blocks in blocks folder
		register_block_type(
			"gecko/section",
			[
				"render_callback" => [$this, "render_callback"],
				// "style" => "gecko-section",
				"script" => "",
				"editor_style" => "gecko-section-editor",
				"editor_script" => "gecko-section-editor",
			]);
	}

	/**
	 * If the block is dynamic you would render the template here.
	 */
	public function render_callback( $attributes, $content ) {
		// Defaults and attributes
		// Setting to false unless needed because all styles do not need to be inlined
		$defaults = array(
			'size' => false,
			'className' => false,
		);
		// Add a filter to hook into the default args
		$defaults = apply_filters( 'gecko/section/defaults', $defaults, $attributes );
		$atts = wp_parse_args( $attributes, $defaults );

		$classNames = array('gecko-section');
		if($atts['className']) $classNames[] = $atts['className'];
		if($atts['size']) $classNames[] = 'is-size-'.$atts['size'];
		// Add a filter to hook into classNames
		$classNames = apply_filters( 'gecko/section/class', $classNames, $attributes );

		// $styles = array();
		// // Add a filter to hook into the inine styles $args = ($styles, $atts)
		// $styles = apply_filters( 'gecko/section/style', $styles, $attributes );

		// $styleString = '';
		// foreach ($styles as $key => $value) {
		// 	if($value) $styleString .= $key.':'.$value.';';
		// }
		
		return sprintf('<div class="%s"><div class="gecko-section__inner">%s</div></div>', implode(' ', $classNames), $content);
	}

}