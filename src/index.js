/**
 * WordPress dependencies
 */
import {registerBlockType} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import * as section from './section';

registerBlockType(section.name, section.settings);
