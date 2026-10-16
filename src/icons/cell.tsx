"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 4l-4 2v5l4 2l4 -2v-5l-4 -2"}],["path",{"d":"M12 11l4 2l4 -2v-5l-4 -2l-4 2"}],["path",{"d":"M8 13v5l4 2l4 -2v-5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.06}];

export const CellIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CellIcon.displayName = "CellIcon";
