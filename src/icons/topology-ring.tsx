"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M14 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M13.5 5.5l5 5"}],["path",{"d":"M5.5 13.5l5 5"}],["path",{"d":"M13.5 18.5l5 -5"}],["path",{"d":"M10.5 5.5l-5 5"}]];
const rig: Rig[] = [{"fx":"swing","n":[0,1,2,3,4,5,6,7],"o":[12,3],"a":12}];

export const TopologyRingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TopologyRingIcon.displayName = "TopologyRingIcon";
