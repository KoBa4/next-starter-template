import { produce } from 'immer'

export type ThemeType = typeof light

export const light = {
  name: 'light',
  colors: {
    primary: '#e50914',
    secondary: '#b81d24',
    header: '#f5f5f1',
    background: '#eee',
    text: '#333',
    border: '#e0e0e0',
    error: '#f44336',
    success: '#4caf50',
    warning: '#ffeb3b',
    info: '#2196f3',
  },
}

export const dark = produce(light, (draft) => {
  draft.name = 'dark'
  draft.colors.header = '#141414'
  draft.colors.background = '#221f1f'
  draft.colors.text = '#f5f5f5'
  draft.colors.border = '#424242'
})
