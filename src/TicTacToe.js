import React, { useState, useEffect } from "react";
import { minMaxAlgo, checkWinner } from "./minMaxAlgorithm";
import styles from "./TicTacToe.module.css";
// const arr=['','','','','','','','',''];
const print=(data)=>
{
     if(data===0)return '';
     if(data===1)return 'X';
     else return 'O';
}
const TicTacToe = () => {
  const [arr, setArr] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [player, setPlayer] = useState("");
  const [counter, Setcounter] = useState(0);
  const [win, setWin] = useState(false);
  const [numberOfPlayer,setNumberOfPlayer]=useState(0);
  const handleSetNumberOfPlayer =(props)=>{
         setNumberOfPlayer(props);
  }
  const handleSetPlayer=(props)=>{
      if(player!=="")return;
      setPlayer(props);
      // console.log(props);
  }

  const handleClick = (props) => {
    if (arr[props] !== 0 || win === true || player==="") return;
    if (player === "X") {
      const temp = [...arr];
      temp[props] = 1;
      setArr(temp);
      // arr[props]=player;
    } else if(numberOfPlayer===2 && player==='O'){
      const temp = [...arr];
      temp[props] = 2;
      setArr(temp);
    }
    if (player === "X") setPlayer("O");
    else setPlayer("X");
    Setcounter(counter + 1);
    const winner = checkWinner(arr);
    console.log('he is winner---->',winner);
    if (winner !== 0) {
      setWin(true);
      const winner1 = winner === 1 ? "You Win" : "You Lost";
          alert(`${winner1}`);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else if (counter >= 8) {
      alert("Match Draw");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };
  useEffect(() => {
    if (player === "O" && win === false && numberOfPlayer===1) {
      setTimeout(() => {
        const move = minMaxAlgo(arr, player);
        const temp = [...arr];
        temp[move] = 2;
        setArr(temp);
        if (player === "X") setPlayer("O");
        else setPlayer("X");
        Setcounter(counter + 1);
        const winner = checkWinner(arr);
        console.log('he is winner---->',winner);
        if (winner !== 0) {
          setWin(true);
          const winner1 = winner === 1 ? "You Win" : "You Lost";
          alert(`${winner1}`);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else if (counter >= 8) {
          alert("Match Draw");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      }, 300);
      // console.log(arr);
    }
  }, [player]);
  return (<>
    <div className={styles.container}>
      {numberOfPlayer===0?<div className={styles.numberOfPlayer}>
      <div onClick={()=>handleSetNumberOfPlayer(1)} className={styles.playerSelect}>Single Player</div>
      <div onClick={()=>handleSetNumberOfPlayer(2)} className={styles.playerSelect}>Two Player</div>
      </div>:
        (player==="") ?<div className={styles.playerSelectcontainer}>
          <div className={styles.playerSelect} onClick={()=>{handleSetPlayer("X")}}>I will start first</div>
          <div className={styles.playerSelect} onClick={()=>{handleSetPlayer("O")}}>{numberOfPlayer===1?'PC':'Friend'} will start first</div>
      </div>:<>
      <div className={styles.row}>
        <div
          className={styles.box}
          onClick={() => {
            handleClick(0);
          }}
        >
          {print(arr[0])}
        </div>
        <div
          className={`${styles.middleRow2} ${styles.box}`}
          onClick={() => {
            handleClick(1);
          }}
        >
          {print(arr[1])}
        </div>
        <div
          className={styles.box}
          onClick={() => {
            handleClick(2);
          }}
        >
          {print(arr[2])}
        </div>
      </div>
      <div className={styles.row}>
        <div
          className={`${styles.middleRow4} ${styles.box}`}
          onClick={() => {
            handleClick(3);
          }}
        >
          {print(arr[3])}
        </div>
        <div
          className={`${styles.box} ${styles.centerBox}`}
          onClick={() => {
            handleClick(4);
          }}
        >
          {print(arr[4])}
        </div>
        <div
          className={`${styles.middleRow6} ${styles.box}`}
          onClick={() => {
            handleClick(5);
          }}
        >
          {print(arr[5])}
        </div>
      </div>
      <div className={styles.row}>
        <div
          className={styles.box}
          onClick={() => {
            handleClick(6);
          }}
        >
          {print(arr[6])}
        </div>
        <div
          className={`${styles.middleRow8} ${styles.box}`}
          onClick={() => {
            handleClick(7);
          }}
        >
          {print(arr[7])}
        </div>
        <div
          className={styles.box}
          onClick={() => {
            handleClick(8);
          }}
        >
          {print(arr[8])}
        </div>
      </div>
      </>}
    </div>
    </>
  );
};
export default TicTacToe;
