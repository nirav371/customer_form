import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { DeleteCoustemerDetails } from "../redux/coustemer/action";
import { useDispatch } from "react-redux";


function DisplayData() {
  const dispatch = useDispatch();
  const coustemerDetails = useSelector((state) => state.customers);
  // useEffect(() => { 
  //   console.log('hello')
  // },[coustemerDetails.length])
  const [isShown, setIsShown] = useState(false);
  const deleteCustomerdata = (id) => {
    dispatch(DeleteCoustemerDetails(id)) 
    setIsShown(!isShown)
  } 
  
  return (
    <>
      <div className="container"> 
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Gender</th>
                <th>Favorite Subject</th>
                <th>Hobbies</th>
                <th>Birth Date</th>
                <th>Image</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {coustemerDetails.map((user, id) => {
                return (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{coustemerDetails[id].name}</td>
                    <td>{coustemerDetails[id].email}</td>
                    <td>{coustemerDetails[id].mobileNo}</td>
                    <td>{coustemerDetails[id].gender}</td>
                    <td>{coustemerDetails[id].favrouiteSubject}</td>
                    <td>{coustemerDetails[id].hobbies.map((hobby,id) => <p>{hobby}</p>)}</td>
                    <td>{coustemerDetails[id].date}</td>
                    <td>
                      <img
                        style={{
                          width: 100,
                          height: 80,
                        }}
                        className="playerProfilePic_home_tile w"
                        src={coustemerDetails[id].picture}
                        alt="Profile"
                      />
                    </td>
                    <td>
                      <Link to={`/edit/${id}`}>
                        <button className="btn btn-primary">Edit</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => deleteCustomerdata(id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}

              {/* <!-- Add more rows here as needed --> */}
            </tbody>
          </table>
        </div>
        <Link to="/">
          <button
            className="btn btn-success "
            style={{ position: "absolute", right: "118.3px" }}
          >
            Add new data
          </button>
        </Link>
      </div>
    </>
  );
}

export default DisplayData;
