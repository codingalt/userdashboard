import React,{useState} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import '../css/users.css'
import * as ai from "react-icons/ai";
import user from '../images/profile.jpg'


const Users = () => {
    const [active, setActive] = useState(true);

  return (
    <>

          <div className="content" style={{background: '#081730'}}>
    
                <div className="container mx-md-3 shadow border" style={{maxWidth: '90%',borderRadius: '13px',background: '#081730'}}>
                  <h3 className="mb-4 pt-4 ml-2">Users</h3>
            
                  <div className="table-responsive" >
            
                    <table className="table custom-table">
                      <thead>
                        <tr>
                          <th style={{width: '40px'}} scope="col">
                            <label className="control control--checkbox">
                              <input type="checkbox" className="js-check-all" />
                              <div className="control__indicator"></div>
                            </label>
                          </th>
                          <th scope="col">SNO</th>
                          <th scope="col">Profile</th>
                          <th scope="col">Name</th>
                          <th scope="col">Contact</th>
                          <th scope="col">Email</th>
                          <th scope="col">Education</th>

                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <label className="control control--checkbox" >
                              <input type="checkbox" />
                              <div className="control__indicator"></div>
                            </label>
                          </th>
                          <td>1</td>
                          <td><img src={user} style={{width: '44px',height: '40px',borderRadius: '50%'}} alt="" /></td>
                          <td>M Faheem</td>
                          <td>+63 983 0962 971</td>
                          <td>faheemmalik886@gmail.com</td>
                          <td>NY University</td>
                     

                        </tr>
                        <tr>
                          <th scope="row">
                            <label className="control control--checkbox">
                              <input type="checkbox"/>
                              <div className="control__indicator"></div>
                            </label>
                          </th>
                          <td>2</td>
                          <td><img src={user} style={{width: '44px',height: '40px',borderRadius: '50%'}} alt="" /></td>
                          <td>Hateem</td>
                          <td>+02 020 3994 929</td>
                          <td>hateem998@yahoo.com</td>
                          <td>NY University</td>
                     
                        </tr>
                        <tr>
                          <th scope="row">
                            <label className="control control--checkbox">
                              <input type="checkbox"/>
                              <div className="control__indicator"></div>
                            </label>
                          </th>
                          <td>4</td>
                          <td><img src={user} style={{width: '44px',height: '40px',borderRadius: '50%'}} alt="" /></td>
                          <td>Zahid Yousaf</td>
                          <td>+02 020 3994 929</td>
                          <td>hateem998@yahoo.com</td>
                          <td>NY University</td>
                     
                        </tr>
                        <tr>
                          <th scope="row">
                            <label className="control control--checkbox">
                              <input type="checkbox"/>
                              <div className="control__indicator"></div>
                            </label>
                          </th>
                          <td>5</td>
                          <td><img src={user} style={{width: '44px',height: '40px',borderRadius: '50%'}} alt="" /></td>
                          <td>Zaheer Ahmad</td>
                          <td>+02 020 3994 929</td>
                          <td>hateem998@yahoo.com</td>
                          <td>NY University</td>
                     
                        </tr>
                        <tr>
                          <th scope="row">
                            <label className="control control--checkbox">
                              <input type="checkbox"/>
                              <div className="control__indicator"></div>
                            </label>
                          </th>
                          <td>6</td>
                          <td><img src={user} style={{width: '44px',height: '40px',borderRadius: '50%'}} alt="" /></td>
                          <td>Ahmad Raza</td>
                          <td>+02 020 3994 929</td>
                          <td>hateem998@yahoo.com</td>
                          <td>NY University</td>
                     
                        </tr>

                        <tr>
                          <th scope="row">
                            <label className="control control--checkbox">
                              <input type="checkbox"/>
                              <div className="control__indicator"></div>
                            </label>
                          </th>
                          <td>6</td>
                          <td><img src={user} style={{width: '44px',height: '40px',borderRadius: '50%'}} alt="" /></td>
                          <td>Muneeb</td>
                          <td>+02 020 3994 929</td>
                          <td>hateem998@yahoo.com</td>
                          <td>NY University</td>
                     
                        </tr>
                        <tr>
                          <th scope="row">
                            <label className="control control--checkbox">
                              <input type="checkbox"/>
                              <div className="control__indicator"></div>
                            </label>
                          </th>
                          <td>8</td>
                          <td><img src={user} style={{width: '44px',height: '40px',borderRadius: '50%'}} alt="" /></td>
                          <td>Ahmad Raza</td>
                          <td>+02 020 3994 929</td>
                          <td>hateem998@yahoo.com</td>
                          <td>NY University</td>
                     
                        </tr>
                        <tr>
                          <th scope="row">
                            <label className="control control--checkbox">
                              <input type="checkbox"/>
                              <div className="control__indicator"></div>
                            </label>
                          </th>
                          <td>7</td>
                          <td><img src={user} style={{width: '44px',height: '40px',borderRadius: '50%'}} alt="" /></td>
                          <td>Ahmad Raza</td>
                          <td>+02 020 3994 929</td>
                          <td>hateem998@yahoo.com</td>
                          <td>NY University</td>
                     
                        </tr>
         
                        
                      </tbody>
                    </table>
                  </div>
            
            
                </div>
            
              </div>
    </>
  )
}

export default Users