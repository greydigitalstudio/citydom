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

export default class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        flatsCount: 0
      },
      loaded: false,
      section: "floats"
    }
  }

  changeSection = (section) => {
    this.setState({
      section: section
    })
  }

  componentDidMount() {
    getData().then(res => {
      this.setState({
        data: res,
        loaded: true
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
          />
          }
          
          {
            this.state.loaded ? <Privilege data={this.state.data}/> : null
          }
        </div>
        <div className={styles.content}>
          {
            this.state.loaded ? <Content data={this.state.data} section={this.state.section}/> : null
          }
            
        </div>
        <div className={styles.left}>
          { this.state.loaded ? <Consultation data={this.state.data}/> : null }
        </div>

      </main>
    )
  }
}
