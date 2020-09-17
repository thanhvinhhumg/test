import React from 'react';
import {Card} from '../card/card.conponent';
import './card-list.styles.css';

export const CardList = (props)=>{
   return <div className='cardlist'>{props.monsters.map(monster=>(
    <Card monster={monster} key={monster.id}/>
))}</div>  
}