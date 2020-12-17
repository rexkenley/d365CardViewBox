import React from "react";
import { Fabric } from "@fluentui/react/lib/Fabric";
import { Stack } from "@fluentui/react/lib/Stack";
import { Text, ITextProps } from "@fluentui/react/lib/Text";

import getInitials from "../ts/name";
import Card from "./card";

/**
 * ICardData
 * @property {string} title
 * @property {string} [person]
 * @property {string} [activity]
 * @property {string} [preview]
 */
export interface ICardData {
  title: string;
  person?: string;
  activity?: string;
  preview?: string;
}

/**
 * ICardView
 * @interface ICardView
 * @property {boolean} isCompact
 * @property {ICardData[]} dataset
 */
export interface ICardView {
  isCompact: boolean;
  dataset: ICardData[];
}

const CardView: React.FC<ICardView> = (props) => {
  const { isCompact, dataset } = props;

  if (!dataset || !dataset.length)
    return (
      <Fabric>
        <Text nowrap block variant={"xxLarge" as ITextProps["variant"]}>
          Empty Data Set
        </Text>
      </Fabric>
    );

  return (
    <Fabric>
      <Stack tokens={{ childrenGap: 20 }}>
        {dataset.map((data) => {
          let cardProps: any = {
            title: data.title,
            activity: data.activity,
            people: [{ name: data.person, initials: getInitials(data.person) }],
            isCompact
          };

          if (data.preview)
            cardProps = {
              ...cardProps,
              preview: {
                previewImages: [
                  {
                    previewImageSrc: data.preview,
                    width: 144
                  }
                ]
              }
            };

          return <Card {...cardProps} />;
        })}
      </Stack>
    </Fabric>
  );
};

export default CardView;
