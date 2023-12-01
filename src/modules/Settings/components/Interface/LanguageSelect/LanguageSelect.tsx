import {
  BoxComponentProps,
  Combobox,
  InputBase,
  useCombobox,
} from "@mantine/core";

import { USFlag, FlagProps, GBFlag } from "mantine-flagpack";

import { ITranslations, useGlobalStore, useTranslations } from "@store/global";

import classes from "./styles.module.scss";
import { DotNestedKeys, ILanguage } from "@ts/global.types";
import { getIconStyle } from "@utils/functions/iconStyle";

interface ILangData {
  label: DotNestedKeys<ITranslations>;
  value: string;
  icon: React.FC<FlagProps>;
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
    changeLanguage(next);
    combobox.closeDropdown();
  };

  const selected = LANG_DATA.find((l) => l.value === language) || LANG_DATA[1];

  const items = LANG_DATA.map((item) => (
    <Combobox.Option value={item.value} key={item.value}>
      {translate(item.label)}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => handleChange(val as ILanguage)}
    >
      <Combobox.Target>
        <InputBase
          w={200}
          leftSection={
            <selected.icon
              style={getIconStyle(25)}
              className={classes.flag_icon}
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
