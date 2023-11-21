import { Flex, Text } from "@mantine/core";
import { ISearXNGResultsImages } from "@ts/searxng.types";
import React from "react";
import classes from "./styles.module.scss";
import Image from "next/image";

interface Props {
  openImageInView: (img: ISearXNGResultsImages["results"][0]) => void;
  imageData: ISearXNGResultsImages["results"][0];
}

const ImageCell: React.FC<Props> = ({ openImageInView, imageData }) => {
  const { thumbnail_src, img_format, parsed_url, title } = imageData;

  return (
    <Flex
      className={classes.image_container}
      direction="column"
      onClick={() => openImageInView(imageData)}
      //   href={url}
      //   target={"_blank"}
      //   rel="noreferrer noopener"
    >
      <Flex
        className={classes.image_cell}
        direction="column"
        // w={getDynamicWidth()}
        px={6}
      >
        <Image
          src={thumbnail_src}
          width={200}
          height={220}
          alt={title}
          unoptimized
        />
        <Text size="xs" className={classes.format_label}>
          {img_format}
        </Text>
      </Flex>

      <Text
        component="span"
        size="sm"
        c="white"
        mt={4}
        className={classes.title_text}
      >
        {title}
      </Text>

      <Text size="xs" lineClamp={1} mt={30} className={classes.url_text}>
        {parsed_url[0]}://{parsed_url[1]}
      </Text>
    </Flex>
  );
};

export default ImageCell;
