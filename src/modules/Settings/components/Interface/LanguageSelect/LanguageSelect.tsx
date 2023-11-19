import {
  BoxComponentProps,
  Combobox,
  InputBase,
  useCombobox,
} from "@mantine/core";

// import { USFlag, FlagProps } from 'mantine-flagpack';

import { ITranslations, useGlobalStore, useTranslations } from "@store/global";

import classes from "./styles.module.scss";
import { DotNestedKeys, ILanguage } from "@ts/global.types";
import { getIconStyle } from "@utils/functions/iconStyle";
import { USFlag } from "./Flags";

interface ILangData {
  label: DotNestedKeys<ITranslations>;
  value: string;
  // icon: React.FC<FlagProps>;
  icon: React.FC<BoxComponentProps>;
}

const LANG_DATA: ILangData[] = [
  {
    label: "pages.settings.interface.selectLangOptions.en",
    value: "en",
    icon: USFlag,
  },
  // { label: "pages.settings.interface.selectLangOptions.de", value: 'de', icon: DEFlag },
];

const LanguageSelect = () => {
  const { language, changeLanguage } = useGlobalStore((state) => ({
    language: state.language,
    changeLanguage: state.changeLanguage,
  }));
  const translate = useTranslations();

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const handleChange = (next: ILanguage) => {
    // router.push(router.pathname, router.pathname, { locale: newLocal });
    // router.replace(pathname, { locale: val });
    changeLanguage(next);
    combobox.closeDropdown();
  };

  const selected = LANG_DATA.find((l) => l.value === language) || LANG_DATA[1];

  const items = LANG_DATA.map((item) => (
    // <Menu.Item
    //   icon={<item.icon w={25} radius="xs" />}
    //   onClick={() => changeLanguage(item.value)}
    //   key={item.value}
    //   pt={10}
    //   pb={10}
    // >
    //   {translate(item.label)}
    // </Menu.Item>
    <Combobox.Option
      // left={<item.icon w={flagW} h={flagH} radius="md" />}
      value={item.value}
      key={item.value}
    >
      {translate(item.label)}
    </Combobox.Option>
  ));

  return (
    // <Menu onOpen={() => setOpened(true)} onClose={() => setOpened(false)} radius="md" width="target">
    //   <Menu.Target>
    //     <UnstyledButton className={classes.control}>
    //       <Group spacing="xs" style={{ flex: 1 }}>
    //         <selected.icon w={27} radius="xs" />

    //         <div className={classes.label} style={{ width: '70%' }}>
    //           <Text truncate>{translate(selected.label)}</Text>
    //         </div>
    //       </Group>

    //       <IconChevronDown size={18} className={classes.icon} />
    //     </UnstyledButton>
    //   </Menu.Target>
    //   <Menu.Dropdown>{items}</Menu.Dropdown>
    // </Menu>

    <Combobox
      store={combobox}
      onOptionSubmit={(val) => handleChange(val as ILanguage)}
    >
      <Combobox.Target>
        <InputBase
          w={200}
          leftSection={
            <selected.icon
              style={{ width: 27, borderRadius: 12, display: "block" }}
            />
          }
          leftSectionWidth={27 + 20}
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

export default LanguageSelect;
