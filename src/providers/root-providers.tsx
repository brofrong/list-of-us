import { ParentComponent } from "solid-js"
import { ThemeProvider } from "./theme-provider"
import { MetaProvider } from "@solidjs/meta"

export const RootProviders: ParentComponent = (props) => {
  return (
    <ThemeProvider>
      <MetaProvider>
        {props.children}
      </MetaProvider>
    </ThemeProvider>
  )
}