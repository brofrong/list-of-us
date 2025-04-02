import { createSignal } from 'solid-js';
import PWABadge from './PWABadge';
import { ThemeChanger } from './app/theme-changer';
import solidLogo from './assets/solid.svg';
import appLogo from '/favicon.svg';
import { Title } from '@solidjs/meta';
import { useI18N } from './providers/i18n-provider';
import { LocaleChanger } from './app/language-changer';
import { Button } from './components/ui/button';

function App() {
  const [count, setCount] = createSignal(0)
  const { t } = useI18N();

  return (
    <>
      <Title>Main page</Title>
      <div class='container m-auto'>
        <div class='flex justify-between'>
          <a href="https://vite.dev" target="_blank">
            <img class='size-16' src={appLogo} alt="List of Us logo" />
          </a>
          <a href="https://solidjs.com" target="_blank">
            <img class='size-16' src={solidLogo} alt="Solid logo" />
          </a>
        </div>
        <h1 class='text-4xl text-red-600'>List of Us</h1>
        <div class="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count()}
          </button>
          <ThemeChanger />
        </div>
        <div>
          <div>{t('food').meat}</div>
          <LocaleChanger />
        </div>
        <p class="read-the-docs">
          Click on the Vite and Solid logos to learn more
        </p>
        <PWABadge />
        <Button>test button</Button>
      </div>
    </>
  )
}

export default App
