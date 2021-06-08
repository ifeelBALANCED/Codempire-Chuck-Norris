import {createStore, createEffect, restore, combine} from 'effector'

type IconType = { icon_url: string }
type Store = string | null

export const requestFx = createEffect<void, IconType>()

requestFx.use(async () => {
    const url = `https://api.chucknorris.io/jokes/random`
    const req = await fetch(url)
    return req.json()
})

export const $logo = createStore<Store>(null)
    .on(requestFx.doneData, (_, {icon_url}) => icon_url)

export const $requestError = restore<Error>(requestFx.failData, null);

export const $requestGetStatus = combine({
    loading: requestFx.pending,
    error: $requestError,
    logo: $logo,
});
