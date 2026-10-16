"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 21h-2a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v3.5"}],["path",{"d":"M17 17l-4 -2.5l4 -2.5l4 2.5v4.5l-4 2.5l0 -4.5"}],["path",{"d":"M13 14.5v4.5l4 2.5"}],["path",{"d":"M17 17l4 -2.5"}],["path",{"d":"M11 4h2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[17,16.75],[15,18],[19,15.75],[12,4]]}];

export const AugmentedReality2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AugmentedReality2Icon.displayName = "AugmentedReality2Icon";
