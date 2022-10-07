import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm, usePage} from "@inertiajs/inertia-react";

const Create = () => {
    const { data, setData, errors, post } = useForm({
        name: "",
        address: ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("suppliers.store"));
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
                            Dashboard
                        </InertiaLink>
                        <span className="font-medium text-indigo-600"> / </span>
                        Vytvořit
                    </h1>
                </div>
                <div className="max-w-6xl p-8 bg-white rounded shadow">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <label className="">Název dodavatele</label>
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
