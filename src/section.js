/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	G,
	SVG,
	Path,
	SelectControl
} from '@wordpress/components';
import {
	InnerBlocks,
	InspectorControls,
} from '@wordpress/editor';


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
		size: {
			type: 'string', //solid, image, ?video?
		},
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
		const {size} = attributes;
		return ([
			<InspectorControls>
				<PanelBody title="Settings">
					<SelectControl
						label="Row Width"
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
				</PanelBody>
			</InspectorControls>,
			<div className={`gecko-section ${className} is-size-${size}`} >
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
