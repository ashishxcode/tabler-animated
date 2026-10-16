"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 5h2m4 0h12"}],["path",{"d":"M3 19h16"}],["path",{"d":"M4 9l2 6h1l2 -6"}],["path",{"d":"M12 12v3"}],["path",{"d":"M16 12v-3h2a2 2 0 1 1 0 4h-1"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,5],[11,19],[6.5,12],[12,13.5],[18,11]]}];

export const VipOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
VipOffIcon.displayName = "VipOffIcon";
