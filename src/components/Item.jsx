/* eslint-disable react/prop-types */
import '../components/DialogCard.css'

const Item = ({item}) => {
  return (
    <div className='root'>
        <img src={`https://image.tmdb.org/t/p/original${item?.profile_path}`} alt="" />
        <p>{item?.name}</p>
    </div>
  )
}

export default Item