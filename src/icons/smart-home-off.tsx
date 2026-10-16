"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7.097 7.125l-2.037 1.585a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12c.559 0 1.064 -.229 1.427 -.598m.572 -3.417v-5.185c0 -.823 -.38 -1.6 -1.03 -2.105l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-1.029 .8"}],["path",{"d":"M15.332 15.345c-2.213 .976 -5.335 .86 -7.332 -.345"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[12,12],"dl":0.25},{"fx":"hop","n":[0,1],"o":[12.03,20.02],"d":[0,-1.8]}];

export const SmartHomeOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SmartHomeOffIcon.displayName = "SmartHomeOffIcon";
