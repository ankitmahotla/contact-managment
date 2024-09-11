import { useLocation } from "react-router-dom";
import ContactForm from "../components/contact-form";
import { Contact } from "../features/contacts/contactsSlice";

export default function EditContact() {
    const location = useLocation()
    const contact: Contact = location.state.contact;

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-medium mb-10">Update Contact</h1>
            <ContactForm
                contact={contact}
            />
        </div>
    )
}