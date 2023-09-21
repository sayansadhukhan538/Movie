/* eslint-disable react/prop-types */

const Card = ({poster,title,date,media_type,vote_average}) => {
    
  return (
    <div >
        <div className="media">
            <img className="img" src={`https://image.tmdb.org/t/p/original${poster}`} alt={title} />
            <h3 className="title">{title}</h3>
            <div className="subTitle">
                <span>{media_type}</span>
                <span>{date}</span>
            </div>
            <div className="rating">
                <sup>{vote_average}</sup>
            </div>
        </div>
    </div>
  )
}

export default Card