import React from "react";
import "./shop-cart-table.css"

interface Props {

}

const ShopCartTable: React.FC<Props> = () => {
  return (
     <div className="shopping-cart-table">
       <h2>Ваш заказ</h2>
       <table className="table">
         <thead>
          <th>#</th>
          <th>Товар</th>
          <th>Кол-во</th>
          <th>Цена</th>
          <th>Автор</th>
          <th>Действия</th>
         </thead>

         <tbody>
           <td>1</td>
           <td>Чистый код</td>
           <td>1</td>
           <td>$772</td>
           <td>Роберт Мартин</td>
            <td>
              <button className="btn btn-outline-success">
                <i className="bi bi-plus-circle-fill" />
              </button>
              <button className="btn btn-outline-danger">
                <i className="bi bi-trash3-fill" />
              </button>
              <button className="btn btn-outline-warning">
                <i className="bi bi-dash-circle-fill" />
              </button>
            </td>
         </tbody>
       </table>

       <div className="total">
         Итоговая цена: $772
       </div>
     </div>
  )
}

export default ShopCartTable