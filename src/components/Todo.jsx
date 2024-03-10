import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { Remove, Update_data } from '../redux/actions/action';

const Todo = () => {
  const [showeye, setshoweye] = useState(false);
  const [showeyevalue, setshoweyevalue] = useState(' ');

  const [show, setshow] = useState(false);
  const [update, setupdate] = useState('');
  const [ind, setind] = useState('');
  const [deletePopup, setDeletePopup] = useState(false);
  const [updatePopup, setUpdatePopup] = useState(false);

  const handleClose = () => {
    setshow(false);
    setDeletePopup(false);
    setUpdatePopup(false);
  };

  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(Remove(id));
    setDeletePopup(true);
  };

  const handleshow = (el) => {
    setshow(true);
    setupdate(el);
  };

  const { user_data } = useSelector((state) => state.todoreducers);
  console.log(user_data);

  const usetask_update = () => {
    dispatch(Update_data(update, ind));
    setUpdatePopup(true);
    handleClose();
  };

  useEffect(() => {
    if (deletePopup || updatePopup) {
      setTimeout(() => {
        setDeletePopup(false);
        setUpdatePopup(false);
      }, 2000);
    }
  }, [deletePopup, updatePopup]);

  return (
    <div>
      <div className="todo_data col-lg-5 mx-auto mt-2">
        {user_data.map((item, index) => (
          <div
            className="todo_container mb-2 d-flex justify-content-between align-items-center px-2"
            style={{ backgroundColor: '#dcdde1', borderRadius: '3px', height: '45px' }}
            key={index}
          >
            <li style={{ listStyle: 'none' }}>{item}</li>
            <div className="edit_dlt col-lg-3 py-2 d-flex justify-content-between align-items-center">
              <EditIcon
                onClick={() => {
                  handleshow(item);
                  setind(index);
                }}
                style={{ color: '#3c40c6', cursor: 'pointer' }}
              ></EditIcon>
              <DeleteIcon
                style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => remove(index)}
              ></DeleteIcon>
              <VisibilityIcon
                style={{ color: '#1dd1a1', cursor: 'pointer' }}
                onClick={() => {
                  setshoweye(true);
                  setshoweyevalue(item);
                }}
              ></VisibilityIcon>
            </div>
          </div>
        ))}
        <Modal show={showeye} onHide={() => setshoweye(false)}>
          <h1>{showeyevalue}</h1>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setshoweye(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={show} onHide={handleClose}>
          <h3 className="text-center mt-2">Update Your Task</h3>
          <Modal.Header closeButton>
            <div className="todo col-lg-5 mx-auto d-flex">
              <input
                className="form-control"
                name="task"
                value={update}
                onChange={(e) => setupdate(e.target.value)}
              ></input>
            </div>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={usetask_update}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Delete Popup */}
        {deletePopup && (
          <div className="delete-popup">
            <p>Task Deleted!</p>
          </div>
        )}

        {/* Update Popup */}
        {updatePopup && (
          <div className="update-popup">
            <p>Task Updated!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
