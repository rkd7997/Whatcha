// 액션 타입 정의
const CHANGE_ROCK = 'RockScissorsPapers/CHANGE_ROCK';
const CHANGE_SCISSORS = 'RockScissorsPapers/CHANGE_SCISSORS';
const CHANGE_PAPER = 'RockScissorsPapers/CHANGE_PAPER';
const CHANGE_NEXT = 'RockScissorsPapers/CHANGE_NEXT';
const CHANGE_RESET = 'RockScissorsPapers/CHANGE_RESET';
const TIMEOVER = 'RockScissorsPapers/TIMEOVER';
const RESETTIME = 'RockScissorsPapers/RESETTIME';
const INCREASETIME = 'RockScissorsPapers/INCREASETIME';


// 액션 생섬함수 정의
export const rock = () => ({ type: CHANGE_ROCK});
export const scissors = () => ({ type: CHANGE_SCISSORS});
export const paper = () => ({ type: CHANGE_PAPER});
export const next = () => ({ type: CHANGE_NEXT});
export const reset = () => ({ type: CHANGE_RESET});
export const timeover = () => ({ type: TIMEOVER});
export const increasetime = () => ({ type: INCREASETIME});
export const resetTime = () => ({ type: RESETTIME});




// **** 초기상태 정의
const initialState = {
  rock_scissors_paper: '',
  computer_rock_scissors_paper:'',
  me_win:0,
  com_win:0,
  who_win:'',
  time:0
};


function random_pick(){
    var computer_random = Math.floor((Math.random()*10000))%3;
    var computer_pick = ''
    if(computer_random===0){
        computer_pick='rock'
    }
    else if(computer_random===1){
        computer_pick='scissors'
    }
    else{
        computer_pick='paper'
    }
    return computer_pick;

}

function who_win(me,com){
    if(me === com){return 'same'}
    if(me === 'rock'){
        if(com === 'scissors'){return 'win';}
        else{ return 'loose'}
    }
    if(me === 'scissors'){
        if(com === 'paper'){return 'win';}
        else{return 'loose'}
    }
    else{
        if(com === 'rock'){return 'win';}
        else{ return 'loose'}
    }
}



// **** 리듀서 작성
export default function RockScissorsPapers(state = initialState, action) { 
  var computer_pick=random_pick();
  switch (action.type) {
    case CHANGE_ROCK:
    if(who_win('rock',computer_pick)==='win'){
        return {
            ...state,
            rock_scissors_paper: 'rock',
            computer_rock_scissors_paper: computer_pick,
            me_win:state.me_win+1,
            who_win:'me'            
        };
    }
    else if(who_win('rock',computer_pick)==='loose'){
        return {
            ...state,
            rock_scissors_paper: 'rock',
            computer_rock_scissors_paper: computer_pick,
            com_win:state.com_win+1,
            who_win:'com'            
        };
    }
    else{
        return {
            ...state,
            rock_scissors_paper: 'rock',
            computer_rock_scissors_paper: computer_pick,
            who_win:'same'
        };    
    }
    
    case CHANGE_SCISSORS :
        if(who_win('scissors',computer_pick)==='win'){
            return {
                ...state,
                rock_scissors_paper: 'scissors',
                computer_rock_scissors_paper: computer_pick,
                me_win:state.me_win+1,
                who_win:'me'            
            };
        }
        else if(who_win('scissors',computer_pick)==='loose'){
            return {
                ...state,
                rock_scissors_paper: 'scissors',
                computer_rock_scissors_paper: computer_pick,
                com_win:state.com_win+1,
                who_win:'com'            
            };
        }
        else{
            return {
                ...state,
                rock_scissors_paper: 'scissors',
                computer_rock_scissors_paper: computer_pick,
                who_win:'same'
            };    
        }
    case CHANGE_PAPER:
        if(who_win('paper',computer_pick)==='win'){
            return {
                ...state,
                rock_scissors_paper: 'paper',
                computer_rock_scissors_paper: computer_pick,
                me_win:state.me_win+1,
                who_win:'me'            
            };
        }
        else if(who_win('scissors',computer_pick)==='loose'){
            return {
                ...state,
                rock_scissors_paper: 'paper',
                computer_rock_scissors_paper: computer_pick,
                com_win:state.com_win+1,
                who_win:'com'            
            };
        }
        else{
            return {
                ...state,
                rock_scissors_paper: 'paper',
                computer_rock_scissors_paper: computer_pick,
                who_win:'same'
            };    
        }
        case CHANGE_NEXT :
            console.log(state)
            return {
                ...state,
                rock_scissors_paper: '',
            };

        case CHANGE_RESET:
        return {
            ...state,
            rock_scissors_paper: '',
            who_win:'',
            me_win:0,
            com_win:0,
        };

        case TIMEOVER:
            return {
                ...state,
                com_win:state.com_win+1
                };

        case INCREASETIME:
            return {
                ...state,
                time:state.time+1
                };   
                
        case RESETTIME:
            return {
                ...state,
                time:0
                };                
             

    default:
      return state;
  }
}