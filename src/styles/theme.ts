import { createGlobalStyle } from 'styled-components'
export const lightTheme = { background:'#fff', surface:'#f5f3f2', text:'#171616', muted:'#666161', accent:'#d92332', line:'#e4dfe0' }
export const darkTheme = { background:'#141313', surface:'#211e1e', text:'#fff', muted:'#bcb4b4', accent:'#ff4b56', line:'#393333' }
export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
 *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;background:${({theme})=>theme.background};color:${({theme})=>theme.text};font-family:'DM Sans',sans-serif;-webkit-font-smoothing:antialiased;transition:background .2s,color .2s} button,a{ -webkit-tap-highlight-color:transparent } :focus-visible{outline:2px solid ${({theme})=>theme.accent};outline-offset:4px} ::selection{background:${({theme})=>theme.accent};color:#fff}
 @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{transition:none!important}}
`
