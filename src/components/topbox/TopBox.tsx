import './topBox.scss'
import { topDealUsers } from '../../dats'

const TopBox = () => {
  return (
    <div className='topBox'>
      <h1>Top Deals</h1>
      {topDealUsers.map((item) => (
        <div className='card' key={item.id}>
        <img src={item.img} alt="" />
        <div className='text'>
          <span className='username'>{item.username}</span>
          <span className='email'>{item.email}</span>
        </div>
        <span className='amount'>${item.amount}</span>
        </div>
      ))}
    </div>
  )
}

export default TopBox