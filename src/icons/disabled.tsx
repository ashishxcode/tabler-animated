"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M11 7l0 8l4 0l4 5"}],["path",{"d":"M11 11l5 0"}],["path",{"d":"M7 11.5a5 5 0 1 0 6 7.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,3],"o":[11.46,14.06],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[11,5],[13.5,11]]}];

export const DisabledIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DisabledIcon.displayName = "DisabledIcon";
