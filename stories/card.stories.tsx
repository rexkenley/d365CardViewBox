import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import { getTheme } from "@fluentui/react/lib/Styling";
import { TestImages } from "@uifabric/example-data";
import Card from "../src/tsx/card";

initializeIcons();

const theme = getTheme();
const { fonts, palette } = theme;

export default {
  title: "Card",
  component: Card
};

const Template: Story<ComponentProps<typeof Card>> = (args) => (
  <Card {...args} />
);

export const InitializeCard = Template.bind({});
InitializeCard.args = {};

export const TitleCard = Template.bind({});
TitleCard.args = { title: "Title" };

export const NormalCard = Template.bind({});
NormalCard.args = { title: "Normal Card", isCompact: false };

export const CompactCard = Template.bind({});
CompactCard.args = { title: "Compact Card", isCompact: true };

export const NormalPreviewCard = Template.bind({});
NormalPreviewCard.args = {
  title: "Normal Preview Card",
  preview: {
    previewImages: [
      {
        name: "Normal Chair",
        previewImageSrc: TestImages.documentPreview,
        iconSrc: TestImages.iconPpt,
        width: 144
      }
    ]
  }
};

export const CompactPreviewCard = Template.bind({});
CompactPreviewCard.args = {
  isCompact: true,
  title: "Compact Preview Card",
  preview: {
    previewImages: [
      {
        name: "Compact Chair",
        previewImageSrc: TestImages.documentPreview,
        iconSrc: TestImages.iconPpt,
        width: 144
      }
    ]
  }
};

export const CompactPreviewIconCard = Template.bind({});
CompactPreviewIconCard.args = {
  isCompact: true,
  title: "Compact Preview Icon Card",
  preview: {
    previewImages: [
      {
        previewIconProps: {
          iconName: "OpenFile",
          styles: {
            root: { fontSize: fonts.superLarge.fontSize, color: palette.white }
          }
        },
        width: 144
      }
    ],
    styles: { previewIcon: { backgroundColor: palette.themePrimary } }
  }
};

export const ActivityCardInitials = Template.bind({});
ActivityCardInitials.args = {
  title: "Activity Card",
  activity: "Created by",
  people: [{ name: "Creator Person", initials: "CP", profileImageSrc: "" }]
};

export const ActivityCardPicture = Template.bind({});
ActivityCardPicture.args = {
  title: "Activity Card",
  activity: "Created by",
  people: [{ name: "Creator Person", profileImageSrc: TestImages.personaMale }]
};
