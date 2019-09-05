import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editCompany } from '../../actions/dashboard';
import { withRouter } from 'react-router-dom';

const EditCompany = ({history}) => {
  const data = useSelector(state => {
    return {
      name: state.dashboard.name,
      imageUrl: state.dashboard.imageUrl,
      id: state.dashboard.id
    }
  })
  const dispatch = useDispatch();
  const updateCompany = (id, company) => dispatch(editCompany(id, company));
  const [nameField, setName] = useState(data.name);
  const [image, setImage] = useState(data.imageUrl);

  const onNameChange = e => {
    setName(e.target.value);
  }

  const onImageChange = e => {
    setImage(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();
    updateCompany(data.id, {
      name: nameField,
      imageUrl: image
    })
    history.push(`${data.id}`)
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Company Name</label>
        <input value={nameField} onChange={onNameChange} type="text" className="form-control" id="name" aria-describedby="companyname" placeholder="Enter Company Name" />
        <label htmlFor="unit">Image URL</label>
        <input value={image} onChange={onImageChange} type="text" className="form-control" id="image" aria-describedby="companyimage" placeholder="Enter Image URL" />
      </div>
      <button type="submit" className="btn btn-primary">Update Company</button>
    </form>
  );
};

export default withRouter(EditCompany);