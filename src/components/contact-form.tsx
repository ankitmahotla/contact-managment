import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useDispatch } from 'react-redux';
import { addContact, editContact, Contact } from '../features/contacts/contactsSlice';
import { useNavigate } from 'react-router-dom';

const formSchema = z.object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
    status: z.enum(['active', 'inactive'] as const, {
        required_error: "You need to select a status.",
    }),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
    contact?: Contact;
}

const ContactForm: React.FC<ContactFormProps> = ({ contact }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: contact ? {
            firstName: contact.firstName,
            lastName: contact.lastName,
            status: contact.status,
        } : {
            firstName: "",
            lastName: "",
            status: "active",
        },
    });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        if (contact) {
            dispatch(editContact({ id: contact.id, ...data }));
        } else {
            dispatch(addContact(data));
        }
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-5/6 max-w-md md:max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
            <div className="p-6">
                <h2 className="text-2xl font-bold">{contact ? 'Edit Contact' : 'Add New Contact'}</h2>
            </div>
            <div className="p-6 space-y-6">
                <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
                    <input
                        type="text"
                        id="firstName"
                        {...register("firstName")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                    />
                    {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
                    <input
                        type="text"
                        id="lastName"
                        {...register("lastName")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                    />
                    {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
                </div>

                <div className="space-y-2">
                    <span className="block text-sm font-medium text-gray-700">Status</span>
                    <div className="mt-2 space-y-2">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="active"
                                value="active"
                                {...register("status")}
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label htmlFor="active" className="ml-3 block text-sm font-medium text-gray-700">
                                Active
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="inactive"
                                value="inactive"
                                {...register("status")}
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label htmlFor="inactive" className="ml-3 block text-sm font-medium text-gray-700">
                                Inactive
                            </label>
                        </div>
                    </div>
                    {errors.status && <p className="mt-1 text-sm text-red-600">{errors.status.message}</p>}
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
                    >
                        {contact ? 'Update Contact' : 'Add Contact'}
                    </button>
                </div>
            </div>
        </form>

    );
};

export default ContactForm;