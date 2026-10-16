"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 5h18"}],["path",{"d":"M3 19h18"}],["path",{"d":"M4 9l2 6h1l2 -6"}],["path",{"d":"M12 9v6"}],["path",{"d":"M16 15v-6h2a2 2 0 1 1 0 4h-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.06},{"fx":"pop","n":[2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[6.5,12],[12,12],[18,12]]}];

export const VipIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
VipIcon.displayName = "VipIcon";
