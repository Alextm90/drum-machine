import './index.css';

const Slider = ({ volume, setVolume }) => {
  return (
    <div id="slide-containter">
      <input type="range" min="0" max="100"  onChange={(e) => setVolume(e.target.value/100)}></input>
      {`Volume: ${volume * 100}`}
    </div>
  )
}
export default Slider