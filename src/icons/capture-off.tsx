"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 16v2a2 2 0 0 0 2 2h2"}],["path",{"d":"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M16 20h2c.554 0 1.055 -.225 1.417 -.589"}],["path",{"d":"M9.87 9.887a3 3 0 0 0 4.255 4.23m.58 -3.416a3.012 3.012 0 0 0 -1.4 -1.403"}],["path",{"d":"M4 8v-2c0 -.548 .22 -1.044 .577 -1.405"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[2],"o":[17.71,19.71],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,18],[18,6],[11.86,12.14],[4.29,6.3]]}];

export const CaptureOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CaptureOffIcon.displayName = "CaptureOffIcon";
