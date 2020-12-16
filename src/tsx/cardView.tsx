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
 * @interface ICardData
 * @property {IDocumentCardPreviewProps} [preview]
 * @property {string} title
 * @property {string} [activity]
 * @property {IDocumentCardActivityPerson[]} [people]
 */
export interface ICardData {
  preview?: IDocumentCardPreviewProps;
  title: string;
  activity?: string;
  people?: IDocumentCardActivityPerson[];
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
          const cardProps = { ...data, isCompact };

          return <Card {...cardProps} />;
        })}
      </Stack>
    </Fabric>
  );
};

export default CardView;
