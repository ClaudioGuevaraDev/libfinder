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
import { useState } from "react";
import { toast } from "sonner";

import { libFinderStore } from "@/store/libfinder.store";
import { libfinderRequest } from "@/utils/libfinderRequest";
import {
  languageOptions,
  languageRecommendationOptions,
  licenseOptions,
  modelOptions,
} from "@/utils/menus";

interface Props {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
  onClose: () => void;
}

function LibFinderSettings({ isOpen, onOpenChange, onClose }: Props) {
  const [loading, setLoading] = useState(false);

  const {
    search,
    languages,
    setLanguages,
    licenses,
    setLicenses,
    model,
    setModel,
    languageRecommendations,
    setLanguageRecommendations,
    setRecommendations,
  } = useStore(libFinderStore);

  const handleLibfinder = async () => {
    setLoading(true);

    try {
      const recommendations = await libfinderRequest(
        search,
        languages,
        licenses,
        Array.from(model)[0] as string,
        Array.from(languageRecommendations)[0] as string
      );

      setRecommendations(recommendations);

      onClose();
    } catch (error) {
      toast.error("Error generating recommendations");
      onClose();
    }

    setLoading(false);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
      <ModalContent>
        <>
          <ModalHeader>LibFinder Settings</ModalHeader>

          <ModalBody className="grid md:grid-cols-2 gap-4">
            <Select
              label="Programming languages"
              selectedKeys={languages}
              onSelectionChange={setLanguages}
              selectionMode="multiple"
              description={
                Array.from(languages).length === 0 &&
                "You must select at least 1 programming language"
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

            <Select
              label="Model"
              selectedKeys={model}
              onSelectionChange={setModel}
              selectionMode="single"
              description={
                Array.from(model).length === 0 && "You must select 1 model"
              }
            >
              {modelOptions.map((model) => (
                <SelectItem key={model} value={model}>
                  {model}
                </SelectItem>
              ))}
            </Select>

            <Select
              label="Language recommendations"
              selectedKeys={languageRecommendations}
              onSelectionChange={setLanguageRecommendations}
              selectionMode="single"
              description={
                Array.from(languageRecommendations).length === 0 &&
                "You must select a recommendation quantity"
              }
            >
              {languageRecommendationOptions.map((recommendation) => (
                <SelectItem key={recommendation} value={recommendation}>
                  {recommendation}
                </SelectItem>
              ))}
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button color="default" variant="flat" onPress={onClose}>
              Close
            </Button>
            <Button
              color="primary"
              onPress={handleLibfinder}
              isLoading={loading}
              isDisabled={
                Array.from(languages).length === 0 ||
                Array.from(model).length === 0 ||
                Array.from(languageRecommendations).length === 0 ||
                search === ""
              }
            >
              Apply
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}

export default LibFinderSettings;
