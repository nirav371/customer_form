
<div className="form-group mb-3">
<label htmlFor="gender">Gender</label>
<div className="form-check">
  <input
    type="radio"
    className="form-check-input"
    id="option1"
    name="radioGroup"
    value="male"
    onChange={e => e.target.value}
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
    onChange={e => e.target.value}
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
    onChange={e => e.target.value}
  />
  <label className="form-check-label" htmlFor="option3">
    Other
  </label>
</div>
</div>