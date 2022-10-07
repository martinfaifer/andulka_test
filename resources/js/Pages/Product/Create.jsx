import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm, usePage} from "@inertiajs/inertia-react";

const Create = () => {
    const { storages } = usePage().props;
    const { suppliers } = usePage().props;
    const { data, setData, errors, post } = useForm({
        name: "",
        cost: "",
        storage_id: "",
        supplier_id: "",
        is_available: true
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("products.store"));
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
                            Produkty
                        </InertiaLink>
                        <span className="font-medium text-indigo-600"> / </span>
                        Vytvořit
                    </h1>
                </div>
                <div className="max-w-6xl p-8 bg-white rounded shadow">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <label className="">Název</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    label="Název"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.name}
                                </span>
                            </div>
                            <div className="mb-0">
                                <label className="">Cena</label>
                                <input
                                    type="number"
                                    className="w-full rounded"
                                    label="Cena"
                                    name="cost"
                                    errors={errors.cost}
                                    value={data.cost}
                                    onChange={(e) =>
                                        setData("cost", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.cost}
                                </span>
                            </div>

                            <div className="mb-0">
                                <label className="">Skladiště</label>
                                <select
                                name="storage_id"
                                id="storage_id"
                                errors={errors.storage_id}
                                onChange={(e) =>
                                    setData("storage_id", e.target.value)
                                }
                                >
                                {storages.map(({ id, address}) => (
                                    <option value={id}>{address}</option>
                                    ))}
                                </select>
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
                            <div className="mb-0">
                                <label className="">Dostupnost na skladu</label>
                                <input type="checkbox"
                                    label="is_available"
                                    name="is_available"
                                    errors={errors.is_available}
                                    value={data.is_available}
                                    onChange={(e) =>
                                        setData("is_available", e.target.value)
                                    }
                                    checked
                                    >
                                </input>
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
