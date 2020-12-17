import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { initializeIcons } from "@fluentui/react/lib/Icons";

import CardView, { ICardData } from "../src/tsx/cardView";

initializeIcons();

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
  { title: "Title 1", activity: "Activity 1", person: "Person 1" },
  { title: "Title 2", activity: "Activity 2", person: "Person 2" }
];

export const CardViewWithData = Template.bind({});
CardViewWithData.args = { dataset };

export const CompactCardViewWithData = Template.bind({});
CompactCardViewWithData.args = { isCompact: true, dataset };
