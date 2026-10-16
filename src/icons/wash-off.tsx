"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 6l1.721 10.329a2 2 0 0 0 1.973 1.671h10.612c.208 0 .41 -.032 .6 -.092m1.521 -2.472l1.573 -9.436"}],["path",{"d":"M3.486 8.965c.168 .02 .34 .033 .514 .035c.79 .009 1.539 -.178 2 -.5c.461 -.32 1.21 -.507 2 -.5m4.92 .919c.428 -.083 .805 -.227 1.08 -.418c.461 -.322 1.21 -.508 2 -.5c.79 -.008 1.539 .178 2 .5c.461 .32 1.21 .508 2 .5c.17 0 .339 -.015 .503 -.035"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1],"a":0.24,"dl":0.1,"st":0.07,"os":[[11.99,8.5]]}];

export const WashOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WashOffIcon.displayName = "WashOffIcon";
