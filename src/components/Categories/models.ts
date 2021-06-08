import {createStore, createEffect, restore, combine} from 'effector'

export const categoriesFx = createEffect<void, string[]>()

categoriesFx.use(async () => {
    const url = `https://api.chucknorris.io/jokes/categories`
    const req = await fetch(url)
    return req.json()
})

export const $categories = createStore<string[]>([])
    .on(categoriesFx.doneData, (_, state) => state)

export const $categoriesError = restore<Error>(categoriesFx.failData, null);

export const $categoriesGetStatus = combine({
    loading: categoriesFx.pending,
    error: $categoriesError,
    categories: $categories,
});

$categories.watch(console.log)
