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
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

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

  return (
    <div className="mt-12">
      <Card>
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
              indicator={<IoIosArrowDown className="text-white h-3.5 w-3.5" />}
            ></AccordionItem>
          </Accordion>
        </CardBody>
        <CardFooter>
          <Button color="primary">Find Libraries</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LibFinderForm;
