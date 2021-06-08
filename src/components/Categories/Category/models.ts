import {createStore, createEffect, combine} from 'effector'

type Joke = { value: string }
export type CategoryType = { category: string } | string
export const jokeFX = createEffect<CategoryType, Joke>()

jokeFX.use(async (category) => {
    const randomCategory = `random`
    const casualCategory = `random?category=${category}`
    const params = category === randomCategory ? randomCategory : casualCategory
    const url = `https://api.chucknorris.io/jokes/${params}`
    const req = await fetch(url)
    return req.json()
})

export const $jokes = createStore<string>('')
    .on(jokeFX.doneData, (_, {value}) => value)

export const $getJokeStatus = combine({
    loading: jokeFX.pending,
    joke: $jokes
})

$jokes.watch(console.log)

