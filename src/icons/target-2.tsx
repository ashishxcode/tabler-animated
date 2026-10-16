"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 21l-1.74 -6"}],["path",{"d":"M7 21l1.74 -6"}],["path",{"d":"M12 4v-1"}],["path",{"d":"M14 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M18 10a6 6 0 1 0 -12 0a6 6 0 0 0 12 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[4],"o":[12,10],"a":0.06},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[16.13,18],[7.87,18],[12,3.5],[12,10]]}];

export const Target2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Target2Icon.displayName = "Target2Icon";
