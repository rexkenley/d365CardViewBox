import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { initializeIcons } from "@fluentui/react/lib/Icons";

import Card from "../src/tsx/card";

initializeIcons();

export default {
  title: "Card",
  component: Card
};

const Template: Story<ComponentProps<typeof Card>> = (args) => (
  <Card {...args} />
);

export const InitializeCard = Template.bind({});
Card.args = {};

export const NextStoryCard = Template.bind({});
NextStoryCard.storyName = "NextStoryCard";
NextStoryCard.args = {};
