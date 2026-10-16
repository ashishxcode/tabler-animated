"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 6l.01 0"}],["path",{"d":"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8"}],["path",{"d":"M3 13l4 -4a3 5 0 0 1 3 0l4 4"}],["path",{"d":"M13 12l2 -2a3 5 0 0 1 3 0l3 3"}],["path",{"d":"M8 21l.01 0"}],["path",{"d":"M12 21l.01 0"}],["path",{"d":"M16 21l.01 0"}]];
const rig: Rig[] = [{"fx":"draw","n":[2,3],"o":[12,10.67],"st":0.07},{"fx":"pop","n":[1],"o":[12,10],"a":0.04}];

export const SlideshowIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SlideshowIcon.displayName = "SlideshowIcon";
