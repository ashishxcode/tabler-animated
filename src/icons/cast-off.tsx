"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 19h.01"}],["path",{"d":"M7 19a4 4 0 0 0 -4 -4"}],["path",{"d":"M11 19a8 8 0 0 0 -8 -8"}],["path",{"d":"M15 19h3a3 3 0 0 0 .875 -.13m2 -2a3 3 0 0 0 .128 -.868v-8a3 3 0 0 0 -3 -3h-9m-3.865 .136a3 3 0 0 0 -1.935 1.864"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"wave","n":[0,1,2,3],"st":0.13,"os":[[3.01,19],[5,17],[7,15],[12.1,12]]}];

export const CastOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CastOffIcon.displayName = "CastOffIcon";
