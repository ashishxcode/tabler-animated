"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 10a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"}],["path",{"d":"M13.5 15h.5a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.5"}],["path",{"d":"M16 17a5.698 5.698 0 0 0 4.467 -7.932l-.467 -1.068"}],["path",{"d":"M10 10v.01"}],["path",{"d":"M19 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}]];
const rig: Rig[] = [{"fx":"swing","n":[0,1],"o":[10,5],"a":12},{"fx":"tilt","n":[2,3,4],"o":[15.5,8],"a":7,"dl":0.07}];

export const BellSchoolIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BellSchoolIcon.displayName = "BellSchoolIcon";
