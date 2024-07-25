"use client";

import { useDisclosure } from "@nextui-org/react";
import { useStore } from "exome/react";
import { FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { toast } from "sonner";

import { libFinderStore } from "@/store/libfinder.store";
import { libfinderRequest } from "@/utils/libfinderRequest";

import LibFinderSettings from "./LibFinderSettings";

interface Props {
  enableAnimations: (enabled: boolean) => void;
}

function LibFinderForm({ enableAnimations }: Props) {
  const [search, setSearch] = useState("");

  const {
    setLoading,
    setRecommendations,
    languages,
    licenses,
    model,
    languageRecommendations,
  } = useStore(libFinderStore);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    enableAnimations(false);
    setRecommendations([]);

    try {
      throw new Error();

      const recommendations = await libfinderRequest(
        search,
        languages,
        licenses,
        Array.from(model)[0] as string,
        Array.from(languageRecommendations)[0] as string
      );

      enableAnimations(true);
      setRecommendations(recommendations);
    } catch (error) {
      toast.error("Error generating recommendations");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="mt-12">
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto flex items-center gap-1"
        >
          <div className="w-full">
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
                className="block w-full p-3.5 ps-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 truncate"
                placeholder="Example: web frameworks, data analysis tools, graphing libraries, etc."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <button
            type="button"
            className="p-2.5 ms-2 text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={onOpen}
          >
            <IoMdSettings className="w-6 h-6" />
          </button>
        </form>
      </div>

      <LibFinderSettings
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
        search={search}
      />
    </>
  );
}

export default LibFinderForm;
