# Feedget

<p align="center">
  <img src="https://user-images.githubusercontent.com/86482525/172863565-338b3c4a-507b-4ff3-87ac-02c873d0c046.png">
</p>

## Table of contents✒️

- [Overview](#overview)🎯
  - [Links](#links)🔗
- [My process](#my-process)🧩
  - [Built with](#built-with)🔨
  - [What I learned](#what-i-learned)📝
- [Author](#author)🙋🏻

## Overview🎯

Project built during the NLW Return using React.js, Node.js and React Native.

### Links🔗

- Live Site URL: [Feedget](https://nlw-return-alvaro-j.vercel.app/)

## My process🧩

### Built with🔨

- React.js
- Vite
- TailwindCSS
- Node.js
- Prisma
- React Native

### What I learned📝

- Use <strong>Tailwind classes</strong>:
```tsx
<Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100 transition-all" title="Close feedback form">
	<X weight="bold" className="w-4 h-4"/>
</Popover.Button>
```
- Use Typescript <strong>interfaces</strong> to use props:
```tsx
interface ScreenshotButtonProps {
  onScreenshotTook: (screenshot: string | null) => void;
  screenshot: string | null;
}
```
## Author🙋🏻

- Website - [Álvaro J.](https://www.github.com/alvaro-j/)
