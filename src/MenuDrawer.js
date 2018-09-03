import React from 'react';

import Link from 'next/link';

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerSubtitle,
} from 'rmwc/Drawer';
import { ListDivider, SimpleListItem } from 'rmwc/List';
import { Typography } from 'rmwc/Typography';
import { Icon } from 'rmwc';
import meta from './meta';

const MenuDrawer = ({ isMobile, open, onClose }) => {
  return (
    <Drawer onClose={onClose} open={open} modal={isMobile}>
      <DrawerHeader>
        <DrawerTitle theme="primary">{meta.title}</DrawerTitle>
        <DrawerSubtitle>{meta.subtitle}</DrawerSubtitle>
      </DrawerHeader>

      <DrawerContent>
        <Link href="/plan">
          <SimpleListItem
            graphic={<Icon icon="list_alt" theme="primary" />}
            text="Meal Plan"
          />
        </Link>
        <Link href="/recipes">
          <SimpleListItem
            graphic={<Icon icon="restaurant" theme="secondary" />}
            text="Recipes"
          />
        </Link>
        <Link href="/calculator">
          <SimpleListItem graphic="dialpad" text="Calculator" />
        </Link>

        <ListDivider />

        <Link href="/about">
          <SimpleListItem graphic="info" text="About" />
        </Link>
        <Link href="/">
          <SimpleListItem graphic="help_outline" text="Help" />
        </Link>

        <Typography use="overline" tag="div" className="px-4">
          Advanced
        </Typography>
        <ListDivider />

        <Link href="/sync">
          <SimpleListItem graphic="compare_arrows" text="Sync" />
        </Link>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;
