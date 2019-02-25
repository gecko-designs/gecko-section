import { __ } from '@wordpress/i18n';
// import { Fragment } from '@wordpress/element';
export default function({value, onSelect}){
	const selected = (next) => {
		return onSelect(next);
	}
	const types = [
		{ slug: 'solid', name: 'Solid', icon: <span class="dashicons dashicons-admin-appearance"></span>},
		{ slug: 'image', name: 'Image', icon: <span class="dashicons dashicons-format-image"></span>},
		// { slug: 'video', name: 'Video', icon: <span class="dashicons dashicons-format-video"></span>},
	]
	return(
		<div className="wp-block-gecko-grid-layout-type-select">
			<p>Choose a background type.</p>
			{types.map((type) => {
				let isSelected = "";
				if(type.slug === value){
					isSelected = "wp-block-gecko-grid-layout-type-select__item--selected"
				}
				return (
					<div className={`wp-block-gecko-grid-layout-type-select__item ${isSelected}`} onClick={()=> selected(type.slug)}>{type.icon}{type.name}</div>
				);
			})}
		</div>
	);
}