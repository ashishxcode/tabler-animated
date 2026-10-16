"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 1 1 8 0"}],["path",{"d":"M12 4v-1"}],["path",{"d":"M13 16l2 5h1l2 -5"}],["path",{"d":"M6 16v3a2 2 0 1 0 4 0v-3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,8.8],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,3.5],[15.5,18.5],[8,18.5]]}];

export const UvIndexIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
UvIndexIcon.displayName = "UvIndexIcon";
