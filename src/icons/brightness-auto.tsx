"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5l0 -3.5"}],["path",{"d":"M10 14.5v-3.5a2 2 0 1 1 4 0v3.5"}],["path",{"d":"M10 13h4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.1},{"fx":"spin","n":[1,2],"o":[12,11.75],"a":45,"sym":true}];

export const BrightnessAutoIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrightnessAutoIcon.displayName = "BrightnessAutoIcon";
