import { Link, useNavigate } from "react-router-dom";
import ContactCard from "../components/contact-card";
import { useDispatch, useSelector } from "react-redux";
import { Contact, ContactsState, deleteContact } from "../features/contacts/contactsSlice";

export default function Contacts() {
    const contacts = useSelector((state: { contacts: ContactsState }) => state.contacts.contacts);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleEdit = (contact: Contact) => {
        navigate("/edit-contact", { state: { contact } })
    }

    const handleDelete = (id: string) => {
        dispatch(deleteContact(id));
    }

    return (
        <div className="py-8">
            <div className="flex justify-center mb-8">
                <Link to="/add-contact">
                    <button className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 rounded-lg px-6 py-3 text-white font-semibold shadow-md">
                        Create Contact
                    </button>
                </Link>
            </div>

            {contacts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mx-auto pl-10 md:pl-0">
                    {contacts.map((contact: Contact) => (
                        <div key={contact.id} className="w-full">
                            <ContactCard
                                firstName={contact.firstName}
                                lastName={contact.lastName}
                                status={contact.status}
                            />
                            <div className="flex items-center justify-center gap-2 mt-4 pr-10 md:pr-0">
                                <button onClick={() => handleEdit(contact)} className="bg-green-500 hover:bg-green-600 transition-colors duration-300 rounded-lg px-3 py-1 text-white font-semibold shadow-md">Edit</button>
                                <button onClick={() => handleDelete(contact.id)} className="bg-red-500 hover:bg-red-600 transition-colors duration-300 rounded-lg px-3 py-1 text-white font-semibold shadow-md">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-600 text-lg">
                    <p>No contacts available</p>
                </div>
            )}
        </div>

    );
}