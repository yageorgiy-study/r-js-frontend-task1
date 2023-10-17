import React, { Component } from 'react';
import styles from './Button.module.css';
import './another-stylesheet.css';

class Link extends Component {

  protected _title: string = "";
  protected _link: string = "";

  public get title(){
    return this.title;
  }

  public set title(title: string){
    this._title = title;
  }

  render() {
    return <a className={styles.error} href={this._link} rel="noopener noreferrer">{this._title}</a>;
  }


}