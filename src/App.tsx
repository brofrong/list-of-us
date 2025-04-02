import { createSignal } from 'solid-js';
import PWABadge from './PWABadge.tsx';
import { ThemeChanger } from './app/theme-changer.tsx';
import solidLogo from './assets/solid.svg';
import appLogo from '/favicon.svg';
import { Title } from '@solidjs/meta';

function App() {
  const [count, setCount] = createSignal(0)

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
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p class="read-the-docs">
          Click on the Vite and Solid logos to learn more
        </p>
        <PWABadge />
      </div>
    </>
  )
}

export default App
