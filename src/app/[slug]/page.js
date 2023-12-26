'use client';

import Filter from '../inner/components/filter/Filter'
import Privilege from './components/privilege/Privilege'
import Consultation from './components/consultation/Consultation'
import Content from './components/content/Content'
import React, { useEffect, useState } from 'react'
import MediaQuery from 'react-responsive'
import { Carousel } from 'react-responsive-carousel';

import Image from 'next/image';

import Banner from '../components/general/banner/Banner'
import styles from './page.module.css'
import banner_styles from '../components/general/banner/banner.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Skeleton from 'react-loading-skeleton';
import { Asap_Condensed } from 'next/font/google';







  



export default function Page({ params }) {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState({});
  const [photos, setPhotos] = useState([]);
  const [chess, setChess] = useState([]);
  const [section, setSection] = useState("floats");
  const [filteredLayouts, setFilteredLayouts] = useState([]);
  const [house, setHouse] = useState(null);
  const [porche, setPorche] = useState(0);




  const oppenDescription = () => {
    setData({
      data: {
        ...data,
        descriptionOpened: true,
        displayDescription: data.description
      }
    })
  }


  const changeSection = (section) => {
    setSection(section)
  }



  const filterLayouts = (layouts) => {
    setFilteredLayouts(layouts);
  }

  const changeHouse = (house) => {
    setHouse(house);
  }

  const changePorche = (porche) => {
    setPorche(porche);
  }



  useEffect( () => {
      fetch(`https://tyumen.citidom.com/housing-estate/${params.slug}/public`).then(res => res.json()).then(result => {
        setData(result);
        setPhotos(result.photos);
        console.log('photos', photos);
      });
      fetch(`https://tyumen.citidom.com/housing-estate/${params.slug}/chess`).then(res => res.json()).then(result => {
        setChess(result.houses);
        setHouse(result.houses[0]);
        console.log('chess', chess);
      });

      setMounted(true);
  }, []);

  return (
    <>
      <div className={`${banner_styles.banner} ${styles.center} ${banner_styles.banner__big}`}>
          <div className={banner_styles.banner__in}>
            { photos.length > 0 ? 
              <Carousel style={{height: '100%'}} dynamicHeight={true} emulateTouch={true} infiniteLoop={true} showArrows={false} autoPlay={true} showStatus={false}>
                {photos.map((image, key) => (
                  <img src={`https://files.citidom.com/${image.name}`} key={key} alt='Banner' width={1140} height={513} style={{height: '513px'}} />
                ))}
              </Carousel> : <Skeleton style={{display: 'block'}} width={'100%'} height={'100%'} />
            }
          </div>
      </div>
      <main className={`${styles.main} ${styles.center}`}>
        <div className={styles.left}>
          {
            mounted ? 
              <>
                <Filter
                  change={changeSection}
                  layouts={filteredLayouts}
                  filteredLayouts={filteredLayouts}
                  filter={filterLayouts}
                  chess={chess}
                  section={section}
                  setHouse={changeHouse}
                  setPorche={changePorche}
                  data={data}
                  house={house}
                  porche={porche}
                  photoIndex={0}
                  setPhoto={null}
                /> 
                <Privilege data={data} />
              </>
            : false
            
          }
        </div>
        <div className={styles.content}>
          {/* <Content
            data={this.state.data}
            section={this.state.section}
            layouts={filteredLayouts}
            house={this.state.house}
            porche={this.state.porche}
            openDescription={this.oppenDescription}
          /> */}
        </div>
        <div className={styles.left}>
          <Consultation data={data} />
        </div>
      </main>
    </>
  )
}