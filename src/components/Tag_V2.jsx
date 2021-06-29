import { useState } from 'react';
import useGif from '../useGif';

const Tag = () => {
  const [tag, setTag] = useState('dogs');
  const { gif, fetchGif } = useGif(tag);

  const handleClick = () => {
    fetchGif(tag);
  };

  return (
    <div className='container'>
      <h1>Random Gif</h1>
      <img src={gif} alt='Random Gif' width='500' />
      <input type='text' value={tag} onChange={e => setTag(e.target.value)} />
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  );
};

export default Tag;
