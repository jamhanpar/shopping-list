import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { getItems, deleteItem } from '../actions/ItemActions';
import PropTypes from 'prop-types';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';

export default function ShoppingList() {
  // add: { items } for props
  const [items, setItems] = useState([
    { id: uuidv4(), name: 'Eggs' },
    { id: uuidv4(), name: 'Milk' },
    { id: uuidv4(), name: 'Steak' },
    { id: uuidv4(), name: 'Water' },
  ]);
  const [name, setName] = useState('');

  useEffect(() => {
    // getItems();
  });

  const onDeleteClick = (id) => {
    // deleteItem(id);
  };

  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(({ id, name }) => (
            <CSSTransition key={id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={onDeleteClick(id)}
                >
                  &times;
                </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
}

