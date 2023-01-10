import React, { Component } from 'react'
import style from './Button.module.scss';

export class Button extends Component<{children?: React.ReactNode}> {
  render() {
    return (
      <button className={style.button}>
        {this.props.children}
      </button>
    )
  }
}
