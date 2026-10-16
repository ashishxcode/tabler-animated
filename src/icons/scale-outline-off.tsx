"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 3h10a4 4 0 0 1 4 4v10m-1.173 2.83a3.987 3.987 0 0 1 -2.827 1.17h-10a4 4 0 0 1 -4 -4v-10c0 -1.104 .447 -2.103 1.17 -2.827"}],["path",{"d":"M11.062 7.062c.31 -.041 .622 -.062 .938 -.062c1.956 0 3.724 .802 5 2.095a142.85 142.85 0 0 0 -2 1.905m-3.723 .288a3 3 0 0 0 -1.315 .71l-2.956 -2.903a6.977 6.977 0 0 1 1.142 -.942"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,9.5]]}];

export const ScaleOutlineOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ScaleOutlineOffIcon.displayName = "ScaleOutlineOffIcon";
