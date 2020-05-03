import React from 'react';
import TicTacToe from './TicTacToe';
import styles from './App.module.css'
let arr=[0,0,0,0,0,0,0,0,0];
const App=()=>{
    return (
        <div className={styles.body}>
           <TicTacToe />
        </div>
    );
}
export default App;