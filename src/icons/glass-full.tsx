"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 21l8 0"}],["path",{"d":"M12 15l0 6"}],["path",{"d":"M17 3l1 7c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -7h10"}],["path",{"d":"M6 10a5 5 0 0 1 6 0a5 5 0 0 0 6 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,9],"a":0.06},{"fx":"pop","n":[0,1,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,21],[12,18],[12,10]]}];

export const GlassFullIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GlassFullIcon.displayName = "GlassFullIcon";
