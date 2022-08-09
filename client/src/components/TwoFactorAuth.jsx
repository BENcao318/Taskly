import React from "react";
import { Button, Modal, Label, TextInput} from 'flowbite-react'
import { ReactComponent as Lock } from '../assets/lock.svg'
import 'semantic-ui-css/semantic.min.css'

export const TwoFactorAuth = ({ onClick, onClose}) => {

return (
<React.Fragment>
<Button onClick={onClick}>
    Send Tasks to Client
  </Button>
<Modal
    show={false}
    onClose={onClose}
  >
    <Modal.Header>
      This page is password protected for your safety
    </Modal.Header>
    <Modal.Body>
      <div className="space-y-6">
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          A security code has been sent to your email. Please enter it below to access this page.
        </p>
        </div>
        <form className="flex flex-col gap-4">
      
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="code"
        value="Security Code"
      />
    </div>
    <TextInput
      id="code"
      type="passcode"
      placeholder="xxxxxx"
      required={true}
    />
      </div>
      </form>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onClick}>
        Verify
      </Button>
    </Modal.Footer>
    </Modal>
</React.Fragment>
);
};
