import { Link } from 'react-router-dom'
import classes from './Thumbnails.module.css'
import StarRating from '../StarRating/StarRating'


export default function Thumbnails({ foods }) {
  return (
    <ul className={classes.list}>
       {foods.map(food => (
        <li key={food.id}>
            <Link to={`/food/${food.id}`}>
              <img 
                    className={classes.image}
                    src={`/foods/${food.imageUrl}`} 
                    alt={food.name}
              />
            </Link>
            <div className={classes.content}>
                <div className={classes.name}>
                     {food.name}
                    <span className={`${classes.favorite} ${food.favorite? '': classes.not

                     }`}
                    >
                        &hearts; 
                    </span>
                    <div className={classes.stars}>
                        <StarRating  stars={food.stars}/>
                    </div>
                </div>

            </div>
        </li>
       ))}
    </ul>
  )
}
