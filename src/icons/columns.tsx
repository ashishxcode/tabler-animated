"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6l5.5 0"}],["path",{"d":"M4 10l5.5 0"}],["path",{"d":"M4 14l5.5 0"}],["path",{"d":"M4 18l5.5 0"}],["path",{"d":"M14.5 6l5.5 0"}],["path",{"d":"M14.5 10l5.5 0"}],["path",{"d":"M14.5 14l5.5 0"}],["path",{"d":"M14.5 18l5.5 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6,7],"o":[12,12],"a":0.06}];

export const ColumnsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ColumnsIcon.displayName = "ColumnsIcon";
