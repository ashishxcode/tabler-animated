"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"}],["path",{"d":"M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"}],["path",{"d":"M11 11l1 -1v4"}]];
const rig: Rig[] = [{"fx":"spin","n":[0,1,2],"o":[12,12],"a":360}];

export const RepeatOnceIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RepeatOnceIcon.displayName = "RepeatOnceIcon";
