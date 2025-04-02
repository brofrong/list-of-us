import {
  Accessor,
  ParentComponent,
  createContext,
  createMemo,
  createSignal,
  useContext,
} from "solid-js";
import { z } from "zod";
import { en_dict } from "../i18n/en";
import * as i18n from "@solid-primitives/i18n";
import { ru_dict } from "../i18n/ru";
import { Dict } from "../i18n/i18n";

const I18N_LOCALSTORAGE_KEY = "i18n";

const dictionaries = {
  en: en_dict,
  ru: ru_dict,
} as const;

export const locale = ["en", "ru"] as const;

type Locale = (typeof locale)[number];

type I18NContext = {
  locale: Accessor<Locale>;
  t: i18n.Translator<Dict>;
  changeLocale: (lang: string) => void;
};

const i18nContext = createContext<I18NContext>();

const i18nOptionsSchema = z.enum(locale);

function getLocalLocale(): Locale {
  const localStorageTheme = localStorage.getItem(I18N_LOCALSTORAGE_KEY);
  const i18nResult = i18nOptionsSchema.safeParse(localStorageTheme);
  if (i18nResult.success) {
    return i18nResult.data;
  }
  return "en";
}

export type RawDictionary = typeof en_dict;
export type Dictionary = i18n.Flatten<RawDictionary>;

export const I18NProvider: ParentComponent = (props) => {
  const [selectedLocale, setSelectedLocale] =
    createSignal<Locale>(getLocalLocale());

  const changeLocale: I18NContext["changeLocale"] = (locale) => {
    const i18nResult = i18nOptionsSchema.safeParse(locale);
    let localeToChange: Locale = "en";
    if (i18nResult.success) {
      localeToChange = i18nResult.data;
    }
    setSelectedLocale(localeToChange);
    localStorage.setItem(I18N_LOCALSTORAGE_KEY, localeToChange);
  };

  const dict = createMemo(() => i18n.flatten(dictionaries[selectedLocale()]));
  // eslint-disable-next-line solid/reactivity
  const t = i18n.translator(dict);

  const context: I18NContext = {
    locale: selectedLocale,
    changeLocale,
    t: t,
  };

  return (
    <i18nContext.Provider value={context}>
      {props.children}
    </i18nContext.Provider>
  );
};

export function useI18N() {
  const context = useContext(i18nContext);
  if (!context) {
    throw new Error("can't find i18nContext");
  }
  return context;
}
