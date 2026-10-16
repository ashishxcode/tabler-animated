"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 21h8"}],["path",{"d":"M12 16v5"}],["path",{"d":"M17 5l1 6c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -6"}],["path",{"d":"M7 5a5 2 0 1 0 10 0a5 2 0 1 0 -10 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,10.5],"a":0.06},{"fx":"pop","n":[0,1,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,21],[12,18.5],[12,5]]}];

export const GlassIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GlassIcon.displayName = "GlassIcon";
