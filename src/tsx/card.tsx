import React from "react";
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardDetails,
  DocumentCardPreview,
  DocumentCardTitle,
  DocumentCardType,
  IDocumentCardPreviewProps,
  IDocumentCardActivityPerson
} from "@fluentui/react/lib/DocumentCard";

/**
 * @interface ICard
 * @property {boolean} isCompact
 * @property {IDocumentCardPreviewProps} [preview]
 * @property {string} title
 * @property {string} [activity]
 * @property {IDocumentCardActivityPerson[]} [people]
 */
export interface ICard {
  isCompact: boolean;
  preview?: IDocumentCardPreviewProps;
  title: string;
  activity?: string;
  people?: IDocumentCardActivityPerson[];
}

const Card: React.FC<ICard> = (props) => {
  const { isCompact, preview, title, activity, people } = props;

  return (
    <DocumentCard
      type={!!isCompact ? DocumentCardType.compact : DocumentCardType.normal}
    >
      {preview && <DocumentCardPreview {...preview} />}
      <DocumentCardDetails>
        <DocumentCardTitle title={title} shouldTruncate />
        {activity && people && (
          <DocumentCardActivity activity={activity} people={people} />
        )}
      </DocumentCardDetails>
    </DocumentCard>
  );
};

export default Card;
