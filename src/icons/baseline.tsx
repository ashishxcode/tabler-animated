"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 20h16"}],["path",{"d":"M8 16v-8a4 4 0 1 1 8 0v8"}],["path",{"d":"M8 10h8"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2],"o":[12,12],"d":[2.4,0],"st":0.06}];

export const BaselineIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BaselineIcon.displayName = "BaselineIcon";
