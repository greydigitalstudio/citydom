'use client';

import Filter from '../inner/components/filter/Filter'
import Privilege from './components/privilege/Privilege'
import Consultation from './components/consultation/Consultation'
import Content from './components/content/Content'
import React, { useEffect, useState } from 'react'

import styles from './page.module.css'
/* Component imports */
const getData = async () => {
  // get parameters from url
  let id = window.location.href.split('?')[1].split('&')[0].split('=')[1]
  let page = window.location.href.split('?')[1].split('&')[1].split('=')[1]
  let sort = window.location.href.split('?')[1].split('&')[2].split('=')[1]
  let res = await fetch(`https://tyumen.citidom.com/housing-estate?page=${page}&limit=6&sort=${sort}`);
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
      porche: 0
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

  async componentDidMount() {
    await getChess().then(res => {
      this.setState({
        chess: res,
        house: res[0]
      })
    })
    getData().then(res => {
      this.setState({
        data: res,
        loaded: true
      })
    })
    getLayouts().then(res => {
      this.setState({
        layouts: res,
        filteredLayouts: res
      })
    })
  }

  render() {

    return (
      <main className={`${styles.main} ${styles.center}`}>
        <div className={styles.left}>
          {
            this.state.loaded &&
            <Filter
              change={this.changeSection}
              layouts={this.state.layouts}
              filter={this.filterLayouts}
              chess={this.state.chess}
              setHouse={this.setHouse}
              setPorche={this.setPorche}
            />
          }
          
          {
            this.state.loaded ? <Privilege data={this.state.data}/> : null
          }
        </div>
        <div className={styles.content}>
          {
            this.state.loaded ? <Content data={this.state.data} section={this.state.section} layouts={this.state.filteredLayouts} house={this.state.house} porche={this.state.porche}/> : null
          }
            
        </div>
        <div className={styles.left}>
          { this.state.loaded ? <Consultation data={this.state.data}/> : null }
        </div>

      </main>
    )
  }
}
