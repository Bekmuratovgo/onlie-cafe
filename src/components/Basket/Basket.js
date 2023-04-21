import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";
import FoodCard from "../Card/Card";

export default function Basket({ visible, handleCloseBasket }) {
  const order = () => {

  }
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={() => handleCloseBasket(false)}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Ваш заказ
        </Text>
      </Modal.Header>
      <Modal.Body>
        <FoodCard />
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={() => order()}>
          Оформить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}