import {
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useStore } from "exome/react";

import { libFinderStore } from "@/store/libfinder.store";
import { languageOptions, licenseOptions } from "@/utils/menus";

interface Props {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
  onClose: () => void;
}

function LibFinderSettings({ isOpen, onOpenChange, onClose }: Props) {
  const { languages, setLanguages, licenses, setLicenses } =
    useStore(libFinderStore);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
      <ModalContent>
        <>
          <ModalHeader>LibFinder Settings</ModalHeader>

          <ModalBody className="grid grid-cols-2 gap-4">
            <Select
              label="Programming languages"
              selectedKeys={languages}
              onSelectionChange={setLanguages}
              selectionMode="multiple"
              description={
                Array.from(languages).length === 0 &&
                "Programming language unspecified"
              }
            >
              {languageOptions.map((language) => (
                <SelectItem
                  key={language}
                  value={language}
                  startContent={
                    <Avatar
                      src={`/svg/${language.toLowerCase()}.svg`}
                      className="w-7 h-7"
                      radius="sm"
                    />
                  }
                >
                  {language}
                </SelectItem>
              ))}
            </Select>

            <Select
              label="Licenses"
              selectedKeys={licenses}
              onSelectionChange={setLicenses}
              selectionMode="multiple"
              description={
                Array.from(licenses).length === 0 && "License unspecified"
              }
            >
              {licenseOptions.map((license) => (
                <SelectItem key={license} value={license}>
                  {license}
                </SelectItem>
              ))}
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button color="default" variant="flat" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onPress={onClose}>
              Apply
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}

export default LibFinderSettings;
