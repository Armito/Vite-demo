interface Window {
    helloWorld: () => void
}

declare type TypeOfValue<T, K extends keyof T> = T[K]
