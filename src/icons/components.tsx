"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12l3 3l3 -3l-3 -3l-3 3"}],["path",{"d":"M15 12l3 3l3 -3l-3 -3l-3 3"}],["path",{"d":"M9 6l3 3l3 -3l-3 -3l-3 3"}],["path",{"d":"M9 18l3 3l3 -3l-3 -3l-3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.06}];

export const ComponentsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ComponentsIcon.displayName = "ComponentsIcon";
