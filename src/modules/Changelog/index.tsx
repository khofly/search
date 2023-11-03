"use client";

import { Accordion, Center, Container, Loader, Title } from "@mantine/core";
import { formatChangelog } from "./formatChangelog";
import { useTranslations } from "@store/global";
import { useEffect, useState } from "react";

const getChangelogData = async () => {
  const envUrl =
    process.env.NODE_ENV === "production"
      ? "https://raw.githubusercontent.com/khofly/search/master/web/CHANGELOG.md"
      : "https://raw.githubusercontent.com/khofly/search/staging/web/CHANGELOG.md";

  const data = await fetch(envUrl);

  const changelog = await data.text();

  return changelog;
};

const Changelog = () => {
  const translate = useTranslations();

  const [data, setData] = useState("");

  useEffect(() => {
    getChangelogData().then((res) => setData(res));
  }, []);

  if (!data)
    return (
      <Center mt={100}>
        <Loader size="xl" />
      </Center>
    );

  return (
    <Container size="lg" py="xl" mt={40} mb={40}>
      <Title ta="center" mt="md" mb="xl">
        {translate("pages.changelog.title")}
      </Title>

      <Accordion variant="separated" defaultValue="customization">
        {formatChangelog(data).map((obj, i) => {
          return (
            <Accordion.Item key={i} value={obj.title}>
              <Accordion.Control>{obj.title}</Accordion.Control>
              <Accordion.Panel style={{ whiteSpace: "pre" }} mt={12}>
                {obj.content.replace(/^\s+/g, "")}
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </Container>
  );
};

export default Changelog;
