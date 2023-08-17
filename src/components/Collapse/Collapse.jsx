import React, { useRef, useState } from 'react';

function Collapse(props) {
    const [isContentVisible, showContent] = useState(false);
    const [isRotated, arrowRotated] = useState(false);
    const [drodpownSize, setDropdownSize] = useState("48px"); // Header Size
    const refHeader = useRef();
    const refContent = useRef();

    const dropContent = () => {
        showContent(!isContentVisible);
        arrowRotated(!isRotated);

        const headerSize = refHeader.current.getBoundingClientRect().height;
        const contentSize = refContent.current.getBoundingClientRect().height;
        const totalSize = headerSize + contentSize;

        if (!isContentVisible) {
          setDropdownSize(`${totalSize}px`);
          setTimeout(() => {
            setDropdownSize('auto');
          }, 200);
        } else {
          setDropdownSize(`${totalSize}px`);
          setTimeout(() => {
            setDropdownSize(`${headerSize}px`);
          }, 1);
        }
      };

    return (
      <div className="dropdown" style={{ height: drodpownSize }}>
        <div ref={refHeader} className="dropdown-header">
          <h2>{props.text}</h2>
          <img onClick={dropContent} src={props.img} className={`arrow ${isRotated ? 'rotate' : ''}`} alt="arrow" />
        </div>
        <p ref={refContent} className='dropdown-content'>{props.content}</p>
      </div>
    );
  }

  export default Collapse;
