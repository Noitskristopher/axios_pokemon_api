import React, { useState, useEffect } from 'react';
import styles from './AxiosPokemon.module.css';
import axios from 'axios';

const AxiosPokemon = () => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then((result) =>{
            console.log(result)
            setPokemon(result.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])


    return (
        <>
        <div className={styles.list}>
            <ul>
            </ul>
                {
                    pokemon.map((character, index)=>(
                        <li key={index}>{character.name}</li>
                    ))
                }
        </div>
        </>
    );
}

export default AxiosPokemon;
