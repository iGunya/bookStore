import React from "react";
import "./shop-cart-table.css"
import {ICartItem, ICartItems, ITotalPrice,} from "../../types/types";
import {RootState} from "../../srote";
import {connect} from "react-redux";
import {addBookToCard, removeBookFromCart, allRemoveBookFromCart} from "../../action";

interface DispatchProps {
  onIncrease: (id: number) => void
  onDecrease: (id: number) => void;
  onDelete: (id: number) => void;
}

type StateProps = ICartItems & ITotalPrice;

type Props = StateProps & DispatchProps

const ShopCartTable: React.FC<Props> = (props: Props) => {

  const { cartItems, totalPrice } = props;
  const { onIncrease, onDecrease, onDelete } = props;

  const renderRow = ({id, name, count, total}: ICartItem, indx: number) => {
    return (
      <tr key={id}>
        <td>{indx + 1}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>₽{total}</td>
        <td>
          <button className="btn btn-outline-success"
                  onClick={() => onIncrease(id)}>
            <i className="bi bi-plus-circle-fill" />
          </button>
          <button className="btn btn-outline-warning"
                  onClick={() => onDecrease(id)}>
            <i className="bi bi-dash-circle-fill" />
          </button>
          <button className="btn btn-outline-danger"
                  onClick={() => onDelete(id)}>
            <i className="bi bi-trash3-fill" />
          </button>

        </td>
      </tr>
    )
  }

  return (
     <div className="shopping-cart-table">
       <h2>Ваш заказ</h2>
       <table className="table">
         <thead>
           <tr>
            <th>#</th>
            <th>Товар</th>
            <th>Кол-во</th>
            <th>Цена</th>
            <th>Действия</th>
           </tr>
         </thead>

         <tbody>
           {
             cartItems.map((item, indx)=> {
               return renderRow(item, indx);
             })
           }
         </tbody>
       </table>

       <div className="total">
         Итоговая цена: ₽{totalPrice}
       </div>
     </div>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    cartItems: state.booksReducer["shoppingCart"]["cartItems"],
    totalPrice: state.booksReducer["shoppingCart"]["totalPrice"]
  }
}

const mapDispatchToProps: DispatchProps = {
  onIncrease: addBookToCard,
  onDecrease: removeBookFromCart,
  onDelete: allRemoveBookFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCartTable);