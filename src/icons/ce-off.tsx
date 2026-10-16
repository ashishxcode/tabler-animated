"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6.53 6.53a6.001 6.001 0 0 0 2.47 11.47"}],["path",{"d":"M21 6a6 6 0 0 0 -5.927 5.061l.927 .939"}],["path",{"d":"M16 12h5"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,12.27],[18.04,9],[18.5,12]]}];

export const CeOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CeOffIcon.displayName = "CeOffIcon";
