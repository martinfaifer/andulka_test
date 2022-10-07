import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm, usePage} from "@inertiajs/inertia-react";

const Create = () => {
    const { suppliers } = usePage().props;
    const { data, setData, errors, post } = useForm({
        address: "",
        supplier_id: ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("storages.store"));
    }

    return (
        <div className="mt-20">
            <div className="container flex flex-col justify-center mx-auto">
                <div>
                    <h1 className="mb-8 text-3xl font-bold">
                        <InertiaLink
                            href={route("dashboard")}
                            className="text-indigo-600 hover:text-indigo-700"
                        >
                            Sklady
                        </InertiaLink>
                        <span className="font-medium text-indigo-600"> / </span>
                        Vytvořit
                    </h1>
                </div>
                <div className="max-w-6xl p-8 bg-white rounded shadow">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <label className="">Adresa</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    label="Adresa"
                                    name="address"
                                    value={data.address}
                                    onChange={(e) =>
                                        setData("address", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.address}
                                </span>
                            </div>

                            <div className="mb-0">
                                <label className="">Dodavatel</label>
                                <select
                                name="supplier"
                                id="supplier"
                                errors={errors.supplier_id}
                                onChange={(e) =>
                                    setData("supplier_id", e.target.value)
                                }
                                >
                                {suppliers.map(({ id, name}) => (
                                    <option value={id}>{name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                            >
                                Uložit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Create;
