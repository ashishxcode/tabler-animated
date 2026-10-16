"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0"}],["path",{"d":"M2.5 21h8l-4 -7l-4 7"}],["path",{"d":"M14 3l7 7"}],["path",{"d":"M14 10l7 -7"}],["path",{"d":"M14 14h7v7h-7l0 -7"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[11.75,12],"a":0.12}];

export const IconsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
IconsIcon.displayName = "IconsIcon";
