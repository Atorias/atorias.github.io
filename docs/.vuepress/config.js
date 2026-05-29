import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'Demilich\’ docs',
  description: '记录一些日常开发的文档,woo!',
  base: '/',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '基础知识',
        children: [
          '/foundation/character_set',
          '/foundation/license',
          '/foundation/Linux',
          '/foundation/regex',
          '/foundation/usb',
          '/foundation/vscode',
        ]
      },
      {
        text: '前端开发',
        children: [{
          text: '移动端',
          children: [
            '/font-end/移动端布局',
          ],
        }, {
          text: 'npm',
          children: [
            '/font-end/npm/dependency',
            '/font-end/npm/package',
          ]
        },
        ]
      },
      {
        text: '编译安装',
        children: [
          '/compile/openssh',
          '/compile/openssl',
          '/compile/zlib'
        ]
      },
      {
        text: 'linux',
        children: [
          '/linux_tools/firewalld',
          '/linux_tools/nginx',
          '/linux_tools/systemctl',
          '/linux_tools/redis',
          '/linux_tools/network',
        ]
      },
      {
        text: 'windows',
        children: [
          '/windows/nssm',
          '/windows/windows',
        ]
      },
      {
        text: 'database',
        children: [
          '/database/mysql/mysql',
          '/database/Kingbase/kingbase',
        ]
      },
      {
        text: '常用工具',
        children:[
          '/tools/hashcat',
          '/tools/docker',
          '/tools/git',
          '/tools/markdown',
        ]
      },
      {
        text: '开发语言',
        children: [
          '/languages/php',
          '/languages/assembly',
          '/languages/go',
        ]
      },
      {
        text: '健身计划',
        children: [
          '/fitness/plan',
        ]
      },
    ]
  }),

  bundler: viteBundler(),
})
