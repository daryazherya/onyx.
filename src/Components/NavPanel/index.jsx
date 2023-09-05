import './index.scss';
// import { useState } from 'react';
import { Resizable } from 're-resizable';
import PanelWithList from './PanelWithList';
import { useContext } from 'react';
import { AppContext } from '../App';


const NavPanel = () => {
	const {width, setWidth} = useContext(AppContext);

    return ( 
			<Resizable
			maxWidth={250}
			minWidth={80}
			size={{width}}
			onResizeStop={(e, direction, ref, d) => {
					setWidth(width + d.width);
				}}
				>
			<PanelWithList width={width}/>
			</Resizable>
     );

}
 
export default NavPanel;