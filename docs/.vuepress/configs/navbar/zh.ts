import type { NavbarConfig } from "@vuepress/theme-default";

export const zh: NavbarConfig = [
    {
        text: 'Smart Picture',
        link: 'https://vaiui.com'
    },
    {
        text: "简介",
        children: [
            {
                text: "Smart Picture 是什么",
                children: [
                    "/base/index.md",
                ],
            },
        ],
    },
];
