import { Combobox, Image, InputBase, useCombobox } from "@mantine/core";
import classes from "./styles.module.scss";

import { DotNestedKeys, IAppTheme } from "@ts/global.types";

import { ITranslations, useGlobalStore, useTranslations } from "@store/global";

interface ILangData {
  label: DotNestedKeys<ITranslations>;
  value: IAppTheme;
  image: string;
}

const THEME_DATA: ILangData[] = [
  {
    label: "pages.settings.interface.selectThemeOptions.mantine_old",
    value: "Mantine-Old",
    image: "/assets/mantine.png",
  },
  {
    label: "pages.settings.interface.selectThemeOptions.mantine_new",
    value: "Mantine-New",
    image: "/assets/mantine.png",
  },
  {
    label: "pages.settings.interface.selectThemeOptions.catppuccin",
    value: "Catppuccin-Mocha",
    image: "/assets/catppuccin.png",
  },
  {
    label: "pages.settings.interface.selectThemeOptions.rosepine",
    value: "Rose-Pine",
    image: "/assets/rosepine.png",
  },
  {
    label: "pages.settings.interface.selectThemeOptions.custom",
    value: "Custom",
    image: "/assets/doge.svg",
  },
];

const ThemeSelect = () => {
  const translate = useTranslations();
  const { appTheme, setAppTheme } = useGlobalStore((state) => ({
    appTheme: state.appTheme,
    setAppTheme: state.setAppTheme,
  }));

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const selected =
    THEME_DATA.find((l) => l.value === appTheme) || THEME_DATA[1];

  const handleChange = (next: IAppTheme) => {
    setAppTheme(next);

    combobox.closeDropdown();
  };

  const items = THEME_DATA.map((item) => (
    <Combobox.Option value={item.value} key={item.value}>
      {translate(item.label)}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => handleChange(val as IAppTheme)}
    >
      <Combobox.Target>
        <InputBase
          w={200}
          leftSection={
            <Image
              src={selected.image}
              w={20}
              h={20}
              alt={selected.label + " logo"}
            />
          }
          leftSectionWidth={25 + 20}
          leftSectionProps={{
            onClick: () => combobox.openDropdown(),
            className: classes.combobox_cursor,
          }}
          rightSection={<Combobox.Chevron />}
          rightSectionProps={{
            onClick: () => combobox.openDropdown(),
            className: classes.combobox_cursor,
          }}
          onClick={() => combobox.openDropdown()}
          placeholder="Language"
          value={translate(selected.label)}
          classNames={{
            input: classes.combobox_cursor,
          }}
          readOnly
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{items}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default ThemeSelect;
