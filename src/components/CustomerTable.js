import React, {useState}  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/CustomerTable.css';
import '../styling/Form.css';

function CustomerTable() {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

  return (
    <div className="file-table-container">
        <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" onClick={toggleModal}>
                Create New
        </button>
        <table className="table table-striped">
            <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Customer</th>
                    <th>WO</th>
                    <th>Part Number</th>
                    <th>Description</th>
                    <th>Initiator</th>
                    <th>Open Date</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Close Date</th>
                    <th>Category</th>
                    <th>Responsible</th>
                    <th>Qty/Total</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody onClick={toggleModal}>
                <tr class="odd" onClick={toggleModal}>
                    <td class="sorting_1">11</td>
                    <td>ENHANCED VISION...</td>
                    <td>
                        <a href="http://192.168.199.12/woinfo.php?wono=48952" target="_blank">
                        48952
                        </a>
                    </td>
                    <td>910-PWA-0771-A1</td>
                    <td class=" dt-head-right">Ina Test</td>
                    <td>Ina</td>
                    <td>2022-10-18</td>
                    <td>2022-10-19</td>
                    <td>Open</td>
                    <td></td>
                    <td>Customer Service</td>
                    <td>Minh</td>
                    <td>10 / 1000</td>
                    <td class=" dt-head-right"></td>
                </tr>
                <tr class="even">
                    <td class="sorting_1">10</td>
                    <td>SonTek/YSI Inco...</td>
                    <td>
                        <a href="http://192.168.199.12/woinfo.php?wono=48882" target="_blank">
                        48882
                        </a>
                    </td>
                    <td>910-18-0097-01</td>
                    <td class=" dt-head-right">Quality</td>
                    <td>Ina Grama</td>
                    <td>2022-10-18</td>
                    <td>2022-10-21</td>
                    <td>Open</td>
                    <td></td>
                    <td>Customer Service</td>
                    <td>Minh Nguyen</td>
                    <td>10 / 40</td>
                    <td class=" dt-head-right">Quality</td>
                </tr>
                <tr class="odd">
                    <td class="sorting_1">5</td>
                    <td>NORTHROP GRUMMA...</td>
                    <td>
                        <a href="http://192.168.199.12/woinfo.php?wono=46497" target="_blank">
                        46497
                        </a>
                    </td>
                    <td>930-F360167-1</td>
                    <td class=" dt-head-right">Part number uVOA002-...</td>
                    <td>Verjoyce Ilano</td>
                    <td>2021-06-22</td>
                    <td>2021-07-30</td>
                    <td>Closed</td>
                    <td>2021-08-30</td>
                    <td>Production</td>
                    <td>Minh Nguyen</td>
                    <td>2 / 4</td>
                    <td class=" dt-head-right">NG had found that qt...</td>
                </tr>
            </tbody>
        </table>
        {/* Modal-Create New*/}
        <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none'}}>
            <div className="modal-dialog" role="document" style={{ maxWidth: '1000px' }}>
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Details</h5>
                    <button type="button" className="close" onClick={toggleModal} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    {/* Add your form or detailed information here */}
                    <p>Details for the selected row go here.</p>

                    <div>
                        <div className='form-container'>
                            <form>
                                <fieldset>
                                    
                                        <label className="col-sm-1 col-form-label">Initiator</label>
                                            <input type="text" id="initiator" name="initiator" className="form-control" size="15" placeholder="Enter YOUR name" class="ui-autocomplete-input" autocomplete="off"/>
                                            &emsp;&emsp;<label className="col-sm-1 col-form-label">Category</label>
                                            
                                            
                                                <select id="category" name="categoryid">".
                                                    <option value="1">Customer Service</option>
                                                    <option value="2">Production</option>
                                                    <option value="3">Quality</option>
                                                    <option value="4">Engineering</option>
                                                    <option value="5">Test</option>
                                                    <option value="6">Shipping</option>
                                                    <option value="7">Receiving</option>
                                                    <option value="8">Kitting</option>
                                                    <option value="9">Equipment</option>
                                                    <option value="10">Machineshop</option><option value="11">Policy</option><option value="12">Facility</option><option value="13">Other</option>			
                                                </select>
                                            
                                    
                                    
                                        &emsp;&emsp;<label>Status</label>
                                        &nbsp;
                                        
                                            <select id="status" name="status">
                                                <option value="0" selected="">Open</option>
                                                <option value="1">Closed</option>
                                                <option value="2">Cancelled</option>
                                            </select>            
                                        
                                       
                                        <p><label>Work Order</label>
                                        &nbsp;<input type="text" id="wono" name="wono" size="4" title="If multiple, enter 'many' and list in notes below" class="ui-autocomplete-input" autocomplete="off"/>
                                        
                                        &emsp;&emsp;<label>Qty Affected</label>
                                        &nbsp;<input type="number" id="qtyaffected" name="qtyaffected" min="0" onChange={handleQtyAffectedChange}/>
                                        &nbsp;/&nbsp;<input type="number" id="bldqty" name="bldqty" onChange={handleBldQtyChange}/> Build Qty
                                        &emsp;<input type="text" id="percentage" size="3"  readOnly /> % defect
                                        </p>
                                    
                                        
                                    
                                        <p><label>Customer</label>
                                        &nbsp;<input type="text" id="customer" name="customer" placeholder="Customer or entity"/>
                                        </p><label>Part Number</label>
                                        &nbsp;<input type="text" id="partno" name="partno" placeholder="Customer or HiTEM P/N" size="20"/>
                                    
                                    
                                        &emsp;<label>Assigned to</label>
                                        &nbsp;<input type="text" id="responsible" name="responsible" size="15" placeholder="Responsible person" class="ui-autocomplete-input" autocomplete="off"/>
                                
                                        <div className="form-group row">
                                        <p>
                                            <label>Due</label>
                                            &nbsp;<input type="date" id="duedate" name="duedate" required=""/>
                                        </p>
                                        </div>
                                        <div className="form-group row">
                                        <p><label>Case Closed</label>
                                        &nbsp;<input type="date" id="closedate" name="closedate"/>
                                        </p>
                                        

                                        <p><label>Description of the problem</label>
                                        &nbsp;<input type="text" id="desc" name="desc" placeholder="50 characters maximum" maxlength="50"/>
                                        </p>

                                        <p><label>Notes</label>
                                        &nbsp;<textarea id="notes" name="notes" placeholder="Expound the problem so others can understand. Include only apropos information.  Be terse, but not taciturn. Please use simple words only."></textarea>
                                        
                                        <input type="submit" tabindex="-1"/>		
                                        </p>
                                    </div>
                                </fieldset>

                            </form>
                        </div>
                    </div>

                    {/* Add your form or detailed information here */}
                    </div>
                </div>
            </div>
        </div>
        <div className={`modal-backdrop fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} />
    </div>
  )
}
// Calculate % defect 
function calculatePercentage() {
    const qtyAffected = parseFloat(document.getElementById('qtyaffected').value);
    const bldQty = parseFloat(document.getElementById('bldqty').value);

    if (isNaN(qtyAffected) || isNaN(bldQty) || bldQty === 0) {
        return '';
    }

    const percentage = (qtyAffected * 100) / bldQty;
    return percentage.toFixed(2);
}

function handleQtyAffectedChange() {
    updatePercentageField();
}

function handleBldQtyChange() {
    updatePercentageField();
}

function updatePercentageField() {
    const percentageField = document.getElementById('percentage');
    if (percentageField) {
        percentageField.value = calculatePercentage();
    }
}

export default CustomerTable