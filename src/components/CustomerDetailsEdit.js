// import CustomerForm from './CustomerForm'
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateCoustemerDetails } from "../redux/coustemer/action";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const CustomerDetailsEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const coustemerDetail = useSelector((state) => state.customers);

  // console.log(Customer_id? Customer_id : CoustemerDetails.length - 1)
  // Customer_id = Customer_id? Customer_id : CoustemerDetails.length - 1

  const [coustemerDetails, setCoustemerDetails] = useState({
    name: coustemerDetail[id].name,
    email: coustemerDetail[id].email,
    mobileNo: coustemerDetail[id].mobileNo,
    picture: coustemerDetail[id].picture,
    gender: coustemerDetail[id].gender,
    favrouiteSubject: `${coustemerDetail[id].favrouiteSubject}`,
    hobbies: coustemerDetail[id].hobbies,
    date: coustemerDetail[id].date, 
  });
  // stringArray.indexOf(searchStr) > -1
  // debugger
  // console.log(coustemerDetail[id].hobbies.includes('problem solving') )
  let read = coustemerDetail[id].hobbies.indexOf("read") > -1;
  let problemsolving =
    coustemerDetail[id].hobbies.indexOf("problem solving") > -1;
  let business = coustemerDetail[id].hobbies.indexOf("bussiness") > -1;
  console.log(coustemerDetail[id].gender);
  let cyberSecurity = coustemerDetail[id].favrouiteSubject === "cyber security";
  let webDevelopment =
    coustemerDetail[id].favrouiteSubject === "web development";
  let dataScience = coustemerDetail[id].favrouiteSubject === "data science";
  let male = coustemerDetail[id].gender === "male";
  let female = coustemerDetail[id].gender === "female";
  let other = coustemerDetail[id].gender === "other";

  const [isSubmitted, setisSubmitted] = useState(false);

  const [ErrorMeassage, setErrorMeassage] = useState({
    eemail: "",
    ename: "",
    emobileNo: "",
  });
  const emeassage = {
    eemail: "",
    ename: "",
    emobileNo: "",
  };

  const SubmitHandle = (event) => {
    event.preventDefault();

    // if (coustemerDetails.name.length === 0) {
    //   setisSubmitted(true);
    //   emeassage.ename = "Name field is empty";
    // }
    // if (coustemerDetails.email.length === 0) {
    //   setisSubmitted(true);
    //   emeassage.eemail = "Email field is empty";
    // }
    // if (coustemerDetails.mobileNo.length === 0) {
    //   setisSubmitted(true);
    //   emeassage.emobileNo = "Mobile field is empty";
    // } else if (coustemerDetails.mobileNo.length !== 10) {
    //   setisSubmitted(true);
    //   emeassage.emobileNo = "Mobile number is invalid";
    // }

    console.log(coustemerDetails);
    dispatch(UpdateCoustemerDetails({ customerid: id, Cd: coustemerDetails }));

    if (isSubmitted) {
    }
    navigate("/page");
    setErrorMeassage(emeassage);
  };

  const handleCheckbox = (event) => {
    debugger
    if (event.target.checked) {
      setCoustemerDetails({
        ...coustemerDetail[id],
        hobbies: [...coustemerDetail[id].hobbies, event.target.value],
      });
      console.log(coustemerDetails)

    } 
    else {
      setCoustemerDetails({
        ...coustemerDetails[id],
        hobbies:[ coustemerDetails[id].hobbies.splice(
          coustemerDetails[id].hobbies.indexOf(event.target.value),
          1
        )]
      });
    }
  };
  

  const handlefile = (e) => {
    setCoustemerDetails({
      ...coustemerDetails,
      picture: URL.createObjectURL(e.target.files[0]),
    });
  };
  return (
    <>
      <form className="border rounded p-4 m-4">
        <div className="row">
          <div className="row mb-3">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={coustemerDetails.name}
                onChange={(event) => {
                  setCoustemerDetails({
                    ...coustemerDetails,
                    name: event.target.value,
                  });
                }}
              />
              {isSubmitted && (
                <p style={{ color: "red" }}>{ErrorMeassage.ename}</p>
              )}
            </div>
          </div>

          <div className="col mb-3">
            <div className="form-group">
              <label htmlFor="mobile">Mobile No.</label>
              <input
                type="text"
                className="form-control mr-5"
                id="mobile"
                placeholder="Enter Mobile No."
                value={coustemerDetails.mobileNo}
                onChange={(event) => {
                  setCoustemerDetails({
                    ...coustemerDetails,
                    mobileNo: event.target.value,
                  });
                }}
              />
              {isSubmitted && (
                <p style={{ color: "red" }}>{ErrorMeassage.emobileNo}</p>
              )}
            </div>
          </div>
          <div className="col mb-3 ">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control "
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={coustemerDetails.email}
                onChange={(event) => {
                  setCoustemerDetails({
                    ...coustemerDetails,
                    email: event.target.value,
                  });
                }}
              />
              {isSubmitted && (
                <p style={{ color: "red" }}>{ErrorMeassage.eemail}</p>
              )}
            </div>
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="gender">Gender</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="option1"
              name="radioGroup"
              value="male"
              onChange={(event) => {
                setCoustemerDetails({
                  ...coustemerDetails,
                  gender: event.target.value,
                });
              }}
              checked={male}
              // checked={coustemerDetail[id].gender === "male" ? true : false}
            />

            <label className="form-check-label " htmlFor="option1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="option2"
              name="radioGroup"
              value="female"
              onChange={(event) =>
                setCoustemerDetails({
                  ...coustemerDetails,
                  gender: event.target.value,
                })
              }
              checked={female}
              // checked={coustemerDetail.gender === "female" ? true : false}
            />
            <label className="form-check-label" htmlFor="option2">
              Female
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="option3"
              name="radioGroup"
              value="other"
              onChange={(event) =>
                setCoustemerDetails({
                  ...coustemerDetails,
                  gender: event.target.value,
                })
              }
              checked={other}
              // checked={coustemerDetail.gender === "other" ? true : false}
            />
            <label className="form-check-label" htmlFor="option3">
              Other
            </label>
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="gender">Favorite Subject</label>
          <select
            className="form-control"
            id="gender"
            onChange={(event) => {
              setCoustemerDetails({
                ...coustemerDetails,
                favrouiteSubject: event.target.value,
              });
            }}
          >
            <option value="choise">choose your Favourite subject...</option>
            <option
              value="cyber security"
              selected={cyberSecurity}
              // selected={
              //   coustemerDetail.favrouiteSubject.includes("cyber security")
              //     ? true
              //     : false
              // }
            >
              Cyber Security
            </option>
            <option
              value="web development"
              selected={webDevelopment}
              // selected={
              //   coustemerDetail.favrouiteSubject.includes("web development")
              //     ? true
              //     : false
              // }
            >
              Web Development
            </option>
            <option
              value="data science"
              selected={dataScience}
              // selected={
              //   coustemerDetail.favrouiteSubject.includes("data science")
              //     ? true
              //     : false
              // }
            >
              Data Science
            </option>
          </select>
        </div>

        <div className="form-group mb-3">
          <label>Hobbies</label>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="checkbox1"
              name="checkboxGroup"
              value="read"
              onChange={handleCheckbox}
              checked={read}
            />
            <label className="form-check-label" htmlFor="checkbox1">
              Read
            </label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="checkbox2"
              name="checkboxGroup"
              value="problem solving"
              onChange={handleCheckbox}
              checked={problemsolving}
            />
            <label className="form-check-label" htmlFor="checkbox2">
              Problem Solving
            </label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="checkbox3"
              name="checkboxGroup"
              value="business"
              onChange={handleCheckbox}
              checked={business}
            />
            <label className="form-check-label" htmlFor="checkbox3">
              Business
            </label>
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            className="form-control"
            id="birthday"
            defaultValue={coustemerDetail[id].date}
            onChange={(event) => {
              setCoustemerDetails({
                ...coustemerDetails,
                date: event.target.value,
              });
            }}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="filename">Upload File</label>
          <input
            type="file"
            className="form-control-file"
            id="filename"
            accept="images/*"
            // value={coustemerDetail[id].picture}
            onChange={handlefile}
          />
        </div>
        {/* <Link to="/page"> */}
        <button
          type="submit"
          className="btn btn-primary mb-3 px-10"
          onClick={SubmitHandle}
        >
          submit
        </button>
        {/* </Link> */}
      </form>
    </>
  );
};

export default CustomerDetailsEdit;
