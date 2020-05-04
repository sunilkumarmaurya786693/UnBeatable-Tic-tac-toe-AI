
const check=(x,y,z)=>{
    if(x===y && y===z && x!==0)return x;
    return 0;
}
export const checkWinner= (arr)=>{
    if(check(arr[0],arr[1],arr[2]))return arr[0];
     if(check(arr[3],arr[4],arr[5]))return arr[3];
     if(check(arr[6],arr[7],arr[8]))return arr[6];

     if(check(arr[0],arr[3],arr[6]))return arr[0];
     if(check(arr[1],arr[4],arr[7]))return arr[1];
     if(check(arr[2],arr[5],arr[8]))return arr[2];

     if(check(arr[0],arr[4],arr[8]))return arr[0];
     if(check(arr[2],arr[4],arr[6]))return arr[2];

     return 0;
}
const isMoveLeft=(arr)=>
{
    for(let i=0;i<9;i++)
    {if(arr[i]===0)return true;}
    return false;
}
const checkWinningScore=(arr,depth,myPlayer)=>
{
    let x=checkWinner(arr);
    if(x===2)
    {
      return 10-depth;  
    }
    if(x===1)
    {
        // cout<<myPlayer<<" "<<x<<endl;
    return depth-10;}

    if(!isMoveLeft(arr))return 0;
    if(myPlayer)
    {
        let score=-100000000;
        for(let i=0;i<9;i++)
        {
            if(arr[i]===0)
            {
                arr[i]=2;
                const temp=[...arr];
                const depth1=depth+1;
                let x=checkWinningScore(temp,depth1,false);
                if(x>score)
                {score=x;}
                arr[i]=0;
            }
        }
        return score;
    }
    else
    {
        let score=10000000;
        for(let i=0;i<9;i++)
        {
            if(arr[i]===0)
            {
                arr[i]=1;
                const temp=[...arr];
                const depth1=depth+1;
                let x=checkWinningScore(temp,depth1,true);
                arr[i]=0;
                if(x<score)
                {score=x;}
            }
        }
        return score;
    }
    



}

const bestMove=(arr)=>{
    let score=-10000000;
    let position=-1;
    for(let i=0;i<arr.length;i++)
    {   
        // console.log(arr);
        if(arr[i]===0){
            let depth=0;
            arr[i]=2;
            let myplayer=false;
            const temp=[...arr];
            let x=checkWinningScore(temp,depth,myplayer);
            // console.log('for ---->',i,"       ",x);
            arr[i]=0;
            if(x>score)
            {
                score=x;
                position=i;
            }
            
        }
    }
    return position;
}

export const  minMaxAlgo = (arr,player)=>{
    if(player==='O'){
        const temp=[...arr];
        const move=bestMove(temp);
        // console.log('this is minmax--->',player);
        return move;
}
}