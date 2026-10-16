"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 21h8"}],["path",{"d":"M12 15v6"}],["path",{"d":"M5.5 5a6.5 2 0 1 0 13 0a6.5 2 0 1 0 -13 0"}],["path",{"d":"M5.75 4.5c-.612 .75 -.75 2 -.75 3.5a7 7 0 0 0 14 0c0 -1.5 -.094 -2.75 -.75 -3.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[12,9],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,21],[12,18]]}];

export const GlassGinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GlassGinIcon.displayName = "GlassGinIcon";
