"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M7 6l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-5m0 -6h8m-6 0v-5m2 0h-4"}],["path",{"d":"M14 8v-2"}],["path",{"d":"M19 12h2"}],["path",{"d":"M17.5 15.5l1.5 1.5"}],["path",{"d":"M17.5 8.5l1.5 -1.5"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5],"o":[12,12.5],"d":[2.4,0]}];

export const CarCrashIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CarCrashIcon.displayName = "CarCrashIcon";
