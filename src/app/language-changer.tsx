import { Component } from "solid-js";
import { useI18N } from "../providers/i18n-provider";

export const LocaleChanger: Component = () => {
  const i18n = useI18N();

  return (
    <div>
      <div>current locale : {i18n.locale()}</div>
      <select
        value={i18n.locale()}
        onChange={(e) => i18n.changeLocale(e.target.value)}
      >
        <option value="ru">ru</option>
        <option value="en">en</option>
      </select>
    </div>
  );
};
