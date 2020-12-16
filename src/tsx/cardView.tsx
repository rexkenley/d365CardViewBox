import React from "react";
import { Fabric } from "@fluentui/react/lib/Fabric";
import { Stack } from "@fluentui/react/lib/Stack";
import { Text, ITextProps } from "@fluentui/react/lib/Text";
import {
  IDocumentCardPreviewProps,
  IDocumentCardActivityPerson
} from "@fluentui/react/lib/DocumentCard";

import Card from "./card";
import { deepStrictEqual } from "assert";

/**
 * ICardData
 * @property {string} name
 * @property {string} owner
 * @property {string} [preview]
 */
export interface ICardData {
  name: string;
  owner: string;
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
            title: data.name,
            activity: "Owner",
            people: [{ name: data.owner, initials: "" }],
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
