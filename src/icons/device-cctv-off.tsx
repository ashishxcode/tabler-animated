"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 7h-3a1 1 0 0 1 -1 -1v-2c0 -.275 .11 -.523 .29 -.704m3.71 -.296h13a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-9"}],["path",{"d":"M10.36 10.35a4 4 0 1 0 5.285 5.3"}],["path",{"d":"M19 7v7c0 .321 -.022 .637 -.064 .947m-1.095 2.913a7 7 0 0 1 -12.841 -3.86l0 -7"}],["path",{"d":"M12 14h.01"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[2],"o":[12,14],"a":0.06},{"fx":"pop","n":[0,1,3],"a":0.22,"dl":0.1,"st":0.07,"os":[[12,5],[11.82,14.17],[12.01,14]]}];

export const DeviceCctvOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceCctvOffIcon.displayName = "DeviceCctvOffIcon";
