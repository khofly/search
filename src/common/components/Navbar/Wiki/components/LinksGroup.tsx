import { useState } from "react";
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  UnstyledButton,
  rem,
  useMantineTheme,
  Flex,
} from "@mantine/core";
import { IconBarrierBlock, IconChevronRight } from "@tabler/icons-react";
import classes from "./styles.module.scss";
import Link from "next/link";
import { getIconStyle } from "@utils/functions/iconStyle";

export interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string; isWip: boolean }[];
}

const LinksGroup: React.FC<LinksGroupProps> = ({
  icon: Icon,
  label,
  initiallyOpened,
  links,
}) => {
  const theme = useMantineTheme();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);

  const items = (hasLinks ? links : []).map((link) => (
    <Link className={classes.link} href={link.link} key={link.label}>
      <Flex align="center" gap="xs">
        {link.label}

        {link.isWip && (
          <IconBarrierBlock
            style={getIconStyle(18)}
            color={theme.colors.orange["5"]}
          />
        )}
      </Flex>
    </Link>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="light" size={30}>
              <Icon style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>

            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? "rotate(-90deg)" : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
};

export default LinksGroup;
