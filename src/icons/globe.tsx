"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 9a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}],["path",{"d":"M5.75 15a8.015 8.015 0 1 0 9.25 -13"}],["path",{"d":"M11 17v4"}],["path",{"d":"M7 21h8"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12.39,9.48],"a":0.06},{"fx":"draw","n":[0,2,3],"o":[11,13],"dl":0.1,"st":0.1}];

export const GlobeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GlobeIcon.displayName = "GlobeIcon";
