import DefaultTheme from 'vitepress/theme'
import type { Theme as ThemeConfig } from 'vitepress'

import './styles/main.css'
import './styles/outline.css'

export const Theme: ThemeConfig = {
    extends: DefaultTheme
}

export default Theme