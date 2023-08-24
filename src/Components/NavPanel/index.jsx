import './index.scss';
import { useState } from 'react';
import { Resizable } from 're-resizable';
import PanelWithText from './PanelWithText';


const NavPanel = () => {
	const [width, setWidth] = useState(300);

    return ( 
			<Resizable
			size={{ width}}
			onResizeStop={(e, direction, ref, d) => {
				setWidth(width + d.width);}}
				>
				<PanelWithText/>
			</Resizable>
     );

}
 
export default NavPanel;