import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme as ThemeConfig } from 'vitepress'

import './styles/main.css'
import './styles/outline.css'

import {
    NolebaseHighlightTargetedHeading,
} from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'

import {
    NolebaseEnhancedReadabilitiesMenu,
    NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

import type { Options } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { InjectionKey
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

export const Theme: ThemeConfig = {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
            'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
            'layout-top': () => [
                h(NolebaseHighlightTargetedHeading),
            ],
        })
    },
    enhanceApp({ app }) {
        app.provide(InjectionKey, {} as Options)
    },
}

export default Theme