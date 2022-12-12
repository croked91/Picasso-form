import { API } from "api";
import { createEffect, createEvent, createStore, sample } from "effector";
import { ISuggestion } from "../../components/form/suggestion/interface";

export const getCurrentValue = createEvent<string>();

export const fetchSuggestionsFx = createEffect(async (name: string) => {
  if (!name.trim()) {
    return;
  }

  return await API.getCompanies(name);
});

export const $suggestions = createStore<ISuggestion[]>([]).on(
  fetchSuggestionsFx.doneData,
  (_, suggestions) => suggestions
);

export const $currentValue = createStore("").on(
  getCurrentValue,
  (_, value) => value
);

sample({
  clock: getCurrentValue,
  source: getCurrentValue,
  target: fetchSuggestionsFx,
});
