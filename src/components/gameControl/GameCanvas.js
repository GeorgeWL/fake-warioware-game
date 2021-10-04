import PropTypes from 'prop-types';

const GameCanvas = ({ id, gameCompleted })=><canvas onClick={gameCompleted} id={id}></canvas>;

GameCanvas.propTypes ={
  id: PropTypes.string.isRequired,
  gameCompleted: PropTypes.func
};

export default GameCanvas;