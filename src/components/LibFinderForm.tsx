"use client";

import {
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

import {
  languageOptions,
  licenseOptions,
  postedAgoOptions,
} from "@/utils/menus";

function LibFinderForm() {
  const [language, setLanguage] = useState<Selection>(new Set([]));
  const [postedAgo, setPostedAgo] = useState<Selection>(new Set([]));
  const [license, setLicense] = useState<Selection>(new Set([]));
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
              selectionMode="single"
              selectedKeys={language}
              onSelectionChange={setLanguage}
            >
              {languageOptions.map((option) => (
                <SelectItem key={option}>{option}</SelectItem>
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

            <Select
              label="License"
              size="sm"
              selectionMode="single"
              selectedKeys={license}
              onSelectionChange={setLicense}
            >
              {licenseOptions.map((option) => (
                <SelectItem key={option}>{option}</SelectItem>
              ))}
            </Select>
          </div>
        </CardBody>
        <CardFooter>
          <Button color="primary">Search Libraries</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LibFinderForm;
