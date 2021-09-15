import { createSelector } from "reselect";

export const tabState = (state) => state.tabs;

export const currentTab = createSelector([tabState], (tabs) => tabs.currentTab);
