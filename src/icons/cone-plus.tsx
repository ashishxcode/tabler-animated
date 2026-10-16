"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18.03 12.022l-5.16 -9.515a1 1 0 0 0 -1.74 0l-8.13 14.99v.5c0 1.66 4.03 3.003 9 3.003c.17 0 .34 -.002 .508 -.005"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16v6"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"pop","n":[0],"o":[10.52,11.5],"a":0.12}];

export const ConePlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ConePlusIcon.displayName = "ConePlusIcon";
