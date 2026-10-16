"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4.01 4.041a3.5 3.5 0 0 0 2.49 5.959c.975 0 1.865 -.357 2.5 -1m.958 -3.044a3.503 3.503 0 0 0 -2.905 -2.912"}],["path",{"d":"M2.5 21h8l-4 -7l-4 7"}],["path",{"d":"M14 3l7 7"}],["path",{"d":"M14 10l7 -7"}],["path",{"d":"M18 14h3v3m0 4h-7v-7"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3,4],"o":[11.75,12],"a":0.12}];

export const IconsOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
IconsOffIcon.displayName = "IconsOffIcon";
