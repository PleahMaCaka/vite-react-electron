export interface IState {
    isShowing: boolean
    isDev: boolean
}

export const state: IState = {
    isShowing: true,
    isDev: process.env.VITE_DEV_SERVER_URL !== undefined
}