'use client';
import { BiSearch } from "react-icons/bi";
const Search = () => {
    return (
        <div
        className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md cursor-pointer transition"
        >
            <div className="flex flex-row items-center justify-center">
                <div className="text-sm font-semibold px-6">
                    Anywhere
                </div>
                <div className=" hidden sm:block text-sm font-semibold px-6 border-x-[1px] text-center">
                    Any Week
                </div>
                <div className="text-sm font-semibold text-gray-400 flex flex-row items-center pl-6 pr-2 gap-3">
                    <div className="hidden sm:block ">Add Guests</div>
                    <div className="p-2 bg-rose-500 rounded-full text-white">
                        <BiSearch size={18}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Search

