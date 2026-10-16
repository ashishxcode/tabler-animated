"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 19l-4 -2l-6 3v-13l6 -3l6 3l6 -3v8.5"}],["path",{"d":"M9 4v13"}],["path",{"d":"M15 7v7.5"}],["path",{"d":"M19 16l-2 3h4l-2 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[19,19],"a":0.35,"dl":0.2},{"fx":"flash","n":[0,1,2],"o":[12,12]}];

export const MapBoltIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MapBoltIcon.displayName = "MapBoltIcon";
