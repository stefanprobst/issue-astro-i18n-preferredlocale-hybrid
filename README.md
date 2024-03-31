1. `pnpm run build`
2. `pnpm run preview`
3. open http://localhost:3000
4. see server logs:

```
Preferred locale: undefined
Accept-Language header: de,en-US;q=0.7,en;q=0.3
```

observations:

- when changing "output" mode from `hybrid` to `server`, it correctly prints: "Preferred locale: de"
- when not using any import from `astro:i18n`, i.e. commenting out [this line](./src/layouts/page.astro#L5), it also works in hybrid mode
- changing `src/pages/index.astro` to a `src/pages/index.ts` GET route does not make a difference