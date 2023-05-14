import styles from './ContentSector.module.css';
import { useEffect, useRef, useState } from 'react';

export const ContentSector = ({ leftWide, children, setPosition, triggeredClass }) => {

  const getStylesClass = (isLeft) => {
    return `${
      isLeft === leftWide 
        ? styles.wide 
        : styles.narrow
    } ${triggeredClass}`
  };

  const trigger = useRef(null);


  useEffect(()=>{
    setPosition(trigger.current.getBoundingClientRect().top)
  },[])




  return (
    <li ref={trigger} className={styles.ContentSector}>
      <div className={getStylesClass(true)}>
        {children[0]}
      </div>
      <div className={getStylesClass(false)}>
        {children[1]}
      </div>
    </li>
  );
};

ContentSector.defaultProps = {
  leftWide: 0,
  children: []
};