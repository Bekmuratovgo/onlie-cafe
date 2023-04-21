import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";

export default function Basket({ visible, handleCloseBasket }) {

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
          {/* <Text b size={18} style>
            NextUI
          </Text> */}
        </Text>
      </Modal.Header>
      <Modal.Body>

        dddddd
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={() => handleCloseBasket(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}