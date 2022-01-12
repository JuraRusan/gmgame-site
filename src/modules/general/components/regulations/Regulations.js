import React, { useState } from "react";
import Accordion from "../Accordion/Accordion.js";

import "./Regulations.scss";

const Regulations = () => {

 const [modal, setModal] = useState(false);

 const toggleModal = () => { setModal(!modal); };

 return (
  <div className="regulation">
   <button onClick={toggleModal} className="btn-regulation">Правила</button>

   {modal && (
    <div className="regulation-modal">
     <div onClick={toggleModal} className="regulation-overlay"></div>
     <div className="modal-content">
      <h2 className="reg-header">Правила GMGame</h2>
      <Accordion />
      <p >
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
       perferendis suscipit officia recusandae, eveniet quaerat assumenda
       id fugit, dignissimos maxime non natus placeat illo iusto!
       Sapiente dolorum id maiores dolores? Illum pariatur possimus
       quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
       placeat tempora vitae enim incidunt porro fuga ea.
      </p>
      <button className="close-regulation" onClick={toggleModal}>X</button>
     </div>
    </div>
   )}

  </div>
 );
}

export default Regulations;
