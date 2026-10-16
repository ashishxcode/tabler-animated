"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7.9 3a.9 .9 0 0 0 -.72 1.44a12.6 12.6 0 0 1 0 15.12a.9 .9 0 0 0 .72 1.44h9a.9 .9 0 0 0 .72 -1.44a12.6 12.6 0 0 1 0 -15.12a.9 .9 0 0 0 -.72 -1.44h-9"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12.4,12],"a":0.12}];

export const LensConcaveIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LensConcaveIcon.displayName = "LensConcaveIcon";
