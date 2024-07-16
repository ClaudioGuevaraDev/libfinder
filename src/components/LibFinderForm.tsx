"use client";

import { useStore } from "exome/react";
import { FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";

import { libFinderStore } from "@/store/libfinder.store";
import { languageOptions, licenseOptions } from "@/utils/menus";

function LibFinderForm() {
  const [search, setSearch] = useState("");

  const { setLoading, setRecommendations } = useStore(libFinderStore);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/libfinder", {
        method: "POST",
        body: JSON.stringify({
          prompt: search,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      setRecommendations(JSON.parse(data.libraries));
    } catch (error) {}

    setLoading(false);
  };

  return (
    <div className="mt-12">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
        <label
          htmlFor="libfinder-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
            <FiSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="search"
            id="libfinder-search"
            className="block w-full p-4 ps-12 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 truncate"
            placeholder="Example: web frameworks, data analysis tools, graphing libraries, etc."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default LibFinderForm;
