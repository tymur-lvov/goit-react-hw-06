import { BsFillTelephoneFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

function Contact({ contact }) {
  const { name, number, id } = contact;

  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.field}>
          <IoPerson size={20} />
          <p>{name}</p>
        </div>
        <div className={s.field}>
          <BsFillTelephoneFill size={20} />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={s.delete_button}
        type="button"
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </>
  );
}

export default Contact;
