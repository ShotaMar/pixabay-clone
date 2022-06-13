import logo from './logo.svg';
import './App.css';
import ImageGallery from './ImageGallery';
import { useRef, useState } from 'react';

function App() {
  const APIKEY = process.env.React_APP_API_KEY;
  const [fetchData, setFetchData] = useState([])
  const ref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const endpointURL = `https://pixabay.com/api/?key=${APIKEY}&q=${ref.current.value}&image_type=photo`
    fetch(endpointURL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setFetchData(data.hits)
        console.log(data.hits)
      })
  }

  return (
    <div className='container'>
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text' placeholder='画像を探す' ref={ref}/>
      </form>
      <ImageGallery fetchData={fetchData}/>
    </div>)
}

export default App;
