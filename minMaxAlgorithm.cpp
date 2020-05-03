#include <bits/stdc++.h>
#define SPEED  ios::sync_with_stdio(false);cin.tie(0); cout.tie(0);
#define pii pair<int,int>
using namespace std;
typedef long long int intl;
intl m=1000000007;
void printNumber()
{
    for(int i=0;i<9;i++)
    {
     if(i%3==2)
     {
         cout<<i<<"\n";
         
     }
     else{
         cout<<i<<"|";
     } 
    }
    
}
void print(int arr[])
{
    for(int i=0;i<9;i++)
    {
     if(i%3==2)
     {
         if(arr[i]==0)cout<<" ";
         else if(arr[i]==1)cout<<"X";
         else cout<<"O";
     }
     else{
         if(arr[i]==0)cout<<" |";
         else if(arr[i]==1)cout<<"X|";
         else cout<<"O|";
     } 
     if(i%3==2)cout<<"\n";  
    }
}
int check(int x,int y,int z)
{
    if(x==y && x==z && x!=0)return x;
    return 0;
}
int checkWinner(int arr[])
{
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
void playerInput(int arr[], char &player,int &win)
{
  while(1)
        {
            cout<<"player "<<player<<" please enter number between 0 to 8 which is not filled at this time\n";
        int x;
        cin>>x;
        if(x<9 && arr[x]==0)
        {
            arr[x]=1;
            win=checkWinner(arr);
            break;
        }
        else
        {
            cout<<"u enter wrong number which is already filled ,try again\n";
        }
        }
}
bool isMoveLeft(int arr[])
{
    for(int i=0;i<9;i++)
    {if(arr[i]==0)return true;}
    return false;
}
int checkWinningScore(int arr[],int depth,bool myPlayer)
{
    int x=checkWinner(arr);
    if(myPlayer==true && x==2)
    {
      return 10-depth;  
    }
    else if(myPlayer==false && x==1)
    {
        // cout<<myPlayer<<" "<<x<<endl;
    return depth-10;}
    if(!isMoveLeft(arr))return 0;
    if(myPlayer)
    {
        int score=INT_MIN;
        for(int i=0;i<9;i++)
        {
            if(arr[i]==0)
            {
                arr[i]=2;
                int x=checkWinningScore(arr,depth+1,!myPlayer);
                score=max(score,x);
                arr[i]=0;
            }
        }
        return score;
    }
    else
    {
        int score=INT_MAX;
        for(int i=0;i<9;i++)
        {
            if(arr[i]==0)
            {
                arr[i]=1;
                int x=checkWinningScore(arr,depth+1,!myPlayer);
                arr[i]=0;
                score=min(x,score);
            }
        }
        return score;
    }
    



}
void opponentInput(int arr[], char &player,int &win)
{
    int score=INT_MIN;
    int position=-1;
      for(int i=0;i<9;i++)
      {
          if(arr[i]==0)
          {
              int depth=0;
              arr[i]=2;
              bool myPlayer=false;
              int x=checkWinningScore(arr,depth,myPlayer);
              arr[i]=0;
              cout<<x<<" "<<i<<"\n";
              if(x>score)
              {
                  score=x;
                  position=i;
              }
          }
      }
      arr[position]=2;
      win=checkWinner(arr);

}
int main() 
{
    int arr[9]={0};
    char player='O';
    char opponent='O';
    cout<<"your symbol is "<<player<<"\n";
    printNumber();cout<<"\n";
    int win=0;
    for(int i=0;i<9;i++)
    {   cout<<"current status\n";
        print(arr);
        if(player=='X')
        {
            playerInput(arr, player,win);
        }
        else
        {
            opponentInput(arr,player,win);
        }
      player=(player=='X')?'O':'X';
        
        if(win!=0){
            print(arr);
            cout<<(win==1?'X':'O')<<" won match\n";break;}
    }
   if(win==0)
   {cout<<"Match is draw\n";
   print(arr);}
    return 0;
}
