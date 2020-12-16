import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import { TestImages } from "@uifabric/example-data";

initializeIcons();

import CardView, { ICardData } from "../src/tsx/cardView";

export default {
  title: "Card View",
  component: CardView
};

const Template: Story<ComponentProps<typeof CardView>> = (args) => (
  <CardView {...args} />
);

export const InitializeCardView = Template.bind({});
InitializeCardView.args = {};

const dataset: ICardData[] = [
  {
    title: "Title 1",
    activity: "Activity 1",
    people: [{ name: "Person 1", initials: "P1" }],
    preview: {
      previewImages: [
        {
          previewImageSrc: TestImages.documentPreview,
          iconSrc: TestImages.iconPpt,
          width: 144
        }
      ]
    }
  },
  {
    title: "Title 2",
    activity: "Activity 2",
    people: [{ name: "Person 2", initials: "P2" }],
    preview: {
      previewImages: [
        {
          previewImageSrc: TestImages.documentPreview,
          iconSrc: TestImages.iconPpt,
          width: 144
        }
      ]
    }
  }
];

export const CardViewWithData = Template.bind({});
CardViewWithData.args = { dataset };

export const CompactCardViewWithData = Template.bind({});
CompactCardViewWithData.args = { isCompact: true, dataset };
