import { ParentComponent } from "solid-js"
import { ThemeProvider } from "./theme-provider"
import { MetaProvider } from "@solidjs/meta"
import { I18NProvider } from './i18n-provider';

export const RootProviders: ParentComponent = (props) => {
  return (
    <ThemeProvider>
      <I18NProvider>
        <MetaProvider>
          {props.children}
        </MetaProvider>
      </I18NProvider>
    </ThemeProvider>
  )
}