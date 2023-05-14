import styles from './Home.module.css';
import animated from './animated.module.css';
import { ContentSector } from '../../other/ContentSector/ContentSector';
import { useEffect, useState } from 'react';

export const Home = () => {

  const [sectorPositions, setSectorPositions] = useState([0, 0, 0]);
  const [triggeredSector, setTriggeredSector] = useState(0);


  const getSectorPosition = (index) => (rectTop) => {
    let temp = sectorPositions;
    temp[index] = rectTop;
    setSectorPositions(temp);
  };


  const hammer = <div className={animated.hammer}>
    <div className={animated.head}></div>
    <div className={animated.handle}></div>
    <div className={animated.offset}></div>
  </div>;

  const anvil = <div className={animated.anvil}>
    <div className={animated.leftHorn}></div>
    <div className={animated.body}></div>
    <div className={animated.rightHorn}></div>
  </div>

  useEffect(() => console.log(triggeredSector), [triggeredSector]);

  window.onscroll = () => {

    sectorPositions.forEach((position, index) => {
      if (Math.abs(window.scrollY +window.innerHeight/2 - position) <= 20) {
        setTriggeredSector(index);
        return;
      }
    });

  };


  return (
    <ul className={styles.Home}>
      <ContentSector
        leftWide={true}
        setPosition={getSectorPosition(0)}
        triggeredClass={triggeredSector === 0 ? animated.triggered0 : ''}>
        <div>aaaaaaaaa</div>
        <div>bbbbbbb</div>

      </ContentSector>

      <ContentSector
        leftWide={false}
        setPosition={getSectorPosition(1)}
        triggeredClass={triggeredSector === 1 ? animated.triggered1 : ''}>
        <div>ccccccc</div>
        <div>ddddddddd</div>
      </ContentSector>

      <ContentSector
        leftWide={true}
        setPosition={getSectorPosition(2)}
        triggeredClass={triggeredSector === 2 ? animated.triggered2 : ''}>

        <div>ffffffff</div>
        {hammer}
      </ContentSector>
    </ul>
  );
};