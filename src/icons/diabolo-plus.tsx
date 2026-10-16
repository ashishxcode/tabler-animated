"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"}],["path",{"d":"M4 6v.143a1 1 0 0 0 .048 .307l1.952 5.55l-1.964 5.67a1 1 0 0 0 -.036 .265v.065c0 1.657 3.582 3 8 3c.17 0 .34 -.002 .508 -.006m5.492 -8.994l1.952 -5.55a1 1 0 0 0 .048 -.307v-.143"}],["path",{"d":"M6 12c0 1.105 2.686 2 6 2s6 -.895 6 -2"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16v6"}]];
const rig: Rig[] = [{"fx":"draw","n":[3,4],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.12}];

export const DiaboloPlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DiaboloPlusIcon.displayName = "DiaboloPlusIcon";
