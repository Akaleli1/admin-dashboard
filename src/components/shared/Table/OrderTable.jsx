import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons'



function Order() {
 

  return (
    <div className="order-table-container">
    <div className="table-container">

  
    <div className="date-picker">
      <input placeholder="From" type="date"/>
      <input placeholder="To" type="date"/>
    </div>

    

    <table className="order-table">
      <thead className="table-header-section">
        <tr>
        <th>View</th>
        <th> <strong> Order ID </strong> </th>
        <th><strong>Purchase Date</strong></th>
        <th><strong>Item Name</strong></th>
        <th><strong>First Name</strong></th>
        <th><strong>Last Name</strong></th>
        <th><strong>Subtotal</strong></th>
        <th><strong>Total</strong></th>
        </tr>
      </thead>
      
      
      <tbody>
        <tr className="table-row odd">
          <td> <FontAwesomeIcon icon={faEye} /> </td>
          <td>123253</td>
          <td>15 Jun 2022</td>
          <td>Kanken Backpack Red</td>
          <td>Alazisko</td>
          <td>Kaleliogluisko</td>
          <td>$199.3</td>
          <td>$108.32</td>
        </tr>
        <tr className="table-row even">
          <td> <FontAwesomeIcon icon={faEye} /> </td>
          <td>123253</td>
          <td>15 Jun 2022</td>
          <td>Kanken Backpack Red</td>
          <td>Alazisko</td>
          <td>Kaleliogluisko</td>
          <td>$199.3</td>
          <td>$108.32</td>
        </tr>
        <tr className="table-row odd">
          <td> <FontAwesomeIcon icon={faEye} /> </td>
          <td>123253</td>
          <td>15 Jun 2022</td>
          <td>Kanken Backpack Red</td>
          <td>Alazisko</td>
          <td>Kaleliogluisko</td>
          <td>$199.3</td>
          <td>$108.32</td>
        </tr>
        <tr className="table-row even">
          <td> <FontAwesomeIcon icon={faEye} /> </td>
          <td>123253</td>
          <td>15 Jun 2022</td>
          <td>Kanken Backpack Red</td>
          <td>Alazisko</td>
          <td>Kaleliogluisko</td>
          <td>$199.3</td>
          <td>$108.32</td>
        </tr>
        <tr className="table-row odd">
          <td> <FontAwesomeIcon icon={faEye} /> </td>
          <td>123253</td>
          <td>15 Jun 2022</td>
          <td>Kanken Backpack Red</td>
          <td>Alazisko</td>
          <td>Kaleliogluisko</td>
          <td>$199.3</td>
          <td>$108.32</td>
        </tr>
        <tr className="table-row even">
          <td> <FontAwesomeIcon icon={faEye} /> </td>
          <td>123253</td>
          <td>15 Jun 2022</td>
          <td>Kanken Backpack Red</td>
          <td>Alazisko</td>
          <td>Kaleliogluisko</td>
          <td>$199.3</td>
          <td>$108.32</td>
        </tr>
        <tr className="table-row odd">
          <td> <FontAwesomeIcon icon={faEye} /> </td>
          <td>123253</td>
          <td>15 Jun 2022</td>
          <td>Kanken Backpack Red</td>
          <td>Alazisko</td>
          <td>Kaleliogluisko</td>
          <td>$199.3</td>
          <td>$108.32</td>
        </tr>
      </tbody>
      
      <tfoot></tfoot>
    </table>
      </div>
    </div>
  )
}

export default Order;