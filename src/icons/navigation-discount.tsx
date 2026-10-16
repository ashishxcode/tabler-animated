"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16.43 12.603l-4.43 -9.603l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463l1.272 .431"}],["path",{"d":"M16 21l5 -5"}],["path",{"d":"M21 21v.01"}],["path",{"d":"M16 16v.01"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3],"o":[12.5,12.01],"d":[1.8,0],"st":0.05}];

export const NavigationDiscountIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
NavigationDiscountIcon.displayName = "NavigationDiscountIcon";
