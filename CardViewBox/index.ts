import React from "react";
import ReactDOM from "react-dom";
import { IInputs, IOutputs } from "./generated/ManifestTypes";
import DataSetInterfaces = ComponentFramework.PropertyHelper.DataSetApi;
import { initializeIcons } from "@fluentui/react/lib/Icons";

type DataSet = ComponentFramework.PropertyTypes.DataSet;

import CV, { ICardView, ICardData } from "../src/tsx/cardView";

export class CardViewBox
  implements ComponentFramework.StandardControl<IInputs, IOutputs> {
  constructor(
    private container: HTMLDivElement,
    private notifyOutputChanged: () => void
  ) {
    initializeIcons();
  }

  /**
   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
   * Data-set values are not initialized here, use updateView.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
   */
  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ): void {
    const { parameters, mode } = context;

    this.container = container;
    // this.notifyOutputChanged = notifyOutputChanged;
  }

  /**
   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
   */
  public updateView(context: ComponentFramework.Context<IInputs>): void {
    const { parameters, mode } = context,
      { cardViewDataSet, activity } = parameters;

    const props: ICardView = {
      isCompact: true,
      dataset: cardViewDataSet.sortedRecordIds.map(
        (id): ICardData => {
          const current = cardViewDataSet.records[id];

          return {
            title: current.getFormattedValue("title"),
            person: current.getFormattedValue("person"),
            preview: current.getFormattedValue("preview"),
            activity: (activity && activity.raw) || ""
          };
        }
      )
    };

    ReactDOM.render(React.createElement(CV, props), this.container);
  }

  public getOutputs(): IOutputs {
    // cardViewDataSet.refresh
    return {};
  }

  public destroy(): void {
    ReactDOM.unmountComponentAtNode(this.container);
  }
}
