import './index.css';

const Slider = ({ volume, setVolume }) => {
  return (
  <div>
    <div id="slide-containter">
      <input type="range" min="0" max="100" step="1" onChange={(e) => setVolume(e.target.value/100)}></input>  
    </div>
    <div id="volume">{Math.round(volume*100)}</div>
  </div>
  )
}
export default Slider