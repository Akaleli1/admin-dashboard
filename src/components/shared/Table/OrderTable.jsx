import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons'

const orders = [ 
  {
    id:1,
    date:'20 Jan 2022',
    subtotal:'75.32',
    total:'82.1',
    item_title:'Red Fjallraven Kanken Backpack',
    first_name:'Alaz',
    last_name:'Kalelioglu',
  },
  {
    id:2,
    date:'20 Jan 2022',
    subtotal:'63.32',
    total:'67.12',
    item_title:'Fjallraven - Foldsack No. 1 Backpack',
    first_name:'Kevin',
    last_name:'Hart',
  },
  {
    id:3,
    date:'21 Jan 2022',
    subtotal:'103.32',
    total:'111.4',
    item_title:'Mens Casual Slim Fit',
    first_name:'Nick',
    last_name:'Carter',
  },
  {
    id:4,
    date:'22 Jan 2022',
    subtotal:'234.53',
    total:'243.59',
    item_title:'White Gold Plated Princess',
    first_name:'Steve',
    last_name:'Rogers',
  },
  {
    id:5,
    date:'25 Jan 2022',
    subtotal:'21.99',
    total:'28.67',
    item_title:'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
    first_name:'Mikasa',
    last_name:'Hopkins',
  },
]

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