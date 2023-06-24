'use client';

import Filter from '../inner/components/filter/Filter'
import Privilege from './components/privilege/Privilege'
import Consultation from './components/consultation/Consultation'
import Content from './components/content/Content'
import React, { useEffect, useState } from 'react'
import MediaQuery from 'react-responsive'

import Banner from '../components/general/banner/Banner'
import styles from './page.module.css'
/* Component imports */
const getData = async () => {
  // get parameters from url
  let id = window.location.href.split('?')[1].split('&')[0].split('=')[1]
  let page = window.location.href.split('?')[1].split('&')[1].split('=')[1]
  let sort = window.location.href.split('?')[1].split('&')[2].split('=')[1]
  let limit = window.location.href.split('?')[1].split('&')[3].split('=')[1]
  let res = await fetch(`https://tyumen.citidom.com/housing-estate?page=${page}&limit=${limit}&sort=${sort}`);
  res = await res.json();

  console.log(res.items)

  res = res.items.filter(item => item.id === parseInt(id))[0] || res.items[0]

  return res
}

const getLayouts = async () => {
  let id = window.location.href.split('?')[1].split('&')[0].split('=')[1]
  let res = await fetch(`https://tyumen.citidom.com/housing-estate/${id}/layouts`);
  res = await res.json();
  return res.items
}

const getChess = async () => {
  // example https://tyumen.citidom.com/housing-estate/81/chess
  let id = window.location.href.split('?')[1].split('&')[0].split('=')[1]
  let res = await fetch(`https://tyumen.citidom.com/housing-estate/${id}/chess`);
  res = await res.json();
  console.log(res)
  return res.houses
}

export default class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        flatsCount: 0
      },
      layouts: [],
      filteredLayouts: [],
      chess: [],
      house: null,
      loaded: false,
      section: "floats",
      porche: 0,
      photoIndex: 0,
    }
  }

  changeSection = (section) => {
    this.setState({
      section: section
    })
  }

  filterLayouts = (layouts) => {
    this.setState({
      filteredLayouts: layouts
    })
  }

  setHouse = (house) => {
    this.setState({
      house: house
    })
  }

  setPorche = (porche) => {
    this.setState({
      porche: porche - 1
    })
  }

  setPhoto = (photo) => {
    this.setState({
      photoIndex: photo
    })
  }

  oppenDescription = () => {
    this.setState({
      data: {
        ...this.state.data,
        descriptionOpened: true,
        displayDescription: this.state.data.description
      }
    }) 
  }

  async componentDidMount() {
    let chess = await getChess()
      await this.setState({
        chess: chess,
        house: chess[0]
      })
    let data = await getData()
    if(data.description.length > 550) {
      data.displayDescription = data.description.slice(0, 550)
      data.descriptionOpened = false
    } else {
      data.displayDescription = data.description
      data.descriptionOpened = true
    }
      
      await this.setState({
        data: data
      })
    let layouts = await getLayouts()
    await this.setState({
        layouts: layouts,
        filteredLayouts: layouts,
        loaded: true
    })
  }

  render() {

    return (
      <>
      <Banner
        data={this.state.data}
        photoIndex={this.state.photoIndex}
        setPhoto={this.setPhoto}
      />
      <main className={`${styles.main} ${styles.center}`}>
        {
          this.state.loaded &&
        <MediaQuery minWidth={768}>
        <div className={styles.left}>
            <Filter
              change={this.changeSection}
              layouts={this.state.layouts}
              filter={this.filterLayouts}
              chess={this.state.chess}
              section={this.state.section}
              setHouse={this.setHouse}
              setPorche={this.setPorche}
              data={this.state.data}
              house={this.state.house}
              porche={this.state.porche}
              photoIndex={this.state.photoIndex}
              setPhoto={this.setPhoto}
            />
         <Privilege data={this.state.data}/>
        </div>
        <div className={styles.content}>
          <Content
            data={this.state.data}
            section={this.state.section}
            layouts={this.state.filteredLayouts}
            house={this.state.house}
            porche={this.state.porche}
            openDescription={this.oppenDescription}
          />
          
            
        </div>
        <div className={styles.left}>
          <Consultation data={this.state.data}/>
        </div>
        </MediaQuery>
       }

       {
          this.state.loaded &&
        <MediaQuery maxWidth={767}>
          <div className={styles.left}>
            <Filter
              change={this.changeSection}
              layouts={this.state.layouts}
              filter={this.filterLayouts}
              chess={this.state.chess}
              section={this.state.section}
              setHouse={this.setHouse}
              setPorche={this.setPorche}
              data={this.state.data}
              house={this.state.house}
              porche={this.state.porche}
              photoIndex={this.state.photoIndex}
              setPhoto={this.setPhoto}
            />
        </div>
        <div className={styles.content}>
          <Content data={this.state.data} section={this.state.section} layouts={this.state.filteredLayouts} house={this.state.house} porche={this.state.porche}/>
          
            
        </div>
        <div className={styles.left}>
          <Consultation data={this.state.data}/>
        </div>
          </MediaQuery>
       }
      </main>
      </>
    )
  }
}
