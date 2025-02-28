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
                    <div className={classes.product_item_footer}>
                        <div className={classes.origins}>
                        {food.origin.map(origin => {
                        //    console.log("Origin:", food); 
                           return <span key={origin}>{origin}</span>;
})}
                        </div>
                         <div className={classes.cook_time}>
                            <span>&#9200;</span>
                            {food.cookTime}
                         </div>
                    </div>
                </div>

            </div>
        </li>
       ))}
    </ul>
  )
}
