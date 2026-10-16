"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10.184 6.162a2 2 0 0 1 1.816 -1.162h6a2 2 0 0 1 2 2v9m-1.185 2.827a1.993 1.993 0 0 1 -.815 .173h-6a2 2 0 0 1 -2 -2v-7"}],["path",{"d":"M7 7v10"}],["path",{"d":"M4 8v8"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[15,12],[7,12],[4,12]]}];

export const VersionsOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
VersionsOffIcon.displayName = "VersionsOffIcon";
