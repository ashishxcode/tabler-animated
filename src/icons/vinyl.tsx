"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 3.937a9 9 0 1 0 5 8.063"}],["path",{"d":"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M19 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M20 4l-3.5 10l-2.5 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,12],[20,4],[17,10]]}];

export const VinylIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
VinylIcon.displayName = "VinylIcon";
