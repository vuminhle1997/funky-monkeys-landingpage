import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Markdown from 'marked-react';
import { disclaimerText } from '../text/disclaimer_text';

interface DisclaimerModalProps {
  showDisclaimer: boolean;
  handleDisclaimer: () => void;
}

export default function DisclaimerModal({
  showDisclaimer,
  handleDisclaimer,
}: DisclaimerModalProps) {
  return (
    <Modal
      size="lg"
      show={showDisclaimer}
      onHide={handleDisclaimer}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Datenschutzerklärung & Impressum</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          minHeight: 300,
          maxHeight: 600,
          overflowX: 'auto',
        }}
      >
        <Markdown>{disclaimerText}</Markdown>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleDisclaimer}>
          Schließen
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
