import PropTypes from 'prop-types';

// import * as PIXI from 'pixi.js'
// TODO: Add Pixi
const GameCanvas = ({ id, gameCompleted })=><canvas onClick={gameCompleted} id={id}></canvas>;

GameCanvas.propTypes ={
  id: PropTypes.string.isRequired,
  gameCompleted: PropTypes.func
};

export default GameCanvas;