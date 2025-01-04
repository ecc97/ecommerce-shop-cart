import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function SelectLanguage():React.ReactElement {
    const router = useRouter();
    const handleSelectLanguage = (e:React.ChangeEvent<HTMLSelectElement>):void => {
        Cookies.set("locale", e.currentTarget.value);
        router.refresh();
    };

    return (
        <>
            <select onChange={handleSelectLanguage} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 md:p-2">
                <option value="es">Español</option>
                <option value="en">English</option>
            </select>
        </>
    )
}