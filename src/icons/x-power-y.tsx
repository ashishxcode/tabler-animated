"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 3l3 5.063"}],["path",{"d":"M5 12l6 6"}],["path",{"d":"M5 18l6 -6"}],["path",{"d":"M21 3l-4.8 9"}]];
const rig: Rig[] = [{"fx":"flash","n":[0,1,2,3],"o":[13,10.5]}];

export const XPowerYIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
XPowerYIcon.displayName = "XPowerYIcon";
