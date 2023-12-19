import { Flex, Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import { useTranslations } from "@store/global";
import {
  IconCategory,
  IconCpu,
  IconFiles,
  IconMapPin,
  IconMusic,
  IconNews,
  IconPhoto,
  IconPlayerPlay,
  IconSchool,
  IconSearch,
  IconUsers,
} from "@tabler/icons-react";
import React from "react";
import { CategoryCheckbox } from "./components/CategoryCheckbox";
import { ICategories, useGeneralStore } from "@store/general";

const CATEGORIES_DATA = [
  { id: "general", title: "General", icon: IconSearch },
  { id: "images", title: "Images", icon: IconPhoto },
  { id: "videos", title: "Videos", icon: IconPlayerPlay },
  { id: "news", title: "News", icon: IconNews },
  { id: "maps", title: "Maps", icon: IconMapPin },
  { id: "music", title: "Music", icon: IconMusic },
  { id: "it", title: "IT", icon: IconCpu },
  { id: "science", title: "Science", icon: IconSchool },
  { id: "files", title: "Files", icon: IconFiles },
  { id: "social-media", title: "Social Media", icon: IconUsers },
];

const SettingsCategories = () => {
  const translate = useTranslations();

  const { categories, setCategories } = useGeneralStore((state) => ({
    categories: state.categories,
    setCategories: state.setCategories,
  }));

  const handleChangeCategories = (next: boolean, id: ICategories) => {
    let newCategories = [];

    if (next) {
      newCategories = [...categories, id];
    } else {
      newCategories = categories.filter((eng) => eng !== id);
    }

    setCategories(newCategories);
  };

  const items = CATEGORIES_DATA.map((item) => (
    <CategoryCheckbox
      {...item}
      checked={categories.includes(item.id as ICategories)}
      onChange={handleChangeCategories}
      key={item.title}
    />
  ));

  return (
    <Paper radius="md" withBorder>
      <Flex align="center" p="lg" mb={16}>
        <IconCategory size={32} />

        <Text fz={26} fw={600} ml="sm">
          {translate("pages.settings.categories.title")}
        </Text>
      </Flex>

      {/* Settings content */}
      {/* <SimpleGrid px="lg" mb="xl" cols={{ base: 1, sm: 2, md: 10 }} spacing={4}> */}
      <Stack w="100%" align="start" px="lg" mb="xl">
        <Text>Currently enabled search categories</Text>

        <Flex align="center" gap={4}>
          {items}
        </Flex>
      </Stack>
      {/* </SimpleGrid> */}
    </Paper>
  );
};

export default SettingsCategories;
