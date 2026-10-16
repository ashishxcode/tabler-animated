"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 10.5c0 -.828 .746 -1.5 1.667 -1.5h6.666c.92 0 1.667 .672 1.667 1.5v3c0 .828 -.746 1.5 -1.667 1.5h-6.666c-.92 0 -1.667 -.672 -1.667 -1.5v-3"}],["path",{"d":"M12 7v2"}],["path",{"d":"M10 12v.01"}],["path",{"d":"M14 12v.01"}],["path",{"d":"M4 8v-2a2 2 0 0 1 2 -2h2"}],["path",{"d":"M4 16v2a2 2 0 0 0 2 2h2"}],["path",{"d":"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M16 20h2a2 2 0 0 0 2 -2v-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,8],[10,12.01],[14,12.01],[6,6],[6,18],[18,6],[18,18]]}];

export const BotIdIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BotIdIcon.displayName = "BotIdIcon";
