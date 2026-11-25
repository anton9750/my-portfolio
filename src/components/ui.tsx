import styled from 'styled-components'
export const Eyebrow = styled.p`margin:0 0 20px;color:${({theme})=>theme.accent};font:12px 'Space Mono',monospace;text-transform:uppercase;letter-spacing:.12em;`
export const Heading = styled.h1`max-width:900px;margin:0;font-size:clamp(48px,9vw,112px);line-height:.98;letter-spacing:-.075em;font-weight:600;span{color:${({theme})=>theme.accent}}`
export const Text = styled.p`max-width:620px;color:${({theme})=>theme.muted};font-size:clamp(16px,2vw,20px);line-height:1.7;`
export const ButtonLink = styled.a`display:inline-flex;margin-top:16px;padding:13px 18px;background:${({theme})=>theme.accent};color:#fff;text-decoration:none;font-size:13px;font-weight:600;transition:transform .2s;&:hover{transform:translateY(-2px)}`
export const Card = styled.article`padding:28px;background:${({theme})=>theme.surface};border:1px solid ${({theme})=>theme.line};h2{margin:12px 0;font-size:24px}p{color:${({theme})=>theme.muted};line-height:1.65}a{color:${({theme})=>theme.accent}}`
export const Grid = styled.div`display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px;margin-top:44px;`
