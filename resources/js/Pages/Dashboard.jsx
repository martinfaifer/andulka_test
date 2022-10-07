import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from "@inertiajs/inertia";
import { Link, Head } from '@inertiajs/inertia-react';
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

const Dashboard = () => {
    const { products } = usePage().props;
    const { storages } = usePage().props;
    const { suppliers } = usePage().props;

    return (
        <div>
            <div className="container mx-auto">
                <h1 className="mb-8 text-3xl font-bold text-center">Produkty</h1>
                <div className="flex items-center justify-between mb-1">
                    <InertiaLink
                        className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                        href={route("products.create")}
                    >
                        Vytvořit produkt
                    </InertiaLink>
                </div>

                <div className="overflow-x-auto bg-white rounded shadow">
                    <table className="w-full whitespace-nowrap">
                        <thead className="text-white bg-gray-600">
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">#</th>
                                <th className="px-6 pt-5 pb-4">Název</th>
                                <th className="px-6 pt-5 pb-4">Cena</th>
                                <th className="px-6 pt-5 pb-4">Dodavatel</th>
                                <th className="px-6 pt-5 pb-4">Sklad</th>
                                <th className="px-6 pt-5 pb-4">Dostupnost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(({ id, name, cost, supplier, storage , availibility}) => (
                                <tr key={id} className="">
                                    <td className="border-t">
                                            {id}
                                    </td>
                                    <td className="border-t">
                                            {name}
                                    </td>
                                    <td className="border-t">
                                            {cost}
                                    </td>
                                    <td className="border-t">
                                            {supplier}
                                    </td>
                                    <td className="border-t">
                                            {storage}
                                    </td>
                                    <td className="border-t">
                                            {availibility}
                                    </td>
                                </tr>
                            ))}
                            {products.length === 0 && (
                                <tr>
                                    <td
                                        className="px-6 py-4 border-t"
                                        colSpan="4"
                                    >
                                        Nebyli nalezeny žádné produkty.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            {/* storages */}
            <br />
            <h1 className="mb-8 text-3xl font-bold text-center">Sklady</h1>
                <div className="flex items-center justify-between mb-1">
                    <InertiaLink
                        className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                        href={route("storages.create")}
                    >
                        Přidat nový sklad
                    </InertiaLink>
                </div>

                <div className="overflow-x-auto bg-white rounded shadow">
                    <table className="w-full whitespace-nowrap">
                        <thead className="text-white bg-gray-600">
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">#</th>
                                <th className="px-6 pt-5 pb-4">Dodavatel</th>
                                <th className="px-6 pt-5 pb-4">Adresa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {storages.map(({ id, supplier, address }) => (
                                <tr key={id} className="">
                                    <td className="border-t">
                                            {id}
                                    </td>
                                    <td className="border-t">
                                            {supplier.name}
                                    </td>
                                    <td className="border-t">
                                            {address}
                                    </td>
                                </tr>
                            ))}
                            {storages.length === 0 && (
                                <tr>
                                    <td
                                        className="px-6 py-4 border-t"
                                        colSpan="4"
                                    >
                                        Nebyli nalezeny žádné sklady.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* dodavatele */}
                <br />
            <h1 className="mb-8 text-3xl font-bold text-center">Dodavatelé</h1>
                <div className="flex items-center justify-between mb-1">
                    <InertiaLink
                        className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                        href={route("suppliers.create")}
                    >
                        Přidat nového dodavatele
                    </InertiaLink>
                </div>

                <div className="overflow-x-auto bg-white rounded shadow">
                    <table className="w-full whitespace-nowrap">
                        <thead className="text-white bg-gray-600">
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">#</th>
                                <th className="px-6 pt-5 pb-4">Název</th>
                                <th className="px-6 pt-5 pb-4">Adresa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {suppliers.map(({ id, name, address }) => (
                                <tr key={id} className="">
                                    <td className="border-t">

                                            {id}
                                    </td>
                                    <td className="border-t">
                                            {name}
                                    </td>
                                    <td className="border-t">
                                            {address}
                                    </td>
                                </tr>
                            ))}
                            {suppliers.length === 0 && (
                                <tr>
                                    <td
                                        className="px-6 py-4 border-t"
                                        colSpan="4"
                                    >
                                        Nebyli nalezeny žádné produkty.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
