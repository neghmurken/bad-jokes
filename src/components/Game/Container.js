import React from 'react';
import { connect } from 'react-redux';
import { Game } from './Game';
import {
  firstTeamScores,
  secondTeamScores,
  nextJoke,
  endOfGame,
  skipJoke
} from '../../actions/game';

class GameContainer extends React.Component {

  endOfGame() {
    this.props.endOfGame();
    this.props.navigation.navigate('Finish');
  }

  render() {
    return <Game
      joke={this.props.joke}
      teams={this.props.teams}
      game={this.props.game}
      firstTeamScores={this.props.firstTeamScores}
      secondTeamScores={this.props.secondTeamScores}
      nextJoke={this.props.nextJoke}
      skipJoke={this.props.skipJoke}
      endOfGame={this.endOfGame.bind(this)}
    />
  }
};

const mapStateToProps = (state) => ({
  joke: state.game.jokes[state.game.jokesIndex],
  teams: state.game.teams,
  game: state.game,
});

const mapDispatchToProps = (dispatch) => ({
  firstTeamScores: () => dispatch(firstTeamScores()),
  secondTeamScores: () => dispatch(secondTeamScores()),
  nextJoke: () => dispatch(nextJoke()),
  endOfGame: () => dispatch(endOfGame()),
  skipJoke: () => dispatch(skipJoke()),
})

export const Container = connect(mapStateToProps, mapDispatchToProps)(GameContainer);
