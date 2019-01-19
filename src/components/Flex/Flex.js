import { createElement } from 'glamor/react';

/***
 * Flex
 * flexDirection - Set the axis: row, row-reverse, column, column-reverse
 * flexGrow - Determines if an item will automatically stretch to fill the box
 * flexShrink - Determines if an item should shrink to accommodate space
 * flexBasis - Determines the default/common size of items based on neg. space
 * alignItems - Alignment of items on the flex axis, flex-start/flex-end/center
 * justifyContent - Alignment of items on the main content axis, flex-start/flex-end/center/
 *                  space-around/space-between/space-evenly
 */

const Flex = ({
    basis = 'auto',
    children, 
    direction = 'row',
    grow = 0,
    halign = 'flex-start',
    shrink = 1,
    type = 'div',
    valign = 'flex-start',
    ...rest
}) => 
    createElement(
        type,
        {
            css: {
                display: 'flex',
                flexDirection: direction,
                flexGrow: grow,
                flexShrink: shrink,
                flexBasis: basis,
                justifyContent: direction === 'row' ? halign : valign,
                alignItems: direction === 'row' ? halign : valign,
            },
            ...rest
        },
        children,
    );

export default Flex;