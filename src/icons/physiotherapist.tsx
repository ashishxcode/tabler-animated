"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 15l-1 -3l4 -2l4 1h3.5"}],["path",{"d":"M3 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M11 6a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M12 17v-7"}],["path",{"d":"M8 20h7l1 -4l4 -2"}],["path",{"d":"M18 20h3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,4],"o":[14,15],"a":0.06},{"fx":"pop","n":[1,2,3,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[4,19],[12,6],[12,13.5],[19.5,20]]}];

export const PhysiotherapistIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhysiotherapistIcon.displayName = "PhysiotherapistIcon";
