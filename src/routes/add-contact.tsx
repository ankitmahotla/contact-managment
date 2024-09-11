import ContactForm from "../components/contact-form";

export default function AddContact() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl mb-10 font-medium">Create Contact Screen</h1>
            <ContactForm />
        </div>
    )
}