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
import { Fragment } from '@wordpress/element';
import {
	compose
} from '@wordpress/compose';

import {
	InnerBlocks,
	MediaUpload,
	InspectorControls,
	ColorPalette,
	getColorClassName,
	withColors,
} from '@wordpress/editor';
import BoxModel from './box-model.jsx';


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

	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M4,13 L8,13 L8,10 L4,10 L4,13 Z M4,15 L4,18 L8,18 L8,15 L4,15 Z M10,13 L14,13 L14,10 L10,10 L10,13 Z M10,15 L10,18 L14,18 L14,15 L10,15 Z M20,13 L20,10 L16,10 L16,13 L20,13 Z M20,15 L16,15 L16,18 L20,18 L20,15 Z M4,8 L8,8 L8,5 L4,5 L4,8 Z M10,8 L14,8 L14,5 L10,5 L10,8 Z M20,8 L20,5 L16,5 L16,8 L20,8 Z M4,3 L20,3 C21.1045695,3 22,3.95139491 22,5.125 L22,17.875 C22,19.0486051 21.1045695,20 20,20 L4,20 C2.8954305,20 2,19.0486051 2,17.875 L2,5.125 C2,3.95139491 2.8954305,3 4,3 Z" /></G></SVG>,

	category: 'layout',

	description: __( 'Full width sections wrappers for themes that support them.' ),

	supports: {
		align: [ 'wide', 'full' ],
		html: false,
	},

	deprecated: [],

	attributes: {
		backgroundMedia: {
			type: 'object',
		},
		overlayOpacity: {
			type: 'number',
		},
		backgroundColor: {
			type: 'string',
		},
		boxModel: {
			type: 'object',
			default: {
				position: { top: null, left: null, right: null, bottom: null, },
				margin: { top: null, left: null, right: null, bottom: null, },
				padding: { top: null, left: null, right: null, bottom: null, },
			},
		},
		innerMaxWidth: {
			type: 'number',
			default: null,
		},
	},
	edit: compose([withColors('backgroundColor')])( (props) => {
		const {
			boxModel,
			maxWidth,
			backgroundMedia,
			overlayOpacity,
		} = props.attributes;
		const {
			className,
			backgroundColor,
			setBackgroundColor,
		} = props;
		const backgroundClass = (backgroundColor && backgroundColor.slug) ? `${className}--${backgroundColor.slug}` : undefined;
		let backgroundImage = undefined;
		if (backgroundMedia && backgroundMedia.type === 'image') {
			backgroundImage = `url("${backgroundMedia.url}")`;
		}
		const outterStyle = {
			marginTop: boxModel.margin.top,
			marginRight: boxModel.margin.right,
			marginBottom: boxModel.margin.bottom,
			marginLeft: boxModel.margin.left,
			paddingTop: boxModel.padding.top,
			paddingRight: boxModel.padding.right,
			paddingBottom: boxModel.padding.bottom,
			paddingLeft: boxModel.padding.left,
			backgroundColor: (backgroundColor) ? undefined : customBackgroundColor,
			backgroundImage: backgroundImage,
		};
		const innerStyle = {
			maxWidth: maxWidth,
		};
		const overlayStyle = {
			opacity: overlayOpacity,
		};
		return ([
			<InspectorControls>
				<PanelBody title="Background Settings">
					<MediaUpload
						onSelect={(value) => {
							props.setAttributes({
								backgroundMedia: value,
							});
						}}
						type={['image', 'video']}
						value={(backgroundMedia)? backgroundMedia.id: null }
						render={({ open }) => ([
							<div>
								<Button className={backgroundMedia ? 'image-button' : 'button button-large'} onClick={open}>
									{'Choose Background'}
								</Button>

								{backgroundMedia &&
									<Button className='button button-small' onClick={() => {
										props.setAttributes({
											backgroundMedia: null,
										});
									}}>
										{'Remove Background'}
									</Button>
								}
							</div>
						])}
					/>
					{backgroundMedia && <RangeControl
						label="Overlay Opacity"
						value={overlayOpacity}
						onChange={(value) => { props.setAttributes({ overlayOpacity: value }); }}
						min="0"
						max="0.9"
						step="0.1"
					/>}
					<p></p>
					<div>
						<ColorPalette
							label='Background Color'
							value={(backgroundColor) ? backgroundColor.color : undefined}
							onChange={setBackgroundColor}
						/>
					</div>
					<p></p>
				</PanelBody>
				<PanelBody title="Properties">
					<BoxModel
						label="Box Model"
						value={boxModel}
						onChange={(value) => { props.setAttributes({ boxModel: value }); }}
					/>
					<RangeControl
						label="Max Width"
						value={maxWidth}
						onChange={(value) => { props.setAttributes({ maxWidth: value }); }}
						min="640"
						max="1600"
					/>
				</PanelBody>
			</InspectorControls>,
			<section style={outterStyle} className={`${className} ${backgroundClass}`}>
				{backgroundMedia && <div class={`${className}__overlay`} style={overlayStyle} />}
				<div className={`${className}__inner`} style={innerStyle}>
					<InnerBlocks />
				</div>
			</section>
		]);
	}),

	save() {
		return (
			<div>
				<InnerBlocks.Content />
			</div>
		);
	},
};
