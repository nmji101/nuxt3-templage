<template>
  <div>
    <n-menu :options="menuOptions"/>
  </div>
</template>

<script setup lang="ts">
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
  HomeOutline as HomeIcon,
  CalendarOutline as CalendarIcon,
} from '@vicons/ionicons5'

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
        h(
            'a',
            {
              href: '/',
              rel: 'home',
            },
            'Going Home'
        ),
    key: 'go-back-home',
    icon: renderIcon(HomeIcon),
  },
  {
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px'
      }
    }
  },
  {
    label: 'User',
    key: 'user',
    icon: renderIcon(BookIcon),
    children: [
      {
        key: 'userList',
        label: () =>
            h(
                'a',
                {
                  href: '/user/list',
                  rel: 'userList',
                },
                'list'
            ),
        icon: renderIcon(PersonIcon)
      }
    ]
  },
  {
    label: () =>
      h(
        'a',
        {
          href: '/calendar',
          rel: 'calendar',
        },
        'calendar'
      ),
    key: 'calendar',
    icon: renderIcon(CalendarIcon),
  },
  // {
  //   label: 'Dance Dance Dance',
  //   key: 'Dance Dance Dance',
  //   icon: renderIcon(BookIcon),
  //   children: [
  //     {
  //       type: 'group',
  //       label: 'People',
  //       key: 'people',
  //       children: [
  //         {
  //           label: 'Narrator',
  //           key: 'narrator',
  //           icon: renderIcon(PersonIcon)
  //         },
  //         {
  //           label: 'Sheep Man',
  //           key: 'sheep-man',
  //           icon: renderIcon(PersonIcon)
  //         }
  //       ]
  //     },
  //     {
  //       label: 'Beverage',
  //       key: 'beverage',
  //       icon: renderIcon(WineIcon),
  //       children: [
  //         {
  //           label: 'Whisky',
  //           key: 'whisky'
  //         }
  //       ]
  //     },
  //     {
  //       label: 'Food',
  //       key: 'food',
  //       children: [
  //         {
  //           label: 'Sandwich',
  //           key: 'sandwich'
  //         }
  //       ]
  //     },
  //     {
  //       label: 'The past increases. The future recedes.',
  //       key: 'the-past-increases-the-future-recedes'
  //     }
  //   ]
  // }
]

console.log(menuOptions)
</script>

<style scoped>

</style>
