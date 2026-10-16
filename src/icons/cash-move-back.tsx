"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 15h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v3"}],["path",{"d":"M12 19h-4a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v2.5"}],["path",{"d":"M15.914 13.417a2 2 0 1 0 -2.447 2.511"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16l-3 3l3 3"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4],"o":[12.5,13.5],"d":[1.8,0],"st":0.05}];

export const CashMoveBackIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CashMoveBackIcon.displayName = "CashMoveBackIcon";
