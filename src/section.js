/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	G,
	SVG,
	Path,
	SelectControl,
	ToggleControl,
	Toolbar
} from '@wordpress/components';
import {
	InnerBlocks,
	InspectorControls,
	BlockControls
} from '@wordpress/editor';
import BackgroundImage from './BackgroundImage';

/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'dmp/grid-item'.
 *
 * @constant
 * @type {string[]}
*/
export const name = 'gecko/section';

export const settings = {
	title: __( 'Section' ),

	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M4,18 L20,18 L20,7 L4,7 L4,16 L20,16 L20,18 L4,18 Z M2,5.125 C2,3.95139491 2.8954305,3 4,3 L20,3 C21.1045695,3 22,3.95139491 22,5.125 L22,17.875 C22,19.0486051 21.1045695,20 20,20 L4,20 C2.93492401,20 2.06429899,19.1154224 2.00340277,18 L2,5.125 Z" /></G></SVG>,

	category: 'layout',

	description: __( 'Full width sections wrappers for themes that support them.' ),

	supports: {
		align: [ 'wide', 'full' ],
		html: false,
	},

	deprecated: [],

	attributes: {
		size: { type: 'string'},
		align: { type: 'string', default: 'top'},
		minHeight: {type: 'string', default: ''},
		background: {type: 'string'},
		contrast: {type: 'boolean', default: false},
	},
	styles: [
		{ name: 'default', label: __( 'Default'), isDefault: true },
	],

	deprecated: [
		{
			migrate(){},
			save() {
				return <InnerBlocks.Content />;
			},
		}
	],

	edit: ({attributes, setAttributes, insertBlocksAfter, className}) => {
		const {size, background, minHeight, align, contrast} = attributes;
		const style = {
			background: background,
			minHeight: minHeight,
		}
		return ([
			<InspectorControls>
				<PanelBody title={__("Settings")}>
					<SelectControl
						label={__("Row Width")}
						value={ size }
						options={ [
							{ value: 'full', label: 'Full' },
							{ value: 'lg', label: 'Large' },
							{ value: 'md', label: 'Medium' },
							{ value: 'sm', label: 'Small' },
						] }
						onChange = {
							(size) => {
								setAttributes({
									size: size,
								})
							}
						}
					/>
					<SelectControl
						label="Vertical Align"
						value={ align }
						options={ [
							{ value: 'top', label: 'Top' },
							{ value: 'center', label: 'Center' },
							{ value: 'bottom', label: 'Bottom' },
						] }
						onChange = {
							(v) => {
								setAttributes({
									align: v,
								})
							}
						}
					/>
					<label for='min-height'>Minimum Height</label>
					<input 
						type='text'
						name='min-height'
						value={ minHeight }
						onChange = {
							(e) => {
								setAttributes({
									minHeight: e.target.value,
								})
							}
						}
					/>
				</PanelBody>
				<PanelBody title="Fills">
					<ToggleControl
						label={__("Add Contrast?")}
						help={__("Some themes may support contrasting backgrounds.")}
						checked={contrast}
						onChange={(v) => setAttributes({ contrast: v })}
					/>
					<BackgroundImage 
						label={__("Background")}
						value={ background }
						onChange={(v) => setAttributes({background: v})}
					/>
				</PanelBody>
			</InspectorControls>,
			<BlockControls>
				<Toolbar controls={[
					{
						icon: 'align-full-width',
						title: __('Full Width'),
						isActive: size === 'full',
						onClick: () => setAttributes({size: 'full'}),
					},
					{
						icon: 'align-wide',
						title: __('Wide'),
						isActive: size === 'lg',
						onClick: () => setAttributes({size: 'lg'}),
					},
					{
						icon: 'align-center',
						title: __('Medium'),
						isActive: size === 'md',
						onClick: () => setAttributes({size: 'md'}),
					},
					{
						icon: 'align-center',
						title: __('Narrow'),
						isActive: size === 'sm',
						onClick: () => setAttributes({size: 'sm'}),
					},
				]}>
				</Toolbar>
			</BlockControls>,
			<div className={`gecko-section ${className} is-size-${size} is-align-${align} ${(contrast)? 'add-contrast': ''}`} style={style}>
				<div className="gecko-section__inner">
					{
						('undefined' !== typeof insertBlocksAfter) &&
						<InnerBlocks />
					}
				</div>
			</div>
		]);
	},

	save: () => {
		return(<div><InnerBlocks.Content /></div>);
	}
};
