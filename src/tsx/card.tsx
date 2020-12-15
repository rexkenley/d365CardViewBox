import React from "react";
import { Fabric } from "@fluentui/react/lib/Fabric";
import { Stack } from "@fluentui/react/lib/Stack";
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardDetails,
  DocumentCardPreview,
  DocumentCardTitle,
  DocumentCardType,
  IDocumentCardPreviewProps
} from "@fluentui/react/lib/DocumentCard";

/**
 *
 * @interface ICard
 * @property {} value
 */

export interface ICard {}

const Card: React.FC<ICard> = (props) => {
  <DocumentCard type={DocumentCardType.compact}>
    <DocumentCardPreview />
    <DocumentCardDetails>
      <DocumentCardTitle />
      <DocumentCardActivity />
    </DocumentCardDetails>
  </DocumentCard>;
};

export default Card;
