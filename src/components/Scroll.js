import React from 'react';
import '../css/Scroll.css'


const Scroll = (props) => {
    return <div className={'container-scroll-wrapper'}> { props.children } </div>
}

export default Scroll;