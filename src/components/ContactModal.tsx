import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Markdown from 'marked-react';
import { contact_text } from '../text/contact_text';

interface ContactModalProps {
  showContact: boolean;
  handleContact: () => void;
}

export default function ContactModal({
  showContact,
  handleContact,
}: ContactModalProps) {
  return (
    <Modal
      size="lg"
      show={showContact}
      onHide={handleContact}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Kontakt</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          minHeight: 300,
          maxHeight: 600,
          overflowX: 'auto',
        }}
      >
        <Markdown>{contact_text}</Markdown>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleContact}>
          Schließen
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
