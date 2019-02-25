import TypeSelect from './type-select';
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	RangeControl,
	Button,
	G,
	SVG,
	Path
} from '@wordpress/components';
import {
	InnerBlocks,
	MediaUpload,
	InspectorControls,
	ColorPalette,
	getColorClassName,
	getColorObjectByColorValue,
	withColors,
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
		type: {
			type: 'string', //solid, image, ?video?
			default: 'solid',
		},
		bgMedia: {
			type: 'object',
		},
		opacity: {
			type: 'number',
			default: 0.7,
		},
		bgColor: {
			type: 'string',
		},
	},

	styles: [
		{ name: 'full', label: __( 'Full'), isDefault: true },
		{ name: 'lg', label: __( 'Large') },
		{ name: 'md', label: __( 'Medium') },
		{ name: 'sm', label: __( 'Small') },
	],
	edit: ({attributes,setAttributes, insertBlocksAfter}) => {
		const {
			bgMedia,
			opacity,
			bgColor,
			type,
			className,
		} = attributes;
		let bgImage;
		if (bgMedia && bgMedia.type === 'image') {
			bgImage = `url("${bgMedia.url}")`;
		}
		const styles = {
			'--background-color': bgColor,
			'--opacity': opacity,
		};
		if(type === 'image' || type === 'video'){
			styles.backgroundImage = bgImage;
		}

		return ([
			<InspectorControls>
				<PanelBody title="Background Settings">
					<TypeSelect 
						onSelect = {(next) => {
								setAttributes({
									type: next,
								});
							}}
						value={type}
					/>
					<hr />
					{type === 'image' && <MediaUpload
						onSelect={(value) => {
							setAttributes({
								bgMedia: value,
							});
						}}
						type={['image']}
						value={(bgMedia)? bgMedia.id: null }
						render={({ open }) => ([
							<div>
								<Button className={bgMedia ? 'image-button' : 'button button-large'} onClick={open}>
									{'Choose Background'}
								</Button>

								{bgMedia &&
									<Button className='button button-small' onClick={() => {
										setAttributes({
											bgMedia: null,
										});
									}}>
										{'Remove Background'}
									</Button>
								}
							</div>
						])}
					/>}
					{type === 'image' && <RangeControl
						label="Overlay Opacity"
						value={opacity}
						onChange={(value) => { setAttributes({ opacity: value }); }}
						min="0"
						max="0.9"
						step="0.1"
					/>}
					<p></p>
					<div>
						<ColorPalette
							label='Background Color'
							value={(bgColor) ? bgColor : undefined}
							onChange={(value) => { 
								setAttributes({ bgColor: value }); 
							}}
						/>
					</div>
					<p></p>
				</PanelBody>
			</InspectorControls>,
			<div className={`gecko-section-editor ${className} gecko-section-editor--${type}`} style={styles}>
				<div className="gecko-section-editor__content">
					{
						('undefined' !== typeof insertBlocksAfter) &&
						<InnerBlocks />
					}
				</div>
			</div>
		]);
	},

	save: () => {
		return (
			<div>
				<InnerBlocks.Content />
			</div>
		);
	}
};
