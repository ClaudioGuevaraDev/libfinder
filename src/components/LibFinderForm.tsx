"use client";

import {
  Accordion,
  AccordionItem,
  Autocomplete,
  AutocompleteItem,
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Select,
  Selection,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { useStore } from "exome/react";
import { FormEvent, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { libFinderStore } from "@/store/libfinder.store";
import {
  languageOptions,
  licenseOptions,
  postedAgoOptions,
} from "@/utils/menus";

function LibFinderForm() {
  const [language, setLanguage] = useState<Selection>(new Set([]));
  const [postedAgo, setPostedAgo] = useState<Selection>(new Set([]));
  const [license, setLicense] = useState<string | undefined>(undefined);
  const [author, setAuthor] = useState("");

  const { isLoading, setLoading, setRecommendations } =
    useStore(libFinderStore);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/libfinder", {
        method: "POST",
      });
      const data = await response.json();

      setRecommendations(JSON.parse(data.libraries));
    } catch (error) {}

    setLoading(false);
  };

  return (
    <div className="mt-12">
      <Card>
        <form onSubmit={handleSubmit}>
          <CardBody className="space-y-4">
            <Textarea
              label="Specify the type of library you are looking for "
              placeholder="For example, web frameworks, data analysis tools"
              rows={6}
              minRows={6}
              maxRows={6}
              className="col-span-6"
              isRequired
            />

            <div className="grid grid-cols-2 gap-3">
              <Select
                label="Language"
                size="sm"
                selectionMode="multiple"
                selectedKeys={language}
                onSelectionChange={setLanguage}
              >
                {languageOptions.map((option) => (
                  <SelectItem
                    key={option}
                    startContent={
                      <Avatar
                        alt={option}
                        className="w-6 h-6"
                        src={`/svg/${option.toLowerCase()}.svg`}
                      />
                    }
                  >
                    {option}
                  </SelectItem>
                ))}
              </Select>
              <Select
                label="Posted ago"
                size="sm"
                selectionMode="single"
                selectedKeys={postedAgo}
                onSelectionChange={setPostedAgo}
              >
                {postedAgoOptions.map((option) => (
                  <SelectItem key={option}>{option}</SelectItem>
                ))}
              </Select>

              <Input
                type="text"
                label="Author/Organization"
                size="sm"
                value={author}
                onValueChange={setAuthor}
              />

              <Autocomplete
                label="License"
                size="sm"
                selectedKey={license}
                onSelectionChange={(newValue) => {
                  setLicense(newValue as string);
                }}
              >
                {licenseOptions.map((option) => (
                  <AutocompleteItem key={option}>{option}</AutocompleteItem>
                ))}
              </Autocomplete>
            </div>

            <Accordion variant="shadow" className="bg-zinc-800">
              <AccordionItem
                key="advanced-settings"
                aria-label="Advanced settings"
                subtitle="Advanced settings"
                indicator={
                  <IoIosArrowDown className="text-white h-3.5 w-3.5" />
                }
              ></AccordionItem>
            </Accordion>
          </CardBody>
          <CardFooter>
            <Button color="primary" type="submit" isLoading={isLoading}>
              Find Libraries
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default LibFinderForm;
