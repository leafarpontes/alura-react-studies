import React, { Component } from 'react'
import style from './Button.module.scss';

export class Button extends Component {
  render() {
    return (
      <button className={style.button}>
        Button
      </button>
    )
  }
}
