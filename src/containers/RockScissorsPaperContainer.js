import React, { Component } from 'react';
import { connect } from 'react-redux';
import RockScissorsPaper from '../components/RockScissorsPaper';
import { rock, scissors, paper, next, reset, timeover, increasetime, resetTime } from '../store/modules/RockScissorsPapers';

class RockScissorsPaperContainer extends Component {
  handleRock = () => {
    this.props.resetTime();
    this.props.rock();
  };
  handleScissors = () => {
    this.props.resetTime();
    this.props.scissors();
  };
  handlePaper = () => {
    this.props.resetTime();
    this.props.paper();
  };
  handleNext = () => {
    this.props.resetTime();
    this.props.next();
  };
  handleReset = () => {
    this.props.resetTime();
    this.props.reset();
  };
  handleTimeover= () => {
      this.props.resetTime();
      this.props.timeover()
  }
  handleIncreaseTime= () => {
    this.props.increasetime()
  }
  handleResetTime= () => {
    this.props.resetTime()
  }


  state={
      max_count:10,
      is_first:true,
      set:1,
      match_per_set:1,
  }



  render() {
    if(this.state.is_first){
    var set =prompt('몇세트로 진행하실래요? 숫자를 입력해주세요 ex) 1, 2, 3  // default:1');
    var match_per_set =prompt('한 세트에 몇판을 진행하실래요?  ex) 1, 2, 3  // default:1');

    if(set === null || set=== '' ){
      set=1;    
    }
    if(match_per_set === null || match_per_set === ''){
      match_per_set=1;
    }
    this.setState({set:set,match_per_set:match_per_set})
   setInterval(() => {
    this.handleIncreaseTime()
      }, 1000);
    this.setState({is_first:false})
    }

    const { rock_scissors_paper,computer_rock_scissors_paper, me_win, com_win, who_win,time } = this.props;
    if(rock_scissors_paper.length === 0){  
    if(time ===10){alert('시간안에 내지못하여 패배합니다.'), this.handleTimeover()}
    }
    var all_match=me_win+com_win
    const now_set = parseInt(all_match/this.state.match_per_set)+1
    const now_match = all_match%this.state.match_per_set+1
    const max_match = this.state.match_per_set * this.state.set;
    var winner = '무승부';
    if(com_win>me_win){
      winner='컴퓨터 승리'
    }
    else if(com_win<me_win) {
      winner='유저 승리'
    }
    return (
      <div>
      {(max_match>all_match)?
      <div>
      {'총 세트'+this.state.set+  ' 경기당 세트수 :'+this.state.match_per_set}
      <br></br>
      {now_set+'세트'+now_match+'번째 매치'}
      <br></br>
      {max_match+'/'+all_match}
      <RockScissorsPaper
        rock_scissors_paper={rock_scissors_paper}
        computer_rock_scissors_paper={computer_rock_scissors_paper}
        who_win={who_win}
        me_win={me_win}
        com_win={com_win}
        timer ={time}
        timeover={this.handleTimeover}
        onRock={this.handleRock}
        onScissors={this.handleScissors}
        onPaper={this.handlePaper}
        onNext={this.handleNext}
        onReset={this.handleReset}
      />
      </div>
      :
      <div>
      
      <h1>
      '경기 끝'
      <br></br>
      {winner}
      <br></br>
      <button onClick={function(){
        window.location.href = '/'
      }}> 재시작 </button>
      </h1>
      </div>
      }
      </div>

    );
  }
}

const mapStateToProps = ({ RockScissorsPapers }) => ({
  rock_scissors_paper: RockScissorsPapers.rock_scissors_paper,
  computer_rock_scissors_paper: RockScissorsPapers.computer_rock_scissors_paper,
  who_win:RockScissorsPapers.who_win,
  me_win:RockScissorsPapers.me_win,
  com_win:RockScissorsPapers.com_win,
  time:RockScissorsPapers.time
});

// **** 함수가 아닌 객체 설정시 자동 bindActionCreators 됨
const mapDispatchToProps = {rock, scissors, paper, next, reset, timeover, increasetime, resetTime };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RockScissorsPaperContainer);