'use client';

import Filter from '../inner/components/filter/Filter'
import Privilege from './components/privilege/Privilege'
import Consultation from './components/consultation/Consultation'
import Content from './components/content/Content'
import React, { useEffect, useState } from 'react'
import MediaQuery from 'react-responsive'
import { Carousel } from 'react-responsive-carousel';


import Image from 'next/image';

import Checkerboard from "./icons/Checkerboard";
import Layouts from "./icons/Layouts";

import Banner from '../components/general/banner/Banner'
import styles from './page.module.css'
import banner_styles from '../components/general/banner/banner.module.css'
import styles__radio_group from './components/radio_group/radio_group.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Skeleton from 'react-loading-skeleton';
import { Asap_Condensed } from 'next/font/google';







  



export default function Page({ params }) {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState({});
  const [photos, setPhotos] = useState([]);
  const [chess, setChess] = useState([]);
  const [section, setSection] = useState("floats");
  const [layouts, setLayouts] = useState([]);

  const [selectedHouse, setSelectedHouse] = useState(null);
  const [selectedPorche, setSelectedPorche] = useState(null);
  const [selectedRooms, setSelectedRooms] = useState([]);


  const onRoomsChange = (e) => {
    let options = [...selectedRooms];
    let index = 0;
    console.log(event);
    // check if the check box is checked or unchecked
    if (event.target.checked) {
      // add the numerical value of the checkbox to options array
      options.push(+event.target.value)
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = options.indexOf(+event.target.value)
      options.splice(index, 1)
    }
    // update the state with the new array of options
    setSelectedRooms(options);
  }

  const calcPrice = (price) => {
    if (price == "0") return '0'
    return (price / 1000000).toFixed(1) + ' млн'
  }

  const onPorcheChange = (porche) => {
    setSelectedPorche(porche)
    setSelectedRooms([...porche.saleRooms])
  }

  const setHouse = (house) => {
    setSelectedHouse(house);
    setSelectedPorche(house.porches ? house.porches[0] : null)
    fetchChess(house.id)
    console.log('selectedPorche?.saleRooms', selectedPorche)
    setSelectedRooms(house.porches ? house.porches[0].saleRooms : null)
    
  }

  const fetchChess = async (houseId) => {
    setChess([]);
    await fetch(`https://tyumen.citidom.com/housing-estate/house/${houseId}/chess`).then(res => res.json()).then(result => {
      console.log('result', result?.porches)
      setChess(result?.porches);
    });
    setMounted(true);
  }

  const fetchLayouts = async (houseId) => {
    setChess([]);
    await fetch(`https://tyumen.citidom.com/housing-estate/${houseId}/layouts`).then(res => res.json()).then(result => {
      console.log('fetchLayouts', result.items)
      // setChess(result?.porches);
      setLayouts(result.items)
    });
    // setMounted(true);
  }

  const fetchData = async () => {
    await fetch(`https://tyumen.citidom.com/housing-estate/${params.slug}/public`).then(res => res.json()).then(result => {
      setData(result);

      result.houses ? setSelectedHouse(result.houses[0]) : null;
      result.houses ? setSelectedPorche(result.houses[0].porches ? result.houses[0].porches[0] : null) : null;
      result.houses ? setSelectedRooms(result.houses[0].porches ? result.houses[0].porches[0].saleRooms : []) : null;
      setPhotos(result.photos);

      fetchChess(result.houses[0] ? result.houses[0].id : null)
      fetchLayouts(result.houses[0] ? result.houses[0].id : null)
      console.log('photos', result.photos);
      console.log('data', result);
    });

    // 

    
    console.log('setMounted(true);');
  }






  // let flats = []

  //   function price(price) {
  //       if (price == "0") return ''
  //       return (price / 1000000).toFixed(1) + ' млн'
  //   }


  //   for (let i = 0; i < selectedHouse.storeys.length; i++) {
  //       flats.push({
  //           number: selectedHouse.storeys[i].number,
  //           flats: []
  //       })
  //       for (let j = 0; j < selectedHouse.storeys[i].flats.length; j++) {
  //           flats[i].flats[j] = price(selectedHouse.storeys[i].flats[j].price)
  //       }
  //   }


  //   function showModal({ target }) {
  //       while (!target.id) {
  //           target = target.parentNode
  //       }
  //       let layoutId = target.id.split('-')[1]
  //       let layout = layouts.filter(item => item.id === parseInt(layoutId))[0]
  //       setModalLayout(layout)
  //       setModal(true)
  //   }

  //   function closeModal() {
  //       setModal(false)
  //   }

  //   let maxCount = 0;


  useEffect( () => {
    fetchData();
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
                <div className={styles.filter}>
                  <div className={styles.filter__row}>
                    <button className={styles.filter__row_button} onClick={() => {setSection('floats')}}>
                      <Checkerboard selected={section == "floats"} /> Шахматка{" "}
                    </button>
                    {layouts ? <>
                        <div className={styles.filter__row_vertical_divider}></div>
                        <button className={styles.filter__row_button} onClick={() => {setSection('layouts')}}>
                          <Layouts selected={section == "layouts"} /> Планировки
                        </button> 
                      </> : false
                    }
                  </div>
                  {
                    data.houses.map((house, index) => {
                      return (
                        <div
                          id={"house-" + index}
                          key={index}
                          className={styles.filter__row}
                          onClick={() => {
                            setHouse(house);
                          }}
                        >
                          <div
                            className={
                              house.id == selectedHouse.id
                                ? styles.filter__button_primary
                                : styles.filter__button_secondary
                            }
                          >
                            {house.title}
                          </div>
                        </div>
                      );
                    })
                  }

                  <div className={styles.filter__horizontal_divider}></div>
                    {section == "floats" ? (
                      <div className={styles.filter__radio_row}>
                        <div className={styles__radio_group.filter__field}>
                            <div className={styles__radio_group.filter__field_title}></div>
                            <div className={styles__radio_group.radio_group}>
                                <span className={styles__radio_group.radio_group__label}>
                                  <div className={`${styles__radio_group.radio_group_item} ${styles__radio_group.radio_group_item_dark}`}>
                                    Подъезд
                                  </div>
                                </span>
                                {selectedHouse?.porches?.map((porche, index) => 
                                    <label className={styles__radio_group.radio_group__label} key={index} >
                                        <input type="radio" name={'porche'} checked={+porche.id == +selectedPorche.id} value={porche.number} onChange={() => {
                                          onPorcheChange(porche)
                                        }} />
                                        <div className={styles__radio_group.radio_group_item}>
                                            {porche.number}
                                        </div>
                                    </label>
                                )}
                            </div>
                        </div>
                        <div className={styles__radio_group.filter__field}>
                            <div className={styles__radio_group.filter__field_title}>Комнатность</div>
                            <div className={styles__radio_group.radio_group}>
                                {selectedPorche?.saleRooms?.map((room, index) => 
                                    <label className={styles__radio_group.radio_group__label} key={index} >
                                        <input type="checkbox" name={'room'} checked={selectedRooms.includes(room)} value={room} onChange={() => {
                                          onRoomsChange(room)
                                        }} />
                                        <div className={`${styles__radio_group.radio_group_item} ${room == 0 ? styles__radio_group.radio_group_item_dark : false}`}>
                                            {room == 0 ? 'Студия' : room}
                                        </div>
                                    </label>
                                )}
                            </div>
                        </div>
                      </div>
                    ) : (
                      false
                    )}
                </div>
                <Privilege data={data} />
              </>
            : <Skeleton style={{display: 'block'}} width={314} height={200} />
            
          }
        </div>
        { mounted ? <div className={styles.content}>
          <div className={styles.content__wrapper}>
            <div className={styles.content__title}>
                {/* <Pin /> */}
                {data.title}
                <div className={styles.item__flatscount}>
                    {data.flatsCount} {
                        data.flatsCount % 100 < 20 && data.flatsCount % 100 > 10 ? ' квартир' :
                            data.flatsCount % 10 === 1 ? ' квартира' :
                                data.flatsCount % 10 < 5 && data.flatsCount % 10 > 0 ? ' квартиры' :
                                    ' квартир'
                    }

                </div>
            </div>
            <div className={styles.content__row_info}>
                <div className={styles.content__row_info_item_light}>
                    {data.endConstruction}
                </div>
                <div className={styles.content__row_info_item}>
                    Ипотека от {data.mortgage}%*
                </div>
            </div>

            <div className={styles.content__description}>
                <div className={styles.content__description_title}>
                    Описание
                </div>
                <div className={styles.content__description_text}>
                    {data.description}
                </div>
            </div>

            {section === 'floats' &&
              <div className={styles.content__flats}>
                {/* {JSON.stringify(chess)} */}
                <div className={styles.content__chess_porch}>
                  {
                    chess[0]?.storeys.map((storey, index) => {
                      return <div className={styles.content__flats_index}>
                        {
                          chess[0]?.storeys.length - (index)
                        }
                      </div>
                    })
                  }
                </div>
                {
                  chess.map((item) => {
                    return selectedPorche.number == item.number ? <div className={styles.content__chess_porch}>
                      {
                        item.storeys.map((storey) => {
                          return <div className={styles.content__chess_storey}>
                            {
                              storey.flats.map((flat) => {
                                return <div className={`${styles.content__chess_flat} ${selectedPorche.number == flat.porch.number && selectedRooms.includes(flat.rooms) ? styles.content__chess_flat_displayed : styles.content__chess_flat_hidden}`}>
                                  { flat.price !== '0' ? calcPrice(flat.price) : false }
                                </div>
                              })
                            }
                          </div>
                        })
                      }
                    </div> : false;
                  })
                }
              </div> 
            }
            {section === 'layouts' &&
                    <div className={styles.content__layouts}>

                        {
                            layouts.map((item, index) => {
                                return (
                                    <div className={styles.content__layout} id={"layout-" + item.id} key={index}>
                                        <div className={styles.content__layout_wrapper}>
                                            <div className={styles.content__layout_image}>
                                                <img src={"https://files.citidom.com/" + item.layout} alt="" />
                                            </div>
                                            <div className={styles.content__flats_row}>
                                                <div className={styles.content__flats_text}>
                                                    Цена от:
                                                </div>
                                                <div className={styles.content__flats_bdtext}>
                                                    {item.price} ₽
                                                </div>
                                            </div>
                                            <div className={styles.content__flats_row}>
                                                <div className={styles.content__flats_text}>
                                                    Площадь:
                                                </div>
                                                <div className={styles.content__flats_bdtext}>
                                                    {item.spaceTotal} м²
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                }
          </div>
        </div> : <div className={styles.content}>
            <div className={styles.content__wrapper}>
              <Skeleton style={{display: 'block'}} width={'100%'} height={'100%'} />
              <Skeleton style={{display: 'block'}} width={'100%'} height={400} />
              <Skeleton style={{display: 'block'}} width={'100%'} height={400} />
            </div>
          </div>
        }
        
        <div className={styles.right}>
          <Consultation data={data} />
        </div>
      </main>
    </>
  )
}