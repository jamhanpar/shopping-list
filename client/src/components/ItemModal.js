import { useState } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

export default function ItemModal({ addItem }) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const toggle = () => {
    setModal(!modal);
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newItem = { name: name };

    addItem(newItem);
    toggle();
  };

  return (
    <div>
      <Button>Add Item</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                name="name"
                id="item"
                placeholder="Add Shopping Item"
                onChange={onChange}
              />
              <Button>
                  Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
