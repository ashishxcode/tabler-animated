"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16.908 12.917a5 5 0 1 0 -5.827 -5.819"}],["path",{"d":"M10.116 10.125l-6.529 7.46a2 2 0 1 0 2.827 2.83l7.461 -6.529"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[12,12],"dl":0.25},{"fx":"hop","n":[0,1],"o":[12,12],"d":[0,-2]}];

export const Microphone2OffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Microphone2OffIcon.displayName = "Microphone2OffIcon";
