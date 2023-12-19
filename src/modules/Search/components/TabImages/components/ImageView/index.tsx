import { useResponsive } from "@hooks/use-responsive";
import useToast from "@hooks/use-toast";
import {
  ActionIcon,
  Alert,
  Anchor,
  Drawer,
  Flex,
  Image,
  Text,
} from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { useGeneralStore } from "@store/general";
import {
  IconCopy,
  IconDownload,
  IconExternalLink,
  IconInfoCircle,
} from "@tabler/icons-react";
import { ISearXNGResultsImages } from "@ts/searxng.types";
import React from "react";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  viewImage: ISearXNGResultsImages["results"][0] | null;
}

const ImageView: React.FC<Props> = ({ isOpen, handleClose, viewImage }) => {
  const { copy } = useClipboard();
  const { toast } = useToast();

  const { openInNewTab } = useGeneralStore((state) => ({
    openInNewTab: state.openInNewTab,
  }));

  const handleCopyToClipboard = () => {
    copy(viewImage?.url);
    toast.show({ message: "URL Copied!" });
  };

  const isXs = useResponsive("max", "xs");
  const anchorTarget: React.HTMLAttributeAnchorTarget = isXs
    ? "_blank"
    : openInNewTab
    ? "_blank"
    : "_self";

  return (
    <Drawer
      opened={isOpen}
      onClose={handleClose}
      title="View image"
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      position="right"
      size="lg"
      closeButtonProps={{
        size: "xl",
      }}
    >
      <Text mt="xl" size="lg" c="white">
        {viewImage?.title}
      </Text>

      <Text size="md">
        {viewImage?.parsed_url[0]}://{viewImage?.parsed_url[1]}
      </Text>

      <Image src={viewImage?.img_src} fit="contain" mt="lg" radius="md" />

      <Flex align="center" justify="flex-start" mt="xl" gap="xl">
        <Anchor href={viewImage?.url} target={anchorTarget}>
          <Flex direction="column" align="center" justify="center">
            <ActionIcon variant="light" aria-label="Settings" size="xl">
              <IconExternalLink
                style={{ width: "60%", height: "60%" }}
                stroke={1.5}
              />
            </ActionIcon>

            <Text mt={5} size="sm" c="dimmed">
              Visit
            </Text>
          </Flex>
        </Anchor>

        <Anchor href={viewImage?.img_src} target="_blank">
          <Flex direction="column" align="center" justify="center">
            <ActionIcon variant="light" aria-label="Settings" size="xl">
              <IconDownload
                style={{ width: "60%", height: "60%" }}
                stroke={1.5}
              />
            </ActionIcon>

            <Text mt={5} size="sm" c="dimmed">
              Download
            </Text>
          </Flex>
        </Anchor>

        <Flex direction="column" align="center" justify="center">
          <ActionIcon
            variant="light"
            aria-label="Settings"
            size="xl"
            onClick={handleCopyToClipboard}
          >
            <IconCopy style={{ width: "60%", height: "60%" }} stroke={1.5} />
          </ActionIcon>

          <Text mt={5} size="sm" c="dimmed">
            Copy URL
          </Text>
        </Flex>
      </Flex>

      <Alert
        variant="light"
        color="gray"
        title="Images might be subject to copyright"
        my="xl"
        icon={<IconInfoCircle />}
      />
    </Drawer>
  );
};

export default ImageView;
