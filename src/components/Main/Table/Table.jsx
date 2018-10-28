import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './table.css';

class Table extends React.Component {
    render () {
        return <div className='table'>
            <div>
                <div className='text'>A0</div>
                <div>B0</div>
            </div>
        </div>;
    }
}

export default CSSModules(Table, styles);