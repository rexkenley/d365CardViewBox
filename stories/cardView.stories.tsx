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
  { name: "Title 1", owner: "Owner 1" },
  { name: "Title 2", owner: "Owner 2" }
];

export const CardViewWithData = Template.bind({});
CardViewWithData.args = { dataset };

export const CompactCardViewWithData = Template.bind({});
CompactCardViewWithData.args = { isCompact: true, dataset };
