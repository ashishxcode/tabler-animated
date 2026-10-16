"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10.29 3h3.42a2 2 0 0 1 1.988 1.78l1.555 14a2 2 0 0 1 -1.988 2.22h-6.53a2 2 0 0 1 -1.988 -2.22l1.555 -14a2 2 0 0 1 1.988 -1.78"}],["path",{"d":"M7.47 12.5l-4.257 -5.019a.899 .899 0 0 1 .69 -1.481h13.09a3 3 0 0 1 3.007 3v3c0 1.657 -1.346 3 -3.007 3"}],["path",{"d":"M7 17h10"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[11.5,12],"a":0.06},{"fx":"pop","n":[2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,17]]}];

export const TeapotIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TeapotIcon.displayName = "TeapotIcon";
