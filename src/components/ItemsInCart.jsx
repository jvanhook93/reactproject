import './ItemsInCart.css';

const ProductInCart = () => {
    return (
        <div className='prod-cart'>
            <img src='' alt='' />
            <h6>{props.data.title}</h6>

            <label>{props.data.quantity}</label>
            <label>{props.data.price}</label>
            <label>{props.data.price * props.data.quantity}</label>

            <button className='btn btn-sm btn-danger'></button>
        </div>
    )
}