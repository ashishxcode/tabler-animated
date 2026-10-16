"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 21h6"}],["path",{"d":"M12 16v5"}],["path",{"d":"M8 5a4 2 0 1 0 8 0a4 2 0 1 0 -8 0"}],["path",{"d":"M8 5c0 6.075 1.79 11 4 11s4 -4.925 4 -11"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[12,10.5],"a":0.06},{"fx":"pop","n":[0,1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,21],[12,18.5],[12,5]]}];

export const GlassChampagneIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GlassChampagneIcon.displayName = "GlassChampagneIcon";
