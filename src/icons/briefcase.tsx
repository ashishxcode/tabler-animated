"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9"}],["path",{"d":"M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"}],["path",{"d":"M12 12l0 .01"}],["path",{"d":"M3 13a20 20 0 0 0 18 0"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3],"o":[12,20],"d":[0,-1.5]}];

export const BriefcaseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BriefcaseIcon.displayName = "BriefcaseIcon";
