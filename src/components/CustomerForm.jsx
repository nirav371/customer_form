import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CoustemerDetails } from "../redux/coustemer/action";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const CustomerForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const coustemerDetail = useSelector((state) => state.customers);
 
  // console.log(user_id? user_id : CoustemerDetails.length - 1)
  // user_id = user_id? user_id : CoustemerDetails.length - 1

  const [coustemerDetails, setCoustemerDetails] = useState({
    name: coustemerDetail.name,
    email: coustemerDetail.email,
    mobileNo: coustemerDetail.mobileNo,
    picture: coustemerDetail.picture,
    gender: coustemerDetail.gender,
    favrouiteSubject: `${coustemerDetail.favrouiteSubject}`,
    hobbies: [],
    date: coustemerDetail.date,
  });
  

  const [isSubmitted, setisSubmitted] = useState(false);
  // const [allset, setAllset] = useState(true)
  // setAllset(true)

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

    if (coustemerDetails.name.length === 0) {
      setisSubmitted(true);
      // setAllset(false)
      emeassage.ename = "Name field is empty";
    }
    if (coustemerDetails.email.length === 0) {
      setisSubmitted(true);
      // setAllset(false)
      emeassage.eemail = "Email field is empty";
    }
    if (coustemerDetails.mobileNo.length === 0) {
      setisSubmitted(true);
      // setAllset(false)
      emeassage.emobileNo = "Mobile field is empty";
    } else if (coustemerDetails.mobileNo.length !== 10) {
      setisSubmitted(true);
      // setAllset(false)
      emeassage.emobileNo = "Mobile number is invalid";
    }

    console.log(coustemerDetails);
    
    dispatch(CoustemerDetails(coustemerDetails));
    if (isSubmitted) {
      navigate("/page");
    }
    setErrorMeassage(emeassage);
  };

  const handleCheckbox = (event) => {
    console.log(event.target.checked);
    if (event.target.checked) {
      setCoustemerDetails({
        ...coustemerDetails,
        hobbies: [...coustemerDetails.hobbies, event.target.value],
      });
    } else {
      setCoustemerDetails({
        ...coustemerDetails,
        // array.splice(index, 1);
        hobbies: coustemerDetails.hobbies.splice(
          coustemerDetails.hobbies.indexOf(event.target.value),
          1
        ),
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
                // value={'hello'}
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
              // checked = {(coustemerDetail.gender === 'male')? "true":"false"}
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
              // checked = {(coustemerDetail.gender === 'female')? "true":"false"}
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
              // checked = {(coustemerDetail.gender === 'other')? "true":"false"}
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
              // selected={
              //   (coustemerDetail.favrouiteSubject === "cyber security")
              //     ? "true"
              //     : "false"
              // }
            >
              Cyber Security
            </option>
            <option
              value="web development"
              // selected={
              //   coustemerDetail.favrouiteSubject === "web development"
              //     ? "true"
              //     : "false"
              // }
            >
              Web Development
            </option>
            <option
              value="data science"
              // selected={
              //   coustemerDetail.favrouiteSubject === "data science"
              //     ? "true"
              //     : "false"
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
              // checked = {(coustemerDetail.hobbies == 'read')? "true":"false"}
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
              // checked = {(coustemerDetail.favrouiteSubject == 'problem solving')? "true":"false"}
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
              // checked = {(coustemerDetail.favrouiteSubject == 'business')? "true":"false"}
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
            value={coustemerDetail.date}
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
            // value={coustemerDetail.picture}
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

export default CustomerForm;
