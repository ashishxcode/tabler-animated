"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 17h2"}],["path",{"d":"M20 17h2"}],["path",{"d":"M4 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M16 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M6 11h12"}],["path",{"d":"M12 11v-6"}]];
const rig: Rig[] = [{"fx":"pop","n":[4],"o":[12,11],"a":0.06},{"fx":"pop","n":[0,1,2,3,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[3,17],[21,17],[6,17],[18,17],[12,8]]}];

export const CircuitPushbuttonIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircuitPushbuttonIcon.displayName = "CircuitPushbuttonIcon";
