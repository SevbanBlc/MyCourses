import react from 'react';

function Course({course}){
 const {id, title, descripiton, price, link,image} = course;
  return(
    <div className={course}>
      <div className="course">
        <img className='image' src={image} width={250} height={200}></img>
        <h4 className='title'>{title}</h4>
        <p className='desc'>{descripiton}</p>
        <h3 className='price'>{price} ₺</h3>
        <div className='link'><a  href={link}>to buy</a></div>

      </div>
    </div>
  )
}

export default Course
