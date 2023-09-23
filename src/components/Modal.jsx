import React, { useState } from "react";
import ShowModal from "./ShowModal";

const Modal = () => {
  const [showModal, setShoeModal] = useState(false);

  const closeModal = () => setShoeModal(false);

  return (
    <div>
      <button
        onClick={() => {
          setShoeModal(true);
        }}
        className="modal-btn"
      >
        Open Modal
      </button>
      {showModal && <ShowModal closeModal={closeModal} />}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Modal;
