"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 7a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2l0 -10"}],["path",{"d":"M7 7l0 10"}],["path",{"d":"M4 8l0 8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[15,12],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,12],[4,12]]}];

export const VersionsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
VersionsIcon.displayName = "VersionsIcon";
