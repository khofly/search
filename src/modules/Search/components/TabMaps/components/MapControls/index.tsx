import {
  ActionIcon,
  Flex,
  Loader,
  NavLink,
  Paper,
  ScrollArea,
  Stack,
  TextInput,
} from "@mantine/core";
import React, { Dispatch, useEffect, useState } from "react";

import classes from "./styles.module.scss";
import {
  IconArrowLeft,
  IconChevronLeft,
  IconSearch,
} from "@tabler/icons-react";
import { useRouter, useSearchParams } from "next/navigation";
import { getIconStyle } from "@utils/functions/iconStyle";
import { useDisclosure } from "@mantine/hooks";
import clsx from "clsx";
import useNominatimSWR from "src/api/nominatim/use-nominatim-query";

interface Props {
  coords: { latitude: number; longitude: number };
  setCoords: Dispatch<{ latitude: number; longitude: number }>;
}

const MapControls: React.FC<Props> = ({ coords, setCoords }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isOpen, { toggle }] = useDisclosure(true);
  const [q, setQ] = useState(searchParams.get("q") || "");

  const { data, isMutating, trigger } = useNominatimSWR();

  const handleSearch = () => {
    // Prevent empty search
    if (!q.length) return;

    trigger(q);
  };

  const handleGoBack = () => {
    const query = searchParams.get("q") || "";

    router.push(`/search?q=${encodeURIComponent(query)}&tab=general`);
  };

  const handleUpdateMap = (lat: string, lon: string) => {
    setCoords({ latitude: parseFloat(lat), longitude: parseFloat(lon) });
  };

  useEffect(() => {
    const query = searchParams.get("q");

    if (!data?.length && query?.length) trigger(query);
    if (query) setQ(query);
  }, [searchParams]);

  useEffect(() => {
    if (!coords.latitude && !coords.longitude && data?.length) {
      setCoords({
        latitude: parseFloat(data[0].lat),
        longitude: parseFloat(data[0].lon),
      });
    }
  }, [data]);

  return (
    <Paper
      className={clsx(classes.map_controls, {
        [classes.map_controls_closed]: !isOpen,
      })}
      radius={0}
    >
      <Flex className={classes.map_controls_head} p="xs" gap="xs">
        <ActionIcon
          className={classes.action_icon}
          variant="light"
          onClick={handleGoBack}
        >
          <IconArrowLeft />
        </ActionIcon>

        <TextInput
          className={classes.map_input}
          value={q}
          onChange={(e) => setQ(e.currentTarget.value)}
          size="md"
          rightSection={
            <>
              <ActionIcon
                size="lg"
                mr={6}
                radius="sm"
                // color={"blue"}
                variant="transparent"
                onClick={() => handleSearch()}
              >
                <IconSearch
                  style={getIconStyle(22)}
                  stroke={1.5}
                  color="white"
                />
              </ActionIcon>
            </>
          }
        />
      </Flex>

      <ScrollArea className={classes.osm_results}>
        {isMutating && <Loader mt="lg" mx="auto" />}
        {data &&
          !isMutating &&
          data?.map((row, i) => (
            <NavLink
              key={i}
              label={row.display_name}
              leftSection={<IconSearch size="1rem" stroke={1.5} />}
              onClick={(e) => handleUpdateMap(row.lat, row.lon)}
            />
          ))}
      </ScrollArea>

      {/* Toggle icon */}
      <ActionIcon
        variant="default"
        className={clsx(classes.controls_toggle, {
          [classes.controls_toggle_closed]: !isOpen,
        })}
        onClick={toggle}
      >
        <IconChevronLeft style={getIconStyle(18)} />
      </ActionIcon>
    </Paper>
  );
};

export default MapControls;
