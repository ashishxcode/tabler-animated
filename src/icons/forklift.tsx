"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M12 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M7 17l5 0"}],["path",{"d":"M3 17v-6h13v6"}],["path",{"d":"M5 11v-4h4"}],["path",{"d":"M9 11v-6h4l3 6"}],["path",{"d":"M22 15h-3v-10"}],["path",{"d":"M16 13l3 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[9.5,14],"a":0.06},{"fx":"pop","n":[0,1,2,4,5,6,7],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,17],[14,17],[9.5,17],[7,9],[12.5,8],[20.5,10],[17.5,13]]}];

export const ForkliftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ForkliftIcon.displayName = "ForkliftIcon";
